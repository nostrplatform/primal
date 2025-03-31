var te=Object.defineProperty;var r=(n,t)=>te(n,"name",{value:t,configurable:!0});import{dp as v,c as s,dq as f,E as k,n as b,d as N,S as R,dI as ne,dr as oe,C as _,ds as re,dt as se,h as ie,j as P,l as S,m as w,t as ae}from"./index-64dc6460.js";import{c as ce,s as le,a as de,D as ue,b as ge}from"./index-a25c8160.js";import{a as j}from"./Buttons.module-e818c1ea.js";import{c as x}from"./JNCCF6MP-19ab5fd3.js";import{_ as _e,m as B,P as H}from"./5WXHJDCZ-8b9b8e69.js";import{m as O,j as F,o as ve,f as L,e as fe}from"./index-b4296c5e.js";import{s as $}from"./index-c76cfba2.js";var pe={};_e(pe,{CloseButton:()=>U,Content:()=>W,Description:()=>z,Dialog:()=>d,Overlay:()=>J,Portal:()=>K,Root:()=>Q,Title:()=>V,Trigger:()=>X});var G=re();function g(){const n=se(G);if(n===void 0)throw new Error("[kobalte]: `useDialogContext` must be used within a `Dialog` component");return n}r(g,"useDialogContext");function U(n){const t=g(),[e,i]=v(n,["aria-label","onClick"]);return s(j,f({get"aria-label"(){return e["aria-label"]||t.translations().dismiss},onClick:r(a=>{F(a,e.onClick),t.close()},"onClick")},i))}r(U,"DialogCloseButton");function W(n){let t;const e=g(),i=O({id:e.generateId("content")},n),[c,a]=v(i,["ref","onOpenAutoFocus","onCloseAutoFocus","onPointerDownOutside","onFocusOutside","onInteractOutside"]);let l=!1,p=!1;const q=r(o=>{c.onPointerDownOutside?.(o),e.modal()&&o.detail.isContextMenu&&o.preventDefault()},"onPointerDownOutside"),h=r(o=>{c.onFocusOutside?.(o),e.modal()&&o.preventDefault()},"onFocusOutside"),y=r(o=>{c.onInteractOutside?.(o),!e.modal()&&(o.defaultPrevented||(l=!0,o.detail.originalEvent.type==="pointerdown"&&(p=!0)),ve(e.triggerRef(),o.target)&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&p&&o.preventDefault())},"onInteractOutside"),m=r(o=>{c.onCloseAutoFocus?.(o),e.modal()?(o.preventDefault(),L(e.triggerRef())):(o.defaultPrevented||(l||L(e.triggerRef()),o.preventDefault()),l=!1,p=!1)},"onCloseAutoFocus");return ce({isDisabled:()=>!(e.isOpen()&&e.modal()),targets:()=>t?[t]:[]}),le({element:()=>t??null,enabled:()=>e.isOpen()&&e.preventScroll()}),de({trapFocus:()=>e.isOpen()&&e.modal(),onMountAutoFocus:c.onOpenAutoFocus,onUnmountAutoFocus:m},()=>t),k(()=>b(e.registerContentId(a.id))),s(R,{get when(){return e.contentPresent()},get children(){return s(ue,f({ref(o){const C=B(D=>{e.setContentRef(D),t=D},c.ref);typeof C=="function"&&C(o)},role:"dialog",tabIndex:-1,get disableOutsidePointerEvents(){return N(()=>!!e.modal())()&&e.isOpen()},get excludedElements(){return[e.triggerRef]},get"aria-labelledby"(){return e.titleId()},get"aria-describedby"(){return e.descriptionId()},get"data-expanded"(){return e.isOpen()?"":void 0},get"data-closed"(){return e.isOpen()?void 0:""},onPointerDownOutside:q,onFocusOutside:h,onInteractOutside:y,get onDismiss(){return e.close}},a))}})}r(W,"DialogContent");function z(n){const t=g(),e=O({id:t.generateId("description")},n),[i,c]=v(e,["id"]);return k(()=>b(t.registerDescriptionId(i.id))),s(H,f({as:"p",get id(){return i.id}},c))}r(z,"DialogDescription");function J(n){const t=g(),[e,i]=v(n,["ref","style","onPointerDown"]),c=r(a=>{F(a,e.onPointerDown),a.target===a.currentTarget&&a.preventDefault()},"onPointerDown");return s(R,{get when(){return t.overlayPresent()},get children(){return s(H,f({as:"div",ref(a){const l=B(t.setOverlayRef,e.ref);typeof l=="function"&&l(a)},get style(){return{"pointer-events":"auto",...e.style}},get"data-expanded"(){return t.isOpen()?"":void 0},get"data-closed"(){return t.isOpen()?void 0:""},onPointerDown:c},i))}})}r(J,"DialogOverlay");function K(n){const t=g();return s(R,{get when(){return t.contentPresent()||t.overlayPresent()},get children(){return s(ne,n)}})}r(K,"DialogPortal");var E={dismiss:"Dismiss"};function Q(n){const t=`dialog-${oe()}`,e=O({id:t,modal:!0,translations:E},n),[i,c]=_(),[a,l]=_(),[p,q]=_(),[h,y]=_(),[m,o]=_(),[C,D]=_(),I=ge({open:()=>e.open,defaultOpen:()=>e.defaultOpen,onOpenChange:ee=>e.onOpenChange?.(ee)}),A=r(()=>e.forceMount||I.isOpen(),"shouldMount"),{present:Y}=$({show:A,element:()=>h()??null}),{present:Z}=$({show:A,element:()=>m()??null}),M={translations:()=>e.translations??E,isOpen:I.isOpen,modal:()=>e.modal??!0,preventScroll:()=>e.preventScroll??M.modal(),contentId:i,titleId:a,descriptionId:p,triggerRef:C,overlayRef:h,setOverlayRef:y,contentRef:m,setContentRef:o,overlayPresent:Y,contentPresent:Z,close:I.close,toggle:I.toggle,setTriggerRef:D,generateId:fe(()=>e.id),registerContentId:x(c),registerTitleId:x(l),registerDescriptionId:x(q)};return s(G.Provider,{value:M,get children(){return e.children}})}r(Q,"DialogRoot");function V(n){const t=g(),e=O({id:t.generateId("title")},n),[i,c]=v(e,["id"]);return k(()=>b(t.registerTitleId(i.id))),s(H,f({as:"h2",get id(){return i.id}},c))}r(V,"DialogTitle");function X(n){const t=g(),[e,i]=v(n,["ref","onClick"]);return s(j,f({ref(a){const l=B(t.setTriggerRef,e.ref);typeof l=="function"&&l(a)},"aria-haspopup":"dialog",get"aria-expanded"(){return t.isOpen()},get"aria-controls"(){return N(()=>!!t.isOpen())()?t.contentId():void 0},get"data-expanded"(){return t.isOpen()?"":void 0},get"data-closed"(){return t.isOpen()?void 0:""},onClick:r(a=>{F(a,e.onClick),t.toggle()},"onClick")},i))}r(X,"DialogTrigger");var d=Object.assign(Q,{CloseButton:U,Content:W,Description:z,Overlay:J,Portal:K,Title:V,Trigger:X});const he="_excludeIcon_1uvq3_37",me="_chevronIcon_1uvq3_45",Ce="_checkIcon_1uvq3_53",De="_userSelector_1uvq3_61",Ie="_userList_1uvq3_64",Oe="_userPill_1uvq3_78",qe="_remove_1uvq3_89",ye="_dropdownMenuTrigger_1uvq3_106",Pe="_selctionLabel_1uvq3_119",Se="_dropdownMenuContent_1uvq3_129",we="_search_1uvq3_134",xe="_searchIcon_1uvq3_147",Te="_searchIconDark_1uvq3_181",ke="_searchHolder_1uvq3_189",be="_focused_1uvq3_197",Re="_searchSuggestions_1uvq3_200",Be="_hidden_1uvq3_206",He="_loadingOverlay_1uvq3_210",Fe="_advancedSearchSlider_1uvq3_232",Ae="_slider_1uvq3_238",Me="_track_1uvq3_241",Le="_fill_1uvq3_248",$e="_thumb_1uvq3_254",Ee="_shortInput_1uvq3_270",Ne="_dark_1uvq3_278",je="_input_1uvq3_281",Ge="_long_1uvq3_296",Ue="_dialogOverlay_1uvq3_303",We="_overlayHide_1uvq3_1",ze="_overlayShow_1uvq3_1",Je="_dialog_1uvq3_303",Ke="_dialogContent_1uvq3_323",Qe="_contentHide_1uvq3_1",Ve="_contentShow_1uvq3_1",Xe="_dialogHeader_1uvq3_332",Ye="_dialogCloseButton_1uvq3_338",Ze="_dialogTitle_1uvq3_360",et="_dialogDescription_1uvq3_367",tt="_selectBox_1uvq3_375",nt="_trigger_1uvq3_378",ot="_shortTrigger_1uvq3_399",rt="_selectContent_1uvq3_405",st="_selectItem_1uvq3_415",it="_searchCommand_1uvq3_445",at="_faintButton_1uvq3_463",u={excludeIcon:he,chevronIcon:me,checkIcon:Ce,userSelector:De,userList:Ie,userPill:Oe,remove:qe,dropdownMenuTrigger:ye,selctionLabel:Pe,dropdownMenuContent:Se,search:we,searchIcon:xe,searchIconDark:Te,searchHolder:ke,focused:be,searchSuggestions:Re,hidden:Be,loadingOverlay:He,advancedSearchSlider:Fe,slider:Ae,track:Me,fill:Le,thumb:$e,shortInput:Ee,dark:Ne,input:je,long:Ge,dialogOverlay:Ue,overlayHide:We,overlayShow:ze,dialog:Je,dialogContent:Ke,contentHide:Qe,contentShow:Ve,dialogHeader:Xe,dialogCloseButton:Ye,dialogTitle:Ze,dialogDescription:et,selectBox:tt,trigger:nt,shortTrigger:ot,selectContent:rt,selectItem:st,searchCommand:it,faintButton:at},T=ae("<div>"),ct=r(n=>s(d,{get open(){return n.open},get onOpenChange(){return n.setOpen},preventScroll:!1,get children(){return[s(d.Trigger,{get class(){return n.triggerClass},get children(){return n.triggerContent}}),s(d.Portal,{get children(){return[s(d.Overlay,{get class(){return u.dialogOverlay}}),(()=>{const t=T();return P(t,s(d.Content,{get class(){return u.dialogContent},get children(){return[(()=>{const e=T();return P(e,s(d.Title,{get class(){return u.dialogTitle},get children(){return n.title}}),null),P(e,s(d.CloseButton,{get class(){return u.dialogCloseButton},get children(){const i=T();return S(()=>w(i,u.excludeIcon)),i}}),null),S(()=>w(e,u.dialogHeader)),e})(),s(d.Description,{get class(){return u.dialogDescription},get children(){return n.children}})]}})),S(()=>w(t,u.dialog)),t})()]}})]}}),"AdvancedSearchDialog"),ht=ie(ct);export{ht as A,d as D,u as s};
//# sourceMappingURL=AdvancedSearchDialog-eff41eef.js.map
