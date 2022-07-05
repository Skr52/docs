# JS

## JS 中有哪些数据类型
基本类型有 7 种：`String`、`Number`、`Boolean`、`null`、`undefined`、`symbel`、`bigInt`。

引用类型有 1 种：`Object`。

## JS 中严格模式的特点
1. 全局变量必须声明 例如：n = 20 
2. this 指向 undefined
3. 函数参数不能重复命名 例如 function fn(x, x, y) {}

## JS 中 new 操作符进行了什么操作
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

## JS 中事件传播的机制是怎么样的
事件捕获：最先接受到事件的元素（document）依次往下传递有注册事件的元素（目标元素）

事件冒泡：当前的事件源会逐步的向上传递事件，直到最开始接受的元素（document）

## JS 中什么是DOM事件流
1. 事件捕获阶段

2. 处于目标阶段

3. 事件冒泡阶段

## 浏览器的渲染机制

1. 创建 DOM 树

2. 构建渲染树、CSS渲染

3. 布局渲染，每个元素的大小、位置

4. 绘制渲染树、再画出来

重绘：改变元素的样式属性例如 color、background-color 等属性发生改变时

重排（回流）：改变元素的规格尺寸、布局，隐藏改变时

代价：耗时，导致浏览器卡慢


## Cookie 和 localStorage 和 sessionStorage 的区别

1. 存储大小

`Cookie` 存储的大小为 4k

`localStorage` 和 `sessionStorage` 存储的大小为 5M

2. 有效时间

`Cookie` 设置的过期时间之前一直有效，即使窗口和浏览器关闭

`localStorage` 存储持久数据，浏览器关闭后数据不丢失除非手动删除本地缓存

`sessionStorage` 数据在当前浏览器窗口关闭后销毁数据

3. 数据与服务器的交互方式

`Cookie` 的数据会自动带给服务器端，服务器端也可以写入 `Cookie` 到客户端

`localStorage` 和 `sessionStorage` 不会自动把数据带给服务器端，仅在本地存储

4. 应用场景

* 标记用户与跟踪用户行为的情况，推荐使用 `Cookie`

* 适合长期保存在本地的数据（令牌），推荐使用 `localStorage`

* 敏感账号一次性登录，推荐使用 `sessionStorage`