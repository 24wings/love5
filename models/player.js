var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Player = new keystone.List('Player', {
    label: '参与者',
    map: {
        name: 'name'
    }
});

Player.add({
    accessToken: {
        label: '访问touken',
        type: String
    },
    country: {
        label: '国家',
        type: String
    },
    avatar: {
        label: '头像',
        type: String
    },
    openid: {
        label: '微信OpenId',
        type: String
    },
    finishData: {
        label: '是否已经填写完数据',
        type: Types.Boolean,
        default: false
    },
    name: {
        label: '姓名',
        type: String,
        required: true,
        index: true,
    },
    phone: {
        label: '手机号',
        type: String
    },
    weixinName: {
        label: '微信昵称',
        type: String
    },
    gender: {
        label: '性别',
        type: Types.Select,
        options: '男, 女'
    },
    age: {
        label: '年龄',
        type: String
    },
    city: {
        label: '城市',
        type: String
    },
    signature: {
        label: '个性签名',
        type: String,
        many: true
    },
    intersting: {
        label: '兴趣',
        type: String,
        many: true
    },
    like: {
        label: '爱好',
        type: String,
        many: true
    },
    movie: {
        label: '电影',
        type: String
    },
    loveSong: {
        label: '最喜欢的歌曲',
        type: String
    },
    // 男神女神
    god: {
        label: '男神,女神',
        type: String
    },
    book: {
        label: '书籍',
        type: String
    },
    ta: {
        label: '它',
        type: String
    },
    words: {
        label: '单词',
        type: String
    },
    qrcode: {
        label: '二维码',
        type: String
    },
    reason: {
        label: '原因',
        type: String
    },
    filterAge: {
        label: '期望的年龄',
        type: String
    },
    filterCity: {
        label: '期望的城市',
        type: String
    },
    // record: { label: '当前的记录', type: Types.Relationship, ref: 'Record' },
    state: {
        label: '记录的状态',
        type: Types.Select,
        numeric: true,
        options: [{
                value: 0,
                label: '未匹配'
            },
            {
                value: 1,
                label: '正在匹配'
            },
            {
                value: 2,
                label: '匹配成功'
            },
            {
                value: 3,
                label: '匹配失败'
            }
        ]
    },
    toUser: {
        label: '匹配的对象',
        type: Types.Relationship,
        ref: 'Player',
        filters: {
            state: 1
        }
    },
    createDt: {
        label: '创建日期',
        type: Date,
        default: Date.now
    },
    updateDt: {
        label: '更新时间',
        type: Date,
        default: Date.now
    },
});

Player.register();