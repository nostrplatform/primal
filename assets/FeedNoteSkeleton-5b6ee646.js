var x=Object.defineProperty;var h=(n,i)=>x(n,"name",{value:i,configurable:!0});import{h as C,a_ as I,g as A,B as F,j as m,c as f,k as L,A as b,S as T,l as g,m as v,s as S,t as N,ai as w}from"./index-64dc6460.js";import{a as P}from"./dates-9bcb2bf7.js";import{i as j}from"./ParsedNote-9900e3c8.js";import{s}from"./Skeleton.module-8b20490e.js";const z="_smallNote_gn5hy_1",B="_avatar_gn5hy_11",D="_avatarImg_gn5hy_16",E="_content_gn5hy_21",M="_header_gn5hy_29",O="_name_gn5hy_36",R="_time_gn5hy_44",q="_message_gn5hy_53",c={smallNote:z,avatar:B,avatarImg:D,content:E,header:M,name:O,time:R,message:q},G=N("<div><div></div><div>"),H=N("<div><div>"),J=N("<div>"),K=h(n=>{const i=I();A();const d=F(),u=h(a=>{i?.actions.setPrimaryNote(a)},"navToThread"),$=h(()=>w(n.note.user||{pubkey:n.note.post.pubkey}),"nameOfAuthor");return(()=>{const a=J();return m(a,f(b,{get href(){return d?.actions.profileLink(n.note.user.npub)||""},get class(){return c.avatar},get children(){return f(L,{get user(){return n.note.user},size:"xxs"})}}),null),m(a,f(b,{get href(){return`/e/${n.note.post.noteId}`},get class(){return c.content},onClick:()=>u(n.note),get children(){return[(()=>{const e=G(),r=e.firstChild,o=r.nextSibling;return m(r,$),m(o,f(T,{get when(){return n.children},get fallback(){return P(n.note.post?.created_at).label},get children(){return n.children}})),g(t=>{const _=c.header,l=c.name,y=$(),k=c.time;return _!==t._v$&&v(e,t._v$=_),l!==t._v$2&&v(r,t._v$2=l),y!==t._v$3&&S(r,"title",t._v$3=y),k!==t._v$4&&v(o,t._v$4=k),t},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),e})(),(()=>{const e=H(),r=e.firstChild;return m(r,f(j,{get note(){return n.note},noLinks:"text",ignoreMedia:!0,ignoreLinebreaks:!0,shorten:!0,veryShort:!0})),g(()=>v(e,c.message)),e})()]}}),null),g(e=>{const r=n.id,o=c.smallNote,t=n.note.post.noteId;return r!==e._v$5&&S(a,"id",e._v$5=r),o!==e._v$6&&v(a,e._v$6=o),t!==e._v$7&&S(a,"data-note-id",e._v$7=t),e},{_v$5:void 0,_v$6:void 0,_v$7:void 0}),a})()},"SmallNote"),p=C(K),Q=N("<div><div></div><div><div></div><div>"),ee=h(n=>(()=>{const i=Q(),d=i.firstChild,u=d.nextSibling,$=u.firstChild,a=$.nextSibling;return g(e=>{const r=s.shortNoteSkeleton,o=s.avatarSN,t=s.shortNote,_=s.headerSN,l=s.contentSN;return r!==e._v$&&v(i,e._v$=r),o!==e._v$2&&v(d,e._v$2=o),t!==e._v$3&&v(u,e._v$3=t),_!==e._v$4&&v($,e._v$4=_),l!==e._v$5&&v(a,e._v$5=l),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),i})(),"ShortNoteSkeleton"),U=N("<div><div><div></div><div></div></div><div>"),te=h(n=>(()=>{const i=U(),d=i.firstChild,u=d.firstChild,$=u.nextSibling,a=d.nextSibling;return g(e=>{const r=s.feedNoteSkeleton,o=s.headerN,t=s.avatarN,_=s.userInfoN,l=s.contentN;return r!==e._v$&&v(i,e._v$=r),o!==e._v$2&&v(d,e._v$2=o),t!==e._v$3&&v(u,e._v$3=t),_!==e._v$4&&v($,e._v$4=_),l!==e._v$5&&v(a,e._v$5=l),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),i})(),"FeedNoteSkeleton");export{te as F,ee as S,p as a};
//# sourceMappingURL=FeedNoteSkeleton-5b6ee646.js.map
