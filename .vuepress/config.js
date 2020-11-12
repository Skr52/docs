module.exports = {
    title: '博客',
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
                title: '工具类',
                collapsable: false,
                children: ['/home/utils/currentDate']
            },
            {
                title: '面试题',
                collapsable: false,
                children: ['/home/ms/ms']
            }
        ],
        sidebarDepth: 2,
        lastUpdated: 'Last Updated'
    },
    markdown: {
        lineNumbers: true
    }
}