function fetchWeatherData(t) {
    return t.card("coordinates").then((card) => {
        if (card.coordinates) {
            const { latitude, longitude } = card.coordinates;
            return fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,windspeed_10m`
            )
                .then((response) => {
                    return response.json();
                })
                .then((weatherData) => {
                    return weatherData;
                })
                .catch((e) => {
                    console.log(false);
                    console.log(e);
                });
        }
        return null;
    });
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
                weatherData.hourly_units.windspeed_10m.toString() +
                "\n",
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
});
