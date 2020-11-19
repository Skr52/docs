### 问题

1. `new Array(5).fill({})` 创建对象，创建的对象时引用类型的

``` js
let nowArray = new Array(5).fill({ a: 2 })

nowArray[0].a = 333

console.log(nowArray)

// 输出结果，a的值都是一样的
// [
//     {
//         a: 333
//     },
//     {
//         a: 333
//     },
//     {
//         a: 333
//     },
//     {
//         a: 333
//     },
//     {
//         a: 333
//     },
// ]
```
解决方案 `Array.from` 创建对象

``` js
let nowsArray = Array.from({length : 5}, () => { return { b : 33 } })

nowsArray[0].b = 333

console.log(nowsArray)

// 输出结果
// [
//    {b: 333}
//    {b: 33}
//    {b: 33}
//    {b: 33}
//    {b: 33}
// ]

```