### 防抖函数
短时间内多次触发同一事件，只执行最后一次，或者只执行最开始的一次，中间的不执行。

``` js
// 防抖函数
function debounce(fn, delay) {
  let Time = ''
  // 闭包   
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