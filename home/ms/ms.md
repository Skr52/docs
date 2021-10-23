# 前端面试题

## HTML

### link 和 @import的区别

* link 是XHTML标签，不存在兼容问题，@import 是在 css 2.1 提出的，低版本浏览器不支持。
* link 可以加载 css, javascript 文件的， @import 只能加载 css 文件。
* link 加载的内容是与页面同步加载，@import 需要网页完全加载完后再进行加载。

## CSS
### BFC特性
`BFC` 就是一个隔离独立的容器，里面的子元素不会影响外面的元素。

`BFC` 是怎么产生的 ?

--------------------------------------------------------------------
1. 设置元素：display: block, list-item, table, flex, inline-block;

2. 设置元素属性：float值不为none, position值为absolute, fixed, overflow值不为visible;

`BFC` 解决了什么问题 ?

--------------------------------------------------------------------
1. 清除元素内部的浮动。
2. 外边距合并问题。
3. 制作右侧自适应盒子问题。


### CSS选择器优先级

``` js
!important > 行内样式 > id > class > 标签 > 通配符 > 浏览器自定义或继承

// 权限值
行内样式：1000
ID选择器：100
class选择器：10
HTML标签选择器：1
```

### 盒子模型
1. 标准盒模型
2. IE盒模型

两种模型之间区别

--------------------------------------------------------------------

1. 标准盒模型内容的宽和高等于他实际内容的宽和高。
2. IE盒模型内容的宽和高包括了`padding` 和 `border`。

### CSS position定位（relative、absolute、fixed、sticky）特点
reletive 相对定位
* 相对于自身的位置进行定位，不会脱离文档流，占用位置。
* 不影响其他元素布局。
* 不影响元素本身特性（无论区块元素还是内联元素会保留其原本特性）

aosolute 绝对定位
* 脱离文档流
* 使行内元素支持宽高（让行内元素具备块内元素特性）
* 使块内元素默认宽根据内容决定（让块内元素具备行内元素特性）
* 如果父级元素具备（relative、absolute、fixed）定位，根据父级元素进行偏移，没有就根据浏览器窗口来进行偏移。
* 如果父级元素中有多个具备定位模式，根据自己最近的父级元素偏移。

fixed 固定定位
* 脱离文档流
* 使行内元素支持宽高（让行内元素具备块内元素特性）
* 使块内元素默认宽根据内容决定（让块内元素具备行内元素特性）
* 根据浏览器窗口进行偏移。不受浏览器滚动条的影响依然固定在位置中。

sticky 粘性定位
* 在没有达到指定的时候，已 `relative` 进行定位。到达了指定文字，已 `fixed` 进行定位。
* `left` 和 `right` 一同指定时 `left` 的优先级大于 `right`。 `top` 和 `bottom` 一同指定时 `top` 的优先级大于 `bottom`。

## JS

### JS 中有哪些类型
基本类型有 7 种：`String`、`Number`、`Boolean`、`null`、`undefined`、`symbel`、`bigInt`。

引用类型有 1 种：`Object`。

### JS 中有哪些内置函数（数据封装类对象）
分别有：`Object`、`Array`、`Boolean`、`String`、`Number`、`Date`、`Function`、`RegExp`、`Error`

### JS 中什么是作用域

某个变量或函数能够访问的范围，区域。

### JS 中什么是作用域链

凡是定义一个函数，那么这个函数就构成一个作用域，如果函数中还有函数，那么在这个作用域中就又诞生-个作用域，
将这样的作用域列出来，就可以有一个：函数内指向函数外的链式结构。

作用域链变量访问规则：看变量在当前作用域中，是否有变量的定义或赋值，如果有，则直接使用，没有，则到外面一层的
作用域中查看，如果有，则停止查找，使用外面一层作用域中定义的变量或值，如果还是没有，则继续往外查找，直到
最外层的全局中。全局中也没有定义，则会报错：xx is not defined;（函数在定义的时候，作用域就已经确定。）

### JS 中什么是闭包

有权访问另一个函数作用域中的变量的函数；一般情况就是在一个函数中包含另一个函数。

闭包有什么特性 ?

-------------------------------------------------------------------
1. 隐藏变量，避免全局污染
2. 可以读取函数内部的变量


### JS 中 new 操作符进行了什么操作
1. 创建一个空对象；
2. 将新对象的原型指向构造函数的原型；
3. 将新对象作为 this 上下文，执行构造函数；
4. 判断构造函数的返回值类型，如果是值类型，返回新对象。如果是引用类型，返回构造函数的引用类型。

代码演示

--------------------------------------------------------------------

``` js
  function createNew(fn, ...rest) {
      // 创建一个新对象
      const obj = {}
      // 将新对象的原型链接到构造函数的原型
      obj._proto_ = fn.prototype

      // 通过 call, apply 方式将 obj 作为 this, 执行构造函数代码
      const result = fn.call(obj, ...rest)

      // 判断构造函数返回值，并返回其值
      let resultObj = ''
      if (typeof result === 'object') {
          resultObj = result
      } else {
          resultObj = obj
      }

      return resultObj
  }

  function Fn(name) {
      this.name = name
  }

  const fn2 = createNew(fn, '张三')

  console.log(fn2)

```

### JS 中事件传播的机制是怎么样的
事件捕获：最先接受到事件的元素（document）依次往下传递有注册事件的元素（目标元素）

事件冒泡：当前的事件源会逐步的向上传递事件，直到最开始接受的元素（document）

### JS 中什么是DOM事件流
1. 事件捕获阶段
2. 处于目标阶段
3. 事件冒泡阶段


## 框架

### Vue

#### Vue 中 router 和 route 区别是什么
`router` 代表全局的路由实例，在这其中可以进行路由跳转操作。

`route` 代表当前路由信息对象，在这其中包含了当前URL 解析到的信息，匹配到的 route records 路由记录

#### Vue 中路由传参数有几种方式

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

### React