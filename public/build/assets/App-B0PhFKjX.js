function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/app-D2-Pjjbm.js","assets/app-DZ_lwHaF.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i,r as _,o as n,W as d,a as l,c as u,b as p,p as f,d as m,e as v,f as g,g as h,h as c,F as w,u as E}from"./app-D2-Pjjbm.js";const I=a=>(f("data-v-21f28753"),a=a(),m(),a),P={key:0,class:"loader-wrapper"},W=I(()=>v("img",{src:"/image/PernecLogo.gif",alt:"Loading Spinner"},null,-1)),x=[W],S={__name:"custPreloader",setup(a){const e=_(!0);return n(()=>{new d().init()}),n(()=>{setTimeout(()=>{e.value=!1},3500)}),(t,o)=>e.value?(l(),u("div",P,x)):p("",!0)}},V=i(S,[["__scopeId","data-v-21f28753"]]),B={__name:"App",setup(a){const e=_(!1),t=E();return t.beforeEach((o,s,r)=>{e.value=!0,r()}),t.afterEach(()=>{e.value=!1}),n(async()=>{const o=await g(()=>import("./app-D2-Pjjbm.js").then(s=>s.w),__vite__mapDeps([0,1]));new o.default().init()}),(o,s)=>{const r=h("router-view");return l(),u(w,null,[c(V,{loading:e.value},null,8,["loading"]),c(r)],64)}}};export{B as default};
