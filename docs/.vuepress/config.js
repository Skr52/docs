module.exports = {
    lang: 'zh-CN',
    title: 'S.kr',
    description: '不求每日阅读，但求一日阅读',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    port: 8917,
    base: '/',
    themeConfig: {
        sidebar: [{
                title: 'JS',
                collapsable: false,
                children: [
                    '/JavaScript/knowledge',
                    {
                        title: 'TypeScript',
                        path: 'https://www.dengwb.com/typescript/'
                    }
                ]
            },
            {
                title: 'Vue',
                collapsable: false,
                children: ['/Vue/v3']
            },
            {
                title: 'Git',
                collapsable: false,
                children: ['/git/git']
            },
            {
                title: '工作记录',
                collapsable: false,
                children: [
                    '/day-record/01',
                    '/day-record/02',
                    '/day-record/03'
                ]
            },
            {
                title: '常用网站',
                collapsable: false,
                children: ['/href/href']
            },
            {
                title: '面试题',
                collapsable: false,
                children: [
                    '/ms/desc',
                    '/ms/ms-html/html',
                    '/ms/ms-css/css',
                    '/ms/ms-js/js',
                    '/ms/ms-vue/vue',
                ]
            },
            {
                title: '常用方法',
                collapsable: false,
                children: [
                    '/methods/currentDate',
                    '/methods/formatDate',
                    '/methods/hidePhone',
                    '/methods/unique',
                    '/methods/strNull',
                    '/methods/keys'
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