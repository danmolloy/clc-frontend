(this["webpackJsonpceltic-corner"]=this["webpackJsonpceltic-corner"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),a=n(16),i=n.n(a),r=(n(22),n(23),n(7)),j=n(1),o=function(){return Object(j.jsxs)("div",{id:"navbar",children:[Object(j.jsx)(r.b,{to:"/",className:"navbar-link",children:"Home"}),Object(j.jsx)(r.b,{to:"/artists",className:"navbar-link",children:"Artists"}),Object(j.jsx)(r.b,{to:"/songs",className:"navbar-link",children:"Songs"})]})},b=function(){return Object(j.jsx)("div",{className:"main",children:Object(j.jsx)("h1",{children:"Celtic Lyric Corner"})})},l=n(10),h=function(){var t=Object(c.useState)(null),e=Object(l.a)(t,2),n=e[0],s=e[1],a=Object(c.useState)(null),i=Object(l.a)(a,2),o=(i[0],i[1]),b=Object(c.useState)(null),h=Object(l.a)(b,2),u=(h[0],h[1]);Object(c.useEffect)((function(){d()}));var d=function(){fetch("data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(t){s(t.artist),o(t.albums),u(t.members)}))};return Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("h2",{children:"Artists"}),Object(j.jsx)(r.b,{to:"/artists/".concat(n),children:n})]})},u=function(){return Object(j.jsx)("div",{className:"main",children:Object(j.jsx)("h1",{children:"Songs"})})},d=n(2),O=function(t){var e=t.match.params.artist;return Object(j.jsx)("div",{className:"main",children:Object(j.jsx)("h1",{children:e})})};var m=function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{}),Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/artists/:artistName",component:O}),Object(j.jsx)(d.a,{path:"/artists",component:h}),Object(j.jsx)(d.a,{path:"/songs",component:u}),Object(j.jsx)(d.a,{path:"/",component:b})]})]})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),s(t),a(t),i(t)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.23929443.chunk.js.map