var keystone = require('keystone'),
    Types = keystone.Field.Types;
var Word = new keystone.List('Word', {
    map: {
        name: 'title'
    },
    label: '课件'
});
Word.add({
    title: {
        label: '课件',
        type: String,
        initial: true,
        type: String,
        required: true,
        default: '课件标题'
    },
    summary: {
        label: '简述',
        type: String,

    },
    image: {
        label: '预览图片',
        type: Types.CloudinaryImages,
        folder: 'images/'
    },
    link: {
        label: '课件的链接',
        type: String,
        required: true,
        default: '例如:http:xxx.pdf'
    }
});
Word.register();