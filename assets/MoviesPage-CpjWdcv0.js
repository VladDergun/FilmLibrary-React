import{r as d,u as Z,j as u,b as J,L as V}from"./index-D-gkW0vt.js";import{H as X}from"./Header-oAuGoHmU.js";import{g as K,L as ee,h as te,i as re,j as se}from"./Loader-CaImVJB0.js";import{M as oe}from"./MovieCard-CMfN32_m.js";import{F as ae}from"./Footer-MxkRy7M5.js";const ne=d.memo(({arr:e})=>{const t=Z();return u.jsx(u.Fragment,{children:e.length>0&&u.jsx("div",{className:"main-content",children:e.map(r=>u.jsx(oe,{item:r,location:t},r.id))})})});let ie={data:""},le=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ie,ce=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,de=/\/\*[^]*?\*\/|  +/g,F=/\n+/g,_=(e,t)=>{let r="",o="",a="";for(let s in e){let i=e[s];s[0]=="@"?s[1]=="i"?r=s+" "+i+";":o+=s[1]=="f"?_(i,s):s+"{"+_(i,s[1]=="k"?"":t)+"}":typeof i=="object"?o+=_(i,t?t.replace(/([^,])+/g,n=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):s):i!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=_.p?_.p(s,i):s+":"+i+";")}return r+(t&&a?t+"{"+a+"}":a)+o},b={},R=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+R(e[r]);return t}return e},ue=(e,t,r,o,a)=>{let s=R(e),i=b[s]||(b[s]=(l=>{let c=0,m=11;for(;c<l.length;)m=101*m+l.charCodeAt(c++)>>>0;return"go"+m})(s));if(!b[i]){let l=s!==e?e:(c=>{let m,p,f=[{}];for(;m=ce.exec(c.replace(de,""));)m[4]?f.shift():m[3]?(p=m[3].replace(F," ").trim(),f.unshift(f[0][p]=f[0][p]||{})):f[0][m[1]]=m[2].replace(F," ").trim();return f[0]})(e);b[i]=_(a?{["@keyframes "+i]:l}:l,r?"":"."+i)}let n=r&&b.g?b.g:null;return r&&(b.g=b[i]),((l,c,m,p)=>{p?c.data=c.data.replace(p,l):c.data.indexOf(l)===-1&&(c.data=m?l+c.data:c.data+l)})(b[i],t,o,n),i},pe=(e,t,r)=>e.reduce((o,a,s)=>{let i=t[s];if(i&&i.call){let n=i(r),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;i=l?"."+l:n&&typeof n=="object"?n.props?"":_(n,""):n===!1?"":n}return o+a+(i??"")},"");function G(e){let t=this||{},r=e.call?e(t.p):e;return ue(r.unshift?r.raw?pe(r,[].slice.call(arguments,1),t.p):r.reduce((o,a)=>Object.assign(o,a&&a.call?a(t.p):a),{}):r,le(t.target),t.g,t.o,t.k)}let U,A,z;G.bind({g:1});let w=G.bind({k:1});function me(e,t,r,o){_.p=t,U=e,A=r,z=o}function E(e,t){let r=this||{};return function(){let o=arguments;function a(s,i){let n=Object.assign({},s),l=n.className||a.className;r.p=Object.assign({theme:A&&A()},n),r.o=/ *go\d+/.test(l),n.className=G.apply(r,o)+(l?" "+l:"");let c=e;return e[0]&&(c=n.as||e,delete n.as),z&&c[0]&&z(n),U(c,n)}return t?t(a):a}}var fe=e=>typeof e=="function",T=(e,t)=>fe(e)?e(t):e,ge=(()=>{let e=0;return()=>(++e).toString()})(),Y=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),he=20,L=new Map,ye=1e3,H=e=>{if(L.has(e))return;let t=setTimeout(()=>{L.delete(e),k({type:4,toastId:e})},ye);L.set(e,t)},ve=e=>{let t=L.get(e);t&&clearTimeout(t)},B=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,he)};case 1:return t.toast.id&&ve(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:r}=t;return e.toasts.find(s=>s.id===r.id)?B(e,{type:1,toast:r}):B(e,{type:0,toast:r});case 3:let{toastId:o}=t;return o?H(o):e.toasts.forEach(s=>{H(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===o||o===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+a}))}}},M=[],D={toasts:[],pausedAt:void 0},k=e=>{D=B(D,e),M.forEach(t=>{t(D)})},xe={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},be=(e={})=>{let[t,r]=d.useState(D);d.useEffect(()=>(M.push(r),()=>{let a=M.indexOf(r);a>-1&&M.splice(a,1)}),[t]);let o=t.toasts.map(a=>{var s,i;return{...e,...e[a.type],...a,duration:a.duration||((s=e[a.type])==null?void 0:s.duration)||e?.duration||xe[a.type],style:{...e.style,...(i=e[a.type])==null?void 0:i.style,...a.style}}});return{...t,toasts:o}},we=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:r?.id||ge()}),N=e=>(t,r)=>{let o=we(t,e,r);return k({type:2,toast:o}),o.id},v=(e,t)=>N("blank")(e,t);v.error=N("error");v.success=N("success");v.loading=N("loading");v.custom=N("custom");v.dismiss=e=>{k({type:3,toastId:e})};v.remove=e=>k({type:4,toastId:e});v.promise=(e,t,r)=>{let o=v.loading(t.loading,{...r,...r?.loading});return e.then(a=>(v.success(T(t.success,a),{id:o,...r,...r?.success}),a)).catch(a=>{v.error(T(t.error,a),{id:o,...r,...r?.error})}),e};var je=(e,t)=>{k({type:1,toast:{id:e,height:t}})},_e=()=>{k({type:5,time:Date.now()})},Ee=e=>{let{toasts:t,pausedAt:r}=be(e);d.useEffect(()=>{if(r)return;let s=Date.now(),i=t.map(n=>{if(n.duration===1/0)return;let l=(n.duration||0)+n.pauseDuration-(s-n.createdAt);if(l<0){n.visible&&v.dismiss(n.id);return}return setTimeout(()=>v.dismiss(n.id),l)});return()=>{i.forEach(n=>n&&clearTimeout(n))}},[t,r]);let o=d.useCallback(()=>{r&&k({type:6,time:Date.now()})},[r]),a=d.useCallback((s,i)=>{let{reverseOrder:n=!1,gutter:l=8,defaultPosition:c}=i||{},m=t.filter(g=>(g.position||c)===(s.position||c)&&g.height),p=m.findIndex(g=>g.id===s.id),f=m.filter((g,h)=>h<p&&g.visible).length;return m.filter(g=>g.visible).slice(...n?[f+1]:[0,f]).reduce((g,h)=>g+(h.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:je,startPause:_e,endPause:o,calculateOffset:a}}},Se=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ke=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ce=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ne=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Se} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ke} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Ce} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ie=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,$e=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Ie} 1s linear infinite;
`,Le=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Me=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,De=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Le} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Me} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Te=E("div")`
  position: absolute;
`,Ge=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Oe=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Pe=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Oe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ae=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return t!==void 0?typeof t=="string"?d.createElement(Pe,null,t):t:r==="blank"?null:d.createElement(Ge,null,d.createElement($e,{...o}),r!=="loading"&&d.createElement(Te,null,r==="error"?d.createElement(Ne,{...o}):d.createElement(De,{...o})))},ze=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Be=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Fe="0%{opacity:0;} 100%{opacity:1;}",He="0%{opacity:1;} 100%{opacity:0;}",Re=E("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ue=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ye=(e,t)=>{let r=e.includes("top")?1:-1,[o,a]=Y()?[Fe,He]:[ze(r),Be(r)];return{animation:t?`${w(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},qe=d.memo(({toast:e,position:t,style:r,children:o})=>{let a=e.height?Ye(e.position||t||"top-center",e.visible):{opacity:0},s=d.createElement(Ae,{toast:e}),i=d.createElement(Ue,{...e.ariaProps},T(e.message,e));return d.createElement(Re,{className:e.className,style:{...a,...r,...e.style}},typeof o=="function"?o({icon:s,message:i}):d.createElement(d.Fragment,null,s,i))});me(d.createElement);var Qe=({id:e,className:t,style:r,onHeightUpdate:o,children:a})=>{let s=d.useCallback(i=>{if(i){let n=()=>{let l=i.getBoundingClientRect().height;o(e,l)};n(),new MutationObserver(n).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return d.createElement("div",{ref:s,className:t,style:r},a)},We=(e,t)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Y()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...o,...a}},Ze=G`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,Je=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:a,containerStyle:s,containerClassName:i})=>{let{toasts:n,handlers:l}=Ee(r);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...s},className:i,onMouseEnter:l.startPause,onMouseLeave:l.endPause},n.map(c=>{let m=c.position||t,p=l.calculateOffset(c,{reverseOrder:e,gutter:o,defaultPosition:t}),f=We(m,p);return d.createElement(Qe,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?Ze:"",style:f},c.type==="custom"?T(c.message,c):a?a(c):d.createElement(qe,{toast:c,position:m}))}))};const Ve="_btn_j15ga_19",Xe="_genreSection_j15ga_25",Ke="_descriptionSection_j15ga_31",et="_descriptionTitle_j15ga_41",tt="_descriptionText_j15ga_48",rt="_aboutLink_j15ga_56",C={btn:Ve,genreSection:Xe,descriptionSection:Ke,descriptionTitle:et,descriptionText:tt,aboutLink:rt},st="_genreDropdown_1tvyi_1",ot="_genreButton_1tvyi_11",at="_arrowIcon_1tvyi_49",nt="_dropdownContent_1tvyi_69",it="_loading_1tvyi_97",lt="_genreGrid_1tvyi_111",ct="_genreColumn_1tvyi_123",dt="_genreItem_1tvyi_133",j={genreDropdown:st,genreButton:ot,arrowIcon:at,dropdownContent:nt,loading:it,genreGrid:lt,genreColumn:ct,genreItem:dt},ut=({onGenreSelect:e})=>{const[t,r]=d.useState(!1),[o,a]=d.useState([]),[s,i]=d.useState(!1),n=d.useRef(null);d.useEffect(()=>{const p=async()=>{try{i(!0);const f=await K();a(f)}catch(f){console.error("Failed to fetch genres:",f)}finally{i(!1)}};t&&o.length===0&&p()},[t,o.length]),d.useEffect(()=>{const p=f=>{n.current&&!n.current.contains(f.target)&&r(!1)};return t&&document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[t]);const l=p=>{e(p),r(!1)},c=()=>o.length<=10?1:Math.ceil(o.length/10),m=()=>{const p=c(),f=Math.ceil(o.length/p),g=[];for(let h=0;h<p;h++){const I=h*f,O=I+f;g.push(o.slice(I,O))}return g};return u.jsxs("div",{className:j.genreDropdown,ref:n,children:[u.jsxs("button",{className:j.genreButton,onClick:()=>r(!t),children:["Genres",u.jsx("svg",{className:j.arrowIcon,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:u.jsx("path",{d:"M6 9l6 6 6-6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),t&&u.jsx("div",{className:j.dropdownContent,children:s?u.jsx("div",{className:j.loading,children:"Loading genres..."}):u.jsx("div",{className:j.genreGrid,style:{gridTemplateColumns:`repeat(${c()}, 1fr)`},children:m().map((p,f)=>u.jsx("div",{className:j.genreColumn,children:p.map(g=>u.jsx("button",{className:j.genreItem,onClick:()=>l(g),children:g.name},g.id))},f))})})]})};function yt(){const[e,t]=J(),r=e.get("filter")??"",[o,a]=d.useState(r),[s,i]=d.useState(!1),[n,l]=d.useState(!0),[c,m]=d.useState(1),[p,f]=d.useState(null),[g,h]=d.useState({items:[],loading:!1,error:!1}),I=()=>{m(c+1)};d.useEffect(()=>{const x=e.get("filter"),y=e.get("genreId");x&&x!==o?(a(x),f(null),m(1),h({items:[],loading:!1,error:!1})):y&&y!==p&&(f(y),a(""),m(1),h({items:[],loading:!1,error:!1}))},[e,o,p]),d.useEffect(()=>{async function x(){try{h(S=>({...S,loading:!0,error:!1}));let y;p?y=await te(p,c):o===""?y=await re(c):y=await se(o,c),h(S=>{const Q=new Set(S.items.map(P=>P.id)),W=y.results.filter(P=>!Q.has(P.id));return{...S,items:[...S.items,...W]}}),l(!0),c>=y.total_pages&&l(!1)}catch{h(S=>({...S,error:!0}))}finally{h(y=>({...y,loading:!1}))}}x()},[o,p,c]),d.useEffect(()=>{const x=()=>{window.scrollY>400?i(!0):i(!1)};return window.addEventListener("scroll",x),()=>window.removeEventListener("scroll",x)},[]);const O=()=>{window.scrollTo({top:0,behavior:"smooth"})},q=x=>{m(1),h({items:[],loading:!1,error:!1}),e.delete("filter"),e.set("genreId",x.id),t(e)};return u.jsxs(u.Fragment,{children:[u.jsx(X,{}),u.jsx(Je,{position:"top-right"}),u.jsxs("div",{className:"app-wrapper",children:[u.jsxs("div",{className:C.descriptionSection,children:[u.jsx("h2",{className:C.descriptionTitle,children:"Discover Amazing Movies"}),u.jsxs("p",{className:C.descriptionText,children:["Explore our extensive collection of films from every genre imaginable. Use our genre filter to find exactly what you're looking for, or search for specific titles. Dive into the world of cinema and discover your next favorite movie. Learn more about the film industry's evolution in our",u.jsx(V,{to:"/about",className:C.aboutLink,children:" About section"}),"."]})]}),u.jsx("div",{className:C.genreSection,children:u.jsx(ut,{onGenreSelect:q})}),g.error&&u.jsx("p",{className:"error",children:"Ooooops... Try reloading the page"}),g.items.length>0&&u.jsx(ne,{arr:g.items}),g.loading&&u.jsx(ee,{}),g.items.length>0&&!g.loading&&n&&u.jsx("button",{onClick:I,className:C.btn,children:"Load more"}),g.items.length>0&&s&&u.jsx("button",{className:"scroll",onClick:O,children:"Scroll to top"})]}),u.jsx(ae,{})]})}export{yt as default};
