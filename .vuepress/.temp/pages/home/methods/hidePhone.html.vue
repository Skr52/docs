<template><h1 id="手机号隐藏中间四位" tabindex="-1"><a class="header-anchor" href="#手机号隐藏中间四位" aria-hidden="true">#</a> 手机号隐藏中间四位</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> tel <span class="token operator">=</span> <span class="token string">"13122223333"</span><span class="token punctuation">;</span>
 
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(\d{3})\d{4}(\d{4})$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
 
tel <span class="token operator">=</span> tel<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">"$1****$2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tel<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></template>
