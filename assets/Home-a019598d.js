var _e=Object.defineProperty;var b=(r,g)=>_e(r,"name",{value:g,configurable:!0});import{h as D,u as K,a as U,b as ce,c as t,A as Y,S as M,d as he,i as fe,f as $e,e as ue,g as J,j as o,k as j,p as Q,l as H,s as E,m as s,t as P,o as O,n as X,q as ge,r as Z,v as ee,F as I,w as pe,x as G,y as we,z as be,B as Se,C as te,D as Ce,E as ne,G as He,M as re,H as Ne}from"./index-64dc6460.js";import{N as ye}from"./Note-f0f70728.js";import{S as ve,s as B}from"./SelectionBox2-201141a0.js";import{s as _}from"./SelectionItem-0e1bfb8a.js";import{B as Fe}from"./ButtonPrimary-1f64caa8.js";import{P as Te}from"./Paginator-4878ac5b.js";import{s as Pe}from"./HomeSidebar.module-aa2a7eab.js";import{S as xe,a as Le,F as Me}from"./FeedNoteSkeleton-5b6ee646.js";import{T as me}from"./ParsedNote-9900e3c8.js";import{B as ke,s as se}from"./Layout-bd2a0ea3.js";import{W as Ae}from"./Wormhole-fa0163d3.js";import{s as oe}from"./scroll-88dc0c55.js";import{S as Be}from"./StickySidebar-65b823c5.js";import{S as ze}from"./Search-c8ce1e29.js";import{P as Ee}from"./PageTitle-3d0a9832.js";import"./dates-9bcb2bf7.js";import"./G5FCC32B-f4759418.js";import"./RLGGFAYQ-2a48be09.js";import"./index-b4296c5e.js";import"./5WXHJDCZ-8b9b8e69.js";import"./LR7LBJN3-a1aba763.js";import"./index-c76cfba2.js";import"./QJIB6BDF-1d7b1e44.js";import"./JNCCF6MP-19ab5fd3.js";import"./index-a25c8160.js";import"./Buttons.module-e818c1ea.js";import"./Skeleton.module-8b20490e.js";import"./ButtonGhost-a0fa1826.js";import"./Loader-1ac7e304.js";import"./EditBox-1353f619.js";import"./SearchOption-a7f2ab4a.js";import"./index-555a6fe0.js";import"./textArea-802fec28.js";import"./ButtonSecondary-cc5e2282.js";import"./EmojiPickHeader-dfcd5384.js";import"./ConfirmModal.module-73b4314e.js";import"./AdvancedSearchDialog-eff41eef.js";import"./Uploader-f6bcb09a.js";import"./EMOXVTIZ-81fa338a.js";import"./BannerIOS-4372487a.js";import"./primal_white-9ad5c7e6.js";import"./open_white-d7ddfa1e.js";import"./7FJWXM73-511ca333.js";import"./SOM3K36D-40feb6ac.js";import"./TextInput-e0ece469.js";import"./JFO5B7NF-4a51a11a.js";import"./ConfirmModal-62a7ec79.js";import"./QrCode-24ae49c9.js";import"./qr_nostrich-54e27ae3.js";import"./qr_lightning-fba50a71.js";import"./ButtonLink-2f835890.js";import"./CreatePinModal-3a4f5174.js";const Ie=b(r=>{const g=K(),i=U(),v=ce(),d=b(l=>Object.values(JSON.parse(l)).join("_"),"genId"),n=b(l=>{if(!l)return;const c={spec:l.value||"",name:l.label,description:l.description||"",enabled:!0},C=i?.selectedFeed;C&&C.spec===c.spec||(i?.actions.clearNotes(),i?.actions.selectFeed(c))},"selectFeed"),a=b(l=>{const c=i?.selectedFeed;return c&&c.spec===l.value},"isSelected"),$=b(()=>v?v?.homeFeeds.reduce((l,c)=>c.enabled?[...l,{label:c.name,value:c.spec,description:c.description,id:d(c.spec)}]:[...l],[]):[],"options"),y=b(()=>{const l=i?.selectedFeed;if(!l){let c=$e(g?.publicKey,"home");if(c)return{label:c.name,value:c.spec||"",description:c.description,id:d(c.spec)};const C=$()[0];return n(C),C}return{label:l.name,value:l.spec||"",description:l.description,id:d(l.spec)}},"initialValue"),N=b(()=>i?.selectedFeed?{label:i.selectedFeed.name,value:i.selectedFeed.spec,description:i.selectedFeed.description,id:d(i.selectedFeed.spec)}:y(),"selectedValue");return t(M,{get when(){return $().length>0},get children(){return[t(ve,{get options(){return $()},onChange:n,get initialValue(){return y()},get value(){return N()},isSelected:a,get isPhone(){return r.isPhone},get big(){return r.big},caption:"Notes Feed",get captionAction(){return t(Y,{href:"/settings/home_feeds",children:"Edit Feeds"})}}),t(M,{get when(){return he(()=>!!fe())()&&i?.selectedFeed?.spec.includes("advsearch")},get children(){return t(Y,{get href(){return`/asearch/${encodeURIComponent(JSON.parse(i?.selectedFeed?.spec||"{}").query)}`},children:"go to advanced search"})}})]}})},"FeedSelect"),W=D(Ie),De="_callToAction_tsqef_1",Ke="_border_tsqef_18",Ue="_input_tsqef_24",ie={callToAction:De,border:Ke,input:Ue},qe=P("<button><div>"),Re=b(r=>{const g=K(),i=J(),v=b(()=>{g?.actions?.showNewNoteForm()},"showNewNoteForm");return(()=>{const d=qe(),n=d.firstChild;return d.$$click=v,o(d,t(j,{get user(){return r.activeUser},size:"vs"}),n),o(n,()=>i.formatMessage(Q.noteCallToAction)),H(a=>{const $=r.id,y=ie.callToAction,N=ie.input;return $!==a._v$&&E(d,"id",a._v$=$),y!==a._v$2&&s(d,a._v$2=y),N!==a._v$3&&s(n,a._v$3=N),a},{_v$:void 0,_v$2:void 0,_v$3:void 0}),d})()},"SmallCallToAction"),Qe=D(Re);ue(["click"]);const le=P("<button><div>"),q=P("<div>"),Oe=P("<div><button><div></div><div>"),Ve=P('<div><div></div><div><div></div><div id="small_bottom_border"><div></div><div>'),de=P("<div><div>"),je=b(r=>{const g=K(),i=U(),v=ce(),d=J();let n,a=document.body.scrollTop||document.documentElement.scrollTop;const $=b(()=>{const l=document.body.scrollTop||document.documentElement.scrollTop,c=document.getElementById("small_bottom_border");i?.actions.updateScrollTop(l);const C=l>a;if(a=l,l<2){c&&(c.style.display="none"),n?.classList.add(_.instaHide),n?.classList.remove(_.hiddenSelector),n?.classList.remove(_.fixedSelector);return}if(a<2){n?.classList.add(_.instaHide);return}if(c&&(c.style.display="flex"),n?.classList.remove(_.instaHide),!C){n?.classList.add(_.fixedSelector),n?.classList.remove(_.hiddenSelector);return}n?.classList.add(_.hiddenSelector)},"onScroll"),y=b(()=>{g?.actions?.showNewNoteForm()},"onShowNewNoteinput");O(()=>{window.addEventListener("scroll",$)}),X(()=>{window.removeEventListener("scroll",$)});const N=b(()=>g?.activeUser,"activeUser");return(()=>{const l=Ve(),c=l.firstChild,C=c.nextSibling,w=C.firstChild,f=w.nextSibling,x=f.firstChild,F=x.nextSibling;o(l,t(M,{get when(){return g?.hasPublicKey()},get fallback(){return t(M,{get when(){return g?.isKeyLookupDone},get children(){const e=de(),h=e.firstChild;return o(h,()=>d.formatMessage(Q.guestUserGreeting)),o(e,t(Fe,{get onClick(){return g?.actions.showGetStarted},get children(){return d.formatMessage(ge.getStarted)}}),null),H(()=>s(e,_.welcomeMessage)),e}})},get children(){return[(()=>{const e=le(),h=e.firstChild;return e.$$click=y,o(e,t(j,{get user(){return N()},size:"vs"}),h),o(h,()=>d.formatMessage(Q.noteCallToAction)),H(m=>{const S=_.callToAction,p=_.input;return S!==m._v$&&s(e,m._v$=S),p!==m._v$2&&s(h,m._v$2=p),m},{_v$:void 0,_v$2:void 0}),e})(),(()=>{const e=q();return H(()=>s(e,_.separator)),e})()]}}),c),o(c,t(W,{big:!1}),null),o(c,t(M,{get when(){return r.hasNewPosts()},get children(){const e=le(),h=e.firstChild;return Z(e,"click",r.loadNewContent,!0),o(h,()=>d.formatMessage(ee,{number:r.newPostCount()>=99?99:r.newPostCount()})),H(m=>{const S=_.newContentItem,p=_.counter;return S!==m._v$3&&s(e,m._v$3=S),p!==m._v$4&&s(h,m._v$4=p),m},{_v$3:void 0,_v$4:void 0}),e}}),null);const u=n;return typeof u=="function"?G(u,C):n=C,o(w,t(M,{get when(){return g?.hasPublicKey()},get fallback(){return(()=>{const e=de(),h=e.firstChild;return o(h,()=>d.formatMessage(Q.welcomeMessage)),H(m=>{const S=_.smallLeft,p=_.welcomeMessageSmall;return S!==m._v$16&&s(e,m._v$16=S),p!==m._v$17&&s(h,m._v$17=p),m},{_v$16:void 0,_v$17:void 0}),e})()},get children(){const e=q();return o(e,t(Qe,{get activeUser(){return N()}})),H(()=>s(e,_.smallLeft)),e}}),null),o(w,t(M,{get when(){return v?.homeFeeds&&v?.homeFeeds.length>0&&i?.selectedFeed},get children(){const e=q();return o(e,t(W,{})),H(()=>s(e,_.smallRight)),e}}),null),o(C,t(M,{get when(){return r.hasNewPosts()&&!g?.showNewNoteForm},get children(){const e=Oe(),h=e.firstChild,m=h.firstChild,S=m.nextSibling;return Z(h,"click",r.loadNewContent,!0),o(m,t(I,{get each(){return r.newPostAuthors},children:p=>(()=>{const k=q();return o(k,t(j,{user:p,size:"xs"})),H(L=>{const A=_.avatar,z=pe(p);return A!==L._v$18&&s(k,L._v$18=A),z!==L._v$19&&E(k,"title",L._v$19=z),L},{_v$18:void 0,_v$19:void 0}),k})()})),o(S,()=>d.formatMessage(ee,{number:r.newPostCount()})),H(p=>{const k=_.newContentNotification,L=_.avatars,A=_.counter;return k!==p._v$5&&s(e,p._v$5=k),L!==p._v$6&&s(m,p._v$6=L),A!==p._v$7&&s(S,p._v$7=A),p},{_v$5:void 0,_v$6:void 0,_v$7:void 0}),e}}),null),H(e=>{const h=r.id,m=_.fullHeader,S=_.bigFeedSelect,p=`${_.smallHeader} ${_.instaHide}`,k=_.smallHeaderMain,L=_.smallHeaderBottomBorder,A=_.leftCorner,z=_.rightCorner;return h!==e._v$8&&E(l,"id",e._v$8=h),m!==e._v$9&&s(l,e._v$9=m),S!==e._v$10&&s(c,e._v$10=S),p!==e._v$11&&s(C,e._v$11=p),k!==e._v$12&&s(w,e._v$12=k),L!==e._v$13&&s(f,e._v$13=L),A!==e._v$14&&s(x,e._v$14=A),z!==e._v$15&&s(F,e._v$15=z),e},{_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0}),l})()},"HomeHeader"),Ge=D(je);ue(["click"]);const ae=P("<div>"),We=P("<div><div>"),Je=P('<div class="animated">'),V=[{label:"Trending 24h",value:"trending_24h",id:"trending_24h"},{label:"Trending 12h",value:"trending_12h",id:"trending_12h"},{label:"Trending 4h",value:"trending_4h",id:"trending_4h"},{label:"Trending 1h",value:"trending_1h",id:"trending_1h"},{label:"",value:"",disabled:!0,separator:!0},{label:"Most-zapped 24h",value:"mostzapped_24h",id:"mostzapped_24h"},{label:"Most-zapped 12h",value:"mostzapped_12h",id:"mostzapped_12h"},{label:"Most-zapped 4h",value:"mostzapped_4h",id:"mostzapped_4h"},{label:"Most-zapped 1h",value:"mostzapped_1h",id:"mostzapped_1h"}],Xe=b(r=>{const g=K(),i=U();return O(()=>{if(g?.isKeyLookupDone&&i?.sidebarNotes.length===0){let v=we(g.publicKey)||{...V[0]};v.id||(v={...V[0]}),i?.actions.updateSidebarQuery(v),i?.actions.doSidebarSearch(v.value||"")}}),(()=>{const v=We(),d=v.firstChild;return o(d,t(ve,{options:V,get value(){return i?.sidebarQuery},get initialValue(){return i?.sidebarQuery},onChange:n=>{n.value!==i?.sidebarQuery?.value&&(i?.actions.updateSidebarQuery(n),be(g?.publicKey,n),i?.actions.doSidebarSearch(n.value||""))}})),o(v,t(me,{name:"slide-fade",get children(){return t(M,{get when(){return!i?.isFetchingSidebar},get fallback(){return(()=>{const n=ae();return o(n,t(I,{each:new Array(24),children:()=>t(xe,{})})),n})()},get children(){const n=ae();return o(n,t(I,{get each(){return i?.sidebarNotes},children:a=>(()=>{const $=Je();return o($,t(Le,{note:a})),$})()})),n}})}}),null),H(n=>{const a=r.id,$=Pe.headingTrending;return a!==n._v$&&E(v,"id",n._v$=a),$!==n._v$2&&s(d,n._v$2=$),n},{_v$:void 0,_v$2:void 0}),v})()},"HomeSidebar"),Ye=D(Xe),Ze="_fullHeader_1c2ws_1",et="_phoneHeader_1c2ws_9",tt="_logo_1c2ws_22",nt="_smallHeader_1c2ws_27",rt="_smallHeaderMain_1c2ws_33",st="_smallHeaderBottomBorder_1c2ws_41",ot="_rightCorner_1c2ws_48",it="_leftCorner_1c2ws_56",lt="_smallLeft_1c2ws_65",dt="_smallRight_1c2ws_72",at="_fixedSelector_1c2ws_77",ct="_hiddenSelector_1c2ws_94",ut="_instaHide_1c2ws_99",T={fullHeader:Ze,phoneHeader:et,logo:tt,smallHeader:nt,smallHeaderMain:rt,smallHeaderBottomBorder:st,rightCorner:ot,leftCorner:it,smallLeft:lt,smallRight:dt,fixedSelector:at,hiddenSelector:ct,instaHide:ut},vt=P("<div><div><div></div></div><div><div></div><div>"),mt=b(r=>{const g=U();let i=document.body.scrollTop||document.documentElement.scrollTop,v,d;const n=b(()=>{const a=document.body.scrollTop||document.documentElement.scrollTop;g?.actions?.updateScrollTop(a);const $=a>i;if(i=a,a<117){d&&(d.style.display="none"),v?.classList.remove(T.hiddenSelector),v?.classList.remove(T.fixedSelector);return}if(i<117){v?.classList.add(T.instaHide);return}if(d&&(d.style.display="flex"),v?.classList.remove(T.instaHide),!$){v?.classList.add(T.fixedSelector),v?.classList.remove(T.hiddenSelector);return}v?.classList.add(T.hiddenSelector)},"onScroll");return O(()=>{window.addEventListener("scroll",n)}),X(()=>{window.removeEventListener("scroll",n)}),(()=>{const a=vt(),$=a.firstChild,y=$.firstChild,N=$.nextSibling,l=N.firstChild,c=l.nextSibling,C=v;typeof C=="function"?G(C,a):v=a,o(y,t(ke,{small:!0})),o($,t(M,{get when(){return g?.selectedFeed},get children(){return t(W,{isPhone:!0})}}),null);const w=d;return typeof w=="function"?G(w,N):d=N,H(f=>{const x=r.id,F=T.fullHeader,u=T.phoneHeader,e=T.logo,h=T.smallHeaderBottomBorder,m=T.leftCorner,S=T.rightCorner;return x!==f._v$&&E(a,"id",f._v$=x),F!==f._v$2&&s(a,f._v$2=F),u!==f._v$3&&s($,f._v$3=u),e!==f._v$4&&s(y,f._v$4=e),h!==f._v$5&&s(N,f._v$5=h),m!==f._v$6&&s(l,f._v$6=m),S!==f._v$7&&s(c,f._v$7=S),f},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),a})()},"HomeHeaderPhone"),_t=D(mt),R=P("<div>"),ht=P("<div><div></div><div></div><div>"),ft=P('<div class="animated">'),$n=b(()=>{const r=U();K();const g=J(),i=Se(),v=b(()=>r?.isFetching,"isPageLoading");let d=0;const[n,a]=te(!1),[$,y]=te(0),[N,l]=Ce([]),c=b(()=>$()<100?$():100,"newPostCount");O(()=>{se(!0),oe(r?.scrollTop)}),ne(()=>{if((r?.futureNotes.length||0)>99||i?.isInactive){clearInterval(d);return}const w=r?.selectedFeed?.spec||"";d&&(clearInterval(d),a(!1),y(0),l(()=>[]));const f=25e3+Math.random()*1e4;d=setInterval(()=>{r?.actions.checkForNewNotes(w)},f)}),ne(()=>{const w=r?.futureNotes.length||0;if(w!==0){if(n()||a(!0),N.length<3){const x=(r?.futureNotes.map(F=>F.user)||[]).reduce((F,u)=>F.find(h=>h.pubkey===u.pubkey)?F:[...F,u],[]).slice(0,3);l(()=>[...x])}y(w)}}),X(()=>{clearInterval(d),se(!1)});const C=b(()=>{if($()>100||i?.appState==="waking"){r?.actions.getFirstPage();return}r?.actions.loadFutureContent(),oe(0,!0),a(!1),y(0),l(()=>[])},"loadNewContent");return(()=>{const w=ht(),f=w.firstChild,x=f.nextSibling,F=x.nextSibling;return o(w,t(Ee,{get title(){return g.formatMessage(He)}}),f),o(w,t(Ae,{to:"search_section",get children(){return t(ze,{})}}),f),o(f,t(Ge,{hasNewPosts:n,loadNewContent:C,newPostCount:c,newPostAuthors:N})),o(x,t(_t,{})),o(w,t(Be,{get children(){return t(Ye,{})}}),F),o(F,t(me,{name:"slide-fade",get children(){return t(M,{get when(){return r?.notes&&r.notes.length>0},get fallback(){return(()=>{const u=R();return o(u,t(I,{each:new Array(5),children:()=>t(Me,{})})),u})()},get children(){const u=R();return o(u,t(I,{get each(){return r?.notes},children:e=>(()=>{const h=ft();return o(h,t(ye,{note:e,shorten:!0})),h})()})),H(()=>s(u,B.feed)),u}})}})),o(w,t(Ne,{get children(){return[t(re,{get when(){return!v()&&r?.notes&&r?.notes.length===0},get children(){const u=R();return H(()=>s(u,B.noContent)),u}}),t(re,{get when(){return v()},get children(){const u=R();return H(()=>s(u,B.noContent)),u}})]}}),null),o(w,t(Te,{get loadNextPage(){return r?.actions.fetchNextPage}}),null),H(u=>{const e=B.homeContent,h=B.normalCentralHeader,m=B.phoneCentralHeader,S=B.homeFeed;return e!==u._v$&&s(w,u._v$=e),h!==u._v$2&&s(f,u._v$2=h),m!==u._v$3&&s(x,u._v$3=m),S!==u._v$4&&s(F,u._v$4=S),u},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),w})()},"Home");export{$n as default};
//# sourceMappingURL=Home-a019598d.js.map
