var U=Object.defineProperty;var s=(e,n)=>U(e,"name",{value:n,configurable:!0});import{dp as F,c as o,dq as C,C as y,S as W,E as _,W as M,dr as z,d as B,dD as J,ds as Q,dt as V,h as X,l as Y,m as Z,H as ee,M as O,t as te}from"./index-64dc6460.js";import{u as w,F as ne,a as re,b as oe,c as ae,d as se,e as ce,f as ie,g as le,h as de}from"./QJIB6BDF-1d7b1e44.js";import{c as ue}from"./VI7QYH27-fb7b5f5a.js";import{_ as he,P as R,m as E,a as L}from"./5WXHJDCZ-8b9b8e69.js";import{m as D,v as ge,h as fe,j as p,E as Ce,e as me}from"./index-b4296c5e.js";import{s as be}from"./index-c76cfba2.js";import{s as I}from"./Checkbox.module-81b9bd85.js";var ke={};he(ke,{Checkbox:()=>k,Control:()=>K,Description:()=>$,ErrorMessage:()=>N,Indicator:()=>H,Input:()=>T,Label:()=>j,Root:()=>A});var q=Q();function x(){const e=V(q);if(e===void 0)throw new Error("[kobalte]: `useCheckboxContext` must be used within a `Checkbox` component");return e}s(x,"useCheckboxContext");function K(e){const n=w(),t=x(),r=D({id:t.generateId("control")},e),[a,i]=F(r,["onClick","onKeyDown"]);return o(R,C({as:"div",onClick:s(l=>{p(l,a.onClick),t.toggle(),t.inputRef()?.focus()},"onClick"),onKeyDown:s(l=>{p(l,a.onKeyDown),l.key===Ce.Space&&(t.toggle(),t.inputRef()?.focus())},"onKeyDown")},()=>n.dataset(),()=>t.dataset(),i))}s(K,"CheckboxControl");function $(e){const n=x();return o(ne,C(()=>n.dataset(),e))}s($,"CheckboxDescription");function N(e){const n=x();return o(re,C(()=>n.dataset(),e))}s(N,"CheckboxErrorMessage");function H(e){const n=w(),t=x(),[r,a]=y(),i=D({id:t.generateId("indicator")},e),[h,m]=F(i,["ref","forceMount"]),{present:l}=be({show:()=>h.forceMount||t.indeterminate()||t.checked(),element:()=>r()??null});return o(W,{get when(){return l()},get children(){return o(R,C({as:"div",ref(v){const g=E(a,h.ref);typeof g=="function"&&g(v)}},()=>n.dataset(),()=>t.dataset(),m))}})}s(H,"CheckboxIndicator");function T(e){let n;const t=w(),r=x(),a=D({id:r.generateId("input")},e),[i,h,m]=F(a,["ref","style","onChange","onFocus","onBlur"],oe),{fieldProps:l}=ae(h),[v,g]=y(!1),b=s(c=>{if(p(c,i.onChange),c.stopPropagation(),!v()){const u=c.target;r.setIsChecked(u.checked),u.checked=r.checked()}g(!1)},"onChange"),f=s(c=>{p(c,i.onFocus),r.setIsFocused(!0)},"onFocus"),P=s(c=>{p(c,i.onBlur),r.setIsFocused(!1)},"onBlur");return _(M([()=>r.checked(),()=>r.value()],()=>{g(!0),n?.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),n?.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))},{defer:!0})),_(M([()=>n,()=>r.indeterminate(),()=>r.checked()],([c,u])=>{c&&(c.indeterminate=u)})),o(R,C({as:"input",ref(c){const u=E(d=>{r.setInputRef(d),n=d},i.ref);typeof u=="function"&&u(c)},type:"checkbox",get id(){return l.id()},get name(){return t.name()},get value(){return r.value()},get checked(){return r.checked()},get required(){return t.isRequired()},get disabled(){return t.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return{...ge,...i.style}},get"aria-label"(){return l.ariaLabel()},get"aria-labelledby"(){return l.ariaLabelledBy()},get"aria-describedby"(){return l.ariaDescribedBy()},get"aria-invalid"(){return t.validationState()==="invalid"||void 0},get"aria-required"(){return t.isRequired()},get"aria-disabled"(){return t.isDisabled()},get"aria-readonly"(){return t.isReadOnly()},onChange:b,onFocus:f,onBlur:P},()=>t.dataset(),()=>r.dataset(),m))}s(T,"CheckboxInput");function j(e){const n=x();return o(se,C(()=>n.dataset(),e))}s(j,"CheckboxLabel");function A(e){let n;const t=`checkbox-${z()}`,r=D({value:"on",id:t},e),[a,i,h]=F(r,["ref","children","value","checked","defaultChecked","indeterminate","onChange","onPointerDown"],ce),[m,l]=y(),[v,g]=y(!1),{formControlContext:b}=ie(i),f=ue({isSelected:()=>a.checked,defaultIsSelected:()=>a.defaultChecked,onSelectedChange:d=>a.onChange?.(d),isDisabled:()=>b.isDisabled(),isReadOnly:()=>b.isReadOnly()});le(()=>n,()=>f.setIsSelected(a.defaultChecked??!1));const P=s(d=>{p(d,a.onPointerDown),v()&&d.preventDefault()},"onPointerDown"),c=B(()=>({"data-checked":f.isSelected()?"":void 0,"data-indeterminate":a.indeterminate?"":void 0})),u={value:()=>a.value,dataset:c,checked:()=>f.isSelected(),indeterminate:()=>a.indeterminate??!1,inputRef:m,generateId:me(()=>L(i.id)),toggle:()=>f.toggle(),setIsChecked:d=>f.setIsSelected(d),setIsFocused:g,setInputRef:l};return o(de.Provider,{value:b,get children(){return o(q.Provider,{value:u,get children(){return o(R,C({as:"div",ref(d){const S=E(G=>n=G,a.ref);typeof S=="function"&&S(d)},role:"group",get id(){return L(i.id)},onPointerDown:P},()=>b.dataset(),c,h,{get children(){return o(pe,{state:u,get children(){return a.children}})}}))}})}})}s(A,"CheckboxRoot");function pe(e){const n=J(()=>{const t=e.children;return fe(t)?t(e.state):t});return B(n)}s(pe,"CheckboxRootChild");var k=Object.assign(A,{Control:K,Description:$,ErrorMessage:N,Indicator:H,Input:T,Label:j});const xe=te("<div>"),ve=s(e=>o(k,{get class(){return I.checkbox2},get checked(){return e.checked},get onChange(){return e.onChange},get children(){return[o(k.Input,{get class(){return I.input}}),o(k.Control,{get class(){return I.control},get children(){return o(k.Indicator,{get children(){const n=xe();return Y(()=>Z(n,I.checkIcon)),n}})}}),o(k.Label,{get class(){return I.label},get children(){return o(ee,{get children(){return[o(O,{get when(){return e.children},get children(){return e.children}}),o(O,{get when(){return e.label},get children(){return e.label}})]}})}})]}}),"Checkbox2"),Se=X(ve);export{Se as C};
//# sourceMappingURL=CheckBox2-65e1c04f.js.map
