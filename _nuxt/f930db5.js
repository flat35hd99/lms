(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{223:function(t,e,n){var content=n(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("7388ab72",content,!0,{sourceMap:!1})},250:function(t,e,n){"use strict";var r=n(59),o=n(67),l=n.n(o),c=n(373),d=n(383),v=n(379),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("global-header"),t._v(" "),n("v-main",[n("v-container",[n("Nuxt")],1)],1),t._v(" "),n("global-footer")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{GlobalHeader:n(363).default,GlobalFooter:n(364).default}),l()(component,{VApp:c.a,VContainer:d.a,VMain:v.a})},261:function(t,e,n){n(262),t.exports=n(263)},293:function(t,e,n){"use strict";n(223)},294:function(t,e,n){var r=n(17)(!1);r.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=r},363:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{drawer:!1,links:[{path:"/",name:"Home"},{path:"/projects/green-belt-diorama",name:"Project"},{path:"/posts",name:"Post"},{path:"/machines",name:"Machine"}]}}},o=n(59),l=n(67),c=n.n(l),d=n(382),v=n(374),f=n(152),_=n(375),h=n(376),m=n(380),w=n(377),x=n(381),V=n(246),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{app:"","hide-on-scroll":""}},[n("v-app-bar-nav-icon",{staticClass:"d-md-none",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",[n("v-img",{attrs:{src:"SD_NULib_mini.png",height:"2rem",contain:""}})],1),t._v(" "),n("v-tabs",{staticClass:"d-none d-md-flex"},t._l(t.links,(function(link){return n("v-tab",{key:link.name,attrs:{to:link.path,nuxt:""}},[t._v("\n        "+t._s(link.name)+"\n      ")])})),1)],1),t._v(" "),n("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.links,(function(link){return n("v-list-item",{key:link.name,attrs:{to:link.path,nuxt:""}},[t._v("\n        "+t._s(link.name)+"\n      ")])})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAppBar:d.a,VAppBarNavIcon:v.a,VImg:f.a,VList:_.a,VListItem:h.a,VNavigationDrawer:m.a,VTab:w.a,VTabs:x.a,VToolbarTitle:V.a})},364:function(t,e,n){"use strict";n.r(e);var r=n(59),o=n(67),l=n.n(o),c=n(378),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{absolute:"",padless:"",app:""}},[n("span",[t._v("© "+t._s((new Date).getFullYear()))])])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VFooter:c.a})},78:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(293),n(59)),l=n(67),c=n.n(l),d=n(373),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[261,22,2,23]]]);