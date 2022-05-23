import{_ as d,r as n,o as e,c as o,b as a,a as p,w as s,F as l,f as m,g,d as t,i as v}from"./app.3b1d62ed.js";const h={},b=a("h1",{id:"mazcarousel",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#mazcarousel","aria-hidden":"true"},"#"),t(" MazCarousel")],-1),_=t("Before you have to import the global css files in your project, follow instructions in "),q=t("Getting Started"),z=a("h2",{id:"basic-usage",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),t(" Basic usage")],-1),f=a("br",null,null,-1),w=a("h4",{class:"maz-m-0"},"Carousel",-1),C=a("h4",{class:"maz-m-0"}," Steven Seagal ",-1),y=a("p",{class:"maz-text-muted",style:{"margin-bottom":"0"}}," You're awesome! You're awesome! ",-1),x=v(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazCarousel</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maz-m-0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Carousel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazCard</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, i) in Array(8)<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:images</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
        <span class="token punctuation">&#39;</span>https://www.stevensegallery.com/250/300<span class="token punctuation">&#39;</span>
      ]<span class="token punctuation">&quot;</span></span>
      <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">min-width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maz-m-0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          Steven Seagal
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#content</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maz-text-muted<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
          You&#39;re awesome! You&#39;re awesome!
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MazCard</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MazCarousel</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> MazCarousel <span class="token keyword">from</span> <span class="token string">&#39;maz-ui/components/MazCarousel&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="no-scroll-btn" tabindex="-1"><a class="header-anchor" href="#no-scroll-btn" aria-hidden="true">#</a> no-scroll-btn</h3><p>This options will display the component without scroll buttons</p><h2 id="props-events-emitted" tabindex="-1"><a class="header-anchor" href="#props-events-emitted" aria-hidden="true">#</a> Props &amp; Events emitted</h2>`,5);function M(B,S){const c=n("RouterLink"),u=n("MazCard"),i=n("MazCarousel"),r=n("ComponentPropDoc");return e(),o(l,null,[b,a("blockquote",null,[a("p",null,[_,p(c,{to:"/guide/getting-started.html"},{default:s(()=>[q]),_:1})])]),z,f,p(i,null,{title:s(()=>[w]),default:s(()=>[(e(!0),o(l,null,m(Array(8),(N,k)=>(e(),g(u,{key:k,images:["https://www.stevensegallery.com/250/300"],style:{"min-width":"250px"}},{title:s(()=>[C]),content:s(()=>[y]),_:2},1032,["images"]))),128))]),_:1}),x,p(r,{component:"MazCarousel"})],64)}var Y=d(h,[["render",M],["__file","maz-carousel.html.vue"]]);export{Y as default};