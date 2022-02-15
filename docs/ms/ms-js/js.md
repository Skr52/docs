# JS

## JS 中有哪些类型
基本类型有 7 种：`String`、`Number`、`Boolean`、`null`、`undefined`、`symbel`、`bigInt`。

引用类型有 1 种：`Object`。

## JS 中有哪些内置函数（数据封装类对象）
分别有：`Object`、`Array`、`Boolean`、`String`、`Number`、`Date`、`Function`、`RegExp`、`Error`

## JS 中 new 操作符进行了什么操作
1. 创建一个空对象；
2. 将新对象的原型指向构造函数的原型；
3. 将新对象作为 this 上下文，执行构造函数；
4. 判断构造函数的返回值类型，如果是值类型，返回新对象。如果是引用类型，返回构造函数的引用类型。

代码演示

--------------------------------------------------------------------

``` js
  function createNew(fn, ...rest) {
      // 创建一个新对象
      const obj = {}
      // 将新对象的原型链接到构造函数的原型
      obj._proto_ = fn.prototype

      // 通过 call, apply 方式将 obj 作为 this, 执行构造函数代码
      const result = fn.call(obj, ...rest)

      // 判断构造函数返回值，并返回其值
      let resultObj = ''
      if (typeof result === 'object') {
          resultObj = result
      } else {
          resultObj = obj
      }

      return resultObj
  }

  function Fn(name) {
      this.name = name
  }

  const fn2 = createNew(fn, '张三')

  console.log(fn2)

```

## JS 中事件传播的机制是怎么样的
事件捕获：最先接受到事件的元素（document）依次往下传递有注册事件的元素（目标元素）

事件冒泡：当前的事件源会逐步的向上传递事件，直到最开始接受的元素（document）

## JS 中什么是DOM事件流
1. 事件捕获阶段
2. 处于目标阶段
3. 事件冒泡阶段
