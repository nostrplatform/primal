var Tt=Object.defineProperty;var T=($,P)=>Tt($,"name",{value:P,configurable:!0});import{h as Te,j as g,c as i,l as w,m as c,d as M,S as k,s as Q,t as oe,cw as l,g as be,B as Ke,C as le,aY as bt,a1 as Je,E as ge,F as q,A as Be,w as We,k as Ge,cx as It,cy as ie,cz as Pt,cA as He,cB as yt,cC as X,u as Ut,Z as At,aE as Mt,D as ve,N as ye,ay as Wt,cD as ke,cE as Ue,n as wt,cF as de,e as kt,Q as Re,al as Rt,T as pe,a2 as ee,a8 as De,cG as Dt,cH as xe,ao as xt,cI as Yt,aR as re,cJ as Lt,aU as ae}from"./index-64dc6460.js";import{L as Ae}from"./Loader-1ac7e304.js";import{u as qe,a as Qe,p as Ve,b as Xe,c as et,d as tt,m as nt,e as st,f as it,g as ot,h as rt,i as at,j as ct,k as _t,l as dt}from"./mentioned_post_replied-9fcee781.js";import{N as ut}from"./Note-f0f70728.js";import{P as Ye}from"./Paginator-4878ac5b.js";import{S as Ct}from"./Search-c8ce1e29.js";import{S as zt}from"./StickySidebar-65b823c5.js";import{W as jt}from"./Wormhole-fa0163d3.js";import{T as ce}from"./7FJWXM73-511ca333.js";import{P as Zt}from"./PageCaption-27eb7f4c.js";import{P as Ft}from"./PageTitle-3d0a9832.js";import"./ParsedNote-9900e3c8.js";import"./dates-9bcb2bf7.js";import"./ButtonGhost-a0fa1826.js";import"./Buttons.module-e818c1ea.js";import"./5WXHJDCZ-8b9b8e69.js";import"./index-b4296c5e.js";import"./ButtonPrimary-1f64caa8.js";import"./SearchOption-a7f2ab4a.js";import"./SOM3K36D-40feb6ac.js";import"./index-c76cfba2.js";import"./RLGGFAYQ-2a48be09.js";import"./LR7LBJN3-a1aba763.js";const Kt="_notifItem_1lzwa_1",Jt="_newBubble_1lzwa_9",Bt="_notifType_1lzwa_28",Gt="_iconInfo_1lzwa_35",Ht="_notifContent_1lzwa_42",qt="_avatars_1lzwa_46",Qt="_avatar_1lzwa_46",Vt="_description_1lzwa_61",Xt="_firstUser_1lzwa_66",en="_restUsers_1lzwa_74",tn="_reference_1lzwa_81",nn="_firstUserName_1lzwa_88",sn="_verifiedIcon_1lzwa_95",L={notifItem:Kt,newBubble:Jt,notifType:Bt,iconInfo:Gt,notifContent:Ht,avatars:qt,avatar:Qt,description:Vt,firstUser:Xt,restUsers:en,reference:tn,firstUserName:nn,verifiedIcon:sn},lt="/assets/mentioned_post_reposted-950f122a.svg",on="_verifiedIcon_1f953_1",rn="_xxsAvatar_1f953_14",an="_xsAvatar_1f953_30",cn="_vsAvatar_1f953_46",_n="_smallAvatar_1f953_62",dn="_midAvatar_1f953_78",un="_largeAvatar_1f953_94",ln="_extraLargeAvatar_1f953_110",fn="_xxlAvatar_1f953_126",vn="_xxsMissing_1f953_142",gn="_xsMissing_1f953_155",$n="_vsMissing_1f953_168",mn="_smallMissing_1f953_181",On="_midMissing_1f953_194",Sn="_largeMissing_1f953_207",En="_extraLargeMissing_1f953_220",Nn="_xxlMissing_1f953_233",te={verifiedIcon:on,xxsAvatar:rn,xsAvatar:an,vsAvatar:cn,smallAvatar:_n,midAvatar:dn,largeAvatar:un,extraLargeAvatar:ln,xxlAvatar:fn,xxsMissing:vn,xsMissing:gn,vsMissing:$n,smallMissing:mn,midMissing:On,largeMissing:Sn,extraLargeMissing:En,xxlMissing:Nn},Le=oe("<div>"),hn=T($=>{const P=$.size||"sm",W={xxs:te.xxsAvatar,xs:te.xsAvatar,vs:te.vsAvatar,sm:te.smallAvatar,md:te.midAvatar,lg:te.largeAvatar,xl:te.extraLargeAvatar,xxl:te.xxlAvatar},C={xxs:te.xxsMissing,xs:te.xsMissing,vs:te.vsMissing,sm:te.smallMissing,md:te.midMissing,lg:te.largeMissing,xl:te.extraLargeMissing,xxl:te.xxlMissing};return(()=>{const z=Le();return g(z,i(k,{get when(){return $.number},get fallback(){return(()=>{const O=Le();return w(()=>c(O,C[P])),O})()},get children(){return["+",M(()=>$.number)]}})),w(O=>{const j=$.id,y=W[P];return j!==O._v$&&Q(z,"id",O._v$=j),y!==O._v$2&&c(z,O._v$2=y),O},{_v$:void 0,_v$2:void 0}),z})()},"NotificationAvatar"),pn=Te(hn),Tn=oe("<span>"),bn=oe("<div>"),In=oe('<div><div></div><div><img alt="notification icon"><div></div></div><div><div></div><div><div><span></span></div><div>'),Pn={[l.NEW_USER_FOLLOWED_YOU]:qe,[l.USER_UNFOLLOWED_YOU]:Qe,[l.YOUR_POST_WAS_ZAPPED]:Ve,[l.YOUR_POST_WAS_LIKED]:Xe,[l.YOUR_POST_WAS_REPOSTED]:et,[l.YOUR_POST_WAS_REPLIED_TO]:tt,[l.YOU_WERE_MENTIONED_IN_POST]:nt,[l.YOUR_POST_WAS_MENTIONED_IN_POST]:st,[l.POST_YOU_WERE_MENTIONED_IN_WAS_ZAPPED]:it,[l.POST_YOU_WERE_MENTIONED_IN_WAS_LIKED]:ot,[l.POST_YOU_WERE_MENTIONED_IN_WAS_REPOSTED]:rt,[l.POST_YOU_WERE_MENTIONED_IN_WAS_REPLIED_TO]:at,[l.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_ZAPPED]:ct,[l.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_LIKED]:_t,[l.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_REPOSTED]:lt,[l.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_REPLIED_TO]:dt},yn=T($=>$.reduce((P,W)=>P.find(z=>z.id===W.id)?P:[...P,W],[]),"uniqueifyUsers$1"),Ce=12,Un=T($=>{const P=be(),W=Ke(),[C,z]=le(""),O=M(()=>!$.users||$.users.length===0?[]:yn($.users).sort((Y,R)=>R.followers_count-Y.followers_count)),j=M(()=>O().slice(0,Ce)),y=M(()=>O().length),ue=M(()=>{const S=y()-j().length;return S>99?99:S}),U=M(()=>{const S=O()[0];return S?S.displayName||S.name||bt(S.npub):""}),x=M(()=>{const S=O()[0];return!S||!S.nip05?null:Je(S.nip05)}),h=T(()=>P.formatMessage(It[$.type],{number:y()-1}),"typeDescription");return ge(()=>{z(Pn[$.type])}),(()=>{const S=In(),Y=S.firstChild,R=Y.nextSibling,A=R.firstChild,D=A.nextSibling,b=R.nextSibling,I=b.firstChild,e=I.nextSibling,t=e.firstChild,a=t.firstChild,m=t.nextSibling;return g(D,()=>$.iconInfo),g(I,i(k,{get when(){return y()>0},get children(){return i(q,{get each(){return j()},children:d=>i(Be,{get href(){return W?.actions.profileLink(d.npub)||""},get class(){return L.avatar},get title(){return We(d)},get children(){return i(Ge,{user:d,size:"xs"})}})})}}),null),g(I,i(k,{get when(){return y()>Ce-1},get children(){return i(pn,{get number(){return ue()},size:"xs"})}}),null),g(a,U),g(t,i(k,{get when(){return x()},get children(){const d=Tn();return w(()=>c(d,L.verifiedIcon)),d}}),null),g(m,h),g(b,i(k,{get when(){return![l.NEW_USER_FOLLOWED_YOU,l.USER_UNFOLLOWED_YOU].includes($.type)},get children(){const d=bn();return g(d,i(k,{get when(){return $.note},get children(){return i(ut,{get note(){return $.note},noteType:"notification"})}})),w(()=>c(d,L.reference)),d}}),null),w(d=>{const F=$.id,K=L.notifItem,J=L.newBubble,B=L.notifType,V=C(),Z=L.iconInfo,$e=$.iconTooltip,me=L.notifContent,Oe=L.avatars,Se=L.description,Ee=L.firstUser,Ne=L.firstUserName,he=L.restUsers;return F!==d._v$&&Q(S,"id",d._v$=F),K!==d._v$2&&c(S,d._v$2=K),J!==d._v$3&&c(Y,d._v$3=J),B!==d._v$4&&c(R,d._v$4=B),V!==d._v$5&&Q(A,"src",d._v$5=V),Z!==d._v$6&&c(D,d._v$6=Z),$e!==d._v$7&&Q(D,"title",d._v$7=$e),me!==d._v$8&&c(b,d._v$8=me),Oe!==d._v$9&&c(I,d._v$9=Oe),Se!==d._v$10&&c(e,d._v$10=Se),Ee!==d._v$11&&c(t,d._v$11=Ee),Ne!==d._v$12&&c(a,d._v$12=Ne),he!==d._v$13&&c(m,d._v$13=he),d},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0}),S})()},"NotificationItem"),ne=Te(Un),ze=oe("<div>"),An=oe("<span>"),Mn=oe('<div><div><img alt="notification icon"></div><div><div></div><div><div><span></span></div><div>'),Wn={[l.NEW_USER_FOLLOWED_YOU]:qe,[l.USER_UNFOLLOWED_YOU]:Qe,[l.YOUR_POST_WAS_ZAPPED]:Ve,[l.YOUR_POST_WAS_LIKED]:Xe,[l.YOUR_POST_WAS_REPOSTED]:et,[l.YOUR_POST_WAS_REPLIED_TO]:tt,[l.YOU_WERE_MENTIONED_IN_POST]:nt,[l.YOUR_POST_WAS_MENTIONED_IN_POST]:st,[l.POST_YOU_WERE_MENTIONED_IN_WAS_ZAPPED]:it,[l.POST_YOU_WERE_MENTIONED_IN_WAS_LIKED]:ot,[l.POST_YOU_WERE_MENTIONED_IN_WAS_REPOSTED]:rt,[l.POST_YOU_WERE_MENTIONED_IN_WAS_REPLIED_TO]:at,[l.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_ZAPPED]:ct,[l.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_LIKED]:_t,[l.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_REPOSTED]:lt,[l.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_REPLIED_TO]:dt},wn=T($=>{const P=be(),W=Ke(),[C,z]=le(""),O=T(()=>$.notification.type,"type"),j=T(()=>{const x=Pt[O()],h=$.notification[x];return $.notes.find(S=>S.post.id===h)},"note"),y=T(()=>{const x=He[O()],h=$.notification[x];return $.users[`${h}`]},"user"),ue=T(()=>P.formatMessage(yt[O()]),"typeDescription");ge(()=>{z(Wn[O()])});const U=T(()=>[l.YOUR_POST_WAS_ZAPPED,l.POST_YOU_WERE_MENTIONED_IN_WAS_ZAPPED,l.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_ZAPPED].includes(O()),"isZapType");return(()=>{const x=Mn(),h=x.firstChild,S=h.firstChild,Y=h.nextSibling,R=Y.firstChild,A=R.nextSibling,D=A.firstChild,b=D.firstChild,I=D.nextSibling;return g(h,i(k,{get when(){return U()},get children(){const e=ze();return g(e,()=>ie($.notification.satszapped||0)),w(t=>{const a=L.iconInfo,m=`${$.notification.satszapped} sats`;return a!==t._v$&&c(e,t._v$=a),m!==t._v$2&&Q(e,"title",t._v$2=m),t},{_v$:void 0,_v$2:void 0}),e}}),null),g(R,i(Be,{get href(){return W?.actions.profileLink(y()?.npub)||""},get class(){return L.avatar},get title(){return We(y())},get children(){return i(Ge,{get user(){return y()},size:"xs"})}})),g(b,()=>We(y())),g(D,i(k,{get when(){return Je(y()?.nip05)},get children(){const e=An();return w(()=>c(e,L.verifiedIcon)),e}}),null),g(I,ue),g(Y,i(k,{get when(){return![l.NEW_USER_FOLLOWED_YOU,l.USER_UNFOLLOWED_YOU].includes(O())},get children(){const e=ze();return g(e,i(k,{get when(){return j()},get children(){return i(ut,{get note(){return j()},noteType:"notification"})}})),w(()=>c(e,L.reference)),e}}),null),w(e=>{const t=$.id,a=L.notifItem,m=L.notifType,d=C(),F=L.notifContent,K=L.avatars,J=L.description,B=L.firstUser,V=L.firstUserName,Z=L.restUsers;return t!==e._v$3&&Q(x,"id",e._v$3=t),a!==e._v$4&&c(x,e._v$4=a),m!==e._v$5&&c(h,e._v$5=m),d!==e._v$6&&Q(S,"src",e._v$6=d),F!==e._v$7&&c(Y,e._v$7=F),K!==e._v$8&&c(R,e._v$8=K),J!==e._v$9&&c(A,e._v$9=J),B!==e._v$10&&c(D,e._v$10=B),V!==e._v$11&&c(b,e._v$11=V),Z!==e._v$12&&c(I,e._v$12=Z),e},{_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0}),x})()},"NotificationItemOld"),je=Te(wn),kn="_sidebarHeading_1fzhj_1",Rn="_sidebarTitle_1fzhj_10",Dn="_sidebarEmpty_1fzhj_17",xn="_sidebarItems_1fzhj_25",Yn="_sidebarItem_1fzhj_25",Ln="_itemAmount_1fzhj_34",Cn="_category_1fzhj_43",zn="_categoryIcon_1fzhj_47",jn="_followIcon_1fzhj_54",Zn="_mentionIcon_1fzhj_62",Fn="_zapIcon_1fzhj_70",Kn="_activityIcon_1fzhj_78",Jn="_contextIcon_1fzhj_86",N={sidebarHeading:kn,sidebarTitle:Rn,sidebarEmpty:Dn,sidebarItems:xn,sidebarItem:Yn,itemAmount:Ln,category:Cn,categoryIcon:zn,followIcon:jn,mentionIcon:Zn,zapIcon:Fn,activityIcon:Kn,contextIcon:Jn},_e=oe("<div>"),Me=oe("<div><div><div></div></div><div><div></div><div><div></div><div>"),Bn=oe("<div><div><div></div></div><div><div></div><div><div></div><div></div><div>"),Gn=oe("<div><div><div></div></div><div><div></div><div>"),Ze=oe("<div><div>"),Fe=T($=>$.reduce((P,W)=>P.find(z=>z.id===W.id)?P:[...P,W],[]),"uniqueifyUsers"),Hn=T($=>{const P=be(),W=T(()=>{const U=$.notifications[l.NEW_USER_FOLLOWED_YOU]||[],x=$.notifications[l.USER_UNFOLLOWED_YOU]||[],h=$.getUsers(U,l.USER_UNFOLLOWED_YOU),S=$.getUsers(x,l.USER_UNFOLLOWED_YOU);return[Fe(h).length,Fe(S).length]},"follows"),C=T(()=>{const U=$.notifications[l.YOU_WERE_MENTIONED_IN_POST]||[],x=$.notifications[l.YOUR_POST_WAS_MENTIONED_IN_POST]||[];return[U.length,x.length]},"mentions"),z=T(()=>{const U=$.notifications[l.YOUR_POST_WAS_ZAPPED]||[],x=U.reduce((h,S)=>S.satszapped?h+S.satszapped:h,0);return[U.length,x]},"zaps"),O=T(()=>{const U=$.notifications[l.YOUR_POST_WAS_REPLIED_TO]||[],x=$.notifications[l.YOUR_POST_WAS_REPOSTED]||[],h=$.notifications[l.YOUR_POST_WAS_LIKED]||[];return[U.length,x.length,h.length]},"activity"),j=T(()=>{const U=$.notifications[l.POST_YOU_WERE_MENTIONED_IN_WAS_ZAPPED]||[],x=$.notifications[l.POST_YOU_WERE_MENTIONED_IN_WAS_LIKED]||[],h=$.notifications[l.POST_YOU_WERE_MENTIONED_IN_WAS_REPOSTED]||[],S=$.notifications[l.POST_YOU_WERE_MENTIONED_IN_WAS_REPLIED_TO]||[],Y=$.notifications[l.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_ZAPPED]||[],R=$.notifications[l.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_LIKED]||[],A=$.notifications[l.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_REPOSTED]||[],D=$.notifications[l.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_REPLIED_TO]||[];return[U.length,x.length,h.length,S.length,Y.length,R.length,A.length,D.length]},"otherNotifications"),y=[{id:"notifications.sidebar.mentionsPostZap",defaultMessage:`{number, plural,
        =0 {}
        one {mention was zapped}
        other {mentions were zapped}}`,description:'Sidebar "posts you were mentioned in were zapped" stats description on the notification page'},{id:"notifications.sidebar.mentionsPostLike",defaultMessage:`{number, plural,
        =0 {}
        one {mention was liked}
        other {mentions were liked}}`,description:'Sidebar "posts you were mentioned in were liked" stats description on the notification page'},{id:"notifications.sidebar.mentionsPostReposted",defaultMessage:`{number, plural,
        =0 {}
        one {mention was reposted}
        other {mentions were reposted}}`,description:'Sidebar "posts you were mentioned in were reposted" stats description on the notification page'},{id:"notifications.sidebar.mentionsPostReplied",defaultMessage:`{number, plural,
        =0 {}
        one {mention was replied to}
        other {mentions were replied to}}`,description:'Sidebar "posts you were mentioned in were replied to" stats description on the notification page'},{id:"notifications.sidebar.postMentionsPostZaped",defaultMessage:`{number, plural,
        =0 {}
        one {post mention was zapped}
        other {post mentions were zapped}}`,description:'Sidebar "posts your posts were mentioned in were zapped" stats description on the notification page'},{id:"notifications.sidebar.postMentionsPostLike",defaultMessage:`{number, plural,
        =0 {}
        one {post mention was liked}
        other {post mentions were liked}}`,description:'Sidebar "posts your posts were mentioned in were liked" stats description on the notification page'},{id:"notifications.sidebar.postMentionsPostReposted",defaultMessage:`{number, plural,
        =0 {}
        one {post mention was reposted}
        other {post mentions were reposted}}`,description:'Sidebar "posts your posts were mentioned in were reposted" stats description on the notification page'},{id:"notifications.sidebar.postMentionsPostReposted",defaultMessage:`{number, plural,
        =0 {}
        one {post mention was replied to}
        other {post mentions were replied to}}`,description:'Sidebar "posts your posts were mentioned in were replied to" stats description on the notification page'}],ue=T(()=>C()[0]+C()[1]+W()[0]+W()[1]+z()[0]+O()[0]+O()[1]+O()[2]===0,"nothingNew");return(()=>{const U=Ze(),x=U.firstChild;return g(x,()=>P.formatMessage(X.heading)),g(U,i(k,{get when(){return ue()},get children(){const h=_e();return g(h,()=>P.formatMessage(X.empty)),w(()=>c(h,N.sidebarEmpty)),h}}),null),g(U,i(k,{get when(){return W()[0]+W()[1]>0},get children(){const h=Me(),S=h.firstChild,Y=S.firstChild,R=S.nextSibling,A=R.firstChild,D=A.nextSibling,b=D.firstChild,I=b.nextSibling;return g(A,()=>P.formatMessage(X.followers)),g(b,i(k,{get when(){return W()[0]>0},get children(){return[(()=>{const e=_e();return g(e,()=>ie(W()[0])),w(t=>{const a=N.itemAmount,m=`${W()[0]}`;return a!==t._v$&&c(e,t._v$=a),m!==t._v$2&&Q(e,"title",t._v$2=m),t},{_v$:void 0,_v$2:void 0}),e})(),M(()=>P.formatMessage(X.gainedFollowers,{number:W()[0]}))]}})),g(I,i(k,{get when(){return W()[1]>0},get children(){return[(()=>{const e=_e();return g(e,()=>ie(W()[1])),w(t=>{const a=N.itemAmount,m=`${W()[1]}`;return a!==t._v$3&&c(e,t._v$3=a),m!==t._v$4&&Q(e,"title",t._v$4=m),t},{_v$3:void 0,_v$4:void 0}),e})(),M(()=>P.formatMessage(X.lostFollowers,{number:W()[1]}))]}})),w(e=>{const t=N.category,a=N.categoryIcon,m=N.followIcon,d=N.content,F=N.sidebarTitle,K=N.sidebarItems,J=N.sidebarItem,B=N.sidebarItem;return t!==e._v$5&&c(h,e._v$5=t),a!==e._v$6&&c(S,e._v$6=a),m!==e._v$7&&c(Y,e._v$7=m),d!==e._v$8&&c(R,e._v$8=d),F!==e._v$9&&c(A,e._v$9=F),K!==e._v$10&&c(D,e._v$10=K),J!==e._v$11&&c(b,e._v$11=J),B!==e._v$12&&c(I,e._v$12=B),e},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0}),h}}),null),g(U,i(k,{get when(){return z()[0]>0},get children(){const h=Me(),S=h.firstChild,Y=S.firstChild,R=S.nextSibling,A=R.firstChild,D=A.nextSibling,b=D.firstChild,I=b.nextSibling;return g(A,()=>P.formatMessage(X.zaps)),g(b,i(k,{get when(){return z()[0]>0},get children(){return[(()=>{const e=_e();return g(e,()=>ie(z()[0])),w(t=>{const a=N.itemAmount,m=`${z()[0]}`;return a!==t._v$13&&c(e,t._v$13=a),m!==t._v$14&&Q(e,"title",t._v$14=m),t},{_v$13:void 0,_v$14:void 0}),e})(),M(()=>P.formatMessage(X.zapNumber,{number:z()[0]}))]}})),g(I,i(k,{get when(){return z()[1]>0},get children(){return[(()=>{const e=_e();return g(e,()=>ie(z()[1])),w(t=>{const a=N.itemAmount,m=`${z()[1]}`;return a!==t._v$15&&c(e,t._v$15=a),m!==t._v$16&&Q(e,"title",t._v$16=m),t},{_v$15:void 0,_v$16:void 0}),e})(),M(()=>P.formatMessage(X.statsNumber,{number:z()[1]}))]}})),w(e=>{const t=N.category,a=N.categoryIcon,m=N.zapIcon,d=N.content,F=N.sidebarTitle,K=N.sidebarItems,J=N.sidebarItem,B=N.sidebarItem;return t!==e._v$17&&c(h,e._v$17=t),a!==e._v$18&&c(S,e._v$18=a),m!==e._v$19&&c(Y,e._v$19=m),d!==e._v$20&&c(R,e._v$20=d),F!==e._v$21&&c(A,e._v$21=F),K!==e._v$22&&c(D,e._v$22=K),J!==e._v$23&&c(b,e._v$23=J),B!==e._v$24&&c(I,e._v$24=B),e},{_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0}),h}}),null),g(U,i(k,{get when(){return O()[0]+O()[1]+O()[2]>0},get children(){const h=Bn(),S=h.firstChild,Y=S.firstChild,R=S.nextSibling,A=R.firstChild,D=A.nextSibling,b=D.firstChild,I=b.nextSibling,e=I.nextSibling;return g(A,()=>P.formatMessage(X.activities)),g(b,i(k,{get when(){return O()[0]>0},get children(){return[(()=>{const t=_e();return g(t,()=>ie(O()[0])),w(a=>{const m=N.itemAmount,d=`${O()[0]}`;return m!==a._v$25&&c(t,a._v$25=m),d!==a._v$26&&Q(t,"title",a._v$26=d),a},{_v$25:void 0,_v$26:void 0}),t})(),M(()=>P.formatMessage(X.replies,{number:O()[0]}))]}})),g(I,i(k,{get when(){return O()[1]>0},get children(){return[(()=>{const t=_e();return g(t,()=>ie(O()[1])),w(a=>{const m=N.itemAmount,d=`${O()[1]}`;return m!==a._v$27&&c(t,a._v$27=m),d!==a._v$28&&Q(t,"title",a._v$28=d),a},{_v$27:void 0,_v$28:void 0}),t})(),M(()=>P.formatMessage(X.reposts,{number:O()[1]}))]}})),g(e,i(k,{get when(){return O()[2]>0},get children(){return[(()=>{const t=_e();return g(t,()=>ie(O()[2])),w(a=>{const m=N.itemAmount,d=`${O()[2]}`;return m!==a._v$29&&c(t,a._v$29=m),d!==a._v$30&&Q(t,"title",a._v$30=d),a},{_v$29:void 0,_v$30:void 0}),t})(),M(()=>P.formatMessage(X.likes,{number:O()[2]}))]}})),w(t=>{const a=N.category,m=N.categoryIcon,d=N.activityIcon,F=N.content,K=N.sidebarTitle,J=N.sidebarItems,B=N.sidebarItem,V=N.sidebarItem,Z=N.sidebarItem;return a!==t._v$31&&c(h,t._v$31=a),m!==t._v$32&&c(S,t._v$32=m),d!==t._v$33&&c(Y,t._v$33=d),F!==t._v$34&&c(R,t._v$34=F),K!==t._v$35&&c(A,t._v$35=K),J!==t._v$36&&c(D,t._v$36=J),B!==t._v$37&&c(b,t._v$37=B),V!==t._v$38&&c(I,t._v$38=V),Z!==t._v$39&&c(e,t._v$39=Z),t},{_v$31:void 0,_v$32:void 0,_v$33:void 0,_v$34:void 0,_v$35:void 0,_v$36:void 0,_v$37:void 0,_v$38:void 0,_v$39:void 0}),h}}),null),g(U,i(k,{get when(){return C()[0]+C()[1]>0},get children(){const h=Me(),S=h.firstChild,Y=S.firstChild,R=S.nextSibling,A=R.firstChild,D=A.nextSibling,b=D.firstChild,I=b.nextSibling;return g(A,()=>P.formatMessage(X.mentions)),g(b,i(k,{get when(){return C()[0]>0},get children(){return[(()=>{const e=_e();return g(e,()=>ie(C()[0])),w(t=>{const a=N.itemAmount,m=`${C()[0]}`;return a!==t._v$40&&c(e,t._v$40=a),m!==t._v$41&&Q(e,"title",t._v$41=m),t},{_v$40:void 0,_v$41:void 0}),e})(),M(()=>P.formatMessage(X.mentionsYou,{number:C()[0]}))]}})),g(I,i(k,{get when(){return C()[1]>0},get children(){return[(()=>{const e=_e();return g(e,()=>ie(C()[1])),w(t=>{const a=N.itemAmount,m=`${C()[1]}`;return a!==t._v$42&&c(e,t._v$42=a),m!==t._v$43&&Q(e,"title",t._v$43=m),t},{_v$42:void 0,_v$43:void 0}),e})(),M(()=>P.formatMessage(X.mentionsYourPost,{number:C()[1]}))]}})),w(e=>{const t=N.category,a=N.categoryIcon,m=N.mentionIcon,d=N.content,F=N.sidebarTitle,K=N.sidebarItems,J=N.sidebarItem,B=N.sidebarItem;return t!==e._v$44&&c(h,e._v$44=t),a!==e._v$45&&c(S,e._v$45=a),m!==e._v$46&&c(Y,e._v$46=m),d!==e._v$47&&c(R,e._v$47=d),F!==e._v$48&&c(A,e._v$48=F),K!==e._v$49&&c(D,e._v$49=K),J!==e._v$50&&c(b,e._v$50=J),B!==e._v$51&&c(I,e._v$51=B),e},{_v$44:void 0,_v$45:void 0,_v$46:void 0,_v$47:void 0,_v$48:void 0,_v$49:void 0,_v$50:void 0,_v$51:void 0}),h}}),null),g(U,i(k,{get when(){return j()[0]+j()[1]+j()[2]+j()[3]+j()[4]+j()[5]+j()[6]+j()[7]>0},get children(){const h=Gn(),S=h.firstChild,Y=S.firstChild,R=S.nextSibling,A=R.firstChild,D=A.nextSibling;return g(A,()=>P.formatMessage(X.other)),g(D,i(q,{get each(){return j()},children:(b,I)=>i(k,{when:b>0,get children(){const e=Ze(),t=e.firstChild;return Q(t,"title",`${b}`),g(t,()=>ie(b)),g(e,()=>P.formatMessage(y[I()],{number:b}),null),w(a=>{const m=N.sidebarItem,d=N.itemAmount;return m!==a._v$60&&c(e,a._v$60=m),d!==a._v$61&&c(t,a._v$61=d),a},{_v$60:void 0,_v$61:void 0}),e}})})),w(b=>{const I=N.category,e=N.categoryIcon,t=N.contextIcon,a=N.content,m=N.sidebarTitle,d=N.sidebarItems;return I!==b._v$52&&c(h,b._v$52=I),e!==b._v$53&&c(S,b._v$53=e),t!==b._v$54&&c(Y,b._v$54=t),a!==b._v$55&&c(R,b._v$55=a),m!==b._v$56&&c(A,b._v$56=m),d!==b._v$57&&c(D,b._v$57=d),b},{_v$52:void 0,_v$53:void 0,_v$54:void 0,_v$55:void 0,_v$56:void 0,_v$57:void 0}),h}}),null),w(h=>{const S=$.id,Y=N.sidebarHeading;return S!==h._v$58&&Q(U,"id",h._v$58=S),Y!==h._v$59&&c(x,h._v$59=Y),h},{_v$58:void 0,_v$59:void 0}),U})()},"NotificationsSidebar"),qn=Te(Hn),Qn="_separator_1x8ck_1",Vn="_oldNotifications_1x8ck_7",Xn="_loader_1x8ck_11",es="_newContentNotification_1x8ck_16",ts="_avatars_1x8ck_43",ns="_avatar_1x8ck_43",ss="_counter_1x8ck_56",is="_notificationTabs_1x8ck_60",os="_notificationTab_1x8ck_60",rs="_notificationTabContent_1x8ck_93",as="_notificationTabIndicator_1x8ck_97",cs="_notificationTabsPlaceholder_1x8ck_107",se={separator:Qn,oldNotifications:Vn,loader:Xn,newContentNotification:es,avatars:ts,avatar:ns,counter:ss,notificationTabs:is,notificationTab:os,notificationTabContent:rs,notificationTabIndicator:as,notificationTabsPlaceholder:cs},_s=oe("<div><button><div>"),fe=oe("<div>"),ks=T(()=>{const $=Ut(),P=At(),W=be(),[C,z]=Mt();le(!1);const[O,j]=ve({}),[y,ue]=ve({}),[U,x]=ve({}),[h,S]=le(!1),[Y,R]=le(!1),[A,D]=le("all"),b=T(()=>P?.notificationCount?P.notificationCount>100?100:P.notificationCount:0,"newNotifCount"),[I,e]=ve({notes:[],users:[],page:{messages:[],users:{},postStats:{},mentions:{},noteActions:{},topZaps:{}},reposts:{}}),[t,a]=ve({notes:[],users:{},userStats:{},page:{messages:[],users:{},postStats:{},notifications:[],mentions:{},noteActions:{},topZaps:{}},reposts:{},notifications:[]});M(()=>Object.keys(O).length>0);const m=T(()=>{const o=C.user;return o?Re.names[o]?Re.names[o]:o.startsWith("npub")?Rt.decode(o).data:o:$?.publicKey},"publicKey");ge(()=>{if($?.hasPublicKey()&&m()===$.publicKey){const o=`notif_sls_${pe}`,u=ye(o,{onEose:()=>{u()},onNotice:()=>{Wt("Error setting notifications lats seen"),u()}});setTimeout(()=>{ke(o,Ue())},1e3)}});let d={};const F=T((o,u)=>{const v=`notif_${pe}`,E=ye(v,{onEvent:(p,f)=>{if(f){if(f.kind===ee.Notification){const n=JSON.parse(f.content);d[n.type]?d[n.type].push(n):d[n.type]=[n];return}if(f.kind===ee.Metadata){const n=f;ue(r=>({...r,[n.pubkey]:{...n}})),e("page","users",r=>({...r,[n.pubkey]:{...n}}));return}if(f.kind===ee.UserStats){const n=f,r=JSON.parse(f.content);x(s=>({...s,[n.pubkey]:{...r}}));return}if([ee.Text,ee.Repost].includes(f.kind)){const n=f;e("page","messages",r=>[...r,{...n}]);return}if(f.kind===ee.NoteStats){const r=JSON.parse(f.content);e("page","postStats",s=>({...s,[r.event_id]:{...r}}));return}if(f.kind===ee.Mentions){const r=JSON.parse(f.content);e("page","mentions",s=>({...s,[r.id]:{...r}}));return}if(f.kind===ee.NoteActions){const r=JSON.parse(f.content);e("page","noteActions",s=>({...s,[r.event_id]:{...r}}));return}}},onEose:()=>{j(()=>d),e("notes",()=>[...De(I.page)]),S(!0),Dt(Ue()),E()}}),_=C.ignoreLastSeen?0:xe;d={},j(xt({})),Yt($?.publicKey,o,v,u,_)},"fetchNewNotifications");ge(()=>{const o=m();if(!o)return;const u=A();setTimeout(()=>{F(o,u)},10)});const K=T(()=>{Pe(void 0),a("notifications",[]),a("page",()=>({messages:[],users:{},postStats:{},notifications:[]})),j({})},"resetNotifContent");wt(()=>{Pe(void 0),a("notifications",[]),a("page",()=>({messages:[],users:{},postStats:{},notifications:[]})),j({})});const J=T(o=>o.sort((u,v)=>v.created_at-u.created_at),"sortNotifByRecency"),B=T((o,u)=>{const v=`notif_old_${pe}`,E=ye(v,{onEvent:(p,f)=>{if(f?.content){if(f.kind===ee.Notification){const n=JSON.parse(f.content);Ie()?.created_at===n.created_at&&Ie()?.type===n.type||a("page","notifications",s=>s?[...s,n]:[n]);return}if(f.kind===ee.Metadata){const n=f;a("page","users",r=>({...r,[n.pubkey]:{...n}}));return}if(f.kind===ee.UserStats){const n=f,r=JSON.parse(f.content);a("userStats",s=>({...s,[n.pubkey]:{...r}}));return}if([ee.Text,ee.Repost].includes(f.kind)){const n=f;a("page","messages",r=>[...r,{...n}]);return}if(f.kind===ee.NoteStats){const r=JSON.parse(f.content);a("page","postStats",s=>({...s,[r.event_id]:{...r}}));return}if(f.kind===ee.Mentions){const r=JSON.parse(f.content);a("page","mentions",s=>({...s,[r.id]:{...r}}));return}if(f.kind===ee.NoteActions){const r=JSON.parse(f.content);a("page","noteActions",s=>({...s,[r.event_id]:{...r}}));return}}},onEose:()=>{const p=[...t.page.notifications],f=J(p);a("notifications",s=>[...s,...f]),a("notes",s=>[...s,...De(t.page)]);const n=t.page.users,r=Object.keys(n).reduce((s,G)=>({...s,[n[G].pubkey]:{...re(n[G],G)}}),{});a("users",s=>({...s,...r})),R(!1),E()}});a("page",()=>({messages:[],users:{},postStats:{},notifications:[]}));const _=m();_&&(R(!0),Lt($?.publicKey,_,v,u,o))},"fetchOldNotifications");ge(()=>{if($?.hasPublicKey()&&!C.ignoreLastSeen){const o=A();setTimeout(()=>{B(xe||0,o)},10)}});const V=T((o,u)=>{const v=Object.keys(y),E=He[u];return o.reduce((p,f)=>{const n=f[E];return n?p.includes(n)?p:[...p,n]:p},[]).map(p=>({...v.includes(p)?re(y[p],p):ae(p),...U[p]}))},"getUsers"),Z=T((o,u)=>o.reduce((v,E)=>{const _=E[u]||"none";return v[_]=v[_]??[],v[_].push(E),v},{}),"groupBy"),$e=T(()=>{const o=l.NEW_USER_FOLLOWED_YOU,u=O[o];if(u)return i(ne,{type:o,get users(){return V(u,o)}})},"newUserFollowedYou"),me=T(()=>{const o=l.USER_UNFOLLOWED_YOU,u=O[o];if(u)return i(ne,{type:o,get users(){return V(u,o)}})},"userUnfollowedYou"),Oe=T(()=>{const o=l.YOUR_POST_WAS_LIKED,u=O[o]||[],v=Z(u,"your_post"),E=Object.keys(v);return i(q,{each:E,children:_=>i(ne,{type:o,get users(){return V(v[_],o)},get note(){return I.notes.find(p=>p.post.id===_)}})})},"yourPostWasLiked"),Se=T(()=>{const o=l.YOUR_POST_WAS_REPOSTED,u=O[o]||[],v=Z(u,"your_post"),E=Object.keys(v);return i(q,{each:E,children:_=>i(ne,{type:o,get users(){return V(v[_],o)},get note(){return I.notes.find(p=>p.post.id===_)}})})},"yourPostWasReposted"),Ee=T(()=>{const o=l.YOUR_POST_WAS_REPLIED_TO,u=O[o]||[],v=Z(u,"reply"),E=Object.keys(v);return i(q,{each:E,children:_=>i(ne,{type:o,get users(){return V(v[_],o)},get note(){return I.notes.find(p=>p.post.id===_)}})})},"yourPostWasRepliedTo"),Ne=T(()=>{const o=l.YOUR_POST_WAS_ZAPPED,u=O[o]||[],v=Z(u,"your_post"),E=Object.keys(v);return i(q,{each:E,children:_=>{const p=v[_].reduce((f,n)=>n.satszapped?f+n.satszapped:f,0);return i(ne,{type:o,get users(){return V(v[_],o)},get note(){return I.notes.find(f=>f.post.id===_)},get iconInfo(){return`${ie(p)}`},iconTooltip:`${p} sats`})}})},"yourPostWasZapped"),he=T(()=>{const o=l.YOU_WERE_MENTIONED_IN_POST,u=O[o]||[],v=Z(u,"you_were_mentioned_in"),E=Object.keys(v),_=I.notes.filter(n=>E.includes(n.post.id));if(_.length===0)return;const p=Object.keys(y),f=_.reduce((n,r)=>{const s=r.user.pubkey,H=[{...p.includes(s)?re(y[s],s):ae(s),...U[s]}];return{...n,[r.post.id]:H}},{});return i(q,{each:E,children:n=>i(ne,{type:o,get users(){return f[n]},get note(){return _.find(r=>r.post.id===n)}})})},"youWereMentioned"),ft=T(()=>{const o=l.YOUR_POST_WAS_MENTIONED_IN_POST,u=O[o]||[],v=Z(u,"your_post_were_mentioned_in"),E=Object.keys(v),_=I.notes.filter(n=>E.includes(n.post.id));if(_.length===0)return;const p=Object.keys(y),f=_.reduce((n,r)=>{const s=r.user.pubkey,H=[{...p.includes(s)?re(y[s],s):ae(s),...U[s]}];return{...n,[r.post.id]:H}},{});return i(q,{each:E,children:n=>i(ne,{type:o,get users(){return f[n]},get note(){return _.find(r=>r.post.id===n)}})})},"yourPostWasMentioned"),vt=T(()=>{const o=l.POST_YOU_WERE_MENTIONED_IN_WAS_LIKED,u=O[o]||[],v=Z(u,"post_you_were_mentioned_in"),E=Object.keys(v),_=I.notes.filter(n=>E.includes(n.post.id));if(_.length===0)return;const p=Object.keys(y),f=_.reduce((n,r)=>{const s=r.user.pubkey,H=[{...p.includes(s)?re(y[s],s):ae(s),...U[s]}];return{...n,[r.post.id]:H}},{});return i(q,{each:E,children:n=>i(ne,{type:o,get users(){return f[n]},get note(){return _.find(r=>r.post.id===n)}})})},"postYouWereMentionedInWasLiked"),gt=T(()=>{const o=l.POST_YOU_WERE_MENTIONED_IN_WAS_ZAPPED,u=O[o]||[],v=Z(u,"post_you_were_mentioned_in"),E=Object.keys(v),_=I.notes.filter(n=>E.includes(n.post.id));if(_.length===0)return;const p=Object.keys(y),f=_.reduce((n,r)=>{const s=r.user.pubkey,H=[{...p.includes(s)?re(y[s],s):ae(s),...U[s]}];return{...n,[r.post.id]:H}},{});return i(q,{each:E,children:n=>{const r=v[n].reduce((s,G)=>G.satszapped?s+G.satszapped:s,0);return i(ne,{type:o,get users(){return f[n]},get note(){return _.find(s=>s.post.id===n)},get iconInfo(){return`${ie(r)}`},iconTooltip:`${r} sats`})}})},"postYouWereMentionedInWasZapped"),$t=T(()=>{const o=l.POST_YOU_WERE_MENTIONED_IN_WAS_REPOSTED,u=O[o]||[],v=Z(u,"post_you_were_mentioned_in"),E=Object.keys(v),_=I.notes.filter(n=>E.includes(n.post.id));if(_.length===0)return;const p=Object.keys(y),f=_.reduce((n,r)=>{const s=r.user.pubkey,H=[{...p.includes(s)?re(y[s],s):ae(s),...U[s]}];return{...n,[r.post.id]:H}},{});return i(q,{each:E,children:n=>i(ne,{type:o,get users(){return f[n]},get note(){return _.find(r=>r.post.id===n)}})})},"postYouWereMentionedInWasReposted"),mt=T(()=>{const o=l.POST_YOU_WERE_MENTIONED_IN_WAS_REPLIED_TO,u=O[o]||[],v=Z(u,"reply"),E=Object.keys(v),_=I.notes.filter(n=>E.includes(n.post.id));if(_.length===0)return;const p=Object.keys(y),f=_.reduce((n,r)=>{const s=r.user.pubkey,H=[{...p.includes(s)?re(y[s],s):ae(s),...U[s]}];return{...n,[r.post.id]:H}},{});return i(q,{each:E,children:n=>i(ne,{type:o,get users(){return f[n]},get note(){return _.find(r=>r.post.id===n)}})})},"postYouWereMentionedInWasRepliedTo"),Ot=T(()=>{const o=l.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_LIKED,u=O[o]||[],v=Z(u,"post_your_post_was_mentioned_in"),E=Object.keys(v),_=I.notes.filter(n=>E.includes(n.post.id));if(_.length===0)return;const p=Object.keys(y),f=_.reduce((n,r)=>{const s=r.user.pubkey,H=[{...p.includes(s)?re(y[s],s):ae(s),...U[s]}];return{...n,[r.post.id]:H}},{});return i(q,{each:E,children:n=>i(ne,{type:o,get users(){return f[n]},get note(){return _.find(r=>r.post.id===n)}})})},"postYourPostWasMentionedInWasLiked"),St=T(()=>{const o=l.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_ZAPPED,u=O[o]||[],v=Z(u,"post_your_post_was_mentioned_in"),E=Object.keys(v),_=I.notes.filter(n=>E.includes(n.post.id));if(_.length===0)return;const p=Object.keys(y),f=_.reduce((n,r)=>{const s=r.user.pubkey,H=[{...p.includes(s)?re(y[s],s):ae(s),...U[s]}];return{...n,[r.post.id]:H}},{});return i(q,{each:E,children:n=>{const r=v[n].reduce((s,G)=>G.satszapped?s+G.satszapped:s,0);return i(ne,{type:o,get users(){return f[n]},get note(){return _.find(s=>s.post.id===n)},get iconInfo(){return`${ie(r)}`},iconTooltip:`${r} sats`})}})},"postYourPostWasMentionedInWasZapped"),Et=T(()=>{const o=l.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_REPOSTED,u=O[o]||[],v=Z(u,"post_your_post_was_mentioned_in"),E=Object.keys(v),_=I.notes.filter(n=>E.includes(n.post.id));if(_.length===0)return;const p=Object.keys(y),f=_.reduce((n,r)=>{const s=r.user.pubkey,H=[{...p.includes(s)?re(y[s],s):ae(s),...U[s]}];return{...n,[r.post.id]:H}},{});return i(q,{each:E,children:n=>i(ne,{type:o,get users(){return f[n]},get note(){return _.find(r=>r.post.id===n)}})})},"postYourPostWasMentionedInWasReposted"),Nt=T(()=>{const o=l.POST_YOUR_POST_WAS_MENTIONED_IN_WAS_REPLIED_TO,u=O[o]||[],v=Z(u,"reply"),E=Object.keys(v),_=I.notes.filter(n=>E.includes(n.post.id));if(_.length===0)return;const p=Object.keys(y),f=_.reduce((n,r)=>{const s=r.user.pubkey,H=[{...p.includes(s)?re(y[s],s):ae(s),...U[s]}];return{...n,[r.post.id]:H}},{});return i(q,{each:E,children:n=>i(ne,{type:o,get users(){return f[n]},get note(){return _.find(r=>r.post.id===n)}})})},"postYourPostWasMentionedInWasRepliedTo"),[Ie,Pe]=le(),we=T(()=>{const o=t.notifications[t.notifications.length-1];if(!o||o.created_at===Ie()?.created_at)return;Pe(o);const u=o.created_at;u>0&&B(u,A())},"fetchMoreNotifications"),ht=T(()=>{const o=Object.keys(d);let u=[];for(let _=0;_<o.length;_++)u=[...u,...d[o[_]]];const v=J(u);a("notifications",_=>[...v,..._]),a("notes",_=>[...I.notes,..._]),a("reposts",()=>({...I.reposts}));const E=I.users.reduce((_,p)=>({..._,[p.pubkey]:p}),{});a("users",()=>({...E}))},"copyNewNotifsToOld"),pt=T(()=>{ht(),P?.actions.resetNotificationCounter(),ke(`notif_sls_${pe}`,Ue()),A()!=="all"?(K(),D("all")):F(m(),A())},"loadNewContent");return(()=>{const o=fe();return g(o,i(Ft,{get title(){return W.formatMessage(de.title)}}),null),g(o,i(jt,{to:"search_section",get children(){return i(Ct,{})}}),null),g(o,i(Zt,{get title(){return W.formatMessage(de.title)}}),null),g(o,i(k,{get when(){return b()>0&&!$?.showNewNoteForm},get children(){const u=_s(),v=u.firstChild,E=v.firstChild;return v.$$click=pt,g(E,()=>W.formatMessage(de.newNotifs,{number:b()})),w(_=>{const p=se.newContentNotification,f=se.counter;return p!==_._v$&&c(u,_._v$=p),f!==_._v$2&&c(E,_._v$2=f),_},{_v$:void 0,_v$2:void 0}),u}}),null),g(o,i(zt,{get children(){return i(qn,{notifications:O,getUsers:V})}}),null),g(o,i(ce,{get value(){return A()},onChange:u=>{K(),D(u)},get children(){return[i(ce.List,{get class(){return se.notificationTabs},get children(){return[i(ce.Trigger,{get class(){return se.notificationTab},value:"all",get children(){return W.formatMessage(de.all)}}),i(ce.Trigger,{get class(){return se.notificationTab},value:"zaps",get children(){return W.formatMessage(de.zaps)}}),i(ce.Trigger,{get class(){return se.notificationTab},value:"replies",get children(){return W.formatMessage(de.replies)}}),i(ce.Trigger,{get class(){return se.notificationTab},value:"mentions",get children(){return W.formatMessage(de.mentions)}}),i(ce.Trigger,{get class(){return se.notificationTab},value:"reposts",get children(){return W.formatMessage(de.reposts)}}),i(ce.Indicator,{get class(){return se.notificationTabIndicator}})]}}),i(ce.Content,{get class(){return se.notificationTabContent},value:"all",get children(){return i(k,{get when(){return M(()=>!!m())()&&h()},get fallback(){return(()=>{const u=fe();return g(u,i(Ae,{})),w(()=>c(u,se.loader)),u})()},get children(){return[M(()=>$e()),M(()=>me()),M(()=>Ne()),M(()=>Ee()),M(()=>Se()),M(()=>Oe()),M(()=>he()),M(()=>ft()),M(()=>gt()),M(()=>mt()),M(()=>$t()),M(()=>vt()),M(()=>St()),M(()=>Nt()),M(()=>Et()),M(()=>Ot()),i(k,{get when(){return Y()},get children(){const u=fe();return g(u,i(Ae,{})),w(()=>c(u,se.loader)),u}}),i(k,{get when(){return t.notifications.length>0},get children(){const u=fe();return g(u,i(q,{get each(){return t.notifications},children:v=>i(je,{notification:v,get users(){return t.users},get userStats(){return t.userStats},get notes(){return t.notes}})}),null),g(u,i(Ye,{loadNextPage:we}),null),w(()=>c(u,se.oldNotifications)),u}})]}})}}),i(q,{each:["zaps","replies","mentions","reposts"],children:u=>i(ce.Content,{get class(){return se.notificationTabContent},value:u,get children(){return i(k,{get when(){return t.notifications.length>0},get fallback(){return(()=>{const v=fe();return g(v,i(Ae,{})),w(()=>c(v,se.loader)),v})()},get children(){const v=fe();return g(v,i(q,{get each(){return t.notifications},children:E=>i(je,{notification:E,get users(){return t.users},get userStats(){return t.userStats},get notes(){return t.notes}})}),null),g(v,i(Ye,{loadNextPage:we}),null),w(()=>c(v,se.oldNotifications)),v}})}})})]}}),null),o})()},"Notifications");kt(["click"]);export{ks as default};
//# sourceMappingURL=Notifications-0ecd435b.js.map
