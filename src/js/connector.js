console.log("Hello world");

window.TrelloPowerUp.initialize({
    "card-buttons": function (t, opts) {
        console.log(true);
        return [];
    },
});
