# 限制输入类型

```js
// 使用方法
<el-input @keyup="btKeyUp"></el-input>

// 限制特殊符号
function btKeyUp(e) {
  e.target.value = e.target.value.replace(
    /[`~@#$%^&_()\_\-+=<>:"{}|\/;'\\[\]·~！@#￥%……&_（）——\-+={}|《》：“”【】、；‘’]/g,
    ""
  )
}

// 限制字母中文数字
function btKeyUp2(e) {
  e.target.value = e.target.value.replace(/[^a-za-z0-9]/g, "")
}

// 限制整数和小数
function btKeyUp3(e) {
  e.target.value = e.target.value.match(/^\d*(\.?\d{0,2})/g)[0] || null;
}

```
