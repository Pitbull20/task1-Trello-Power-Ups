window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        console.log("------------------------------");
        return t.card("coordinates").then((card) => {
            if (card.coordinates) {
                return [
                    {
                        text: card.coordinates.latitude,
                    },
                ];
            } else {
                return [];
            }
        });
    },
});
