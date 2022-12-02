console.log("Hello world");
window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        console.log("Word");
        return [];
        return t
            .card("all")
            .then(function (card) {
                console.log("CARD");
                console.log(card);
                console.log("-----------------------");
                return [
                    {
                        text: card.idShort,
                    },
                ];
            })
            .catch((e) => {
                console.log(e);
            });
    },
});
console.log(true);
