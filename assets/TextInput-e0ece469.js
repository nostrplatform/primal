var f=Object.defineProperty;var v=(e,s)=>f(e,"name",{value:s,configurable:!0});import{j as i,c as a,S as o,l as d,m as _,s as w,t as $}from"./index-64dc6460.js";import{T as l}from"./JFO5B7NF-4a51a11a.js";const M="_container_1w6m9_1",b="_noExtra_1w6m9_7",x="_root_1w6m9_10",y="_label_1w6m9_16",C="_input_1w6m9_22",S="_description_1w6m9_51",E="_errorMessage_1w6m9_57",A="_successMessage_1w6m9_64",T="_inputWrapper_1w6m9_71",W="_inputAfter_1w6m9_88",r={container:M,noExtra:b,root:x,label:y,input:C,description:S,errorMessage:E,successMessage:A,inputWrapper:T,inputAfter:W},D=$("<div><div>"),h=$("<div>"),j=v(e=>(()=>{const s=h();return i(s,a(l,{get class(){return r.root},get value(){return e.value},get onChange(){return e.onChange},get validationState(){return e.validationState},get children(){return[a(o,{get when(){return e.label},get children(){return a(l.Label,{get class(){return r.label},get children(){return e.label}})}}),(()=>{const t=D(),u=t.firstChild;return i(t,()=>e.icon,u),i(t,a(l.Input,{ref(n){const c=e.ref;typeof c=="function"?c(n):e.ref=n},get class(){return`${r.input} ${e.inputClass||""}`},get readOnly(){return e.readonly},get type(){return e.type||"search"},get name(){return e.name||"searchTerm"},get autocomplete(){return e.autocomplete||"off"},get onKeyUp(){return e.onKeyUp},get placeholder(){return e.placeholder}}),u),i(u,()=>e.children),d(n=>{const c=r.inputWrapper,g=e.validationState,m=r.inputAfter;return c!==n._v$&&_(t,n._v$=c),g!==n._v$2&&w(t,"data-validation",n._v$2=g),m!==n._v$3&&_(u,n._v$3=m),n},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})(),a(o,{get when(){return e.description},get children(){return a(l.Description,{get class(){return`${r.description} ${e.descriptionClass||""}`},get children(){return e.description}})}}),a(o,{get when(){return e.validationState==="valid"&&e.successMessage&&e.successMessage.length>0},get children(){return a(l.Description,{get class(){return`${r.successMessage} ${e.successClass||""}`},get children(){return e.successMessage}})}}),a(o,{get when(){return e.validationState==="invalid"},get children(){const t=h();return i(t,()=>e.errorMessage),d(()=>_(t,`${r.errorMessage} ${e.errorClass||""}`)),t}})]}})),d(()=>_(s,`${r.container} ${e.noExtraSpace?r.noExtra:""}`)),s})(),"TextInput");export{j as T};
//# sourceMappingURL=TextInput-e0ece469.js.map
