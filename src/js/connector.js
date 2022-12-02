console.log("Hello world");

window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        console.log(t);
        return [];
    },
});
