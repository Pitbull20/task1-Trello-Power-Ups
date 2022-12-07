window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        return t.card("coordinates").then((card) => {
            console.log(card);
            if (card.coordinates) {
                const { latitude, longitude } = card.coordinates;
                //28c85c86a948ee6429cc6013996d70ac
                fetch(
                    `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=%%APP_ID%%`
                )
                    .then((response) => {
                        return response.json();
                    })
                    .then((weatherData) => {
                        console.log(weatherData);
                        return [
                            {
                                text: weatherData.wind.speed.toString(),
                            },
                        ];
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }
            return [];
        });
    },
});
