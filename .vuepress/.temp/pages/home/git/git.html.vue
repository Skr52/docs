<template><h1 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">1.</span> git add  <span class="token comment">// 将代码存储到暂存区</span>
<span class="token number">2.</span> git commit <span class="token operator">-</span>m 描述  <span class="token comment">// 将暂存区的代码添加并描述作用</span>
<span class="token number">3.</span> git push origin master <span class="token comment">// 将暂存区的代码推送到远程主机分支上</span>
<span class="token number">4.</span> git pull git地址 <span class="token operator">|</span> 分支  <span class="token comment">// 拉取最新的 git 仓库代码</span>
<span class="token number">5.</span> git clone git地址 <span class="token comment">// 克隆最新的 git 仓库代码</span>
<span class="token number">6.</span> git merge 分支 <span class="token comment">// 在当前分支中合并某个分支</span>
<span class="token number">7.</span> git fetch origin 分支 <span class="token comment">// 在本地拉去远程仓库新建的分支，同步到本地上面。</span>
<span class="token number">8.</span> git reflog <span class="token comment">// 本地分支查看回退版本的commit id</span>
<span class="token number">9.</span> git reset <span class="token operator">--</span>hard a7a7323 <span class="token comment">// 回退版本 --hard 后面指commit id</span>
<span class="token number">10.</span> git push <span class="token operator">-</span>f origin master <span class="token comment">// 远程分支回退版本。先本地分支进行回退，在强制推送到远程分支上。 </span>
<span class="token number">11.</span> git remote set<span class="token operator">-</span>url <span class="token operator">--</span>add origin 远程仓库地址 <span class="token comment">// 当前远程仓库添加一个新的远程仓库地址</span>
<span class="token comment">// 持续完善。。。</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></template>
