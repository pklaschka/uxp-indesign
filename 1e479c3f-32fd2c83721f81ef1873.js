"use strict";(self.webpackChunkuxp_indesign=self.webpackChunkuxp_indesign||[]).push([[9251],{19965:function(e,t,i){i.d(t,{F:function(){return y}});var a=i(87462),n=i(45987),s=i(15007),l=i(95223),o=i(158),r=i(247),d=i(75900),c=i.n(d),m=i(23973),p=i(71373);const u=["className","theme","swiperSpeed","delay","enableNavigation","variant","bulletActiveClass","bulletClass","navigationPre","navigationNext","isCenter","videos","position","navigationIconColor"];p.ZP.use([p.pt,p.tl,p.W_]);const v="767px",g=e=>{let{texts:t,index:i}=e;return t.slots.split(",").map((e=>e.trim())).filter((e=>e.startsWith("text"))).map((e=>t[""+e+i]))};var h={name:"2uwxbw",styles:"height:auto;width:570px"};const x=e=>{let{textKeys:t,heading:i,buttons:a,props:n,index:s,theme:d,isCenter:m,videos:p,position:u}=e;return(0,l.tZ)("div",{className:c()("spectrum--"+d),css:(0,l.iv)("display:flex;gap:5%;margin-bottom:var(--spectrum-global-dimension-size-500);flex-direction:","left"===u?"row":"row-reverse",";@media screen and (max-width: ",o.LU,"){flex-direction:column;max-width:calc(",(0,o.MY)(6),")!important;gap:25px;}@media screen and (max-width: ",v,"){max-width:calc(",(0,o.MY)(3.5),")!important;gap:25px;}","")},(0,l.tZ)("div",{css:(0,l.iv)("flex:1;justify-content:center;width:100%;padding-right:5%;@media screen and (max-width: ",o.Av,"){margin:auto;}@media screen and (max-width: ",o.q9,"){margin:0;max-width:calc(",(0,o.MY)(3.5),")!important;}@media screen and (max-width: ",o.LU,"){max-width:calc(",(0,o.MY)(6),")!important;margin:0;}","")},p.length&&(0,l.tZ)("video",{name:"media3",loop:"true",muted:"true",autoPlay:!0,preload:"metadata",playsInline:!0,css:h},(0,l.tZ)("source",{src:p[s]}))),t.length>0||i||a?(0,l.tZ)("div",{css:(0,l.iv)("padding-left:5%;text-align:left;flex:1;display:",m?"flex":"block",";flex-direction:",m&&"column ",";height:",m&&"auto",";justify-content:",m&&"center",";padding-bottom:var(--spectrum-global-dimension-size-200);@media only screen and (min-width: ","375px",") and(max-width:",o.q9,"){margin:0;text-align:center!important;max-width:calc(",(0,o.MY)(3.5),")!important;padding-left:var(--spectrum-global-dimension-size-100)!important;}","")},i&&(0,l.tZ)("h3",{className:"spectrum-Heading--sizeL",css:(0,l.iv)("@media only screen and (max-width: ",o.LU,"){font-size:27px!important;}@media only screen and (max-width: ",v,"){font-size:22px!important;}","")},i.props.children),t.length>0?(0,l.tZ)("div",{className:"textWrapper",css:(0,l.iv)("@media only screen and (max-width: ",o.q9,"){&>h3{font-size:var(--spectrum-alias-heading-xxs-text-size)!important;}}","")},(0,l.tZ)(g,{texts:n,index:s})):null,a?(0,l.tZ)("div",{css:(0,l.iv)("margin-top:var(--spectrum-global-dimension-size-200);@media only screen and (max-width: ",o.q9,"){div:first-child{justify-content:center!important;}}","")},(0,l.tZ)(r.F5,{buttons:a})):null):null)};var w={name:"ps4nqr",styles:"position:relative;z-index:0;background:var(--spectrum-global-color-gray-100);padding:var(--spectrum-global-dimension-size-600) 0 var(--spectrum-global-dimension-size-200) 0"},b={name:"1fbykcp",styles:"position:relative;z-index:0;background:var(--spectrum-global-color-gray-100);padding:var(--spectrum-global-dimension-size-600) 0 var(--spectrum-global-dimension-size-600) 0"};const y=e=>{var t,i;let{className:r,theme:d="dark",swiperSpeed:p=600,delay:v=2500,enableNavigation:g=!1,variant:h="fullWidth",bulletActiveClass:y="swiper-pagination-bullet-active",bulletClass:f="swiper-pagination-bullet",navigationPre:Z="swiper-button-prev",navigationNext:k="swiper-button-next",isCenter:C=!1,videos:N=[],position:q="left",navigationIconColor:z="black"}=e,M=(0,n.Z)(e,u);const{0:Y,1:A}=(0,s.useState)([]);let P=Object.keys(M).filter((e=>e.startsWith("heading")));P=P.map(((e,t)=>({heading:M[e],buttons:M["buttons"+t]})));async function L(){let e=await(async e=>{const t=[];for(let i=0;i<(null==e?void 0:e.length);i++){const a=e[i],n=document.createElement("video");n.src=a,await new Promise((e=>{n.onloadedmetadata=()=>{t[i]=1e3*n.duration,e()}}))}return t})(N);A(e)}(0,s.useEffect)((()=>{L()}),[]);const W=null===(t=M.slots)||void 0===t||null===(i=t.split(","))||void 0===i?void 0:i.filter((e=>e.trim().startsWith("text")));return null!=N&&N.length&&!Y.length?(0,l.tZ)(s.default.Fragment,null):"halfWidth"===h?(0,l.tZ)("section",{className:c()(r,"spectrum--"+d),css:b,role:"button",tabindex:0,onKeyDown:e=>{if("ArrowRight"===e.key){document.querySelector(".swiper").swiper.slideNext()}if("ArrowLeft"===e.key){document.querySelector(".swiper").swiper.slidePrev()}}},(0,l.tZ)("div",{css:(0,l.iv)("max-width:calc(",(0,o.MY)(10),");margin:auto;@media screen and (max-width: ",o.q9,"){max-width:calc(",(0,o.MY)(2.75),")!important;}@media screen and (min-width: ",o.q9,") and (max-width: ",o.LU,"){padding-bottom:0;margin-top:0;max-width:calc(",(0,o.MY)(6),")!important;}","")},(0,l.tZ)(m.tq,{speed:p,slidesPerView:"auto",autoplay:{delay:v},pagination:{bulletActiveClass:y,bulletClass:f,clickable:!0},navigation:{nextEl:"."+k,prevEl:"."+Z}},P.map(((e,t)=>(0,l.tZ)(m.o5,(0,a.Z)({key:t},null!=N&&N.length&&Y[t]?{"data-swiper-autoplay":""+Y[t]}:{}),(0,l.tZ)(x,{textKeys:W,heading:e.heading,buttons:e.buttons,props:M,index:t,theme:d,videos:N,isCenter:C,position:q}),g?(0,l.tZ)(s.default.Fragment,null,(0,l.tZ)("div",{css:(0,l.iv)("color:",z,";",""),className:Z}),(0,l.tZ)("div",{css:(0,l.iv)("color:",z,";",""),className:k})):null)))))):"fullWidth"===h?(0,l.tZ)("section",{className:c()(r,"spectrum--"+d),css:w,role:"button",tabindex:0,onKeyDown:e=>{if("ArrowRight"===e.key){document.querySelector(".swiper").swiper.slideNext()}if("ArrowLeft"===e.key){document.querySelector(".swiper").swiper.slidePrev()}}},(0,l.tZ)(m.tq,{speed:p,slidesPerView:"auto",autoplay:{delay:v},pagination:{bulletActiveClass:y,bulletClass:f,clickable:!0},navigation:{nextEl:"."+k,prevEl:"."+Z}},P.map(((e,t)=>(0,l.tZ)(m.o5,(0,a.Z)({key:t},null!=N&&N.length&&Y[t]?{"data-swiper-autoplay":""+Y[t]}:{}),(0,l.tZ)("div",{css:(0,l.iv)("width:100%;@media screen and (max-width: ",o.q9,"){width:100%!important;}","")},(0,l.tZ)("div",{css:(0,l.iv)("max-width:calc(",(0,o.MY)(12),");margin:auto;@media screen and (min-width: ",o.q9,") and (max-width: ",o.LU,"){max-width:calc(",(0,o.MY)(6),");}","")},(0,l.tZ)(x,{textKeys:W,heading:e.heading,buttons:e.buttons,props:M,videos:N,index:t,theme:d,isCenter:C,position:q}),g?(0,l.tZ)("div",null,(0,l.tZ)("div",{css:(0,l.iv)("color:",z,";",""),className:Z}),(0,l.tZ)("div",{css:(0,l.iv)("color:",z,";",""),className:k})):null))))))):void 0}}}]);
//# sourceMappingURL=1e479c3f-32fd2c83721f81ef1873.js.map