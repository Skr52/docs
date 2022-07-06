# 文件下载

```js
// 下载文件 -链接形式

/**
 * @param {string} url
 * @param {string} fileName
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

```
