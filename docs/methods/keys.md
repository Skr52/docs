# 关键字匹配并且高亮

``` js

function keywordscolorful(str, key) {
  const reg = new RegExp("(" + key + ")", "g");
  const newstr = str.replace(reg, "<font style='background:#ff0;'>$1</font>");
  return newstr;
}

const keysStr = keywordscolorful("123456", "2");

console.log(keysStr)

// "1<font style='background:#ff0;'>2</font>3456"

```