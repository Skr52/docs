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

指的是设置一个定时器，并设置定时时间。如果在定时时间之前就触发了，就销毁这个定时器，直到没有再定时时间之前触发。其主要用途于监听浏览器滚动事件，输入框的 `input` 的事件。主要特性是优化多次触发事件中的浏览器性能。

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