export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/img/logo.png",
    "actionText": "阅读 →",
    "actionLink": "/home/home",
    "features": [
      {
        "title": "HTML",
        "details": "文档结构"
      },
      {
        "title": "CSS",
        "details": "文档样式"
      },
      {
        "title": "JS",
        "details": "文档交互"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2021-WPR"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1634804069000,
    "contributors": [
      {
        "name": "skr",
        "email": "w123456789",
        "commits": 2
      },
      {
        "name": "Skr",
        "email": "1848784292@qq.com",
        "commits": 1
      },
      {
        "name": "hzyq0006",
        "email": "67930242@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
