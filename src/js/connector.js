window.TrelloPowerUp.initialize({
    "board-buttons": function (t, opts) {
        return t.board("all").then((board) => {
            console.log(board);
            return [];
        });
    },
});
