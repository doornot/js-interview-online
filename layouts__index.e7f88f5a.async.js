(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{aArQ:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var l=a(n("q1tI")),r=(a(n("17x9")),a(n("npWm")));function u(e){e.location,e.route;var t=e.children;return l.default.createElement(r.default,null,t)}},md0f:function(e,t,n){e.exports=n.p+"static/favicon.c9241552.png"},npWm:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("lUTK");var l=a(n("BvKs"));n("B9cy");var r=a(n("Ol7k")),u=a(n("q1tI")),d=(a(n("17x9")),n("MuoO")),i=n("TJpk"),o=n("7DNP"),c=a(n("mOP9")),f=a(n("dPBl")),m=n("ypOd"),p=n("4/jj"),s=a(n("md0f")),h=a(n("zwU1")),g=a(n("pIEt"));function v(e){var t=e.pageTitle,n=e.children,a=e.locationPathname,d=e.screenWidth;return(0,m.destoryGlobalSpinner)(),d<1e3?u.default.createElement("div",{className:g.default.warning},"\u672c\u6d4b\u9a8c\u4e0d\u9002\u5408\u5728\u5c0f\u5c4f\u73af\u5883\u4e0b\u4f7f\u7528\uff0c\u8bf7\u7528\u5927\u5c4f\u5e55\u6253\u5f00"):"/"!==a&&p.routes.every(function(e){return e.path!==a})?u.default.createElement(f.default,{to:{pathname:"/exam1"}}):u.default.createElement(u.default.Fragment,null,u.default.createElement(i.Helmet,null,u.default.createElement("title",null,t),u.default.createElement("link",{rel:"icon",href:s.default,type:"image/x-icon"})),u.default.createElement(r.default,{className:g.default.layout},u.default.createElement(r.default.Header,{className:g.default.header},u.default.createElement("img",{src:h.default,style:{width:"70px"},alt:""}),u.default.createElement("h2",null,"javascript \u5c0f\u6d4b\u9a8c")),u.default.createElement(r.default,{className:g.default.main},u.default.createElement(r.default.Sider,{width:300,style:{background:"#fff"}},u.default.createElement(l.default,{mode:"inline",selectedKeys:[a],style:{height:"100%",borderRight:0}},p.routes.map(function(e){return u.default.createElement(l.default.Item,{key:e.path},u.default.createElement(c.default,{to:e.path},e.title))}))),u.default.createElement(r.default,{style:{padding:"4px 5px 0px 5px",backgroundColor:"#fff"}},u.default.createElement(r.default.Content,{className:g.default.content},n)))))}var E=(0,o.withRouter)((0,d.connect)(function(e){var t=e.app;return{pageTitle:t.pageTitle,locationPathname:t.locationPathname,screenWidth:t.screenWidth}})(v));t.default=E},pIEt:function(e,t,n){e.exports={layout:"layout___3xIQq",header:"header___3-i7Z",main:"main___2MA8Y",content:"content___1xosW",warning:"warning___2Qbu0"}},ypOd:function(e,t,n){"use strict";function a(e){if(!e||!e.getBoundingClientRect)return!1;var t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,a=window.innerWidth||document.documentElement.clientWidth,l=t.top<=n&&t.top+t.height>=0,r=t.left<=a&&t.left+t.width>=0;return l&&r}function l(){var e=document.querySelector("#splash-spinner"),t=document.querySelector(".spinner");e&&document.head.removeChild(e),t&&t.parentNode.removeChild(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.inViewPort=a,t.destoryGlobalSpinner=l},zwU1:function(e,t,n){e.exports=n.p+"static/logo.4a0d4349.png"}}]);