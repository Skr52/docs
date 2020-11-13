### 手机号隐藏中间四位

``` js
var tel = "13122223333";
 
var reg = /^(\d{3})\d{4}(\d{4})$/;
 
tel = tel.replace(reg, "$1****$2");
 
console.log(tel);

```