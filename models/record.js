var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Record = new keystone.List('Record', {
    label: '匹配记录',
    map: {
        name: 'toUser'
    }
});

Record.add({
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
    user: {
        label: '该记录的主人',
        type: Types.Relationship,
        ref: 'Player',
        required: true,
        initial: true
    },
    toUser: {
        label: '匹配的对象',
        type: Types.Relationship,
        ref: 'Player'
    },
    createDt: {
        label: '创建日期',
        type: Date,
        default: Date.now
    },
    updateDt: {
        label: '更新日期',
        type: Date,
        default: Date.now
    }
});

Record.register();