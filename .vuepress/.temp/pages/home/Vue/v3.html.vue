<template><h1 id="vue3新特性" tabindex="-1"><a class="header-anchor" href="#vue3新特性" aria-hidden="true">#</a> Vue3新特性</h1>
<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 3.x中 只有卸载的生命周期的改变了名称，其他的没有变。</span>
beforeDestroy <span class="token operator">--</span><span class="token operator">-</span><span class="token operator">></span> beforeUnmount
destroyed <span class="token operator">--</span><span class="token operator">-</span><span class="token operator">></span> unmounted


<span class="token comment">// 在 setup 函数中导入生命周期函数需一致加 on 前缀。</span>
<span class="token comment">// setup 导入生命函数实例</span>

setup <span class="token operator">-</span><span class="token operator">></span> beforeCreate 
      <span class="token operator">-</span><span class="token operator">></span> beforeCreated

beforeMount <span class="token operator">--</span><span class="token operator">-</span><span class="token operator">></span> onBeforeMount 
mounted <span class="token operator">--</span><span class="token operator">-</span><span class="token operator">></span> onMounted

beforeUpdate <span class="token operator">--</span><span class="token operator">-</span><span class="token operator">></span> onBeforeUpdate
updated <span class="token operator">--</span><span class="token operator">-</span><span class="token operator">></span> onUpdated

beforeUnMount <span class="token operator">--</span><span class="token operator">-</span><span class="token operator">></span> onBeforeUnmount
unmounted <span class="token operator">--</span><span class="token operator">-</span><span class="token operator">></span> onUnmounted

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> v-model</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 2.x</span>
<span class="token operator">&lt;</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"msg"</span> placeholder<span class="token operator">=</span><span class="token string">"请输入内容"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token comment">// 底层实现。</span>
<span class="token operator">&lt;</span>input value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span> @input<span class="token operator">=</span><span class="token string">"value = $event.target.value"</span> placeholder<span class="token operator">=</span><span class="token string">"请输入内容"</span><span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token comment">// 在 2.0 中 可以通过 model 配置项来改变 value 绑定的值, 默认值是 value</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'value'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token string">'input'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> String
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token comment">// 3.x</span>
<span class="token operator">&lt;</span>input v<span class="token operator">-</span>model<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">"value"</span> placeholder<span class="token operator">=</span><span class="token string">"请输入内容"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token comment">// 底层实现。</span>
<span class="token operator">&lt;</span>input text<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span> @update<span class="token operator">:</span>text<span class="token operator">=</span><span class="token string">"text = $event.target.value"</span> placeholder<span class="token operator">=</span><span class="token string">"请输入内容"</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token comment">// 在 3.0 值移除了 model 配置项，如需更改在 v-model 后面传递要修改的 prop 名。</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> String
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token comment">// 注意点：在 3.x 中 .sync 移除了。合并到 v-model冒号绑定的值一起了。</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p><a href="https://juejin.cn/post/6970210247726071845" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h2 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h2>
<p>3.x 中创建值类型数据为响应式。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 通过 ref 创建的数据，返回的格式是 { value: 0 }。</span>
        <span class="token comment">// 在 setup 中使用中需通过 .value 形式使用。模板中使用 count 不用 .value 形式，vue 会帮我们 .value。</span>
        <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> 
        <span class="token comment">// 修改了 count 的值，页面使用到时，自动改变 count。</span>
        count<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">333</span> 

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            count
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token comment">// 注意点：ref 也可以接受对象或者数组参数，返回格式就是 { value: 对象或数组 }。</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="toref" tabindex="-1"><a class="header-anchor" href="#toref" aria-hidden="true">#</a> toRef</h2>
<p>3.x 中将响应式对象中的某个属性转换成 <code>ref</code> 的形式，两者之间修改值都会改变，并触发响应式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> nameRef <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> toRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token number">123</span> 
          <span class="token punctuation">}</span><span class="token punctuation">)</span>

          <span class="token keyword">const</span> nameRef <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">)</span>

          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              state<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token number">222</span> <span class="token comment">// nameRef会改变</span>
              nameRef<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">333</span> <span class="token comment">// state.name 会改变</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span>

          <span class="token keyword">return</span> <span class="token punctuation">{</span>
              nameRef
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="torefs" tabindex="-1"><a class="header-anchor" href="#torefs" aria-hidden="true">#</a> toRefs</h2>
<p>3.x 中将响应式对象的全部属性转换成 <code>ref</code> 形式，两者之间修改值都会改变，并触发响应式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
 <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> ageRef <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
 <span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">const</span> stateRef <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>

        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            state<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">30</span> <span class="token comment">// stateRef.age会改变</span>
            stateRef<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">50</span> <span class="token comment">// state.age 会改变</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> stateRef
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive" aria-hidden="true">#</a> reactive</h2>
<p>3.x 中创建引用类型数据的响应式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
 <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"list"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"(item, index) in countData"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"index"</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 通过 reactive 创建的数据，返回的格式就是传过来的格式。</span>
      <span class="token comment">// 在使用中不需要 .value 形式。 </span>
      <span class="token keyword">const</span> countData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      countData<span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">]</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
          countData
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>scrip<span class="token operator">></span>
<span class="token comment">// 注意点</span>
<span class="token comment">// ref 创建的数据本质上还是通过 reactive 函数包裹然后再 value 中接受传过来的参数。</span>
<span class="token comment">// reactive 返回的数据，如果直接赋值一个新的数据，会失去响应式。</span>
<span class="token comment">// 如：const countData = reactive([]) countData = []</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="响应式" tabindex="-1"><a class="header-anchor" href="#响应式" aria-hidden="true">#</a> 响应式</h2>
<p>在 2.x 中 vue 实现的响应式是通过 Object.defineProtry 函数来劫持 data 中数据的获取和改变，并在其中订阅依赖和发布依赖来触发页面上数据的改变。但这个函数本身也有缺陷，不能监听新增的数据和以索引方式改变数组的数据，只有通过 $set 和 set来改变数据。</p>
<p>在 3.x 中 vue 就更改了劫持函数，通过 new Proxy 函数来劫持。这个函数就很好的能监听新增的数据和以索引方式改变数组数据。并且他还有更多的方法如：apply 等来监听数据。但他本身是 ES6 才出现的，所以在 IE 浏览器不是兼容的。</p>
</template>
