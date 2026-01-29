import{j as a,r as ze}from"./index-7s7xaQU8.js";import{s as Ke}from"./dataSource-CrVxx1x3.js";import{j as fe,u as He,d as O,n as _e,p as Xe,o as De,q as Le,r as Re,A as Ye,s as Te,t as Ue,S as $e,D as Fe,W as qe,M as Ge}from"./month-view-CAqwfdjM.js";import{r as o}from"./index-CC6F48bw.js";import{D as Je}from"./day-DVOUh7iL.js";import"./index-qiR4Kxfn.js";const Qe=a.jsx("path",{d:"M7 6V2H5V6H1V8H5V12H7V8H11V6H7ZM11 2H20C21.1046 2 22 2.89543 22 4V13.5858C22 14.1162 21.7893 14.6249 21.4142 15L15 21.4142C14.6249 21.7893 14.1162 22 13.5858 22H4C2.89543 22 2 21.1046 2 20V13H4V20H13V13H20V4H11V2Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),et=fe(Qe),tt=a.jsx("path",{d:"M12 2H20C21.1046 2 22 2.89543 22 4V13.5858C22 14.1162 21.7893 14.6249 21.4142 15L15 21.4142C14.6249 21.7893 14.1162 22 13.5858 22H4C2.89543 22 2 21.1046 2 20V13H4V20H13V13H20V4H12V2ZM5.99999 5.58579L3.49997 3.08578L2.08576 4.5L4.58578 7.00001L2.08577 9.50002L3.49998 10.9142L6 8.41422L8.5 10.9142L9.91421 9.5L7.41421 7L9.91419 4.50002L8.49998 3.08581L5.99999 5.58579Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),nt=fe(tt),st=a.jsx("path",{d:"M21.7035 4.74354L18.8751 1.91511C18.4862 1.5262 17.8498 1.5262 17.4609 1.91511L15.3395 4.03643L19.5822 8.27907L21.7035 6.15775C22.0924 5.76884 22.0924 5.13245 21.7035 4.74354ZM1.62012 22H5.86011L18.1702 9.68994L13.9302 5.44995L1.62012 17.76V22ZM5.03015 20H3.62012V18.59L13.9302 8.28002L15.3401 9.68994L5.03015 20Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),lt=fe(st),rt="M7.58582 18L13.5858 12L7.58582 6L9.00003 4.58578L16.4142 12L9.00003 19.4142L7.58582 18Z",ot="M12.4142 19L6.41424 13H21V11H6.41424L12.4142 5L11 3.58578L2.58582 12L11 20.4142L12.4142 19Z",de=()=>null,ct=F=>{const{item:V,itemClasses:z,isFocused:M,hasSubmenu:L,isDisabled:b,isSelected:N,isSeparator:f,onMouseEnter:T,onClick:v,getContent:K,focusedItemRef:P,attributes:R}=F,{ripple:B}=He(),{rippleMouseDown:W,Ripple:Y}=Ue(B),q=H=>{B&&!b&&!f&&W(H)};return a.jsxs("li",{ref:M?P:void 0,className:z,onMouseEnter:T,onMouseDown:q,onClick:v,tabIndex:-1,role:"menuitem","aria-disabled":f?void 0:b,"aria-haspopup":f?void 0:L,"aria-expanded":f?void 0:!!(L&&N),"aria-label":f?"separator":V.text||void 0,...R,children:[!f&&(V.url?a.jsx("a",{className:"sf-menu-url",href:V.url,onClick:H=>H.stopPropagation(),children:a.jsx("div",{className:"sf-anchor-wrap",children:K(V)})}):K(V)),L&&a.jsx("span",{className:"sf-submenu-icon",children:a.jsx(Te,{d:rt,"aria-label":"submenu-icon"})}),B&&!b&&!f&&a.jsx(Y,{})]})},it=o.forwardRef((F,V)=>{const{items:z=[],hoverDelay:M=0,onOpen:L,onClose:b,onSelect:N,open:f,offset:T,animation:v={duration:400,easing:"ease",effect:"FadeIn"},itemOnClick:K,closeOnScroll:P=!0,targetRef:R,className:B,children:W,itemTemplate:Y,...q}=F,H=o.useRef(null),S=o.useRef(null),[U,E]=o.useState(!1),[h,I]=o.useState({x:0,y:0}),[r,A]=o.useState([]),w=o.useRef(null),m=o.useRef(new Map),[u,D]=o.useState({focusedItems:null,hoveredItems:null}),_=o.useRef(null),me=o.useRef(f),{dir:X}=He(),Z=o.useRef([]),re=o.useCallback(e=>{var t;if(O.isIos&&he.current&&e.originalEvent){(t=e.originalEvent)==null||t.preventDefault();const n=e.originalEvent.changedTouches[0];I({x:n.clientX,y:n.clientY})}else e.preventDefault(),I({x:e.pageX,y:e.pageY});L==null||L(e.originalEvent?e.originalEvent:e),!(L&&f===!1)&&E(!0)},[L,f]),he=o.useRef(_e(O.isIos&&R?R:{current:null},{tapHold:re})),Ae={items:Z.current,hoverDelay:M,animation:v,open:f,offset:T,itemOnClick:K,targetRef:R,closeOnScroll:P,itemTemplate:Y};o.useEffect(()=>(Xe("contextmenu"),()=>{var e,t,n;(e=m.current)==null||e.clear(),w.current&&(clearTimeout(w.current),w.current=null),(n=(t=he.current)==null?void 0:t.destroy)==null||n.call(t)}),[]);const pe=e=>{var t;U&&P&&!((t=H==null?void 0:H.current)!=null&&t.contains(e.target))&&G(e)};o.useEffect(()=>(P&&document.addEventListener("scroll",pe,!0),()=>{document.removeEventListener("scroll",pe,!0)}),[U,P,b,f]),o.useEffect(()=>{const e=R==null?void 0:R.current;return e&&e.addEventListener("contextmenu",re),()=>{e&&e.removeEventListener("contextmenu",re)}},[R,L]),o.useEffect(()=>{!f&&me.current===f||(me.current=f,f?(T&&T.left!==void 0&&T.top!==void 0&&I({x:T.left,y:T.top}),E(!0)):oe())},[f,T]),o.useEffect(()=>{var e;if(U){let t=h.x,n=h.y;const s=De(S.current,document.documentElement,t,n);(s.includes("left")||s.includes("right"))&&(t=t-(((e=S==null?void 0:S.current)==null?void 0:e.offsetWidth)||0)),s.includes("bottom")&&(n=Le(S.current,null,{X:!1,Y:!0},{top:n,left:t}).top),(t!==h.x||n!==h.y)&&I({x:t,y:n}),te(S.current),document.addEventListener("mousedown",ce)}else document.removeEventListener("mousedown",ce);return()=>document.removeEventListener("mousedown",ce)},[U,h]),o.useEffect(()=>{_.current&&_.current.focus()},[u]),o.useEffect(()=>{const e=W?o.Children.toArray(W).filter(n=>o.isValidElement(n)&&n.type===de):null,t=e!=null&&e.length?Ve(e):z;Z.current=Ne(t)},[z,W]),o.useImperativeHandle(V,()=>({...Ae,element:H.current})),o.useEffect(()=>{var e,t,n,s,l;if(r.length>0){const i=r[r.length-1].parentIndex.join("-"),c=(e=m.current)==null?void 0:e.get(i);if(O.isDevice){te(c);return}const p=r[r.length-1];if(p.positionChanged){te(c);return}let g=p.position.x,C=p.position.y;const x=De(c,document.documentElement,X==="rtl"?g-((c==null?void 0:c.offsetWidth)||0):g,C);(x.includes("left")||x.includes("right"))&&(g=Re(p.currentTarget,X==="rtl"?"right":"left","top").left,g=X==="rtl"?g:g-((c==null?void 0:c.offsetWidth)||0)),X==="rtl"&&!x.includes("right")&&!x.includes("left")&&(g=g-(((n=(t=m.current)==null?void 0:t.get(i))==null?void 0:n.offsetWidth)||0)),x.includes("bottom")&&(C=Le(c,null,{X:!1,Y:!0},{top:C,left:g}).top);const d=r.length>1?r[r.length-2].parentIndex.join("-"):"",k=((s=m.current)==null?void 0:s.size)===1?S.current:(l=m.current)==null?void 0:l.get(d);if(k&&!x.includes("right")){const j=k.offsetWidth-k.clientWidth;j>5&&(g+=X==="rtl"?-j:j)}p.position.x!==g||p.position.y!==C?A(j=>j.map(($,ue)=>{var ne;return ue===j.length-1?((ne=m.current)==null||ne.clear(),{...$,position:{x:g,y:C},positionChanged:!0}):$})):te(c)}},[r]);const oe=o.useCallback(()=>{var e;E(!1),A([]),(e=m==null?void 0:m.current)==null||e.clear(),D({focusedItems:null,hoveredItems:null})},[]),G=o.useCallback(e=>{b==null||b(e),!(b&&f===!0)&&oe()},[b,f,oe]),ce=e=>{var t;(t=H.current)!=null&&t.contains(e.target)||G(e)},ge=e=>{if(!o.isValidElement(e)||e.type!==de)return null;const{children:t,text:n,id:s,icon:l,url:i,separator:c,disabled:p,...g}=e.props,C={text:n,id:s,icon:l,url:i,separator:c,disabled:p};if(t){const x=typeof t=="function"?t:o.Children.toArray(t).filter(k=>o.isValidElement(k)&&k.type!==de);x.length>0&&(C.children=typeof x!="function"&&x.length===1?x[0]:x);const d=o.Children.toArray(t).map(ge).filter(Boolean);d.length>0&&(C.items=d)}return Object.keys(g).length>0&&(C.htmlAttributes=g),C},Ve=e=>{if(!e)return z;const t=o.Children.toArray(e).map(ge).filter(Boolean);return t.length>0?t:z},Ne=e=>{if(!O.isDevice)return e;const t=n=>n.map(s=>{var l,i;if(s.items&&s.items.length>0){const c=s.items.length>0&&((i=(l=s.items[0])==null?void 0:l.icon)==null?void 0:i.key)==="previous";let p=s.items;return c||(p=[{text:s.text,children:s.children,icon:Pe,separator:!1,items:[]},...s.items]),p=t(p),{...s,items:p}}return s});return t(e)},xe=(e,t)=>{var l;if(!t||!S.current)return;let n=h.x,s=h.y;if(!O.isDevice){const i=Re(t,X==="rtl"?"left":"right","top");s=i.top,n=i.left}A(i=>[...i.filter(c=>c.parentIndex.length<e.length).map(c=>({...c,isVisible:!1})),{parentIndex:e,position:{x:n,y:s},isVisible:!0,currentTarget:t,positionChanged:!1}]),(l=m.current)==null||l.clear()},ee=()=>{var e;r.length<1||(A(t=>{const n=t.filter((s,l)=>l!==t.length-1);return n.map((s,l)=>({...s,isVisible:l===n.length-1}))}),(e=m.current)==null||e.clear())},te=e=>{var n;if(!e)return;if(v==null||v.duration&&v.duration<=0||(v==null?void 0:v.effect)==="None"||e.style.visibility==="visible"){e.style.visibility="visible",(n=S.current)==null||n.focus();return}const t=Ye({duration:v.duration,timingFunction:v.easing,name:v.effect,begin:s=>{s!=null&&s.element&&(s.element.style.visibility="visible",v.effect==="SlideDown"&&(s.element.style.maxHeight=s.element.offsetHeight+"px",s.element.style.overflow="hidden"))},end:s=>{var l;s!=null&&s.element&&(v.effect==="SlideDown"&&(s.element.style.maxHeight=""),(l=S.current)==null||l.focus())}});e&&t.animate(e)},Ie=()=>{var l,i;const e=u==null?void 0:u.focusedItems,t=e?J(e):[];if(t.length===0)return;let n=0;for(;n<t.length&&(t[n].separator||t[n].disabled);)n++;if(n>=t.length)return;D(c=>({focusedItems:[...e,n],hoveredItems:c==null?void 0:c.hoveredItems}));let s;if(r.length>0){const c=e==null?void 0:e.slice(0,-1);s=(l=m.current.get(c.join("-")))==null?void 0:l.children[e==null?void 0:e[e.length-1]]}else s=(i=S.current)==null?void 0:i.children[e==null?void 0:e[0]];ie(e,s)},ie=(e,t)=>{w.current&&clearTimeout(w.current),w.current=window.setTimeout(()=>{xe(e,t)},M)},Oe=e=>{const t=e.key;switch(t){case"Escape":e.preventDefault(),r.length>0?(ee(),u.focusedItems&&u.focusedItems.length>1&&D(n=>{var s;return{focusedItems:(s=n==null?void 0:n.focusedItems)==null?void 0:s.slice(0,-1),hoveredItems:n==null?void 0:n.hoveredItems}})):G(e.nativeEvent);break;case"Enter":case" ":{const n=r.length>0?J(r[r.length-1].parentIndex):Z.current,s=u.focusedItems&&u.focusedItems.length>0?n[u.focusedItems[u.focusedItems.length-1]]:void 0;if(!(s!=null&&s.items)||s.items.length===0){N==null||N({item:s,event:e}),G(e.nativeEvent);return}Ie(),e.preventDefault();break}case"ArrowUp":e.preventDefault(),ve(-1);break;case"ArrowDown":e.preventDefault(),ve(1);break;case"ArrowLeft":e.preventDefault(),u.focusedItems&&u.focusedItems.length>1&&D(n=>{var s;return{focusedItems:(s=n==null?void 0:n.focusedItems)==null?void 0:s.slice(0,-1),hoveredItems:n==null?void 0:n.hoveredItems}}),r.length>0&&ee();break;case"ArrowRight":e.preventDefault(),Ie();break;case"Home":e.preventDefault(),ae("first");break;case"End":e.preventDefault(),ae("last");break;default:t.length===1&&/[a-zA-Z0-9]/.test(t)&&(e.preventDefault(),ae("character",t.toLowerCase()));break}},ae=(e,t)=>{var g,C,x;const n=r.length>0?J(r[r.length-1].parentIndex):Z.current;if(!(n!=null&&n.length))return;const s=r.length>0?[...((g=r[r.length-1])==null?void 0:g.parentIndex)||[]]:[],l=((C=u==null?void 0:u.focusedItems)==null?void 0:C.length)===s.length+1?u.focusedItems[u.focusedItems.length-1]:-1,i=d=>d&&!d.separator&&!d.disabled,c=(d,k)=>d.text&&typeof d.text=="string"&&d.text.toLowerCase().startsWith(k);let p=-1;switch(e){case"first":p=n.findIndex(i);break;case"last":p=((x=n.map((d,k)=>({item:d,idx:k})).reverse().find(({item:d})=>i(d)))==null?void 0:x.idx)??-1;break;case"character":if(!t||typeof t!="string"||t.length!==1)return;{const d=Math.max(0,l+1),j=[...n.slice(d),...n.slice(0,d)].find($=>i($)&&c($,t));j&&(p=n.indexOf(j))}break}p>=0&&(D==null||D(d=>({focusedItems:[...s,p],hoveredItems:(d==null?void 0:d.hoveredItems)||null})))},ve=e=>{const t=r.length>0?J(r[r.length-1].parentIndex):Z.current;if(t.length===0)return;const n=r.length>0?[...r[r.length-1].parentIndex]:[],s=u.focusedItems&&u.focusedItems.length===n.length+1?u.focusedItems[u.focusedItems.length-1]:null;let l=s===null?e>0?0:t.length-1:(s+e+t.length)%t.length,i=0;for(;l<t.length&&(t[l].separator||t[l].disabled)&&i<t.length;)l=(l+e+t.length)%t.length,i++;i>=t.length||D(c=>({focusedItems:[...n,l],hoveredItems:c==null?void 0:c.hoveredItems}))},J=o.useCallback(e=>e.reduce((t,n)=>{var s;return((s=t[n])==null?void 0:s.items)||[]},Z.current),[]),Pe=o.useMemo(()=>a.jsx(Te,{d:ot,"aria-label":"Previous"},"previous"),[]),Be=e=>Y?e.children||Y(e):a.jsxs(a.Fragment,{children:[e.icon&&a.jsx("span",{className:["sf-menu-icon sf-icon sf-icon-size",typeof e.icon=="string"?e.icon:""].filter(Boolean).join(" "),children:typeof e.icon!="string"&&e.icon}),e.children||e.text]}),Ee=(e,t)=>e.map((n,s)=>{var ye,Me,be;const l=[...t,s],i=n.items?n.items.length>0:!1,c=n.disabled===!0,p=O.isDevice&&((ye=n.icon)==null?void 0:ye.key)==="previous",{className:g,...C}=n.htmlAttributes||{},x=l.join("-")===((Me=u.focusedItems)==null?void 0:Me.join("-")),d=l.join("-")===((be=u.hoveredItems)==null?void 0:be.join("-")),k=!n.icon&&e.find((y,se)=>se!==s&&y.icon)!==void 0,j=r.some(y=>t.length===0?y.parentIndex[0]===s:t.length===y.parentIndex.length-1&&y.parentIndex.slice(0,-1).join("-")===t.join("-")&&y.parentIndex[y.parentIndex.length-1]===s),$=["sf-menu-item sf-align-center sf-ellipsis",n.separator&&"sf-separator",c&&"sf-disabled",p&&"sf-menu-header",(x||d)&&"sf-focused",j&&i&&"sf-has-submenu",k&&"sf-blank-icon",g].filter(Boolean).join(" "),ue=y=>{var se,Se;if(D(Q=>({focusedItems:Q==null?void 0:Q.focusedItems,hoveredItems:l})),!i){r.length===l.length?ee():r.length>l.length&&(A(r.slice(0,l.length-1)),(se=m==null?void 0:m.current)==null||se.clear());return}if(!O.isDevice&&i&&!K&&!c){if(r&&r.find(Q=>Q.parentIndex.join("-")===l.join("-")))return;(Se=m==null?void 0:m.current)==null||Se.clear(),ie(l,y.currentTarget)}},ne=y=>{y.preventDefault(),!c&&(p?ee():i?O.isDevice?xe(l,y.currentTarget):K&&ie(l,y.currentTarget):(N==null||N({item:n,event:y}),G(y.nativeEvent)))};return a.jsx(ct,{item:n,itemClasses:$,isFocused:x,hasSubmenu:i,isDisabled:c,isSelected:j,isSeparator:!!n.separator,onMouseEnter:ue,onClick:ne,getContent:Be,focusedItemRef:_,attributes:C},l.join("-"))}),We=()=>r.map(({parentIndex:e,position:t,isVisible:n})=>{const s=J(e),l=e.join("-");return a.jsx("ul",{ref:i=>{i&&m.current&&m.current.set(l,i)},className:"sf-menu-parent",style:{left:t.x,top:t.y,display:O.isDevice&&!n?"none":"block",visibility:"hidden"},tabIndex:0,role:"menu",children:Ee(s,e)},`submenu-${l}`)}),Ze=o.useMemo(()=>["sf-contextmenu","sf-control",X==="rtl"?"sf-rtl":"",B].filter(Boolean).join(" "),[X]),Ce=typeof document<"u"?document.body:null;return Ce?a.jsx(a.Fragment,{children:U&&ze.createPortal(a.jsxs("div",{ref:H,className:Ze,onKeyDown:Oe,...q,children:[a.jsx("ul",{className:"sf-menu-parent",style:{top:h.y,left:h.x,display:O.isDevice&&r.length>0?"none":"block",visibility:"hidden"},role:"menu",tabIndex:0,ref:S,children:Z.current&&Z.current.length>0&&Ee(Z.current,[])}),We()]}),Ce)}):null}),pt={title:"Scheduler/ContextMenu",parameters:{docs:{description:{component:"Meta configuration for the Storybook stories"}}}},le={parameters:{controls:{disable:!0}},render:()=>{const F=E=>{P(E.value)},V=[{text:"New Event",id:"Add",icon:a.jsx(et,{})},{text:"Today",id:"Today",icon:a.jsx(Je,{})}],z=[{text:"Edit Event",id:"Edit",icon:a.jsx(lt,{})},{text:"Delete Event",id:"Delete",icon:a.jsx(nt,{})}],M=o.useRef(null),L=o.useRef(null);let b;const[N,f]=o.useState(!1),[T,v]=o.useState(V),[K,P]=o.useState(new Date(2021,0,10)),R=o.useRef(null),B=o.useRef(null),W=o.useRef(null),Y=E=>{M.current=E},q=E=>{L.current=E},H=E=>{var A,w,m,u,D,_;const h=(E==null?void 0:E.target)??null;if(!M.current||!h)return;const I=((A=h.closest)==null?void 0:A.call(h,".sf-appointment"))??null;if(I){(w=B.current)==null||w.classList.remove("sf-selected-cell"),(m=W.current)==null||m.classList.remove("sf-appointment-active"),I.classList.add("sf-appointment-active"),W.current=I,R.current=I,v(z),f(!0);return}const r=((u=h.closest)==null?void 0:u.call(h,".sf-work-cells, .sf-all-day-cell"))??null;r&&((D=B.current)==null||D.classList.remove("sf-selected-cell"),r.classList.add("sf-selected-cell"),B.current=r,(_=W.current)==null||_.classList.remove("sf-appointment-active"),R.current=r,v(V),f(!0))},S=()=>{f(!1)},U=E=>{var r,A;const h=(r=E==null?void 0:E.item)==null?void 0:r.id,I=R.current;if(!(!M.current||!h))switch((A=I==null?void 0:I.closest)!=null&&A.call(I,".sf-appointment")&&(b=M.current.getEventDetails(I)),h){case"Today":{P(new Date);break}case"Add":{const w=M.current.getSelectedElements(),u=(Array.isArray(w)?w.some(_=>_===I):!1)?w:I,D=M.current.getCellDetails(u);h==="Add"&&M.current.openEditor(h,D);break}case"Edit":{M.current.openEditor(h,b);break}case"Delete":{M.current.deleteEvent(b);break}}};return a.jsx(a.Fragment,{children:a.jsx("div",{className:"control-section",children:a.jsxs("div",{className:"schedulerr-control",ref:q,children:[a.jsxs($e,{ref:Y,height:"550px",width:"100%",selectedDate:K,eventSettings:{dataSource:Ke},onSelectedDateChange:F,children:[a.jsx(Fe,{}),a.jsx(qe,{}),a.jsx(Ge,{})]}),a.jsx(it,{open:N,targetRef:L,items:T,onOpen:H,onClose:S,onSelect:U,"z-index":1e3})]})})})}};var we,ke,je;le.parameters={...le.parameters,docs:{...(we=le.parameters)==null?void 0:we.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const onSelectedDateChange = (event: SchedulerDateChangeEvent) => {
      setSelectedDate(event.value);
    };
    const newMenuItems: MenuItemProps[] = [{
      text: 'New Event',
      id: 'Add',
      icon: <AddNotesIcon />
    }, {
      text: 'Today',
      id: 'Today',
      icon: <DayIcon />
    }];
    const editMenuItems: MenuItemProps[] = [{
      text: 'Edit Event',
      id: 'Edit',
      icon: <EditIcon />
    }, {
      text: 'Delete Event',
      id: 'Delete',
      icon: <DeleteNotesIcon />
    }];
    const scheduleRef = useRef<IScheduler | null>(null);
    const targetRef = useRef<HTMLElement | null>(null);
    let selectedEvent: EventModel;
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState<MenuItemProps[]>(newMenuItems);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date(2021, 0, 10));
    const selectedTargetRef = useRef<HTMLElement | null>(null);
    const lastSelectedCellRef = useRef<HTMLElement | null>(null);
    const lastActiveApptRef = useRef<HTMLElement | null>(null);
    const setSchedulerRef = (instance: IScheduler | null) => {
      scheduleRef.current = instance;
    };

    // Callback ref to capture the wrapper element as the target
    const setContainerRef = (el: HTMLDivElement | null) => {
      targetRef.current = el as unknown as HTMLElement | null;
    };
    const onContextMenuBeforeOpen = (args: Event) => {
      const target = args?.target as HTMLElement ?? null;
      if (!scheduleRef.current || !target) {
        return;
      }
      const appt = target.closest?.('.sf-appointment') as HTMLElement | null ?? null;
      if (appt) {
        lastSelectedCellRef.current?.classList.remove('sf-selected-cell');
        lastActiveApptRef.current?.classList.remove('sf-appointment-active');
        appt.classList.add('sf-appointment-active');
        lastActiveApptRef.current = appt;
        selectedTargetRef.current = appt;
        setMenu(editMenuItems);
        setOpen(true);
        return;
      }
      const cell = target.closest?.('.sf-work-cells, .sf-all-day-cell') as HTMLElement | null ?? null;
      if (cell) {
        lastSelectedCellRef.current?.classList.remove('sf-selected-cell');
        cell.classList.add('sf-selected-cell');
        lastSelectedCellRef.current = cell;
        lastActiveApptRef.current?.classList.remove('sf-appointment-active');
        selectedTargetRef.current = cell;
        setMenu(newMenuItems);
        setOpen(true);
      }
    };
    const onContextMenuClose = () => {
      setOpen(false);
    };
    const onContextMenuSelect = (args: ContextMenuSelectEvent) => {
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
      }
    };
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
              <ContextMenu open={open} targetRef={targetRef} items={menu} onOpen={onContextMenuBeforeOpen} onClose={onContextMenuClose} onSelect={onContextMenuSelect} z-index={1000} />\r
            </div>\r
        </div>\r
        </>;
  }
}`,...(je=(ke=le.parameters)==null?void 0:ke.docs)==null?void 0:je.source}}};const gt=["ContextMenuSample"];export{le as ContextMenuSample,gt as __namedExportsOrder,pt as default};
