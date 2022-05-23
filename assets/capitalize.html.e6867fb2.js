import{_ as l,e as c,j as i,k as u,r,o as k,c as d,a as v,b as n,t as m,u as g,F as b,d as a,i as _,K as f}from"./app.3b1d62ed.js";const h=n("h1",{id:"capitalize",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#capitalize","aria-hidden":"true"},"#"),a(" capitalize")],-1),z=n("blockquote",null,[n("p",null,[a("The module "),n("code",null,"capitalize"),a(" is a function to add a capital letter to a string")])],-1),x={style:{padding:"16px","margin-top":"16px","background-color":"var(--maz-color-bg-lighter)"},class:"flex flex-center rounded gap-05"},y=a(" formatted value: "),V=_(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazInput</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stringValue<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span> <span class="token property">margin-top</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span> <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--maz-color-bg-lighter<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span>
  <span class="token punctuation">&gt;</span></span>
    {{ stringFormatted }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> capitalize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;maz-ui&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">const</span> stringValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;string value&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> stringFormatted <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token function">capitalize</span><span class="token punctuation">(</span>stringValue<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),q=c({name:"capitalize.html",setup(w){const s=i("string value"),p=u(()=>f(s.value));return(F,t)=>{const e=r("MazInput");return k(),d(b,null,[h,z,v(e,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=o=>s.value=o)},null,8,["modelValue"]),n("div",x,[y,n("strong",null,m(g(p)),1)]),V],64)}}});var B=l(q,[["__file","capitalize.html.vue"]]);export{B as default};