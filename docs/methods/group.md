# 将一维数组按照指定的数量进行分组。返回二维数组

```js

function group (array, subGroupLength) {
  var index = 0;
  var newArray = [];

  while (index < array.length) {
    newArray.push(array.slice(index, index += subGroupLength));
  }

  return newArray;
}

const arr = [{ a: 1, b: 2}, {a: 2, b: 3}, { a: 3, b: 4}]

const groupData = group(arr, 2)

// 返回的数据结构
// [ [{ a: 1, b: 2}, {a: 2, b: 3}], [{ a: 3, b: 4}] ]

```
