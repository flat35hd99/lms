(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{422:function(t,e,n){var content=n(423);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("0cd63bd9",content,!0,{sourceMap:!1})},423:function(t,e,n){var o=n(17)(!1);o.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=o},430:function(t,e,n){"use strict";n.r(e);var o={props:{project:{required:!0,type:Object}}},r=n(59),l=n(67),c=n.n(l),h=n(114),d=n(461),f=n(176),v=n(460),m=n(426),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",[n("v-parallax",{attrs:{src:t.project.thumbnail}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h2",{staticClass:"text-h4 font-weight-thin mb-4"},[t._v("\n            グリーンベルトジオラマ化計画\n          ")]),t._v(" "),n("h4",{staticClass:"subheading"},[t._v("\n            グリーンベルトの保存\n          ")]),t._v(" "),n("v-btn",{attrs:{icon:"",to:t.project.path,color:"red"}},[n("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VCol:d.a,VIcon:f.a,VParallax:v.a,VRow:m.a})},460:function(t,e,n){"use strict";n(29),n(422);var o=n(1).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),r=n(5),l=Object(r.a)(o);e.a=l.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}})}}]);