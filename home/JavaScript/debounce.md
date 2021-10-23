# 防抖函数

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