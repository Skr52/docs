import hope from "vuepress-theme-hope"

export default hope.config({
  title: "S.kr",
  description: "不求每日阅读，但求一日阅读",
  dest: "./dist",
  port: 8099,
  themeConfig: {
    logo: "/img/logo.png",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",
    sidebar: [
      {
        title: "JS",
        collapsable: false,
        children: [
          "/JavaScript/knowledge",
          {
            title: "TypeScript",
            path: "https://www.dengwb.com/typescript/",
          },
        ],
      },
      {
        title: "Vue",
        collapsable: false,
        children: ["/Vue/v3"],
      },
      {
        title: "Git",
        collapsable: false,
        children: ["/git/git"],
      },
      {
        title: "工作记录",
        collapsable: false,
        children: ["/day-record/01", "/day-record/02", "/day-record/03"],
      },
      {
        title: "常用网站",
        collapsable: false,
        children: ["/href/href", "/href/utils"],
      },
      {
        title: "面试题",
        collapsable: false,
        // "/ms/desc",
        children: [
          "/ms/ms-html/html",
          "/ms/ms-css/css",
          "/ms/ms-js/js",
          "/ms/ms-vue/vue",
        ],
      },
      {
        title: "常用方法",
        collapsable: false,
        children: [
          "/methods/formatDate",
          "/methods/hideString",
          "/methods/unique",
          "/methods/keys",
          "/methods/group",
          "/methods/file-download",
          "/methods/validator",
        ],
      },
    ],
    footer: {
      display: true,
      content: `<div style="font-size: 13px;">
        <span style="color: #3f3f3f; font-weight: 600;">本网站由</span>
        <a href='https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral'><img src='/upy_logo.png'align='absmiddle' width='65px' height='30px' /></a>
        <span style="color: #3f3f3f; font-weight: 600;">提供CDN加速/云存储服务</span>
      </div>`,
    },
    mdEnhance: {
      demo: true,
    },
  },
})
