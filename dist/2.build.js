webpackJsonp([2,5],{16:function(e,t,n){n(53);var r=n(5)(n(49),n(55),null,null);e.exports=r.exports},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{activeIndex:null}},created:function(){this.activeIndex=this.$props.aindex},props:{aindex:[String,Number]}}},51:function(e,t,n){t=e.exports=n(46)(void 0),t.push([e.i,".index-footer_Gtduid_{position:fixed;left:0;right:0;bottom:0;z-index:9999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-top:.12rem;background-color:#fff;height:1.333333rem;box-shadow:0 -.02667rem .05333rem rgba(0,0,0,.1)}.index-footerTab_bl0lbJN{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:block;width:0;text-align:center}.index-footerTabIcon_1EbB8wS{width:.533333rem;height:.533333rem}.index-footerTabTextActive_3gjOLc6{color:#0089dc}.index-footerTabText_1It8yh0{display:block;color:#666;font-size:.266667rem}",""])},53:function(e,t,n){var r=n(51);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(7)("1a5bdd1a",r,!0)},55:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-footer_Gtduid_"},[n("a",{staticClass:"index-footerTab_bl0lbJN",attrs:{href:"index.html"}},[n("svg",{staticClass:"index-footerTabIcon_1EbB8wS"},[0!=e.activeIndex?n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#index-regular.b245d60"}}):e._e(),e._v(" "),0==e.activeIndex?n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#index.18edf5a"}}):e._e()]),e._v(" "),n("span",{staticClass:"index-footerTabText_1It8yh0 index-footerTabTextActive_3gjOLc6"},[e._v("外卖")])]),e._v(" "),n("a",{staticClass:"index-footerTab_bl0lbJN",attrs:{href:"orders.html"}},[n("svg",{staticClass:"index-footerTabIcon_1EbB8wS"},[1!=e.activeIndex?n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#order-regular.41c17f8"}}):e._e(),e._v(" "),1==e.activeIndex?n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#order.070ae2a"}}):e._e()]),e._v(" "),n("span",{staticClass:"index-footerTabText_1It8yh0"},[e._v("订单")])]),e._v(" "),n("a",{staticClass:"index-footerTab_bl0lbJN",attrs:{href:"personal.html"}},[n("svg",{staticClass:"index-footerTabIcon_1EbB8wS"},[2!=e.activeIndex?n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#profile-regular.c151d62"}}):e._e(),e._v(" "),2==e.activeIndex?n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#profile.dbc5ebf"}}):e._e()]),e._v(" "),n("span",{staticClass:"index-footerTabText_1It8yh0"},[e._v("我的")])])])},staticRenderFns:[]}},6:function(e,t,n){"use strict";e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var s=t[i],a=s[0],o=s[1],l=s[2],d=s[3],c={id:e+":"+i,css:o,media:l,sourceMap:d};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}},7:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(s(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(s(n.parts[i]));c[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function s(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(p)return h;r.parentNode.removeChild(r)}if(b){var s=x++;r=u||(u=i()),t=a.bind(null,r,s,!1),n=a.bind(null,r,s,!0)}else r=i(),t=o.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,i);else{var s=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function o(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(6),c={},f=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,x=0,p=!1,h=function(){},b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){p=n;var i=d(e,t);return r(i),function(t){for(var n=[],s=0;s<i.length;s++){var a=i[s],o=c[a.id];o.refs--,n.push(o)}t?(i=d(e,t),r(i)):i=[];for(var s=0;s<n.length;s++){var o=n[s];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete c[o.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}});