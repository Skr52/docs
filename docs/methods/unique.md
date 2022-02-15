# 数组去重

## 数组单元素去重

```js

const arr = [1,2,3,4,5,6,6,6]
const arrayUnique = [...new Set(arr)]

```

## 数组里面有对象去重

```js
const arr = [{id: 2}, {id: 2}, {id: 3}, {id: 3}, {id:3}]

function arrayUnique(arr, keyName) {
    let hash = {}
    return arr.reduce((pre, cur) => {
        hash[cur[keyName]] ? "" : (hash[cur[keyName]] = true && pre.push(cur))
        return pre
    }, [])
}

const arrayUnique = arrayUnique(arr, 'id')

```