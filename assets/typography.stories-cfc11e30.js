import{S as Ke,i as We,s as Ce,e as qe,a as _,b as y,t as Y,d as $,C as on,q as rn,I as gn,J as $n,K as _n,U as je,V as Je,W as P,D as hn,E as Tn,F as yn,l as Yn,j as b,r as F,k as v,u as O,m as R,p as w,f as z,X as S,Y as G,v as W,w as Z}from"./index-143b8e04.js";import{B as bn}from"./Button-52ad4634.js";import{R as H}from"./RangeInput-12ce0872.js";import{p as vn,M as Rn,S as De}from"./collect-stories-1c1206f1.js";const r={wght:{min:100,max:1e3,default:300,name:"foobar",shortName:"wght"},wdth:{min:25,max:151,default:100,name:"foobar",shortName:"wdth"},opsz:{min:8,max:144,default:20,name:"foobar",shortName:"opsz"},GRAD:{min:-200,max:150,default:0,name:"foobar",shortName:"GRAD"},slnt:{min:-10,max:0,default:-9,name:"foobar",shortName:"slnt"},XTRA:{min:323,max:603,default:400,name:"foobar",shortName:"XTRA"},XOPQ:{min:27,max:175,default:100,name:"foobar",shortName:"XOPQ"},YOPQ:{min:25,max:135,default:70,name:"foobar",shortName:"YOPQ"},YTLC:{min:416,max:570,default:500,name:"foobar",shortName:"YTLC"},YTUC:{min:528,max:760,default:700,name:"foobar",shortName:"YTUC"},YTAS:{min:649,max:854,default:100,name:"foobar",shortName:"YTAS"},YTDE:{min:-305,max:-98,default:-200,name:"foobar",shortName:"YTDE"},YTFI:{min:560,max:788,default:600,name:"Parametric Figure Height",shortName:"YTFI"}},wn={GRAD:53,XOPQ:70,XTRA:400,YOPQ:25,YTAS:100,YTDE:-305,YTFI:620,YTLC:500,YTUC:637,opsz:23,slnt:0,wdth:132,wght:375};function Ne(t){let n,a;const u=t[3].default,f=on(u,t,t[2],null);let o=[{class:"roboto-flex svelte-kg60ta"}],i={};for(let l=0;l<o.length;l+=1)i=rn(i,o[l]);return{c(){n=gn(t[0]),f&&f.c(),this.h()},l(l){n=$n(l,(t[0]||"null").toUpperCase(),{class:!0});var g=_n(n);f&&f.l(g),g.forEach($),this.h()},h(){/-/.test(t[0])?je(n,i):Je(n,i),P(n,"--GRAD",t[1].GRAD),P(n,"--XOPQ",t[1].XOPQ),P(n,"--XTRA",t[1].XTRA),P(n,"--YOPQ",t[1].YOPQ),P(n,"--YTAS",t[1].YTAS),P(n,"--YTDE",t[1].YTDE),P(n,"--YTFI",t[1].YTFI),P(n,"--YTLC",t[1].YTLC),P(n,"--YTUC",t[1].YTUC),P(n,"--opsz",t[1].opsz),P(n,"--slnt",t[1].slnt),P(n,"--wdth",t[1].wdth),P(n,"--wght",t[1].wght)},m(l,g){_(l,n,g),f&&f.m(n,null),a=!0},p(l,g){f&&f.p&&(!a||g&4)&&hn(f,u,l,l[2],a?yn(u,l[2],g,null):Tn(l[2]),null),i=Yn(o,[{class:"roboto-flex svelte-kg60ta"}]),/-/.test(l[0])?je(n,i):Je(n,i),g&2&&P(n,"--GRAD",l[1].GRAD),g&2&&P(n,"--XOPQ",l[1].XOPQ),g&2&&P(n,"--XTRA",l[1].XTRA),g&2&&P(n,"--YOPQ",l[1].YOPQ),g&2&&P(n,"--YTAS",l[1].YTAS),g&2&&P(n,"--YTDE",l[1].YTDE),g&2&&P(n,"--YTFI",l[1].YTFI),g&2&&P(n,"--YTLC",l[1].YTLC),g&2&&P(n,"--YTUC",l[1].YTUC),g&2&&P(n,"--opsz",l[1].opsz),g&2&&P(n,"--slnt",l[1].slnt),g&2&&P(n,"--wdth",l[1].wdth),g&2&&P(n,"--wght",l[1].wght)},i(l){a||(y(f,l),a=!0)},o(l){Y(f,l),a=!1},d(l){l&&$(n),f&&f.d(l)}}}function An(t){let n=t[0],a,u,f=t[0]&&Ne(t);return{c(){f&&f.c(),a=qe()},l(o){f&&f.l(o),a=qe()},m(o,i){f&&f.m(o,i),_(o,a,i),u=!0},p(o,[i]){o[0]?n?Ce(n,o[0])?(f.d(1),f=Ne(o),f.c(),f.m(a.parentNode,a)):f.p(o,i):(f=Ne(o),f.c(),f.m(a.parentNode,a)):n&&(f.d(1),f=null),n=o[0]},i(o){u||(y(f),u=!0)},o(o){Y(f),u=!1},d(o){o&&$(a),f&&f.d(o)}}}function Pn(t,n,a){let{$$slots:u={},$$scope:f}=n,{tag:o="h1"}=n,{fontParams:i=wn}=n;return t.$$set=l=>{"tag"in l&&a(0,o=l.tag),"fontParams"in l&&a(1,i=l.fontParams),"$$scope"in l&&a(2,f=l.$$scope)},[o,i,f,u]}class M extends Ke{constructor(n){super(),We(this,n,Pn,An,Ce,{tag:0,fontParams:1})}}M.__docgen={version:3,name:"Typography.svelte",data:[{visibility:"public",description:null,keywords:[],name:"tag",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"h1"},{visibility:"public",description:null,keywords:[],name:"fontParams",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function Fn(t){let n;return{c(){n=W("Boom")},l(a){n=Z(a,"Boom")},m(a,u){_(a,n,u)},d(a){a&&$(n)}}}function On(t){let n,a;return n=new M({props:{$$slots:{default:[Fn]},$$scope:{ctx:t}}}),{c(){b(n.$$.fragment)},l(u){v(n.$$.fragment,u)},m(u,f){R(n,u,f),a=!0},p(u,f){const o={};f[1]&512&&(o.$$scope={dirty:f,ctx:u}),n.$set(o)},i(u){a||(y(n.$$.fragment,u),a=!0)},o(u){Y(n.$$.fragment,u),a=!1},d(u){w(n,u)}}}function Dn(t){let n;return{c(){n=W("h1 tag")},l(a){n=Z(a,"h1 tag")},m(a,u){_(a,n,u)},d(a){a&&$(n)}}}function Nn(t){let n;return{c(){n=W("h2 tag")},l(a){n=Z(a,"h2 tag")},m(a,u){_(a,n,u)},d(a){a&&$(n)}}}function Cn(t){let n;return{c(){n=W("h3 tag")},l(a){n=Z(a,"h3 tag")},m(a,u){_(a,n,u)},d(a){a&&$(n)}}}function dn(t){let n;return{c(){n=W("h4 tag")},l(a){n=Z(a,"h4 tag")},m(a,u){_(a,n,u)},d(a){a&&$(n)}}}function Xn(t){let n;return{c(){n=W("h5 tag")},l(a){n=Z(a,"h5 tag")},m(a,u){_(a,n,u)},d(a){a&&$(n)}}}function Qn(t){let n;return{c(){n=W("p tag")},l(a){n=Z(a,"p tag")},m(a,u){_(a,n,u)},d(a){a&&$(n)}}}function In(t){let n;return{c(){n=W("span tag")},l(a){n=Z(a,"span tag")},m(a,u){_(a,n,u)},d(a){a&&$(n)}}}function En(t){let n,a,u,f,o,i,l,g,p,A,N,D,C,L;return n=new M({props:{tag:"h1",$$slots:{default:[Dn]},$$scope:{ctx:t}}}),u=new M({props:{tag:"h2",$$slots:{default:[Nn]},$$scope:{ctx:t}}}),o=new M({props:{tag:"h3",$$slots:{default:[Cn]},$$scope:{ctx:t}}}),l=new M({props:{tag:"h4",$$slots:{default:[dn]},$$scope:{ctx:t}}}),p=new M({props:{tag:"h5",$$slots:{default:[Xn]},$$scope:{ctx:t}}}),N=new M({props:{tag:"p",$$slots:{default:[Qn]},$$scope:{ctx:t}}}),C=new M({props:{tag:"span",$$slots:{default:[In]},$$scope:{ctx:t}}}),{c(){b(n.$$.fragment),a=F(),b(u.$$.fragment),f=F(),b(o.$$.fragment),i=F(),b(l.$$.fragment),g=F(),b(p.$$.fragment),A=F(),b(N.$$.fragment),D=F(),b(C.$$.fragment)},l(s){v(n.$$.fragment,s),a=O(s),v(u.$$.fragment,s),f=O(s),v(o.$$.fragment,s),i=O(s),v(l.$$.fragment,s),g=O(s),v(p.$$.fragment,s),A=O(s),v(N.$$.fragment,s),D=O(s),v(C.$$.fragment,s)},m(s,h){R(n,s,h),_(s,a,h),R(u,s,h),_(s,f,h),R(o,s,h),_(s,i,h),R(l,s,h),_(s,g,h),R(p,s,h),_(s,A,h),R(N,s,h),_(s,D,h),R(C,s,h),L=!0},p(s,h){const E={};h[1]&512&&(E.$$scope={dirty:h,ctx:s}),n.$set(E);const d={};h[1]&512&&(d.$$scope={dirty:h,ctx:s}),u.$set(d);const k={};h[1]&512&&(k.$$scope={dirty:h,ctx:s}),o.$set(k);const V={};h[1]&512&&(V.$$scope={dirty:h,ctx:s}),l.$set(V);const X={};h[1]&512&&(X.$$scope={dirty:h,ctx:s}),p.$set(X);const B={};h[1]&512&&(B.$$scope={dirty:h,ctx:s}),N.$set(B);const U={};h[1]&512&&(U.$$scope={dirty:h,ctx:s}),C.$set(U)},i(s){L||(y(n.$$.fragment,s),y(u.$$.fragment,s),y(o.$$.fragment,s),y(l.$$.fragment,s),y(p.$$.fragment,s),y(N.$$.fragment,s),y(C.$$.fragment,s),L=!0)},o(s){Y(n.$$.fragment,s),Y(u.$$.fragment,s),Y(o.$$.fragment,s),Y(l.$$.fragment,s),Y(p.$$.fragment,s),Y(N.$$.fragment,s),Y(C.$$.fragment,s),L=!1},d(s){w(n,s),s&&$(a),w(u,s),s&&$(f),w(o,s),s&&$(i),w(l,s),s&&$(g),w(p,s),s&&$(A),w(N,s),s&&$(D),w(C,s)}}}function Vn(t){let n;return{c(){n=W("the quick brown fox jumped over a red dog, THE QUICK BROWN FOX JUMPED OVER A RED DOG")},l(a){n=Z(a,"the quick brown fox jumped over a red dog, THE QUICK BROWN FOX JUMPED OVER A RED DOG")},m(a,u){_(a,n,u)},d(a){a&&$(n)}}}function Un(t){let n;return{c(){n=W("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345467890!@#$%^&*()")},l(a){n=Z(a,"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345467890!@#$%^&*()")},m(a,u){_(a,n,u)},d(a){a&&$(n)}}}function zn(t){let n;return{c(){n=W("Print to console")},l(a){n=Z(a,"Print to console")},m(a,u){_(a,n,u)},d(a){a&&$(n)}}}function Sn(t){let n,a,u,f,o,i,l,g,p,A,N,D,C,L,s,h,E,d,k,V,X,B,U,Q,ne,c,I,te,x,q,fe,se,j,pe,ue,J,oe,me,K,re,le,ee,T,ae,ie;n=new M({props:{$$slots:{default:[Vn]},$$scope:{ctx:t}}});function Ze(e){t[27](e)}let de={max:r.GRAD.max,min:r.GRAD.min,name:t[25]};t[0]!==void 0&&(de.value=t[0]),u=new H({props:de}),z.push(()=>S(u,"value",Ze));function ce(e){t[28](e)}let Xe={max:r.XOPQ.max,min:r.XOPQ.min,name:t[24]};t[1]!==void 0&&(Xe.value=t[1]),i=new H({props:Xe}),z.push(()=>S(i,"value",ce));function xe(e){t[29](e)}let Qe={max:r.XTRA.max,min:r.XTRA.min,name:t[23]};t[2]!==void 0&&(Qe.value=t[2]),p=new H({props:Qe}),z.push(()=>S(p,"value",xe));function en(e){t[30](e)}let Ie={max:r.YOPQ.max,min:r.YOPQ.min,name:t[22]};t[3]!==void 0&&(Ie.value=t[3]),D=new H({props:Ie}),z.push(()=>S(D,"value",en));function nn(e){t[31](e)}let Ee={max:r.YTAS.max,min:r.YTAS.min,name:t[21]};t[4]!==void 0&&(Ee.value=t[4]),s=new H({props:Ee}),z.push(()=>S(s,"value",nn));function tn(e){t[32](e)}let Ve={max:r.YTDE.max,min:r.YTDE.min,name:t[20]};t[5]!==void 0&&(Ve.value=t[5]),d=new H({props:Ve}),z.push(()=>S(d,"value",tn));function an(e){t[33](e)}let Ue={max:r.YTFI.max,min:r.YTFI.min,name:t[19]};t[6]!==void 0&&(Ue.value=t[6]),X=new H({props:Ue}),z.push(()=>S(X,"value",an));function sn(e){t[34](e)}let ze={max:r.YTLC.max,min:r.YTLC.min,name:t[18]};t[7]!==void 0&&(ze.value=t[7]),Q=new H({props:ze}),z.push(()=>S(Q,"value",sn));function un(e){t[35](e)}let Se={max:r.YTUC.max,min:r.YTUC.min,name:t[17]};t[8]!==void 0&&(Se.value=t[8]),I=new H({props:Se}),z.push(()=>S(I,"value",un));function mn(e){t[36](e)}let Ge={max:r.opsz.max,min:r.opsz.min,name:t[16]};t[9]!==void 0&&(Ge.value=t[9]),q=new H({props:Ge}),z.push(()=>S(q,"value",mn));function ln(e){t[37](e)}let He={max:r.slnt.max,min:r.slnt.min,name:t[15],label:t[15]};t[10]!==void 0&&(He.value=t[10]),j=new H({props:He}),z.push(()=>S(j,"value",ln));function fn(e){t[38](e)}let Le={max:r.wdth.max,min:r.wdth.min,name:t[14]};t[11]!==void 0&&(Le.value=t[11]),J=new H({props:Le}),z.push(()=>S(J,"value",fn));function pn(e){t[39](e)}let ke={max:r.wght.max,min:r.wght.min,name:t[13]};return t[12]!==void 0&&(ke.value=t[12]),K=new H({props:ke}),z.push(()=>S(K,"value",pn)),ee=new M({props:{fontParams:{GRAD:t[0],XOPQ:t[1],XTRA:t[2],YOPQ:t[3],YTAS:t[4],YTDE:t[5],YTFI:t[6],YTLC:t[7],YTUC:t[8],opsz:t[9],slnt:t[10],wdth:t[11],wght:t[12]},$$slots:{default:[Un]},$$scope:{ctx:t}}}),ae=new bn({props:{$$slots:{default:[zn]},$$scope:{ctx:t}}}),ae.$on("click",t[26]),{c(){b(n.$$.fragment),a=F(),b(u.$$.fragment),o=F(),b(i.$$.fragment),g=F(),b(p.$$.fragment),N=F(),b(D.$$.fragment),L=F(),b(s.$$.fragment),E=F(),b(d.$$.fragment),V=F(),b(X.$$.fragment),U=F(),b(Q.$$.fragment),c=F(),b(I.$$.fragment),x=F(),b(q.$$.fragment),se=F(),b(j.$$.fragment),ue=F(),b(J.$$.fragment),me=F(),b(K.$$.fragment),le=F(),b(ee.$$.fragment),T=F(),b(ae.$$.fragment)},l(e){v(n.$$.fragment,e),a=O(e),v(u.$$.fragment,e),o=O(e),v(i.$$.fragment,e),g=O(e),v(p.$$.fragment,e),N=O(e),v(D.$$.fragment,e),L=O(e),v(s.$$.fragment,e),E=O(e),v(d.$$.fragment,e),V=O(e),v(X.$$.fragment,e),U=O(e),v(Q.$$.fragment,e),c=O(e),v(I.$$.fragment,e),x=O(e),v(q.$$.fragment,e),se=O(e),v(j.$$.fragment,e),ue=O(e),v(J.$$.fragment,e),me=O(e),v(K.$$.fragment,e),le=O(e),v(ee.$$.fragment,e),T=O(e),v(ae.$$.fragment,e)},m(e,m){R(n,e,m),_(e,a,m),R(u,e,m),_(e,o,m),R(i,e,m),_(e,g,m),R(p,e,m),_(e,N,m),R(D,e,m),_(e,L,m),R(s,e,m),_(e,E,m),R(d,e,m),_(e,V,m),R(X,e,m),_(e,U,m),R(Q,e,m),_(e,c,m),R(I,e,m),_(e,x,m),R(q,e,m),_(e,se,m),R(j,e,m),_(e,ue,m),R(J,e,m),_(e,me,m),R(K,e,m),_(e,le,m),R(ee,e,m),_(e,T,m),R(ae,e,m),ie=!0},p(e,m){const Be={};m[1]&512&&(Be.$$scope={dirty:m,ctx:e}),n.$set(Be);const _e={};m[0]&33554432&&(_e.name=e[25]),!f&&m[0]&1&&(f=!0,_e.value=e[0],G(()=>f=!1)),u.$set(_e);const he={};m[0]&16777216&&(he.name=e[24]),!l&&m[0]&2&&(l=!0,he.value=e[1],G(()=>l=!1)),i.$set(he);const Te={};m[0]&8388608&&(Te.name=e[23]),!A&&m[0]&4&&(A=!0,Te.value=e[2],G(()=>A=!1)),p.$set(Te);const ye={};m[0]&4194304&&(ye.name=e[22]),!C&&m[0]&8&&(C=!0,ye.value=e[3],G(()=>C=!1)),D.$set(ye);const Ye={};m[0]&2097152&&(Ye.name=e[21]),!h&&m[0]&16&&(h=!0,Ye.value=e[4],G(()=>h=!1)),s.$set(Ye);const be={};m[0]&1048576&&(be.name=e[20]),!k&&m[0]&32&&(k=!0,be.value=e[5],G(()=>k=!1)),d.$set(be);const ve={};m[0]&524288&&(ve.name=e[19]),!B&&m[0]&64&&(B=!0,ve.value=e[6],G(()=>B=!1)),X.$set(ve);const Re={};m[0]&262144&&(Re.name=e[18]),!ne&&m[0]&128&&(ne=!0,Re.value=e[7],G(()=>ne=!1)),Q.$set(Re);const we={};m[0]&131072&&(we.name=e[17]),!te&&m[0]&256&&(te=!0,we.value=e[8],G(()=>te=!1)),I.$set(we);const Ae={};m[0]&65536&&(Ae.name=e[16]),!fe&&m[0]&512&&(fe=!0,Ae.value=e[9],G(()=>fe=!1)),q.$set(Ae);const ge={};m[0]&32768&&(ge.name=e[15]),m[0]&32768&&(ge.label=e[15]),!pe&&m[0]&1024&&(pe=!0,ge.value=e[10],G(()=>pe=!1)),j.$set(ge);const Pe={};m[0]&16384&&(Pe.name=e[14]),!oe&&m[0]&2048&&(oe=!0,Pe.value=e[11],G(()=>oe=!1)),J.$set(Pe);const Fe={};m[0]&8192&&(Fe.name=e[13]),!re&&m[0]&4096&&(re=!0,Fe.value=e[12],G(()=>re=!1)),K.$set(Fe);const Oe={};m[0]&8191&&(Oe.fontParams={GRAD:e[0],XOPQ:e[1],XTRA:e[2],YOPQ:e[3],YTAS:e[4],YTDE:e[5],YTFI:e[6],YTLC:e[7],YTUC:e[8],opsz:e[9],slnt:e[10],wdth:e[11],wght:e[12]}),m[1]&512&&(Oe.$$scope={dirty:m,ctx:e}),ee.$set(Oe);const Me={};m[1]&512&&(Me.$$scope={dirty:m,ctx:e}),ae.$set(Me)},i(e){ie||(y(n.$$.fragment,e),y(u.$$.fragment,e),y(i.$$.fragment,e),y(p.$$.fragment,e),y(D.$$.fragment,e),y(s.$$.fragment,e),y(d.$$.fragment,e),y(X.$$.fragment,e),y(Q.$$.fragment,e),y(I.$$.fragment,e),y(q.$$.fragment,e),y(j.$$.fragment,e),y(J.$$.fragment,e),y(K.$$.fragment,e),y(ee.$$.fragment,e),y(ae.$$.fragment,e),ie=!0)},o(e){Y(n.$$.fragment,e),Y(u.$$.fragment,e),Y(i.$$.fragment,e),Y(p.$$.fragment,e),Y(D.$$.fragment,e),Y(s.$$.fragment,e),Y(d.$$.fragment,e),Y(X.$$.fragment,e),Y(Q.$$.fragment,e),Y(I.$$.fragment,e),Y(q.$$.fragment,e),Y(j.$$.fragment,e),Y(J.$$.fragment,e),Y(K.$$.fragment,e),Y(ee.$$.fragment,e),Y(ae.$$.fragment,e),ie=!1},d(e){w(n,e),e&&$(a),w(u,e),e&&$(o),w(i,e),e&&$(g),w(p,e),e&&$(N),w(D,e),e&&$(L),w(s,e),e&&$(E),w(d,e),e&&$(V),w(X,e),e&&$(U),w(Q,e),e&&$(c),w(I,e),e&&$(x),w(q,e),e&&$(se),w(j,e),e&&$(ue),w(J,e),e&&$(me),w(K,e),e&&$(le),w(ee,e),e&&$(T),w(ae,e)}}}function Gn(t){let n,a,u,f,o,i,l,g;return n=new Rn({props:{title:"Typography",component:M}}),u=new De({props:{name:"Button No Args",$$slots:{default:[On]},$$scope:{ctx:t}}}),o=new De({props:{name:"tag props",$$slots:{default:[En]},$$scope:{ctx:t}}}),l=new De({props:{name:"customizer",$$slots:{default:[Sn]},$$scope:{ctx:t}}}),{c(){b(n.$$.fragment),a=F(),b(u.$$.fragment),f=F(),b(o.$$.fragment),i=F(),b(l.$$.fragment)},l(p){v(n.$$.fragment,p),a=O(p),v(u.$$.fragment,p),f=O(p),v(o.$$.fragment,p),i=O(p),v(l.$$.fragment,p)},m(p,A){R(n,p,A),_(p,a,A),R(u,p,A),_(p,f,A),R(o,p,A),_(p,i,A),R(l,p,A),g=!0},p(p,A){const N={};A[1]&512&&(N.$$scope={dirty:A,ctx:p}),u.$set(N);const D={};A[1]&512&&(D.$$scope={dirty:A,ctx:p}),o.$set(D);const C={};A[0]&67108863|A[1]&512&&(C.$$scope={dirty:A,ctx:p}),l.$set(C)},i(p){g||(y(n.$$.fragment,p),y(u.$$.fragment,p),y(o.$$.fragment,p),y(l.$$.fragment,p),g=!0)},o(p){Y(n.$$.fragment,p),Y(u.$$.fragment,p),Y(o.$$.fragment,p),Y(l.$$.fragment,p),g=!1},d(p){w(n,p),p&&$(a),w(u,p),p&&$(f),w(o,p),p&&$(i),w(l,p)}}}function Hn(t,n,a){let u,f,o,i,l,g,p,A,N,D,C,L,s;function h(){const T=`font-variation-settings: 'GRAD' ${E}, 'XOPQ' ${d}, 'XTRA' ${k},
			'YOPQ' ${V}, 'YTAS' ${X}, 'YTDE' ${B}, 'YTFI' ${U},
			'YTLC' ${Q}, 'YTUC' ${ne}, 'opsz' ${c}, 'slnt' ${I},
			'wdth' ${te}, 'wght' ${x};`;console.log(T)}let E=r.GRAD.default,d=r.XOPQ.default,k=r.XTRA.default,V=r.YOPQ.default,X=r.YTAS.default,B=r.YTDE.default,U=r.YTFI.default,Q=r.YTLC.default,ne=r.YTUC.default,c=r.opsz.default,I=r.slnt.default,te=r.wdth.default,x=r.wght.default;function q(T){E=T,a(0,E)}function fe(T){d=T,a(1,d)}function se(T){k=T,a(2,k)}function j(T){V=T,a(3,V)}function pe(T){X=T,a(4,X)}function ue(T){B=T,a(5,B)}function J(T){U=T,a(6,U)}function oe(T){Q=T,a(7,Q)}function me(T){ne=T,a(8,ne)}function K(T){c=T,a(9,c)}function re(T){I=T,a(10,I)}function le(T){te=T,a(11,te)}function ee(T){x=T,a(12,x)}return t.$$.update=()=>{t.$$.dirty[0]&1&&a(25,u="GRAD: "+E),t.$$.dirty[0]&2&&a(24,f="XOPQ: "+d),t.$$.dirty[0]&4&&a(23,o="XTRA: "+k),t.$$.dirty[0]&8&&a(22,i="YOPQ: "+V),t.$$.dirty[0]&16&&a(21,l="YTAS: "+X),t.$$.dirty[0]&32&&a(20,g="YTDE: "+B),t.$$.dirty[0]&64&&a(19,p="YTFI: "+U),t.$$.dirty[0]&128&&a(18,A="YTLC: "+Q),t.$$.dirty[0]&256&&a(17,N="YTUC: "+ne),t.$$.dirty[0]&512&&a(16,D="opsz: "+c),t.$$.dirty[0]&1024&&a(15,C="slnt: "+I),t.$$.dirty[0]&2048&&a(14,L="wdth: "+te),t.$$.dirty[0]&4096&&a(13,s="wght: "+x)},[E,d,k,V,X,B,U,Q,ne,c,I,te,x,s,L,C,D,N,A,p,g,l,i,o,f,u,h,q,fe,se,j,pe,ue,J,oe,me,K,re,le,ee]}class Ln extends Ke{constructor(n){super(),We(this,n,Hn,Gn,Ce,{},null,[-1,-1])}}const $e=vn(Ln,{meta:{title:"Typography"},stories:{ButtonNoArgs:{storyId:"typography--button-no-args",name:"Button No Args",template:!1,source:"<Typography>Boom</Typography>",hasArgs:!1},tagProps:{storyId:"typography--tag-props",name:"tag props",template:!1,source:`<Typography tag="h1">h1 tag</Typography>
<Typography tag="h2">h2 tag</Typography>
<Typography tag="h3">h3 tag</Typography>
<Typography tag="h4">h4 tag</Typography>
<Typography tag="h5">h5 tag</Typography>
<Typography tag="p">p tag</Typography>
<Typography tag="span">span tag</Typography>`,hasArgs:!1},customizer:{storyId:"typography--customizer",name:"customizer",template:!1,source:`<Typography
	>the quick brown fox jumped over a red dog, THE QUICK BROWN FOX JUMPED OVER A RED DOG</Typography
>

<H11YRangeInput
	max={RoboFlexValues.GRAD.max}
	min={RoboFlexValues.GRAD.min}
	bind:value={GRAD}
	name={GRADName}
/>
<H11YRangeInput
	max={RoboFlexValues.XOPQ.max}
	min={RoboFlexValues.XOPQ.min}
	bind:value={XOPQ}
	name={XOPQName}
/>
<H11YRangeInput
	max={RoboFlexValues.XTRA.max}
	min={RoboFlexValues.XTRA.min}
	bind:value={XTRA}
	name={XTRAName}
/>
<H11YRangeInput
	max={RoboFlexValues.YOPQ.max}
	min={RoboFlexValues.YOPQ.min}
	bind:value={YOPQ}
	name={YOPQName}
/>
<H11YRangeInput
	max={RoboFlexValues.YTAS.max}
	min={RoboFlexValues.YTAS.min}
	bind:value={YTAS}
	name={YTASName}
/>
<H11YRangeInput
	max={RoboFlexValues.YTDE.max}
	min={RoboFlexValues.YTDE.min}
	bind:value={YTDE}
	name={YTDEName}
/>
<H11YRangeInput
	max={RoboFlexValues.YTFI.max}
	min={RoboFlexValues.YTFI.min}
	bind:value={YTFI}
	name={YTFIName}
/>
<H11YRangeInput
	max={RoboFlexValues.YTLC.max}
	min={RoboFlexValues.YTLC.min}
	bind:value={YTLC}
	name={YTLCName}
/>
<H11YRangeInput
	max={RoboFlexValues.YTUC.max}
	min={RoboFlexValues.YTUC.min}
	bind:value={YTUC}
	name={YTUCName}
/>
<H11YRangeInput
	max={RoboFlexValues.opsz.max}
	min={RoboFlexValues.opsz.min}
	bind:value={opsz}
	name={opszName}
/>
<H11YRangeInput
	max={RoboFlexValues.slnt.max}
	min={RoboFlexValues.slnt.min}
	bind:value={slnt}
	name={slntName}
	label={slntName}
/>
<H11YRangeInput
	max={RoboFlexValues.wdth.max}
	min={RoboFlexValues.wdth.min}
	bind:value={wdth}
	name={wdthName}
/>
<H11YRangeInput
	max={RoboFlexValues.wght.max}
	min={RoboFlexValues.wght.min}
	bind:value={wght}
	name={wghtName}
/>

<Typography
	fontParams={{ GRAD, XOPQ, XTRA, YOPQ, YTAS, YTDE, YTFI, YTLC, YTUC, opsz, slnt, wdth, wght }}
	>abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345467890!@#$%^&*()</Typography
>
<H11YButton on:click={handleClick}>Print to console</H11YButton>`,hasArgs:!1}},allocatedIds:["default","H11YButton","H11YRangeInput","Meta","Story","Template","RoboFlexValues","Typography"]}),jn=$e.meta,Jn=["ButtonNoArgs","tagProps","customizer"],Kn=$e.stories.ButtonNoArgs,Wn=$e.stories.tagProps,Zn=$e.stories.customizer;export{Kn as ButtonNoArgs,Jn as __namedExportsOrder,Zn as customizer,jn as default,Wn as tagProps};
//# sourceMappingURL=typography.stories-cfc11e30.js.map
