### 节流函数
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