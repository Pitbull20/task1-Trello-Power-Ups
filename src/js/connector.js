const Promise = window.TrelloPowerUp.Promise;

function fetchWeatherData(t) {
    return Promise.all([t.card("coordinates"), t.get("card", "shared")]).spread(
        (card, cache) => {
            if (!card.coordinates) {
                return 0;
            }
            const { latitude, longitude } = card.coordinates;
            const location = `${latitude}:${longitude}`;

            if (
                !cache &&
                cache.location === location &&
                cache.expires >= Date.now() &&
                cache.weatherData
            ) {
                return cache.weatherData;
            }
            return fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,windspeed_10m`
            )
                .then((response) => {
                    return response.json();
                })
                .then((weatherData) => {
                    if (t.memberCanWriteToModel("card")) {
                        t.set("card", "shared", {
                            location: location,
                            expires: Date.now() + 1000 * 60 * 30,
                            weatherData,
                        });
                    }
                    return weatherData;
                });
        }
    );
}

function getBadgesForWeatherData(weatherData) {
    if (weatherData == null) {
        return [];
    }
    return [
        {
            title: "Temperature",
            text:
                "🌡 " +
                weatherData.hourly.temperature_2m[0].toString() +
                weatherData.hourly_units.temperature_2m.toString(),
        },
        {
            title: "Wind Speed",
            text:
                "💨 " +
                weatherData.hourly.windspeed_10m[0].toString() +
                weatherData.hourly_units.windspeed_10m.toString(),
        },
    ];
}

window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        return fetchWeatherData(t).then((weatherData) => {
            const badges = getBadgesForWeatherData(weatherData);
            return badges;
        });
    },
    "card-detail-badges": (t) => {
        return fetchWeatherData(t).then((weatherData) => {
            const badges = getBadgesForWeatherData(weatherData);
            return badges;
        });
    },
    "show-settings": (t) => {
        return t.popup({
            title: "Weather settings",
            url: "./settings.html",
        });
    },
});
