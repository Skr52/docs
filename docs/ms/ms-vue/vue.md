# Vue

## Computed 和 Watch 的区别
`computed` 通过多个数据计算出一个新的数据。并且会缓存数据

```Vue
<template>
    <div>{{ getMsg }}</div>
</template>

<script>
    export default {
        data () {
            return {
                msg: '33',
                text: '333'
            }
        },
        computed: {
            // 只有 msg 和 text 变化的时候，才会重新触发函数
            getMsg() {
                return this.msg + this.text
            }
        }
    }
</script>
```

`watch` 监听某个数据，并且当数据变化的时候，会触发回调函数

```Vue
<template>
    <div>{{ text }}</div>
</template>

<script>
    export default {
        data () {
            return {
                msg: '33',
                text: '333'
            }
        },
        watch: {
           text(nevVal) {
               console.log(newVal, '新的数据')
           } 
        }
    }
</script>
```

## 组件通讯方式有哪些，尽量全面

1. props 和 emit
2. 自定义事件 eventBus
3. $attrs 和 $listeners
4. $parent 和 $refs
5. provide 和 inject
6. vuex 