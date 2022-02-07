<template><h1 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h1>
<h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2>
<p>指的是变量的查找范围，分为 全局作用域 和 函数作用域</p>
<ul>
<li>全局作用域预编译</li>
</ul>
<ul>
<li>创建 GO 对象</li>
<li>找变量声明 将变量名作为 GO对象的属性名，值为 undefined</li>
<li>找函数声明 值赋予函数体</li>
</ul>
<p>例子：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
  <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span>


  <span class="token comment">// GO 对象</span>
  <span class="token comment">// const GO = {</span>
  <span class="token comment">//   a: undefined,</span>
  <span class="token comment">//   get: function () {}</span>
  <span class="token comment">// }</span>
  
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul>
<li>函数作用域预编译</li>
</ul>
<ul>
<li>创建 AO 对象</li>
<li>找形参和变量声明，将变量和形参作为AO对象的属性名，值为 undefined</li>
<li>实参和形参统一</li>
<li>找函数声明，如果函数声明跟变量声明一致，会覆盖变量的声明</li>
</ul>
<p>例子：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
  <span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// function a () {}</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 123</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// function c () {}</span>
    <span class="token keyword">function</span> <span class="token function">a</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
    <span class="token keyword">var</span> <span class="token function-variable function">b</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// function () {}</span>
    <span class="token keyword">function</span> <span class="token function">c</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// function c () {}</span>
  <span class="token punctuation">}</span>

  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

  <span class="token comment">// AO对象</span>
  <span class="token comment">// const AO = {</span>
  <span class="token comment">//    a: undefined, 1 function a () {}</span>
  <span class="token comment">//    c: undefined, 1 function c () {}</span>
  <span class="token comment">//    d: undefined,</span>
  <span class="token comment">//    b: undefined</span>
  <span class="token comment">// }</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="作用域链" tabindex="-1"><a class="header-anchor" href="#作用域链" aria-hidden="true">#</a> 作用域链</h2>
<p>在 js引擎中有个隐式属性 [[scope]], 里面存储着在 全局作用域 和 函数作用域 预编译生成的 GO 对象和 AO对象。如果在自身 GO 对象或 AO 对象找到变量，就使用变量，没有就继续像上查找，直到 GO 对象中。在 GO 对象中没有找到就返回 undefined。 类似于原型链查找过程。</p>
<h2 id="防抖函数" tabindex="-1"><a class="header-anchor" href="#防抖函数" aria-hidden="true">#</a> 防抖函数</h2>
<p>指的是设置一个定时器，并设置定时时间。如果在定时时间之前就触发了，就销毁这个定时器，直到没有再定时时间之前触发。其主要用途于监听浏览器滚动事件，输入框的 <code>input</code> 的事件。主要特性是优化多次触发事件中的浏览器性能。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// func是用户传入需要防抖的函数</span>
<span class="token comment">// wait是等待时间</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 缓存一个定时器id</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token comment">// 这里返回的函数是每次用户实际调用的防抖函数</span>
  <span class="token comment">// 如果已经设定过定时器了就清空上一次的定时器</span>
  <span class="token comment">// 开始一个新的定时器，延迟执行用户传入的方法</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 不难看出如果用户调用该函数的间隔小于wait的情况下，上一次的时间还未到就被清除了，并不会执行函数</span>

<span class="token comment">// 调用</span>
<span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'2s执行'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

window<span class="token punctuation">.</span>onscroll <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span> <span class="token comment">// 返回一个函数</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="节流函数" tabindex="-1"><a class="header-anchor" href="#节流函数" aria-hidden="true">#</a> 节流函数</h2>
<p>指连续触发事件但是在 n 秒中只执行一次函数。即 2n 秒内执行 2 次... 。节流如字面意思，会稀释函数的执行频率。
始终会在一段时间内执行函数，防抖并不会执行函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> previous <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> previous <span class="token operator">></span> wait<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        previous <span class="token operator">=</span> now<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

content<span class="token punctuation">.</span>onmousemove <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></template>
