# 前端面试题

## HTML

## JS

### JS中有哪些内置类型
基本类型有 7 种：`String`、`Number`、`Boolean`、`null`、`undefined`、`symbel`、`bigInt`。

引用类型有 1 种：`Object`。

## CSS
### 什么是BFC
`BFC` 就是一个隔离独立的容器，里面的子元素不会影响外面的元素。

`BFC` 是怎么产生的

--------------------------------------------------------------------
1. 设置元素：display: block, list-item, table, flex, inline-block;

2. 设置元素属性：float值不为none, position值为absolute, fixed, overflow值不为visible;

`BFC` 解决了什么问题

--------------------------------------------------------------------
1. 清除元素内部的浮动。
2. 外边距合并问题。
3. 制作右侧自适应盒子问题。

## 框架

### Vue

### React