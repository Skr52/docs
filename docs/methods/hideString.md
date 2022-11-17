# 字符串隐藏中间部分

## 手机号隐藏中间部分

``` js

var tel = "13122223333";
var reg = /^(\d{3})\d{4}(\d{4})$/;
tel = tel.replace(reg, "$1****$2");
console.log(tel);

```

## 用户昵称隐藏中间部分

``` js

/**
 * @description: 
 * @param {*} str 要进行隐藏的变量
 * @param {*} frontLen 前面需要保留几位
 * @param {*} endLen 后面需要保留几位
 * @return {*}
 */
function hiddenString(str, frontLen, endLen) {
	var len = str.length - frontLen - endLen;
	var xing = '';
	for (var i = 0; i < len; i++) {
		xing += '*';
	}
	return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
}

//使用示例
hiddenString('17684797790',3,4);  // 176****7790
hiddenString('1024147867@qq.com',4,5); // 1024********q.com

```