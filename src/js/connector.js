console.log("Hello world");
console.log(window.TrelloPowerUp);
window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        return t.card("all").then((card) => {
            console.log("CARD");
            console.log(card);
            console.log("-----------------------");
            return [
                {
                    text: card.idShort,
                },
            ];
        });
    },
});
