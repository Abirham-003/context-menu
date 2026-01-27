import{j as a,r as Ke}from"./index-7s7xaQU8.js";import{s as _e}from"./dataSource-CrVxx1x3.js";import{j as fe,u as He,d as N,n as Xe,p as Ye,o as Se,q as Le,r as ke,A as ze,s as Te,t as Ue,S as $e,D as Fe,W as qe,M as Ge}from"./month-view-sSoG2l89.js";import{r as l}from"./index-CC6F48bw.js";import{D as Je}from"./day-B_GEs74h.js";import"./index-qiR4Kxfn.js";const Qe=a.jsx("path",{d:"M7 6V2H5V6H1V8H5V12H7V8H11V6H7ZM11 2H20C21.1046 2 22 2.89543 22 4V13.5858C22 14.1162 21.7893 14.6249 21.4142 15L15 21.4142C14.6249 21.7893 14.1162 22 13.5858 22H4C2.89543 22 2 21.1046 2 20V13H4V20H13V13H20V4H11V2Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),et=fe(Qe),tt=a.jsx("path",{d:"M12 2H20C21.1046 2 22 2.89543 22 4V13.5858C22 14.1162 21.7893 14.6249 21.4142 15L15 21.4142C14.6249 21.7893 14.1162 22 13.5858 22H4C2.89543 22 2 21.1046 2 20V13H4V20H13V13H20V4H12V2ZM5.99999 5.58579L3.49997 3.08578L2.08576 4.5L4.58578 7.00001L2.08577 9.50002L3.49998 10.9142L6 8.41422L8.5 10.9142L9.91421 9.5L7.41421 7L9.91419 4.50002L8.49998 3.08581L5.99999 5.58579Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),nt=fe(tt),st=a.jsx("path",{d:"M21.7035 4.74354L18.8751 1.91511C18.4862 1.5262 17.8498 1.5262 17.4609 1.91511L15.3395 4.03643L19.5822 8.27907L21.7035 6.15775C22.0924 5.76884 22.0924 5.13245 21.7035 4.74354ZM1.62012 22H5.86011L18.1702 9.68994L13.9302 5.44995L1.62012 17.76V22ZM5.03015 20H3.62012V18.59L13.9302 8.28002L15.3401 9.68994L5.03015 20Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),lt=fe(st),rt="M7.58582 18L13.5858 12L7.58582 6L9.00003 4.58578L16.4142 12L9.00003 19.4142L7.58582 18Z",ot="M12.4142 19L6.41424 13H21V11H6.41424L12.4142 5L11 3.58578L2.58582 12L11 20.4142L12.4142 19Z",de=()=>null,ct=$=>{const{item:O,itemClasses:P,isFocused:D,hasSubmenu:S,isDisabled:R,isSelected:j,isSeparator:h,onMouseEnter:H,onClick:C,getContent:B,focusedItemRef:K,attributes:T}=$,{ripple:W}=He(),{rippleMouseDown:X,Ripple:Y}=Ue(W),F=V=>{W&&!R&&!h&&X(V)};return a.jsxs("li",{ref:D?K:void 0,className:P,onMouseEnter:H,onMouseDown:F,onClick:C,tabIndex:-1,role:"menuitem","aria-disabled":h?void 0:R,"aria-haspopup":h?void 0:S,"aria-expanded":h?void 0:!!(S&&j),"aria-label":h?"separator":O.text||void 0,...T,children:[!h&&(O.url?a.jsx("a",{className:"sf-menu-url",href:O.url,onClick:V=>V.stopPropagation(),children:a.jsx("div",{className:"sf-anchor-wrap",children:B(O)})}):B(O)),S&&a.jsx("span",{className:"sf-submenu-icon",children:a.jsx(Te,{d:rt,"aria-label":"submenu-icon"})}),W&&!R&&!h&&a.jsx(Y,{})]})},it=l.forwardRef(($,O)=>{const{items:P=[],hoverDelay:D=0,onOpen:S,onClose:R,onSelect:j,open:h,offset:H,animation:C={duration:400,easing:"ease",effect:"FadeIn"},itemOnClick:B,closeOnScroll:K=!0,targetRef:T,className:W,children:X,itemTemplate:Y,...F}=$,V=l.useRef(null),v=l.useRef(null),[z,I]=l.useState(!1),[u,E]=l.useState({x:0,y:0}),[o,A]=l.useState([]),L=l.useRef(null),m=l.useRef(new Map),[d,y]=l.useState({focusedItems:null,hoveredItems:null}),q=l.useRef(null),me=l.useRef(h),{dir:_}=He(),Z=l.useRef([]),re=l.useCallback(e=>{var t;if(N.isIos&&he.current&&e.originalEvent){(t=e.originalEvent)==null||t.preventDefault();const n=e.originalEvent.changedTouches[0];E({x:n.clientX,y:n.clientY})}else e.preventDefault(),E({x:e.pageX,y:e.pageY});S==null||S(e.originalEvent?e.originalEvent:e),!(S&&h===!1)&&I(!0)},[S,h]),he=l.useRef(Xe(N.isIos&&T?T:{current:null},{tapHold:re})),Ve={items:Z.current,hoverDelay:D,animation:C,open:h,offset:H,itemOnClick:B,targetRef:T,closeOnScroll:K,itemTemplate:Y};l.useEffect(()=>(Ye("contextmenu"),()=>{var e,t,n;(e=m.current)==null||e.clear(),L.current&&(clearTimeout(L.current),L.current=null),(n=(t=he.current)==null?void 0:t.destroy)==null||n.call(t)}),[]);const pe=e=>{var t;z&&K&&!((t=V==null?void 0:V.current)!=null&&t.contains(e.target))&&G(e)};l.useEffect(()=>(K&&document.addEventListener("scroll",pe,!0),()=>{document.removeEventListener("scroll",pe,!0)}),[z,K,R,h]),l.useEffect(()=>{const e=T==null?void 0:T.current;return e&&e.addEventListener("contextmenu",re),()=>{e&&e.removeEventListener("contextmenu",re)}},[T,S]),l.useEffect(()=>{!h&&me.current===h||(me.current=h,h?(H&&H.left!==void 0&&H.top!==void 0&&E({x:H.left,y:H.top}),I(!0)):oe())},[h,H]),l.useEffect(()=>{var e;if(z){let t=u.x,n=u.y;const s=Se(v.current,document.documentElement,t,n);(s.includes("left")||s.includes("right"))&&(t=t-(((e=v==null?void 0:v.current)==null?void 0:e.offsetWidth)||0)),s.includes("bottom")&&(n=Le(v.current,null,{X:!1,Y:!0},{top:n,left:t}).top),(t!==u.x||n!==u.y)&&E({x:t,y:n}),te(v.current),document.addEventListener("mousedown",ce)}else document.removeEventListener("mousedown",ce);return()=>document.removeEventListener("mousedown",ce)},[z,u]),l.useEffect(()=>{q.current&&q.current.focus()},[d]),l.useEffect(()=>{const e=X?l.Children.toArray(X).filter(n=>l.isValidElement(n)&&n.type===de):null,t=e!=null&&e.length?Oe(e):P;Z.current=Ae(t)},[P,X]),l.useImperativeHandle(O,()=>({...Ve,element:V.current})),l.useEffect(()=>{var e,t,n,s,r;if(o.length>0){const i=o[o.length-1].parentIndex.join("-"),c=(e=m.current)==null?void 0:e.get(i);if(N.isDevice){te(c);return}const p=o[o.length-1];if(p.positionChanged){te(c);return}let g=p.position.x,b=p.position.y;const x=Se(c,document.documentElement,_==="rtl"?g-((c==null?void 0:c.offsetWidth)||0):g,b);(x.includes("left")||x.includes("right"))&&(g=ke(p.currentTarget,_==="rtl"?"right":"left","top").left,g=_==="rtl"?g:g-((c==null?void 0:c.offsetWidth)||0)),_==="rtl"&&!x.includes("right")&&!x.includes("left")&&(g=g-(((n=(t=m.current)==null?void 0:t.get(i))==null?void 0:n.offsetWidth)||0)),x.includes("bottom")&&(b=Le(c,null,{X:!1,Y:!0},{top:b,left:g}).top);const f=o.length>1?o[o.length-2].parentIndex.join("-"):"",k=((s=m.current)==null?void 0:s.size)===1?v.current:(r=m.current)==null?void 0:r.get(f);if(k&&!x.includes("right")){const w=k.offsetWidth-k.clientWidth;w>5&&(g+=_==="rtl"?-w:w)}p.position.x!==g||p.position.y!==b?A(w=>w.map((U,ue)=>{var ne;return ue===w.length-1?((ne=m.current)==null||ne.clear(),{...U,position:{x:g,y:b},positionChanged:!0}):U})):te(c)}},[o]);const oe=l.useCallback(()=>{var e;I(!1),A([]),(e=m==null?void 0:m.current)==null||e.clear(),y({focusedItems:null,hoveredItems:null})},[]),G=l.useCallback(e=>{R==null||R(e),!(R&&h===!0)&&oe()},[R,h,oe]),ce=e=>{var t;(t=V.current)!=null&&t.contains(e.target)||G(e)},ge=e=>{if(!l.isValidElement(e)||e.type!==de)return null;const{children:t,text:n,id:s,icon:r,url:i,separator:c,disabled:p,...g}=e.props,b={text:n,id:s,icon:r,url:i,separator:c,disabled:p};if(t){const x=typeof t=="function"?t:l.Children.toArray(t).filter(k=>l.isValidElement(k)&&k.type!==de);x.length>0&&(b.children=typeof x!="function"&&x.length===1?x[0]:x);const f=l.Children.toArray(t).map(ge).filter(Boolean);f.length>0&&(b.items=f)}return Object.keys(g).length>0&&(b.htmlAttributes=g),b},Oe=e=>{if(!e)return P;const t=l.Children.toArray(e).map(ge).filter(Boolean);return t.length>0?t:P},Ae=e=>{if(!N.isDevice)return e;const t=n=>n.map(s=>{var r,i;if(s.items&&s.items.length>0){const c=s.items.length>0&&((i=(r=s.items[0])==null?void 0:r.icon)==null?void 0:i.key)==="previous";let p=s.items;return c||(p=[{text:s.text,children:s.children,icon:Pe,separator:!1,items:[]},...s.items]),p=t(p),{...s,items:p}}return s});return t(e)},xe=(e,t)=>{var r;if(!t||!v.current)return;let n=u.x,s=u.y;if(!N.isDevice){const i=ke(t,_==="rtl"?"left":"right","top");s=i.top,n=i.left}A(i=>[...i.filter(c=>c.parentIndex.length<e.length).map(c=>({...c,isVisible:!1})),{parentIndex:e,position:{x:n,y:s},isVisible:!0,currentTarget:t,positionChanged:!1}]),(r=m.current)==null||r.clear()},ee=()=>{var e;o.length<1||(A(t=>{const n=t.filter((s,r)=>r!==t.length-1);return n.map((s,r)=>({...s,isVisible:r===n.length-1}))}),(e=m.current)==null||e.clear())},te=e=>{var n;if(!e)return;if(C==null||C.duration&&C.duration<=0||(C==null?void 0:C.effect)==="None"||e.style.visibility==="visible"){e.style.visibility="visible",(n=v.current)==null||n.focus();return}const t=ze({duration:C.duration,timingFunction:C.easing,name:C.effect,begin:s=>{s!=null&&s.element&&(s.element.style.visibility="visible",C.effect==="SlideDown"&&(s.element.style.maxHeight=s.element.offsetHeight+"px",s.element.style.overflow="hidden"))},end:s=>{var r;s!=null&&s.element&&(C.effect==="SlideDown"&&(s.element.style.maxHeight=""),(r=v.current)==null||r.focus())}});e&&t.animate(e)},Ie=()=>{var r,i;const e=d==null?void 0:d.focusedItems,t=e?J(e):[];if(t.length===0)return;let n=0;for(;n<t.length&&(t[n].separator||t[n].disabled);)n++;if(n>=t.length)return;y(c=>({focusedItems:[...e,n],hoveredItems:c==null?void 0:c.hoveredItems}));let s;if(o.length>0){const c=e==null?void 0:e.slice(0,-1);s=(r=m.current.get(c.join("-")))==null?void 0:r.children[e==null?void 0:e[e.length-1]]}else s=(i=v.current)==null?void 0:i.children[e==null?void 0:e[0]];ie(e,s)},ie=(e,t)=>{L.current&&clearTimeout(L.current),L.current=window.setTimeout(()=>{xe(e,t)},D)},Ne=e=>{const t=e.key;switch(t){case"Escape":e.preventDefault(),o.length>0?(ee(),d.focusedItems&&d.focusedItems.length>1&&y(n=>{var s;return{focusedItems:(s=n==null?void 0:n.focusedItems)==null?void 0:s.slice(0,-1),hoveredItems:n==null?void 0:n.hoveredItems}})):G(e.nativeEvent);break;case"Enter":case" ":{const n=o.length>0?J(o[o.length-1].parentIndex):Z.current,s=d.focusedItems&&d.focusedItems.length>0?n[d.focusedItems[d.focusedItems.length-1]]:void 0;if(!(s!=null&&s.items)||s.items.length===0){j==null||j({item:s,event:e}),G(e.nativeEvent);return}Ie(),e.preventDefault();break}case"ArrowUp":e.preventDefault(),Ee(-1);break;case"ArrowDown":e.preventDefault(),Ee(1);break;case"ArrowLeft":e.preventDefault(),d.focusedItems&&d.focusedItems.length>1&&y(n=>{var s;return{focusedItems:(s=n==null?void 0:n.focusedItems)==null?void 0:s.slice(0,-1),hoveredItems:n==null?void 0:n.hoveredItems}}),o.length>0&&ee();break;case"ArrowRight":e.preventDefault(),Ie();break;case"Home":e.preventDefault(),ae("first");break;case"End":e.preventDefault(),ae("last");break;default:t.length===1&&/[a-zA-Z0-9]/.test(t)&&(e.preventDefault(),ae("character",t.toLowerCase()));break}},ae=(e,t)=>{var g,b,x;const n=o.length>0?J(o[o.length-1].parentIndex):Z.current;if(!(n!=null&&n.length))return;const s=o.length>0?[...((g=o[o.length-1])==null?void 0:g.parentIndex)||[]]:[],r=((b=d==null?void 0:d.focusedItems)==null?void 0:b.length)===s.length+1?d.focusedItems[d.focusedItems.length-1]:-1,i=f=>f&&!f.separator&&!f.disabled,c=(f,k)=>f.text&&typeof f.text=="string"&&f.text.toLowerCase().startsWith(k);let p=-1;switch(e){case"first":p=n.findIndex(i);break;case"last":p=((x=n.map((f,k)=>({item:f,idx:k})).reverse().find(({item:f})=>i(f)))==null?void 0:x.idx)??-1;break;case"character":if(!t||typeof t!="string"||t.length!==1)return;{const f=Math.max(0,r+1),w=[...n.slice(f),...n.slice(0,f)].find(U=>i(U)&&c(U,t));w&&(p=n.indexOf(w))}break}p>=0&&(y==null||y(f=>({focusedItems:[...s,p],hoveredItems:(f==null?void 0:f.hoveredItems)||null})))},Ee=e=>{const t=o.length>0?J(o[o.length-1].parentIndex):Z.current;if(t.length===0)return;const n=o.length>0?[...o[o.length-1].parentIndex]:[],s=d.focusedItems&&d.focusedItems.length===n.length+1?d.focusedItems[d.focusedItems.length-1]:null;let r=s===null?e>0?0:t.length-1:(s+e+t.length)%t.length,i=0;for(;r<t.length&&(t[r].separator||t[r].disabled)&&i<t.length;)r=(r+e+t.length)%t.length,i++;i>=t.length||y(c=>({focusedItems:[...n,r],hoveredItems:c==null?void 0:c.hoveredItems}))},J=l.useCallback(e=>e.reduce((t,n)=>{var s;return((s=t[n])==null?void 0:s.items)||[]},Z.current),[]),Pe=l.useMemo(()=>a.jsx(Te,{d:ot,"aria-label":"Previous"},"previous"),[]),Be=e=>Y?e.children||Y(e):a.jsxs(a.Fragment,{children:[e.icon&&a.jsx("span",{className:["sf-menu-icon sf-icon sf-icon-size",typeof e.icon=="string"?e.icon:""].filter(Boolean).join(" "),children:typeof e.icon!="string"&&e.icon}),e.children||e.text]}),Ce=(e,t)=>e.map((n,s)=>{var Me,ve,ye;const r=[...t,s],i=n.items?n.items.length>0:!1,c=n.disabled===!0,p=N.isDevice&&((Me=n.icon)==null?void 0:Me.key)==="previous",{className:g,...b}=n.htmlAttributes||{},x=r.join("-")===((ve=d.focusedItems)==null?void 0:ve.join("-")),f=r.join("-")===((ye=d.hoveredItems)==null?void 0:ye.join("-")),k=!n.icon&&e.find((M,se)=>se!==s&&M.icon)!==void 0,w=o.some(M=>t.length===0?M.parentIndex[0]===s:t.length===M.parentIndex.length-1&&M.parentIndex.slice(0,-1).join("-")===t.join("-")&&M.parentIndex[M.parentIndex.length-1]===s),U=["sf-menu-item sf-align-center sf-ellipsis",n.separator&&"sf-separator",c&&"sf-disabled",p&&"sf-menu-header",(x||f)&&"sf-focused",w&&i&&"sf-has-submenu",k&&"sf-blank-icon",g].filter(Boolean).join(" "),ue=M=>{var se,De;if(y(Q=>({focusedItems:Q==null?void 0:Q.focusedItems,hoveredItems:r})),!i){o.length===r.length?ee():o.length>r.length&&(A(o.slice(0,r.length-1)),(se=m==null?void 0:m.current)==null||se.clear());return}if(!N.isDevice&&i&&!B&&!c){if(o&&o.find(Q=>Q.parentIndex.join("-")===r.join("-")))return;(De=m==null?void 0:m.current)==null||De.clear(),ie(r,M.currentTarget)}},ne=M=>{M.preventDefault(),!c&&(p?ee():i?N.isDevice?xe(r,M.currentTarget):B&&ie(r,M.currentTarget):(j==null||j({item:n,event:M}),G(M.nativeEvent)))};return a.jsx(ct,{item:n,itemClasses:U,isFocused:x,hasSubmenu:i,isDisabled:c,isSelected:w,isSeparator:!!n.separator,onMouseEnter:ue,onClick:ne,getContent:Be,focusedItemRef:q,attributes:b},r.join("-"))}),We=()=>o.map(({parentIndex:e,position:t,isVisible:n})=>{const s=J(e),r=e.join("-");return a.jsx("ul",{ref:i=>{i&&m.current&&m.current.set(r,i)},className:"sf-menu-parent",style:{left:t.x,top:t.y,display:N.isDevice&&!n?"none":"block",visibility:"hidden"},tabIndex:0,role:"menu",children:Ce(s,e)},`submenu-${r}`)}),Ze=l.useMemo(()=>["sf-contextmenu","sf-control",_==="rtl"?"sf-rtl":"",W].filter(Boolean).join(" "),[_]),be=typeof document<"u"?document.body:null;return be?a.jsx(a.Fragment,{children:z&&Ke.createPortal(a.jsxs("div",{ref:V,className:Ze,onKeyDown:Ne,...F,children:[a.jsx("ul",{className:"sf-menu-parent",style:{top:u.y,left:u.x,display:N.isDevice&&o.length>0?"none":"block",visibility:"hidden"},role:"menu",tabIndex:0,ref:v,children:Z.current&&Z.current.length>0&&Ce(Z.current,[])}),We()]}),be)}):null}),pt={title:"Scheduler/ContextMenu",parameters:{docs:{description:{component:"Meta configuration for the Storybook stories"}}}},le={parameters:{controls:{disable:!0}},render:()=>{const $=l.useCallback(I=>{T(I.value)},[]),O=l.useMemo(()=>[{text:"New Event",id:"Add",icon:a.jsx(et,{})},{text:"Today",id:"Today",icon:a.jsx(Je,{})}],[]),P=l.useMemo(()=>[{text:"Edit Event",id:"Edit",icon:a.jsx(lt,{})},{text:"Delete Event",id:"Delete",icon:a.jsx(nt,{})}],[]),D=l.useRef(null),[S,R]=l.useState(null);let j;const[h,H]=l.useState(!1),[C,B]=l.useState(O),[K,T]=l.useState(new Date(2021,0,10)),W=l.useRef(null),X=l.useCallback(I=>{D.current=I},[]),Y=l.useCallback(I=>{R(I)},[]),F=l.useMemo(()=>({current:S}),[S]),V=l.useCallback(I=>{var A,L,m,d;const u=(I==null?void 0:I.target)??null,E=(u==null?void 0:u.parentElement)??null;let o=!1;if((A=u==null?void 0:u.classList)!=null&&A.contains("sf-work-cells")||(L=u==null?void 0:u.classList)!=null&&L.contains("sf-all-day-cell")||(m=E==null?void 0:E.classList)!=null&&m.contains("sf-work-cells"))W.current=u,B(O),o=!0;else{const y=(d=u==null?void 0:u.closest)==null?void 0:d.call(u,".sf-appointment");y&&(W.current=y,B(P),o=!0)}o&&H(!0)},[P,O]),v=l.useCallback(()=>{H(!1)},[]),z=l.useCallback(I=>{var o,A;const u=(o=I==null?void 0:I.item)==null?void 0:o.id,E=W.current;if(!(!D.current||!u))switch((A=E==null?void 0:E.closest)!=null&&A.call(E,".sf-appointment")&&(j=D.current.getEventDetails(E)),u){case"Today":{T(new Date);break}case"Add":{const L=D.current.getSelectedElements(),d=(Array.isArray(L)?L.some(q=>q===E):!1)?L:E,y=D.current.getCellDetails(d);u==="Add"&&D.current.openEditor(u,y);break}case"Edit":{D.current.openEditor(u,j);break}case"Delete":{D.current.deleteEvent(j);break}}},[]);return a.jsx(a.Fragment,{children:a.jsx("div",{className:"control-section",children:a.jsxs("div",{className:"schedulerr-control",ref:Y,children:[a.jsxs($e,{ref:X,height:"550px",width:"100%",selectedDate:K,eventSettings:{dataSource:_e},onSelectedDateChange:$,children:[a.jsx(Fe,{}),a.jsx(qe,{}),a.jsx(Ge,{})]}),a.jsx(it,{open:h,targetRef:F,items:C,onOpen:V,onClose:v,onSelect:z})]})})})}};var we,Re,je;le.parameters={...le.parameters,docs:{...(we=le.parameters)==null?void 0:we.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
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
    const [targetEl, setTargetEl] = useState<HTMLElement | null>(null);
    let selectedEvent: EventModel;
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
      let menuOpen = false;
      if (target?.classList?.contains('sf-work-cells') || target?.classList?.contains('sf-all-day-cell') || parentElement?.classList?.contains('sf-work-cells')) {
        selectedTargetRef.current = target;
        setMenu(newMenuItems);
        menuOpen = true;
      } else {
        const appt: HTMLElement = target?.closest?.('.sf-appointment') as HTMLElement | null;
        if (appt) {
          selectedTargetRef.current = appt;
          setMenu(editMenuItems);
          menuOpen = true;
        }
      }
      if (menuOpen) {
        setOpen(true);
      }
    }, [editMenuItems, newMenuItems]);
    const onContextMenuClose = useCallback(() => {
      setOpen(false);
    }, []);
    const onContextMenuSelect = useCallback((args: ContextMenuSelectEvent) => {
      const type: string = args?.item?.id;
      const targetEl: HTMLElement = selectedTargetRef.current;
      if (!scheduleRef.current || !type) {
        return;
      }
      if (targetEl?.closest?.('.sf-appointment')) {
        selectedEvent = scheduleRef.current.getEventDetails(targetEl);
      }
      switch (type) {
        case 'Today':
          {
            setSelectedDate(new Date());
            break;
          }
        case 'Add':
          {
            const selectedElements: HTMLElement[] = scheduleRef.current.getSelectedElements() as HTMLElement[];
            const isRightClickInSelectedCells: boolean = Array.isArray(selectedElements) ? selectedElements.some(cell => cell === targetEl) : false;
            const cellArg: HTMLElement | HTMLElement[] = isRightClickInSelectedCells ? selectedElements : targetEl;
            const activeCellDetails = scheduleRef.current.getCellDetails(cellArg);
            if (type === 'Add') {
              scheduleRef.current.openEditor(type, activeCellDetails);
            }
            break;
          }
        case 'Edit':
          {
            scheduleRef.current.openEditor(type, selectedEvent);
            break;
          }
        case 'Delete':
          {
            scheduleRef.current.deleteEvent(selectedEvent);
            break;
          }
        default:
          break;
      }
    }, []);
    return <>\r
        <div className="control-section">\r
          <div className="schedulerr-control" ref={setContainerRef}>\r
                <Scheduler ref={setSchedulerRef} height={'550px'} width={'100%'} selectedDate={selectedDate} eventSettings={{
            dataSource: scheduleData
          }} onSelectedDateChange={onSelectedDateChange}>\r
                    <DayView />\r
                    <WeekView />\r
                    <MonthView />\r
                </Scheduler>\r
              <ContextMenu open={open} targetRef={targetRefObj} items={menu} onOpen={onContextMenuBeforeOpen} onClose={onContextMenuClose} onSelect={onContextMenuSelect} />\r
            </div>\r
        </div>\r
        </>;
  }
}`,...(je=(Re=le.parameters)==null?void 0:Re.docs)==null?void 0:je.source}}};const gt=["ContextMenuSample"];export{le as ContextMenuSample,gt as __namedExportsOrder,pt as default};
