# JSON数据null转成空字符串

```js
// 源数据
const dataSource = {
    id: 3,
    age: null,
    sex: '男',
    data: [
        {
            id: 5,
            label: null,
            value: '22'
        }
    ]
}

function strNull(data) {
  for (let key in data) {
      if (data[key] === null) {
          data[key] = ''
      } else {
          
          if (Array.isArray(data[key])) {
              data[key] = data[key].map(item => {
                  return strNull(item)
              })
          }

          if (typeof data[key] === 'object') {
              data[key] = strNull(data[key])
          }
      }
  }

  return data
}

const newDataSource = strNull(dataSource)

```