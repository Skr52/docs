export const data = {
  "key": "v-a30865d4",
  "path": "/home/ms/desc.html",
  "title": "自我介绍",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1615887811000,
    "contributors": [
      {
        "name": "S.kr",
        "email": "w123456789",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "home/ms/desc.md"
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
