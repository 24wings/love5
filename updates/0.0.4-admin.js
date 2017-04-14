var keystone = require('keystone'),
    User = keystone.list('User');

exports = module.exports = function(done) {

    new User.model({
        name: { first: 'Admin', last: 'User' },
        email: '1',
        password: '1',
        canAccessKeystone: true
    }).save(done);

};