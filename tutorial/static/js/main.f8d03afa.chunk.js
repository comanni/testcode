(this.webpackJsonpeditor_tutorial=this.webpackJsonpeditor_tutorial||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(0),a=c(21),s=c.n(a),r=(c(29),c(30),c(2)),o=c(4),d=c(12),j=c(22),b=c.n(j),l=(c(46),c(47),function(e){var t=e.history,c=Object(n.useState)(1),a=Object(d.a)(c,2),s=a[0],r=a[1],j=Object(n.useState)({background:!1,alert:!1,congraturation:!1}),l=Object(d.a)(j,2),g=l[0],u=l[1],m=Object(n.useState)({title:"",body:"",bgImage:"",fn:"",pageNum:0,showPageNum:1,maxPageNum:5,percent:0}),O=Object(d.a)(m,2),x=O[0],h=O[1],p=function(e){r(s+1),h(Object(o.a)(Object(o.a)({},x),{},{percent:100*x.showPageNum/x.maxPageNum})),u(Object(o.a)(Object(o.a)({},g),{},{background:!1})),setTimeout((function(){u(Object(o.a)(Object(o.a)({},g),{},{background:!1,congraturation:!0}))}),500),x.showPageNum===x.maxPageNum?setTimeout((function(){t.push("/end")}),500):setTimeout((function(){N(),u(Object(o.a)(Object(o.a)({},g),{},{background:!0,congraturation:!1})),h(Object(o.a)(Object(o.a)({},x),{},{title:v[s].title,body:v[s].body,fn:v[s].fn,pageNum:s,showPageNum:s+1,percent:100*x.showPageNum/x.maxPageNum})),console.log(x)}),3e3)},f=Object(i.jsx)("div",{onClick:p,test:"qq",value:"tt",style:{width:"calc(100% - 40px)",height:"48px",margin:"10px 20px",border:"1px solid #333",borderRadius:"4px",lineHeight:"48px"},children:"\ud14c\uc2a4\ud2b8"}),v=[{id:1,title:"titleTest1",body:"\ud14c\uc2a4\ud2b8\ubc14\ub514\nTest",bgImage:"",fn:f},{id:2,title:"titleTest2",body:"\ud14c\uc2a4\ud2b8\ubc14\ub5142",bgImage:"",fn:f},{id:3,title:"titleTest3",body:"\ud14c\uc2a4\ud2b8 3\ubc88",bgImage:""},{id:4,title:"titleTest4",body:"\ud14c\uc2a4\ud2b8 4\ubc88",bgImage:""},{id:3,title:"titleTest5",body:"\ud14c\uc2a4\ud2b8 5\ubc88",bgImage:""}],y=Object(n.useRef)(),N=function(){y.current.slickNext()},w=Object(i.jsx)("div",{className:"after"});return Object(n.useEffect)((function(){u(Object(o.a)(Object(o.a)({},g),{},{background:!0,alert:!0})),h(Object(o.a)(Object(o.a)({},x),{},{title:v[0].title,body:v[0].body,fn:v[0].fn})),console.log("useEFFECT")}),[]),Object(n.useEffect)((function(){console.log(v,x)}),[v,x]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"image_wrap",children:[Object(i.jsxs)(b.a,Object(o.a)(Object(o.a)({ref:y},{dots:!1,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"./img/test_image.png",style:{width:"100%"}})},1),Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"./img/test_image.png",style:{width:"100%"}})},2),Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"./img/test_image.png",style:{width:"100%"}})},3),Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"./img/test_image.png",style:{width:"100%"}})},4),Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"./img/test_image.png",style:{width:"100%"}})},5)]})),Object(i.jsx)("div",{className:"actionArea ".concat(g.background?"toggle":""),children:Object(i.jsx)("div",{onClick:p,test:"qq",value:"tt",style:{width:"calc(100% - 40px)",height:"48px",margin:"10px 20px",border:"1px solid #333",borderRadius:"4px",lineHeight:"48px"},children:"\ud14c\uc2a4\ud2b8"})})]}),Object(i.jsx)("div",{className:"dim ".concat(g.background?"toggle":"")}),Object(i.jsxs)("div",{className:"alert ".concat(g.alert?"alerttoggle":""),children:[Object(i.jsxs)("div",{className:"congraturation ".concat(g.congraturation?"congraturationToggle":""),children:[Object(i.jsxs)("span",{children:[" ",g.congraturation?"\uc131\uacf5":""]}),g.congraturation?w:""]}),Object(i.jsxs)("div",{className:"title",children:[x.title," (",x.pageNum+1,"/",x.maxPageNum,")"]}),Object(i.jsx)("div",{className:"progressBar-root",children:Object(i.jsx)("div",{className:"progressBar",style:{backgroundColor:"rgb(0,115,240)",transform:"translateX(".concat(-100+x.percent,"%)"),transition:"all 0.3s ease-in-out"}})}),Object(i.jsx)("div",{className:"body",children:x.body.split("\n").map((function(e){return Object(i.jsxs)("span",{children:[e,Object(i.jsx)("br",{})]})}))})]})]})})}),g=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{children:"header"}),Object(i.jsx)("div",{children:"body"}),Object(i.jsx)("div",{children:"end button"})]})},u=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{children:"header"}),Object(i.jsx)("div",{children:"body"})]})};var m=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(r.a,{path:"/",exact:!0,component:u}),Object(i.jsx)(r.a,{path:"/tutorial",exact:!0,component:l}),Object(i.jsx)(r.a,{path:"/end",component:g})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),i(e),n(e),a(e),s(e)}))},x=c(16);s.a.render(Object(i.jsx)(x.a,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),O()}},[[52,1,2]]]);
//# sourceMappingURL=main.f8d03afa.chunk.js.map