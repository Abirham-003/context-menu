import{j as a,r as Ke}from"./index-7s7xaQU8.js";import{s as _e}from"./dataSource-CrVxx1x3.js";import{j as me,u as He,d as A,n as Xe,p as Ye,o as De,q as ke,r as Le,A as ze,s as Te,t as Ue,S as $e,D as Fe,W as Qe,M as qe}from"./month-view-BcekV27L.js";import{r as l}from"./index-CC6F48bw.js";import{D as Ge}from"./day-D6OOBl0S.js";import"./index-qiR4Kxfn.js";const Je=a.jsx("path",{d:"M7 6V2H5V6H1V8H5V12H7V8H11V6H7ZM11 2H20C21.1046 2 22 2.89543 22 4V13.5858C22 14.1162 21.7893 14.6249 21.4142 15L15 21.4142C14.6249 21.7893 14.1162 22 13.5858 22H4C2.89543 22 2 21.1046 2 20V13H4V20H13V13H20V4H11V2Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),et=me(Je),tt=a.jsx("path",{d:"M12 2H20C21.1046 2 22 2.89543 22 4V13.5858C22 14.1162 21.7893 14.6249 21.4142 15L15 21.4142C14.6249 21.7893 14.1162 22 13.5858 22H4C2.89543 22 2 21.1046 2 20V13H4V20H13V13H20V4H12V2ZM5.99999 5.58579L3.49997 3.08578L2.08576 4.5L4.58578 7.00001L2.08577 9.50002L3.49998 10.9142L6 8.41422L8.5 10.9142L9.91421 9.5L7.41421 7L9.91419 4.50002L8.49998 3.08581L5.99999 5.58579Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),nt=me(tt),st=a.jsx("path",{d:"M21.7035 4.74354L18.8751 1.91511C18.4862 1.5262 17.8498 1.5262 17.4609 1.91511L15.3395 4.03643L19.5822 8.27907L21.7035 6.15775C22.0924 5.76884 22.0924 5.13245 21.7035 4.74354ZM1.62012 22H5.86011L18.1702 9.68994L13.9302 5.44995L1.62012 17.76V22ZM5.03015 20H3.62012V18.59L13.9302 8.28002L15.3401 9.68994L5.03015 20Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),lt=me(st),ot="M7.58582 18L13.5858 12L7.58582 6L9.00003 4.58578L16.4142 12L9.00003 19.4142L7.58582 18Z",rt="M12.4142 19L6.41424 13H21V11H6.41424L12.4142 5L11 3.58578L2.58582 12L11 20.4142L12.4142 19Z",fe=()=>null,ct=F=>{const{item:N,itemClasses:T,isFocused:X,hasSubmenu:v,isDisabled:S,isSelected:V,isSeparator:h,onMouseEnter:j,onClick:C,getContent:Z,focusedItemRef:P,attributes:H}=F,{ripple:K}=He(),{rippleMouseDown:B,Ripple:Y}=Ue(K),Q=w=>{K&&!S&&!h&&B(w)};return a.jsxs("li",{ref:X?P:void 0,className:T,onMouseEnter:j,onMouseDown:Q,onClick:C,tabIndex:-1,role:"menuitem","aria-disabled":h?void 0:S,"aria-haspopup":h?void 0:v,"aria-expanded":h?void 0:!!(v&&V),"aria-label":h?"separator":N.text||void 0,...H,children:[!h&&(N.url?a.jsx("a",{className:"sf-menu-url",href:N.url,onClick:w=>w.stopPropagation(),children:a.jsx("div",{className:"sf-anchor-wrap",children:Z(N)})}):Z(N)),v&&a.jsx("span",{className:"sf-submenu-icon",children:a.jsx(Te,{d:ot,"aria-label":"submenu-icon"})}),K&&!S&&!h&&a.jsx(Y,{})]})},it=l.forwardRef((F,N)=>{const{items:T=[],hoverDelay:X=0,onOpen:v,onClose:S,onSelect:V,open:h,offset:j,animation:C={duration:400,easing:"ease",effect:"FadeIn"},itemOnClick:Z,closeOnScroll:P=!0,targetRef:H,className:K,children:B,itemTemplate:Y,...Q}=F,w=l.useRef(null),y=l.useRef(null),[z,q]=l.useState(!1),[p,d]=l.useState({x:0,y:0}),[o,I]=l.useState([]),R=l.useRef(null),f=l.useRef(new Map),[u,D]=l.useState({focusedItems:null,hoveredItems:null}),_=l.useRef(null),U=l.useRef(h),{dir:O}=He(),W=l.useRef([]),re=l.useCallback(e=>{var t;if(A.isIos&&he.current&&e.originalEvent){(t=e.originalEvent)==null||t.preventDefault();const n=e.originalEvent.changedTouches[0];d({x:n.clientX,y:n.clientY})}else e.preventDefault(),d({x:e.pageX,y:e.pageY});v==null||v(e.originalEvent?e.originalEvent:e),!(v&&h===!1)&&q(!0)},[v,h]),he=l.useRef(Xe(A.isIos&&H?H:{current:null},{tapHold:re})),Ve={items:W.current,hoverDelay:X,animation:C,open:h,offset:j,itemOnClick:Z,targetRef:H,closeOnScroll:P,itemTemplate:Y};l.useEffect(()=>(Ye("contextmenu"),()=>{var e,t,n;(e=f.current)==null||e.clear(),R.current&&(clearTimeout(R.current),R.current=null),(n=(t=he.current)==null?void 0:t.destroy)==null||n.call(t)}),[]);const pe=e=>{var t;z&&P&&!((t=w==null?void 0:w.current)!=null&&t.contains(e.target))&&G(e)};l.useEffect(()=>(P&&document.addEventListener("scroll",pe,!0),()=>{document.removeEventListener("scroll",pe,!0)}),[z,P,S,h]),l.useEffect(()=>{const e=H==null?void 0:H.current;return e&&e.addEventListener("contextmenu",re),()=>{e&&e.removeEventListener("contextmenu",re)}},[H,v]),l.useEffect(()=>{!h&&U.current===h||(U.current=h,h?(j&&j.left!==void 0&&j.top!==void 0&&d({x:j.left,y:j.top}),q(!0)):ce())},[h,j]),l.useEffect(()=>{var e;if(z){let t=p.x,n=p.y;const s=De(y.current,document.documentElement,t,n);(s.includes("left")||s.includes("right"))&&(t=t-(((e=y==null?void 0:y.current)==null?void 0:e.offsetWidth)||0)),s.includes("bottom")&&(n=ke(y.current,null,{X:!1,Y:!0},{top:n,left:t}).top),(t!==p.x||n!==p.y)&&d({x:t,y:n}),ne(y.current),document.addEventListener("mousedown",ie)}else document.removeEventListener("mousedown",ie);return()=>document.removeEventListener("mousedown",ie)},[z,p]),l.useEffect(()=>{_.current&&_.current.focus()},[u]),l.useEffect(()=>{const e=B?l.Children.toArray(B).filter(n=>l.isValidElement(n)&&n.type===fe):null,t=e!=null&&e.length?Oe(e):T;W.current=Ae(t)},[T,B]),l.useImperativeHandle(N,()=>({...Ve,element:w.current})),l.useEffect(()=>{var e,t,n,s,r;if(o.length>0){const i=o[o.length-1].parentIndex.join("-"),c=(e=f.current)==null?void 0:e.get(i);if(A.isDevice){ne(c);return}const g=o[o.length-1];if(g.positionChanged){ne(c);return}let x=g.position.x,b=g.position.y;const E=De(c,document.documentElement,O==="rtl"?x-((c==null?void 0:c.offsetWidth)||0):x,b);(E.includes("left")||E.includes("right"))&&(x=Le(g.currentTarget,O==="rtl"?"right":"left","top").left,x=O==="rtl"?x:x-((c==null?void 0:c.offsetWidth)||0)),O==="rtl"&&!E.includes("right")&&!E.includes("left")&&(x=x-(((n=(t=f.current)==null?void 0:t.get(i))==null?void 0:n.offsetWidth)||0)),E.includes("bottom")&&(b=ke(c,null,{X:!1,Y:!0},{top:b,left:x}).top);const m=o.length>1?o[o.length-2].parentIndex.join("-"):"",k=((s=f.current)==null?void 0:s.size)===1?y.current:(r=f.current)==null?void 0:r.get(m);if(k&&!E.includes("right")){const L=k.offsetWidth-k.clientWidth;L>5&&(x+=O==="rtl"?-L:L)}g.position.x!==x||g.position.y!==b?I(L=>L.map(($,de)=>{var se;return de===L.length-1?((se=f.current)==null||se.clear(),{...$,position:{x,y:b},positionChanged:!0}):$})):ne(c)}},[o]);const ce=l.useCallback(()=>{var e;q(!1),I([]),(e=f==null?void 0:f.current)==null||e.clear(),D({focusedItems:null,hoveredItems:null})},[]),G=l.useCallback(e=>{S==null||S(e),!(S&&h===!0)&&ce()},[S,h,ce]),ie=e=>{var t;(t=w.current)!=null&&t.contains(e.target)||G(e)},ge=e=>{if(!l.isValidElement(e)||e.type!==fe)return null;const{children:t,text:n,id:s,icon:r,url:i,separator:c,disabled:g,...x}=e.props,b={text:n,id:s,icon:r,url:i,separator:c,disabled:g};if(t){const E=typeof t=="function"?t:l.Children.toArray(t).filter(k=>l.isValidElement(k)&&k.type!==fe);E.length>0&&(b.children=typeof E!="function"&&E.length===1?E[0]:E);const m=l.Children.toArray(t).map(ge).filter(Boolean);m.length>0&&(b.items=m)}return Object.keys(x).length>0&&(b.htmlAttributes=x),b},Oe=e=>{if(!e)return T;const t=l.Children.toArray(e).map(ge).filter(Boolean);return t.length>0?t:T},Ae=e=>{if(!A.isDevice)return e;const t=n=>n.map(s=>{var r,i;if(s.items&&s.items.length>0){const c=s.items.length>0&&((i=(r=s.items[0])==null?void 0:r.icon)==null?void 0:i.key)==="previous";let g=s.items;return c||(g=[{text:s.text,children:s.children,icon:Pe,separator:!1,items:[]},...s.items]),g=t(g),{...s,items:g}}return s});return t(e)},xe=(e,t)=>{var r;if(!t||!y.current)return;let n=p.x,s=p.y;if(!A.isDevice){const i=Le(t,O==="rtl"?"left":"right","top");s=i.top,n=i.left}I(i=>[...i.filter(c=>c.parentIndex.length<e.length).map(c=>({...c,isVisible:!1})),{parentIndex:e,position:{x:n,y:s},isVisible:!0,currentTarget:t,positionChanged:!1}]),(r=f.current)==null||r.clear()},te=()=>{var e;o.length<1||(I(t=>{const n=t.filter((s,r)=>r!==t.length-1);return n.map((s,r)=>({...s,isVisible:r===n.length-1}))}),(e=f.current)==null||e.clear())},ne=e=>{var n;if(!e)return;if(C==null||C.duration&&C.duration<=0||(C==null?void 0:C.effect)==="None"||e.style.visibility==="visible"){e.style.visibility="visible",(n=y.current)==null||n.focus();return}const t=ze({duration:C.duration,timingFunction:C.easing,name:C.effect,begin:s=>{s!=null&&s.element&&(s.element.style.visibility="visible",C.effect==="SlideDown"&&(s.element.style.maxHeight=s.element.offsetHeight+"px",s.element.style.overflow="hidden"))},end:s=>{var r;s!=null&&s.element&&(C.effect==="SlideDown"&&(s.element.style.maxHeight=""),(r=y.current)==null||r.focus())}});e&&t.animate(e)},Ie=()=>{var r,i;const e=u==null?void 0:u.focusedItems,t=e?J(e):[];if(t.length===0)return;let n=0;for(;n<t.length&&(t[n].separator||t[n].disabled);)n++;if(n>=t.length)return;D(c=>({focusedItems:[...e,n],hoveredItems:c==null?void 0:c.hoveredItems}));let s;if(o.length>0){const c=e==null?void 0:e.slice(0,-1);s=(r=f.current.get(c.join("-")))==null?void 0:r.children[e==null?void 0:e[e.length-1]]}else s=(i=y.current)==null?void 0:i.children[e==null?void 0:e[0]];ae(e,s)},ae=(e,t)=>{R.current&&clearTimeout(R.current),R.current=window.setTimeout(()=>{xe(e,t)},X)},Ne=e=>{const t=e.key;switch(t){case"Escape":e.preventDefault(),o.length>0?(te(),u.focusedItems&&u.focusedItems.length>1&&D(n=>{var s;return{focusedItems:(s=n==null?void 0:n.focusedItems)==null?void 0:s.slice(0,-1),hoveredItems:n==null?void 0:n.hoveredItems}})):G(e.nativeEvent);break;case"Enter":case" ":{const n=o.length>0?J(o[o.length-1].parentIndex):W.current,s=u.focusedItems&&u.focusedItems.length>0?n[u.focusedItems[u.focusedItems.length-1]]:void 0;if(!(s!=null&&s.items)||s.items.length===0){V==null||V({item:s,event:e}),G(e.nativeEvent);return}Ie(),e.preventDefault();break}case"ArrowUp":e.preventDefault(),Ee(-1);break;case"ArrowDown":e.preventDefault(),Ee(1);break;case"ArrowLeft":e.preventDefault(),u.focusedItems&&u.focusedItems.length>1&&D(n=>{var s;return{focusedItems:(s=n==null?void 0:n.focusedItems)==null?void 0:s.slice(0,-1),hoveredItems:n==null?void 0:n.hoveredItems}}),o.length>0&&te();break;case"ArrowRight":e.preventDefault(),Ie();break;case"Home":e.preventDefault(),ue("first");break;case"End":e.preventDefault(),ue("last");break;default:t.length===1&&/[a-zA-Z0-9]/.test(t)&&(e.preventDefault(),ue("character",t.toLowerCase()));break}},ue=(e,t)=>{var x,b,E;const n=o.length>0?J(o[o.length-1].parentIndex):W.current;if(!(n!=null&&n.length))return;const s=o.length>0?[...((x=o[o.length-1])==null?void 0:x.parentIndex)||[]]:[],r=((b=u==null?void 0:u.focusedItems)==null?void 0:b.length)===s.length+1?u.focusedItems[u.focusedItems.length-1]:-1,i=m=>m&&!m.separator&&!m.disabled,c=(m,k)=>m.text&&typeof m.text=="string"&&m.text.toLowerCase().startsWith(k);let g=-1;switch(e){case"first":g=n.findIndex(i);break;case"last":g=((E=n.map((m,k)=>({item:m,idx:k})).reverse().find(({item:m})=>i(m)))==null?void 0:E.idx)??-1;break;case"character":if(!t||typeof t!="string"||t.length!==1)return;{const m=Math.max(0,r+1),L=[...n.slice(m),...n.slice(0,m)].find($=>i($)&&c($,t));L&&(g=n.indexOf(L))}break}g>=0&&(D==null||D(m=>({focusedItems:[...s,g],hoveredItems:(m==null?void 0:m.hoveredItems)||null})))},Ee=e=>{const t=o.length>0?J(o[o.length-1].parentIndex):W.current;if(t.length===0)return;const n=o.length>0?[...o[o.length-1].parentIndex]:[],s=u.focusedItems&&u.focusedItems.length===n.length+1?u.focusedItems[u.focusedItems.length-1]:null;let r=s===null?e>0?0:t.length-1:(s+e+t.length)%t.length,i=0;for(;r<t.length&&(t[r].separator||t[r].disabled)&&i<t.length;)r=(r+e+t.length)%t.length,i++;i>=t.length||D(c=>({focusedItems:[...n,r],hoveredItems:c==null?void 0:c.hoveredItems}))},J=l.useCallback(e=>e.reduce((t,n)=>{var s;return((s=t[n])==null?void 0:s.items)||[]},W.current),[]),Pe=l.useMemo(()=>a.jsx(Te,{d:rt,"aria-label":"Previous"},"previous"),[]),Be=e=>Y?e.children||Y(e):a.jsxs(a.Fragment,{children:[e.icon&&a.jsx("span",{className:["sf-menu-icon sf-icon sf-icon-size",typeof e.icon=="string"?e.icon:""].filter(Boolean).join(" "),children:typeof e.icon!="string"&&e.icon}),e.children||e.text]}),Ce=(e,t)=>e.map((n,s)=>{var Me,ve,ye;const r=[...t,s],i=n.items?n.items.length>0:!1,c=n.disabled===!0,g=A.isDevice&&((Me=n.icon)==null?void 0:Me.key)==="previous",{className:x,...b}=n.htmlAttributes||{},E=r.join("-")===((ve=u.focusedItems)==null?void 0:ve.join("-")),m=r.join("-")===((ye=u.hoveredItems)==null?void 0:ye.join("-")),k=!n.icon&&e.find((M,le)=>le!==s&&M.icon)!==void 0,L=o.some(M=>t.length===0?M.parentIndex[0]===s:t.length===M.parentIndex.length-1&&M.parentIndex.slice(0,-1).join("-")===t.join("-")&&M.parentIndex[M.parentIndex.length-1]===s),$=["sf-menu-item sf-align-center sf-ellipsis",n.separator&&"sf-separator",c&&"sf-disabled",g&&"sf-menu-header",(E||m)&&"sf-focused",L&&i&&"sf-has-submenu",k&&"sf-blank-icon",x].filter(Boolean).join(" "),de=M=>{var le,Se;if(D(ee=>({focusedItems:ee==null?void 0:ee.focusedItems,hoveredItems:r})),!i){o.length===r.length?te():o.length>r.length&&(I(o.slice(0,r.length-1)),(le=f==null?void 0:f.current)==null||le.clear());return}if(!A.isDevice&&i&&!Z&&!c){if(o&&o.find(ee=>ee.parentIndex.join("-")===r.join("-")))return;(Se=f==null?void 0:f.current)==null||Se.clear(),ae(r,M.currentTarget)}},se=M=>{M.preventDefault(),!c&&(g?te():i?A.isDevice?xe(r,M.currentTarget):Z&&ae(r,M.currentTarget):(V==null||V({item:n,event:M}),G(M.nativeEvent)))};return a.jsx(ct,{item:n,itemClasses:$,isFocused:E,hasSubmenu:i,isDisabled:c,isSelected:L,isSeparator:!!n.separator,onMouseEnter:de,onClick:se,getContent:Be,focusedItemRef:_,attributes:b},r.join("-"))}),We=()=>o.map(({parentIndex:e,position:t,isVisible:n})=>{const s=J(e),r=e.join("-");return a.jsx("ul",{ref:i=>{i&&f.current&&f.current.set(r,i)},className:"sf-menu-parent",style:{left:t.x,top:t.y,display:A.isDevice&&!n?"none":"block",visibility:"hidden"},tabIndex:0,role:"menu",children:Ce(s,e)},`submenu-${r}`)}),Ze=l.useMemo(()=>["sf-contextmenu","sf-control",O==="rtl"?"sf-rtl":"",K].filter(Boolean).join(" "),[O]),be=typeof document<"u"?document.body:null;return be?a.jsx(a.Fragment,{children:z&&Ke.createPortal(a.jsxs("div",{ref:w,className:Ze,onKeyDown:Ne,...Q,children:[a.jsx("ul",{className:"sf-menu-parent",style:{top:p.y,left:p.x,display:A.isDevice&&o.length>0?"none":"block",visibility:"hidden"},role:"menu",tabIndex:0,ref:y,children:W.current&&W.current.length>0&&Ce(W.current,[])}),We()]}),be)}):null}),pt={title:"Scheduler/ContextMenu",parameters:{docs:{description:{component:"Meta configuration for the Storybook stories"}}}},oe={parameters:{controls:{disable:!0}},render:()=>{const F=l.useMemo(()=>({dataSource:_e}),[]),N=l.useCallback(p=>{K(p.value)},[]),T=l.useMemo(()=>[{text:"New Event",id:"Add",icon:a.jsx(et,{})},{text:"Today",id:"Today",icon:a.jsx(Ge,{})}],[]),X=l.useMemo(()=>[{text:"Edit Event",id:"Edit",icon:a.jsx(lt,{})},{text:"Delete Event",id:"Delete",icon:a.jsx(nt,{})}],[]),v=l.useRef(null),[S,V]=l.useState(null),h=l.useRef(null),[j,C]=l.useState(!1),[Z,P]=l.useState(T),[H,K]=l.useState(new Date(2021,0,10)),B=l.useRef(null),Y=l.useCallback(p=>{v.current=p},[]),Q=l.useCallback(p=>{V(p)},[]),w=l.useMemo(()=>({current:S}),[S]),y=l.useCallback(p=>{var I,R,f,u,D,_;const d=(p==null?void 0:p.target)??null,o=(d==null?void 0:d.parentElement)??null;if((R=(I=v.current)==null?void 0:I.closeQuickInfoPopup)==null||R.call(I),(f=d==null?void 0:d.classList)!=null&&f.contains("sf-work-cells")||(u=d==null?void 0:d.classList)!=null&&u.contains("sf-all-day-cell")||(D=o==null?void 0:o.classList)!=null&&D.contains("sf-work-cells"))B.current=d,P(T),C(!0);else{const U=(_=d==null?void 0:d.closest)==null?void 0:_.call(d,".sf-appointment");U&&(B.current=U,P(X),C(!0))}},[X,T]),z=l.useCallback(()=>{C(!1)},[]),q=l.useCallback(p=>{var R,f;const d=(R=p==null?void 0:p.item)==null?void 0:R.id,o=v.current,I=B.current;if(!(!o||!d))switch((f=I==null?void 0:I.closest)!=null&&f.call(I,".sf-appointment")&&(h.current=o.getEventDetails(I)),d){case"Today":{K(new Date);break}case"Add":{const u=o.getSelectedElements(),_=(Array.isArray(u)?u.some(O=>O===I):!1)?u:I,U=o.getCellDetails(_);d==="Add"&&o.openEditor(d,U);break}case"Edit":{o.openEditor(d,h.current);break}case"Delete":{o.deleteEvent(h.current);break}}},[]);return a.jsx(a.Fragment,{children:a.jsx("div",{className:"control-section",children:a.jsxs("div",{className:"schedulerr-control",ref:Q,children:[a.jsxs($e,{ref:Y,height:"550px",width:"100%",selectedDate:H,eventSettings:F,onSelectedDateChange:N,children:[a.jsx(Fe,{}),a.jsx(Qe,{}),a.jsx(qe,{})]}),a.jsx(it,{open:j,targetRef:w,items:Z,onOpen:y,onClose:z,onSelect:q})]})})})}};var we,Re,je;oe.parameters={...oe.parameters,docs:{...(we=oe.parameters)==null?void 0:we.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const eventSettings = useMemo(() => ({
      dataSource: scheduleData
    }), []);
    const onSelectedDateChange = useCallback((event: SchedulerDateChangeEvent) => {
      setSelectedDate(event.value);
    }, []);
    const newMenuItems = useMemo<MenuItemProps[]>(() => [{
      text: 'New Event',
      id: 'Add',
      icon: <AddNotesIcon />
    }, {
      text: 'Today',
      id: 'Today',
      icon: <DayIcon />
    }], []);
    const editMenuItems = useMemo<MenuItemProps[]>(() => [{
      text: 'Edit Event',
      id: 'Edit',
      icon: <EditIcon />
    }, {
      text: 'Delete Event',
      id: 'Delete',
      icon: <DeleteNotesIcon />
    }], []);
    const scheduleRef = useRef<IScheduler | null>(null);
    // Store the actual HTMLElement in state; derive RefObject for ContextMenu
    const [targetEl, setTargetEl] = useState<HTMLElement | null>(null);
    const selectedEventRef = useRef<EventModel>(null);
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState<MenuItemProps[]>(newMenuItems);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date(2021, 0, 10));
    const selectedTargetRef = useRef<HTMLElement | null>(null);
    const setSchedulerRef = useCallback((instance: IScheduler | null) => {
      scheduleRef.current = instance;
    }, []);

    // Callback ref to capture the wrapper element as the target
    const setContainerRef: (el: HTMLDivElement) => void = useCallback((el: HTMLDivElement | null) => {
      setTargetEl(el as unknown as HTMLElement | null);
    }, []);

    // Create a stable RefObject-like shape for ContextMenu
    const targetRefObj: RefObject<HTMLElement> = useMemo(() => ({
      current: targetEl
    }), [targetEl]);
    const onContextMenuBeforeOpen = useCallback((args: Event) => {
      const target: HTMLElement = args?.target as HTMLElement ?? null;
      const parentElement: HTMLElement = target?.parentElement ?? null;
      scheduleRef.current?.closeQuickInfoPopup?.();
      if (target?.classList?.contains('sf-work-cells') || target?.classList?.contains('sf-all-day-cell') || parentElement?.classList?.contains('sf-work-cells')) {
        selectedTargetRef.current = target;
        setMenu(newMenuItems);
        setOpen(true);
      } else {
        const appt: HTMLElement = target?.closest?.('.sf-appointment') as HTMLElement | null;
        if (appt) {
          selectedTargetRef.current = appt;
          setMenu(editMenuItems);
          setOpen(true);
        }
      }
    }, [editMenuItems, newMenuItems]);
    const onContextMenuClose = useCallback(() => {
      setOpen(false);
    }, []);
    const onContextMenuSelect = useCallback((args: ContextMenuSelectEvent) => {
      const type: string = args?.item?.id;
      const scheduler: IScheduler = scheduleRef.current;
      const targetEl: HTMLElement = selectedTargetRef.current;
      if (!scheduler || !type) {
        return;
      }
      if (targetEl?.closest?.('.sf-appointment')) {
        selectedEventRef.current = scheduler.getEventDetails(targetEl);
      }
      switch (type) {
        case 'Today':
          {
            setSelectedDate(new Date());
            break;
          }
        case 'Add':
          {
            const selectedElements: HTMLElement[] = scheduler.getSelectedElements() as HTMLElement[];
            const isRightClickInSelectedCells: boolean = Array.isArray(selectedElements) ? selectedElements.some(cell => cell === targetEl) : false;
            const cellArg: HTMLElement | HTMLElement[] = isRightClickInSelectedCells ? selectedElements : targetEl;
            const activeCellDetails = scheduler.getCellDetails(cellArg);
            if (type === 'Add') {
              scheduler.openEditor(type, activeCellDetails);
            }
            break;
          }
        case 'Edit':
          {
            scheduler.openEditor(type, selectedEventRef.current);
            break;
          }
        case 'Delete':
          {
            scheduler.deleteEvent(selectedEventRef.current);
            break;
          }
        default:
          break;
      }
    }, []);
    return <>\r
        <div className="control-section">\r
          <div className="schedulerr-control" ref={setContainerRef}>\r
                <Scheduler ref={setSchedulerRef} height={'550px'} width={'100%'} selectedDate={selectedDate} eventSettings={eventSettings} onSelectedDateChange={onSelectedDateChange}>\r
                    <DayView />\r
                    <WeekView />\r
                    <MonthView />\r
                </Scheduler>\r
              <ContextMenu open={open} targetRef={targetRefObj} items={menu} onOpen={onContextMenuBeforeOpen} onClose={onContextMenuClose} onSelect={onContextMenuSelect} />\r
            </div>\r
        </div>\r
        </>;
  }
}`,...(je=(Re=oe.parameters)==null?void 0:Re.docs)==null?void 0:je.source}}};const gt=["ContextMenuSample"];export{oe as ContextMenuSample,gt as __namedExportsOrder,pt as default};
