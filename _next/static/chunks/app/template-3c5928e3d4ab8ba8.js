(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[397],{7591:(e,t,n)=>{Promise.resolve().then(n.bind(n,7699))},7699:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(5155),i=n(2115),s=n(5683),o=n(4049);function l(e){let{children:t}=e,[n,l]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let e=setTimeout(()=>{l(!1)},500);return()=>clearTimeout(e)},[]),(0,r.jsx)(s.N,{mode:"wait",children:n?(0,r.jsx)(o.P.div,{className:"fixed inset-0 flex items-center justify-center bg-white",exit:{opacity:0},transition:{duration:.5},children:(0,r.jsx)(o.P.div,{className:"text-4xl font-bold text-[#0033FF]",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},children:"Somin Park"})},"loader"):(0,r.jsx)(o.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:t},"content")})}},5683:(e,t,n)=>{"use strict";n.d(t,{N:()=>g});var r=n(5155),i=n(2115),s=n(4710),o=n(9234),l=n(9656),a=n(7249);class c extends i.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=e instanceof HTMLElement&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=n-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function u(e){let{children:t,isPresent:n,anchorX:s}=e,o=(0,i.useId)(),l=(0,i.useRef)(null),u=(0,i.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:d}=(0,i.useContext)(a.Q);return(0,i.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:i,right:a}=u.current;if(n||!l.current||!e||!t)return;l.current.dataset.motionPopId=o;let c=document.createElement("style");return d&&(c.nonce=d),document.head.appendChild(c),c.sheet&&c.sheet.insertRule('\n          [data-motion-pop-id="'.concat(o,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            ").concat("left"===s?"left: ".concat(i):"right: ".concat(a),"px !important;\n            top: ").concat(r,"px !important;\n          }\n        ")),()=>{document.head.removeChild(c)}},[n]),(0,r.jsx)(c,{isPresent:n,childRef:l,sizeRef:u,children:i.cloneElement(t,{ref:l})})}let d=e=>{let{children:t,initial:n,isPresent:s,onExitComplete:a,custom:c,presenceAffectsLayout:d,mode:h,anchorX:p}=e,m=(0,o.M)(f),x=(0,i.useId)(),g=(0,i.useCallback)(e=>{for(let t of(m.set(e,!0),m.values()))if(!t)return;a&&a()},[m,a]),E=(0,i.useMemo)(()=>({id:x,initial:n,isPresent:s,custom:c,onExitComplete:g,register:e=>(m.set(e,!1),()=>m.delete(e))}),d?[Math.random(),g]:[s,g]);return(0,i.useMemo)(()=>{m.forEach((e,t)=>m.set(t,!1))},[s]),i.useEffect(()=>{s||m.size||!a||a()},[s]),"popLayout"===h&&(t=(0,r.jsx)(u,{isPresent:s,anchorX:p,children:t})),(0,r.jsx)(l.t.Provider,{value:E,children:t})};function f(){return new Map}var h=n(5087);let p=e=>e.key||"";function m(e){let t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}var x=n(5403);let g=e=>{let{children:t,custom:n,initial:l=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:u="sync",propagate:f=!1,anchorX:g="left"}=e,[E,v]=(0,h.xQ)(f),P=(0,i.useMemo)(()=>m(t),[t]),j=f&&!E?[]:P.map(p),w=(0,i.useRef)(!0),y=(0,i.useRef)(P),C=(0,o.M)(()=>new Map),[M,R]=(0,i.useState)(P),[b,k]=(0,i.useState)(P);(0,x.E)(()=>{w.current=!1,y.current=P;for(let e=0;e<b.length;e++){let t=p(b[e]);j.includes(t)?C.delete(t):!0!==C.get(t)&&C.set(t,!1)}},[b,j.length,j.join("-")]);let N=[];if(P!==M){let e=[...P];for(let t=0;t<b.length;t++){let n=b[t],r=p(n);j.includes(r)||(e.splice(t,0,n),N.push(n))}return"wait"===u&&N.length&&(e=N),k(m(e)),R(P),null}let{forceRender:_}=(0,i.useContext)(s.L);return(0,r.jsx)(r.Fragment,{children:b.map(e=>{let t=p(e),i=(!f||!!E)&&(P===b||j.includes(t));return(0,r.jsx)(d,{isPresent:i,initial:(!w.current||!!l)&&void 0,custom:n,presenceAffectsLayout:c,mode:u,onExitComplete:i?void 0:()=>{if(!C.has(t))return;C.set(t,!0);let e=!0;C.forEach(t=>{t||(e=!1)}),e&&(null==_||_(),k(y.current),f&&(null==v||v()),a&&a())},anchorX:g,children:e},t)})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[49,441,517,358],()=>t(7591)),_N_E=e.O()}]);