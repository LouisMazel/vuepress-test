var O=Object.defineProperty;var v=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var g=(p,s,a)=>s in p?O(p,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):p[s]=a,k=(p,s)=>{for(var a in s||(s={}))I.call(s,a)&&g(p,a,s[a]);if(v)for(var a of v(s))N.call(s,a)&&g(p,a,s[a]);return p};import{_ as P,e as $,j as d,r as c,o as b,c as z,b as n,a as o,w as r,t as j,h as G,F as R,d as t,i as S}from"./app.3b1d62ed.js";const T=n("h1",{id:"mazdropzone",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mazdropzone","aria-hidden":"true"},"#"),t(" MazDropzone")],-1),U=t("Before you have to import the global css files in your project, follow instructions in "),E=t("Getting Started"),Q=n("p",null,[t("To use this component, you have to install the dependency "),n("code",null,"dropzone")],-1),V=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# install in your project"),t(`
`),n("span",{class:"token function"},"npm"),t(),n("span",{class:"token function"},"install"),t(` dropzone@5
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Y=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# install in your project"),t(`
`),n("span",{class:"token function"},"yarn"),t(),n("span",{class:"token function"},"add"),t(` dropzone@5
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("h2",{id:"basic-usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),t(" Basic usage")],-1),H={key:0,style:{color:"red","text-align":"center"}},J={class:"flex flex-center"},L=t(" Send Files "),K=S(`<blockquote><p>Set <code>:options=&quot;{ autoProcessQueue: true }&quot;</code> to upload automatically the files (no button needed)</p></blockquote><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ClientOnly</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazDropzone</span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mazDropzoneInstance<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dropzoneOptions<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@success</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@sending</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading = true<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@complete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading = false<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ClientOnly</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>errorMessage<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    {{ errorMessage }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazBtn</span> <span class="token attr-name">left-icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Upload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sendFiles<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Send Files
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MazBtn</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">import</span> MazDropzone<span class="token punctuation">,</span> <span class="token punctuation">{</span> MazDropzoneInstance<span class="token punctuation">,</span> MazDropzoneOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;maz-ui/components/MazDropzone&#39;</span>
  <span class="token keyword">import</span> MazBtn <span class="token keyword">from</span> <span class="token string">&#39;maz-ui/components/MazBtn&#39;</span>

  <span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> mazDropzoneInstance <span class="token operator">=</span> ref<span class="token operator">&lt;</span>MazDropzoneInstance<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> errorMessage <span class="token operator">=</span> ref<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">error</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> file<span class="token punctuation">,</span> message <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;dropzone-error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> file<span class="token punctuation">,</span> message <span class="token punctuation">}</span><span class="token punctuation">)</span>
    errorMessage<span class="token punctuation">.</span>value <span class="token operator">=</span> message
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">success</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> file<span class="token punctuation">,</span> response <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;dropzone-success&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> file<span class="token punctuation">,</span> response <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">sendFiles</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> mazDropzoneInstance<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">processQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token literal-property property">dropzoneOptionsBase</span><span class="token operator">:</span> MazDropzoneOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://httpbin.org/post&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;My-Awesome-Header&#39;</span><span class="token operator">:</span> <span class="token string">&#39;header value&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">acceptedFiles</span><span class="token operator">:</span> <span class="token string">&#39;image/jpeg,image/jpg,image/png&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxFilesize</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxFiles</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxThumbnailFilesize</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autoProcessQueue</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autoRemoveOnError</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token literal-property property">translations</span><span class="token operator">:</span> MazDropzoneOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">dictDefaultMessage</span><span class="token operator">:</span> <span class="token string">&#39;Choose or drop a file&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dictFilesDescriptions</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(PNG or JPG under </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dropzoneOptionsBase<span class="token punctuation">.</span>maxFilesize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> MB)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">dictFallbackMessage</span><span class="token operator">:</span> <span class="token string">&#39;Your browser is not supported&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dictFileTooBig</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">File(s) too big (max: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dropzoneOptionsBase<span class="token punctuation">.</span>maxFilesize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> MB)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">dictInvalidFileType</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">File(s) too big (max: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dropzoneOptionsBase<span class="token punctuation">.</span>maxFilesize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> MB)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">dictRemoveFile</span><span class="token operator">:</span> <span class="token string">&#39;Remove&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dictCancelUpload</span><span class="token operator">:</span> <span class="token string">&#39;Cancel upload&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dictMaxFilesExceeded</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">You can not upload any more files. (max: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dropzoneOptionsBase<span class="token punctuation">.</span>maxFiles<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">dictUploadCanceled</span><span class="token operator">:</span> <span class="token string">&#39;Upload canceled&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token literal-property property">dropzoneOptions</span><span class="token operator">:</span> MazDropzoneOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>dropzoneOptionsBase<span class="token punctuation">,</span>
    <span class="token operator">...</span>translations
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props-events-emitted-methods" tabindex="-1"><a class="header-anchor" href="#props-events-emitted-methods" aria-hidden="true">#</a> Props, Events emitted &amp; Methods</h2>`,3),W=$({name:"maz-dropzone.html",setup(p){const s=d(!1),a=d(),u=d(),y=({file:l,message:e})=>{console.log("dropzone-error",{file:l,message:e}),u.value=e},f=({file:l,response:e})=>{console.log("dropzone-success",{file:l,response:e})},h=()=>{var l;return(l=a.value)==null?void 0:l.processQueue()},i={url:"https://httpbin.org/post",headers:{"My-Awesome-Header":"header value"},acceptedFiles:"image/jpeg,image/jpg,image/png",maxFilesize:5,maxFiles:5,maxThumbnailFilesize:3,autoProcessQueue:!1,autoRemoveOnError:!0},_={dictDefaultMessage:"Choose or drop a file",dictFilesDescriptions:`(PNG or JPG under ${i.maxFilesize} MB)`,dictFallbackMessage:"Your browser is not supported",dictFileTooBig:`File(s) too big (max: ${i.maxFilesize} MB)`,dictInvalidFileType:`File(s) too big (max: ${i.maxFilesize} MB)`,dictRemoveFile:"Remove",dictCancelUpload:"Cancel upload",dictMaxFilesExceeded:`You can not upload any more files. (max: ${i.maxFiles})`,dictUploadCanceled:"Upload canceled"},q=k(k({},i),_);return(l,e)=>{const M=c("RouterLink"),x=c("NpmBadge"),m=c("CodeGroupItem"),F=c("CodeGroup"),B=c("MazDropzone"),D=c("MazBtn"),w=c("ComponentPropDoc");return b(),z(R,null,[T,n("blockquote",null,[n("p",null,[U,o(M,{to:"/guide/getting-started.html"},{default:r(()=>[E]),_:1})])]),Q,o(x,{package:"dropzone","dist-tag":"5"}),o(F,null,{default:r(()=>[o(m,{title:"NPM",active:""},{default:r(()=>[V]),_:1}),o(m,{title:"YARN"},{default:r(()=>[Y]),_:1})]),_:1}),A,n("p",null,[o(B,{ref_key:"mazDropzoneInstance",ref:a,options:q,onError:y,onSuccess:f,onSending:e[0]||(e[0]=C=>s.value=!0),onComplete:e[1]||(e[1]=C=>s.value=!1)},null,512)]),u.value?(b(),z("p",H,j(u.value),1)):G("",!0),n("div",J,[o(D,{"left-icon":"Upload",loading:s.value,onClick:h},{default:r(()=>[L]),_:1},8,["loading"])]),K,o(w,{component:"MazDropzone","component-instance":a.value},null,8,["component-instance"])],64)}}});var nn=P(W,[["__file","maz-dropzone.html.vue"]]);export{nn as default};
