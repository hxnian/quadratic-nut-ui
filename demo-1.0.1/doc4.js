import{f as a,o as t,G as n}from"./config.js";const l={class:"markdown-body"},p=n(`<h1>DetailsCell \u5355\u5143\u683C</h1><h3>\u4ECB\u7ECD</h3><p>\u7B80\u5355\u7684\u6570\u636E\u4FE1\u606F\u7684\u5C55\u793A</p><h3>\u57FA\u672C\u4F7F\u7528</h3><pre><code class="language-html">   <span class="hljs-tag">&lt;<span class="hljs-name">mz-details-cell</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mgt-10&quot;</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;datalist&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mz-details-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">mz-details-cell</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mgt-10&quot;</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;dataNoDes&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mz-details-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">mz-details-cell</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mgt-10&quot;</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;dataDetails&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mz-details-cell</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">const</span> datalist = {
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;baoche&quot;</span>,
    <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u56FE\u6807\u6807\u9898&quot;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;\u503C&quot;</span>,
    <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;\u63CF\u8FF0&quot;</span>
};
<span class="hljs-keyword">const</span> dataNoDes = {
    <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u56FE\u6807+\u6807\u9898\u56FE\u6807&quot;</span>,
    <span class="hljs-attr">titleIcon</span>: <span class="hljs-string">&quot;baoche&quot;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&quot;ranyoujilu&quot;</span>,
    <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;\u63CF\u8FF0&quot;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;\u503C&quot;</span>
};
<span class="hljs-keyword">const</span> dataDetails = {
    <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u8BE6\u60C5\u4F7F\u7528&quot;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;\u503C&quot;</span>,
    <span class="hljs-attr">color</span>: <span class="hljs-string">&quot;red&quot;</span>
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u989C\u8272\u548C\u5B57\u4F53\u5927\u5C0F</h3><pre><code class="language-html">   <span class="hljs-tag">&lt;<span class="hljs-name">mz-details-cell</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mgt-10&quot;</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;dataColor&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mz-details-cell</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">const</span> dataColor = {
    <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u4FE1\u606F\u989C\u8272&quot;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;\u503C&quot;</span>,
    <span class="hljs-attr">desc</span>: <span class="hljs-string">&quot;\u63CF\u8FF0&quot;</span>,
    <span class="hljs-attr">color</span>: <span class="hljs-string">&quot;red&quot;</span>,
    <span class="hljs-attr">fontSize</span>: <span class="hljs-number">40</span>
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u9AD8\u5EA6</h3><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">mz-details-cell</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mgt-10&quot;</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;dataHeight&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mz-details-cell</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">const</span> dataHeight = {
    <span class="hljs-attr">title</span>: <span class="hljs-string">&quot;\u8BE6\u60C5\u4F7F\u7528&quot;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;\u503C&quot;</span>,
    <span class="hljs-attr">height</span>: <span class="hljs-number">150</span>,
    <span class="hljs-attr">color</span>: <span class="hljs-string">&quot;red&quot;</span>
};
</code></pre><h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>String</td><td>\u65E0</td></tr><tr><td>titleIcon</td><td>\u6807\u9898\u5DE6\u4FA7icon</td><td>String</td><td>\u65E0</td></tr><tr><td>desc</td><td>\u526F\u6807\u9898</td><td>String</td><td>\u65E0</td></tr><tr><td>icon</td><td>\u5185\u5BB9\u5DE6\u4FA7icon\uFF08\u53EF\u652F\u6301\u56FE\u7247\uFF09</td><td>String</td><td>\u65E0</td></tr><tr><td>value</td><td>\u53F3\u4FA7\u503C</td><td>String</td><td>\u65E0</td></tr><tr><td>height</td><td>cell\u5BB9\u5668\u7684\u9AD8\u5EA6</td><td>Number</td><td><code>120</code></td></tr><tr><td>color</td><td>\u53F3\u4FA7\u6587\u5B57\u989C\u8272</td><td>String</td><td>\u65E0</td></tr><tr><td>fontSize</td><td>\u53F3\u4FA7\u6587\u5B57\u5B57\u4F53\u5927\u5C0F</td><td>String</td><td><code>28</code></td></tr></tbody></table><h2>Slot</h2><table><thead><tr><th>slot\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>desc</td><td>\u526F\u6807\u9898\u63D2\u69FD</td><td>-</td></tr><tr><td>link</td><td>\u53F3\u4FA7\u5185\u5BB9\u63D2\u69FD</td><td>-</td></tr></tbody></table>`,16),c=[p],j={setup(d,{expose:s}){return s({frontmatter:{}}),(o,e)=>(t(),a("div",l,c))}};export{j as default};
