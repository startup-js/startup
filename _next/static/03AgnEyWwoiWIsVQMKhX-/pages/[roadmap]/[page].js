(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{JwPr:function(t,e,a){"use strict";a.r(e);var n=a("SaUy");e.default=n.default},SaUy:function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),i=a.n(n),o=a("eomm"),l=a.n(o),r=a("tc1D"),s=a("sDeB"),d=a("3dwh"),p=a("o9J2"),c=a("CxiY"),u=a("4dTo"),m=a("WXeD"),g=a("vOnD"),f=g.a.div.withConfig({displayName:"style__SummaryContainer",componentId:"sc-1yo2r0g-0"})([""]),b=g.a.div.withConfig({displayName:"style__UpcomingContainer",componentId:"sc-1yo2r0g-1"})(["text-align:center;padding:40px 0 50px;.container{position:relative;}"]),x=g.a.div.withConfig({displayName:"style__Summary",componentId:"sc-1yo2r0g-2"})(["margin-top:35px;min-height:400px;max-width:1000px;display:block;position:relative;text-align:left;"]),h=a("TSYQ"),y=a.n(h),v=a("A80k"),w=a("5DmR"),_=a("0NY6"),N=a("NGGp"),k=i.a.createElement,C=function(t){var e=t.roadmap;if(e.upcoming)return k(i.a.Fragment,null,k(w.a,{roadmap:e}),k(b,null,k(v.a,{guide:{fileName:"upcoming"}})));var n=e.path.replace(/^\//,""),o=a("OP1z")("./".concat(n)).default;return k(f,null,k(w.a,{roadmap:e}),k(x,{className:y()("container",{"container-small":e.isTextHeavy})},k(N.a,null,k(o,null)),k(_.a,{title:e.description,url:e.url})))},j=a("IP2g"),I=a("8tEE"),S=g.a.div.withConfig({displayName:"style__SummaryContainer",componentId:"sc-9j3l5u-0"})([""]),O=g.a.div.withConfig({displayName:"style__Summary",componentId:"sc-9j3l5u-1"})(["text-align:left;min-height:400px;display:flex;.container{position:relative;}"]),P=g.a.div.withConfig({displayName:"style__PageHeader",componentId:"sc-9j3l5u-2"})(["padding-top:20px;padding-bottom:20px;h3{margin-bottom:4px;font-weight:600;font-size:21px;}p{margin-bottom:0;font-size:14px;color:#696969;a{color:#101010;}}"]),z=g.a.div.withConfig({displayName:"style__RoadmapMeta",componentId:"sc-9j3l5u-3"})(["flex:1;"]),T=g.a.div.withConfig({displayName:"style__ShareRoadmap",componentId:"sc-9j3l5u-4"})(["display:flex;align-items:center;a{margin-bottom:0;& + a{margin-left:5px;}}"]),D=g.a.div.withConfig({displayName:"style__MobileNavHeader",componentId:"sc-9j3l5u-5"})(["padding:10px 0;display:flex;align-items:center;position:relative;"]),E=g.a.button.withConfig({displayName:"style__SidebarButton",componentId:"sc-9j3l5u-6"})(["background:transparent;border:none !important;box-shadow:none !important;outline:none !important;-webkit-appearance:none;display:flex;align-items:center;svg{margin-right:10px;}"]),U=g.a.div.withConfig({displayName:"style__PageDetail",componentId:"sc-9j3l5u-7"})(["padding:25px 0 100px;"]),J=g.a.h1.withConfig({displayName:"style__PageTitle",componentId:"sc-9j3l5u-8"})(["font-size:40px;font-weight:700;"]),M=g.a.div.withConfig({displayName:"style__Sidebar",componentId:"sc-9j3l5u-9"})(["padding-bottom:150px;ul{list-style:none;margin:0;padding:0;}.bullet{display:inline-block;margin-right:7px;width:7px;height:7px;min-width:7px;border-radius:100%;background:#efefef;transform:translateX(-4px);transition:background 0.5s ease;}.links-group{padding:30px 0 10px;width:260px;h3{font-size:12px;font-weight:600;text-transform:uppercase;padding-left:20px;}}.progress-badge{position:relative;top:-2px;margin-left:5px;}.links-group.in-progress{opacity:0.3;}.links-group li{list-style:none;margin:7px 0;a{font-size:14px;font-weight:normal;color:#696969;}.bullet{display:inline-block;margin-right:12px;width:7px;height:7px;min-width:7px;border-radius:100%;background:#efefef;transform:translateX(-4px);transition:background 0.5s ease;}&.active a{color:#101010;}&.active .bullet{background:#101010;}}"]),X=g.a.div.withConfig({displayName:"style__DesktopSidebarWrap",componentId:"sc-9j3l5u-10"})(["border-left:1px solid #efefef;","{position:sticky;top:0;background:white;}"],M),H=g.a.div.withConfig({displayName:"style__MobileSidebarWrap",componentId:"sc-9j3l5u-11"})(["position:absolute;z-index:999;background:white;width:100%;left:0;bottom:100%;overflow-y:scroll;box-shadow:rgba(0,0,0,0.1) 0 10px 20px;top:calc(100% + 1px);transition:bottom 0.5s ease 0s;&.visible{bottom:-50vh;}"]),R=Object(g.a)(M).withConfig({displayName:"style__MobileSidebar",componentId:"sc-9j3l5u-12"})(["border-left:1px solid #efefef;margin-left:12px;padding-bottom:20px;.links-group{width:auto;}.progress-badge{position:relative;top:-2px;margin-left:5px;}"]),W=a("wHSu"),Y=a("7T8v"),q=a("QVTM"),B=i.a.createElement,G=function(t){var e=t.roadmap,i=Object(n.useState)(!1),o=i[0],l=i[1],r=e.sidebar,s=void 0===r?{}:r,d=e.page,p=void 0===d?{}:d,c=e.author,m=void 0===c?{}:c,g=Object.keys(s||{}).map((function(t,e){if(!t.startsWith("_")){var a=0!==e;return B("div",{className:"links-group ".concat(a?"in-progress":""),key:t},B("h3",null,t,a&&B("span",{className:"badge badge-warning progress-badge"},"In Progress")),B("ul",null,s[t].map((function(t){var e=t.url===p.url,a=t.url==="".concat(p.url,"/summary");return B("li",{className:y()({active:e||a}),key:t.url},B("a",{href:t.url},B("span",{className:"bullet"}),t.title))}))))}})),f=p.path.replace(/^\//,""),b=a("OP1z")("./".concat(f)).default;return B(S,null,B(P,{className:"border-top border-bottom text-center text-md-left"},B("div",{className:"container d-flex align-items-center flex-column flex-md-row"},B(z,null,B("h3",null,e.title),B("p",null,"Roadmap contributed by ",B("a",{href:m.url,target:"_blank"},m.name),e.contributorsCount>1&&' and <a href="'.concat(e.contributorsUrl,'">').concat(e.contributorsCount," others</a>"))),B(T,{className:"mt-2 mt-md-0"},B(q.a,{href:u.url.repo,target:"_blank"},B(j.a,{icon:I.c})),B(q.a,{href:Object(Y.a)({text:e.title,url:e.url}),target:"_blank"},B(j.a,{icon:I.a})),B(q.a,{href:Object(Y.d)({text:e.title,url:e.url}),target:"_blank"},B(j.a,{icon:I.g})),B(q.a,{href:Object(Y.c)({text:e.title,url:e.url}),target:"_blank"},B(j.a,{icon:I.e}))))),B(D,{className:"border-bottom d-block d-md-none"},B("div",{className:"container"},B(E,{onClick:function(){return l((function(t){return!t}))}},B(j.a,{icon:W.b}),p.title)),B(H,{className:y()({visible:o})},B("div",{className:"container"},B(R,null,g)))),B(O,{className:"container"},B(X,{className:"d-none d-md-block"},B(M,null,g)),B(U,null,B(J,null,p.title),B(N.a,null,B(b,null)))))},Q=i.a.createElement,A=function(t){var e,a,n=t.roadmap,i=t.canonical;if(!n)return Q(l.a,{statusCode:404});var o=n.upcoming||!n.detailed;return Q(r.a,null,Q(m.a,{canonical:i,title:(null===n||void 0===n?void 0:null===(e=n.seo)||void 0===e?void 0:e.title)||n.title,description:(null===n||void 0===n?void 0:null===(a=n.seo)||void 0===a?void 0:a.description)||n.description,keywords:(null===n||void 0===n?void 0:n.keywords)||[]}),Q(s.a,null),Q(o?C:G,{roadmap:n}),Q(d.a,null))};A.getInitialProps=Object(p.a)((function(t){var e=t.req;return{canonical:"".concat(u.url.web).concat(e.url),roadmap:Object(c.a)(e)}}));e.default=A},UOzt:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[roadmap]/[page]",function(){return a("JwPr")}])}},[["UOzt",0,1,3,6,8,11,10,2,5,7,9,12,13,4]]]);