import{f as a,o as t,G as n}from"./config.js";const l={class:"markdown-body"},p=n(`<h1>Cell \u5355\u5143\u683C</h1><h3>\u4ECB\u7ECD</h3><p>\u590D\u6742\u7684\u6570\u636E\u4FE1\u606F\u7684\u5C55\u793A</p><h3>\u57FA\u672C\u4F7F\u7528</h3><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">mz-cell</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mgt-10&quot;</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;datalist&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mz-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">mz-cell</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mgt-10&quot;</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;dataNoDes&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mz-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">mz-cell</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mgt-10&quot;</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;dataColor&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mz-cell</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">const</span> datalist = {
    <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u6807\u9898&quot;</span>,
    <span class="hljs-attr">subTitle</span>: <span class="hljs-string">&quot;\u526F\u6807\u9898&quot;</span>,
    <span class="hljs-attr">desc</span>: <span class="hljs-number">88</span>
};
<span class="hljs-keyword">const</span> dataNoDes = {
    <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u6CA1\u6709\u526F\u6807\u9898\u548C\u53F3\u7BAD\u5934&quot;</span>,
    <span class="hljs-attr">desc</span>: <span class="hljs-number">88</span>,
    <span class="hljs-attr">isLink</span>: <span class="hljs-literal">false</span>
};
<span class="hljs-keyword">const</span> dataColor = {
    <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u4FE1\u606F\u989C\u8272&quot;</span>,
    <span class="hljs-attr">desc</span>: <span class="hljs-number">88</span>,
    <span class="hljs-attr">desColor</span>: <span class="hljs-string">&quot;red&quot;</span>,
    <span class="hljs-attr">isLink</span>: <span class="hljs-literal">false</span>
};
</code></pre><h3>\u56FE\u7247\u7684\u5C55\u793A\u65B9\u5F0F</h3><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">mz-cell</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mgt-10&quot;</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;dataImgList&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mz-cell</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">const</span> dataImgList = {
    <span class="hljs-attr">image</span>:
        <span class="hljs-string">&quot;https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png&quot;</span>,
    <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u56FE\u7247\u6807\u9898&quot;</span>,
    <span class="hljs-attr">subTitle</span>: <span class="hljs-string">&quot;\u526F\u6807\u9898&quot;</span>,
    <span class="hljs-attr">desc</span>: <span class="hljs-number">88</span>
};
</code></pre><h3>\u56FE\u6807\u7684\u5C55\u793A\u65B9\u5F0F</h3><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">mz-cell</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mgt-10&quot;</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;dataImgList&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mz-cell</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">const</span> dataIconList = {
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;daohang&quot;</span>,
    <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u56FE\u6807\u6807\u9898&quot;</span>,
    <span class="hljs-attr">subTitle</span>: <span class="hljs-string">&quot;\u526F\u6807\u9898&quot;</span>,
    <span class="hljs-attr">desc</span>: <span class="hljs-number">88</span>
};
</code></pre><h3>\u56FE\u6807\u7684\u5C55\u793A\u65B9\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mgt-10&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">mz-cell</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;dataSlot&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">mz-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">mz-cell</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;dataSlotRight&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">link</span>&gt;</span>\u81EA\u5B9A\u4E49\u53F3\u4FA7<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span> &lt;/mz-cell
    &gt;<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">mz-cell</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;dataSlotLeft&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>\u81EA\u5B9A\u4E49\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">mz-cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">const</span> dataSlot = {
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;daohang&quot;</span>,
    <span class="hljs-attr">subTitle</span>: <span class="hljs-string">&quot;\u526F\u6807\u9898&quot;</span>,
    <span class="hljs-attr">desc</span>: <span class="hljs-number">88</span>
};
<span class="hljs-keyword">const</span> dataSlotLeft = {
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;daohang&quot;</span>,
    <span class="hljs-attr">subTitle</span>: <span class="hljs-string">&quot;\u526F\u6807\u9898&quot;</span>,
    <span class="hljs-attr">desc</span>: <span class="hljs-number">88</span>
};
<span class="hljs-keyword">const</span> dataSlotright = {
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;daohang&quot;</span>,
    <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u6807\u9898&quot;</span>,
    <span class="hljs-attr">subTitle</span>: <span class="hljs-string">&quot;\u526F\u6807\u9898&quot;</span>,
    <span class="hljs-attr">desc</span>: <span class="hljs-number">88</span>
};
</code></pre><h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>String</td><td>\u65E0</td></tr><tr><td>subTitle</td><td>\u526F\u6807\u9898</td><td>String</td><td>\u65E0</td></tr><tr><td>desc</td><td>\u53F3\u4FA7\u7BAD\u5934\u6587\u5B57</td><td>String</td><td>\u65E0</td></tr><tr><td>height</td><td>cell\u5BB9\u5668\u7684\u9AD8\u5EA6</td><td>Number</td><td><code>100</code></td></tr><tr><td>background</td><td>\u80CC\u666F\u8272</td><td>String</td><td><code>#fff</code></td></tr><tr><td>image</td><td>\u5DE6\u4FA7\u56FE\u7247</td><td>String</td><td>\u65E0</td></tr><tr><td>icon</td><td>\u5DE6\u4FA7icon</td><td>String</td><td>\u65E0</td></tr><tr><td>desColor</td><td>\u53F3\u4FA7\u7BAD\u5934\u524D\u6587\u5B57\u989C\u8272</td><td>String</td><td><code>#999999</code></td></tr><tr><td>subColor</td><td>\u526F\u6587\u672C\u6587\u5B57\u989C\u8272</td><td>String</td><td><code>#666666</code></td></tr><tr><td>isLink</td><td>\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u7BAD\u5934</td><td>Boolean</td><td><code>true</code></td></tr></tbody></table><h2>Slot</h2><table><thead><tr><th>slot\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>icon</td><td>\u5DE6\u4FA7\u5185\u5BB9\u63D2\u69FD</td><td>-</td></tr><tr><td>title</td><td>\u6807\u9898\u63D2\u69FD</td><td>-</td></tr><tr><td>link</td><td>\u53F3\u4FA7\u5185\u5BB9\u63D2\u69FD</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u6309\u94AE\u65F6\u89E6\u53D1</td><td>event: MouseEvent</td></tr></tbody></table>`,21),c=[p],j={setup(d,{expose:s}){return s({frontmatter:{}}),(e,r)=>(t(),a("div",l,c))}};export{j as default};
