var J=Object.defineProperty,Q=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var x=(e,t,o)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,O=(e,t)=>{for(var o in t||(t={}))Y.call(t,o)&&x(e,o,t[o]);if(B)for(var o of B(t))Z.call(t,o)&&x(e,o,t[o]);return e},j=(e,t)=>Q(e,X(t));var I=(e,t,o)=>(x(e,typeof t!="symbol"?t+"":t,o),o);import{d as y,_ as $,c as ee,r as f,o as a,a as H,n as A,b,e as k,f as c,g as i,t as w,h as L,i as te,F as C,j as E,k as g,w as oe,l as ne,m as R,u as se,p as re,q as ae,s as ce,v as de,x as ue,y as ie,z as le,A as _e,B as v,C as U,D as me}from"./config.js";const pe=y({name:"app"});function he(e,t,o,r,_,d){const u=f("router-view");return a(),ee(u)}var ve=$(pe,[["render",he]]);const fe="1.0.1",V=class{constructor(){I(this,"currentRoute",H("/"));I(this,"_themeColor",H("black"))}static getInstance(){if(this.instance==null){this.instance=new V;let t=localStorage.getItem("mzui-theme-color");t&&(this.instance.themeColor.value=t)}return this.instance}get themeColor(){return this._themeColor}set themeColor(t){this._themeColor=t}};let m=V;I(m,"instance");const $e=y({name:"doc-header",components:{},setup(){let e=[];A.forEach(n=>{e.push(...n.packages)});const t=b({theme:"black",verson:"3.x",navIndex:0,activeIndex:0,isShowSelect:!1}),o=()=>{console.log(1)},r=()=>{t.isShowSelect=!1},_=()=>{m.getInstance().currentRoute.value="/"},d=k(()=>{let n=m.getInstance().currentRoute.value;return function(h){const l=h.toLowerCase();return l==="component"?(n.indexOf("-taro")>-1&&(n=n.split("-taro")[0]),e.findIndex(s=>s.name.toLowerCase()===n)>-1):n===l||l.includes(n)}}),u=k(()=>function(){return`doc-header-${m.getInstance().themeColor.value}`});return{version:fe,data:t,toHome:_,isActive:d,checkTheme:(n,h)=>{t.isShowSelect=!1,t.activeIndex=h,t.verson=n.name,window.location.href=n.link},themeName:u,handleFocus:o,handleFocusOut:r}}}),ge={class:"header-logo"},we=i("span",{class:"logo-border"},null,-1),ke={class:"version"};function ye(e,t,o,r,_,d){return a(),c("div",{class:L(["doc-header",e.themeName()])},[i("div",ge,[i("a",{class:"logo-link",href:"#",onClick:t[0]||(t[0]=(...u)=>e.toHome&&e.toHome(...u))},"MzUI"),we,i("span",ke,w(e.version),1)])],2)}var F=$($e,[["render",ye]]);const Ie=y({name:"doc-nav",setup(){return{isActive:k(()=>function(t){const o=m.getInstance().currentRoute.value;return(o.indexOf("-taro")>-1?o.split("-taro")[0]:o)==t.toLowerCase()}),nav:b(A),docs:b(te),currentRoute:m.getInstance().currentRoute}}}),Ce={class:"doc-nav"},be={key:0};function Se(e,t,o,r,_,d){const u=f("router-link");return a(),c("div",Ce,[(a(!0),c(C,null,E(e.nav,p=>(a(),c("ol",{key:p},[i("li",null,w(p.name),1),i("ul",null,[(a(!0),c(C,null,E(p.packages,n=>(a(),c(C,{key:n},[n.show?(a(),c("li",be,[g(u,{to:n.name.toLowerCase(),class:L({active:e.isActive(n.name)})},{default:oe(()=>[ne(w(n.name)+"\xA0\xA0",1),i("b",null,w(n.cName),1)]),_:2},1032,["to","class"])])):R("",!0)],64))),128))])]))),128))])}var K=$(Ie,[["render",Se]]);const Te=y({name:"doc-demo-preview",props:{url:String}}),xe={class:"doc-demo-preview"},Ee=["src"];function Re(e,t,o,r,_,d){return a(),c("div",xe,[i("iframe",{src:e.url,frameborder:"0"},null,8,Ee)])}var z=$(Te,[["render",Re]]);const Ae=y({name:"doc",components:{[F.name]:F,[K.name]:K,[z.name]:z},setup(){const e=se(),t=re(),o=["/intro","/start","/theme","/joinus","/starttaro","/contributing"],r=b({demoUrl:"demo.html",curKey:"vue",tabs:[{key:"vue",text:"vue"},{key:"taro",text:"taro"}]}),_=k(()=>{let s=[];return A.map(S=>{S.packages.forEach(T=>{let{tarodoc:G,name:N}=T;G&&(s.push(N.toLowerCase()),s.push(`${N.toLowerCase()}-taro`))})}),s}),d=s=>s.path.indexOf("taro")>-1,u=()=>!o.includes(e.path),p=k(()=>_.value.findIndex(s=>s===e.path.substr(1))>-1),n=s=>{const{origin:S,pathname:T}=window.location;m.getInstance().currentRoute.value=s.name,r.demoUrl=`${S}${T.replace("index.html","")}demo.html#${s.path}`,console.log("data.demoUrl =",r.demoUrl)},h=()=>{const s=e.path;t.replace(d(e)?s.substr(0,s.length-5):`${s}-taro`)},l=s=>{r.curKey=s,h()};return ae(()=>{n(e),r.curKey=d(e)?"taro":"vue"}),ce(s=>{n(s),r.curKey=d(s)?"taro":"vue"}),j(O({},de(r)),{handleTabs:l,isShow:u,isShowTaroDoc:p})}}),Le=e=>(ue("data-v-76f861b6"),e=e(),ie(),e),De={class:"doc-content"},Pe={class:"doc-content-document"},Ve={key:0,class:"doc-content-tabs"},Ne=["onClick"],Be={key:1,class:"doc-content-tabs"},Oe=Le(()=>i("div",{class:"tab-item cur"},"vue/taro",-1)),je=[Oe];function He(e,t,o,r,_,d){const u=f("doc-header"),p=f("doc-nav"),n=f("router-view"),h=f("doc-demo-preview");return a(),c("div",null,[g(u),g(p),i("div",De,[i("div",Pe,[e.isShow()&&e.isShowTaroDoc?(a(),c("div",Ve,[(a(!0),c(C,null,E(e.tabs,l=>(a(),c("div",{class:L(["tab-item",{cur:e.curKey===l.key}]),key:l.key,onClick:s=>e.handleTabs(l.key)},w(l.text),11,Ne))),128))])):R("",!0),e.isShow()&&!e.isShowTaroDoc?(a(),c("div",Be,je)):R("",!0),g(n)]),g(h,{url:e.demoUrl},null,8,["url"])])])}var Ue=$(Ae,[["render",He],["__scopeId","data-v-76f861b6"]]);const D=[],M={"/src/packages/button/doc.md":()=>v(()=>import("./doc2.js"),["demo-1.0.1/doc2.js","demo-1.0.1/config.js"]),"/src/packages/cell/doc.md":()=>v(()=>import("./doc3.js"),["demo-1.0.1/doc3.js","demo-1.0.1/config.js"]),"/src/packages/detailsCell/doc.md":()=>v(()=>import("./doc4.js"),["demo-1.0.1/doc4.js","demo-1.0.1/config.js"]),"/src/packages/formList/doc.md":()=>v(()=>import("./doc5.js"),["demo-1.0.1/doc5.js","demo-1.0.1/config.js"]),"/src/packages/loading/doc.md":()=>v(()=>import("./doc6.js"),["demo-1.0.1/doc6.js","demo-1.0.1/config.js"]),"/src/packages/searchPage/doc.md":()=>v(()=>import("./doc7.js"),["demo-1.0.1/doc7.js","demo-1.0.1/config.js"])};for(const e in M){let t=/packages\/(.*)\/doc.md/.exec(e)[1];D.push({path:"/"+t,component:M[e],name:t})}const q={};for(const e in q){let t=/packages\/(.*)\/doc.taro.md/.exec(e)[1];D.push({path:`/${t}-taro`,component:q[e],name:`${t}-taro`})}const P=[{path:"/",name:"/",component:Ue,children:D}];P.push({name:"notFound",path:"/:path(.*)+",redirect:{name:"/"}});console.log("pagesRouter",P);const W=le({history:_e(),routes:P,scrollBehavior(e){if(e.hash){const t=e.hash.split("#")[1],o=document.getElementById(t);setTimeout(()=>{o&&o.scrollIntoView(!0)})}}});W.afterEach((e,t)=>{window.scrollTo(0,0)});const Fe={setup(){function e(){alert("hello")}return{onlineFun:e}}};function Ke(e,t,o,r,_,d){return a(),c("div",null,[U(e.$slots,"highlight",{},void 0,!0),U(e.$slots,"default",{},void 0,!0)])}var ze=$(Fe,[["render",Ke],["__scopeId","data-v-060d7d92"]]);const Me={mounted(e){e.addEventListener("mouseover",()=>{e.style.color="#fa2c19"}),e.addEventListener("mouseleave",()=>{e.style.color=""})}};me(ve).directive("hover",Me).component("demo-block",ze).use(W).mount("#doc");
