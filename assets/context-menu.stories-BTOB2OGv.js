import{j as i,r as $e}from"./index-DlC1yEB1.js";import{s as Qe}from"./dataSource-CrVxx1x3.js";import{g as Ze,h as Ge,S as Je,D as et,W as tt,M as nt,R as st}from"./month-view-Be9VIm1Y.js";import{r as c}from"./index-D5jfS-9e.js";import{d as Ee,u as We,h as rt,i as ct,a as A,p as lt,j as je,k as Te,l as Ve,A as ot}from"./recurrence-editor-BQCviNP0.js";import{D as it}from"./day-o9-gSQHD.js";import"./index-lf5wH9A6.js";const at=i.jsx("path",{d:"M7 6V2H5V6H1V8H5V12H7V8H11V6H7ZM11 2H20C21.1046 2 22 2.89543 22 4V13.5858C22 14.1162 21.7893 14.6249 21.4142 15L15 21.4142C14.6249 21.7893 14.1162 22 13.5858 22H4C2.89543 22 2 21.1046 2 20V13H4V20H13V13H20V4H11V2Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),ut=Ee(at),dt=i.jsx("path",{d:"M12 2H20C21.1046 2 22 2.89543 22 4V13.5858C22 14.1162 21.7893 14.6249 21.4142 15L15 21.4142C14.6249 21.7893 14.1162 22 13.5858 22H4C2.89543 22 2 21.1046 2 20V13H4V20H13V13H20V4H12V2ZM5.99999 5.58579L3.49997 3.08578L2.08576 4.5L4.58578 7.00001L2.08577 9.50002L3.49998 10.9142L6 8.41422L8.5 10.9142L9.91421 9.5L7.41421 7L9.91419 4.50002L8.49998 3.08581L5.99999 5.58579Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),Ae=Ee(dt),ft=i.jsx("path",{d:"M21.7035 4.74354L18.8751 1.91511C18.4862 1.5262 17.8498 1.5262 17.4609 1.91511L15.3395 4.03643L19.5822 8.27907L21.7035 6.15775C22.0924 5.76884 22.0924 5.13245 21.7035 4.74354ZM1.62012 22H5.86011L18.1702 9.68994L13.9302 5.44995L1.62012 17.76V22ZM5.03015 20H3.62012V18.59L13.9302 8.28002L15.3401 9.68994L5.03015 20Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),He=Ee(ft),mt="M7.58582 18L13.5858 12L7.58582 6L9.00003 4.58578L16.4142 12L9.00003 19.4142L7.58582 18Z",pe=()=>null,ht=Q=>{const{item:T,itemClasses:B,isFocused:U,hasSubmenu:u,isDisabled:R,isSelected:V,isSeparator:f,onMouseEnter:j,onClick:y,getContent:Z,focusedItemRef:H,attributes:q}=Q,{ripple:E}=We(),{rippleMouseDown:G,Ripple:z}=rt(E),b=m=>{E&&!R&&!f&&G(m)};return i.jsxs("li",{ref:U?H:void 0,className:B,onMouseEnter:j,onMouseDown:b,onClick:y,tabIndex:-1,role:"menuitem","aria-disabled":f?void 0:R,"aria-haspopup":f?void 0:u,"aria-expanded":f?void 0:!!(u&&V),"aria-label":f?"separator":T.text||void 0,...q,children:[!f&&(T.url?i.jsx("a",{className:"sf-menu-url",href:T.url,onClick:m=>m.stopPropagation(),children:i.jsx("div",{className:"sf-anchor-wrap",children:Z(T)})}):Z(T)),u&&i.jsx("span",{className:"sf-submenu-icon",children:i.jsx(Ze,{d:mt,"aria-label":"submenu-icon"})}),E&&!R&&!f&&i.jsx(z,{})]})},pt="M12.4142 19L6.41424 13H21V11H6.41424L12.4142 5L11 3.58578L2.58582 12L11 20.4142L12.4142 19Z",ve=1e3,Ne=3,vt=c.forwardRef((Q,T)=>{const{items:B=[],hoverDelay:U=0,onOpen:u,onClose:R,onSelect:V,open:f,offset:j,animation:y={duration:400,easing:"ease",effect:"FadeIn"},itemOnClick:Z,closeOnScroll:H=!0,allowBrowserContext:q=!1,targetRef:E,className:G,children:z,itemTemplate:b,...m}=Q,x=c.useRef(null),I=c.useRef(null),[L,F]=c.useState(!1),[M,N]=c.useState({x:0,y:0}),[l,W]=c.useState([]),[J,Y]=c.useState(Math.max(Ne,ve+1)),X=c.useRef(null),g=c.useRef(new Map),[h,O]=c.useState({focusedItems:null,hoveredItems:null}),ae=c.useRef(null),xe=c.useRef(f),{dir:_}=We(),P=c.useRef([]),ne=c.useCallback(e=>{const t=e||(typeof document<"u"?document.body:null);let n=ve;if(t){const s=Number(ct(t));Number.isFinite(s)&&s>0&&(n=Math.max(ve,s))}return Math.max(Ne,n+1)},[]),se=c.useCallback(e=>{var s;const t=e;if(q&&(t.ctrlKey||t.metaKey))return;const n=(E==null?void 0:E.current)||(t.target instanceof HTMLElement?t.target:null);if(Y(ne(n)),A.isIos&&ge.current&&e.originalEvent){(s=e.originalEvent)==null||s.preventDefault();const r=e.originalEvent.changedTouches[0];N({x:r.clientX,y:r.clientY})}else t.preventDefault(),N({x:t.pageX,y:t.pageY});u==null||u(e.originalEvent?e.originalEvent:e),!(u&&f===!1)&&F(!0)},[u,f,q,E,ne]),ge=c.useRef(Ge(A.isIos&&E?E:{current:null},{tapHold:se})),_e={items:P.current,hoverDelay:U,animation:y,open:f,offset:j,itemOnClick:Z,targetRef:E,allowBrowserContext:q,closeOnScroll:H,itemTemplate:b};c.useEffect(()=>(lt("contextmenu"),()=>{var e,t,n;(e=g.current)==null||e.clear(),X.current&&(clearTimeout(X.current),X.current=null),(n=(t=ge.current)==null?void 0:t.destroy)==null||n.call(t)}),[]);const Ie=e=>{var t;L&&H&&!((t=x==null?void 0:x.current)!=null&&t.contains(e.target))&&$(e)};c.useEffect(()=>(H&&document.addEventListener("scroll",Ie,!0),()=>{document.removeEventListener("scroll",Ie,!0)}),[L,H,R,f]),c.useEffect(()=>{const e=E==null?void 0:E.current;return e&&e.addEventListener("contextmenu",se),()=>{e&&e.removeEventListener("contextmenu",se)}},[E,u,se]),c.useEffect(()=>{!f&&xe.current===f||(xe.current=f,f?(j&&j.left!==void 0&&j.top!==void 0&&N({x:j.left,y:j.top}),Y(ne(E==null?void 0:E.current)),F(!0)):ue())},[f,j,ne]),c.useEffect(()=>{var e;if(L){let t=M.x,n=M.y;const s=je(I.current,document.documentElement,t,n);(s.includes("left")||s.includes("right"))&&(t=t-(((e=I==null?void 0:I.current)==null?void 0:e.offsetWidth)||0)),s.includes("bottom")&&(n=Te(I.current,null,{X:!1,Y:!0},{top:n,left:t}).top),(t!==M.x||n!==M.y)&&N({x:t,y:n}),ce(I.current),document.addEventListener("mousedown",de)}else document.removeEventListener("mousedown",de);return()=>document.removeEventListener("mousedown",de)},[L,M]),c.useEffect(()=>{ae.current&&ae.current.focus()},[h]),c.useEffect(()=>{const e=z?c.Children.toArray(z).filter(n=>c.isValidElement(n)&&n.type===pe):null,t=e!=null&&e.length?qe(e):B;P.current=ze(t)},[B,z]),c.useImperativeHandle(T,()=>({..._e,element:x.current})),c.useEffect(()=>{var e,t,n,s,r;if(l.length>0){const a=l[l.length-1].parentIndex.join("-"),o=(e=g.current)==null?void 0:e.get(a);if(A.isDevice){ce(o);return}const p=l[l.length-1];if(p.positionChanged){ce(o);return}let v=p.position.x,S=p.position.y;const D=je(o,document.documentElement,_==="rtl"?v-((o==null?void 0:o.offsetWidth)||0):v,S);(D.includes("left")||D.includes("right"))&&(v=Ve(p.currentTarget,_==="rtl"?"right":"left","top").left,v=_==="rtl"?v:v-((o==null?void 0:o.offsetWidth)||0)),_==="rtl"&&!D.includes("right")&&!D.includes("left")&&(v=v-(((n=(t=g.current)==null?void 0:t.get(a))==null?void 0:n.offsetWidth)||0)),D.includes("bottom")&&(S=Te(o,null,{X:!1,Y:!0},{top:S,left:v}).top);const d=l.length>1?l[l.length-2].parentIndex.join("-"):"",w=((s=g.current)==null?void 0:s.size)===1?I.current:(r=g.current)==null?void 0:r.get(d);if(w&&!D.includes("right")){const k=w.offsetWidth-w.clientWidth;k>5&&(v+=_==="rtl"?-k:k)}p.position.x!==v||p.position.y!==S?W(k=>k.map((K,he)=>{var le;return he===k.length-1?((le=g.current)==null||le.clear(),{...K,position:{x:v,y:S},positionChanged:!0}):K})):ce(o)}},[l]),c.useEffect(()=>{const e=t=>{L&&$(t)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[L]);const ue=c.useCallback(()=>{var e;F(!1),W([]),(e=g==null?void 0:g.current)==null||e.clear(),O({focusedItems:null,hoveredItems:null})},[]),$=c.useCallback(e=>{R==null||R(e),!(R&&f===!0)&&ue()},[R,f,ue]),de=e=>{var t;(t=x.current)!=null&&t.contains(e.target)||$(e)},De=e=>{if(!c.isValidElement(e)||e.type!==pe)return null;const{children:t,text:n,id:s,icon:r,url:a,separator:o,disabled:p,...v}=e.props,S={text:n,id:s,icon:r,url:a,separator:o,disabled:p};if(t){const D=typeof t=="function"?t:c.Children.toArray(t).filter(w=>c.isValidElement(w)&&w.type!==pe);D.length>0&&(S.children=typeof D!="function"&&D.length===1?D[0]:D);const d=c.Children.toArray(t).map(De).filter(Boolean);d.length>0&&(S.items=d)}return Object.keys(v).length>0&&(S.htmlAttributes=v),S},qe=e=>{if(!e)return B;const t=c.Children.toArray(e).map(De).filter(Boolean);return t.length>0?t:B},ze=e=>{if(!A.isDevice)return e;const t=n=>n.map(s=>{var r,a;if(s.items&&s.items.length>0){const o=s.items.length>0&&((a=(r=s.items[0])==null?void 0:r.icon)==null?void 0:a.key)==="previous";let p=s.items;return o||(p=[{text:s.text,children:s.children,icon:Ue,separator:!1,items:[]},...s.items]),p=t(p),{...s,items:p}}return s});return t(e)},ye=(e,t)=>{var r;if(!t||!I.current)return;let n=M.x,s=M.y;if(!A.isDevice){const a=Ve(t,_==="rtl"?"left":"right","top");s=a.top,n=a.left}W(a=>[...a.filter(o=>o.parentIndex.length<e.length).map(o=>({...o,isVisible:!1})),{parentIndex:e,position:{x:n,y:s},isVisible:!0,currentTarget:t,positionChanged:!1}]),(r=g.current)==null||r.clear()},re=()=>{var e;l.length<1||(W(t=>{const n=t.filter((s,r)=>r!==t.length-1);return n.map((s,r)=>({...s,isVisible:r===n.length-1}))}),(e=g.current)==null||e.clear())},ce=e=>{var n;if(!e)return;if(y==null||y.duration&&y.duration<=0||(y==null?void 0:y.effect)==="None"||e.style.visibility==="visible"){e.style.visibility="visible",(n=I.current)==null||n.focus();return}const t=ot({duration:y.duration,timingFunction:y.easing,name:y.effect,begin:s=>{s!=null&&s.element&&(s.element.style.visibility="visible",y.effect==="SlideDown"&&(s.element.style.maxHeight=s.element.offsetHeight+"px",s.element.style.overflow="hidden"))},end:s=>{var r;s!=null&&s.element&&(y.effect==="SlideDown"&&(s.element.style.maxHeight=""),(r=I.current)==null||r.focus())}});e&&t.animate(e)},be=()=>{var r,a;const e=h==null?void 0:h.focusedItems,t=e?ee(e):[];if(t.length===0)return;let n=0;for(;n<t.length&&(t[n].separator||t[n].disabled);)n++;if(n>=t.length)return;O(o=>({focusedItems:[...e,n],hoveredItems:o==null?void 0:o.hoveredItems}));let s;if(l.length>0){const o=e==null?void 0:e.slice(0,-1);s=(r=g.current.get(o.join("-")))==null?void 0:r.children[e==null?void 0:e[e.length-1]]}else s=(a=I.current)==null?void 0:a.children[e==null?void 0:e[0]];fe(e,s)},fe=(e,t)=>{X.current&&clearTimeout(X.current),X.current=window.setTimeout(()=>{ye(e,t)},U)},Ke=e=>{const t=e.key;switch(t){case"Escape":e.preventDefault(),l.length>0?(re(),h.focusedItems&&h.focusedItems.length>1&&O(n=>{var s;return{focusedItems:(s=n==null?void 0:n.focusedItems)==null?void 0:s.slice(0,-1),hoveredItems:n==null?void 0:n.hoveredItems}})):$(e.nativeEvent);break;case"Enter":case" ":{const n=l.length>0?ee(l[l.length-1].parentIndex):P.current,s=h.focusedItems&&h.focusedItems.length>0?n[h.focusedItems[h.focusedItems.length-1]]:void 0;if(!(s!=null&&s.items)||s.items.length===0){V==null||V({item:s,event:e}),$(e.nativeEvent);return}be(),e.preventDefault();break}case"ArrowUp":e.preventDefault(),Me(-1);break;case"ArrowDown":e.preventDefault(),Me(1);break;case"ArrowLeft":e.preventDefault(),h.focusedItems&&h.focusedItems.length>1&&O(n=>{var s;return{focusedItems:(s=n==null?void 0:n.focusedItems)==null?void 0:s.slice(0,-1),hoveredItems:n==null?void 0:n.hoveredItems}}),l.length>0&&re();break;case"ArrowRight":e.preventDefault(),be();break;case"Home":e.preventDefault(),me("first");break;case"End":e.preventDefault(),me("last");break;default:t.length===1&&/[a-zA-Z0-9]/.test(t)&&(e.preventDefault(),me("character",t.toLowerCase()));break}},me=(e,t)=>{var v,S,D;const n=l.length>0?ee(l[l.length-1].parentIndex):P.current;if(!(n!=null&&n.length))return;const s=l.length>0?[...((v=l[l.length-1])==null?void 0:v.parentIndex)||[]]:[],r=((S=h==null?void 0:h.focusedItems)==null?void 0:S.length)===s.length+1?h.focusedItems[h.focusedItems.length-1]:-1,a=d=>d&&!d.separator&&!d.disabled,o=(d,w)=>d.text&&typeof d.text=="string"&&d.text.toLowerCase().startsWith(w);let p=-1;switch(e){case"first":p=n.findIndex(a);break;case"last":p=((D=n.map((d,w)=>({item:d,idx:w})).reverse().find(({item:d})=>a(d)))==null?void 0:D.idx)??-1;break;case"character":if(!t||typeof t!="string"||t.length!==1)return;{const d=Math.max(0,r+1),k=[...n.slice(d),...n.slice(0,d)].find(K=>a(K)&&o(K,t));k&&(p=n.indexOf(k))}break}p>=0&&(O==null||O(d=>({focusedItems:[...s,p],hoveredItems:(d==null?void 0:d.hoveredItems)||null})))},Me=e=>{const t=l.length>0?ee(l[l.length-1].parentIndex):P.current;if(t.length===0)return;const n=l.length>0?[...l[l.length-1].parentIndex]:[],s=h.focusedItems&&h.focusedItems.length===n.length+1?h.focusedItems[h.focusedItems.length-1]:null;let r=s===null?e>0?0:t.length-1:(s+e+t.length)%t.length,a=0;for(;r<t.length&&(t[r].separator||t[r].disabled)&&a<t.length;)r=(r+e+t.length)%t.length,a++;a>=t.length||O(o=>({focusedItems:[...n,r],hoveredItems:o==null?void 0:o.hoveredItems}))},ee=c.useCallback(e=>e.reduce((t,n)=>{var s;return((s=t[n])==null?void 0:s.items)||[]},P.current),[]),Ue=c.useMemo(()=>i.jsx(Ze,{d:pt,"aria-label":"Previous"},"previous"),[]),Fe=e=>b?e.children||b(e):i.jsxs(i.Fragment,{children:[e.icon&&i.jsx("span",{className:["sf-menu-icon sf-icon sf-icon-size",typeof e.icon=="string"?e.icon:""].filter(Boolean).join(" "),children:typeof e.icon!="string"&&e.icon}),e.children||e.text]}),Se=(e,t)=>e.map((n,s)=>{var Le,Re,we;const r=[...t,s],a=n.items?n.items.length>0:!1,o=n.disabled===!0,p=A.isDevice&&((Le=n.icon)==null?void 0:Le.key)==="previous",{className:v,...S}=n.htmlAttributes||{},D=r.join("-")===((Re=h.focusedItems)==null?void 0:Re.join("-")),d=r.join("-")===((we=h.hoveredItems)==null?void 0:we.join("-")),w=!n.icon&&e.find((C,oe)=>oe!==s&&C.icon)!==void 0,k=l.some(C=>t.length===0?C.parentIndex[0]===s:t.length===C.parentIndex.length-1&&C.parentIndex.slice(0,-1).join("-")===t.join("-")&&C.parentIndex[C.parentIndex.length-1]===s),K=["sf-menu-item sf-align-center sf-ellipsis",n.separator&&"sf-separator",o&&"sf-disabled",p&&"sf-menu-header",(D||d)&&"sf-focused",k&&a&&"sf-has-submenu",w&&"sf-blank-icon",v].filter(Boolean).join(" "),he=C=>{var oe,ke;if(O(te=>({focusedItems:te==null?void 0:te.focusedItems,hoveredItems:r})),!a){l.length===r.length?re():l.length>r.length&&(W(l.slice(0,r.length-1)),(oe=g==null?void 0:g.current)==null||oe.clear());return}if(!A.isDevice&&a&&!Z&&!o){if(l&&l.find(te=>te.parentIndex.join("-")===r.join("-")))return;(ke=g==null?void 0:g.current)==null||ke.clear(),fe(r,C.currentTarget)}},le=C=>{C.preventDefault(),!o&&(p?re():a?A.isDevice?ye(r,C.currentTarget):Z&&fe(r,C.currentTarget):(V==null||V({item:n,event:C}),$(C.nativeEvent)))};return i.jsx(ht,{item:n,itemClasses:K,isFocused:D,hasSubmenu:a,isDisabled:o,isSelected:k,isSeparator:!!n.separator,onMouseEnter:he,onClick:le,getContent:Fe,focusedItemRef:ae,attributes:S},r.join("-"))}),Ye=()=>l.map(({parentIndex:e,position:t,isVisible:n})=>{const s=ee(e),r=e.join("-");return i.jsx("ul",{ref:a=>{a&&g.current&&g.current.set(r,a)},className:"sf-menu-parent",style:{left:t.x,top:t.y,display:A.isDevice&&!n?"none":"block",visibility:"hidden",zIndex:J},tabIndex:0,role:"menu",children:Se(s,e)},`submenu-${r}`)}),Xe=c.useMemo(()=>["sf-contextmenu","sf-control",_==="rtl"?"sf-rtl":"",G].filter(Boolean).join(" "),[_]),Ce=typeof document<"u"?document.body:null;return Ce?i.jsx(i.Fragment,{children:L&&$e.createPortal(i.jsxs("div",{ref:x,className:Xe,onKeyDown:Ke,...m,children:[i.jsx("ul",{className:"sf-menu-parent",style:{top:M.y,left:M.x,display:A.isDevice&&l.length>0?"none":"block",visibility:"hidden",zIndex:J},role:"menu",tabIndex:0,ref:I,children:P.current&&P.current.length>0&&Se(P.current,[])}),Ye()]}),Ce)}):null}),Mt={title:"Scheduler/ContextMenu",parameters:{docs:{description:{component:"Meta configuration for the Storybook stories"}}}},ie={parameters:{controls:{disable:!0}},render:()=>{const Q=b=>{H(b.value)},T=[{text:"New Event",id:"Add",icon:i.jsx(ut,{})},{text:"New Recurring Event",id:"AddRecurrence",icon:i.jsx(st,{})},{text:"Today",id:"Today",icon:i.jsx(it,{})}],B=[{text:"Edit Event",id:"Edit",icon:i.jsx(He,{})},{text:"Delete Event",id:"Delete",icon:i.jsx(Ae,{})}],U=[{text:"Edit Event",id:"EditRecurrenceEvent",icon:i.jsx(He,{}),items:[{text:"Edit Occurrence",id:"EditOccurrence"},{text:"Edit Series",id:"EditSeries"}]},{text:"Delete Event",id:"DeleteRecurrenceEvent",icon:i.jsx(Ae,{}),items:[{text:"Delete Occurrence",id:"DeleteOccurrence"},{text:"Delete Series",id:"DeleteSeries"}]}],u=c.useRef(null),R=c.useRef(null),[V,f]=c.useState(!1),[j,y]=c.useState(T),[Z,H]=c.useState(new Date(2021,0,10)),q=b=>{R.current=b},E=b=>{var l,W,J;const m=(b==null?void 0:b.target)??null;if(!u.current||!m)return;const x=u.current.element.querySelector(".sf-selected-cell"),I=u.current.element.querySelector(".sf-appointment-active");x==null||x.classList.remove("sf-selected-cell"),I==null||I.classList.remove("sf-appointment-active");const L=((l=m.closest)==null?void 0:l.call(m,".sf-appointment"))??null;if(L){L.classList.add("sf-appointment-active");const Y=u.current.getEventDetails(L);Y&&(Y.recurrenceRule||Y.recurrenceID)?y(U):y(B),f(!0);return}const M=!!((W=m.closest)!=null&&W.call(m,".sf-month-view"))?".sf-work-cells, .sf-all-day-cell":".sf-work-cells, .sf-all-day-cell, .sf-header-cells",N=((J=m.closest)==null?void 0:J.call(m,M))??null;N&&(N.classList.add("sf-selected-cell"),y(T),f(!0))},G=()=>{f(!1)},z=b=>{var L;const m=(L=b==null?void 0:b.item)==null?void 0:L.id;let x;if(!u.current||!m)return;const I=u.current.element.querySelector(".sf-appointment-active");switch(I&&(x=u.current.getEventDetails(I)),m){case"Today":{H(new Date);break}case"Add":case"AddRecurrence":{const F=u.current.element.querySelector(".sf-selected-cell"),M=u.current.getCellDetails(F);if(m==="Add"&&u.current.openEditor(m,M),m==="AddRecurrence"){const N={startTime:M.startTime,endTime:M.endTime,isAllDay:M.isAllDay,recurrenceRule:"FREQ=DAILY;INTERVAL=1;"};u.current.openEditor("Add",N)}break}case"Edit":{u.current.openEditor(m,x);break}case"EditOccurrence":case"EditSeries":{if(!x)break;u.current.openEditor(m,x);break}case"Delete":{u.current.deleteEvent(x);break}case"DeleteOccurrence":{if(!x)break;u.current.deleteEvent(x,"DeleteOccurrence");break}case"DeleteSeries":{if(!x)break;u.current.deleteEvent(x,"DeleteSeries");break}}};return i.jsx(i.Fragment,{children:i.jsx("div",{className:"control-section",children:i.jsxs("div",{className:"schedulerr-control",ref:q,children:[i.jsxs(Je,{ref:u,height:"550px",width:"100%",selectedDate:Z,eventSettings:{dataSource:Qe},onSelectedDateChange:Q,children:[i.jsx(et,{}),i.jsx(tt,{}),i.jsx(nt,{})]}),i.jsx(vt,{open:V,targetRef:R,items:j,onOpen:E,onClose:G,onSelect:z})]})})})}};var Oe,Pe,Be;ie.parameters={...ie.parameters,docs:{...(Oe=ie.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const onSelectedDateChange = (event: SchedulerDateChangeEvent) => {
      setSelectedDate(event.value);
    };
    const cellMenuItems: MenuItemProps[] = [{
      text: 'New Event',
      id: 'Add',
      icon: <AddNotesIcon />
    }, {
      text: 'New Recurring Event',
      id: 'AddRecurrence',
      icon: <RepeatIcon />
    }, {
      text: 'Today',
      id: 'Today',
      icon: <DayIcon />
    }];
    const eventMenuItems: MenuItemProps[] = [{
      text: 'Edit Event',
      id: 'Edit',
      icon: <EditIcon />
    }, {
      text: 'Delete Event',
      id: 'Delete',
      icon: <DeleteNotesIcon />
    }];
    const recurrenceEventMenuItems: MenuItemProps[] = [{
      text: 'Edit Event',
      id: 'EditRecurrenceEvent',
      icon: <EditIcon />,
      items: [{
        text: 'Edit Occurrence',
        id: 'EditOccurrence'
      }, {
        text: 'Edit Series',
        id: 'EditSeries'
      }]
    }, {
      text: 'Delete Event',
      id: 'DeleteRecurrenceEvent',
      icon: <DeleteNotesIcon />,
      items: [{
        text: 'Delete Occurrence',
        id: 'DeleteOccurrence'
      }, {
        text: 'Delete Series',
        id: 'DeleteSeries'
      }]
    }];
    const schedulerRef = useRef<IScheduler | null>(null);
    const targetRef = useRef<HTMLElement | null>(null);
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState<MenuItemProps[]>(cellMenuItems);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date(2021, 0, 10));

    // Callback ref to capture the wrapper element as the target
    const setContainerRef = (el: HTMLDivElement | null) => {
      targetRef.current = el as HTMLElement | null;
    };
    const onContextMenuBeforeOpen = (args: Event) => {
      const target = args?.target as HTMLElement ?? null;
      if (!schedulerRef.current || !target) {
        return;
      }
      const selectedElement = schedulerRef.current.element.querySelector('.sf-selected-cell');
      const selectedEvent = schedulerRef.current.element.querySelector('.sf-appointment-active');
      selectedElement?.classList.remove('sf-selected-cell');
      selectedEvent?.classList.remove('sf-appointment-active');
      const appointment: HTMLElement = target.closest?.('.sf-appointment') ?? null;
      if (appointment) {
        appointment.classList.add('sf-appointment-active');
        const eventDetails = schedulerRef.current.getEventDetails(appointment);
        if (eventDetails && (eventDetails.recurrenceRule || eventDetails.recurrenceID)) {
          setMenu(recurrenceEventMenuItems);
        } else {
          setMenu(eventMenuItems);
        }
        setOpen(true);
        return;
      }
      const isMonthView: boolean = !!target.closest?.('.sf-month-view');
      const cellSelector: string = isMonthView ? '.sf-work-cells, .sf-all-day-cell' : '.sf-work-cells, .sf-all-day-cell, .sf-header-cells';
      const cell: HTMLElement | null = target.closest?.(cellSelector) ?? null;
      if (cell) {
        cell.classList.add('sf-selected-cell');
        setMenu(cellMenuItems);
        setOpen(true);
      }
    };
    const onContextMenuClose = () => {
      setOpen(false);
    };
    const onContextMenuSelect = (args: ContextMenuSelectEvent) => {
      const type: string = args?.item?.id;
      let selectedEvent: EventModel;
      if (!schedulerRef.current || !type) {
        return;
      }
      const activeEvent: HTMLElement = schedulerRef.current.element.querySelector('.sf-appointment-active');
      if (activeEvent) {
        selectedEvent = schedulerRef.current.getEventDetails(activeEvent);
      }
      switch (type) {
        case 'Today':
          {
            setSelectedDate(new Date());
            break;
          }
        case 'Add':
        case 'AddRecurrence':
          {
            const selectedElements: HTMLElement = schedulerRef.current.element.querySelector('.sf-selected-cell');
            const activeCellDetails = schedulerRef.current.getCellDetails(selectedElements);
            if (type === 'Add') {
              schedulerRef.current.openEditor(type, activeCellDetails);
            }
            if (type === 'AddRecurrence') {
              const cellInfo: EventModel = {
                startTime: activeCellDetails.startTime,
                endTime: activeCellDetails.endTime,
                isAllDay: activeCellDetails.isAllDay,
                recurrenceRule: 'FREQ=DAILY;INTERVAL=1;'
              };
              schedulerRef.current.openEditor('Add', cellInfo);
            }
            break;
          }
        case 'Edit':
          {
            schedulerRef.current.openEditor(type, selectedEvent);
            break;
          }
        case 'EditOccurrence':
        case 'EditSeries':
          {
            if (!selectedEvent) {
              break;
            }
            schedulerRef.current.openEditor(type, selectedEvent);
            break;
          }
        case 'Delete':
          {
            schedulerRef.current.deleteEvent(selectedEvent);
            break;
          }
        case 'DeleteOccurrence':
          {
            if (!selectedEvent) {
              break;
            }
            schedulerRef.current.deleteEvent(selectedEvent, 'DeleteOccurrence');
            break;
          }
        case 'DeleteSeries':
          {
            if (!selectedEvent) {
              break;
            }
            schedulerRef.current.deleteEvent(selectedEvent, 'DeleteSeries');
            break;
          }
      }
    };
    return <>\r
        <div className="control-section">\r
          <div className="schedulerr-control" ref={setContainerRef}>\r
                <Scheduler ref={schedulerRef} height={'550px'} width={'100%'} selectedDate={selectedDate} eventSettings={{
            dataSource: scheduleData
          }} onSelectedDateChange={onSelectedDateChange}>\r
                    <DayView />\r
                    <WeekView />\r
                    <MonthView />\r
                </Scheduler>\r
              <ContextMenu open={open} targetRef={targetRef} items={menu} onOpen={onContextMenuBeforeOpen} onClose={onContextMenuClose} onSelect={onContextMenuSelect} />\r
            </div>\r
        </div>\r
        </>;
  }
}`,...(Be=(Pe=ie.parameters)==null?void 0:Pe.docs)==null?void 0:Be.source}}};const St=["ContextMenuSample"];export{ie as ContextMenuSample,St as __namedExportsOrder,Mt as default};
