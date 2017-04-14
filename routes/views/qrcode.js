var keystone = require('keystone');
var Player = keystone.list('Player');

exports.post = async function (req, res) {
    console.log(req.params);
    console.log(req.files);
    console.log(req.body);

    var _id = req.params._id;


}