(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),i=n.n(c),r=n(2),s=n(9),u=n(0),j=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(r.a)(n,2),i=c[0],j=c[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(s.a)(e))})),j(""))},children:Object(u.jsx)("input",{type:"text",value:i,onChange:function(e){j(e.target.value)}})})},o=n(10),d=n(6),l=n.n(d),b=n(8),m=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a,c,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=u3XS6TB93Hj9JrDd8EHTVBXYZ0SuOiyE"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,i=c.data,r=i.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){e.id;var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__zoomIn",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},O=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(r.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){m(e).then((function(e){i({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,i=n.loading;return Object(u.jsx)(u.Fragment,{children:i?Object(u.jsx)("p",{className:" animate__animated animate__bounceIn",children:"Loading"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__zoomIn",children:t}),Object(u.jsx)("div",{className:"gif-grid",children:c.map((function(e){return Object(u.jsx)(p,Object(o.a)({},e),e.id)}))})]})})},f=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"main-banner",children:[Object(u.jsx)("div",{className:"banner"}),Object(u.jsxs)("div",{className:"initial-info container",children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)("p",{children:"\xa1Gifs dynamic search!"}),Object(u.jsx)(j,{setCategories:c})]})]}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("ul",{children:n.map((function(e){return Object(u.jsx)(O,{category:e},e)}))})})]})};n(17);i.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a7464dd6.chunk.js.map