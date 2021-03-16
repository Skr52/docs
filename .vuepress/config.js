module.exports = {
    title: 'S.kr',
    description: '博客',
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
                children: ['/home/day-record/record']
            },
            {
                title: '常用网站',
                collapsable: false,
                children: ['/home/href/href']
            },
            {
                title: '面试题',
                collapsable: false,
                children: [
                    '/home/ms/ms',
                    '/home/ms/desc'
                ]
            },
            {
                title: '常用方法',
                collapsable: false,
                children: ['/home/methods/currentDate', '/home/methods/formatDate', '/home/methods/hidePhone']
            },
        ],
        sidebarDepth: 2,
        lastUpdated: 'Last Updated'
    },
    markdown: {
        lineNumbers: true
    }
}