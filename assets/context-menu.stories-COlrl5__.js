import{j as a,r as Ke}from"./index-7s7xaQU8.js";import{s as _e}from"./dataSource-CrVxx1x3.js";import{j as fe,u as He,d as P,n as Xe,p as Ye,o as Le,q as Se,r as Re,A as ze,s as Te,t as Ue,S as $e,D as Fe,W as qe,M as Ge}from"./month-view-BLhJHpCd.js";import{r}from"./index-CC6F48bw.js";import{D as Je}from"./day-C3GxVjnd.js";import"./index-qiR4Kxfn.js";const Qe=a.jsx("path",{d:"M7 6V2H5V6H1V8H5V12H7V8H11V6H7ZM11 2H20C21.1046 2 22 2.89543 22 4V13.5858C22 14.1162 21.7893 14.6249 21.4142 15L15 21.4142C14.6249 21.7893 14.1162 22 13.5858 22H4C2.89543 22 2 21.1046 2 20V13H4V20H13V13H20V4H11V2Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),et=fe(Qe),tt=a.jsx("path",{d:"M12 2H20C21.1046 2 22 2.89543 22 4V13.5858C22 14.1162 21.7893 14.6249 21.4142 15L15 21.4142C14.6249 21.7893 14.1162 22 13.5858 22H4C2.89543 22 2 21.1046 2 20V13H4V20H13V13H20V4H12V2ZM5.99999 5.58579L3.49997 3.08578L2.08576 4.5L4.58578 7.00001L2.08577 9.50002L3.49998 10.9142L6 8.41422L8.5 10.9142L9.91421 9.5L7.41421 7L9.91419 4.50002L8.49998 3.08581L5.99999 5.58579Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),nt=fe(tt),st=a.jsx("path",{d:"M21.7035 4.74354L18.8751 1.91511C18.4862 1.5262 17.8498 1.5262 17.4609 1.91511L15.3395 4.03643L19.5822 8.27907L21.7035 6.15775C22.0924 5.76884 22.0924 5.13245 21.7035 4.74354ZM1.62012 22H5.86011L18.1702 9.68994L13.9302 5.44995L1.62012 17.76V22ZM5.03015 20H3.62012V18.59L13.9302 8.28002L15.3401 9.68994L5.03015 20Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),lt=fe(st),rt="M7.58582 18L13.5858 12L7.58582 6L9.00003 4.58578L16.4142 12L9.00003 19.4142L7.58582 18Z",ot="M12.4142 19L6.41424 13H21V11H6.41424L12.4142 5L11 3.58578L2.58582 12L11 20.4142L12.4142 19Z",de=()=>null,ct=$=>{const{item:V,itemClasses:_,isFocused:M,hasSubmenu:S,isDisabled:b,isSelected:N,isSeparator:m,onMouseEnter:A,onClick:I,getContent:X,focusedItemRef:B,attributes:R}=$,{ripple:W}=He(),{rippleMouseDown:Z,Ripple:z}=Ue(W),F=j=>{W&&!b&&!m&&Z(j)};return a.jsxs("li",{ref:M?B:void 0,className:_,onMouseEnter:A,onMouseDown:F,onClick:I,tabIndex:-1,role:"menuitem","aria-disabled":m?void 0:b,"aria-haspopup":m?void 0:S,"aria-expanded":m?void 0:!!(S&&N),"aria-label":m?"separator":V.text||void 0,...R,children:[!m&&(V.url?a.jsx("a",{className:"sf-menu-url",href:V.url,onClick:j=>j.stopPropagation(),children:a.jsx("div",{className:"sf-anchor-wrap",children:X(V)})}):X(V)),S&&a.jsx("span",{className:"sf-submenu-icon",children:a.jsx(Te,{d:rt,"aria-label":"submenu-icon"})}),W&&!b&&!m&&a.jsx(z,{})]})},it=r.forwardRef(($,V)=>{const{items:_=[],hoverDelay:M=0,onOpen:S,onClose:b,onSelect:N,open:m,offset:A,animation:I={duration:400,easing:"ease",effect:"FadeIn"},itemOnClick:X,closeOnScroll:B=!0,targetRef:R,className:W,children:Z,itemTemplate:z,...F}=$,j=r.useRef(null),D=r.useRef(null),[v,E]=r.useState(!1),[h,H]=r.useState({x:0,y:0}),[o,T]=r.useState([]),O=r.useRef(null),d=r.useRef(new Map),[u,L]=r.useState({focusedItems:null,hoveredItems:null}),le=r.useRef(null),me=r.useRef(m),{dir:Y}=He(),K=r.useRef([]),re=r.useCallback(e=>{var t;if(P.isIos&&he.current&&e.originalEvent){(t=e.originalEvent)==null||t.preventDefault();const n=e.originalEvent.changedTouches[0];H({x:n.clientX,y:n.clientY})}else e.preventDefault(),H({x:e.pageX,y:e.pageY});S==null||S(e.originalEvent?e.originalEvent:e),!(S&&m===!1)&&E(!0)},[S,m]),he=r.useRef(Xe(P.isIos&&R?R:{current:null},{tapHold:re})),Ae={items:K.current,hoverDelay:M,animation:I,open:m,offset:A,itemOnClick:X,targetRef:R,closeOnScroll:B,itemTemplate:z};r.useEffect(()=>(Ye("contextmenu"),()=>{var e,t,n;(e=d.current)==null||e.clear(),O.current&&(clearTimeout(O.current),O.current=null),(n=(t=he.current)==null?void 0:t.destroy)==null||n.call(t)}),[]);const pe=e=>{var t;v&&B&&!((t=j==null?void 0:j.current)!=null&&t.contains(e.target))&&q(e)};r.useEffect(()=>(B&&document.addEventListener("scroll",pe,!0),()=>{document.removeEventListener("scroll",pe,!0)}),[v,B,b,m]),r.useEffect(()=>{const e=R==null?void 0:R.current;return e&&e.addEventListener("contextmenu",re),()=>{e&&e.removeEventListener("contextmenu",re)}},[R,S]),r.useEffect(()=>{!m&&me.current===m||(me.current=m,m?(A&&A.left!==void 0&&A.top!==void 0&&H({x:A.left,y:A.top}),E(!0)):oe())},[m,A]),r.useEffect(()=>{var e;if(v){let t=h.x,n=h.y;const s=Le(D.current,document.documentElement,t,n);(s.includes("left")||s.includes("right"))&&(t=t-(((e=D==null?void 0:D.current)==null?void 0:e.offsetWidth)||0)),s.includes("bottom")&&(n=Se(D.current,null,{X:!1,Y:!0},{top:n,left:t}).top),(t!==h.x||n!==h.y)&&H({x:t,y:n}),ee(D.current),document.addEventListener("mousedown",ce)}else document.removeEventListener("mousedown",ce);return()=>document.removeEventListener("mousedown",ce)},[v,h]),r.useEffect(()=>{le.current&&le.current.focus()},[u]),r.useEffect(()=>{const e=Z?r.Children.toArray(Z).filter(n=>r.isValidElement(n)&&n.type===de):null,t=e!=null&&e.length?Ve(e):_;K.current=Ne(t)},[_,Z]),r.useImperativeHandle(V,()=>({...Ae,element:j.current})),r.useEffect(()=>{var e,t,n,s,l;if(o.length>0){const i=o[o.length-1].parentIndex.join("-"),c=(e=d.current)==null?void 0:e.get(i);if(P.isDevice){ee(c);return}const p=o[o.length-1];if(p.positionChanged){ee(c);return}let g=p.position.x,C=p.position.y;const x=Le(c,document.documentElement,Y==="rtl"?g-((c==null?void 0:c.offsetWidth)||0):g,C);(x.includes("left")||x.includes("right"))&&(g=Re(p.currentTarget,Y==="rtl"?"right":"left","top").left,g=Y==="rtl"?g:g-((c==null?void 0:c.offsetWidth)||0)),Y==="rtl"&&!x.includes("right")&&!x.includes("left")&&(g=g-(((n=(t=d.current)==null?void 0:t.get(i))==null?void 0:n.offsetWidth)||0)),x.includes("bottom")&&(C=Se(c,null,{X:!1,Y:!0},{top:C,left:g}).top);const f=o.length>1?o[o.length-2].parentIndex.join("-"):"",k=((s=d.current)==null?void 0:s.size)===1?D.current:(l=d.current)==null?void 0:l.get(f);if(k&&!x.includes("right")){const w=k.offsetWidth-k.clientWidth;w>5&&(g+=Y==="rtl"?-w:w)}p.position.x!==g||p.position.y!==C?T(w=>w.map((U,ue)=>{var te;return ue===w.length-1?((te=d.current)==null||te.clear(),{...U,position:{x:g,y:C},positionChanged:!0}):U})):ee(c)}},[o]);const oe=r.useCallback(()=>{var e;E(!1),T([]),(e=d==null?void 0:d.current)==null||e.clear(),L({focusedItems:null,hoveredItems:null})},[]),q=r.useCallback(e=>{b==null||b(e),!(b&&m===!0)&&oe()},[b,m,oe]),ce=e=>{var t;(t=j.current)!=null&&t.contains(e.target)||q(e)},ge=e=>{if(!r.isValidElement(e)||e.type!==de)return null;const{children:t,text:n,id:s,icon:l,url:i,separator:c,disabled:p,...g}=e.props,C={text:n,id:s,icon:l,url:i,separator:c,disabled:p};if(t){const x=typeof t=="function"?t:r.Children.toArray(t).filter(k=>r.isValidElement(k)&&k.type!==de);x.length>0&&(C.children=typeof x!="function"&&x.length===1?x[0]:x);const f=r.Children.toArray(t).map(ge).filter(Boolean);f.length>0&&(C.items=f)}return Object.keys(g).length>0&&(C.htmlAttributes=g),C},Ve=e=>{if(!e)return _;const t=r.Children.toArray(e).map(ge).filter(Boolean);return t.length>0?t:_},Ne=e=>{if(!P.isDevice)return e;const t=n=>n.map(s=>{var l,i;if(s.items&&s.items.length>0){const c=s.items.length>0&&((i=(l=s.items[0])==null?void 0:l.icon)==null?void 0:i.key)==="previous";let p=s.items;return c||(p=[{text:s.text,children:s.children,icon:Pe,separator:!1,items:[]},...s.items]),p=t(p),{...s,items:p}}return s});return t(e)},xe=(e,t)=>{var l;if(!t||!D.current)return;let n=h.x,s=h.y;if(!P.isDevice){const i=Re(t,Y==="rtl"?"left":"right","top");s=i.top,n=i.left}T(i=>[...i.filter(c=>c.parentIndex.length<e.length).map(c=>({...c,isVisible:!1})),{parentIndex:e,position:{x:n,y:s},isVisible:!0,currentTarget:t,positionChanged:!1}]),(l=d.current)==null||l.clear()},Q=()=>{var e;o.length<1||(T(t=>{const n=t.filter((s,l)=>l!==t.length-1);return n.map((s,l)=>({...s,isVisible:l===n.length-1}))}),(e=d.current)==null||e.clear())},ee=e=>{var n;if(!e)return;if(I==null||I.duration&&I.duration<=0||(I==null?void 0:I.effect)==="None"||e.style.visibility==="visible"){e.style.visibility="visible",(n=D.current)==null||n.focus();return}const t=ze({duration:I.duration,timingFunction:I.easing,name:I.effect,begin:s=>{s!=null&&s.element&&(s.element.style.visibility="visible",I.effect==="SlideDown"&&(s.element.style.maxHeight=s.element.offsetHeight+"px",s.element.style.overflow="hidden"))},end:s=>{var l;s!=null&&s.element&&(I.effect==="SlideDown"&&(s.element.style.maxHeight=""),(l=D.current)==null||l.focus())}});e&&t.animate(e)},Ie=()=>{var l,i;const e=u==null?void 0:u.focusedItems,t=e?G(e):[];if(t.length===0)return;let n=0;for(;n<t.length&&(t[n].separator||t[n].disabled);)n++;if(n>=t.length)return;L(c=>({focusedItems:[...e,n],hoveredItems:c==null?void 0:c.hoveredItems}));let s;if(o.length>0){const c=e==null?void 0:e.slice(0,-1);s=(l=d.current.get(c.join("-")))==null?void 0:l.children[e==null?void 0:e[e.length-1]]}else s=(i=D.current)==null?void 0:i.children[e==null?void 0:e[0]];ie(e,s)},ie=(e,t)=>{O.current&&clearTimeout(O.current),O.current=window.setTimeout(()=>{xe(e,t)},M)},Oe=e=>{const t=e.key;switch(t){case"Escape":e.preventDefault(),o.length>0?(Q(),u.focusedItems&&u.focusedItems.length>1&&L(n=>{var s;return{focusedItems:(s=n==null?void 0:n.focusedItems)==null?void 0:s.slice(0,-1),hoveredItems:n==null?void 0:n.hoveredItems}})):q(e.nativeEvent);break;case"Enter":case" ":{const n=o.length>0?G(o[o.length-1].parentIndex):K.current,s=u.focusedItems&&u.focusedItems.length>0?n[u.focusedItems[u.focusedItems.length-1]]:void 0;if(!(s!=null&&s.items)||s.items.length===0){N==null||N({item:s,event:e}),q(e.nativeEvent);return}Ie(),e.preventDefault();break}case"ArrowUp":e.preventDefault(),ve(-1);break;case"ArrowDown":e.preventDefault(),ve(1);break;case"ArrowLeft":e.preventDefault(),u.focusedItems&&u.focusedItems.length>1&&L(n=>{var s;return{focusedItems:(s=n==null?void 0:n.focusedItems)==null?void 0:s.slice(0,-1),hoveredItems:n==null?void 0:n.hoveredItems}}),o.length>0&&Q();break;case"ArrowRight":e.preventDefault(),Ie();break;case"Home":e.preventDefault(),ae("first");break;case"End":e.preventDefault(),ae("last");break;default:t.length===1&&/[a-zA-Z0-9]/.test(t)&&(e.preventDefault(),ae("character",t.toLowerCase()));break}},ae=(e,t)=>{var g,C,x;const n=o.length>0?G(o[o.length-1].parentIndex):K.current;if(!(n!=null&&n.length))return;const s=o.length>0?[...((g=o[o.length-1])==null?void 0:g.parentIndex)||[]]:[],l=((C=u==null?void 0:u.focusedItems)==null?void 0:C.length)===s.length+1?u.focusedItems[u.focusedItems.length-1]:-1,i=f=>f&&!f.separator&&!f.disabled,c=(f,k)=>f.text&&typeof f.text=="string"&&f.text.toLowerCase().startsWith(k);let p=-1;switch(e){case"first":p=n.findIndex(i);break;case"last":p=((x=n.map((f,k)=>({item:f,idx:k})).reverse().find(({item:f})=>i(f)))==null?void 0:x.idx)??-1;break;case"character":if(!t||typeof t!="string"||t.length!==1)return;{const f=Math.max(0,l+1),w=[...n.slice(f),...n.slice(0,f)].find(U=>i(U)&&c(U,t));w&&(p=n.indexOf(w))}break}p>=0&&(L==null||L(f=>({focusedItems:[...s,p],hoveredItems:(f==null?void 0:f.hoveredItems)||null})))},ve=e=>{const t=o.length>0?G(o[o.length-1].parentIndex):K.current;if(t.length===0)return;const n=o.length>0?[...o[o.length-1].parentIndex]:[],s=u.focusedItems&&u.focusedItems.length===n.length+1?u.focusedItems[u.focusedItems.length-1]:null;let l=s===null?e>0?0:t.length-1:(s+e+t.length)%t.length,i=0;for(;l<t.length&&(t[l].separator||t[l].disabled)&&i<t.length;)l=(l+e+t.length)%t.length,i++;i>=t.length||L(c=>({focusedItems:[...n,l],hoveredItems:c==null?void 0:c.hoveredItems}))},G=r.useCallback(e=>e.reduce((t,n)=>{var s;return((s=t[n])==null?void 0:s.items)||[]},K.current),[]),Pe=r.useMemo(()=>a.jsx(Te,{d:ot,"aria-label":"Previous"},"previous"),[]),Be=e=>z?e.children||z(e):a.jsxs(a.Fragment,{children:[e.icon&&a.jsx("span",{className:["sf-menu-icon sf-icon sf-icon-size",typeof e.icon=="string"?e.icon:""].filter(Boolean).join(" "),children:typeof e.icon!="string"&&e.icon}),e.children||e.text]}),Ee=(e,t)=>e.map((n,s)=>{var ye,Me,be;const l=[...t,s],i=n.items?n.items.length>0:!1,c=n.disabled===!0,p=P.isDevice&&((ye=n.icon)==null?void 0:ye.key)==="previous",{className:g,...C}=n.htmlAttributes||{},x=l.join("-")===((Me=u.focusedItems)==null?void 0:Me.join("-")),f=l.join("-")===((be=u.hoveredItems)==null?void 0:be.join("-")),k=!n.icon&&e.find((y,ne)=>ne!==s&&y.icon)!==void 0,w=o.some(y=>t.length===0?y.parentIndex[0]===s:t.length===y.parentIndex.length-1&&y.parentIndex.slice(0,-1).join("-")===t.join("-")&&y.parentIndex[y.parentIndex.length-1]===s),U=["sf-menu-item sf-align-center sf-ellipsis",n.separator&&"sf-separator",c&&"sf-disabled",p&&"sf-menu-header",(x||f)&&"sf-focused",w&&i&&"sf-has-submenu",k&&"sf-blank-icon",g].filter(Boolean).join(" "),ue=y=>{var ne,De;if(L(J=>({focusedItems:J==null?void 0:J.focusedItems,hoveredItems:l})),!i){o.length===l.length?Q():o.length>l.length&&(T(o.slice(0,l.length-1)),(ne=d==null?void 0:d.current)==null||ne.clear());return}if(!P.isDevice&&i&&!X&&!c){if(o&&o.find(J=>J.parentIndex.join("-")===l.join("-")))return;(De=d==null?void 0:d.current)==null||De.clear(),ie(l,y.currentTarget)}},te=y=>{y.preventDefault(),!c&&(p?Q():i?P.isDevice?xe(l,y.currentTarget):X&&ie(l,y.currentTarget):(N==null||N({item:n,event:y}),q(y.nativeEvent)))};return a.jsx(ct,{item:n,itemClasses:U,isFocused:x,hasSubmenu:i,isDisabled:c,isSelected:w,isSeparator:!!n.separator,onMouseEnter:ue,onClick:te,getContent:Be,focusedItemRef:le,attributes:C},l.join("-"))}),We=()=>o.map(({parentIndex:e,position:t,isVisible:n})=>{const s=G(e),l=e.join("-");return a.jsx("ul",{ref:i=>{i&&d.current&&d.current.set(l,i)},className:"sf-menu-parent",style:{left:t.x,top:t.y,display:P.isDevice&&!n?"none":"block",visibility:"hidden"},tabIndex:0,role:"menu",children:Ee(s,e)},`submenu-${l}`)}),Ze=r.useMemo(()=>["sf-contextmenu","sf-control",Y==="rtl"?"sf-rtl":"",W].filter(Boolean).join(" "),[Y]),Ce=typeof document<"u"?document.body:null;return Ce?a.jsx(a.Fragment,{children:v&&Ke.createPortal(a.jsxs("div",{ref:j,className:Ze,onKeyDown:Oe,...F,children:[a.jsx("ul",{className:"sf-menu-parent",style:{top:h.y,left:h.x,display:P.isDevice&&o.length>0?"none":"block",visibility:"hidden"},role:"menu",tabIndex:0,ref:D,children:K.current&&K.current.length>0&&Ee(K.current,[])}),We()]}),Ce)}):null}),pt={title:"Scheduler/ContextMenu",parameters:{docs:{description:{component:"Meta configuration for the Storybook stories"}}}},se={parameters:{controls:{disable:!0}},render:()=>{const $=v=>{B(v.value)},V=[{text:"New Event",id:"Add",icon:a.jsx(et,{})},{text:"Today",id:"Today",icon:a.jsx(Je,{})}],_=[{text:"Edit Event",id:"Edit",icon:a.jsx(lt,{})},{text:"Delete Event",id:"Delete",icon:a.jsx(nt,{})}],M=r.useRef(null),S=r.useRef(null);let b;const[N,m]=r.useState(!1),[A,I]=r.useState(V),[X,B]=r.useState(new Date(2021,0,10)),R=r.useRef(null),W=r.useRef(null),Z=r.useRef(null),z=v=>{S.current=v},F=v=>{var o,T,O,d,u,L;const E=(v==null?void 0:v.target)??null;if(!M.current||!E)return;const h=((o=E.closest)==null?void 0:o.call(E,".sf-appointment"))??null;if(h){(T=W.current)==null||T.classList.remove("sf-selected-cell"),(O=Z.current)==null||O.classList.remove("sf-appointment-active"),h.classList.add("sf-appointment-active"),Z.current=h,R.current=h,I(_),m(!0);return}const H=((d=E.closest)==null?void 0:d.call(E,".sf-work-cells, .sf-all-day-cell"))??null;H&&((u=W.current)==null||u.classList.remove("sf-selected-cell"),H.classList.add("sf-selected-cell"),W.current=H,(L=Z.current)==null||L.classList.remove("sf-appointment-active"),R.current=H,I(V),m(!0))},j=()=>{m(!1)},D=v=>{var H,o;const E=(H=v==null?void 0:v.item)==null?void 0:H.id,h=R.current;if(!(!M.current||!E))switch((o=h==null?void 0:h.closest)!=null&&o.call(h,".sf-appointment")&&(b=M.current.getEventDetails(h)),E){case"Today":{B(new Date);break}case"Add":{const T=M.current.getSelectedElements(),d=(Array.isArray(T)?T.some(L=>L===h):!1)?T:h,u=M.current.getCellDetails(d);E==="Add"&&M.current.openEditor(E,u);break}case"Edit":{M.current.openEditor(E,b);break}case"Delete":{M.current.deleteEvent(b);break}}};return a.jsx(a.Fragment,{children:a.jsx("div",{className:"control-section",children:a.jsxs("div",{className:"schedulerr-control",ref:z,children:[a.jsxs($e,{ref:M,height:"550px",width:"100%",selectedDate:X,eventSettings:{dataSource:_e},onSelectedDateChange:$,children:[a.jsx(Fe,{}),a.jsx(qe,{}),a.jsx(Ge,{})]}),a.jsx(it,{open:N,targetRef:S,items:A,onOpen:F,onClose:j,onSelect:D})]})})})}};var ke,we,je;se.parameters={...se.parameters,docs:{...(ke=se.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
    const scheduleRef = useRef<IScheduler | null>(null);
    const targetRef = useRef<HTMLElement | null>(null);
    let selectedEvent: EventModel;
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState<MenuItemProps[]>(cellMenuItems);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date(2021, 0, 10));
    const selectedTargetRef = useRef<HTMLElement | null>(null);
    const lastSelectedCellRef = useRef<HTMLElement | null>(null);
    const lastActiveApptRef = useRef<HTMLElement | null>(null);

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
        setMenu(eventMenuItems);
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
        setMenu(cellMenuItems);
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
                <Scheduler ref={scheduleRef} height={'550px'} width={'100%'} selectedDate={selectedDate} eventSettings={{
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
}`,...(je=(we=se.parameters)==null?void 0:we.docs)==null?void 0:je.source}}};const gt=["ContextMenuSample"];export{se as ContextMenuSample,gt as __namedExportsOrder,pt as default};
