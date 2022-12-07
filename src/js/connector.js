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
                console.log("Cash Hit!");
                return cache.weatherData;
            }
            console.log("Cash Miss!", location);
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
                })
                .catch((e) => {
                    console.log(false);
                    console.log(e);
                });
        }
    );
}

function getWetherBadges(t) {
    t.card("coordinates").then((card) => {
        if (!card.coordinates) {
            return [];
        }
        return [
            {
                dynamic: (t) => {
                    return fetchWeatherData(t).then((weatherData) => {
                        return [
                            {
                                title: "Temperature",
                                text:
                                    "🌡 " +
                                    weatherData.hourly.temperature_2m[0].toString() +
                                    weatherData.hourly_units.temperature_2m.toString(),
                                refresh: 30 * 60,
                            },
                        ];
                    });
                },
            },
            {
                dynamic: (t) => {
                    return fetchWeatherData(t).then((weatherData) => {
                        return [
                            {
                                title: "Wind Speed",
                                text:
                                    "💨 " +
                                    weatherData.hourly.windspeed_10m[0].toString() +
                                    weatherData.hourly_units.windspeed_10m.toString(),
                                refresh: 30 * 60,
                            },
                        ];
                    });
                },
            },
        ];
    });
}

window.TrelloPowerUp.initialize({
    "card-badges": function (t) {
        return getWetherBadges(t);
    },
    "card-detail-badges": (t) => {
        return getWetherBadges(t);
    },
});
