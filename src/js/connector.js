window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        return t.card("all").then((card) => {
            console.log(card.name);
            return [];
        });
    },
});
