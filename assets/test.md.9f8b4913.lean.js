import{d as h,Z as v,H as p,h as i,o as n,c as r,k as e,r as u,N as g,n as _,_ as E,w as m,l as y,Q as w,a as d}from"./chunks/framework.2e539047.js";const f="/807660937.github.io/logo.png";const b=h({name:"CodePreview",props:{code:{type:String,required:!0},lang:{type:String,required:!0},meta:{type:String,required:!0}},setup(o){const t=i(),s=i(0),l=i(!1);return{codeEl:t,height:s,copied:l,toggleCode:()=>{const a=t.value?t.value.offsetHeight:0;s.value=s.value===0?a:0},copyCode:()=>{if(!l.value){try{navigator.clipboard.writeText(o.code)}catch(a){console.log(a)}l.value=!0,setTimeout(()=>{l.value=!1},1e3)}}}}}),C=(o,t)=>{const s=o.__vccOpts||o;for(const[l,a]of t)s[l]=a;return s},k={class:"mdp-demo__preview"},x={class:"mdp-demo__toolbar"},B={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",height:"20",width:"20",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},S=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4"},null,-1),q=[S],A={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",height:"20",width:"20",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},P=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"},null,-1),M=[P],T=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"ionicon",viewBox:"0 0 512 512"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"46",d:"M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"})],-1),V=[T],D={ref:"codeEl"};function F(o,t,s,l,a,J){return n(),r("div",{class:_(["mdp-demo",o.height>0&&"is-expanded"])},[e("div",k,[u(o.$slots,"default")]),e("div",x,[e("div",{class:"mdp-demo__btn mdp-demo__btn-copy",onClick:t[0]||(t[0]=(...c)=>o.copyCode&&o.copyCode(...c))},[o.copied?(n(),r("svg",B,q)):(n(),r("svg",A,M))]),e("div",{class:"mdp-demo__btn mdp-demo__btn-code",onClick:t[1]||(t[1]=(...c)=>o.toggleCode&&o.toggleCode(...c))},V)]),e("div",{class:"mdp-demo__code",style:g({height:o.height+"px",visibility:o.height>0?"visible":"hidden"})},[e("div",D,[u(o.$slots,"code")],512)],4)],2)}const z=C(b,[["render",F]]),I=h({name:"CodePreviewWrapper",props:{code:{type:String,required:!0},lang:{type:String,required:!0},meta:{type:String,default:""},component:{type:String,default:"CodePreview"}},setup(o,t){const s=v().appContext.app.component(o.component),l=s||z;return()=>p(l,{code:decodeURIComponent(o.code),lang:decodeURIComponent(o.lang),meta:decodeURIComponent(o.meta)},{default:t.slots.default,code:t.slots.code})}}),N={},H={class:"flex-row-center rounded-lg w-full h-40 bg-blue-500"};function $(o,t){return n(),r("div",H,"vue 组件预览测试")}const j=E(N,[["render",$]]),R=w("",4),U=e("div",{class:"language-vue vp-adaptive-theme line-numbers-mode"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"vue"),e("pre",{class:"shiki github-dark vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"<"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"  <"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}}," "),e("span",{style:{color:"#B392F0"}},"class"),e("span",{style:{color:"#E1E4E8"}},"="),e("span",{style:{color:"#9ECBFF"}},'"flex-row-center rounded-lg w-full h-40 bg-blue-500"'),e("span",{style:{color:"#E1E4E8"}},">vue 组件预览测试</"),e("span",{style:{color:"#85E89D"}},"div"),e("span",{style:{color:"#E1E4E8"}},">")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#E1E4E8"}},"</"),e("span",{style:{color:"#85E89D"}},"template"),e("span",{style:{color:"#E1E4E8"}},">")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#24292E"}},"<"),e("span",{style:{color:"#22863A"}},"template"),e("span",{style:{color:"#24292E"}},">")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292E"}},"  <"),e("span",{style:{color:"#22863A"}},"div"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#6F42C1"}},"class"),e("span",{style:{color:"#24292E"}},"="),e("span",{style:{color:"#032F62"}},'"flex-row-center rounded-lg w-full h-40 bg-blue-500"'),e("span",{style:{color:"#24292E"}},">vue 组件预览测试</"),e("span",{style:{color:"#22863A"}},"div"),e("span",{style:{color:"#24292E"}},">")]),d(`
`),e("span",{class:"line"},[e("span",{style:{color:"#24292E"}},"</"),e("span",{style:{color:"#22863A"}},"template"),e("span",{style:{color:"#24292E"}},">")])])]),e("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])],-1),Q=JSON.parse('{"title":"功能测试页","description":"","frontmatter":{},"headers":[],"relativePath":"test.md","filePath":"test.md","lastUpdated":1709877064000}'),O={name:"test.md"},W=Object.assign(O,{setup(o){return(t,s)=>(n(),r("div",null,[R,p(y(I),{lang:"vue",meta:"preview",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22flex-row-center%20rounded-lg%20w-full%20h-40%20bg-blue-500%22%3Evue%20%E7%BB%84%E4%BB%B6%E9%A2%84%E8%A7%88%E6%B5%8B%E8%AF%95%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E",component:"CodePreview"},{code:m(()=>[U]),default:m(()=>[p(j)]),_:1})]))}});export{Q as __pageData,W as default};
