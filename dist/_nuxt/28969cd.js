(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3,4],{523:function(n,e){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Stations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"Position"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lat"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lng"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:88}};t.loc.source={body:"{\r\n  Stations {\r\n    id\r\n    name\r\n    Position {\r\n      lat\r\n      lng\r\n    }\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(n,e){if("FragmentSpread"===n.kind)e.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&e.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){o(n,e)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){o(n,e)})),n.definitions&&n.definitions.forEach((function(n){o(n,e)}))}var r={};t.definitions.forEach((function(n){if(n.name){var e=new Set;o(n,e),r[n.name.value]=e}})),n.exports=t},524:function(n,e,t){"use strict";t.r(e);var o={name:"GoogleMap",middleware:"authenticated",props:{station:{type:Object,required:!0}},data:function(){return{infoWinOpen:!1}},head:{title:"Stations"},methods:{toggleInfoWindow:function(n){this.currentMidx===n?this.infoWinOpen=!this.infoWinOpen:(this.infoWinOpen=!0,this.currentMidx=n)}}},r=t(44),l=t(149),c=t.n(l),d=t(521),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-container",[t("gmap-marker",{key:n.station.id,attrs:{position:n.station.Position},on:{click:function(e){return n.toggleInfoWindow(n.station,n.station.id)}}},[t("gmap-info-window",{attrs:{options:{maxWidth:200},opened:n.infoWinOpen},on:{closeclick:function(e){n.infoWinOpen=!1}}},[t("b",{staticStyle:{color:"black"}},[n._v(n._s(n.station.name))]),n._v(" "),t("br"),n._v(" "),t("br"),n._v(" "),t("code",{staticStyle:{color:"black"}},[n._v("\n        Lat: "+n._s(n.station.Position.lat)+",\n        "),t("br"),n._v("\n        Lng: "+n._s(n.station.Position.lng)+"\n      ")]),n._v(" "),t("router-link",{staticStyle:{},attrs:{to:"/stations/"+n.station.id}},[n._v("\n        "+n._s(n.station.name)+"}}\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VContainer:d.a})},544:function(n,e,t){"use strict";t.r(e);var o=t(524),r=t(523),l=t.n(r),c={name:"GoogleMap",components:{GoogleMapMarker:o.default},middleware:"authenticated",apollo:{Stations:{prefetch:!0,query:l.a}},data:function(){return{center:{lat:-6.7495268,lng:110.7585118}}},head:{title:"Stations"}},d=t(44),f=t(149),m=t.n(f),v=t(521),component=Object(d.a)(c,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-container",[t("div",[t("h2",{staticClass:"text-center"},[n._v("Google Map")]),n._v(" "),t("br")]),n._v(" "),t("br"),n._v(" "),t("gmap-map",{staticClass:"mb-5",staticStyle:{width:"100%",height:"600px"},attrs:{zoom:16,center:n.center}},n._l(n.Stations,(function(n){return t("GoogleMapMarker",{key:n.id,attrs:{station:n}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{GoogleMapMarker:t(524).default}),m()(component,{VContainer:v.a})},586:function(n,e,t){"use strict";t.r(e);var o={name:"IndexPage"},r=t(44),component=Object(r.a)(o,(function(){var n=this.$createElement;return(this._self._c||n)("GoogleMap")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GoogleMap:t(544).default})}}]);