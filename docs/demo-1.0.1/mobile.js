import{d as L,a as D,u as K,p as R,e as S,E as j,_ as d,f as s,g as u,k as w,m as F,t as f,l as B,F as v,r as $,o as a,b as z,n as g,j as T,w as M,x as N,y as P,z as U,A as X,B as h,D as Y}from"./config.js";const H=navigator.userAgent.toLowerCase(),W=/ios|iphone|ipod|ipad|android/.test(H);const q=L({name:"app",setup(){const t=D("MzUI"),e=K(),n=R(),o=()=>{n.back()},r=S(()=>t.value&&t.value!="/"&&!t.value.includes("-taro"));return j(()=>e,()=>{var i,l;const{hash:c}=window.top.location;!W&&e.hash!=c?t.value=((i=e==null?void 0:e.meta)==null?void 0:i.ComponentName)||e.name:t.value=((l=e==null?void 0:e.meta)==null?void 0:l.ComponentName)||e.name},{immediate:!0,deep:!0}),{title:t,isShow:r,goBack:o}}}),G={key:0,id:"nav"};function J(t,e,n,o,r,c){const i=$("nut-icon"),l=$("router-view");return a(),s(v,null,[t.isShow?(a(),s("div",G,[u("div",{class:"back",onClick:e[0]||(e[0]=(...p)=>t.goBack&&t.goBack(...p))},[w(i,{name:"left"})]),F(" "+f(t.title),1)])):B("",!0),w(l)],64)}var Q=d(q,[["render",J]]);const Z=L({name:"doc",setup(){return z({nav:g})}}),ee=t=>(N("data-v-59fb1302"),t=t(),P(),t),te={class:"index"},ne=ee(()=>u("div",{class:"index-header"},[u("div",{class:"info"},[u("h1",null,"MzUI2"),u("p",null,"\u5BF9NutUI\u4E8C\u6B21\u5C01\u88C5\u7684\u79FB\u52A8\u7AEFVue3\u3001\u5C0F\u7A0B\u5E8F \u7EC4\u4EF6\u5E93")])],-1)),oe={class:"index-components"},re={key:0};function se(t,e,n,o,r,c){const i=$("router-link"),l=$("nut-icon");return a(),s("div",te,[ne,u("div",oe,[(a(!0),s(v,null,T(t.nav,p=>(a(),s("ol",{key:p},[u("li",null,f(p.name),1),u("ul",null,[(a(!0),s(v,null,T(p.packages,m=>(a(),s(v,{key:m},[m.show?(a(),s("li",re,[w(i,{to:m.name.toLowerCase()},{default:M(()=>[F(f(m.name)+"\xA0\xA0"+f(m.cName),1)]),_:2},1032,["to"]),w(l,{size:"14px",color:"#979797",name:"right"})])):B("",!0)],64))),128))])]))),128))])])}var ae=d(Z,[["render",se],["__scopeId","data-v-59fb1302"]]);const ce=L({name:"doc",setup(){return{}}}),ue=t=>(N("data-v-f426dca4"),t=t(),P(),t),ie={class:"index"},de=ue(()=>u("div",{class:"index-header"},[u("div",{class:"info"},[u("h1",null,"MzUI"),u("p",null,"\u8BF7\u4F7F\u7528\u5FAE\u4FE1\u626B\u63CF\u4E0B\u65B9\u4E8C\u7EF4\u7801\u4F53\u9A8C")])],-1)),_e=[de];function le(t,e,n,o,r,c){return a(),s("div",ie,_e)}var pe=d(ce,[["render",le],["__scopeId","data-v-f426dca4"]]);const x=[{path:"/",name:"/",component:ae}],k=t=>{for(const e in g)if(Object.prototype.hasOwnProperty.call(g,e)){const n=g[e];let o=n.packages.findIndex(r=>r.name.toLowerCase()===t);if(o!==-1)return n.packages[o].name}},I={"/src/packages/cell/demo.vue":()=>h(()=>import("./demo.js"),["demo-1.0.1/demo.js","demo-1.0.1/demo5.css","demo-1.0.1/config.js"]),"/src/packages/detailsCell/demo.vue":()=>h(()=>import("./demo2.js"),["demo-1.0.1/demo2.js","demo-1.0.1/demo4.css","demo-1.0.1/config.js"]),"/src/packages/formList/demo.vue":()=>h(()=>import("./demo3.js"),["demo-1.0.1/demo3.js","demo-1.0.1/demo2.css","demo-1.0.1/config.js"]),"/src/packages/loading/demo.vue":()=>h(()=>import("./demo4.js"),["demo-1.0.1/demo4.js","demo-1.0.1/demo.css","demo-1.0.1/config.js"]),"/src/packages/searchPage/demo.vue":()=>h(()=>import("./demo5.js"),["demo-1.0.1/demo5.js","demo-1.0.1/demo3.css","demo-1.0.1/config.js"])};for(const t in I){let e=/packages\/(.*)\/demo.vue/.exec(t)[1];x.push({path:"/"+e,component:I[t],name:e,meta:{ComponentName:k(e)}}),x.push({path:"/"+e+"-taro",component:pe,name:e+"-taro",meta:{ComponentName:k(e)}})}x.push({name:"NotFound",path:"/:path(.*)+",redirect:()=>"/"});const me=U({history:X(),routes:x}),he={};function fe(t,e){return a(),s("view",null,"cell")}var ve=d(he,[["render",fe]]);const ge={};function we(t,e){return a(),s("view",null,"CELL****")}var $e=d(ge,[["render",we]]);const xe={};function ye(t,e){return a(),s("view",null,"cell")}var Ee=d(xe,[["render",ye]]);const Le={};function Ce(t,e){return a(),s("view",null,"CELL****")}var Te=d(Le,[["render",Ce]]);const ke={};function Ie(t,e){return a(),s("view",null,"CELL****")}var Ae=d(ke,[["render",Ie]]);function Fe(t){[ve,$e,Ee,Te,Ae].forEach(n=>{n.install?t.use(n):n.name&&t.component(n.name,n)})}var Be={install:Fe,version:"1.0.1"},_,Ne="ontouchstart"in window;document.createTouch||(document.createTouch=function(t,e,n,o,r,c,i){return new O(e,n,{pageX:o,pageY:r,screenX:c,screenY:i,clientX:o-window.pageXOffset,clientY:r-window.pageYOffset},0,0)});document.createTouchList||(document.createTouchList=function(){for(var t=C(),e=0;e<arguments.length;e++)t[e]=arguments[e];return t.length=arguments.length,t});var O=function(e,n,o,r,c){r=r||0,c=c||0,this.identifier=n,this.target=e,this.clientX=o.clientX+r,this.clientY=o.clientY+c,this.screenX=o.screenX+r,this.screenY=o.screenY+c,this.pageX=o.pageX+r,this.pageY=o.pageY+c};function C(){var t=[];return t.item=function(e){return this[e]||null},t.identifiedTouch=function(e){return this[e+1]||null},t}var y=!1;function E(t){return function(e){e.type==="mousedown"&&(y=!0),e.type==="mouseup"&&(y=!1),!(e.type==="mousemove"&&!y)&&((e.type==="mousedown"||!_||_&&!_.dispatchEvent)&&(_=e.target),Pe(t,e),e.type==="mouseup"&&(_=null))}}function Pe(t,e){var n=document.createEvent("Event");n.initEvent(t,!0,!0),n.altKey=e.altKey,n.ctrlKey=e.ctrlKey,n.metaKey=e.metaKey,n.shiftKey=e.shiftKey,n.touches=A(e),n.targetTouches=A(e),n.changedTouches=V(e),_.dispatchEvent(n)}function V(t){var e=C();return e.push(new O(_,1,t,0,0)),e}function A(t){return t.type==="mouseup"?C():V(t)}function b(){window.addEventListener("mousedown",E("touchstart"),!0),window.addEventListener("mousemove",E("touchmove"),!0),window.addEventListener("mouseup",E("touchend"),!0)}b.multiTouchOffset=75;Ne||new b;Y(Q).use(me).use(Be).mount("#app");