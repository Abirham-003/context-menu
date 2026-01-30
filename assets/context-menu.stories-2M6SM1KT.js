import{j as a,r as qe}from"./index-7s7xaQU8.js";import{s as Ke}from"./dataSource-CrVxx1x3.js";import{j as fe,u as He,d as N,n as _e,p as Xe,o as Se,q as Le,r as we,A as Ye,s as Ve,t as ze,S as Ue,D as $e,W as Fe,M as Ge}from"./month-view-DIwL7j_E.js";import{r as l}from"./index-CC6F48bw.js";import{D as Je}from"./day-BaR_zEFx.js";import"./index-qiR4Kxfn.js";const Qe=a.jsx("path",{d:"M7 6V2H5V6H1V8H5V12H7V8H11V6H7ZM11 2H20C21.1046 2 22 2.89543 22 4V13.5858C22 14.1162 21.7893 14.6249 21.4142 15L15 21.4142C14.6249 21.7893 14.1162 22 13.5858 22H4C2.89543 22 2 21.1046 2 20V13H4V20H13V13H20V4H11V2Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),et=fe(Qe),tt=a.jsx("path",{d:"M12 2H20C21.1046 2 22 2.89543 22 4V13.5858C22 14.1162 21.7893 14.6249 21.4142 15L15 21.4142C14.6249 21.7893 14.1162 22 13.5858 22H4C2.89543 22 2 21.1046 2 20V13H4V20H13V13H20V4H12V2ZM5.99999 5.58579L3.49997 3.08578L2.08576 4.5L4.58578 7.00001L2.08577 9.50002L3.49998 10.9142L6 8.41422L8.5 10.9142L9.91421 9.5L7.41421 7L9.91419 4.50002L8.49998 3.08581L5.99999 5.58579Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),nt=fe(tt),st=a.jsx("path",{d:"M21.7035 4.74354L18.8751 1.91511C18.4862 1.5262 17.8498 1.5262 17.4609 1.91511L15.3395 4.03643L19.5822 8.27907L21.7035 6.15775C22.0924 5.76884 22.0924 5.13245 21.7035 4.74354ZM1.62012 22H5.86011L18.1702 9.68994L13.9302 5.44995L1.62012 17.76V22ZM5.03015 20H3.62012V18.59L13.9302 8.28002L15.3401 9.68994L5.03015 20Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),rt=fe(st),lt="M7.58582 18L13.5858 12L7.58582 6L9.00003 4.58578L16.4142 12L9.00003 19.4142L7.58582 18Z",ot="M12.4142 19L6.41424 13H21V11H6.41424L12.4142 5L11 3.58578L2.58582 12L11 20.4142L12.4142 19Z",de=()=>null,ct=U=>{const{item:T,itemClasses:B,isFocused:I,hasSubmenu:S,isDisabled:j,isSelected:k,isSeparator:f,onMouseEnter:R,onClick:C,getContent:O,focusedItemRef:W,attributes:H}=U,{ripple:K}=He(),{rippleMouseDown:_,Ripple:E}=ze(K),y=v=>{K&&!j&&!f&&_(v)};return a.jsxs("li",{ref:I?W:void 0,className:B,onMouseEnter:R,onMouseDown:y,onClick:C,tabIndex:-1,role:"menuitem","aria-disabled":f?void 0:j,"aria-haspopup":f?void 0:S,"aria-expanded":f?void 0:!!(S&&k),"aria-label":f?"separator":T.text||void 0,...H,children:[!f&&(T.url?a.jsx("a",{className:"sf-menu-url",href:T.url,onClick:v=>v.stopPropagation(),children:a.jsx("div",{className:"sf-anchor-wrap",children:O(T)})}):O(T)),S&&a.jsx("span",{className:"sf-submenu-icon",children:a.jsx(Ve,{d:lt,"aria-label":"submenu-icon"})}),K&&!j&&!f&&a.jsx(E,{})]})},it=l.forwardRef((U,T)=>{const{items:B=[],hoverDelay:I=0,onOpen:S,onClose:j,onSelect:k,open:f,offset:R,animation:C={duration:400,easing:"ease",effect:"FadeIn"},itemOnClick:O,closeOnScroll:W=!0,targetRef:H,className:K,children:_,itemTemplate:E,...y}=U,v=l.useRef(null),g=l.useRef(null),[V,Z]=l.useState(!1),[M,X]=l.useState({x:0,y:0}),[o,$]=l.useState([]),z=l.useRef(null),p=l.useRef(new Map),[d,A]=l.useState({focusedItems:null,hoveredItems:null}),re=l.useRef(null),me=l.useRef(f),{dir:q}=He(),P=l.useRef([]),le=l.useCallback(e=>{var t;if(N.isIos&&he.current&&e.originalEvent){(t=e.originalEvent)==null||t.preventDefault();const n=e.originalEvent.changedTouches[0];X({x:n.clientX,y:n.clientY})}else e.preventDefault(),X({x:e.pageX,y:e.pageY});S==null||S(e.originalEvent?e.originalEvent:e),!(S&&f===!1)&&Z(!0)},[S,f]),he=l.useRef(_e(N.isIos&&H?H:{current:null},{tapHold:le})),Te={items:P.current,hoverDelay:I,animation:C,open:f,offset:R,itemOnClick:O,targetRef:H,closeOnScroll:W,itemTemplate:E};l.useEffect(()=>(Xe("contextmenu"),()=>{var e,t,n;(e=p.current)==null||e.clear(),z.current&&(clearTimeout(z.current),z.current=null),(n=(t=he.current)==null?void 0:t.destroy)==null||n.call(t)}),[]);const pe=e=>{var t;V&&W&&!((t=v==null?void 0:v.current)!=null&&t.contains(e.target))&&F(e)};l.useEffect(()=>(W&&document.addEventListener("scroll",pe,!0),()=>{document.removeEventListener("scroll",pe,!0)}),[V,W,j,f]),l.useEffect(()=>{const e=H==null?void 0:H.current;return e&&e.addEventListener("contextmenu",le),()=>{e&&e.removeEventListener("contextmenu",le)}},[H,S]),l.useEffect(()=>{!f&&me.current===f||(me.current=f,f?(R&&R.left!==void 0&&R.top!==void 0&&X({x:R.left,y:R.top}),Z(!0)):oe())},[f,R]),l.useEffect(()=>{var e;if(V){let t=M.x,n=M.y;const s=Se(g.current,document.documentElement,t,n);(s.includes("left")||s.includes("right"))&&(t=t-(((e=g==null?void 0:g.current)==null?void 0:e.offsetWidth)||0)),s.includes("bottom")&&(n=Le(g.current,null,{X:!1,Y:!0},{top:n,left:t}).top),(t!==M.x||n!==M.y)&&X({x:t,y:n}),ee(g.current),document.addEventListener("mousedown",ce)}else document.removeEventListener("mousedown",ce);return()=>document.removeEventListener("mousedown",ce)},[V,M]),l.useEffect(()=>{re.current&&re.current.focus()},[d]),l.useEffect(()=>{const e=_?l.Children.toArray(_).filter(n=>l.isValidElement(n)&&n.type===de):null,t=e!=null&&e.length?Ne(e):B;P.current=Oe(t)},[B,_]),l.useImperativeHandle(T,()=>({...Te,element:v.current})),l.useEffect(()=>{var e,t,n,s,r;if(o.length>0){const i=o[o.length-1].parentIndex.join("-"),c=(e=p.current)==null?void 0:e.get(i);if(N.isDevice){ee(c);return}const m=o[o.length-1];if(m.positionChanged){ee(c);return}let h=m.position.x,b=m.position.y;const x=Se(c,document.documentElement,q==="rtl"?h-((c==null?void 0:c.offsetWidth)||0):h,b);(x.includes("left")||x.includes("right"))&&(h=we(m.currentTarget,q==="rtl"?"right":"left","top").left,h=q==="rtl"?h:h-((c==null?void 0:c.offsetWidth)||0)),q==="rtl"&&!x.includes("right")&&!x.includes("left")&&(h=h-(((n=(t=p.current)==null?void 0:t.get(i))==null?void 0:n.offsetWidth)||0)),x.includes("bottom")&&(b=Le(c,null,{X:!1,Y:!0},{top:b,left:h}).top);const u=o.length>1?o[o.length-2].parentIndex.join("-"):"",L=((s=p.current)==null?void 0:s.size)===1?g.current:(r=p.current)==null?void 0:r.get(u);if(L&&!x.includes("right")){const w=L.offsetWidth-L.clientWidth;w>5&&(h+=q==="rtl"?-w:w)}m.position.x!==h||m.position.y!==b?$(w=>w.map((Y,ue)=>{var te;return ue===w.length-1?((te=p.current)==null||te.clear(),{...Y,position:{x:h,y:b},positionChanged:!0}):Y})):ee(c)}},[o]);const oe=l.useCallback(()=>{var e;Z(!1),$([]),(e=p==null?void 0:p.current)==null||e.clear(),A({focusedItems:null,hoveredItems:null})},[]),F=l.useCallback(e=>{j==null||j(e),!(j&&f===!0)&&oe()},[j,f,oe]),ce=e=>{var t;(t=v.current)!=null&&t.contains(e.target)||F(e)},ge=e=>{if(!l.isValidElement(e)||e.type!==de)return null;const{children:t,text:n,id:s,icon:r,url:i,separator:c,disabled:m,...h}=e.props,b={text:n,id:s,icon:r,url:i,separator:c,disabled:m};if(t){const x=typeof t=="function"?t:l.Children.toArray(t).filter(L=>l.isValidElement(L)&&L.type!==de);x.length>0&&(b.children=typeof x!="function"&&x.length===1?x[0]:x);const u=l.Children.toArray(t).map(ge).filter(Boolean);u.length>0&&(b.items=u)}return Object.keys(h).length>0&&(b.htmlAttributes=h),b},Ne=e=>{if(!e)return B;const t=l.Children.toArray(e).map(ge).filter(Boolean);return t.length>0?t:B},Oe=e=>{if(!N.isDevice)return e;const t=n=>n.map(s=>{var r,i;if(s.items&&s.items.length>0){const c=s.items.length>0&&((i=(r=s.items[0])==null?void 0:r.icon)==null?void 0:i.key)==="previous";let m=s.items;return c||(m=[{text:s.text,children:s.children,icon:Pe,separator:!1,items:[]},...s.items]),m=t(m),{...s,items:m}}return s});return t(e)},xe=(e,t)=>{var r;if(!t||!g.current)return;let n=M.x,s=M.y;if(!N.isDevice){const i=we(t,q==="rtl"?"left":"right","top");s=i.top,n=i.left}$(i=>[...i.filter(c=>c.parentIndex.length<e.length).map(c=>({...c,isVisible:!1})),{parentIndex:e,position:{x:n,y:s},isVisible:!0,currentTarget:t,positionChanged:!1}]),(r=p.current)==null||r.clear()},Q=()=>{var e;o.length<1||($(t=>{const n=t.filter((s,r)=>r!==t.length-1);return n.map((s,r)=>({...s,isVisible:r===n.length-1}))}),(e=p.current)==null||e.clear())},ee=e=>{var n;if(!e)return;if(C==null||C.duration&&C.duration<=0||(C==null?void 0:C.effect)==="None"||e.style.visibility==="visible"){e.style.visibility="visible",(n=g.current)==null||n.focus();return}const t=Ye({duration:C.duration,timingFunction:C.easing,name:C.effect,begin:s=>{s!=null&&s.element&&(s.element.style.visibility="visible",C.effect==="SlideDown"&&(s.element.style.maxHeight=s.element.offsetHeight+"px",s.element.style.overflow="hidden"))},end:s=>{var r;s!=null&&s.element&&(C.effect==="SlideDown"&&(s.element.style.maxHeight=""),(r=g.current)==null||r.focus())}});e&&t.animate(e)},ve=()=>{var r,i;const e=d==null?void 0:d.focusedItems,t=e?G(e):[];if(t.length===0)return;let n=0;for(;n<t.length&&(t[n].separator||t[n].disabled);)n++;if(n>=t.length)return;A(c=>({focusedItems:[...e,n],hoveredItems:c==null?void 0:c.hoveredItems}));let s;if(o.length>0){const c=e==null?void 0:e.slice(0,-1);s=(r=p.current.get(c.join("-")))==null?void 0:r.children[e==null?void 0:e[e.length-1]]}else s=(i=g.current)==null?void 0:i.children[e==null?void 0:e[0]];ie(e,s)},ie=(e,t)=>{z.current&&clearTimeout(z.current),z.current=window.setTimeout(()=>{xe(e,t)},I)},Ae=e=>{const t=e.key;switch(t){case"Escape":e.preventDefault(),o.length>0?(Q(),d.focusedItems&&d.focusedItems.length>1&&A(n=>{var s;return{focusedItems:(s=n==null?void 0:n.focusedItems)==null?void 0:s.slice(0,-1),hoveredItems:n==null?void 0:n.hoveredItems}})):F(e.nativeEvent);break;case"Enter":case" ":{const n=o.length>0?G(o[o.length-1].parentIndex):P.current,s=d.focusedItems&&d.focusedItems.length>0?n[d.focusedItems[d.focusedItems.length-1]]:void 0;if(!(s!=null&&s.items)||s.items.length===0){k==null||k({item:s,event:e}),F(e.nativeEvent);return}ve(),e.preventDefault();break}case"ArrowUp":e.preventDefault(),Ie(-1);break;case"ArrowDown":e.preventDefault(),Ie(1);break;case"ArrowLeft":e.preventDefault(),d.focusedItems&&d.focusedItems.length>1&&A(n=>{var s;return{focusedItems:(s=n==null?void 0:n.focusedItems)==null?void 0:s.slice(0,-1),hoveredItems:n==null?void 0:n.hoveredItems}}),o.length>0&&Q();break;case"ArrowRight":e.preventDefault(),ve();break;case"Home":e.preventDefault(),ae("first");break;case"End":e.preventDefault(),ae("last");break;default:t.length===1&&/[a-zA-Z0-9]/.test(t)&&(e.preventDefault(),ae("character",t.toLowerCase()));break}},ae=(e,t)=>{var h,b,x;const n=o.length>0?G(o[o.length-1].parentIndex):P.current;if(!(n!=null&&n.length))return;const s=o.length>0?[...((h=o[o.length-1])==null?void 0:h.parentIndex)||[]]:[],r=((b=d==null?void 0:d.focusedItems)==null?void 0:b.length)===s.length+1?d.focusedItems[d.focusedItems.length-1]:-1,i=u=>u&&!u.separator&&!u.disabled,c=(u,L)=>u.text&&typeof u.text=="string"&&u.text.toLowerCase().startsWith(L);let m=-1;switch(e){case"first":m=n.findIndex(i);break;case"last":m=((x=n.map((u,L)=>({item:u,idx:L})).reverse().find(({item:u})=>i(u)))==null?void 0:x.idx)??-1;break;case"character":if(!t||typeof t!="string"||t.length!==1)return;{const u=Math.max(0,r+1),w=[...n.slice(u),...n.slice(0,u)].find(Y=>i(Y)&&c(Y,t));w&&(m=n.indexOf(w))}break}m>=0&&(A==null||A(u=>({focusedItems:[...s,m],hoveredItems:(u==null?void 0:u.hoveredItems)||null})))},Ie=e=>{const t=o.length>0?G(o[o.length-1].parentIndex):P.current;if(t.length===0)return;const n=o.length>0?[...o[o.length-1].parentIndex]:[],s=d.focusedItems&&d.focusedItems.length===n.length+1?d.focusedItems[d.focusedItems.length-1]:null;let r=s===null?e>0?0:t.length-1:(s+e+t.length)%t.length,i=0;for(;r<t.length&&(t[r].separator||t[r].disabled)&&i<t.length;)r=(r+e+t.length)%t.length,i++;i>=t.length||A(c=>({focusedItems:[...n,r],hoveredItems:c==null?void 0:c.hoveredItems}))},G=l.useCallback(e=>e.reduce((t,n)=>{var s;return((s=t[n])==null?void 0:s.items)||[]},P.current),[]),Pe=l.useMemo(()=>a.jsx(Ve,{d:ot,"aria-label":"Previous"},"previous"),[]),Be=e=>E?e.children||E(e):a.jsxs(a.Fragment,{children:[e.icon&&a.jsx("span",{className:["sf-menu-icon sf-icon sf-icon-size",typeof e.icon=="string"?e.icon:""].filter(Boolean).join(" "),children:typeof e.icon!="string"&&e.icon}),e.children||e.text]}),Ee=(e,t)=>e.map((n,s)=>{var Ce,be,De;const r=[...t,s],i=n.items?n.items.length>0:!1,c=n.disabled===!0,m=N.isDevice&&((Ce=n.icon)==null?void 0:Ce.key)==="previous",{className:h,...b}=n.htmlAttributes||{},x=r.join("-")===((be=d.focusedItems)==null?void 0:be.join("-")),u=r.join("-")===((De=d.hoveredItems)==null?void 0:De.join("-")),L=!n.icon&&e.find((D,ne)=>ne!==s&&D.icon)!==void 0,w=o.some(D=>t.length===0?D.parentIndex[0]===s:t.length===D.parentIndex.length-1&&D.parentIndex.slice(0,-1).join("-")===t.join("-")&&D.parentIndex[D.parentIndex.length-1]===s),Y=["sf-menu-item sf-align-center sf-ellipsis",n.separator&&"sf-separator",c&&"sf-disabled",m&&"sf-menu-header",(x||u)&&"sf-focused",w&&i&&"sf-has-submenu",L&&"sf-blank-icon",h].filter(Boolean).join(" "),ue=D=>{var ne,Me;if(A(J=>({focusedItems:J==null?void 0:J.focusedItems,hoveredItems:r})),!i){o.length===r.length?Q():o.length>r.length&&($(o.slice(0,r.length-1)),(ne=p==null?void 0:p.current)==null||ne.clear());return}if(!N.isDevice&&i&&!O&&!c){if(o&&o.find(J=>J.parentIndex.join("-")===r.join("-")))return;(Me=p==null?void 0:p.current)==null||Me.clear(),ie(r,D.currentTarget)}},te=D=>{D.preventDefault(),!c&&(m?Q():i?N.isDevice?xe(r,D.currentTarget):O&&ie(r,D.currentTarget):(k==null||k({item:n,event:D}),F(D.nativeEvent)))};return a.jsx(ct,{item:n,itemClasses:Y,isFocused:x,hasSubmenu:i,isDisabled:c,isSelected:w,isSeparator:!!n.separator,onMouseEnter:ue,onClick:te,getContent:Be,focusedItemRef:re,attributes:b},r.join("-"))}),We=()=>o.map(({parentIndex:e,position:t,isVisible:n})=>{const s=G(e),r=e.join("-");return a.jsx("ul",{ref:i=>{i&&p.current&&p.current.set(r,i)},className:"sf-menu-parent",style:{left:t.x,top:t.y,display:N.isDevice&&!n?"none":"block",visibility:"hidden"},tabIndex:0,role:"menu",children:Ee(s,e)},`submenu-${r}`)}),Ze=l.useMemo(()=>["sf-contextmenu","sf-control",q==="rtl"?"sf-rtl":"",K].filter(Boolean).join(" "),[q]),ye=typeof document<"u"?document.body:null;return ye?a.jsx(a.Fragment,{children:V&&qe.createPortal(a.jsxs("div",{ref:v,className:Ze,onKeyDown:Ae,...y,children:[a.jsx("ul",{className:"sf-menu-parent",style:{top:M.y,left:M.x,display:N.isDevice&&o.length>0?"none":"block",visibility:"hidden"},role:"menu",tabIndex:0,ref:g,children:P.current&&P.current.length>0&&Ee(P.current,[])}),We()]}),ye)}):null}),pt={title:"Scheduler/ContextMenu",parameters:{docs:{description:{component:"Meta configuration for the Storybook stories"}}}},se={parameters:{controls:{disable:!0}},render:()=>{const U=E=>{O(E.value)},T=[{text:"New Event",id:"Add",icon:a.jsx(et,{})},{text:"Today",id:"Today",icon:a.jsx(Je,{})}],B=[{text:"Edit Event",id:"Edit",icon:a.jsx(rt,{})},{text:"Delete Event",id:"Delete",icon:a.jsx(nt,{})}],I=l.useRef(null),S=l.useRef(null),[j,k]=l.useState(!1),[f,R]=l.useState(T),[C,O]=l.useState(new Date(2021,0,10)),W=E=>{S.current=E},H=E=>{var M,X;const y=(E==null?void 0:E.target)??null;if(!I.current||!y)return;const v=I.current.element.querySelector(".sf-selected-cell"),g=I.current.element.querySelector(".sf-appointment-active");v==null||v.classList.remove("sf-selected-cell"),g==null||g.classList.remove("sf-appointment-active");const V=((M=y.closest)==null?void 0:M.call(y,".sf-appointment"))??null;if(V){V.classList.add("sf-appointment-active"),R(B),k(!0);return}const Z=((X=y.closest)==null?void 0:X.call(y,".sf-work-cells, .sf-all-day-cell"))??null;Z&&(Z.classList.add("sf-selected-cell"),R(T),k(!0))},K=()=>{k(!1)},_=E=>{var V;const y=(V=E==null?void 0:E.item)==null?void 0:V.id;let v;if(!I.current||!y)return;const g=I.current.element.querySelector(".sf-appointment-active");switch(g&&(v=I.current.getEventDetails(g)),y){case"Today":{O(new Date);break}case"Add":{const Z=I.current.element.querySelector(".sf-selected-cell"),M=I.current.getCellDetails(Z);y==="Add"&&I.current.openEditor(y,M);break}case"Edit":{I.current.openEditor(y,v);break}case"Delete":{I.current.deleteEvent(v);break}}};return a.jsx(a.Fragment,{children:a.jsx("div",{className:"control-section",children:a.jsxs("div",{className:"schedulerr-control",ref:W,children:[a.jsxs(Ue,{ref:I,height:"550px",width:"100%",selectedDate:C,eventSettings:{dataSource:Ke},onSelectedDateChange:U,children:[a.jsx($e,{}),a.jsx(Fe,{}),a.jsx(Ge,{})]}),a.jsx(it,{open:j,targetRef:S,items:f,onOpen:H,onClose:K,onSelect:_})]})})})}};var je,ke,Re;se.parameters={...se.parameters,docs:{...(je=se.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
        setMenu(eventMenuItems);
        setOpen(true);
        return;
      }
      const cell = target.closest?.('.sf-work-cells, .sf-all-day-cell') as HTMLElement | null ?? null;
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
          {
            const selectedElements: HTMLElement = schedulerRef.current.element.querySelector('.sf-selected-cell');
            const activeCellDetails = schedulerRef.current.getCellDetails(selectedElements);
            if (type === 'Add') {
              schedulerRef.current.openEditor(type, activeCellDetails);
            }
            break;
          }
        case 'Edit':
          {
            schedulerRef.current.openEditor(type, selectedEvent);
            break;
          }
        case 'Delete':
          {
            schedulerRef.current.deleteEvent(selectedEvent);
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
}`,...(Re=(ke=se.parameters)==null?void 0:ke.docs)==null?void 0:Re.source}}};const gt=["ContextMenuSample"];export{se as ContextMenuSample,gt as __namedExportsOrder,pt as default};
