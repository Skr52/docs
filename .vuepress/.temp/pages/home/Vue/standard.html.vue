<template><h1 id="书写规范" tabindex="-1"><a class="header-anchor" href="#书写规范" aria-hidden="true">#</a> 书写规范</h1>
<p>参考 <code>Vue</code> 官方风格指南，写出更规范和统一的代码。</p>
<h2 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2>
<p>所有的 <code>Component</code> 文件都是以大写开头（PascalCase）官方比较推荐的</p>
<p>但除了<code>index.vue</code> 文件</p>
<p>例子：</p>
<ul>
<li><code>@/components/Breadcrumb/index</code></li>
<li><code>@/components/Hamburger/index </code></li>
<li><code>@/components/SvgIcon/index</code></li>
</ul>
<h2 id="js文件" tabindex="-1"><a class="header-anchor" href="#js文件" aria-hidden="true">#</a> JS文件</h2>
<p>所有的 <code>.js</code> 文件都遵循横线连接（kebab-case）。</p>
<p>例子：</p>
<ul>
<li><code>@/utils/get-page-title.js</code></li>
<li><code>@/views/svg-icons/require-icons.js</code></li>
<li><code>@/components/MarkdownEditor/default-options.js</code></li>
</ul>
<h2 id="view-文件" tabindex="-1"><a class="header-anchor" href="#view-文件" aria-hidden="true">#</a> View 文件</h2>
<p>在 <code>views</code> 文件下，代表路由的 <code>.vue</code> 文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。</p>
<p>例子：</p>
<ul>
<li><code>@/views/svg-icons/index.vue</code></li>
<li><code>@/views/svg-icons/require-icons.js</code></li>
</ul>
<p>使用横线连接 (kebab-case)来命名views主要是出于以下几个考虑。</p>
<ul>
<li>横线连接 (kebab-case) 也是官方推荐的命名规范之一。</li>
<li><code>views</code> 下的 <code>.vue</code> 文件代表的是一个路由，所以它需要和 <code>component</code> 进行区分(component 都是大写开头)</li>
<li>页面的 <code>url</code> 也都是横线连接的，比如<code>https://www.xxx.admin/export-excel</code>，所以路由对应的<code>view</code>应该要保持统一</li>
<li>没有大小写敏感问题</li>
</ul>
<p><code>持续完善。。。</code></p>
</template>
