window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        console.log("------------------------------");
        return t.card("coordinates").then((card) => {
            return [
                {
                    name: "Test!!",
                },
            ];
        });
    },
});
