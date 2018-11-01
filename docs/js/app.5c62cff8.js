(function(t){function e(e){for(var r,a,s=e[0],l=e[1],c=e[2],p=0,m=[];p<s.length;p++)a=s[p],n[a]&&m.push(n[a][0]),n[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,s=1;s<o.length;s++){var l=o[s];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var r={},n={app:0},i=[];function a(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=r,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(o,r,function(e){return t[e]}.bind(null,r));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/wtm-map/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var r=o("c21b"),n=o.n(r);n.a},"22aa":function(t,e,o){"use strict";var r=o("761d"),n=o.n(r);n.a},"2fc4":function(t,e,o){},"49f8":function(t,e,o){var r={"./en.json":"edd4","./fr.json":"f693"};function n(t){var e=i(t);return o(e)}function i(t){var e=r[t];if(!(e+1)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return e}n.keys=function(){return Object.keys(r)},n.resolve=i,t.exports=n,n.id="49f8"},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var r=o("a026"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("MapContainer"),o("dialogs-wrapper")],1)},i=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"map-container"}},[o("LeafletMap",{attrs:{id:"leaflet-map-main",token:t.mapbox_token,markers:t.markers}}),o("Sidebar",{attrs:{id:"sidebar-main",markers:t.markers}})],1)},s=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"leaflet-map"},[o("l-map",{attrs:{zoom:t.zoom,center:t.center,options:t.mapOptions,bounds:t.bounds,"min-zoom":t.minZoom,"max-zoom":t.maxZoom},on:{"update:zoom":function(e){t.zoom=e},"update:center":function(e){t.center=e}}},[o("l-control-layers",{attrs:{position:t.layersPosition,collapsed:!1,sortLayers:!0}}),t._l(t.tileProviders,function(e){return o("l-tile-layer",{key:e.name,attrs:{name:e.name,visible:e.visible,url:e.url,attribution:e.attribution,token:t.token,"layer-type":"base"}})}),o("l-control-zoom",{attrs:{position:t.zoomPosition}}),o("l-control-attribution",{attrs:{position:t.attributionPosition,prefix:t.attributionPrefix}}),o("l-control-scale",{attrs:{imperial:t.imperial}}),t._l(t.markers,function(e,r){return o("l-marker",{key:e.id,attrs:{visible:e.visible,draggable:e.draggable,"lat-lng":e.position,icon:e.icon},on:{move:function(o){t.update(o,e,r)}}},[e.tooltip?o("l-popup",{attrs:{content:e.tooltip}}):t._e(),e.tooltip?o("l-tooltip",{attrs:{content:e.tooltip}}):t._e()],1)})],2)],1)},c=[],u=(o("6b54"),o("e11e")),p=o.n(u),m=(o("6cc5"),o("adca"),o("458e"));delete p.a.Icon.Default.prototype._getIconUrl,p.a.Icon.Default.mergeOptions({iconRetinaUrl:o("584d"),iconUrl:o("6397"),shadowUrl:o("e2b9")});var f=[{name:"OpenStreetMap",visible:!0,attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},{name:"OpenTopoMap",visible:!1,url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",attribution:'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}],d={name:"Map",components:{LMap:m["LMap"],LTileLayer:m["LTileLayer"],LMarker:m["LMarker"],LPolyline:m["LPolyline"],LLayerGroup:m["LLayerGroup"],LTooltip:m["LTooltip"],LPopup:m["LPopup"],LControlZoom:m["LControlZoom"],LControlAttribution:m["LControlAttribution"],LControlScale:m["LControlScale"],LControlLayers:m["LControlLayers"]},data:function(){return{mapOptions:{zoomControl:!1,attributionControl:!1},minZoom:1,maxZoom:20,zoomPosition:"topleft",attributionPosition:"bottomright",layersPosition:"topright",attributionPrefix:"Vue2Leaflet",imperial:!1,Positions:["topleft","topright","bottomleft","bottomright"],tileProviders:f}},props:{bounds:p.a.latLngBounds({lat:51.476483373501964,lng:-.14668464136775586},{lat:51.52948330894063,lng:-.019140238291583955}),markers:{type:Array,default:function(){return[]}},token:{type:String,default:""}},computed:{center:{get:function(){return this.$store.state.center},set:function(t){t.toString()!==this.$store.state.center.toString()&&this.$store.dispatch("setCenter",t)}},zoom:{get:function(){return this.$store.state.zoom},set:function(t){t!==this.$store.state.zoom&&this.$store.dispatch("setZoom",t)}}},methods:{update:function(t,e,o){e.position=t.latlng,this.$store.dispatch("updateMarker",{marker:e,index:o})}}},v=d,h=(o("7251"),o("2877")),b=Object(h["a"])(v,l,c,!1,null,null,null);b.options.__file="LeafletMap.vue";var g=b.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sidebar"},[o("header",{staticClass:"block"},[o("h3",[t._v("List of Markers")]),o("button",{staticClass:"large button primary outline is-full-width",on:{click:t.addMarker}},[t._v("Ajouter un point")])]),o("main",[t._l(t.markers,function(e,r){return[o("item",{key:r,attrs:{index:r},on:{edit:function(e){t.editMarker(t.markers[r])}},model:{value:t.markers[r],callback:function(e){t.$set(t.markers,r,e)},expression:"markers[index]"}})]})],2)])},_=[],y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item"},[o("div",{staticClass:"row"},[o("strong",{staticClass:"col-1"},[t._v(t._s(t.index+1)+".")]),o("span",{staticClass:"col position"},[t._v("\n\t\t\t"+t._s(t.position)+"\n\t\t")])]),o("div",{staticClass:"row"},[o("span",{staticClass:"col-1"}),o("div",{staticClass:"col"},[o("span",{staticClass:"discret"},[t._v(t._s(t.item.tooltip))])]),o("div",{staticClass:"col item-controls"},[o("button",{staticClass:"button",on:{click:function(e){t.$emit("edit")}}},[t._v("Edit")]),o("button",{staticClass:"button",on:{click:function(e){t.removeMarker(t.index)}}},[t._v("X")])])])])},C=[],x=(o("84b4"),o("28a5"),o("c5f6"),o("1efd"));Number.prototype.countDecimals=function(){return Math.floor(this.valueOf())===this.valueOf()?0:this.toString().split(".")[1].length||0},Number.prototype.toFixedDown=function(t){var e=Math.pow(10,t);return Math.trunc(this*e)/e};var M={model:{prop:"item"},props:{item:{type:Object,default:function(){return{}}},index:{type:Number}},computed:{position:{get:function(){return this.parse(this.item.position.lat,6)+", "+this.parse(this.item.position.lng,6)},set:function(t){var e=new x(t);this.$set(this.item,"position",{lat:this.parse(e.latitude,6),lng:this.parse(e.longitude,6)})}}},methods:{removeMarker:function(t){this.$store.dispatch("removeMarker",t)},parse:function(t,e){return Number(t).countDecimals()>=e?Number(t).toFixedDown(e):t}}},w=M,O=(o("22aa"),Object(h["a"])(w,y,C,!1,null,null,null));O.options.__file="Sidebar-item.vue";var $=O.exports,P=o("9935"),j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"message-box dialog-mask",on:{click:function(e){t.$close(!1)}}},[o("div",{staticClass:"dialog-content"},[o("header",[t._v(t._s(t.title))]),o("div",{staticClass:"dialog-body"},[o("p",[t._v(t._s(t.content))])]),o("footer",[o("button",{on:{click:function(e){t.$close(!0)}}},[t._v("Yes")]),o("button",{on:{click:function(e){t.$close(!1)}}},[t._v("No")])])])])},S=[],z={props:{}},E=z,N=Object(h["a"])(E,j,S,!1,null,null,null);N.options.__file="confirm.vue";var A=N.exports,D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"message-box dialog-mask"},[o("div",{staticClass:"dialog-content card"},[t._m(0),o("div",{staticClass:"block"},[o("p",[o("label",{attrs:{for:"position"}},[t._v("Coordonnées")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.position,expression:"position"}],class:{error:t.hasError},attrs:{type:"text",name:"position"},domProps:{value:t.position},on:{input:[function(e){e.target.composing||(t.position=e.target.value)},function(e){t.hasError=!1}]}}),o("span",{directives:[{name:"show",rawName:"v-show",value:t.hasError,expression:"hasError"}],staticClass:"error text"},[t._v("Le format est incorrect")])]),o("p",[o("label",{attrs:{for:"infos"}},[t._v("Infos")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tooltip,expression:"tooltip"}],attrs:{type:"text",name:"infos"},domProps:{value:t.tooltip},on:{input:function(e){e.target.composing||(t.tooltip=e.target.value)}}})])]),o("footer",{staticClass:"is-right"},[o("button",{staticClass:"button",on:{click:function(e){t.$close(!1)}}},[t._v("Annuler")]),o("button",{staticClass:"button primary",on:{click:t.validate}},[t._v("Valider")])])])])},T=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("h4",[t._v("Editer un marker")])])}],Z=o("1efd");Number.prototype.countDecimals=function(){return Math.floor(this.valueOf())===this.valueOf()?0:this.toString().split(".")[1].length||0},Number.prototype.toFixedDown=function(t){var e=Math.pow(10,t);return Math.trunc(this*e)/e};var I={data:function(){return{position:"",tooltip:"",hasError:!1}},methods:{parse:function(t,e){return Number(t).countDecimals()>=e?Number(t).toFixedDown(e):t},validate:function(){try{if(!this.position)throw"Position required";var t=new Z(this.position);this.$set(this.marker,"position",{lat:this.parse(t.latitude,6),lng:this.parse(t.longitude,6)}),this.$set(this.marker,"tooltip",this.tooltip),this.$close(this.marker)}catch(t){this.hasError=!0,console.error(t)}}},mounted:function(){this.marker&&this.marker.position.lat&&this.marker.position.lng&&(this.position=this.parse(this.marker.position.lat,6)+", "+this.parse(this.marker.position.lng,6),this.tooltip=this.marker.tooltip)}},V=I,F=(o("fdca"),Object(h["a"])(V,D,T,!1,null,null,null));F.options.__file="marker.vue";var J=F.exports,U=(Object(P["create"])(A,"title","content"),Object(P["create"])(J,"marker")),B={components:{Item:$},data:function(){return{}},props:{markers:{type:Array,default:function(){return[]}}},methods:{addMarker:function(){var t=this;return new Promise(function(e,o){var r={position:{lat:"",lng:""},tooltip:"",draggable:!0,visible:!0};U(r).then(function(e){e&&(t.$store.dispatch("addMarker",e),t.$store.dispatch("setCenter",e.position))})})},editMarker:function(t){U(t)}}},Y=B,G=(o("f203"),Object(h["a"])(Y,k,_,!1,null,null,null));G.options.__file="Sidebar.vue";var R=G.exports,q={name:"map-container",components:{LeafletMap:g,Sidebar:R},data:function(){return{mapbox_token:"pk.eyJ1Ijoic2FtdWVscm0iLCJhIjoicVJuNV9YMCJ9.7Bol-cHVhp6d_l-lVhPpew"}},computed:{markers:{get:function(){return this.$store.state.markers},set:function(t){this.$store.dispatch("setMarkers",t)}}}},H=q,W=(o("b7de"),Object(h["a"])(H,a,s,!1,null,null,null));W.options.__file="MapContainer.vue";var X=W.exports,K={name:"app",components:{MapContainer:X}},Q=K,tt=(o("034f"),Object(h["a"])(Q,n,i,!1,null,null,null));tt.options.__file="App.vue";var et=tt.exports,ot=o("2f62");r["a"].use(ot["a"]);var rt=new ot["a"].Store({state:{center:{lat:51.505,lng:-.09},zoom:12,markers:[{id:"m1",position:{lat:51.505,lng:-.09},tooltip:"tooltip for marker1",draggable:!0,visible:!0,icon:L.icon.glyph({prefix:"",glyph:"A"})},{id:"m2",position:{lat:51.8905,lng:-.09},tooltip:"tooltip for marker2",draggable:!0,visible:!1},{id:"m3",position:{lat:51.005,lng:-.09},tooltip:"tooltip for marker3",draggable:!0,visible:!0},{id:"m4",position:{lat:50.7605,lng:-.09},tooltip:"tooltip for marker4",draggable:!0,visible:!1}]},getters:{getCenterAsArray:function(t){return[t.center.lat,t.center.lng]}},actions:{setMarkers:function(t,e){var o=t.commit;t.state;o("set_markers",e)},addMarker:function(t,e){var o=t.commit,r=t.state,n=r.markers;n.push(e),o("set_markers",n)},removeMarker:function(t,e){var o=t.commit,r=t.state,n=r.markers;n.splice(e,1),o("set_markers",n)},updateMarker:function(t,e){t.commit;var o=t.state,r=e.marker,n=e.index;o.markers[n]=r},setCenter:function(t,e){var o=t.commit;t.state;o("set_center",e)},setZoom:function(t,e){var o=t.commit;t.state;o("set_zoom",e)}},mutations:{set_markers:function(t,e){t.markers=e},set_center:function(t,e){t.center=e},set_zoom:function(t,e){t.zoom=e}}}),nt=(o("4917"),o("ac6a"),o("a925"));function it(){var t=o("49f8"),e={};return t.keys().forEach(function(o){var r=o.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var n=r[1];e[n]=t(o)}}),e}r["a"].use(nt["a"]);var at=new nt["a"]({locale:"en",fallbackLocale:"en",messages:it()});o("2fc4");r["a"].config.productionTip=!1,r["a"].use(P),new r["a"]({store:rt,i18n:at,render:function(t){return t(et)}}).$mount("#app")},7251:function(t,e,o){"use strict";var r=o("934d"),n=o.n(r);n.a},"761d":function(t,e,o){},"934d":function(t,e,o){},ab6d:function(t,e,o){},ad87:function(t,e,o){},b416:function(t,e,o){},b7de:function(t,e,o){"use strict";var r=o("b416"),n=o.n(r);n.a},c21b:function(t,e,o){},edd4:function(t){t.exports={message:"hello i18n !!"}},f203:function(t,e,o){"use strict";var r=o("ab6d"),n=o.n(r);n.a},f693:function(t){t.exports={message:"bonjour i18n !!"}},fdca:function(t,e,o){"use strict";var r=o("ad87"),n=o.n(r);n.a}});
//# sourceMappingURL=app.5c62cff8.js.map