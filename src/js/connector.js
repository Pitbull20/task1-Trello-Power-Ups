window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        return t.card("coordinates").then((card) => {
            console.log(card);
            if (card.coordinates) {
                const { latitude, longitude } = card.coordinates;
                // //28c85c86a948ee6429cc6013996d70ac
                // fetch(
                //     `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=%%API_KEY%%`
                // )
                //     .then((response) => {
                //         return response.json();
                //     })
                //     .then((weatherData) => {
                //         console.log(weatherData);
                //         return [
                //             {
                //                 text: weatherData.wind.speed.toString(),
                //             },
                //         ];
                //     })
                //     .catch((e) => {
                //         console.log(e);
                //     });
                return [
                    {
                        icon: "../image/219243-200.png",
                        text: latitude.toString(),
                    },
                    {
                        text: longitude.toString(),
                    },
                ];
            }
            return [];
        });
    },
    "card-badges": (t, opts) => {
        return t.get("name").then((name) => {
            console.log(name);
        });
    },
});
