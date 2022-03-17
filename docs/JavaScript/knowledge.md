# 知识点

## 作用域
指的是变量的查找范围，分为 全局作用域 和 函数作用域

+ 全局作用域预编译
 - 创建 GO 对象
 - 找变量声明 将变量名作为 GO对象的属性名，值为 undefined
 - 找函数声明 值赋予函数体

例子：

```js

  function get() {

  }

  var a = 123


  // GO 对象
  // const GO = {
  //   a: undefined,
  //   get: function () {}
  // }
  
```

+ 函数作用域预编译
 - 创建 AO 对象
 - 找形参和变量声明，将变量和形参作为AO对象的属性名，值为 undefined
 - 实参和形参统一
 - 找函数声明，如果函数声明跟变量声明一致，会覆盖变量的声明

例子：
```js

  function fn (a, c) {
    console.log(a) // function a () {}
    var a = 123
    console.log(a) // 123
    console.log(c) // function c () {}
    function a () {}
    if (false) {
      var d = 1
    }
    console.log(d) // undefined
    console.log(b) // undefined
    var b = function () {}
    console.log(b) // function () {}
    function c () {}
    console.log(c) // function c () {}
  }

  fn(1, 2)

  // AO对象
  // const AO = {
  //    a: undefined, 1 function a () {}
  //    c: undefined, 1 function c () {}
  //    d: undefined,
  //    b: undefined
  // }

```

## 作用域链
在 js引擎中有个隐式属性 [[scope]], 里面存储着在 全局作用域 和 函数作用域 预编译生成的 GO 对象和 AO对象。如果在自身 GO 对象或 AO 对象找到变量，就使用变量，没有就继续像上查找，直到 GO 对象中。在 GO 对象中没有找到就返回 undefined。 类似于原型链查找过程。

## 防抖函数

指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间

``` js
// func是用户传入需要防抖的函数
// wait是等待时间
function debounce(fn, wait) {
  // 缓存一个定时器id
  let timer = 0
  // 这里返回的函数是每次用户实际调用的防抖函数
  // 如果已经设定过定时器了就清空上一次的定时器
  // 开始一个新的定时器，延迟执行用户传入的方法
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
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
指连续触发事件但是在 n 秒中只执行一次函数。即 2n 秒内执行 2 次... 。节流如字面意思，会稀释函数的执行频率。
始终会在一段时间内执行函数，防抖并不会执行函数

``` js
function throttle(func, wait) {
    let previous = 0;
    return function() {
      let now = Date.now();
      let context = this;
      let args = arguments;
      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
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