export const themeData = {
  "sidebar": [
    {
      "title": "导读",
      "collapsable": false,
      "children": [
        "/home/home"
      ]
    },
    {
      "title": "JS",
      "collapsable": false,
      "children": [
        "/home/JavaScript/knowledge",
        "/home/JavaScript/TS"
      ]
    },
    {
      "title": "Vue",
      "collapsable": false,
      "children": [
        "/home/Vue/standard",
        "/home/Vue/v3"
      ]
    },
    {
      "title": "Git",
      "collapsable": false,
      "children": [
        "/home/git/git"
      ]
    },
    {
      "title": "工作记录",
      "collapsable": false,
      "children": [
        "/home/day-record/record"
      ]
    },
    {
      "title": "常用网站",
      "collapsable": false,
      "children": [
        "/home/href/href"
      ]
    },
    {
      "title": "面试题",
      "collapsable": false,
      "children": [
        "/home/ms/ms",
        "/home/ms/desc"
      ]
    },
    {
      "title": "常用方法",
      "collapsable": false,
      "children": [
        "/home/methods/currentDate",
        "/home/methods/formatDate",
        "/home/methods/hidePhone",
        "/home/methods/unique",
        "/home/methods/strNull"
      ]
    }
  ],
  "sidebarDepth": 2,
  "lastUpdated": "更新时间",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
