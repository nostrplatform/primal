var W=Object.defineProperty;var v=(e,_)=>W(e,"name",{value:_,configurable:!0});import{l as g,m as a,t as $,h as P,u as A,B as I,c as o,j as d,k as M,ai as y,S as x,J as z,s as w,A as N,F as p}from"./index-64dc6460.js";import{T as U}from"./ParsedNote-9900e3c8.js";import{s as h}from"./Skeleton.module-8b20490e.js";import{F as B}from"./FollowButton-d935d050.js";const R=$("<div><div><div></div><div><div></div><div></div></div></div><div>"),j=v(e=>(()=>{const _=R(),c=_.firstChild,t=c.firstChild,s=t.nextSibling,r=s.firstChild,l=r.nextSibling,n=c.nextSibling;return g(i=>{const f=h.threadPeopleSkeleton,m=h.headerTP,b=h.avatarTP,k=h.userInfoTP,C=h.nameTP,T=h.nip05TP,F=h.bodyTP;return f!==i._v$&&a(_,i._v$=f),m!==i._v$2&&a(c,i._v$2=m),b!==i._v$3&&a(t,i._v$3=b),k!==i._v$4&&a(s,i._v$4=k),C!==i._v$5&&a(r,i._v$5=C),T!==i._v$6&&a(l,i._v$6=T),F!==i._v$7&&a(n,i._v$7=F),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),_})(),"ThreadPeopleSkeleton"),D="_trendingSection_1xxa9_1",E="_trendingUsers_1xxa9_5",J="_user_1xxa9_9",K="_name_1xxa9_24",V="_stickyWrapper_1xxa9_37",Z="_heading_1xxa9_47",q="_peopleList_1xxa9_74",G="_avatar_1xxa9_82",H="_avatarImg_1xxa9_88",O="_content_1xxa9_93",Q="_verification_1xxa9_111",X="_verifiedName_1xxa9_120",Y="_npub_1xxa9_129",ee="_about_1xxa9_138",ne="_message_1xxa9_155",te="_time_1xxa9_155",re="_follow_1xxa9_159",ie="_unfollow_1xxa9_176",oe="_mentionedPerson_1xxa9_203",se="_header_1xxa9_212",ae="_verifiedIcon_1xxa9_325",u={trendingSection:D,trendingUsers:E,user:J,name:K,stickyWrapper:V,heading:Z,peopleList:q,avatar:G,avatarImg:H,content:O,verification:Q,verifiedName:X,npub:Y,about:ee,message:ne,time:te,follow:re,unfollow:ie,mentionedPerson:oe,header:se,verifiedIcon:ae},le=$("<span>"),de=$("<div><div><div></div><div>"),_e=$("<div>"),ue=v(e=>{const _=A(),c=I();return o(N,{get href(){return c?.actions.profileLink(e.person?.npub)||""},get class(){return u.mentionedPerson},get children(){return[(()=>{const t=de(),s=t.firstChild,r=s.firstChild,l=r.nextSibling;return d(t,o(M,{size:"sm",get user(){return e.person}}),s),d(r,()=>y(e.person)),d(l,o(x,{get when(){return e.person?.nip05},get children(){const n=le();return d(n,()=>z(e.person)),g(i=>{const f=u.verifiedBy,m=e.person?.nip05;return f!==i._v$&&a(n,i._v$=f),m!==i._v$2&&w(n,"title",i._v$2=m),i},{_v$:void 0,_v$2:void 0}),n}})),d(t,o(x,{get when(){return _?.publicKey!==e.person?.pubkey||!_?.following.includes(e.person?.pubkey||"")},get children(){return o(B,{get person(){return e.person}})}}),null),g(n=>{const i=u.header,f=u.content,m=u.name,b=u.verification,k=e.person?.nip05;return i!==n._v$3&&a(t,n._v$3=i),f!==n._v$4&&a(s,n._v$4=f),m!==n._v$5&&a(r,n._v$5=m),b!==n._v$6&&a(l,n._v$6=b),k!==n._v$7&&w(l,"title",n._v$7=k),n},{_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),t})(),o(x,{get when(){return!e.noAbout},get children(){const t=_e();return d(t,()=>e.person.about||""),g(()=>a(t,u.about)),t}})]}})},"MentionedPerson"),S=P(ue),ce=$("<div>"),ve=$('<div id="trending_section"><div class="animated">'),$e=$('<div class="animated">'),ge=v(e=>{A();const _=v(()=>e.author,"author"),c=v(()=>e.mentioned,"mentioned");return[(()=>{const t=ce();return d(t,()=>e.label),g(()=>a(t,u.heading)),t})(),o(U,{name:"slide-fade",get children(){return o(x,{get when(){return e.author||e.mentioned.length>0},get fallback(){return o(j,{})},get children(){const t=ve(),s=t.firstChild;return d(s,o(S,{get person(){return _()}})),d(t,o(p,{get each(){return c()},children:r=>(()=>{const l=$e();return d(l,o(S,{person:r})),l})()}),null),g(()=>a(t,`${u.authorSection}`)),t}})}})]},"MentionedPeople"),fe=P(ge),L=$('<div id="trending_section">'),me=$("<div><div>"),he=$("<div>"),xe=$('<div class="animated">'),be=v(e=>{const _=I(),c=v(()=>e.people,"people");return(()=>{const t=me(),s=t.firstChild;return d(s,()=>e.label),d(t,o(x,{get when(){return e.singleFile},get fallback(){return(()=>{const r=L();return d(r,o(p,{get each(){return c()},children:l=>o(N,{get href(){return _?.actions.profileLink(l.npub)||""},get class(){return u.user},get title(){return y(l)},get children(){return[o(M,{user:l,size:"vs"}),(()=>{const n=he();return d(n,()=>y(l)),g(()=>a(n,u.name)),n})()]}})})),g(()=>a(r,u.trendingUsers)),r})()},get children(){const r=L();return d(r,o(p,{get each(){return c()},children:l=>(()=>{const n=xe();return d(n,o(S,{person:l,noAbout:!0})),n})()})),g(()=>a(r,u.trendingSection)),r}}),null),g(()=>a(s,u.heading)),t})()},"Repliers"),ke=P(be),Pe=$("<div>"),ye=v(e=>{const _=v(()=>e.note?.user,"author"),c=v(()=>{if(!e.note)return[];const s=e.note?.msg.tags.filter(n=>n[0]==="p").map(n=>n[1]),r=(e.note?.topZaps[0]||{}).pubkey;return e.people.filter(n=>[...s,r].includes(n.pubkey)).filter(n=>n.pubkey!==_()?.pubkey)},"mentioned"),t=v(()=>e.note?e.people.filter(s=>s.pubkey!==_()?.pubkey&&(e.note?.mentionedUsers||{})[s.pubkey]===void 0):e.people,"repliers");return(()=>{const s=Pe();return d(s,o(x,{get when(){return _()},get children(){return o(fe,{get mentioned(){return c()},get author(){return _()},get label(){return e.mentionLabel||""}})}}),null),d(s,o(U,{name:"slide-fade",get children(){return o(x,{get when(){return t().length>0},get children(){return o(ke,{get people(){return t()},get label(){return e.label||""},get singleFile(){return e.singleFile}})}})}}),null),g(r=>{const l=e.id,n=u.stickyWrapper;return l!==r._v$&&w(s,"id",r._v$=l),n!==r._v$2&&a(s,r._v$2=n),r},{_v$:void 0,_v$2:void 0}),s})()},"PeopleList"),Fe=P(ye);export{Fe as P};
//# sourceMappingURL=PeopleList-618c041a.js.map
