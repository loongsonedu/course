import{r as i,j as o,S as P,i as O,s as z,a as A,R as V,b as U,c as d,F as I,M as q,D as G,d as f,I as F,B as M,m as j,e as H,L as K,u as T,f as R,g as $,h as Q,k as W,O as Y,l as J,n as Z,o as X}from"./vendor.e4257099.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();var w=(e=>(e.STUDENT="1",e.TEACHER="2",e.VISITOR="3",e.TUTOR="4",e.ADMIN="5",e.PARENT="6",e))(w||{});const ee="https://ssl.cdn.maodouketang.com/Fn2y9zZHL6Cp7tLDsUq5b1kF7S88",b=btoa("rcore-user-info"),Re={[w.STUDENT]:"student",[w.TEACHER]:"teacher",[w.TUTOR]:"ta",[w.ADMIN]:"admin",[w.VISITOR]:"visitor",[w.PARENT]:"parent"},te=(e,t)=>{switch(t.type){case"LOGIN":return{...e,currentUser:t.payload};case"LOGOUT":return{...e,currentUser:void 0};case"UPDATE_MY_COURSES":return{...e,myRegisters:t.payload};case"UPDATE_LOGIN_DIALOG_VISIBLE":return{...e,loginDialogVisible:t.payload};default:throw new Error(`[count-context] Unhandled action type: ${t.type}`)}},v={currentUser:{phone:localStorage.getItem(b)},myRegisters:[],loginDialogVisible:!1},oe=()=>v,S=i.exports.createContext({state:v,dispatch:oe});function ne(e){const[t,s]=i.exports.useReducer(te,v);return o(S.Provider,{value:{state:t,dispatch:s},...e})}const y=()=>{const e=i.exports.useContext(S);if(e===void 0)throw new Error("useCount must be used with a CountProvider");return e};const se=e=>o("div",{className:"loading-container",children:o(P,{tip:"\u6570\u636E\u52A0\u8F7D\u4E2D...",size:"small",...e})}),re="modulepreload",ae=function(e){return"/course/"+e},L={},C=function(t,s,a){return!s||s.length===0?t():Promise.all(s.map(n=>{if(n=ae(n),n in L)return;L[n]=!0;const r=n.endsWith(".css"),u=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${u}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":re,r||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),r)return new Promise((h,l)=>{c.addEventListener("load",h),c.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};const ie=(e,t)=>{if(O(t[0]))return z(t,s=>{const[a,n]=A(s);return e>=a&&e<=n});{const[s,a]=A(t);return e>=s&&e<=a}},le=(e,t,s)=>{let a=~~(Math.random()*(e-t+1)+t);if(s)for(;ie(a,s);)a=~~(Math.random()*(e-t+1)+t);return a},g=(e,t,s,a)=>{let n=[];for(let r=0;r<s;r++)n=n.concat(le(e,t,a));return n},x=4,ce=e=>{const[t,s,a]=e;return`rgb(${t}, ${s}, ${a})`},B=()=>({nums:g(122,48,x,[[58,64],[91,96]]),rotate:g(50,-50,x),fontSize:g(12,20,x),color:[g(100,255,3),g(100,255,3),g(100,255,3),g(100,255,3)]}),ue=i.exports.forwardRef((e,t)=>{const[s,a]=i.exports.useState(B());return i.exports.useImperativeHandle(t,()=>({getCodes:()=>s.nums,getCodesAsString:n=>{const r=s.nums.map(u=>String.fromCharCode(u)).join("");return n?r.toLowerCase():r}}),[s]),o("div",{className:"verification-code-box",onClick:()=>a(B()),children:s.nums.map((n,r)=>o("span",{style:{color:ce(s.color[r]),fontSize:s.fontSize[r],transform:`rotate(${s.rotate[r]}deg)`},children:String.fromCharCode(n)},r))})}),k=V.forwardRef((e,t)=>{const{children:s,symbol:a,className:n="",...r}=e;return o("svg",{...r,className:`icon ${n}`,"aria-hidden":"true",ref:t,children:o("use",{xlinkHref:`#${a}`})})}),de="https://admin.maodouketang.com:8443",m=U.create({baseURL:de});m.interceptors.response.use(function(e){return e.data},function(e){return Promise.reject(e)});m.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)});const p=466,N=2e3;async function Le(){return(await m("/seller/api/homepages",{params:{"clientId.equals":p}}))[0]}async function Be(e){const t=e?`/seller/api/coursesget/getAllCoursesByConditionsWithTotal?page=0&size=18&clientId=${p}&tag=hot&isDelete=1&sort=courseIndex,asc`:`/seller/api/coursesget/getAllCoursesByConditionsWithTotal?page=0&size=100&isDelete=1&clientId=${p}&sort=courseIndex,asc`;return await m(t)}async function Te(e,t=0){return await m("/seller/api/students/getAllCourseByStudentWithTotal",{params:{page:t,phone:e,size:20,sort:"id,desc"}})}async function Se(e){return(await m("/seller/api/courses",{params:{"clientId.equals":p,"courseId.equals":e}}))[0]}async function Ne(){return await m(`/seller/api/teachers/getAllTeachersByConditionsWithTotal?page=0&size=6&clientId=${p}`)}async function _e(e){return await m("/seller/api/students",{params:{"clientId.equals":p,"courseId.equals":e,size:N}})}async function De(e){return await m("/seller/api/course-classes",{params:{"clientId.equals":p,"courseId.equals":e,size:N,sort:"startAt,desc"}})}async function Pe(e){return await m("/seller/api/students",{method:"POST",data:e})}async function me(e){return await m("/seller/api/students",{params:{"clientId.equals":p,"phone.equals":e}})}async function Oe(e){const{roomId:t,startTime:s,endTime:a}=e;return await m("/analysis/api/room-actions/getRoomActionsWithTotalNumByConditionsTime",{params:{roomId:t,startTime:new Date(s).toJSON(),endTime:new Date(a).toJSON(),clientId:p,page:0,size:200,actionType:"CHAT"}})}const pe=()=>{const{state:{currentUser:e},dispatch:t}=y(),s=i.exports.useCallback(async()=>{if(e!=null&&e.phone){const a=await me(e==null?void 0:e.phone);t({type:"UPDATE_MY_COURSES",payload:a})}},[e==null?void 0:e.phone]);i.exports.useEffect(()=>{s()},[s])};function he(){const e=navigator.userAgent||navigator.vendor||window.opera;return{mobile:()=>/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}}const ge=()=>{const[e,t]=i.exports.useState();return i.exports.useEffect(()=>{const s=he();t(s)},[]),e},_=e=>{const[t,s]=i.exports.useState(!1),[a,n]=i.exports.useState(),{state:{currentUser:r},dispatch:u}=y(),c=l=>{s(!0),n(l),u({type:"LOGIN",payload:{phone:l}})},h=i.exports.useCallback(()=>{const l=localStorage.getItem(b);l&&c(l)},[]);return i.exports.useEffect(()=>{h()},[h]),i.exports.useEffect(()=>{r!=null&&r.phone?(s(!0),n(r.phone)):t&&(s(!1),n(void 0))},[t,r==null?void 0:r.phone]),e?[t,a]:[t]},we=()=>{const{dispatch:e}=y();return i.exports.useCallback(()=>{localStorage.removeItem(b),e({type:"LOGOUT"})},[])},fe=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[0-9])\d{8}$/,be=e=>{const t=i.exports.useRef(),[s,a]=i.exports.useState(!0),[n]=f.useForm();return d(f,{form:n,className:"normal-form",onFinish:u=>{var c;u.code.length===x&&u.code.toLowerCase()===((c=t.current)==null?void 0:c.getCodesAsString(!0))?e.onSubmit(u.phone):a(!1)},autoComplete:"off",size:"large",children:[o("h3",{children:"\u8BF7\u4F7F\u7528\u624B\u673A\u53F7\u767B\u5F55"}),o(f.Item,{name:"phone",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:fe,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u624B\u673A\u53F7"}],children:o(F,{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"})}),o(f.Item,{name:"code",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}],help:s?void 0:"\u9A8C\u8BC1\u7801\u8F93\u5165\u9519\u8BEF",validateStatus:s?void 0:"error",children:o(F,{placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",addonAfter:o(ue,{ref:t})})}),o(f.Item,{children:o(M,{style:{width:"100%"},type:"primary",htmlType:"submit",children:"\u767B\u5F55"})}),d("span",{children:["\u767B\u5F55\u5373\u4EE3\u8868\u9605\u8BFB\u5E76\u540C\u610F ",o("span",{style:{color:"#3db477"},children:"\u300A\u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56\u300B"})]})]})},D=({isMobile:e})=>{const{state:{currentUser:t,loginDialogVisible:s},dispatch:a}=y();_();const n=l=>{a({type:"UPDATE_LOGIN_DIALOG_VISIBLE",payload:l})},r=l=>{a({type:"LOGIN",payload:{phone:l}})},u=()=>{a({type:"LOGOUT"})},c=l=>{localStorage.setItem(b,l),j.success("\u767B\u5F55\u6210\u529F\uFF0C\u6B22\u8FCE\u56DE\u6765!"),n(!1),r(l)};return t!=null&&t.phone?o(G,{overlayClassName:"user-dropdown-menus",overlay:o(H,{onClick:({key:l})=>{l==="logout"&&(localStorage.removeItem(b),u())},items:[{key:"myCourse",label:o(K,{to:"/myCourse",children:"\u6211\u7684\u8BFE\u7A0B"})},{key:"logout",label:o("span",{children:"\u9000\u51FA\u767B\u5F55"})}]}),placement:"bottomRight",arrow:!0,children:e?o(k,{symbol:"icon-user"}):d("span",{className:"user-info not-link",children:[t.phone,o("img",{width:30,src:ee,alt:"avatar"})]})}):d(I,{children:[e?o(k,{symbol:"icon-user",onClick:()=>n(!0)}):o("span",{className:"nav-link",onClick:()=>n(!0),children:"\u767B\u5F55"}),o(q,{width:350,open:s,footer:null,onCancel:()=>n(!1),maskClosable:!1,children:o(be,{onSubmit:c})})]})},xe=({isMobile:e})=>{const t=T();return o("header",{className:"main-header",children:d("div",{className:"header-content content",children:[d("a",{href:"/homepage/",children:[o("img",{src:"https://ssl.cdn.maodouketang.com/FsELfTn2KhwjVxKpABQGhyoR-IbH",alt:"logo"}),o("span",{className:"action-item",children:"\u793E\u533A"})]}),d("span",{onClick:()=>t("//"),children:[o(k,{symbol:"icon-home"}),"\u9996\u9875"]}),d("span",{children:[o(D,{isMobile:e}),"\u6211\u7684"]})]})})},ye=()=>o("footer",{children:d("div",{className:"content",children:[d("div",{className:"footer-info",children:[d("section",{children:[o("div",{className:"sub-title",children:"\u9F99\u82AF\u76F4\u64AD\u8BFE\u5802"}),o("div",{className:"sub-items",children:o("span",{children:"\u4FC3\u8FDB\u9F99\u82AF\u5F00\u6E90\u6280\u672F\u7684\u6559\u5B66\u3001\u7814\u7A76\u4E0E\u4EA7\u4E1A\u7684\u53D1\u5C55"})})]}),d("section",{children:[o("div",{className:"sub-title",children:"\u8D44\u6E90\u94FE\u63A5"}),o("div",{className:"sub-items",children:R([{text:"\u4E0B\u8F7D\u4E2D\u5FC3",link:"https://www.loongson.cn/download/index"},{text:"\u9F99\u82AF\u5B9E\u9A8C\u5BA4",link:"https://www.loongson.cn/application/list?id=38"},{text:"\u9F99\u82AF\u5F00\u6E90\u793E\u533A",link:"http://www.loongnix.cn/zh/"}],({text:e,link:t})=>o("div",{children:o("a",{href:t,children:e})},t))})]}),d("section",{children:[o("div",{className:"sub-title",children:"\u8054\u7CFB\u6211\u4EEC"}),o("div",{className:"sub-items",children:R([{label:"\u8BFE\u7A0B\u54A8\u8BE2",text:"13691584139"},{label:"\u5BA2\u670D\u70ED\u7EBF",text:"010-62546668"},{label:"\u5730\u5740",text:"\u5317\u4EAC\u5E02\u6D77\u6DC0\u533A\u5730\u9526\u8DEF7\u53F7\u96624\u53F7\u697C1\u5C42101"}],({label:e,text:t})=>d("div",{children:[d("span",{children:[e,"\uFF1A"]}),t]},e))})]})]}),o("a",{className:"record-number",href:"https://beian.miit.gov.cn/#/Integrated/index",children:"\u5317\u4EAC\u6E05\u534E\u5927\u5B66\xB7\u4EACICP\u590716045052\u53F7-11"})]})});const Ce=()=>{const e=$(),t=T(),s=e.pathname==="/",a=!0,[n,r]=_(a),u=we(),c=ge(),h=!!(c!=null&&c.mobile());pe();const l=o("div",{className:"custom-course-nav",children:o("span",{className:"nav-common-link nav-link",onClick:()=>t("/"),children:"\u8BFE\u7A0B\u57F9\u8BAD"})});let E={customRender:d(I,{children:[l,o(D,{})]})};return n&&(E={customRender:l,userInfo:{phone:r},dropMenu:[{key:"myCourse",title:"\u6211\u7684\u8BFE\u7A0B",onClick(){t("/myCourse")}},{key:"logout",title:"\u9000\u51FA\u767B\u5F55",onClick(){u()}}]}),o(Q,{headerProps:{title:"\u9F99\u82AF\u76F4\u64AD\u8BFE\u5802",logo:"https://ssl.cdn.maodouketang.com/FsELfTn2KhwjVxKpABQGhyoR-IbH",extra:E},className:`container ${h?"container-mobile":""}`,children:d(I,{children:[h&&o(xe,{isMobile:!0}),o(W,{children:o(Y,{})}),s&&o(ye,{})]})})},Ie=i.exports.lazy(()=>C(()=>import("./index.eaeb09c6.js"),["assets/index.eaeb09c6.js","assets/index.e0d76449.css","assets/vendor.e4257099.js","assets/vendor.324c6f0d.css","assets/index.ef1a33a4.js","assets/index.b2d9a3f8.css"])),ke=i.exports.lazy(()=>C(()=>import("./index.2d384bd3.js"),["assets/index.2d384bd3.js","assets/index.bbdb3a23.css","assets/vendor.e4257099.js","assets/vendor.324c6f0d.css"])),ve=i.exports.lazy(()=>C(()=>import("./index.02a199cd.js"),["assets/index.02a199cd.js","assets/index.7ade5cd7.css","assets/vendor.e4257099.js","assets/vendor.324c6f0d.css","assets/index.ef1a33a4.js","assets/index.b2d9a3f8.css"])),Ee=i.exports.lazy(()=>C(()=>import("./index.de8bfb6e.js"),["assets/index.de8bfb6e.js","assets/index.45bb8373.css","assets/vendor.e4257099.js","assets/vendor.324c6f0d.css"])),Ae=J([{path:"/",element:o(Ce,{}),children:[{index:!0,element:o(Ie,{})},{path:"/:id",element:o(ke,{})},{path:"/:id/replay/:replayId",element:o(Ee,{})},{path:"myCourse",element:o(ve,{})}]}],{basename:"/course"});Z.createRoot(document.getElementById("root")).render(o(ne,{children:o(i.exports.Suspense,{fallback:o("div",{style:{display:"flex",width:"100vw",height:"100vh"},children:o(se,{size:"large",tip:"\u9875\u9762\u52A0\u8F7D\u4E2D...",delay:500})}),children:o(X,{router:Ae})})}));export{de as B,w as E,k as I,se as L,Re as R,b as U,Ne as a,Be as b,ge as c,Se as d,_e as e,De as f,Le as g,Te as h,Oe as i,Pe as r,y as u};
