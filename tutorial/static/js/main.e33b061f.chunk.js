(this.webpackJsonpeditor_tutorial=this.webpackJsonpeditor_tutorial||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c(0),n=c(24),a=c.n(n),r=(c(32),c(33),c(2)),o=c(4),l=c(8),d=c(17),g=c.n(d),u=(c(49),c(50),c(25)),b=c.n(u),j=function(e){var t=e.handlechange,c=e.transitionToggle,n=e.value,a=Object(s.useState)(n.pageID),r=Object(l.a)(a,2),o=r[0],d=r[1],g=Object(s.useState)(""),u=Object(l.a)(g,2),b=u[0],j=u[1],x=[{id:1,div:Object(i.jsx)("div",{onClick:t,test:"qq",value:"tt",style:{width:"calc(100% - 40px)",height:"48px",margin:"10px 20px",border:"1px solid #333",borderRadius:"4px",lineHeight:"48px"},children:"\ud14c\uc2a4\ud2b81"})},{id:2,div:Object(i.jsx)("div",{onClick:t,test:"qq",value:"tt",style:{width:"calc(100% - 40px)",height:"48px",margin:"10px 20px",border:"1px solid #333",borderRadius:"4px",lineHeight:"48px"},children:"\ud14c\uc2a4\ud2b82"})},{id:3,div:Object(i.jsx)("div",{onClick:t,test:"qq",value:"tt",style:{width:"calc(100% - 40px)",height:"48px",margin:"10px 20px",border:"1px solid #333",borderRadius:"4px",lineHeight:"48px"},children:"\ud14c\uc2a4\ud2b83"})},{id:4,div:Object(i.jsx)("div",{onClick:t,test:"qq",value:"tt",style:{width:"calc(100% - 40px)",height:"48px",margin:"10px 20px",border:"1px solid #333",borderRadius:"4px",lineHeight:"48px"},children:"\ud14c\uc2a4\ud2b84"})},{id:5,div:Object(i.jsx)("div",{onClick:t,test:"qq",value:"tt",style:{width:"calc(100% - 40px)",height:"48px",margin:"10px 20px",border:"1px solid #333",borderRadius:"4px",lineHeight:"48px"},children:"\ud14c\uc2a4\ud2b85"})}];return Object(s.useEffect)((function(){console.log(n),d(n.nextPageID),console.log(o),j(x.find((function(e,t,c){return e.id===n.pageID})).div)}),[n.pageID]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"actionArea ".concat(c.background?"toggle":""),children:b})})},x=function(e){var t=e.sliderArea;e.transitionToggle;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(g.a,Object(o.a)(Object(o.a)({ref:t},{dots:!1,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"./img/test_image.png",style:{width:"100%"}})},1),Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"./img/test_image.png",style:{width:"100%"}})},2),Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"./img/test_image.png",style:{width:"100%"}})},3),Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"./img/test_image.png",style:{width:"100%"}})},4),Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"./img/test_image.png",style:{width:"100%"}})},5)]}))})},h=[{id:1,title:"\ucf58\ud150\uce20 \uc18c\uc7ac \uc120\ud0dd",body:"\uc5b4\ub5a4 \ub0b4\uc6a9\uc73c\ub85c \ucf58\ud150\uce20\ub97c \ub9cc\ub4e4\uace0 \uc2f6\uc740\uc9c0 \uc120\ud0dd\ud574\ubcf4\uc138\uc694.\nwyd\uac00 \uae30\ud68d\uc744 \ub3c4\uc640\ub4dc\ub9b4\uaed8\uc694.",success:"\uc774\ub807\uac8c \ucd94\uac00\ud558\uc2dc\uba74 \ub41c\ub2f5\ub2c8\ub2e4."},{id:2,title:"titleTest2",body:"\ud14c\uc2a4\ud2b8\ubc14\ub5142",success:""},{id:3,title:"titleTest3",body:"\ud14c\uc2a4\ud2b8 3\ubc88",success:""},{id:4,title:"titleTest4",body:"\ud14c\uc2a4\ud2b8 4\ubc88",success:""},{id:5,title:"titleTest5",body:"\ud14c\uc2a4\ud2b8 5\ubc88",success:""}],p=function(e){e.history;var t=e.location,c=Object(s.useState)(0),n=Object(l.a)(c,2),a=n[0],r=n[1],d=Object(s.useState)(0),g=Object(l.a)(d,2),u=g[0],p=g[1],O=Object(s.useState)({background:!1,alert:!1,congraturation:!1}),m=Object(l.a)(O,2),v=m[0],f=m[1];console.log("tutorial\ud398\uc774\uc9c0\ub85c\ub529");var y=[],N=b.a.parse(t.search,{ignoreQueryPrefix:!0}),w=[{type:"influencer",page:[1,2,3,4]},{type:"dubbing",page:[1,3,5]},{type:"chobo",page:[1,2,3]}].find((function(e){return e.type===N.type}));void 0!==w?(w.page.forEach((function(e,t,c){y.push(h.find((function(t){return t.id===e})))})),console.log(y)):y=h,console.log(y);var P=Object(s.useState)({title:"",body:"",bgImage:"",fn:"",pageNum:0,showPageNum:1,maxPageNum:y.length,percent:0,pageID:y[0].id,success:y[0].success,nextPageID:y[1].id}),k=Object(l.a)(P,2),T=k[0],I=k[1],q=Object(s.useRef)(),C=Object(s.useRef)(),D=Object(i.jsx)("div",{className:"after"});return Object(s.useEffect)((function(){f(Object(o.a)(Object(o.a)({},v),{},{background:!0,alert:!0})),I(Object(o.a)(Object(o.a)({},T),{},{title:y[0].title,body:y[0].body,success:y[0].success})),console.log(T)}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"image_wrap",children:[Object(i.jsx)(x,{sliderArea:q,transitionToggle:v}),Object(i.jsx)(j,{handlechange:function(e){console.log(T),r(a+1),p(100*T.showPageNum/T.maxPageNum),f(Object(o.a)(Object(o.a)({},v),{},{background:!1,alert:!0,congraturation:!1})),setTimeout((function(){f(Object(o.a)(Object(o.a)({},v),{},{background:!1,alert:!0,congraturation:!0})),T.showPageNum===T.maxPageNum&&(C.current.innerText="\uc644\ub8cc")}),500)},transitionToggle:v,value:T})]}),Object(i.jsx)("div",{className:"dim ".concat(v.background?"toggle":"")}),Object(i.jsxs)("div",{className:"alert ".concat(v.alert?"alerttoggle":""),children:[Object(i.jsxs)("div",{className:"congraturation ".concat(v.congraturation?"congraturationToggle":""),children:[Object(i.jsxs)("span",{className:"title",children:[" ",v.congraturation?"".concat(T.title," \uc644\ub8cc"):""]}),Object(i.jsx)("span",{className:"body",children:v.congraturation?"".concat(T.success):""}),v.congraturation?Object(i.jsx)("button",{type:"button",onClick:function(e){var t,c;T.showPageNum===T.maxPageNum?(t="true"===N.newUser,document.location.href="./end.html?newUser="+t):(a+1<y.length||(c=!1),f(Object(o.a)(Object(o.a)({},v),{},{background:!0,congraturation:!1})),I(Object(o.a)(Object(o.a)({},T),{},{title:y[a].title,body:y[a].body,pageNum:a,showPageNum:a+1,percent:100*T.showPageNum/T.maxPageNum,pageID:y[a].id,nextPageID:c,success:y[a].success})),q.current.slickNext(),console.log(T))},ref:C,children:"\ub2e4\uc74c"}):"",v.congraturation?D:""]}),Object(i.jsxs)("div",{className:"title",children:[T.title," (",T.pageNum+1,"/",T.maxPageNum,")"]}),Object(i.jsx)("div",{className:"progressBar-root",children:Object(i.jsx)("div",{className:"progressBar",style:{backgroundColor:"rgb(0,115,240)",transform:"translateX(".concat(-100+u,"%)"),transition:"all 0.3s ease-in-out"}})}),Object(i.jsx)("div",{className:"body",children:T.body.split("\n").map((function(e){return Object(i.jsxs)("span",{children:[e,Object(i.jsx)("br",{})]})}))})]})]})};var O=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(r.a,{path:"/",component:p})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),i(e),s(e),n(e),a(e)}))},v=c(18);a.a.render(Object(i.jsx)(v.a,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),m()}},[[57,1,2]]]);
//# sourceMappingURL=main.e33b061f.chunk.js.map