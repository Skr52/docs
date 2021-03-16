### 书写规范

参考 `Vue` 官方风格指南，写出更规范和统一的代码。

### Component  
所有的 `Component` 文件都是以大写开头（PascalCase）官方比较推荐的  

但除了`index.vue` 文件  

例子：  
* `@/components/Breadcrumb/index`  
* `@/components/Hamburger/index `  
* `@/components/SvgIcon/index`

### JS文件
所有的 `.js` 文件都遵循横线连接（kebab-case）。  

例子：  

* `@/utils/get-page-title.js`
* `@/views/svg-icons/require-icons.js`
* `@/components/MarkdownEditor/default-options.js`

### View 文件
在 `views` 文件下，代表路由的 `.vue` 文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。  

例子：  

* `@/views/svg-icons/index.vue`
* `@/views/svg-icons/require-icons.js`

使用横线连接 (kebab-case)来命名views主要是出于以下几个考虑。  

* 横线连接 (kebab-case) 也是官方推荐的命名规范之一。
* `views` 下的 `.vue` 文件代表的是一个路由，所以它需要和 `component` 进行区分(component 都是大写开头)
* 页面的 `url` 也都是横线连接的，比如`https://www.xxx.admin/export-excel`，所以路由对应的`view`应该要保持统一
* 没有大小写敏感问题

`持续完善。。。`