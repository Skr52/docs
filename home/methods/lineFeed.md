# 数据换行转换

```js
handleLineFeed(dataSource, Marker) {
    if (dataSource) {
      let repeats = "";
      const originStr = dataSource;
      if (originStr.indexOf("\\n") !== -1) {
        repeats = originStr.replace(/\\n/g, Marker);
      } else {
        repeats = originStr.replace(/\n/g, Marker);
      }
       dataSource = repeats;
    }
    return dataSource;
}

// 数据源
const dataSource = '今天很好\n333'

const newStr = handleLineFeed(dataSource, '\n')

```