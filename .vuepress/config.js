module.exports = {
    title: 'S.kr',
    description: '记录文档',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    port: 8917,
    desc: './dist',
    themeConfig: {
        sidebar: [{
                title: '导读',
                collapsable: false,
                children: ['/home/home']
            },
            {
                title: 'JS',
                collapsable: false,
                children: [
                    '/home/JavaScript/debounce',
                    '/home/JavaScript/throttle'
                ]
            },
            {
                title: 'Vue',
                collapsable: false,
                children: ['/home/Vue/standard']
            },
            {
                title: 'Git',
                collapsable: false,
                children: ['/home/git/git']
            },
            {
                title: '工作记录',
                collapsable: false,
                children: ['/home/dayrecord/record']
            },
            {
                title: '常用网站',
                collapsable: false,
                children: ['/home/href/href']
            },
            {
                title: '面试题',
                collapsable: false,
                children: ['/home/ms/ms']
            },
            {
                title: '工具类',
                collapsable: false,
                children: ['/home/utils/currentDate', '/home/utils/formatDate', '/home/utils/hidePhone']
            },
        ],
        sidebarDepth: 2,
        lastUpdated: 'Last Updated'
    },
    markdown: {
        lineNumbers: true
    }
}