window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        console.log("------------------------------");
        return t.card("coordinates").then((card) => {
            console.log(card.name);
            console.log(card.url);
            return [];
        });
    },
});
