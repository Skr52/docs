<template><h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h1>
<h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h2>
<p>常见类型</p>
<table>
<thead>
<tr>
<th style="text-align:center">类型</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">例子</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">string</td>
<td style="text-align:center">字符串</td>
<td style="text-align:center">'hellor'</td>
</tr>
<tr>
<td style="text-align:center">number</td>
<td style="text-align:center">数值</td>
<td style="text-align:center">123</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center">布尔值</td>
<td style="text-align:center">true</td>
</tr>
<tr>
<td style="text-align:center">any</td>
<td style="text-align:center">任意类型</td>
<td style="text-align:center">*</td>
</tr>
<tr>
<td style="text-align:center">unknown</td>
<td style="text-align:center">未知类型, 但不能随意赋值给其他变量</td>
<td style="text-align:center">*</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center">空值（undefined）</td>
<td style="text-align:center">function fn () : void {}</td>
</tr>
<tr>
<td style="text-align:center">never</td>
<td style="text-align:center">没有值</td>
<td style="text-align:center">function fn () : never {}</td>
</tr>
<tr>
<td style="text-align:center">object</td>
<td style="text-align:center">任意的js对象</td>
<td style="text-align:center">let k: {age: strign, b: strign}</td>
</tr>
<tr>
<td style="text-align:center">函数</td>
<td style="text-align:center">箭头函数形式</td>
<td style="text-align:center">(a: string, b: number) : number</td>
</tr>
<tr>
<td style="text-align:center">array</td>
<td style="text-align:center">任意的js数组</td>
<td style="text-align:center">let j: string[]; let a: Array&lt;类型&gt;</td>
</tr>
<tr>
<td style="text-align:center">tuple</td>
<td style="text-align:center">元组，固定的数组长度</td>
<td style="text-align:center">let f: [strign, number]</td>
</tr>
<tr>
<td style="text-align:center">enum</td>
<td style="text-align:center">枚举</td>
<td style="text-align:center">enum nameEnum { a, b }</td>
</tr>
</tbody>
</table>
</template>
