import{d as v,a as D,u as R,p as S,e as j,E as K,_ as d,f as a,g as u,k as w,l as F,t as f,m as B,F as g,r as x,o as s,b as z,n as $,j as L,w as M,x as N,y as P,z as U,A as X,B as p,D as Y}from"./config.js";const H=navigator.userAgent.toLowerCase(),W=/ios|iphone|ipod|ipad|android/.test(H);const q=v({name:"app",setup(){const t=D("MzUI"),e=R(),n=S(),o=()=>{n.back()},r=j(()=>t.value&&t.value!="/"&&!t.value.includes("-taro"));return K(()=>e,()=>{var i,l;const{hash:c}=window.top.location;!W&&e.hash!=c?t.value=((i=e==null?void 0:e.meta)==null?void 0:i.ComponentName)||e.name:t.value=((l=e==null?void 0:e.meta)==null?void 0:l.ComponentName)||e.name},{immediate:!0,deep:!0}),{title:t,isShow:r,goBack:o}}}),G={key:0,id:"nav"};function J(t,e,n,o,r,c){const i=x("nut-icon"),l=x("router-view");return s(),a(g,null,[t.isShow?(s(),a("div",G,[u("div",{class:"back",onClick:e[0]||(e[0]=(...m)=>t.goBack&&t.goBack(...m))},[w(i,{name:"left"})]),F(" "+f(t.title),1)])):B("",!0),w(l)],64)}var Q=d(q,[["render",J]]);const Z=v({name:"doc",setup(){return z({nav:$})}}),ee=t=>(N("data-v-62a445de"),t=t(),P(),t),te={class:"index"},ne=ee(()=>u("div",{class:"index-header"},[u("div",{class:"info"},[u("h1",null,"MzUI2"),u("p",null,"\u5BF9NutUI\u4E8C\u6B21\u5C01\u88C5\u7684\u79FB\u52A8\u7AEFVue3\u3001\u5C0F\u7A0B\u5E8F \u7EC4\u4EF6\u5E93")])],-1)),oe={class:"index-components"},re={key:0};function ae(t,e,n,o,r,c){const i=x("router-link"),l=x("nut-icon");return s(),a("div",te,[ne,u("div",oe,[(s(!0),a(g,null,L(t.nav,m=>(s(),a("ol",{key:m},[u("li",null,f(m.name),1),u("ul",null,[(s(!0),a(g,null,L(m.packages,h=>(s(),a(g,{key:h},[h.show?(s(),a("li",re,[w(i,{to:h.name.toLowerCase()},{default:M(()=>[F(f(h.name)+"\xA0\xA0"+f(h.cName),1)]),_:2},1032,["to"]),w(l,{size:"14px",color:"#979797",name:"right"})])):B("",!0)],64))),128))])]))),128))])])}var se=d(Z,[["render",ae],["__scopeId","data-v-62a445de"]]);const ce=v({name:"doc",setup(){return{}}}),ue=t=>(N("data-v-f426dca4"),t=t(),P(),t),ie={class:"index"},de=ue(()=>u("div",{class:"index-header"},[u("div",{class:"info"},[u("h1",null,"MzUI"),u("p",null,"\u8BF7\u4F7F\u7528\u5FAE\u4FE1\u626B\u63CF\u4E0B\u65B9\u4E8C\u7EF4\u7801\u4F53\u9A8C")])],-1)),_e=[de];function le(t,e,n,o,r,c){return s(),a("div",ie,_e)}var pe=d(ce,[["render",le],["__scopeId","data-v-f426dca4"]]);const C=[{path:"/",name:"/",component:se}],T=t=>{for(const e in $)if(Object.prototype.hasOwnProperty.call($,e)){const n=$[e];let o=n.packages.findIndex(r=>r.name.toLowerCase()===t);if(o!==-1)return n.packages[o].name}},I={"/src/packages/button/demo.vue":()=>p(()=>import("./demo.js"),["demo-1.0.1/demo.js","demo-1.0.1/demo4.css","demo-1.0.1/config.js"]),"/src/packages/cell/demo.vue":()=>p(()=>import("./demo2.js"),["demo-1.0.1/demo2.js","demo-1.0.1/demo6.css","demo-1.0.1/config.js"]),"/src/packages/detailsCell/demo.vue":()=>p(()=>import("./demo3.js"),["demo-1.0.1/demo3.js","demo-1.0.1/demo5.css","demo-1.0.1/config.js"]),"/src/packages/formList/demo.vue":()=>p(()=>import("./demo4.js"),["demo-1.0.1/demo4.js","demo-1.0.1/demo.css","demo-1.0.1/config.js"]),"/src/packages/loading/demo.vue":()=>p(()=>import("./demo5.js"),["demo-1.0.1/demo5.js","demo-1.0.1/demo3.css","demo-1.0.1/config.js"]),"/src/packages/searchPage/demo.vue":()=>p(()=>import("./demo6.js"),["demo-1.0.1/demo6.js","demo-1.0.1/demo2.css","demo-1.0.1/config.js"])};for(const t in I){let e=/packages\/(.*)\/demo.vue/.exec(t)[1];C.push({path:"/"+e,component:I[t],name:e,meta:{ComponentName:T(e)}}),C.push({path:"/"+e+"-taro",component:pe,name:e+"-taro",meta:{ComponentName:T(e)}})}C.push({name:"NotFound",path:"/:path(.*)+",redirect:()=>"/"});const me=U({history:X(),routes:C});function he(t){const e="mz-"+t;return{componentName:e,create:function(n){return n.baseName=t,n.name=e,n.install=o=>{o.component(n.name,n)},v(n)},createDemo:function(n){return n.baseName=t,n.name="demo-"+t,v(n)}}}const{componentName:je,create:fe}=he("button"),ve=fe({props:{text:String},emits:["click"],setup(t,{emit:e,slots:n}){return{handleClick:r=>{e("click",r)}}}});function ge(t,e,n,o,r,c){return s(),a("view",{onClick:e[0]||(e[0]=(...i)=>t.handleClick&&t.handleClick(...i))}," \u6309\u94AE-"+f(t.text),1)}var $e=d(ve,[["render",ge]]);const we={};function xe(t,e){return s(),a("view",null,"cell")}var Ce=d(we,[["render",xe]]);const Ee={};function ye(t,e){return s(),a("view",null,"CELL****")}var ke=d(Ee,[["render",ye]]);const Le={};function Te(t,e){return s(),a("view",null,"cell")}var Ie=d(Le,[["render",Te]]);const Ae={};function Fe(t,e){return s(),a("view",null,"CELL****")}var Be=d(Ae,[["render",Fe]]);const Ne={};function Pe(t,e){return s(),a("view",null,"CELL****")}var Oe=d(Ne,[["render",Pe]]);function Ve(t){[$e,Ce,ke,Ie,Be,Oe].forEach(n=>{n.install?t.use(n):n.name&&t.component(n.name,n)})}var be={install:Ve,version:"1.0.1"},_,De="ontouchstart"in window;document.createTouch||(document.createTouch=function(t,e,n,o,r,c,i){return new O(e,n,{pageX:o,pageY:r,screenX:c,screenY:i,clientX:o-window.pageXOffset,clientY:r-window.pageYOffset},0,0)});document.createTouchList||(document.createTouchList=function(){for(var t=k(),e=0;e<arguments.length;e++)t[e]=arguments[e];return t.length=arguments.length,t});var O=function(e,n,o,r,c){r=r||0,c=c||0,this.identifier=n,this.target=e,this.clientX=o.clientX+r,this.clientY=o.clientY+c,this.screenX=o.screenX+r,this.screenY=o.screenY+c,this.pageX=o.pageX+r,this.pageY=o.pageY+c};function k(){var t=[];return t.item=function(e){return this[e]||null},t.identifiedTouch=function(e){return this[e+1]||null},t}var E=!1;function y(t){return function(e){e.type==="mousedown"&&(E=!0),e.type==="mouseup"&&(E=!1),!(e.type==="mousemove"&&!E)&&((e.type==="mousedown"||!_||_&&!_.dispatchEvent)&&(_=e.target),Re(t,e),e.type==="mouseup"&&(_=null))}}function Re(t,e){var n=document.createEvent("Event");n.initEvent(t,!0,!0),n.altKey=e.altKey,n.ctrlKey=e.ctrlKey,n.metaKey=e.metaKey,n.shiftKey=e.shiftKey,n.touches=A(e),n.targetTouches=A(e),n.changedTouches=V(e),_.dispatchEvent(n)}function V(t){var e=k();return e.push(new O(_,1,t,0,0)),e}function A(t){return t.type==="mouseup"?k():V(t)}function b(){window.addEventListener("mousedown",y("touchstart"),!0),window.addEventListener("mousemove",y("touchmove"),!0),window.addEventListener("mouseup",y("touchend"),!0)}b.multiTouchOffset=75;De||new b;Y(Q).use(me).use(be).mount("#app");export{he as c};
