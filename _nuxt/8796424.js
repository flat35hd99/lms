(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{384:function(t,e,n){var content=n(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("1b5359d0",content,!0,{sourceMap:!1})},386:function(t,e,n){"use strict";n.r(e);var r={props:{content:{type:Object,required:!0}}},o=(n(388),n(59)),c=n(67),l=n.n(c),d=n(385),f=n(383),v=n(429),m=n(382),x=n(152),h=n(430),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"ma-1 mb-1",attrs:{nuxt:!0,to:t.content.path,outlined:""}},[n("v-container",{staticClass:"pa-0"},[n("v-row",{attrs:{dense:"",align:"center"}},[n("v-col",{attrs:{xs:"12",sm:"4"}},[n("v-img",{staticClass:"white--text align-end",attrs:{contain:"","max-height":"200",src:t.content.thumbnail}})],1),t._v(" "),n("v-col",{attrs:{xs:"12",sm:"8"}},[n("v-card-title",[t._v(t._s(t.content.title))]),t._v(" "),n("v-card-subtitle",{staticClass:"pb-0"},[t._v("\n          "+t._s(t.content.date)+"\n        ")]),t._v(" "),n("v-card-text",{staticClass:"text--primary"},[n("div",[t._v(t._s(t.content.description))])])],1)],1)],1)],1)}),[],!1,null,"20859a65",null);e.default=component.exports;l()(component,{VCard:d.a,VCardSubtitle:f.a,VCardText:f.b,VCardTitle:f.c,VCol:v.a,VContainer:m.a,VImg:x.a,VRow:h.a})},387:function(t,e,n){"use strict";n.r(e);var r={components:{ContentListCard:n(386).default},props:{contents:{type:Array,required:!0}}},o=n(59),c=n(67),l=n.n(c),d=n(429),f=n(430),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{dense:""}},t._l(t.contents,(function(content){return n("v-col",{key:content.path,attrs:{cols:"12"}},[n("content-list-card",{attrs:{content:content}})],1)})),1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{ContentListCard:n(386).default}),l()(component,{VCol:d.a,VRow:f.a})},388:function(t,e,n){"use strict";n(384)},389:function(t,e,n){var r=n(17)(!1);r.push([t.i,"a[data-v-20859a65]{padding:0}",""]),t.exports=r},395:function(t,e,n){"use strict";n.r(e);n(32),n(68),n(60),n(72),n(38);var r={name:"TopicPath",computed:{breadcrumbs:function(){var t=this.$route.path.split("/");return t.shift(),t.map((function(t,i,e){return{text:t,to:"/".concat(e.slice(0,i+1).join("/")),exact:!0,nuxt:!0}}))}}},o=n(59),c=n(67),l=n.n(c),d=n(400),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs,divider:"/"}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBreadcrumbs:d.a})},399:function(t,e,n){"use strict";n.r(e);var r={props:{content:{type:Object,required:!0}}},o=n(59),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("nuxt-content",{attrs:{document:t.content}})],1)}),[],!1,null,null,null);e.default=component.exports},415:function(t,e,n){var content=n(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("4105ef01",content,!0,{sourceMap:!1})},420:function(t,e,n){"use strict";n(415)},421:function(t,e,n){var r=n(17)(!1);r.push([t.i,".post-title{font-size:1.4rem}.creation_date{font-size:.7rem}.headline,.nuxt-post h1{border-bottom:1px solid #ddd;margin-top:49px;margin-bottom:24px}.nuxt-post h1{font-size:1.25rem;font-weight:400}.nuxt-post h2{font-size:1.15rem;font-weight:400}.nuxt-post h3{font-size:1.05rem;font-weight:500}.nuxt-post h4{font-size:.95;font-weight:600}.nuxt-post p{line-height:2rem}.nuxt-post p img{max-width:100%;height:auto;display:block;margin:auto;text-align:center}",""]),t.exports=r},436:function(t,e,n){"use strict";n.r(e);var r=n(24),o=(n(88),n(9),n(26),n(395)),c=n(387),l={components:{ContentBody:n(399).default,TopicPath:o.default,ContentList:c.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("posts",r.category,r.slug).fetch();case 3:return o=e.sent,e.next=6,n("posts",r.category).limit(6).fetch();case 6:return c=(c=e.sent).filter((function(t){return t.slug!==r.slug})),e.abrupt("return",{post:o,categorizedContents:c,params:r});case 9:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.post.title," | ").concat(this.params.category)}}},d=(n(420),n(59)),f=n(67),v=n.n(f),m=n(429),x=n(176),h=n(430),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"10",lg:"7",xl:"7"}},[n("topic-path")],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"10",md:"10",lg:"7",xl:"7"}},[n("h1",{staticClass:"post-title"},[n("span",[t._v(t._s(t.post.title))])]),t._v(" "),n("span",{staticClass:"text--disabled creation_date"},[t._v("作成日時: "+t._s(t.post.date))])])],1),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"10",lg:"7",xl:"6"}},[n("content-body",{attrs:{content:t.post}})],1)],1),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{xs:"12",sm:"10",md:"10",lg:"7",xl:"7"}},t._l(t.post.tags,(function(e){return n("span",{key:e},[n("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/posts/tags/"+e}},[n("v-icon",[t._v("mdi-tag")]),t._v("\n          "+t._s(e)+"\n        ")],1)],1)})),0)],1),t._v(" "),n("v-row",{attrs:{justify:"center",dense:""}},[n("v-col",{attrs:{xs:"12",sm:"10",md:"10",lg:"7",xl:"7"}},[n("h1",{staticClass:"pl-1",staticStyle:{"font-size":"1.2rem"}},[t._v("\n        関連記事\n      ")])])],1),t._v(" "),n("v-row",{attrs:{justify:"center",dense:""}},[n("v-col",{attrs:{xs:"12",sm:"10",md:"10",lg:"7",xl:"7"}},[n("content-list",{attrs:{contents:t.categorizedContents}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{TopicPath:n(395).default,ContentBody:n(399).default,ContentList:n(387).default}),v()(component,{VCol:m.a,VIcon:x.a,VRow:h.a})}}]);