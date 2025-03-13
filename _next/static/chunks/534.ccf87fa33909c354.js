"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[534],{7534:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var n=a(5155),r=a(8803),s=a.n(r),o=a(2115),i=a(5565),l=a(337),c=a(7478),m=a(4521),x=a(9693);let p="".concat("/portfolio","/model/scene.gltf"),d={value:0},f={value:0},u=()=>{let[e,t]=(0,o.useState)(!1),{scene:a}=(0,x.p)(p),r=(0,o.useRef)(null),{gl:s}=(0,c.A)(),i=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{i.current=e.isIntersecting})},{threshold:.1}),t=s.domElement.parentElement;return t&&e.observe(t),()=>{t&&e.unobserve(t),e.disconnect()}},[s]),(0,o.useEffect)(()=>{if(a){t(!0),console.log("모델 로드됨:",a);let e=a.clone(),n=new l.NRn().setFromObject(e),s=n.getCenter(new l.Pq0);e.position.set(-s.x,-s.y+.5,-s.z);let o=n.getSize(new l.Pq0),i=2.5/Math.max(o.x,o.y,o.z);if(e.scale.set(i,i,i),e.rotation.x=-10*Math.PI/180,r.current){for(;r.current.children.length>0;)r.current.remove(r.current.children[0]);r.current.add(e),r.current.position.z=0}}},[a]),(0,c.C)(()=>{if(r.current&&i.current){let e=f.value-d.value;d.value+=1*e,r.current.rotation.y+=d.value,1e-4>Math.abs(d.value)&&(d.value=0)}}),(0,n.jsx)("group",{ref:r,position:[0,0,0],children:!e&&(0,n.jsxs)("mesh",{children:[(0,n.jsx)("boxGeometry",{args:[1,1,1]}),(0,n.jsx)("meshStandardMaterial",{color:"red"})]})})};x.p.preload(p);let h=()=>{let e=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let e=e=>{let t=e.deltaY>0?1:-1;f.value=.1*t};return window.addEventListener("wheel",e,{passive:!0}),()=>{window.removeEventListener("wheel",e)}},[]),(0,n.jsx)("div",{ref:e,className:"w-[280px] h-[512px] overflow-hidden",children:(0,n.jsxs)(m.Hl,{camera:{position:[0,0,5],fov:50,near:.1,far:1e3},gl:{alpha:!0,antialias:!0,preserveDrawingBuffer:!0},onCreated:e=>{let{gl:t,camera:a}=e;console.log("Canvas 생성됨:",{gl:t,camera:a}),t.domElement.style.touchAction="none",a.position.set(0,0,5),a.lookAt(0,0,0),a.updateProjectionMatrix()},className:"w-full h-full",children:[(0,n.jsx)("ambientLight",{intensity:1.5}),(0,n.jsx)("pointLight",{position:[10,10,10],intensity:2}),(0,n.jsx)("pointLight",{position:[-10,-10,-10],intensity:1}),(0,n.jsx)("pointLight",{position:[0,5,0],intensity:1.5}),(0,n.jsx)("pointLight",{position:[0,0,5],intensity:1.5}),(0,n.jsx)("hemisphereLight",{intensity:1}),(0,n.jsx)(u,{})]})})},g=JSON.parse('{"ko":{"greeting":"입니다"},"en":{"greeting":"I\'m "}}');var b=a(9193),y=a(2873);function j(){let e=(0,y.A)(e=>e.language),t=g[e],a=b[e],[r,l]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{try{document.createElement("model-viewer")}catch(e){console.error("ModelViewer is not supported:",e),l(!1)}},[]),(0,n.jsxs)("div",{className:"jsx-4830b256c3aa7588 relative flex flex-col items-center justify-center",children:[(0,n.jsxs)("div",{className:"jsx-4830b256c3aa7588 flex min-h-screen w-screen flex flex-row items-center justify-center",children:["ko"===e?(0,n.jsxs)("p",{className:"jsx-4830b256c3aa7588 text-6xl font-bold text-left mb-10",children:[(0,n.jsx)("strong",{className:"jsx-4830b256c3aa7588 bg-gradient-to-r from-[#977DFF] via-[#0033FF] to-[#0600AB] bg-[linear-gradient(-81deg,#977DFF_0%,#0033FF_80%,#0600AB_100%)] bg-clip-text text-transparent",children:a.about}),(0,n.jsx)("br",{className:"jsx-4830b256c3aa7588"}),(0,n.jsxs)("strong",{className:"jsx-4830b256c3aa7588",children:[a.role,t.greeting,"."]})]}):(0,n.jsxs)("p",{className:"jsx-4830b256c3aa7588 text-6xl font-bold text-left mb-10",children:[(0,n.jsxs)("strong",{className:"jsx-4830b256c3aa7588",children:[t.greeting,a.role]}),(0,n.jsx)("br",{className:"jsx-4830b256c3aa7588"}),(0,n.jsxs)("strong",{className:"jsx-4830b256c3aa7588 bg-gradient-to-r from-[#977DFF] via-[#0033FF] to-[#0600AB] bg-[linear-gradient(-81deg,#977DFF_0%,#0033FF_80%,#0600AB_100%)] bg-clip-text text-transparent",children:[a.about,"."]})]}),r?(0,n.jsx)(h,{}):(0,n.jsx)(i.default,{src:"".concat("/portfolio","/hero.png"),alt:"hero",width:288,height:288,className:"object-cover"})]}),(0,n.jsxs)("div",{className:"jsx-4830b256c3aa7588 absolute bottom-0 flex flex-col items-center",children:[(0,n.jsx)("p",{className:"jsx-4830b256c3aa7588 text-lg text-black dark:text-white mb-2",children:"Scroll"}),(0,n.jsx)("div",{className:"jsx-4830b256c3aa7588 w-[1px] h-[70px] relative overflow-hidden",children:(0,n.jsx)("div",{className:"jsx-4830b256c3aa7588 absolute top-0 left-0 w-full h-full animate-scroll"})})]}),(0,n.jsx)(s(),{id:"4830b256c3aa7588",children:"@-webkit-keyframes scrollAnimation{0%{-webkit-transform:translatey(-70px);transform:translatey(-70px);opacity:1}100%{-webkit-transform:translatey(70px);transform:translatey(70px);opacity:1}}@-moz-keyframes scrollAnimation{0%{-moz-transform:translatey(-70px);transform:translatey(-70px);opacity:1}100%{-moz-transform:translatey(70px);transform:translatey(70px);opacity:1}}@-o-keyframes scrollAnimation{0%{-o-transform:translatey(-70px);transform:translatey(-70px);opacity:1}100%{-o-transform:translatey(70px);transform:translatey(70px);opacity:1}}@keyframes scrollAnimation{0%{-webkit-transform:translatey(-70px);-moz-transform:translatey(-70px);-o-transform:translatey(-70px);transform:translatey(-70px);opacity:1}100%{-webkit-transform:translatey(70px);-moz-transform:translatey(70px);-o-transform:translatey(70px);transform:translatey(70px);opacity:1}}.animate-scroll.jsx-4830b256c3aa7588{height:60px;width:100%;background:black;-webkit-animation:scrollAnimation 1.5s infinite linear;-moz-animation:scrollAnimation 1.5s infinite linear;-o-animation:scrollAnimation 1.5s infinite linear;animation:scrollAnimation 1.5s infinite linear}.dark .animate-scroll.jsx-4830b256c3aa7588{background:white}"})]})}},2873:(e,t,a)=>{a.d(t,{A:()=>o,n:()=>s});var n=a(5532),r=a(709);let s=(0,n.v)()((0,r.Zr)(e=>({language:"ko",setLanguage:t=>e({language:t})}),{name:"language-storage"})),o=s},9193:e=>{e.exports=JSON.parse('{"contact":{"phone":"010-5598-8268","email":"0102262@gmail.com","blog":"https://aster-code.tistory.com/","github":"https://github.com/Sminp"},"skills":["React","JavaScript","TypeScript","Next.js","Zustand","Express","Styled Components","Tailwind CSS"],"ko":{"name":"박소민","role":"프론트엔드 개발자","about":"사람과 기술을 연결하는","intro":["사용자 경험을 고민하며 더 나은 UX/UI를 설계합니다.","원활한 커뮤니케이션으로 누구와도 협업할 수 있습니다.","문제를 빠르게 해결하고, 지속적으로 개선하며 성장합니다."],"education":[{"school":"서울과학기술대학교","degree":"학사","major":"컴퓨터공학","date":["2020.03","진행 중"]}]},"en":{"name":"Somin Park","role":"Frontend Developer","about":"who connects people and tech","intro":["I design better UX/UI by carefully considering the user experience.","I collaborate effectively with anyone through smooth communication.","I solve problems quickly and continuously improve to grow."],"education":[{"school":"Seoul University of Science and Technology","degree":"Bachelor","major":"Computer Science","date":["2020.03","진행 중"]}]}}')}}]);