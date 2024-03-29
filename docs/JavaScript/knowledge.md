# 知识点

## 作用域

指的是变量与函数可访问的范围

## 作用域链

一般取变量的值，会从当前作用域中取值。如果当前作用域取不到值，会从外层作用域中取值，直到查到全局作用域中。
这么一个查找过程形成的链条就叫做作用域链

## 防抖函数

指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间

主要应用场景：输入框进行搜索

``` js
// fn 传入的函数
// delay 触发时间
function debounce(fn, delay) {
  // 缓存一个定时器id
  let timer = 0
  // 这里返回的函数是每次用户实际调用的防抖函数
  // 如果已经设定过定时器了就清空上一次的定时器
  // 开始一个新的定时器，延迟执行用户传入的方法
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = 0
    }, delay)
  }
}

// 不难看出如果用户调用该函数的间隔小于wait的情况下，上一次的时间还未到就被清除了，并不会执行函数

// 调用
function fn () {
    console.log('2s执行')
}

window.onscroll = debounce(fn, 2000) // 返回一个函数

```

## 节流函数
指连续触发事件但是在 n 秒中只执行一次函数。即 2n 秒内执行 2 次... 。节流如字面意思，会稀释函数的执行频率。始终会在一段时间内执行函数，防抖并不会执行函数

``` js
function throttle(fn, delay) {
    let timer = 0
    return function (...args) {
      if (timer) return
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = 0
      }, delay)
    }
}

content.onmousemove = throttle(count,1000);

```

## 强缓存与协商缓存
强缓存

1. 在设置的时间内，不会发起请求，直接取的是本地的资源。
2. 主要由两个字段其中一个字段决定，`expires` 和 `cache-control(优先级更高)`, 前者配置的是秒数，后者配置的是毫秒。

`expires`

我们只需设置响应头里 expires 的时间为 当前时间 + 30s 就行了
```js
app.use(async (ctx) => {
  const url = ctx.request.url
  if (url === '/') {
    // 访问根路径返回index.html
    ctx.set('Content-Type', 'text/html')
    ctx.body = await parseStatic('./index.html')
  } else {
    const filePath = path.resolve(__dirname, `.${url}`)
    // 设置类型
    ctx.set('Content-Type', parseMime(url))
    // 设置 Expires 响应头
    const time = new Date(Date.now() + 30000).toUTCString()
    ctx.set('Expires', time)
    // 设置传输
    ctx.body = await parseStatic(filePath)
  }
})

```
请求的资源响应头多了一个 `expires` 字段

![expires](https://segmentfault.com/img/remote/1460000041424555)

并且，在30s内，我们刷新之后，看到请求都是走 memory ，这意味着，通过 expires 设置强缓存的时效是30s，这30s之内，资源都会走本地缓存，而不会重新请求

![expires](https://segmentfault.com/img/remote/1460000041424556)

`cache-control`

其实 `cache-control` 跟 `expires` 效果差不多，只不过这两个字段设置的值不一样而已，前者设置的是 秒数 ，后者设置的是 毫秒数

``` js
app.use(async (ctx) => {
  const url = ctx.request.url
  if (url === '/') {
    // 访问根路径返回index.html
    ctx.set('Content-Type', 'text/html')
    ctx.body = await parseStatic('./index.html')
  } else {
    const filePath = path.resolve(__dirname, `.${url}`)
    // 设置类型
    ctx.set('Content-Type', parseMime(url))
    // 设置 Cache-Control 响应头
    ctx.set('Cache-Control', 'max-age=30')
    // 设置传输
    ctx.body = await parseStatic(filePath)
  }
})

```

前端页面响应头多了 cache-control 这个字段，且30s内都走本地缓存，不会去请求服务端

![cache-control](https://segmentfault.com/img/remote/1460000041424558)

协商缓存

与 强缓存 不同的是， 强缓存 是在时效时间内，不走服务端，只走本地缓存；而 协商缓存 是要走服务端的，如果请求某个资源，去请求服务端时，发现 命中缓存 则返回 304 ，否则则返回所请求的资源。

`Last-Modified` 和 `If-Modified-Since`

* 第一次请求资源时，服务端会把所请求的资源的 最后一次修改时间 当成响应头中 Last-Modified 的值发到浏览器并在浏览器存起来
* 第二次请求资源时，浏览器会把刚刚存储的时间当成请求头中 If-Modified-Since 的值，传到服务端，服务端拿到这个时间跟所请求的资源的最后修改时间进行比对
* 比对结果如果两个时间相同，则说明此资源没修改过，那就是 命中缓存 ，那就返回 304 ，如果不相同，则说明此资源修改过了，则 没命中缓存 ，则返回修改过后的新资源

``` js
// 获取文件信息
const getFileStat = (path) => {
  return new Promise((resolve) => {
    fs.stat(path, (_, stat) => {
      resolve(stat)
    })
  })
}

app.use(async (ctx) => {
  const url = ctx.request.url
  if (url === '/') {
    // 访问根路径返回index.html
    ctx.set('Content-Type', 'text/html')
    ctx.body = await parseStatic('./index.html')
  } else {
    const filePath = path.resolve(__dirname, `.${url}`)
    const ifModifiedSince = ctx.request.header['if-modified-since']
    const fileStat = await getFileStat(filePath)
    console.log(new Date(fileStat.mtime).getTime())
    ctx.set('Cache-Control', 'no-cache')
    ctx.set('Content-Type', parseMime(url))
    // 比对时间，mtime为文件最后修改时间
    if (ifModifiedSince === fileStat.mtime.toGMTString()) {
      ctx.status = 304
    } else {
      ctx.set('Last-Modified', fileStat.mtime.toGMTString())
      ctx.body = await parseStatic(filePath)
    }
  }
})

```

第一次请求时，响应头中：

![cache-control](https://segmentfault.com/img/remote/1460000041424559)

第二次请求时，请求头中：

![cache-control](https://segmentfault.com/img/remote/1460000041424560)

由于资源并没修改，则命中缓存，返回304：

![cache-control](https://segmentfault.com/img/remote/1460000041424561)

此时修改一下 index.css

``` js

.box {
  width: 500px;
  height: 300px;
  background-image: url('../image/guang.jpg');
  background-size: 100% 100%;
  /* 修改这里 */
  color: #333;
}

```

然后我们刷新一下页面， index.css 变了，所以会 没命中缓存 ，返回200和新资源，而 guang.jpg 并没有修改，则 命中缓存 返回304：

![cache-control](https://segmentfault.com/img/remote/1460000041424562)

`Etag` 和 `If-None-Match`

其实 Etag，If-None-Match 跟 Last-Modified，If-Modified-Since 大体一样，区别在于：

* 后者是对比资源最后一次修改时间，来确定资源是否修改了
* 前者是对比资源内容，来确定资源是否修改

通过读取资源内容，转成hash值来对比资源内容

```js

const crypto = require('crypto')

app.use(async (ctx) => {
  const url = ctx.request.url
  if (url === '/') {
    // 访问根路径返回index.html
    ctx.set('Content-Type', 'text/html')
    ctx.body = await parseStatic('./index.html')
  } else {
    const filePath = path.resolve(__dirname, `.${url}`)
    const fileBuffer = await parseStatic(filePath)
    const ifNoneMatch = ctx.request.header['if-none-match']
    // 生产内容hash值
    const hash = crypto.createHash('md5')
    hash.update(fileBuffer)
    const etag = `"${hash.digest('hex')}"`
    ctx.set('Cache-Control', 'no-cache')
    ctx.set('Content-Type', parseMime(url))
    // 对比hash值
    if (ifNoneMatch === etag) {
      ctx.status = 304
    } else {
      ctx.set('etag', etag)
      ctx.body = fileBuffer
    }
  }
})

```

总结：

![cache-control](https://segmentfault.com/img/remote/1460000041424563)

[原文链接](https://segmentfault.com/a/1190000041424550)


## `ajax` 和 `axios` 和 `fetch` 三者的区别

### `ajax`
1. 基于原生请求 api `XMLHttpRequest`，主要由 `jquery` 封装而来
2. 多个请求之间如果有先后关系的话，就会出现回调地狱

### `axios`
1. 基于 `Promise` 方式来封装 `XMLHttqRequest` api 请求的库，可以使用 `Promise` api 方式来解决回调地狱问题
2. 拦截请求和响应、转换请求和响应数据、取消请求、自动转换JSON数据等一些操作，减少操作量
3. 语法简洁，更加语义化

### `fetch`
1. 基于 `Promise` 方式来实现的原生请求 api， 脱离了XHR，是ES规范里新的实现方式
2. `fetch` 只对网络请求报错，对400，500都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，`fetch` 才会被 reject。
3. `fetch` 默认不会带 cookie，需要添加配置项： fetch(url, {credentials: 'include'})
4. `fetch` 不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费
5. `fetch` 没有办法原生监测请求的进度，而XHR可以

## ES6 的箭头函数与普通的函数区别
1. 语法上箭头函数书写更加简洁如： `() => {}` 。 普通函数需要写 `function () {} `
2. `this` 指向问题：箭头函数的 `this` 取的是父级作用域的 `this`, 并且 `bind`, `call`, `apply` 方法不能改变箭头函数的 `this`。普通函数的 `this` 指向调用者，`bind`, `call`, `apply` 可以改变 `this` 指向。
3. 箭头函数没有 `arguments` 对象，可以用 `...res` 剩余参数代替。普通函数有
4. 箭头函数不能作为构造函数使用，并且箭头函数没有原型对象。普通函数有
5. 箭头函数不能在对象里面的方法如 `const obj = { a: 2, getName: () => { return this.a }} this 指向 window`
6. 箭头函数在动态获取 `this` 函数中也不能使用如：`const b = 2;  btn.addEventLister('click', () => { return this.b }) this 指向 window` 

## TCP 三次握手和四次挥手

`TCP` 指的是连接协议，`HTTP` 指的是传输协议

三次握手指的是进行连接，具体过程：
1. 客户端询问服务器端是否可以发包
2. 服务器端接收到询问的信息后，在发送给客户端可以发包
3. 客户端接收到服务器信息后，在进行发包/传输内容

四次挥手指的是断开连接，具体过程：
1. 客户端告诉服务器端，我这边可以断开连接了
2. 服务器端接收到客户端信息后，告诉客户端（知道了）我等下就断开连接（有些信息还没有发送完，需服务器端发送完后，在告诉客户端发送完了，可以断开连接了）
3. 服务器端发送信息到客户端，告诉客户端断开连接了
4. 客户端接受到服务器端信息后，客户端告诉服务端可以断开连接了

## JS 的垃圾回收机制
当函数执行完成后，内部的变量数据没有被引用和赋值的时候就会自动清除。

例子：
``` js

// 销毁例子
function fn () {
  const a = 10
  console.log(a)

  const b = { x: 200 }
  console.log(b)
}

// 执行 fn 后， a 和 b 的数据将会被销毁（回收）
fn() 


// 不会被销毁例子
function fn2() {
  const b = {x: 200}
  window.obj = b
}

// 执行 fn2 后， b的值不会被销毁，因为 window 中引用了 b的数据
fn2()


// 闭包的诞生
function fn3() {
  // data 不会被销毁
  const data = {}
  return {
    get: (key) => {
      return data[key]
    },
    set: (key, val) => {
      data[key] = val
    }
  }
}

const { get, set } = fn3()
set('name', 33)
get('name')
```
内存泄漏：

变量的数据在非预期的范围中，没有被销毁，造成内存过高情况。

闭包严格来说不是内存泄漏的情况，因为闭包是预期的情况，内部的数据一定是不能销毁的，不然闭包就使用不了。

垃圾回收机制算法：

1. 标记计数（之前）

当变量被引用的时候，就给变量计数为 1, 如果还有其他的地方引用变量，就再加 1。 一直到变量没有被引用就计数为0，在清空

例子
```js

function fn () {
  let b = 1
  let a = b // b 计数为 1
  b = 0 // b 计数为 0 ，清空
}
```