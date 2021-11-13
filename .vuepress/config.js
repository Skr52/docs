module.exports = {
    title: 'S.kr',
    description: '不求每日阅读，但求一日阅读',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    port: 8917,
    // dest: 'docs',
    base: '/',
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
                '/home/JavaScript/throttle',
                '/home/JavaScript/TS'
            ]
        },
        {
            title: 'Vue',
            collapsable: false,
            children: ['/home/Vue/standard', '/home/Vue/v3']
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
            children: [
                '/home/methods/currentDate',
                '/home/methods/formatDate',
                '/home/methods/hidePhone',
                '/home/methods/unique',
                '/home/methods/strNull',
                '/home/methods/lineFeed'
            ]
        },
        ],
        sidebarDepth: 2,
        lastUpdated: '更新时间'
    },
    markdown: {
        lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4']
    }
}