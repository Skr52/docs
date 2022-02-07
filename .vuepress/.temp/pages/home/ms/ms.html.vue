<template><h1 id="前端面试题" tabindex="-1"><a class="header-anchor" href="#前端面试题" aria-hidden="true">#</a> 前端面试题</h1>
<h2 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h2>
<h3 id="link-和-import的区别" tabindex="-1"><a class="header-anchor" href="#link-和-import的区别" aria-hidden="true">#</a> link 和 @import的区别</h3>
<ul>
<li>link 是XHTML标签，不存在兼容问题，@import 是在 css 2.1 提出的，低版本浏览器不支持。</li>
<li>link 可以加载 css, javascript 文件的， @import 只能加载 css 文件。</li>
<li>link 加载的内容是与页面同步加载，@import 需要网页完全加载完后再进行加载。</li>
</ul>
<h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h2>
<h3 id="bfc特性" tabindex="-1"><a class="header-anchor" href="#bfc特性" aria-hidden="true">#</a> BFC特性</h3>
<p><code>BFC</code> 就是一个隔离独立的容器，里面的子元素不会影响外面的元素。</p>
<p><code>BFC</code> 是怎么产生的 ?</p>
<hr>
<ol>
<li>
<p>设置元素：display: block, list-item, table, flex, inline-block;</p>
</li>
<li>
<p>设置元素属性：float值不为none, position值为absolute, fixed, overflow值不为visible;</p>
</li>
</ol>
<p><code>BFC</code> 解决了什么问题 ?</p>
<hr>
<ol>
<li>清除元素内部的浮动。</li>
<li>外边距合并问题。</li>
<li>制作右侧自适应盒子问题。</li>
</ol>
<h3 id="css选择器优先级" tabindex="-1"><a class="header-anchor" href="#css选择器优先级" aria-hidden="true">#</a> CSS选择器优先级</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">!</span>important <span class="token operator">></span> 行内样式 <span class="token operator">></span> id <span class="token operator">></span> <span class="token keyword">class</span> <span class="token operator">></span> 标签 <span class="token operator">></span> 通配符 <span class="token operator">></span> 浏览器自定义或继承

<span class="token comment">// 权限值</span>
行内样式：<span class="token number">1000</span>
<span class="token constant">ID</span>选择器：<span class="token number">100</span>
<span class="token keyword">class</span>选择器：<span class="token number">10</span>
<span class="token constant">HTML</span>标签选择器：<span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="盒子模型" tabindex="-1"><a class="header-anchor" href="#盒子模型" aria-hidden="true">#</a> 盒子模型</h3>
<ol>
<li>标准盒模型</li>
<li>IE盒模型</li>
</ol>
<p>两种模型之间区别</p>
<hr>
<ol>
<li>标准盒模型内容的宽和高等于他实际内容的宽和高。</li>
<li>IE盒模型内容的宽和高包括了<code>padding</code> 和 <code>border</code>。</li>
</ol>
<h3 id="css-position定位-relative、absolute、fixed、sticky-特点" tabindex="-1"><a class="header-anchor" href="#css-position定位-relative、absolute、fixed、sticky-特点" aria-hidden="true">#</a> CSS position定位（relative、absolute、fixed、sticky）特点</h3>
<p>reletive 相对定位</p>
<ul>
<li>相对于自身的位置进行定位，不会脱离文档流，占用位置。</li>
<li>不影响其他元素布局。</li>
<li>不影响元素本身特性（无论区块元素还是内联元素会保留其原本特性）</li>
</ul>
<p>aosolute 绝对定位</p>
<ul>
<li>脱离文档流</li>
<li>使行内元素支持宽高（让行内元素具备块内元素特性）</li>
<li>使块内元素默认宽根据内容决定（让块内元素具备行内元素特性）</li>
<li>如果父级元素具备（relative、absolute、fixed）定位，根据父级元素进行偏移，没有就根据浏览器窗口来进行偏移。</li>
<li>如果父级元素中有多个具备定位模式，根据自己最近的父级元素偏移。</li>
</ul>
<p>fixed 固定定位</p>
<ul>
<li>脱离文档流</li>
<li>使行内元素支持宽高（让行内元素具备块内元素特性）</li>
<li>使块内元素默认宽根据内容决定（让块内元素具备行内元素特性）</li>
<li>根据浏览器窗口进行偏移。不受浏览器滚动条的影响依然固定在位置中。</li>
</ul>
<p>sticky 粘性定位</p>
<ul>
<li>在没有达到指定的时候，已 <code>relative</code> 进行定位。到达了指定文字，已 <code>fixed</code> 进行定位。</li>
<li><code>left</code> 和 <code>right</code> 一同指定时 <code>left</code> 的优先级大于 <code>right</code>。 <code>top</code> 和 <code>bottom</code> 一同指定时 <code>top</code> 的优先级大于 <code>bottom</code>。</li>
</ul>
<h2 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h2>
<h3 id="js-中有哪些类型" tabindex="-1"><a class="header-anchor" href="#js-中有哪些类型" aria-hidden="true">#</a> JS 中有哪些类型</h3>
<p>基本类型有 7 种：<code>String</code>、<code>Number</code>、<code>Boolean</code>、<code>null</code>、<code>undefined</code>、<code>symbel</code>、<code>bigInt</code>。</p>
<p>引用类型有 1 种：<code>Object</code>。</p>
<h3 id="js-中有哪些内置函数-数据封装类对象" tabindex="-1"><a class="header-anchor" href="#js-中有哪些内置函数-数据封装类对象" aria-hidden="true">#</a> JS 中有哪些内置函数（数据封装类对象）</h3>
<p>分别有：<code>Object</code>、<code>Array</code>、<code>Boolean</code>、<code>String</code>、<code>Number</code>、<code>Date</code>、<code>Function</code>、<code>RegExp</code>、<code>Error</code></p>
<h3 id="js-中-new-操作符进行了什么操作" tabindex="-1"><a class="header-anchor" href="#js-中-new-操作符进行了什么操作" aria-hidden="true">#</a> JS 中 new 操作符进行了什么操作</h3>
<ol>
<li>创建一个空对象；</li>
<li>将新对象的原型指向构造函数的原型；</li>
<li>将新对象作为 this 上下文，执行构造函数；</li>
<li>判断构造函数的返回值类型，如果是值类型，返回新对象。如果是引用类型，返回构造函数的引用类型。</li>
</ol>
<p>代码演示</p>
<hr>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">createNew</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>rest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 创建一个新对象</span>
      <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token comment">// 将新对象的原型链接到构造函数的原型</span>
      obj<span class="token punctuation">.</span>_proto_ <span class="token operator">=</span> fn<span class="token punctuation">.</span>prototype

      <span class="token comment">// 通过 call, apply 方式将 obj 作为 this, 执行构造函数代码</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">)</span>

      <span class="token comment">// 判断构造函数返回值，并返回其值</span>
      <span class="token keyword">let</span> resultObj <span class="token operator">=</span> <span class="token string">''</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          resultObj <span class="token operator">=</span> result
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          resultObj <span class="token operator">=</span> obj
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> resultObj
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">Fn</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> fn2 <span class="token operator">=</span> <span class="token function">createNew</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token string">'张三'</span><span class="token punctuation">)</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fn2<span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="js-中事件传播的机制是怎么样的" tabindex="-1"><a class="header-anchor" href="#js-中事件传播的机制是怎么样的" aria-hidden="true">#</a> JS 中事件传播的机制是怎么样的</h3>
<p>事件捕获：最先接受到事件的元素（document）依次往下传递有注册事件的元素（目标元素）</p>
<p>事件冒泡：当前的事件源会逐步的向上传递事件，直到最开始接受的元素（document）</p>
<h3 id="js-中什么是dom事件流" tabindex="-1"><a class="header-anchor" href="#js-中什么是dom事件流" aria-hidden="true">#</a> JS 中什么是DOM事件流</h3>
<ol>
<li>事件捕获阶段</li>
<li>处于目标阶段</li>
<li>事件冒泡阶段</li>
</ol>
<h2 id="框架" tabindex="-1"><a class="header-anchor" href="#框架" aria-hidden="true">#</a> 框架</h2>
<h3 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h3>
<h4 id="vue-中-router-和-route-区别是什么" tabindex="-1"><a class="header-anchor" href="#vue-中-router-和-route-区别是什么" aria-hidden="true">#</a> Vue 中 router 和 route 区别是什么</h4>
<p><code>router</code> 代表全局的路由实例，在这其中可以进行路由跳转操作。</p>
<p><code>route</code> 代表当前路由信息对象，在这其中包含了当前URL 解析到的信息，匹配到的 route records 路由记录</p>
<h4 id="vue-中路由传参数有几种方式" tabindex="-1"><a class="header-anchor" href="#vue-中路由传参数有几种方式" aria-hidden="true">#</a> Vue 中路由传参数有几种方式</h4>
<ol>
<li>params 形式 <code>this.$router.push({ name: 'home', params: { age: 10 } })</code></li>
</ol>
<blockquote>
<p>在路由配置中，路径参数以冒号：表示。</p>
</blockquote>
<blockquote>
<p>const router = [ <br>
// 动态段以冒号开始
<br>
{
name: 'home',
path: '/home/:age'
}
<br>
]</p>
</blockquote>
<p>注意：如果提供了 path， params 会被忽略。</p>
<blockquote>
<p>// <code>params</code> 不能与 <code>path</code> 一起使用 <br> router.push({ path: '/details', params: { id: '001' } }) // -&gt; /details</p>
</blockquote>
<p>获取方式：<code>this.$route.params</code> 方式</p>
<ol start="2">
<li>query 形式 <code>this.$router.push({ name: 'home', query: { age: 10 } })</code>,
这个不用在路由配置中加冒号，他是直接拼接到 url 地址上面，<code>home?age=10</code>。</li>
</ol>
<p>获取方式：<code>this.$route.query</code> 方式</p>
<ol start="3">
<li>hash 形式 <code>this.$router.push({ name: 'home', hash: '#cad' })</code></li>
</ol>
<p>获取方式：<code>this.$route.hash.slice(1)</code> 方式</p>
<h3 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h3>
</template>
