# 问题

## 1. uni.app 开发微信公众号 `h5` 网页项目，发布更新后，微信浏览器网页存在缓存问题
Tips

------------------------------------------------------------------------------
最近在发布项目时 收到反馈说, 文件已经更新上去了 但是浏览器显示的还是以前的页面

解决方案

* 设置html页面不让浏览器缓存： 在index.html文件中增加标签禁止浏览器缓存
* 设置webpack打包生成的文件名规则：配置vue.config.js

``` js
// index.html 文件中增加 meta 标签

<meta http-equiv='Cache-Control' content='no-cache, no-store, must-revalidate' />
<meta http-equiv='Pragma' content='no-cache' />
<meta http-equiv='Expires' content='0' />


// 在项目根目录创建 vue.config.js 文件， 添加 打包 规则

const Timestamp = new Date().getTime(); //当前时间为了防止打包缓存不刷新，所以给每个js文件都加一个时间戳
module.exports = {
    filenameHashing:true, //建议开启 防止静态资源(图片)替换后 未即时生效
    configureWebpack: {
        output: { // 输出重构  打包编译后的 文件路径  文件名称  【时间戳】
            filename: `./static/js/[name].${Timestamp}.js?v=${Timestamp}`,
            chunkFilename: `./static/js/[name].${Timestamp}.js?v=${Timestamp}`
        }
    }
}

// 如果是nginx部署的话，设置nginx 不缓存 html 文件

location = /index.html {
    add_header Cache-Control "no-cache, no-store";
}

```
[原文链接](http://blog.bravetimes.cn/Detail?id=26&navId=0)

## 2. 在 Vue 回调函数中传入新的参数，获取不到原有的返回参数

例如
```js

// 没有传参
<el-upload :on-success="handleAvatarSuccess"  />

// 传参数
<el-table>
 <el-table-colunm>
    <template slot-scope="scope">
      <el-upload :on-success="handleAvatarSuccess2(scope.row.name)"  />
    </template>
 </el-table-column>
</el-table>

<script>
export default {
    data () {
        return {}
    },
    methods: {
        // 默认返回这些参数
        handleAvatarSuccess(response, file, files) {

        },
        // 默认返回的参数获取不到了
        handleAvatarSuccess2(response) {

        }
    }
}
</script>

```

解决方案

1. 使用 `arguments` 获取参数
2. 回调函数包裹一层函数，在外层函数中将参数传给回调函数

``` js
// 方法 1
<el-table>
 <el-table-colunm>
    <template slot-scope="scope">
      <el-upload :on-success="handleAvatarSuccess(arguments, scope.row.name)"  />
    </template>
 </el-table-column>
</el-table>

// 方法 2
<el-table>
 <el-table-colunm>
    <template slot-scope="scope">
      <el-upload :on-success="(res, file, files) => handleAvatarSuccess2(res, file, files, scope.row.name)"  />
    </template>
 </el-table-column>
</el-table>


<script>
export default {
    data () {
        return {}
    },
    methods: {
        // 方法 1
        handleAvatarSuccess(arg, res) {

        },
        // 方法 2
        handleAvatarSuccess2(res, file, files, val) {

        }
    }
}
</script>

```

## 3. 在 uni.app 项目中，跳转页面传入过多参数，页面进行刷新时，会打不开

例如

```js

<template>
  <view @click="handleNavTo">跳转</view>
</template>

<script>
export default {
    data () {
        return {}
    },
    methods: {
        handlNavTo() {
            const urlData = [{ a: 2, b: 3, c: 5}]
            uni.navigateTo({
                url: `/pages/user/index?data={JSON.stringify(urlData)}`
            })
        }
    }
}
</script>
```

解决方案

使用 `eventChannel` 来传参数，如需要持久化需加到本地缓存中。


```js

// 父页面
<template>
  <view @click="handleNavTo">跳转</view>
</template>

<script>
export default {
    data () {
        return {}
    },
    methods: {
        handlNavTo() {
            const urlData = [{ a: 2, b: 3, c: 5}]
            uni.navigateTo({
                url: `/pages/user/index`,
                success: (res) => {
                    // 触发事件
                    res.eventChannel.emit('toUrl', {data: urlData})
                }
            })
        }
    }
}
</script>

// 子页面
<template>
  <view @click="handleNavTo">跳转</view>
</template>

<script>
export default {
    data () {
        return {}
    },
    onload() {
        // 获取事件总线
        const eventChannel = this.getOpenerEventChannel()
        // 监听事件
        eventChannel.on('toUrl', function (res) {
            
        })
    }
}
</script>
```