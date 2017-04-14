var keystone = require('keystone');
var swig =  require('swig');
swig.setDefaults({ cache: false });
// keystone.set('cloudinary config', 'cloudinary://api_key:api_secret@cloud_name' );


// init app  ,such as static_file,view_engine,mongo
keystone.init({
    'name': '七天恋人后台管理',
    'brand': '七天恋人后台管理',
    // 'favicon':'public/favicon.ico',
    'less': 'public',
    'static': ['public', 'node_modules'],
    'views': 'templates/views',
    'view engine': 'html',
    'custom engine':swig.renderFile,
    'auto update': true,
    'mongo': 'mongodb://120.77.169.182/platform',
    'cloudinary config': 'cloudinary://688229757297621:D-7VrFqtn6ayg6ItFNXSm52jcS0@dnf1ydl7w',
    'embedly api key': 'adb1c865a9bc489dad997a5f5bddcd6a',
    'session': true,
    'auth': true,
    'user model': 'User',
    'cookie secret': 'my secret',
    'port':80
});


// load model
require('./models');
// load routes
keystone.set('routes', require('./routes'));

keystone.start();