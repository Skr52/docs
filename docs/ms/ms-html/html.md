# HTML

## link 和 @import的区别

* link 是XHTML标签，不存在兼容问题，@import 是在 css 2.1 提出的，低版本浏览器不支持。
* link 可以加载 css, javascript 文件的， @import 只能加载 css 文件。
* link 加载的内容是与页面同步加载，@import 需要网页完全加载完后再进行加载。

## 常见的行内元素、块级元素有哪些
1. 块级元素：h1-h6、div、p、ui、li、dt、dd
块级元素特性：独立占一行，元素的宽和高可以设置

2. 行内元素：span、a、img、input、strong
行内元素特性：可以与其他元素处于一行上，元素的宽、高、上边距、下边距、不能设置。