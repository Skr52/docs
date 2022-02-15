# Vue

## Vue 中 router 和 route 区别是什么
`router` 代表全局的路由实例，在这其中可以进行路由跳转操作。

`route` 代表当前路由信息对象，在这其中包含了当前URL 解析到的信息，匹配到的 route records 路由记录

## Vue 中路由传参数有几种方式

1. params 形式 `this.$router.push({ name: 'home', params: { age: 10 } })`

> 在路由配置中，路径参数以冒号：表示。

> const router = [ <br>
   // 动态段以冒号开始
    <br>
    {
        name: 'home',
        path: '/home/:age'
    }
    <br>
] 

注意：如果提供了 path， params 会被忽略。

> // `params` 不能与 `path` 一起使用 <br> router.push({ path: '/details', params: { id: '001' } }) // -> /details

获取方式：`this.$route.params` 方式

2. query 形式 `this.$router.push({ name: 'home', query: { age: 10 } })`, 
这个不用在路由配置中加冒号，他是直接拼接到 url 地址上面，`home?age=10`。

获取方式：`this.$route.query` 方式

3. hash 形式 `this.$router.push({ name: 'home', hash: '#cad' })`

获取方式：`this.$route.hash.slice(1)` 方式
