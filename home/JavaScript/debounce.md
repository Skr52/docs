# 防抖函数

指的是设置一个定时器，并设置开始定时的时间。如果在这个定时时间之前就触发了，就销毁这个定时器，直到没有再定时时间之前触发。其主要用途于监听浏览器滚动事件，输入框的 `input` 的事件。主要特性是优化多次触发事件中的浏览器性能。

``` js
function debounce(fn, delay) {
  let Time = ''
  return function () {
    if (Time) {
        clearTimeout(Time)
    }
    Time = setTimeout(fn, delay)
  }
}

// 调用
function fn () {
    console.log('2s执行')
}

window.onscroll = debounce(fn, 2000) // 返回一个函数

```