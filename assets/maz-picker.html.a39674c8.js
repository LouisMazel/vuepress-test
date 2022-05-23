import{_ as y,e as x,j as k,r as c,o as w,c as M,b as n,a as s,w as v,t as p,F as D,d as a,i as o}from"./app.3b1d62ed.js";const Y=n("h1",{id:"mazpicker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mazpicker","aria-hidden":"true"},"#"),a(" MazPicker")],-1),V=a("Before you have to import the global css files in your project, follow instructions in "),z=a("Getting Started"),P=n("p",null,[a("To use this component, you have to install the dependency "),n("code",null,"dayjs")],-1),T=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# install in your project"),a(`
`),n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(` dayjs
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# install in your project"),a(`
`),n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(` dayjs
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("h2",{id:"documentation",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),a(" Documentation")],-1),H=a("As input value, min-date, max-date or disabled-dates you must provide the same and a valid format of "),E={href:"https://day.js.org/docs/en/display/format",target:"_blank",rel:"noopener noreferrer"},I=a("Dayjs"),U=o("<ul><li><strong>Simply date</strong>: The better format is <code>YYYY-MM-DD</code> - <em>Example: &quot;2022-03-02&quot; (for range picker &quot;{ start: &#39;2022-03-02&#39;, end: &#39;2022-03-28&#39; }&quot;)</em></li><li><strong>Date Time</strong>: The better format is <code>YYYY-MM-DD HH:mm</code> or <code>YYYY-MM-DD h:mm a</code> - <em>Example: &quot;2022-03-02 16:30&quot; or &quot;2022-03-02 04:30 pm&quot;</em></li><li><strong>Only Time</strong>: <code>HH:mm</code>, <code>h:mm a</code>, etc - <em>Example: &quot;16:30&quot; or &quot;4:30 pm&quot;</em></li></ul>",1),C=a("The returned value is formatted by "),F={href:"https://day.js.org/docs/en/display/format",target:"_blank",rel:"noopener noreferrer"},N=a("days.format()"),B=a(" function with the format provided"),G=a("This component use "),R={href:"/maz-ui-3/components/maz-input.html",target:"_blank",rel:"noopener noreferrer"},A=a("MazInput"),L=a(", so it inherits his props:"),O=n("ul",null,[n("li",null,[a("Use "),n("code",null,"label"),a(" & "),n("code",null,"placeholder"),a(" props")])],-1),W=n("h2",{id:"options",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),a(" Options")],-1),J=o("<li><p><code>time</code>: To enable the time picker</p></li><li><p><code>only-time</code>: To only enable the time picker</p></li><li><p><code>format</code>: Will be used to parse the input date (<code>v-model</code>) and format the date emitted on output.</p></li><li><p><code>locale</code>: You can provide a local (example: <code>fr-FR</code>, <code>en-US</code>, <code>de-DE</code>, etc), otherwise the component will get the user locale from the browser language. If no browser locale is available, the component will fetch the local from <code>https://ip2c.org/s</code> (network needed). And the last, if no browser is available from ip2c, the <code>en-US</code> locale is used.</p></li><li><p><code>first-day-of-week</code> (default: <code>0</code>): should be a <code>number</code> - Example: For France, you should set <code>:first-day-of-week=&quot;1&quot;</code> to have monday at the first day of week in calendar.</p></li>",5),K=n("code",null,"inputDateStyle",-1),Q=a(": To customize the date time format into the input - Must be a value of "),X={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters",target:"_blank",rel:"noopener noreferrer"},Z=a("Intl.DateTimeFormatOptions"),$=a(" - Default option: "),nn=n("code",null,"{ dateStyle: 'full' }",-1),an=o('<li><p><code>shortcut</code>: With the shortcut property, you can specify a shortcut that&#39;s selected by default by passing it&#39;s identifier.</p></li><li><p><code>min-date</code> &amp; <code>max-date</code>: Must have the same format as model-value - the component will validate automatically the dates - Exemple: <a href="#inline">see example</a></p></li><li><p><code>disabled-weekly</code> : Days of the week which are disabled every week, in Array format with day index, Sunday as 0 and Saturday as 6: <code>[0,4,6]</code></p></li><li><p><code>disabled-dates</code> : Provide an array of date string, the days in date picker will be disabled. Time will be taken for the time picker Ex: <code>[&#39;2022-02-02&#39;, &#39;2022-02-22&#39;]</code></p></li><li><p><code>disabled-hours</code> : For time picker or date time picker, to globally disable hours, provide an Array format with hours value: <code>[0, 1,..., 22, 23]</code> (0 to 23)</p></li><li><p>12h format: to enable the Date Time Picker or Time Picker with the 12h format selection mode, you must add the property <code>format</code> with <code>hh:mm a</code> or <code>hh:mm a</code>, etc.</p></li><li><p><code>minute-interval</code> (default: <code>5</code>): Is the interval between minutes in the Time picker</p></li><li><p><code>double</code>: Date Picker can have 2 calendar in the same row - usefull in range mode.</p></li><li><p><code>inline</code>: <a href="#inline">see example</a></p></li><li><p><code>auto-close</code>: the picker will be automatically closed after the user has selected a value</p></li>',10),sn=n("h2",{id:"multiple-pickers",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#multiple-pickers","aria-hidden":"true"},"#"),a(" Multiple Pickers")],-1),tn=n("h3",{id:"date-picker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#date-picker","aria-hidden":"true"},"#"),a(" Date Picker")],-1),en={class:"language-html ext-html"},on={class:"language-json"},pn=o(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazPicker</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dateValue<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Select date<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> MazPicker <span class="token keyword">from</span> <span class="token string">&#39;maz-ui/components/MazPicker&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">const</span> dateValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;2022-02-03&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="date-time-picker" tabindex="-1"><a class="header-anchor" href="#date-time-picker" aria-hidden="true">#</a> Date Time Picker</h3><h4 id="_24-format" tabindex="-1"><a class="header-anchor" href="#_24-format" aria-hidden="true">#</a> 24 format</h4>`,3),ln={class:"language-html ext-html"},cn={class:"language-json"},un=o(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazPicker</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dateTimeValue<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>YYYY-MM-DD HH:mm<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Select date and time<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">time</span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> MazPicker <span class="token keyword">from</span> <span class="token string">&#39;maz-ui/components/MazPicker&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">const</span> dateTimeValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;2022-02-03 16:30&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12-format" tabindex="-1"><a class="header-anchor" href="#_12-format" aria-hidden="true">#</a> 12 format</h4>`,2),rn={class:"language-html ext-html"},dn={class:"language-json"},kn=o(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazPicker</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dateTime12Value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>YYYY-MM-DD hh:mm a<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Select date and time<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">time</span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> MazPicker <span class="token keyword">from</span> <span class="token string">&#39;maz-ui/components/MazPicker&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">const</span> dateTime12Value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;2022-02-03 04:30 pm&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="time-picker" tabindex="-1"><a class="header-anchor" href="#time-picker" aria-hidden="true">#</a> Time Picker</h3><h4 id="_24h-format" tabindex="-1"><a class="header-anchor" href="#_24h-format" aria-hidden="true">#</a> 24h format</h4>`,3),mn={class:"language-html ext-html"},vn={class:"language-json"},gn=o(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazPicker</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dateTimeValue<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>YYYY-MM-DD HH:mm<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Select time<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">only-time</span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> MazPicker <span class="token keyword">from</span> <span class="token string">&#39;maz-ui/components/MazPicker&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">const</span> dateTimeValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;2022-02-03 16:30&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12h-format" tabindex="-1"><a class="header-anchor" href="#_12h-format" aria-hidden="true">#</a> 12h format</h4>`,2),hn={class:"language-html ext-html"},bn={class:"language-json"},fn=o(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazPicker</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dateTime12Value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>YYYY-MM-DD HH:mm a<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Select time<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">only-time</span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> MazPicker <span class="token keyword">from</span> <span class="token string">&#39;maz-ui/components/MazPicker&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">const</span> dateTime12Value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;2022-02-03 04:30 pm&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="range-picker" tabindex="-1"><a class="header-anchor" href="#range-picker" aria-hidden="true">#</a> Range Picker</h3><p>To enable the range mode, you should provide an object like this <code>{ start: undefined, end: undefined }</code> as initiale model-value</p>`,3),_n={class:"language-json ext-json"},qn={class:"language-json"},yn=o(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazPicker</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rangeValues<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Select periode<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:min-date</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>minMaxDates.min<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:max-date</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>minMaxDates.max<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">double</span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> MazPicker <span class="token keyword">from</span> <span class="token string">&#39;maz-ui/components/MazPicker&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">const</span> rangeValues <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token string">&#39;2022-02-03&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token string">&#39;2022-02-28&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> minMaxDates <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token string">&#39;2022-05-05&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token string">&#39;2022-06-20&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="inline" tabindex="-1"><a class="header-anchor" href="#inline" aria-hidden="true">#</a> Inline</h3><h4 id="inputs" tabindex="-1"><a class="header-anchor" href="#inputs" aria-hidden="true">#</a> Inputs</h4>`,3),xn=o(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazPicker</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rangeValues<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:min-date</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>minMaxDates.min<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:max-date</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>minMaxDates.max<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">inline</span>
    <span class="token attr-name">double</span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">const</span> rangeValues <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token string">&quot;2022-05-02&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token string">&quot;2022-06-28&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> minMaxDates <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token string">&#39;2022-05-05&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token string">&#39;2022-06-20&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props-events-emitted" tabindex="-1"><a class="header-anchor" href="#props-events-emitted" aria-hidden="true">#</a> Props &amp; Events emitted</h2>`,2),wn=x({name:"maz-picker.html",setup(Mn){k("16:30");const g=k("2022-02-03"),i=k("2022-02-03 16:30"),u=k("2022-02-03 04:30 pm"),r=k({start:"2022-05-02",end:"2022-06-28"}),d=k({min:"2022-05-05",max:"2022-06-20"});return(Dn,t)=>{const b=c("RouterLink"),f=c("NpmBadge"),h=c("CodeGroupItem"),_=c("CodeGroup"),m=c("ExternalLinkIcon"),l=c("MazPicker"),q=c("ComponentPropDoc");return w(),M(D,null,[Y,n("blockquote",null,[n("p",null,[V,s(b,{to:"/guide/getting-started.html"},{default:v(()=>[z]),_:1})])]),P,s(f,{package:"dayjs"}),s(_,null,{default:v(()=>[s(h,{title:"NPM",active:""},{default:v(()=>[T]),_:1}),s(h,{title:"YARN"},{default:v(()=>[j]),_:1})]),_:1}),S,n("ul",null,[n("li",null,[n("p",null,[H,n("a",E,[I,s(m)])]),U]),n("li",null,[n("p",null,[C,n("a",F,[N,s(m)]),B])]),n("li",null,[n("p",null,[G,n("a",R,[A,s(m)]),L]),O])]),W,n("ul",null,[J,n("li",null,[n("p",null,[K,Q,n("a",X,[Z,s(m)]),$,nn])]),an]),sn,tn,n("div",en,[n("pre",on,[n("code",null,'v-model="'+p(g.value)+'"',1)])]),n("p",null,[s(l,{modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=e=>g.value=e),label:"Select date",color:"secondary"},null,8,["modelValue"])]),pn,n("div",ln,[n("pre",cn,[n("code",null,'v-model="'+p(i.value)+'"',1)])]),n("p",null,[s(l,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e),format:"YYYY-MM-DD HH:mm",label:"Select date and time",color:"secondary",time:""},null,8,["modelValue"])]),un,n("div",rn,[n("pre",dn,[n("code",null,'v-model="'+p(u.value)+'"',1)])]),n("p",null,[s(l,{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=e=>u.value=e),format:"YYYY-MM-DD hh:mm a",label:"Select date and time",color:"secondary",time:""},null,8,["modelValue"])]),kn,n("div",mn,[n("pre",vn,[n("code",null,'v-model="'+p(i.value)+'"',1)])]),n("p",null,[s(l,{modelValue:i.value,"onUpdate:modelValue":t[3]||(t[3]=e=>i.value=e),format:"YYYY-MM-DD HH:mm",label:"Select time",color:"secondary","only-time":""},null,8,["modelValue"])]),gn,n("div",hn,[n("pre",bn,[n("code",null,'v-model="'+p(u.value)+'"',1)])]),n("p",null,[s(l,{modelValue:u.value,"onUpdate:modelValue":t[4]||(t[4]=e=>u.value=e),format:"YYYY-MM-DD HH:mm a",label:"Select time",color:"secondary","only-time":""},null,8,["modelValue"])]),fn,n("div",_n,[n("pre",qn,[n("code",null,'v-model="'+p(r.value)+'"',1)])]),n("p",null,[s(l,{modelValue:r.value,"onUpdate:modelValue":t[5]||(t[5]=e=>r.value=e),label:"Select periode",color:"secondary","min-date":d.value.min,"max-date":d.value.max,double:""},null,8,["modelValue","min-date","max-date"])]),yn,n("p",null,"rangeValues (v-model): "+p(r.value),1),n("p",null,"min-date: "+p(d.value.min),1),n("p",null,"max-date: "+p(d.value.max),1),n("p",null,[s(l,{modelValue:r.value,"onUpdate:modelValue":t[6]||(t[6]=e=>r.value=e),color:"secondary","min-date":d.value.min,"max-date":d.value.max,inline:"",double:""},null,8,["modelValue","min-date","max-date"])]),xn,s(q,{component:"MazPicker"})],64)}}});var Vn=y(wn,[["__file","maz-picker.html.vue"]]);export{Vn as default};
