import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-815a8d3a","/home/home.html",{"title":"介绍"},["/home/home","/home/home.md"]],
  ["v-12da40d2","/home/day-record/record.html",{"title":"问题"},["/home/day-record/record","/home/day-record/record.md"]],
  ["v-9e6c418a","/home/git/git.html",{"title":"常用命令"},["/home/git/git","/home/git/git.md"]],
  ["v-13ca9b7e","/home/href/href.html",{"title":"网站"},["/home/href/href","/home/href/href.md"]],
  ["v-2ab42fc6","/home/JavaScript/knowledge.html",{"title":"知识点"},["/home/JavaScript/knowledge","/home/JavaScript/knowledge.md"]],
  ["v-d7586122","/home/JavaScript/TS.html",{"title":"TypeScript"},["/home/JavaScript/TS","/home/JavaScript/TS.md"]],
  ["v-453acc06","/home/methods/currentDate.html",{"title":"获取当前时间"},["/home/methods/currentDate","/home/methods/currentDate.md"]],
  ["v-1f1bf5a0","/home/methods/formatDate.html",{"title":"时间格式化"},["/home/methods/formatDate","/home/methods/formatDate.md"]],
  ["v-692800be","/home/methods/hidePhone.html",{"title":"手机号隐藏中间四位"},["/home/methods/hidePhone","/home/methods/hidePhone.md"]],
  ["v-653aee15","/home/methods/strNull.html",{"title":"JSON数据null转成空字符串"},["/home/methods/strNull","/home/methods/strNull.md"]],
  ["v-fb05c0d8","/home/methods/unique.html",{"title":"数组去重"},["/home/methods/unique","/home/methods/unique.md"]],
  ["v-a30865d4","/home/ms/desc.html",{"title":"自我介绍"},["/home/ms/desc","/home/ms/desc.md"]],
  ["v-32b616a1","/home/ms/ms.html",{"title":"前端面试题"},["/home/ms/ms","/home/ms/ms.md"]],
  ["v-76444748","/home/Vue/standard.html",{"title":"书写规范"},["/home/Vue/standard","/home/Vue/standard.md"]],
  ["v-6dfe5c9c","/home/Vue/v3.html",{"title":"Vue3新特性"},["/home/Vue/v3","/home/Vue/v3.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
