window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        return t.card("coordinates").then((card) => {
            console.log(card);
            if (card.coordinates) {
                const { latitude, longitude } = card.coordinates;
                console.log(`%%API_KEY%%`);
                fetch(
                    `http://api.weatherapi.com/v1/current.json?key=50c4334b0bdb44bd9de55306220712&q=London&aqi=no`
                )
                    .then((response) => {
                        return response.json();
                    })
                    .then((weatherData) => {
                        console.log(weatherData);
                        return [];
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
