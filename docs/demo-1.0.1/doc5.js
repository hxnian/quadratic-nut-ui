import{f as a,o as t,G as n}from"./config.js";const l={class:"markdown-body"},p=n(`<h1>FormList \u8868\u5355\u5217\u8868</h1><h3>\u4ECB\u7ECD</h3><p>\u7F16\u8F91/\u8BE6\u60C5\u8868\u5355</p><h3>\u57FA\u672C\u4F7F\u7528</h3><pre><code class="language-html">   <span class="hljs-tag">&lt;<span class="hljs-name">mz-form-list</span>
        <span class="hljs-attr">:isEdit</span>=<span class="hljs-string">&quot;params.isEdit&quot;</span>
        <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;ruleForm&quot;</span>
        <span class="hljs-attr">label-width</span>=<span class="hljs-string">&quot;100px&quot;</span>
        <span class="hljs-attr">v-model:modelValue</span>=<span class="hljs-string">&quot;formParams&quot;</span>
        <span class="hljs-attr">:formList</span>=<span class="hljs-string">&quot;formList&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mz-form-list</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { reactive, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">const</span> params = <span class="hljs-title function_">reactive</span>({
    <span class="hljs-attr">isEdit</span>: <span class="hljs-literal">true</span>
});
<span class="hljs-keyword">const</span> formParams = <span class="hljs-title function_">ref</span>({
    <span class="hljs-attr">stationType</span>: <span class="hljs-number">0</span>,
    <span class="hljs-attr">time</span>: <span class="hljs-string">&quot;&quot;</span>
});
<span class="hljs-keyword">const</span> formList = [
    {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u540D\u79F0&quot;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;name&quot;</span>,
        <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165&quot;</span>
    }
];
</code></pre><h3>\u573A\u666F\u6848\u4F8B</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mz-form-list</span>
    <span class="hljs-attr">:isEdit</span>=<span class="hljs-string">&quot;params.isEdit&quot;</span>
    <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;ruleForm&quot;</span>
    <span class="hljs-attr">label-width</span>=<span class="hljs-string">&quot;100px&quot;</span>
    <span class="hljs-attr">v-model:modelValue</span>=<span class="hljs-string">&quot;formParams&quot;</span>
    <span class="hljs-attr">:formList</span>=<span class="hljs-string">&quot;formList&quot;</span>
&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:test</span>&gt;</span>
        \u81EA\u5B9A\u4E49\u63D2\u69FD
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- \u52A0\u6CB9\u7AD9\u7C7B\u578B --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:stationType</span>=<span class="hljs-string">&quot;{ data }&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">mz-picker-item</span>
            <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;params.isEdit&quot;</span>
            <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showViable.station&quot;</span>
            <span class="hljs-attr">v-model:modelValue</span>=<span class="hljs-string">&quot;formParams.stationType&quot;</span>
            <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;data.options&quot;</span>
            <span class="hljs-attr">:cellText</span>=<span class="hljs-string">&quot;&#39;\u8BF7\u9009\u62E9\u52A0\u6CB9\u7AD9\u7C7B\u578B&#39;&quot;</span>
        /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">mz-edit-item</span>
            <span class="hljs-attr">v-else</span>
            <span class="hljs-attr">:formItem</span>=<span class="hljs-string">&quot;data&quot;</span>
            <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;formParams.stationType&quot;</span>
        &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">mz-edit-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- \u52A0\u6CE8\u65E5\u671F happenDate --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:happenDate</span>=<span class="hljs-string">&quot;{ data }&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex width100 height100&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">mz-date</span>
                <span class="hljs-attr">fields</span>=<span class="hljs-string">&quot;day&quot;</span>
                <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;YYYY-MM-DD&quot;</span>
                <span class="hljs-attr">:end</span>=<span class="hljs-string">&quot;format(&#39;YYYY-MM-DD&#39;)&quot;</span>
                <span class="hljs-attr">v-model:modelValue</span>=<span class="hljs-string">&quot;formParams[data.name]&quot;</span>
                <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u52A0\u6CE8\u65E5\u671F&quot;</span>
                <span class="hljs-attr">:isEdit</span>=<span class="hljs-string">&quot;params.isEdit&quot;</span>
            /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- \u52A0\u6CE8\u65F6\u95F4 time --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:time</span>=<span class="hljs-string">&quot;{ data }&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex width100 height100&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">mz-date</span>
                <span class="hljs-attr">:end</span>=<span class="hljs-string">&quot;getTimeEnd&quot;</span>
                <span class="hljs-attr">v-model:modelValue</span>=<span class="hljs-string">&quot;formParams[data.name]&quot;</span>
                <span class="hljs-attr">v-bind</span>=<span class="hljs-string">&quot;{
                    mode: &#39;time&#39;,
                    fields: &#39;day&#39;,
                    value: &#39;hh:mm&#39;,
                    isEdit: params.isEdit,
                    placeholder: &#39;\u52A0\u6CE8\u65F6\u95F4&#39;
                }&quot;</span>
            /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">mz-form-list</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { format } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@/utils/transfrom&quot;</span>;
<span class="hljs-keyword">import</span> { reactive, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">const</span> params = <span class="hljs-title function_">reactive</span>({
    <span class="hljs-attr">isEdit</span>: <span class="hljs-literal">true</span>
});
<span class="hljs-keyword">const</span> formParams = <span class="hljs-title function_">ref</span>({
    <span class="hljs-attr">stationType</span>: <span class="hljs-number">0</span>,
    <span class="hljs-attr">time</span>: <span class="hljs-string">&quot;&quot;</span>
});
<span class="hljs-keyword">const</span> showViable = <span class="hljs-title function_">reactive</span>({
    <span class="hljs-attr">station</span>: <span class="hljs-literal">false</span>
});
<span class="hljs-keyword">const</span> ruleForm = ref&lt;any&gt;(<span class="hljs-literal">null</span>);

<span class="hljs-keyword">const</span> formList = [
    {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u540D\u79F0&quot;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;name&quot;</span>,
        <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165&quot;</span>
    },
    {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u81EA\u5B9A\u4E49&quot;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;test&quot;</span>,
        <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">itemSlot</span>: <span class="hljs-string">&quot;test&quot;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u52A0\u6CE8\u65E5\u671F&quot;</span>
    },
    {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u52A0\u6CB9\u7AD9\u7C7B\u578B&quot;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;stationType&quot;</span>,
        <span class="hljs-attr">itemSlot</span>: <span class="hljs-string">&quot;stationType&quot;</span>, <span class="hljs-comment">// picker\u9009\u62E9</span>
        <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">options</span>: [
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5185\u90E8\u7AD9\u70B9&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5916\u90E8\u7AD9\u70B9&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u5408\u4F5C\u7AD9\u70B9&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span> }
        ],
        <span class="hljs-attr">valueType</span>: <span class="hljs-string">&quot;select&quot;</span>
    },
    {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u52A0\u6CE8\u65E5\u671F&quot;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;happenDate&quot;</span>, <span class="hljs-comment">// \u65E5\u671F\u9009\u62E9</span>
        <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">itemSlot</span>: <span class="hljs-string">&quot;happenDate&quot;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u52A0\u6CE8\u65E5\u671F&quot;</span>
    },
    {
        <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;\u52A0\u6CE8\u65F6\u95F4&quot;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;time&quot;</span>, <span class="hljs-comment">// \u65F6\u95F4\u9009\u62E9</span>
        <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">itemSlot</span>: <span class="hljs-string">&quot;time&quot;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u52A0\u6CE8\u65F6\u95F4&quot;</span>
    }
];

<span class="hljs-keyword">const</span> <span class="hljs-title function_">submit</span> = <span class="hljs-keyword">async</span> (<span class="hljs-params"></span>) =&gt; {
   <span class="hljs-keyword">let</span> isOk = <span class="hljs-keyword">await</span> ruleForm.<span class="hljs-property">value</span>.<span class="hljs-title function_">validate</span>();
   <span class="hljs-keyword">if</span> (isOk) {
      <span class="hljs-keyword">const</span> data = <span class="hljs-keyword">await</span> <span class="hljs-title function_">api</span>(formParams);
      <span class="hljs-keyword">if</span> (data) {
          <span class="hljs-title function_">showToast</span>(<span class="hljs-string">\`\u64CD\u4F5C\u6210\u529F\`</span>, { <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;success&#39;</span> })
      }
   }
};
</code></pre><h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>modelValue</td><td>\u7ED1\u5B9A\u503C</td><td>Object</td><td><code>{}</code></td></tr><tr><td>formList</td><td>\u8868\u5355\u9879\u6570\u7EC4</td><td>Array</td><td><code>[]</code></td></tr><tr><td>isEdit</td><td>\u662F\u5426\u662F\u53EF\u8F93\u5165\u72B6\u6001</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>blur</td><td>\u5931\u7126\u4E8B\u4EF6</td><td>Function</td><td>-</td></tr></tbody></table><h3>formList</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>component</td><td>\u7ED1\u5B9A\u503C</td><td>String</td><td><code>nut-input</code></td></tr><tr><td>name</td><td>\u8868\u5355\u6570\u636E\u7ED1\u5B9A key</td><td>String</td><td>\u65E0</td></tr><tr><td>label</td><td>\u6807\u9898</td><td>String</td><td>\u65E0</td></tr><tr><td>placeholder</td><td>\u63D0\u793A\u8BED</td><td>String</td><td>\u65E0</td></tr><tr><td>config</td><td>\u52A8\u6001\u6E32\u67D3\u7684\u5B50\u7EC4\u4EF6\u914D\u7F6E</td><td>String</td><td>\u65E0</td></tr><tr><td>valueType</td><td>\u6570\u636E\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A<code>price</code>,<code>number</code>,<code>select</code>(\u7528\u4E8E\u8BE6\u60C5\u662F\u5C55\u793A\u7684\u7C7B\u578B)</td><td>String</td><td>\u65E0</td></tr><tr><td>itemSlot</td><td>\u7F16\u8F91\u72B6\u6001\u65F6\u7684\u52A8\u6001\u63D2\u69FD</td><td>String</td><td>\u65E0</td></tr><tr><td>editSlot</td><td>\u8BE6\u60C5\u72B6\u6001\u65F6\u7684\u52A8\u6001\u63D2\u69FD</td><td>String</td><td>\u65E0</td></tr><tr><td>step</td><td>\u6570\u636E\u8F6C\u6362\u5355\u4F4D\u7684\u9600\u503C\uFF0C\u4EC5<code>valueType = number</code> \u65F6\u751F\u6548</td><td>String</td><td>\u65E0</td></tr><tr><td>unit</td><td>\u7F16\u8F91/\u65B0\u589E \u5C55\u793A\u7684\u540E\u7F00\u5355\u4F4D</td><td>String</td><td>\u65E0</td></tr><tr><td>afterUint</td><td><code>isEdit = false</code>\u65F6\u751F\u6548 \u8BE6\u60C5\u5C55\u793A\u7684\u540E\u7F00\u5355\u4F4D</td><td>String</td><td>\u65E0</td></tr><tr><td>message</td><td>\u5FC5\u586B\u6821\u9A8C\u7684\u9519\u8BEF\u63D0\u793A\u4FE1\u606F</td><td>String</td><td><code>\u8BF7\u8F93\u5165</code></td></tr></tbody></table><blockquote><p>\u5176\u4ED6\u6269\u5C55\u5B57\u6BB5\u548C NutUI\u4FDD\u6301\u4E00\u81F4</p></blockquote><h3>formList-config</h3><p>\u548C Nutui \u4FDD\u6301\u4E00\u81F4\u7684\u914D\u7F6E</p><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>validate</td><td>\u8868\u5355\u6821\u9A8C</td><td>Boolean</td></tr><tr><td>reset</td><td>\u8868\u5355\u91CD\u7F6E</td><td>-</td></tr><tr><td>validError</td><td>\u6821\u9A8C\u9519\u8BEF\u65F6\u7684\u9519\u8BEF\u4FE1\u606F</td><td>-</td></tr></tbody></table>`,18),r=[p],j={setup(e,{expose:s}){return s({frontmatter:{}}),(o,h)=>(t(),a("div",l,r))}};export{j as default};
