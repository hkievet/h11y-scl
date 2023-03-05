import{x as oe,y as ie,z as Y,S as x,i as h,s as b,q as g,A as k,e as p,a as N,b as f,g as R,t as d,c as I,d as M,B,C as $,D as z,E as W,F as J,G as ae,h as v,j as O,k as Q,m as E,p as T}from"./index-143b8e04.js";const K="storybook-registration-context";function le(s={}){Y(K,{render:!0,register:()=>{},meta:{},args:{},...s})}function j(){return oe(K)||le(),ie(K)}function ce(s,e,r){return j().meta=e,s.$$set=t=>{r(0,e=g(g({},e),k(t)))},e=k(e),[]}class fe extends x{constructor(e){super(),h(this,e,ce,null,b,{})}}fe.__docgen={version:3,name:"Meta.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ue=s=>({}),P=s=>({...s[1].args,context:s[1].storyContext,args:s[1].args});function U(s){let e;const r=s[5].default,t=$(r,s,s[4],P);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&16)&&z(t,r,n,n[4],e?J(r,n[4],o,ue):W(n[4]),P)},i(n){e||(f(t,n),e=!0)},o(n){d(t,n),e=!1},d(n){t&&t.d(n)}}}function de(s){let e,r,t=s[0]&&U(s);return{c(){t&&t.c(),e=p()},l(n){t&&t.l(n),e=p()},m(n,o){t&&t.m(n,o),N(n,e,o),r=!0},p(n,[o]){n[0]?t?(t.p(n,o),o&1&&f(t,1)):(t=U(n),t.c(),f(t,1),t.m(e.parentNode,e)):t&&(R(),d(t,1,1,()=>{t=null}),I())},i(n){r||(f(t),r=!0)},o(n){d(t),r=!1},d(n){t&&t.d(n),n&&M(e)}}}function me(s,e,r){let t;const n=["name","template"];let o=B(e,n),{$$slots:i={},$$scope:l}=e;const a=ae(i),u=j();let{name:_}=e,{template:m=null}=e;if(!_)throw new Error("Missing Story name");return u.register({name:_,...o,template:m??(a.default?null:"default")}),s.$$set=c=>{e=g(g({},e),k(c)),r(7,o=B(e,n)),"name"in c&&r(2,_=c.name),"template"in c&&r(3,m=c.template),"$$scope"in c&&r(4,l=c.$$scope)},s.$$.update=()=>{s.$$.dirty&4&&r(0,t=u.render&&!u.templateName&&u.storyName==_)},[t,u,_,m,l,i]}class pe extends x{constructor(e){super(),h(this,e,me,de,b,{name:2,template:3})}}pe.__docgen={version:3,name:"Story.svelte",data:[{visibility:"public",description:null,keywords:[],name:"name",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"template",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default",params:[{name:"{...context.args}",type:{kind:"type",text:"*",type:"any"}},{name:"context",type:{kind:"type",text:"*",type:"any"}},{name:"args",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"{...context.args}",type:{kind:"type",text:"*",type:"any"}},{name:"context",type:{kind:"type",text:"*",type:"any"}},{name:"args",type:{kind:"type",text:"*",type:"any"}}]}],refs:[]};const ye=s=>({}),q=s=>({...s[1].args,context:s[1].storyContext,args:s[1].args});function V(s){let e;const r=s[4].default,t=$(r,s,s[3],q);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&8)&&z(t,r,n,n[3],e?J(r,n[3],o,ye):W(n[3]),q)},i(n){e||(f(t,n),e=!0)},o(n){d(t,n),e=!1},d(n){t&&t.d(n)}}}function _e(s){let e,r,t=s[0]&&V(s);return{c(){t&&t.c(),e=p()},l(n){t&&t.l(n),e=p()},m(n,o){t&&t.m(n,o),N(n,e,o),r=!0},p(n,[o]){n[0]?t?(t.p(n,o),o&1&&f(t,1)):(t=V(n),t.c(),f(t,1),t.m(e.parentNode,e)):t&&(R(),d(t,1,1,()=>{t=null}),I())},i(n){r||(f(t),r=!0)},o(n){d(t),r=!1},d(n){t&&t.d(n),n&&M(e)}}}function ge(s,e,r){let t,{$$slots:n={},$$scope:o}=e;const i=j();let{id:l="default"}=e;return i.register({id:l,isTemplate:!0}),s.$$set=a=>{"id"in a&&r(2,l=a.id),"$$scope"in a&&r(3,o=a.$$scope)},s.$$.update=()=>{s.$$.dirty&4&&r(0,t=i.render&&i.templateId===l)},[t,i,l,o,n]}class ke extends x{constructor(e){super(),h(this,e,ge,_e,b,{id:2})}}ke.__docgen={version:3,name:"Template.svelte",data:[{visibility:"public",description:null,keywords:[],name:"id",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"default"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default",params:[{name:"{...context.args}",type:{kind:"type",text:"*",type:"any"}},{name:"context",type:{kind:"type",text:"*",type:"any"}},{name:"args",type:{kind:"type",text:"*",type:"any"}}],parameters:[{name:"{...context.args}",type:{kind:"type",text:"*",type:"any"}},{name:"context",type:{kind:"type",text:"*",type:"any"}},{name:"args",type:{kind:"type",text:"*",type:"any"}}]}],refs:[]};module&&module.hot&&module.hot.decline&&module.hot.decline();const{logger:xe}=__STORYBOOK_MODULE_CLIENT_LOGGER__;function he(s){const e=s.split("").reduce((r,t)=>(r<<5)-r+t.charCodeAt(0)|0,0);return Math.abs(e).toString(16)}function be({id:s,name:e},r=[]){if(s)return s;if(!e)throw new Error("Id or Name should be specified");let t=e.replace(/\W+(.|$)/g,(n,o)=>o.toUpperCase());return r.indexOf(t)>=0&&(xe.warn(`Story name conflict with exports - Please add an explicit id for story ${e}`),t+=he(e)),t}const Z="storybook-registration-context";function we(s={}){Y(Z,{render:!0,register:()=>{},meta:{},args:{},...s})}function Se(s){Y(Z,{render:!1,register:e=>{s.stories.push(e)},set meta(e){s.meta=e},args:{}})}function Ce(s){let e,r,t;var n=s[0];function o(i){return{}}return n&&(e=v(n,o())),{c(){e&&O(e.$$.fragment),r=p()},l(i){e&&Q(e.$$.fragment,i),r=p()},m(i,l){e&&E(e,i,l),N(i,r,l),t=!0},p(i,[l]){if(n!==(n=i[0])){if(e){R();const a=e;d(a.$$.fragment,1,0,()=>{T(a,1)}),I()}n?(e=v(n,o()),O(e.$$.fragment),f(e.$$.fragment,1),E(e,r.parentNode,r)):e=null}},i(i){t||(e&&f(e.$$.fragment,i),t=!0)},o(i){e&&d(e.$$.fragment,i),t=!1},d(i){i&&M(r),e&&T(e,i)}}}function ve(s,e,r){let{Stories:t}=e,{repositories:n}=e;return Se(n),s.$$set=o=>{"Stories"in o&&r(0,t=o.Stories),"repositories"in o&&r(1,n=o.repositories)},[t,n]}class H extends x{constructor(e){super(),h(this,e,ve,Ce,b,{Stories:0,repositories:1})}}H.__docgen={version:3,name:"RegisterContext.svelte",data:[{visibility:"public",description:null,keywords:[],name:"Stories",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"repositories",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function Oe(s){let e,r,t;var n=s[0];function o(i){return{}}return n&&(e=v(n,o())),{c(){e&&O(e.$$.fragment),r=p()},l(i){e&&Q(e.$$.fragment,i),r=p()},m(i,l){e&&E(e,i,l),N(i,r,l),t=!0},p(i,[l]){if(n!==(n=i[0])){if(e){R();const a=e;d(a.$$.fragment,1,0,()=>{T(a,1)}),I()}n?(e=v(n,o()),O(e.$$.fragment),f(e.$$.fragment,1),E(e,r.parentNode,r)):e=null}},i(i){t||(e&&f(e.$$.fragment,i),t=!0)},o(i){e&&d(e.$$.fragment,i),t=!1},d(i){i&&M(r),e&&T(e,i)}}}function Ee(s,e,r){let{Stories:t}=e;return we(e),s.$$set=n=>{r(1,e=g(g({},e),k(n))),"Stories"in n&&r(0,t=n.Stories)},e=k(e),[t]}class ee extends x{constructor(e){super(),h(this,e,Ee,Oe,b,{Stories:0})}}ee.__docgen={version:3,name:"RenderContext.svelte",data:[{visibility:"public",description:null,keywords:[],name:"Stories",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:"@component",keywords:[{name:"component",description:""},{name:"wrapper",description:""}],events:[],slots:[],refs:[]};const{logger:G}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{combineParameters:X}=__STORYBOOK_MODULE_CLIENT_API__,Te=document.createDocumentFragment?()=>document.createDocumentFragment():()=>document.createElement("div"),Re=(s,{stories:e={},allocatedIds:r})=>{const t={meta:null,stories:[]};try{new H({target:Te(),props:{Stories:s,repositories:t}}).$destroy()}catch(a){G.error(`Error extracting stories ${a.toString()}`,a)}const{meta:n}=t;if(!n)return G.error("Missing <Meta/> tag"),{};const{component:o}=n,i=t.stories.filter(a=>a.isTemplate).map(a=>a.id),l=i.filter((a,u)=>i.indexOf(a)!==u);return l.length>0&&G.warn(`Found duplicates templates id for stories '${n.name}': ${l}`),{meta:n,stories:t.stories.filter(a=>!a.isTemplate).reduce((a,u)=>{const{id:_,name:m,template:c,component:te,source:w=!1,...ne}=u,L=be(u,r);if(!L)return a;const se=c!=null&&i.indexOf(c)<0,y=(F,A)=>{if(se)throw new Error(`Story ${m} is referencing an unknown template ${c}`);return{Component:ee,props:{Stories:s,storyName:m,templateId:c,args:F,storyContext:A,sourceComponent:te||o}}};y.storyName=m,Object.entries(ne).forEach(([F,A])=>{y[F]=A});const S=e[c?`tpl:${c}`:L],re=S?S.hasArgs:!0,D=S?S.source:null;D&&(y.parameters=X(y.parameters||{},{storySource:{source:D}}));let C;return w===!0||w===!1&&!re?C=D:typeof w=="string"&&(C=w),C&&(y.parameters=X(y.parameters||{},{docs:{source:{code:C}}})),a[L]=y,a},{})}};export{fe as M,pe as S,Re as p};
//# sourceMappingURL=collect-stories-1c1206f1.js.map
