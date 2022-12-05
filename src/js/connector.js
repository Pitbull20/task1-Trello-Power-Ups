window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        return t.card("all").then((card) => {
            console.log(card);
            return [
                {
                    idShort: 1,
                    name: "Не тест!",
                },
            ];
        });
    },
});
