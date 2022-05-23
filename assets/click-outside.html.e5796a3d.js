import{_ as c,e as l,j as i,r as u,o as a,c as e,b as n,H as r,u as k,I as d,g as v,w as m,h as g,F as b,d as t,i as h}from"./app.3b1d62ed.js";const f=n("h1",{id:"vclickoutside",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vclickoutside","aria-hidden":"true"},"#"),t(" vClickOutside")],-1),_=n("p",null,"Vue 3 directive to trigger a function when the user clicks outside from a element",-1),y=n("h2",{id:"basic-usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),t(" Basic usage")],-1),x={style:{padding:"50px","background-color":"var(--maz-color-bg-lighter)"},class:"flex flex-center rounded"},q=t(" Click outside me "),C={key:0,style:{padding:"16px","margin-top":"16px","background-color":"var(--maz-color-success)",color:"black"},class:"flex flex-center rounded"},w=h(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">padding</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span> <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--maz-color-bg-lighter<span class="token punctuation">)</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex flex-center rounded<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazCard</span> <span class="token attr-name">v-click-outside</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clikedOutside<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Click outside me
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MazCard</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hasClikedOutside<span class="token punctuation">&quot;</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span> <span class="token property">margin-top</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span> <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--maz-color-success<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex flex-center rounded<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    You clicked outside
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> vClickOutside <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;maz-ui&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">const</span> hasClikedOutside <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">clikedOutside</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    hasClikedOutside<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> hasClikedOutside<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="global-install" tabindex="-1"><a class="header-anchor" href="#global-install" aria-hidden="true">#</a> Global install</h2><p><code>main.ts</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> vClickOutsideInstall <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;maz-ui&#39;</span>
<span class="token keyword">import</span> errorPhoto <span class="token keyword">from</span> <span class="token string">&#39;path/to/error-photo.png&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vClickOutsideInstall<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),O=l({name:"click-outside.html",setup(z){const s=i(!1),p=()=>{s.value=!0,setTimeout(()=>s.value=!1,2e3)};return(B,V)=>{const o=u("MazCard");return a(),e(b,null,[f,_,y,n("div",x,[r((a(),v(o,null,{default:m(()=>[q]),_:1})),[[k(d),p]])]),s.value?(a(),e("div",C," You clicked outside ")):g("",!0),w],64)}}});var N=c(O,[["__file","click-outside.html.vue"]]);export{N as default};