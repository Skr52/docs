# 防抖函数

某个事件多次触发，并且里面进行计算或发起请求，必然会影响浏览器的性能。通过设置一个定时器，在多少秒中执行，如果再这其中持续触发，就销毁这个定时器，重新开启定时器。直到其中没有持续触发就执行定时器。

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