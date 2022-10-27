# 文件下载

```js
// 下载文件 - 后台返回 url 形式

/**
 * @param {string} url 链接地址
 * @param {string} fileName 文件名
 * 通过链接下载文件
 */
export function downloadWithUrl(url, fileName) {
  const aLink = document.createElement("a")
  aLink.style.display = "none"
  aLink.href = url
  aLink.download = fileName
  aLink.target = "_parent"
  document.body.appendChild(aLink)
  aLink.click()
  document.body.removeChild(aLink) // 下载完成移除元素
}

// 下载文件 - 后台返回 文件流 形式

/**
 * @description: 文件下载
 * @param {Blob} blob 参数1：blob对象
 * @param {string} name 参数2：文件名称，包含文件后缀
 * @return {*}
 */
export const download = (blob, name) => {
  const link = document.createElement("a") //创建一个a标签
  const url = URL.createObjectURL(blob) //将blob文件对象通过URL.createObjectURL()方法转为为url
  link.href = url //为a标签设置href属性，并赋值为url
  link.download = name //定义下载的文件名，文件名要包含后缀哟！如'导出EXCEL.xlsx'
  document.body.appendChild(link) //把a标签放在body上
  link.click() //出发a标签点击下载
  document.body.removeChild(link) //在body中移除这个a标签
  URL.revokeObjectURL(url) //释放blob对象
}

//  文件流下载的进阶用法：（使用 FileReader 文件对象在进行下载前做判断！）

export const exportData = async () => {
  const { data } = await axios.post("接口地址", data("参数"), {
    responseType: true,
  })
  //在下载前先读取
  const f = new FileReader() //创建一个文件对象
  f.readAsText(data) // 以文本的方式读取 文件
  //执行 onload方法
  f.onload = () => {
    // 这里使用 try catch 方式捕获异常
    try {
      const result = JSON.parse(f.result) // f.result为读取结果，如果 JSON.parse()报错，说明后端返回的数据是 正常的 文件流  在catch中进行下载
      ElMessage.error(lang(result.msg || "导出失败！")) // 没有报错，说明返回的不是文件流，需要提醒用户，弹出提示 此时的 result 为后端返回的数据，msg为后端返回的提示内容
    } catch (error) {
      download(data, "导出.xlsx")
    }
  }
}
```

[参考链接](https://juejin.cn/post/7027431356443394084)
