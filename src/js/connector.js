TrelloPowerUp.initialize({
    'current-board': function(t, options){
    t.board('id')
        .then(function (name) {
            console.log(name);
    });
});
