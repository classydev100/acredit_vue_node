(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{333:function(t,e,n){"use strict";var strong=n(348),r=n(336);t.exports=n(349)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},336:function(t,e,n){var r=n(28);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},337:function(t,e,n){var content=n(362);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("04ad3c02",content,!0,{sourceMap:!1})},348:function(t,e,n){"use strict";var r=n(35).f,o=n(91),c=n(200),l=n(58),f=n(198),d=n(199),v=n(146),h=n(202),y=n(147),w=n(29),_=n(140).fastKey,m=n(336),j=w?"_s":"size",O=function(t,e){var n,r=_(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){f(t,h,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[j]=0,null!=r&&d(r,n,t[v],t)}));return c(h.prototype,{clear:function(){for(var t=m(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[j]=0},delete:function(t){var n=m(this,e),r=O(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[j]--}return!!r},forEach:function(t){m(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!O(m(this,e),t)}}),w&&r(h.prototype,"size",{get:function(){return m(this,e)[j]}}),h},def:function(t,e,n){var r,o,c=O(t,e);return c?c.v=n:(t._l=c={i:o=_(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[j]++,"F"!==o&&(t._i[o]=c)),t},getEntry:O,setStrong:function(t,e,n){v(t,e,(function(t,n){this._t=m(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?h(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,h(1))}),n?"entries":"values",!n,!0),y(e)}}},349:function(t,e,n){"use strict";var r=n(22),o=n(17),c=n(36),l=n(200),meta=n(140),f=n(199),d=n(198),v=n(28),h=n(30),y=n(145),w=n(90),_=n(148);t.exports=function(t,e,n,m,j,O){var x=r[t],C=x,k=j?"set":"add",S=C&&C.prototype,P={},E=function(t){var e=S[t];c(S,t,"delete"==t||"has"==t?function(a){return!(O&&!v(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return O&&!v(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof C&&(O||S.forEach&&!h((function(){(new C).entries().next()})))){var D=new C,z=D[k](O?{}:-0,1)!=D,G=h((function(){D.has(1)})),M=y((function(t){new C(t)})),N=!O&&h((function(){for(var t=new C,e=5;e--;)t[k](e,e);return!t.has(-0)}));M||((C=e((function(e,n){d(e,C,t);var r=_(new x,e,C);return null!=n&&f(n,j,r[k],r),r}))).prototype=S,S.constructor=C),(G||N)&&(E("delete"),E("has"),j&&E("get")),(N||z)&&E(k),O&&S.clear&&delete S.clear}else C=m.getConstructor(e,t,j,k),l(C.prototype,n),meta.NEED=!0;return w(C,t),P[t]=C,o(o.G+o.W+o.F*(C!=x),P),O||m.setStrong(C,t,j),C}},361:function(t,e,n){"use strict";var r=n(337);n.n(r).a},362:function(t,e,n){(e=n(10)(!1)).push([t.i,'.opacity-1[data-v-4fc7e439]{position:absolute;top:150px;z-index:99;margin:auto;width:60%}@media only screen and (max-width:960px){.opacity-1[data-v-4fc7e439]{width:100%}.opacity-1 p[data-v-4fc7e439]{display:none}.min[data-v-4fc7e439]{height:200px!important}}@media only screen and (min-width:960px){.min[data-v-4fc7e439]{min-height:600px}}.img-bg[data-v-4fc7e439]{background-image:url(https://d36fgo9tveb5fn.cloudfront.net/wp-content/uploads/2019/08/23141524/ff_photographer_25.jpg);background-size:cover;background-position:50%;margin-right:0!important;position:relative}.img-bg>.bg-overlay[data-v-4fc7e439] :after{content:"";position:absolute;display:inline-block;left:0;right:0;top:0;bottom:0;width:100%;height:100%;background:rgba(0,88,124,.5);z-index:8}.font1[data-v-4fc7e439]{font-size:35px}.font2[data-v-4fc7e439]{font-size:22px}',""]),t.exports=e},366:function(t,e,n){"use strict";n(361);var r=n(34),o=n(37),c=n.n(o),l=n(377),f=n(325),d=n(129),v=n(379),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",md:"7",sm:"12"}},[n("v-row",{staticClass:"fill-height img-bg",attrs:{dark:"",align:"center",justify:"center"}},[n("v-row",{staticClass:"fill-height bg-overlay",attrs:{dark:"",align:"center",justify:"center"}},[n("v-row",{staticClass:"min",attrs:{dark:"",align:"center",justify:"center"}},[n("v-container")],1)],1)],1),t._v(" "),n("div",{staticClass:"opacity-1"},[n("h1",{staticClass:"font1 white--text bold text-uppercase",attrs:{align:"center"}},[t._v(" Quick, safe and easy ")]),t._v(" "),n("p",{staticClass:"font2 white--text  mt-9",attrs:{align:"center"}},[n("v-icon",{staticClass:"font1 white--text mr-9"},[t._v("mdi-file-multiple-outline")]),t._v(" Your invoice and Get paid right now")],1),t._v(" "),n("p",{staticClass:"font2 white--text  mt-9",attrs:{align:"center"}},[n("v-icon",{staticClass:"font1 white--text mr-9"},[t._v("mdi-account-arrow-left-outline")]),t._v("Create Your invoice and Get paid right now")],1),t._v(" "),n("p",{staticClass:"font2 white--text  mt-9",attrs:{align:"center"}},[n("v-icon",{staticClass:"font1 white--text mr-9"},[t._v("mdi-bike-fast")]),t._v("Create Your invoice and Get paid right now")],1),t._v(" "),n("p",{staticClass:"font2 white--text  mt-9",attrs:{align:"center"}},[n("v-icon",{staticClass:"font1 white--text mr-9"},[t._v("mdi-bike-fast")]),t._v("Create Your invoice and Get paid right now")],1)])],1)}),[],!1,null,"4fc7e439",null);e.a=component.exports;c()(component,{VCol:l.a,VContainer:f.a,VIcon:d.a,VRow:v.a})},377:function(t,e,n){"use strict";n(12),n(7),n(57),n(38),n(39);var r=n(2),o=(n(42),n(333),n(43),n(5),n(4),n(8),n(16),n(201),n(1)),c=n(73),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=["sm","md","lg","xl"],v=d.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=d.reduce((function(t,e){return t["offset"+Object(l.C)(e)]={type:[String,Number],default:null},t}),{}),y=d.reduce((function(t,e){return t["order"+Object(l.C)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(y)};function _(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var m=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({cols:{type:[Boolean,String,Number],default:!1}},v,{offset:{type:[String,Number],default:null}},h,{order:{type:[String,Number],default:null}},y,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=m.get(l);return d||function(){var t,e;for(e in d=[],w)w[e].forEach((function(t){var r=n[t],o=_(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),m.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},379:function(t,e,n){"use strict";n(12),n(7);var r=n(2),o=(n(42),n(333),n(43),n(5),n(4),n(8),n(38),n(39),n(201),n(1)),c=n(73),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=["sm","md","lg","xl"],v=["start","end","center"];function h(t,e){return d.reduce((function(n,r){return n[t+Object(l.C)(r)]=e(),n}),{})}var y=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},w=h("align",(function(){return{type:String,default:null,validator:y}})),_=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},m=h("justify",(function(){return{type:String,default:null,validator:_}})),j=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},O=h("alignContent",(function(){return{type:String,default:null,validator:j}})),x={align:Object.keys(w),justify:Object.keys(m),alignContent:Object.keys(O)},C={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=C[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var S=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},w,{justify:{type:String,default:null,validator:_}},m,{alignContent:{type:String,default:null,validator:j}},O),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=S.get(l);return d||function(){var t,e;for(e in d=[],x)x[e].forEach((function(t){var r=n[t],o=k(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),S.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},394:function(t,e,n){var content=n(496);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("2a65c044",content,!0,{sourceMap:!1})},495:function(t,e,n){"use strict";var r=n(394);n.n(r).a},496:function(t,e,n){(e=n(10)(!1)).push([t.i,".thank[data-v-e39e1d02]{border:1px solid #336882;border-radius:4px;padding:15px;margin-top:50px}.link[data-v-e39e1d02]{text-decoration:none}",""]),t.exports=e},570:function(t,e,n){"use strict";n.r(e);var r={components:{LeftSide:n(366).a}},o=(n(495),n(34)),c=n(37),l=n.n(c),f=n(377),d=n(325),v=n(379),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{attrs:{"no-gutters":""}},[e("LeftSide"),this._v(" "),e("v-col",{staticStyle:{"padding-top":"30px"},attrs:{cols:"12",md:"5",sm:"12"}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",[e("v-container",[e("h6",{staticClass:"display-2 bold",staticStyle:{color:"#336882"},attrs:{align:"center"}},[this._v(" Create Account ")]),this._v(" "),e("div",{staticClass:"thank"},[e("p",[this._v(" Thank you for registration with us , your account have been created ")]),this._v(" "),e("p",[e("nuxt-link",{staticClass:"link",attrs:{to:"/login"}},[this._v("Signin")]),this._v("  into your account ")],1)])])],1)],1)],1)],1)}),[],!1,null,"e39e1d02",null);e.default=component.exports;l()(component,{VCol:f.a,VContainer:d.a,VRow:v.a})}}]);