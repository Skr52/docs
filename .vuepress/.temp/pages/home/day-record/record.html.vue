<template><h1 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h1>
<h2 id="_1-uni-app-开发微信公众号-h5-网页项目-发布更新后-微信浏览器网页存在缓存问题" tabindex="-1"><a class="header-anchor" href="#_1-uni-app-开发微信公众号-h5-网页项目-发布更新后-微信浏览器网页存在缓存问题" aria-hidden="true">#</a> 1. uni.app 开发微信公众号 <code>h5</code> 网页项目，发布更新后，微信浏览器网页存在缓存问题</h2>
<p>Tips</p>
<hr>
<p>最近在发布项目时 收到反馈说, 文件已经更新上去了 但是浏览器显示的还是以前的页面</p>
<p>解决方案</p>
<ul>
<li>设置html页面不让浏览器缓存： 在index.html文件中增加标签禁止浏览器缓存</li>
<li>设置webpack打包生成的文件名规则：配置vue.config.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// index.html 文件中增加 meta 标签</span>

<span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">'Cache-Control'</span> content<span class="token operator">=</span><span class="token string">'no-cache, no-store, must-revalidate'</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">'Pragma'</span> content<span class="token operator">=</span><span class="token string">'no-cache'</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">'Expires'</span> content<span class="token operator">=</span><span class="token string">'0'</span> <span class="token operator">/</span><span class="token operator">></span>


<span class="token comment">// 在项目根目录创建 vue.config.js 文件， 添加 打包 规则</span>

<span class="token keyword">const</span> Timestamp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//当前时间为了防止打包缓存不刷新，所以给每个js文件都加一个时间戳</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filenameHashing</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//建议开启 防止静态资源(图片)替换后 未即时生效</span>
    <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 输出重构  打包编译后的 文件路径  文件名称  【时间戳】</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">./static/js/[name].</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Timestamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.js?v=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Timestamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">chunkFilename</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">./static/js/[name].</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Timestamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.js?v=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Timestamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 如果是nginx部署的话，设置nginx 不缓存 html 文件</span>

location <span class="token operator">=</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html <span class="token punctuation">{</span>
    add_header Cache<span class="token operator">-</span>Control <span class="token string">"no-cache, no-store"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><a href="http://blog.bravetimes.cn/Detail?id=26&amp;navId=0" target="_blank" rel="noopener noreferrer">原文链接<ExternalLinkIcon/></a></p>
<h2 id="_2-在-vue-回调函数中传入新的参数-获取不到原有的返回参数" tabindex="-1"><a class="header-anchor" href="#_2-在-vue-回调函数中传入新的参数-获取不到原有的返回参数" aria-hidden="true">#</a> 2. 在 Vue 回调函数中传入新的参数，获取不到原有的返回参数</h2>
<p>例如</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token comment">// 没有传参</span>
<span class="token operator">&lt;</span>el<span class="token operator">-</span>upload <span class="token operator">:</span>on<span class="token operator">-</span>success<span class="token operator">=</span><span class="token string">"handleAvatarSuccess"</span>  <span class="token operator">/</span><span class="token operator">></span>

<span class="token comment">// 传参数</span>
<span class="token operator">&lt;</span>el<span class="token operator">-</span>table<span class="token operator">></span>
 <span class="token operator">&lt;</span>el<span class="token operator">-</span>table<span class="token operator">-</span>colunm<span class="token operator">></span>
    <span class="token operator">&lt;</span>template slot<span class="token operator">-</span>scope<span class="token operator">=</span><span class="token string">"scope"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>upload <span class="token operator">:</span>on<span class="token operator">-</span>success<span class="token operator">=</span><span class="token string">"handleAvatarSuccess2(scope.row.name)"</span>  <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>table<span class="token operator">-</span>column<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>table<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 默认返回这些参数</span>
        <span class="token function">handleAvatarSuccess</span><span class="token punctuation">(</span><span class="token parameter">response<span class="token punctuation">,</span> file<span class="token punctuation">,</span> files</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 默认返回的参数获取不到了</span>
        <span class="token function">handleAvatarSuccess2</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>解决方案</p>
<ol>
<li>使用 <code>arguments</code> 获取参数</li>
<li>回调函数包裹一层函数，在外层函数中将参数传给回调函数</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 方法 1</span>
<span class="token operator">&lt;</span>el<span class="token operator">-</span>table<span class="token operator">></span>
 <span class="token operator">&lt;</span>el<span class="token operator">-</span>table<span class="token operator">-</span>colunm<span class="token operator">></span>
    <span class="token operator">&lt;</span>template slot<span class="token operator">-</span>scope<span class="token operator">=</span><span class="token string">"scope"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>upload <span class="token operator">:</span>on<span class="token operator">-</span>success<span class="token operator">=</span><span class="token string">"handleAvatarSuccess(arguments, scope.row.name)"</span>  <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>table<span class="token operator">-</span>column<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>table<span class="token operator">></span>

<span class="token comment">// 方法 2</span>
<span class="token operator">&lt;</span>el<span class="token operator">-</span>table<span class="token operator">></span>
 <span class="token operator">&lt;</span>el<span class="token operator">-</span>table<span class="token operator">-</span>colunm<span class="token operator">></span>
    <span class="token operator">&lt;</span>template slot<span class="token operator">-</span>scope<span class="token operator">=</span><span class="token string">"scope"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>upload <span class="token operator">:</span>on<span class="token operator">-</span>success<span class="token operator">=</span><span class="token string">"(res, file, files) => handleAvatarSuccess2(res, file, files, scope.row.name)"</span>  <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>table<span class="token operator">-</span>column<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>table<span class="token operator">></span>


<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 方法 1</span>
        <span class="token function">handleAvatarSuccess</span><span class="token punctuation">(</span><span class="token parameter">arg<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 方法 2</span>
        <span class="token function">handleAvatarSuccess2</span><span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">,</span> file<span class="token punctuation">,</span> files<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="_3-在-uni-app-项目中-跳转页面传入过多参数-页面进行刷新时-会打不开" tabindex="-1"><a class="header-anchor" href="#_3-在-uni-app-项目中-跳转页面传入过多参数-页面进行刷新时-会打不开" aria-hidden="true">#</a> 3. 在 uni.app 项目中，跳转页面传入过多参数，页面进行刷新时，会打不开</h2>
<p>例如</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>view @click<span class="token operator">=</span><span class="token string">"handleNavTo"</span><span class="token operator">></span>跳转<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handlNavTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> urlData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
            uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/pages/user/index?data={JSON.stringify(urlData)}</span><span class="token template-punctuation string">`</span></span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>解决方案</p>
<p>使用 <code>eventChannel</code> 来传参数，如需要持久化需加到本地缓存中。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token comment">// 父页面</span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>view @click<span class="token operator">=</span><span class="token string">"handleNavTo"</span><span class="token operator">></span>跳转<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handlNavTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> urlData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
            uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/pages/user/index</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
                <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    <span class="token comment">// 触发事件</span>
                    res<span class="token punctuation">.</span>eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'toUrl'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">data</span><span class="token operator">:</span> urlData<span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token comment">// 子页面</span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>view @click<span class="token operator">=</span><span class="token string">"handleNavTo"</span><span class="token operator">></span>跳转<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取事件总线</span>
        <span class="token keyword">const</span> eventChannel <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOpenerEventChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 监听事件</span>
        eventChannel<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'toUrl'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div></template>
