# 时间格式化

``` js
function formatDate(fmt, date) {
	let ret;
	date = date + '';
	// 解决IOS日期出现NAN问题
    date = date.replace(/\-/g, "/");
	if (date.indexOf('GMT') == -1) {
		date = date.replace(/\T/g, " ");
	}
	if (date.indexOf('.') != -1) {
		date = date.substr(0, date.indexOf('.'));
	}
	date = new Date(date);
	const opt = {
		"Y+": date.getFullYear().toString(), // 年
		"m+": (date.getMonth() + 1).toString(), // 月
		"d+": date.getDate().toString(), // 日
		"H+": date.getHours().toString(), // 时
		"M+": date.getMinutes().toString(), // 分
		"S+": date.getSeconds().toString() // 秒
		// 有其他格式化字符需求可以继续添加，必须转化成字符串
	};
	for (let k in opt) {
		ret = new RegExp("(" + k + ")").exec(fmt);
		if (ret) {
			fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
		};
	};
	return fmt;
}
```