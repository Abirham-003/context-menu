import{j as i,r as Ke}from"./index-DlC1yEB1.js";import{s as Ye}from"./dataSource-CrVxx1x3.js";import{f as _e,S as Xe,D as Ue,W as $e,M as Qe,R as Ge}from"./month-view-CU0DoZS7.js";import{r as c}from"./index-D5jfS-9e.js";import{d as me,u as Ae,g as Je,h as Te,a as A,p as et,i as Re,j as Le,k as ke,A as tt}from"./recurrence-editor-DYrpeqZw.js";import{D as nt}from"./day-nzRPej3H.js";import"./index-lf5wH9A6.js";const st=i.jsx("path",{d:"M7 6V2H5V6H1V8H5V12H7V8H11V6H7ZM11 2H20C21.1046 2 22 2.89543 22 4V13.5858C22 14.1162 21.7893 14.6249 21.4142 15L15 21.4142C14.6249 21.7893 14.1162 22 13.5858 22H4C2.89543 22 2 21.1046 2 20V13H4V20H13V13H20V4H11V2Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),rt=me(st),ct=i.jsx("path",{d:"M12 2H20C21.1046 2 22 2.89543 22 4V13.5858C22 14.1162 21.7893 14.6249 21.4142 15L15 21.4142C14.6249 21.7893 14.1162 22 13.5858 22H4C2.89543 22 2 21.1046 2 20V13H4V20H13V13H20V4H12V2ZM5.99999 5.58579L3.49997 3.08578L2.08576 4.5L4.58578 7.00001L2.08577 9.50002L3.49998 10.9142L6 8.41422L8.5 10.9142L9.91421 9.5L7.41421 7L9.91419 4.50002L8.49998 3.08581L5.99999 5.58579Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),we=me(ct),lt=i.jsx("path",{d:"M21.7035 4.74354L18.8751 1.91511C18.4862 1.5262 17.8498 1.5262 17.4609 1.91511L15.3395 4.03643L19.5822 8.27907L21.7035 6.15775C22.0924 5.76884 22.0924 5.13245 21.7035 4.74354ZM1.62012 22H5.86011L18.1702 9.68994L13.9302 5.44995L1.62012 17.76V22ZM5.03015 20H3.62012V18.59L13.9302 8.28002L15.3401 9.68994L5.03015 20Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),je=me(lt),ot="M7.58582 18L13.5858 12L7.58582 6L9.00003 4.58578L16.4142 12L9.00003 19.4142L7.58582 18Z",fe=()=>null,it=U=>{const{item:H,itemClasses:B,isFocused:Y,hasSubmenu:u,isDisabled:R,isSelected:O,isSeparator:f,onMouseEnter:j,onClick:D,getContent:W,focusedItemRef:T,attributes:F}=U,{ripple:L}=Ae(),{rippleMouseDown:$,Ripple:z}=Je(L),y=p=>{L&&!R&&!f&&$(p)};return i.jsxs("li",{ref:Y?T:void 0,className:B,onMouseEnter:j,onMouseDown:y,onClick:D,tabIndex:-1,role:"menuitem","aria-disabled":f?void 0:R,"aria-haspopup":f?void 0:u,"aria-expanded":f?void 0:!!(u&&O),"aria-label":f?"separator":H.text||void 0,...F,children:[!f&&(H.url?i.jsx("a",{className:"sf-menu-url",href:H.url,onClick:p=>p.stopPropagation(),children:i.jsx("div",{className:"sf-anchor-wrap",children:W(H)})}):W(H)),u&&i.jsx("span",{className:"sf-submenu-icon",children:i.jsx(Te,{d:ot,"aria-label":"submenu-icon"})}),L&&!R&&!f&&i.jsx(z,{})]})},at="M12.4142 19L6.41424 13H21V11H6.41424L12.4142 5L11 3.58578L2.58582 12L11 20.4142L12.4142 19Z",ut=c.forwardRef((U,H)=>{const{items:B=[],hoverDelay:Y=0,onOpen:u,onClose:R,onSelect:O,open:f,offset:j,animation:D={duration:400,easing:"ease",effect:"FadeIn"},itemOnClick:W,closeOnScroll:T=!0,allowBrowserContext:F=!1,targetRef:L,className:$,children:z,itemTemplate:y,...p}=U,E=c.useRef(null),x=c.useRef(null),[M,Z]=c.useState(!1),[b,V]=c.useState({x:0,y:0}),[l,Q]=c.useState([]),_=c.useRef(null),g=c.useRef(new Map),[m,N]=c.useState({focusedItems:null,hoveredItems:null}),le=c.useRef(null),he=c.useRef(f),{dir:q}=Ae(),P=c.useRef([]),ee=c.useCallback(e=>{var t;if(!(F&&e.ctrlKey)){if(A.isIos&&pe.current&&e.originalEvent){(t=e.originalEvent)==null||t.preventDefault();const n=e.originalEvent.changedTouches[0];V({x:n.clientX,y:n.clientY})}else e.preventDefault(),V({x:e.pageX,y:e.pageY});u==null||u(e.originalEvent?e.originalEvent:e),!(u&&f===!1)&&Z(!0)}},[u,f,F]),pe=c.useRef(_e(A.isIos&&L?L:{current:null},{tapHold:ee})),Ne={items:P.current,hoverDelay:Y,animation:D,open:f,offset:j,itemOnClick:W,targetRef:L,allowBrowserContext:F,closeOnScroll:T,itemTemplate:y};c.useEffect(()=>(et("contextmenu"),()=>{var e,t,n;(e=g.current)==null||e.clear(),_.current&&(clearTimeout(_.current),_.current=null),(n=(t=pe.current)==null?void 0:t.destroy)==null||n.call(t)}),[]);const ve=e=>{var t;M&&T&&!((t=E==null?void 0:E.current)!=null&&t.contains(e.target))&&X(e)};c.useEffect(()=>(T&&document.addEventListener("scroll",ve,!0),()=>{document.removeEventListener("scroll",ve,!0)}),[M,T,R,f]),c.useEffect(()=>{const e=L==null?void 0:L.current;return e&&e.addEventListener("contextmenu",ee),()=>{e&&e.removeEventListener("contextmenu",ee)}},[L,u,ee]),c.useEffect(()=>{!f&&he.current===f||(he.current=f,f?(j&&j.left!==void 0&&j.top!==void 0&&V({x:j.left,y:j.top}),Z(!0)):oe())},[f,j]),c.useEffect(()=>{var e;if(M){let t=b.x,n=b.y;const s=Re(x.current,document.documentElement,t,n);(s.includes("left")||s.includes("right"))&&(t=t-(((e=x==null?void 0:x.current)==null?void 0:e.offsetWidth)||0)),s.includes("bottom")&&(n=Le(x.current,null,{X:!1,Y:!0},{top:n,left:t}).top),(t!==b.x||n!==b.y)&&V({x:t,y:n}),ne(x.current),document.addEventListener("mousedown",ie)}else document.removeEventListener("mousedown",ie);return()=>document.removeEventListener("mousedown",ie)},[M,b]),c.useEffect(()=>{le.current&&le.current.focus()},[m]),c.useEffect(()=>{const e=z?c.Children.toArray(z).filter(n=>c.isValidElement(n)&&n.type===fe):null,t=e!=null&&e.length?Pe(e):B;P.current=Be(t)},[B,z]),c.useImperativeHandle(H,()=>({...Ne,element:E.current})),c.useEffect(()=>{var e,t,n,s,r;if(l.length>0){const a=l[l.length-1].parentIndex.join("-"),o=(e=g.current)==null?void 0:e.get(a);if(A.isDevice){ne(o);return}const h=l[l.length-1];if(h.positionChanged){ne(o);return}let v=h.position.x,S=h.position.y;const I=Re(o,document.documentElement,q==="rtl"?v-((o==null?void 0:o.offsetWidth)||0):v,S);(I.includes("left")||I.includes("right"))&&(v=ke(h.currentTarget,q==="rtl"?"right":"left","top").left,v=q==="rtl"?v:v-((o==null?void 0:o.offsetWidth)||0)),q==="rtl"&&!I.includes("right")&&!I.includes("left")&&(v=v-(((n=(t=g.current)==null?void 0:t.get(a))==null?void 0:n.offsetWidth)||0)),I.includes("bottom")&&(S=Le(o,null,{X:!1,Y:!0},{top:S,left:v}).top);const d=l.length>1?l[l.length-2].parentIndex.join("-"):"",k=((s=g.current)==null?void 0:s.size)===1?x.current:(r=g.current)==null?void 0:r.get(d);if(k&&!I.includes("right")){const w=k.offsetWidth-k.clientWidth;w>5&&(v+=q==="rtl"?-w:w)}h.position.x!==v||h.position.y!==S?Q(w=>w.map((K,de)=>{var se;return de===w.length-1?((se=g.current)==null||se.clear(),{...K,position:{x:v,y:S},positionChanged:!0}):K})):ne(o)}},[l]),c.useEffect(()=>{const e=t=>{M&&X(t)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[M]);const oe=c.useCallback(()=>{var e;Z(!1),Q([]),(e=g==null?void 0:g.current)==null||e.clear(),N({focusedItems:null,hoveredItems:null})},[]),X=c.useCallback(e=>{R==null||R(e),!(R&&f===!0)&&oe()},[R,f,oe]),ie=e=>{var t;(t=E.current)!=null&&t.contains(e.target)||X(e)},Ee=e=>{if(!c.isValidElement(e)||e.type!==fe)return null;const{children:t,text:n,id:s,icon:r,url:a,separator:o,disabled:h,...v}=e.props,S={text:n,id:s,icon:r,url:a,separator:o,disabled:h};if(t){const I=typeof t=="function"?t:c.Children.toArray(t).filter(k=>c.isValidElement(k)&&k.type!==fe);I.length>0&&(S.children=typeof I!="function"&&I.length===1?I[0]:I);const d=c.Children.toArray(t).map(Ee).filter(Boolean);d.length>0&&(S.items=d)}return Object.keys(v).length>0&&(S.htmlAttributes=v),S},Pe=e=>{if(!e)return B;const t=c.Children.toArray(e).map(Ee).filter(Boolean);return t.length>0?t:B},Be=e=>{if(!A.isDevice)return e;const t=n=>n.map(s=>{var r,a;if(s.items&&s.items.length>0){const o=s.items.length>0&&((a=(r=s.items[0])==null?void 0:r.icon)==null?void 0:a.key)==="previous";let h=s.items;return o||(h=[{text:s.text,children:s.children,icon:Ze,separator:!1,items:[]},...s.items]),h=t(h),{...s,items:h}}return s});return t(e)},ge=(e,t)=>{var r;if(!t||!x.current)return;let n=b.x,s=b.y;if(!A.isDevice){const a=ke(t,q==="rtl"?"left":"right","top");s=a.top,n=a.left}Q(a=>[...a.filter(o=>o.parentIndex.length<e.length).map(o=>({...o,isVisible:!1})),{parentIndex:e,position:{x:n,y:s},isVisible:!0,currentTarget:t,positionChanged:!1}]),(r=g.current)==null||r.clear()},te=()=>{var e;l.length<1||(Q(t=>{const n=t.filter((s,r)=>r!==t.length-1);return n.map((s,r)=>({...s,isVisible:r===n.length-1}))}),(e=g.current)==null||e.clear())},ne=e=>{var n;if(!e)return;if(D==null||D.duration&&D.duration<=0||(D==null?void 0:D.effect)==="None"||e.style.visibility==="visible"){e.style.visibility="visible",(n=x.current)==null||n.focus();return}const t=tt({duration:D.duration,timingFunction:D.easing,name:D.effect,begin:s=>{s!=null&&s.element&&(s.element.style.visibility="visible",D.effect==="SlideDown"&&(s.element.style.maxHeight=s.element.offsetHeight+"px",s.element.style.overflow="hidden"))},end:s=>{var r;s!=null&&s.element&&(D.effect==="SlideDown"&&(s.element.style.maxHeight=""),(r=x.current)==null||r.focus())}});e&&t.animate(e)},xe=()=>{var r,a;const e=m==null?void 0:m.focusedItems,t=e?G(e):[];if(t.length===0)return;let n=0;for(;n<t.length&&(t[n].separator||t[n].disabled);)n++;if(n>=t.length)return;N(o=>({focusedItems:[...e,n],hoveredItems:o==null?void 0:o.hoveredItems}));let s;if(l.length>0){const o=e==null?void 0:e.slice(0,-1);s=(r=g.current.get(o.join("-")))==null?void 0:r.children[e==null?void 0:e[e.length-1]]}else s=(a=x.current)==null?void 0:a.children[e==null?void 0:e[0]];ae(e,s)},ae=(e,t)=>{_.current&&clearTimeout(_.current),_.current=window.setTimeout(()=>{ge(e,t)},Y)},We=e=>{const t=e.key;switch(t){case"Escape":e.preventDefault(),l.length>0?(te(),m.focusedItems&&m.focusedItems.length>1&&N(n=>{var s;return{focusedItems:(s=n==null?void 0:n.focusedItems)==null?void 0:s.slice(0,-1),hoveredItems:n==null?void 0:n.hoveredItems}})):X(e.nativeEvent);break;case"Enter":case" ":{const n=l.length>0?G(l[l.length-1].parentIndex):P.current,s=m.focusedItems&&m.focusedItems.length>0?n[m.focusedItems[m.focusedItems.length-1]]:void 0;if(!(s!=null&&s.items)||s.items.length===0){O==null||O({item:s,event:e}),X(e.nativeEvent);return}xe(),e.preventDefault();break}case"ArrowUp":e.preventDefault(),Ie(-1);break;case"ArrowDown":e.preventDefault(),Ie(1);break;case"ArrowLeft":e.preventDefault(),m.focusedItems&&m.focusedItems.length>1&&N(n=>{var s;return{focusedItems:(s=n==null?void 0:n.focusedItems)==null?void 0:s.slice(0,-1),hoveredItems:n==null?void 0:n.hoveredItems}}),l.length>0&&te();break;case"ArrowRight":e.preventDefault(),xe();break;case"Home":e.preventDefault(),ue("first");break;case"End":e.preventDefault(),ue("last");break;default:t.length===1&&/[a-zA-Z0-9]/.test(t)&&(e.preventDefault(),ue("character",t.toLowerCase()));break}},ue=(e,t)=>{var v,S,I;const n=l.length>0?G(l[l.length-1].parentIndex):P.current;if(!(n!=null&&n.length))return;const s=l.length>0?[...((v=l[l.length-1])==null?void 0:v.parentIndex)||[]]:[],r=((S=m==null?void 0:m.focusedItems)==null?void 0:S.length)===s.length+1?m.focusedItems[m.focusedItems.length-1]:-1,a=d=>d&&!d.separator&&!d.disabled,o=(d,k)=>d.text&&typeof d.text=="string"&&d.text.toLowerCase().startsWith(k);let h=-1;switch(e){case"first":h=n.findIndex(a);break;case"last":h=((I=n.map((d,k)=>({item:d,idx:k})).reverse().find(({item:d})=>a(d)))==null?void 0:I.idx)??-1;break;case"character":if(!t||typeof t!="string"||t.length!==1)return;{const d=Math.max(0,r+1),w=[...n.slice(d),...n.slice(0,d)].find(K=>a(K)&&o(K,t));w&&(h=n.indexOf(w))}break}h>=0&&(N==null||N(d=>({focusedItems:[...s,h],hoveredItems:(d==null?void 0:d.hoveredItems)||null})))},Ie=e=>{const t=l.length>0?G(l[l.length-1].parentIndex):P.current;if(t.length===0)return;const n=l.length>0?[...l[l.length-1].parentIndex]:[],s=m.focusedItems&&m.focusedItems.length===n.length+1?m.focusedItems[m.focusedItems.length-1]:null;let r=s===null?e>0?0:t.length-1:(s+e+t.length)%t.length,a=0;for(;r<t.length&&(t[r].separator||t[r].disabled)&&a<t.length;)r=(r+e+t.length)%t.length,a++;a>=t.length||N(o=>({focusedItems:[...n,r],hoveredItems:o==null?void 0:o.hoveredItems}))},G=c.useCallback(e=>e.reduce((t,n)=>{var s;return((s=t[n])==null?void 0:s.items)||[]},P.current),[]),Ze=c.useMemo(()=>i.jsx(Te,{d:at,"aria-label":"Previous"},"previous"),[]),qe=e=>y?e.children||y(e):i.jsxs(i.Fragment,{children:[e.icon&&i.jsx("span",{className:["sf-menu-icon sf-icon sf-icon-size",typeof e.icon=="string"?e.icon:""].filter(Boolean).join(" "),children:typeof e.icon!="string"&&e.icon}),e.children||e.text]}),De=(e,t)=>e.map((n,s)=>{var be,Se,Ce;const r=[...t,s],a=n.items?n.items.length>0:!1,o=n.disabled===!0,h=A.isDevice&&((be=n.icon)==null?void 0:be.key)==="previous",{className:v,...S}=n.htmlAttributes||{},I=r.join("-")===((Se=m.focusedItems)==null?void 0:Se.join("-")),d=r.join("-")===((Ce=m.hoveredItems)==null?void 0:Ce.join("-")),k=!n.icon&&e.find((C,re)=>re!==s&&C.icon)!==void 0,w=l.some(C=>t.length===0?C.parentIndex[0]===s:t.length===C.parentIndex.length-1&&C.parentIndex.slice(0,-1).join("-")===t.join("-")&&C.parentIndex[C.parentIndex.length-1]===s),K=["sf-menu-item sf-align-center sf-ellipsis",n.separator&&"sf-separator",o&&"sf-disabled",h&&"sf-menu-header",(I||d)&&"sf-focused",w&&a&&"sf-has-submenu",k&&"sf-blank-icon",v].filter(Boolean).join(" "),de=C=>{var re,Me;if(N(J=>({focusedItems:J==null?void 0:J.focusedItems,hoveredItems:r})),!a){l.length===r.length?te():l.length>r.length&&(Q(l.slice(0,r.length-1)),(re=g==null?void 0:g.current)==null||re.clear());return}if(!A.isDevice&&a&&!W&&!o){if(l&&l.find(J=>J.parentIndex.join("-")===r.join("-")))return;(Me=g==null?void 0:g.current)==null||Me.clear(),ae(r,C.currentTarget)}},se=C=>{C.preventDefault(),!o&&(h?te():a?A.isDevice?ge(r,C.currentTarget):W&&ae(r,C.currentTarget):(O==null||O({item:n,event:C}),X(C.nativeEvent)))};return i.jsx(it,{item:n,itemClasses:K,isFocused:I,hasSubmenu:a,isDisabled:o,isSelected:w,isSeparator:!!n.separator,onMouseEnter:de,onClick:se,getContent:qe,focusedItemRef:le,attributes:S},r.join("-"))}),Fe=()=>l.map(({parentIndex:e,position:t,isVisible:n})=>{const s=G(e),r=e.join("-");return i.jsx("ul",{ref:a=>{a&&g.current&&g.current.set(r,a)},className:"sf-menu-parent",style:{left:t.x,top:t.y,display:A.isDevice&&!n?"none":"block",visibility:"hidden"},tabIndex:0,role:"menu",children:De(s,e)},`submenu-${r}`)}),ze=c.useMemo(()=>["sf-contextmenu","sf-control",q==="rtl"?"sf-rtl":"",$].filter(Boolean).join(" "),[q]),ye=typeof document<"u"?document.body:null;return ye?i.jsx(i.Fragment,{children:M&&Ke.createPortal(i.jsxs("div",{ref:E,className:ze,onKeyDown:We,...p,children:[i.jsx("ul",{className:"sf-menu-parent",style:{top:b.y,left:b.x,display:A.isDevice&&l.length>0?"none":"block",visibility:"hidden"},role:"menu",tabIndex:0,ref:x,children:P.current&&P.current.length>0&&De(P.current,[])}),Fe()]}),ye)}):null}),gt={title:"Scheduler/ContextMenu",parameters:{docs:{description:{component:"Meta configuration for the Storybook stories"}}}},ce={parameters:{controls:{disable:!0}},render:()=>{const U=y=>{T(y.value)},H=[{text:"New Event",id:"Add",icon:i.jsx(rt,{})},{text:"New Recurring Event",id:"AddRecurrence",icon:i.jsx(Ge,{})},{text:"Today",id:"Today",icon:i.jsx(nt,{})}],B=[{text:"Edit Event",id:"Edit",icon:i.jsx(je,{})},{text:"Delete Event",id:"Delete",icon:i.jsx(we,{})}],Y=[{text:"Edit Event",id:"EditRecurrenceEvent",icon:i.jsx(je,{}),items:[{text:"Edit Occurrence",id:"EditOccurrence"},{text:"Edit Series",id:"EditSeries"}]},{text:"Delete Event",id:"DeleteRecurrenceEvent",icon:i.jsx(we,{}),items:[{text:"Delete Occurrence",id:"DeleteOccurrence"},{text:"Delete Series",id:"DeleteSeries"}]}],u=c.useRef(null),R=c.useRef(null),[O,f]=c.useState(!1),[j,D]=c.useState(H),[W,T]=c.useState(new Date(2021,0,10)),F=y=>{R.current=y},L=y=>{var b,V;const p=(y==null?void 0:y.target)??null;if(!u.current||!p)return;const E=u.current.element.querySelector(".sf-selected-cell"),x=u.current.element.querySelector(".sf-appointment-active");E==null||E.classList.remove("sf-selected-cell"),x==null||x.classList.remove("sf-appointment-active");const M=((b=p.closest)==null?void 0:b.call(p,".sf-appointment"))??null;if(M){M.classList.add("sf-appointment-active");const l=u.current.getEventDetails(M);l&&(l.recurrenceRule||l.recurrenceID)?D(Y):D(B),f(!0);return}const Z=((V=p.closest)==null?void 0:V.call(p,".sf-work-cells, .sf-all-day-cell, .sf-header-cells"))??null;Z&&(Z.classList.add("sf-selected-cell"),D(H),f(!0))},$=()=>{f(!1)},z=y=>{var M;const p=(M=y==null?void 0:y.item)==null?void 0:M.id;let E;if(!u.current||!p)return;const x=u.current.element.querySelector(".sf-appointment-active");switch(x&&(E=u.current.getEventDetails(x)),p){case"Today":{T(new Date);break}case"Add":case"AddRecurrence":{const Z=u.current.element.querySelector(".sf-selected-cell"),b=u.current.getCellDetails(Z);if(p==="Add"&&u.current.openEditor(p,b),p==="AddRecurrence"){const V=b;V.recurrenceRule="FREQ=DAILY;INTERVAL=1;",u.current.openEditor("Add",V)}break}case"Edit":{u.current.openEditor(p,E);break}case"EditOccurrence":case"EditSeries":{if(!E)break;u.current.openEditor(p,E);break}case"Delete":{u.current.deleteEvent(E);break}case"DeleteOccurrence":{if(!E)break;u.current.deleteEvent(E,"DeleteOccurrence");break}case"DeleteSeries":{if(!E)break;u.current.deleteEvent(E,"DeleteSeries");break}}};return i.jsx(i.Fragment,{children:i.jsx("div",{className:"control-section",children:i.jsxs("div",{className:"schedulerr-control",ref:F,children:[i.jsxs(Xe,{ref:u,height:"550px",width:"100%",selectedDate:W,eventSettings:{dataSource:Ye},onSelectedDateChange:U,children:[i.jsx(Ue,{}),i.jsx($e,{}),i.jsx(Qe,{})]}),i.jsx(ut,{open:O,targetRef:R,items:j,onOpen:L,onClose:$,onSelect:z})]})})})}};var He,Oe,Ve;ce.parameters={...ce.parameters,docs:{...(He=ce.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
        // detect if this appointment is part of a recurrence (either occurrence or the series)
        const eventDetails = schedulerRef.current.getEventDetails(appointment);
        if (eventDetails && (eventDetails.recurrenceRule || eventDetails.recurrenceID)) {
          setMenu(recurrenceEventMenuItems);
        } else {
          setMenu(eventMenuItems);
        }
        setOpen(true);
        return;
      }
      const cell = target.closest?.('.sf-work-cells, .sf-all-day-cell, .sf-header-cells') as HTMLElement | null ?? null;
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
              const eventForRecurrence = activeCellDetails as unknown as EventModel;
              eventForRecurrence.recurrenceRule = 'FREQ=DAILY;INTERVAL=1;';
              schedulerRef.current.openEditor('Add', eventForRecurrence);
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
}`,...(Ve=(Oe=ce.parameters)==null?void 0:Oe.docs)==null?void 0:Ve.source}}};const xt=["ContextMenuSample"];export{ce as ContextMenuSample,xt as __namedExportsOrder,gt as default};
