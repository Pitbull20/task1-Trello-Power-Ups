console.log("Hello world");
console.log(window.TrelloPowerUp);
window.TrelloPowerUp.initialize({
    "card-badges": function (t, opts) {
        return [];
    },
});
