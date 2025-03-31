var q=Object.defineProperty;var l=(a,e)=>q(a,"name",{value:e,configurable:!0});import{c as V,a as A}from"./SOM3K36D-40feb6ac.js";import{c as H,a as j,b as B}from"./RLGGFAYQ-2a48be09.js";import{u as $}from"./LR7LBJN3-a1aba763.js";import{s as X,c as Y}from"./index-c76cfba2.js";import{_ as G,P as T,m as k,a as L}from"./5WXHJDCZ-8b9b8e69.js";import{c as b,m as O,g as J,b as Q,f as Z}from"./index-b4296c5e.js";import{C,dp as S,E as I,W as D,n as ee,c as K,dq as w,S as te,o as oe,dr as ne,d as P,ds as ie,dt as re}from"./index-64dc6460.js";var M,se=(M=class{collection;direction;orientation;constructor(e,t,o){this.collection=e,this.direction=t,this.orientation=o}flipDirection(){return this.direction()==="rtl"&&this.orientation()==="horizontal"}getKeyLeftOf(e){if(this.flipDirection())return this.getNextKey(e);if(this.orientation()==="horizontal")return this.getPreviousKey(e)}getKeyRightOf(e){if(this.flipDirection())return this.getPreviousKey(e);if(this.orientation()==="horizontal")return this.getNextKey(e)}getKeyAbove(e){if(this.orientation()==="vertical")return this.getPreviousKey(e)}getKeyBelow(e){if(this.orientation()==="vertical")return this.getNextKey(e)}getFirstKey(){let e=this.collection().getFirstKey();return e==null?void 0:(this.collection().getItem(e)?.disabled&&(e=this.getNextKey(e)),e)}getLastKey(){let e=this.collection().getLastKey();return e==null?void 0:(this.collection().getItem(e)?.disabled&&(e=this.getPreviousKey(e)),e)}getNextKey(e){let t=e,o;do if(t=this.collection().getKeyAfter(t)??this.collection().getFirstKey(),t==null||(o=this.collection().getItem(t),o==null))return;while(o.disabled);return t}getPreviousKey(e){let t=e,o;do if(t=this.collection().getKeyBefore(t)??this.collection().getLastKey(),t==null||(o=this.collection().getItem(t),o==null))return;while(o.disabled);return t}},l(M,"TabsKeyboardDelegate"),M),ae={};G(ae,{Content:()=>W,Indicator:()=>_,List:()=>N,Root:()=>z,Tabs:()=>ce,Trigger:()=>R});var E=ie();function F(){const a=re(E);if(a===void 0)throw new Error("[kobalte]: `useTabsContext` must be used within a `Tabs` component");return a}l(F,"useTabsContext");function W(a){const[e,t]=C(),o=F(),[n,h]=S(a,["ref","id","value","forceMount"]),[d,c]=C(0),r=l(()=>n.id??o.generateContentId(n.value),"id"),s=l(()=>o.listState().selectedKey()===n.value,"isSelected"),{present:i}=X({show:()=>n.forceMount||s(),element:()=>e()??null});return I(D([()=>e(),()=>i()],([y,g])=>{if(y==null||!g)return;const v=l(()=>{const f=J(y,{tabbable:!0});c(f.nextNode()?void 0:0)},"updateTabIndex");v();const p=new MutationObserver(v);p.observe(y,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["tabindex","disabled"]}),ee(()=>{p.disconnect()})})),I(D([()=>n.value,r],([y,g])=>{o.contentIdsMap().set(y,g)})),K(te,{get when(){return i()},get children(){return K(T,w({as:"div",ref(y){const g=k(t,n.ref);typeof g=="function"&&g(y)},get id(){return r()},role:"tabpanel",get tabIndex(){return d()},get"aria-labelledby"(){return o.triggerIdsMap().get(n.value)},get"data-orientation"(){return o.orientation()},get"data-selected"(){return s()?"":void 0}},h))}})}l(W,"TabsContent");function _(a){const e=F(),[t,o]=S(a,["style"]),[n,h]=C({width:void 0,height:void 0}),{direction:d}=$(),c=l(()=>{const r=e.selectedTab();if(r==null)return;const s={transform:void 0,width:void 0,height:void 0},i=d()==="rtl"?-1*(r.offsetParent?.offsetWidth-r.offsetWidth-r.offsetLeft):r.offsetLeft;s.transform=e.orientation()==="vertical"?`translateY(${r.offsetTop}px)`:`translateX(${i}px)`,e.orientation()==="horizontal"?s.width=`${r.offsetWidth}px`:s.height=`${r.offsetHeight}px`,h(s)},"computeStyle");return oe(()=>{queueMicrotask(()=>{c()})}),I(D([e.selectedTab,e.orientation,d],()=>{c()},{defer:!0})),K(T,w({as:"div",role:"presentation",get style(){return{...n(),...t.style}},get"data-orientation"(){return e.orientation()}},o))}l(_,"TabsIndicator");function N(a){let e;const t=F(),[o,n]=S(a,["ref","onKeyDown","onMouseDown","onFocusIn","onFocusOut"]),{direction:h}=$(),d=new se(()=>t.listState().collection(),h,t.orientation),c=H({selectionManager:()=>t.listState().selectionManager(),keyboardDelegate:()=>d,selectOnFocus:()=>t.activationMode()==="automatic",shouldFocusWrap:!1,disallowEmptySelection:!0},()=>e);return I(()=>{if(e==null)return;const r=e.querySelector(`[data-key="${t.listState().selectedKey()}"]`);r!=null&&t.setSelectedTab(r)}),K(T,w({as:"div",ref(r){const s=k(i=>e=i,o.ref);typeof s=="function"&&s(r)},role:"tablist",get"aria-orientation"(){return t.orientation()},get"data-orientation"(){return t.orientation()},get onKeyDown(){return b([o.onKeyDown,c.onKeyDown])},get onMouseDown(){return b([o.onMouseDown,c.onMouseDown])},get onFocusIn(){return b([o.onFocusIn,c.onFocusIn])},get onFocusOut(){return b([o.onFocusOut,c.onFocusOut])}},n))}l(N,"TabsList");function le(a){const[e,t]=Y({value:()=>L(a.selectedKey),defaultValue:()=>L(a.defaultSelectedKey),onChange:s=>a.onSelectionChange?.(s)}),o=P(()=>{const s=e();return s!=null?[s]:[]}),[,n]=S(a,["onSelectionChange"]),h=w(n,{selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:o,onSelectionChange:s=>{const i=s.values().next().value;i===e()&&a.onSelectionChange?.(i),t(i)}}),{collection:d,selectionManager:c}=B(h),r=P(()=>{const s=e();return s!=null?d().getItem(s):void 0});return{collection:d,selectionManager:c,selectedKey:e,setSelectedKey:t,selectedItem:r}}l(le,"createSingleSelectListState");function z(a){const e=`tabs-${ne()}`,t=O({id:e,orientation:"horizontal",activationMode:"automatic"},a),[o,n]=S(t,["value","defaultValue","onChange","orientation","activationMode","disabled"]),[h,d]=C([]),[c,r]=C(),{DomCollectionProvider:s}=V({items:h,onItemsChange:d}),i=le({selectedKey:()=>o.value,defaultSelectedKey:()=>o.defaultValue,onSelectionChange:f=>o.onChange?.(String(f)),dataSource:h});let y=i.selectedKey();I(D([()=>i.selectionManager(),()=>i.collection(),()=>i.selectedKey()],([f,m,U])=>{let u=U;if(f.isEmpty()||u==null||!m.getItem(u)){u=m.getFirstKey();let x=u!=null?m.getItem(u):void 0;for(;x?.disabled&&x.key!==m.getLastKey();)u=m.getKeyAfter(x.key),x=u!=null?m.getItem(u):void 0;x?.disabled&&u===m.getLastKey()&&(u=m.getFirstKey()),u!=null&&f.setSelectedKeys([u])}(f.focusedKey()==null||!f.isFocused()&&u!==y)&&f.setFocusedKey(u),y=u}));const g=new Map,v=new Map,p={isDisabled:()=>o.disabled??!1,orientation:()=>o.orientation,activationMode:()=>o.activationMode,triggerIdsMap:()=>g,contentIdsMap:()=>v,listState:()=>i,selectedTab:c,setSelectedTab:r,generateTriggerId:f=>`${n.id}-trigger-${f}`,generateContentId:f=>`${n.id}-content-${f}`};return K(s,{get children(){return K(E.Provider,{value:p,get children(){return K(T,w({as:"div",get"data-orientation"(){return p.orientation()}},n))}})}})}l(z,"TabsRoot");function R(a){let e;const t=F(),o=O({type:"button"},a),[n,h]=S(o,["ref","id","value","disabled","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),d=l(()=>n.id??t.generateTriggerId(n.value),"id"),c=l(()=>t.listState().selectionManager().focusedKey()===n.value,"isHighlighted"),r=l(()=>n.disabled||t.isDisabled(),"isDisabled"),s=l(()=>t.contentIdsMap().get(n.value),"contentId");A({getItem:()=>({ref:()=>e,type:"item",key:n.value,textValue:"",disabled:r()})});const i=j({key:()=>n.value,selectionManager:()=>t.listState().selectionManager(),disabled:r},()=>e),y=l(g=>{Q()&&Z(g.currentTarget)},"onClick");return I(D([()=>n.value,d],([g,v])=>{t.triggerIdsMap().set(g,v)})),K(T,w({as:"button",ref(g){const v=k(p=>e=p,n.ref);typeof v=="function"&&v(g)},get id(){return d()},role:"tab",get tabIndex(){return P(()=>!r())()?i.tabIndex():void 0},get disabled(){return r()},get"aria-selected"(){return i.isSelected()},get"aria-disabled"(){return r()||void 0},get"aria-controls"(){return P(()=>!!i.isSelected())()?s():void 0},get"data-key"(){return i.dataKey()},get"data-orientation"(){return t.orientation()},get"data-selected"(){return i.isSelected()?"":void 0},get"data-highlighted"(){return c()?"":void 0},get"data-disabled"(){return r()?"":void 0},get onPointerDown(){return b([n.onPointerDown,i.onPointerDown])},get onPointerUp(){return b([n.onPointerUp,i.onPointerUp])},get onClick(){return b([n.onClick,i.onClick,y])},get onKeyDown(){return b([n.onKeyDown,i.onKeyDown])},get onMouseDown(){return b([n.onMouseDown,i.onMouseDown])},get onFocus(){return b([n.onFocus,i.onFocus])}},h))}l(R,"TabsTrigger");var ce=Object.assign(z,{Content:W,Indicator:_,List:N,Trigger:R});export{ce as T};
//# sourceMappingURL=7FJWXM73-511ca333.js.map
