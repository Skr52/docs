# TypeScript 

## TypeScript中的类型

在 `Typescript`中类型总共有 7 中 类型

| 类型   | 描述 | 例子 | 
| :---: | :---: | :---: | 
| string   | 字符串 |  'hellor' | 
| number   | 数值 |  123 | 
| boolean   | 布尔值 |  true | 
| any   | 任意类型 |  * | 
| unknown   | 未知类型, 但不能随意赋值给其他变量 |  * | 
| void   | 空值（undefined） |  function fn () : void {} | 
| never   | 没有值 |  function fn () : never {} | 
| object   | 任意的js对象 |  let k: {age: strign, b: strign} | 
| array   |  任意的js数组 |  let j: string[]; let a: Array<类型> | 
| tuple   |  元组，固定的数组长度 | let f: [strign, number] |
| enum   |  枚举 | enum nameEnum { a, b } |