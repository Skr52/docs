# 获取当前时间

``` js
function getCurrentDate() {
    const now = new Date() // 获取当前日期
    const Y = now.getFullYear()
    const M = (now.getMonth() + 1).toString().padStart(2, '0') // 英文中月份是从12月份一月的，要加一
    const D = (now.getDate()).toString().padStart(2, '0') // 个位数填充 0
    const h = (now.getHours()).toString().padStart(2, '0')
    const m = (now.getMinutes()).toString().padStart(2, '0') 
    const s = (now.getSeconds()).toString().padStart(2, '0')

    return `${Y}-${M}-${D} ${h}:${m}:${s}`
}

const currentDate = getCurrentDate()

```