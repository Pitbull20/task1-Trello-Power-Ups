window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        return t.card("coordinates").then((card) => {
            console.log(card);
            if (card.coordinates) {
                const { latitude, longitude } = card.coordinates;
                console.log(`%%API_KEY%%`);
                fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
                )
                    .then((response) => {
                        return response.json();
                    })
                    .then((weatherData) => {
                        console.log(weatherData);
                        return [
                            {
                                text:
                                    weatherData.hourly.temperature_2m[0][0] + "°C",
                            },
                        ];
                    })
                    .catch((e) => {
                        console.log(false);
                        console.log(e);
                    });
            }
            return [];
        });
    },
});
