var keystone = require('keystone');
var Player = keystone.list('Player');
exports.index =  function(req, res) {
    console.log('index route');
    if (req.session.player.finishData) {
        res.render('index', {
            player: req.session.player
        });
    } else {
        res.redirect('/signup');
    }

}
