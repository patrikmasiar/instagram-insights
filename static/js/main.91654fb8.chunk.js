(this["webpackJsonpinstagram-insights"]=this["webpackJsonpinstagram-insights"]||[]).push([[0],{1:function(e,a,t){e.exports={wrapper:"Insights_wrapper__1fO9B",row:"Insights_row__3JTjA",name:"Insights_name__n8UXp",value:"Insights_value__38uFF"}},23:function(e,a,t){e.exports=t(48)},28:function(e,a,t){},3:function(e,a,t){e.exports={wrapper:"Form_wrapper__2JLZ4",loader:"Form_loader__5Q-aI",loaderLabel:"Form_loaderLabel__13akk",label:"Form_label__1ILmH",input:"Form_input__Vfo9P",button:"Form_button__DF5Bm"}},47:function(e,a,t){e.exports=t.p+"static/media/instagram-logo.6517a7ee.jpeg"},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(17),l=t.n(s),o=(t(28),t(18)),c=t(19),i=t(22),m=t(21),u=Object(n.createContext)({}),d=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(u.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),p=u.Consumer,_=t(5),f=t.n(_),g=t(7),b=t.n(g),v=t(20),w=t(4),E=t(3),h=t.n(E),N=t(6),D=t.n(N),k=t(1),j=t.n(k),O=function(e){var a=e.data,t=void 0===a?null:a,n=function(){var e=0,a=0,n=0;if(t&&t.mediaData){for(var r=0;r<12;r++)e+=parseInt(t.mediaData.edges[r].node.edge_media_to_comment.count);for(var s=0;s<12;s++)a+=parseInt(t.mediaData.edges[s].node.edge_media_preview_like.count);t&&t.followersData&&(n=(a+e)/t.followersData/12)}return{mediaCount:t.mediaData?parseInt(t.mediaData.count):0,totalComments:e,totalLikes:a,engagementRatio:n}};return r.a.createElement("div",{className:j.a.wrapper},r.a.createElement("div",{className:j.a.row},r.a.createElement("span",{className:j.a.name},"Followers"),r.a.createElement("span",{className:j.a.value},t&&t.followersData?t.followersData:0)),r.a.createElement("div",{className:j.a.row},r.a.createElement("span",{className:j.a.name},"Following"),r.a.createElement("span",{className:j.a.value},t&&t.followingData?t.followingData:0)),r.a.createElement("div",{className:j.a.row},r.a.createElement("span",{className:j.a.name},"Media count"),r.a.createElement("span",{className:j.a.value},n().mediaCount)),r.a.createElement("div",{className:j.a.row},r.a.createElement("span",{className:j.a.name},"Total comments"),r.a.createElement("span",{className:j.a.value},n().totalComments)),r.a.createElement("div",{className:j.a.row},r.a.createElement("span",{className:j.a.name},"Total likes"),r.a.createElement("span",{className:j.a.value},n().totalLikes)),r.a.createElement("div",{className:j.a.row},r.a.createElement("span",{className:j.a.name},"Engagement ratio"),r.a.createElement("span",{className:j.a.value},n().engagementRatio)))},I=function(){var e=Object(n.useState)(null),a=Object(w.a)(e,2),t=a[0],s=a[1],l=Object(n.useState)(!1),o=Object(w.a)(l,2),c=o[0],i=o[1],m=Object(n.useState)(null),u=Object(w.a)(m,2),d=u[0],p=u[1],_=Object(n.useState)(null),f=Object(w.a)(_,2),g=f[0],E=f[1],N=Object(n.useState)(null),k=Object(w.a)(N,2),j=k[0],I=k[1],x="https://www.instagram.com/graphql/query/",y="?query_hash=58712303d941c6855d4e888c5f0cd22f&variables=%7B%22id%22%3A%22".concat(t,"%22%2C%22first%22%3A24%7D"),C="?query_hash=37479f2b8209594dde7facb0d904896a&variables=%7B%22id%22%3A%22".concat(t,"%22%2C%22first%22%3A24%7D"),F="?query_hash=f2405b236d85e8296cf30347c9f08c2a&variables=%7B%22id%22%3A%22".concat(t,"%22%2C%22first%22%3A12%7D"),A=function(){var e=Object(v.a)(b.a.mark((function e(){var a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t){e.next=3;break}return alert("Insert User ID, please."),e.abrupt("return",!1);case 3:return i(!0),e.next=6,D.a.get("".concat(x).concat(C));case 6:if(!(a=e.sent)||"ok"!==a.data.status){e.next=18;break}return p(a.data.data.user.edge_followed_by.count),e.next=11,D.a.get("".concat(x).concat(y));case 11:if(!(n=e.sent)||"ok"!==n.data.status){e.next=18;break}return E(n.data.data.user.edge_follow.count),e.next=16,D.a.get("".concat(x).concat(F));case 16:(r=e.sent)&&"ok"===r.data.status&&I(r.data.data.user.edge_owner_to_timeline_media);case 18:i(!1);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:h.a.wrapper},c&&r.a.createElement("div",{className:h.a.loader},r.a.createElement("span",{className:h.a.loaderLabel},"LOADING DATA...")),r.a.createElement("span",{className:h.a.label},"User ID ",r.a.createElement("a",{href:"https://codeofaninja.com/tools/find-instagram-user-id",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",null,"generate here"))),r.a.createElement("input",{type:"text",required:!0,value:null===t?"":t,onChange:function(e){return s(e.target.value)},className:h.a.input,placeholder:"User ID ..."}),r.a.createElement("button",{type:"button",onClick:A,className:h.a.button},"Submit"),r.a.createElement(O,{data:{followersData:d,followingData:g,mediaData:j}}))},x=t(47),y=function(){return r.a.createElement("div",{className:f.a.wrapper},r.a.createElement("img",{src:x,alt:"Instagram logo",className:f.a.igLogo}),r.a.createElement("span",{className:f.a.title},"Instagram insights"),r.a.createElement("span",{className:f.a.subtitle},"by ",r.a.createElement("a",{href:"http://masso.sk/",rel:"noopener noreferrer",target:"_blank"},"Masso dev.")),r.a.createElement(I,null))},C=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(p,null,(function(e){return r.a.createElement(y,null)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=function(){return r.a.createElement(d,null,r.a.createElement(C,null))};l.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,a,t){e.exports={wrapper:"Main_wrapper__2Fnja",igLogo:"Main_igLogo__Ulz9r",title:"Main_title__PONBW",subtitle:"Main_subtitle__3J8d7"}}},[[23,1,2]]]);
//# sourceMappingURL=main.91654fb8.chunk.js.map