(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{564:function(n,e,t){"use strict";t.r(e);var o={name:"GoogleMap",middleware:"authenticated",props:{station:{type:Object,required:!0}},data:function(){return{infoWinOpen:!1}},head:{title:"Stations"},methods:{toggleInfoWindow:function(n){this.currentMidx===n?this.infoWinOpen=!this.infoWinOpen:(this.infoWinOpen=!0,this.currentMidx=n)}}},r=t(35),l=t(92),d=t.n(l),c=t(557),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-container",[t("gmap-marker",{key:n.station.id,attrs:{position:n.station.position},on:{click:function(e){return n.toggleInfoWindow(n.station,n.station.id)}}},[t("gmap-info-window",{attrs:{options:{maxWidth:200},opened:n.infoWinOpen},on:{closeclick:function(e){n.infoWinOpen=!1}}},[t("span",{staticStyle:{color:"black","font-size":"16px"}},[n._v(n._s(n.station.name))]),n._v(" "),t("br"),n._v(" "),t("br"),n._v(" "),t("span",{staticStyle:{color:"black"}},[n._v("\n        "+n._s(n.station.position.address)+"\n      ")]),n._v(" "),t("br"),n._v(" "),t("br"),n._v(" "),t("router-link",{staticStyle:{},attrs:{to:"/stations/"+n.station.id}},[n._v("\n        "+n._s(n.station.name)+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VContainer:c.a})},566:function(n,e){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"stations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"position"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lat"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lng"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"address"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:103}};t.loc.source={body:"{\r\n  stations {\r\n    id\r\n    name\r\n    position {\r\n      lat\r\n      lng\r\n      address\r\n    }\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(n,e){if("FragmentSpread"===n.kind)e.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&e.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){o(n,e)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){o(n,e)})),n.definitions&&n.definitions.forEach((function(n){o(n,e)}))}var r={};t.definitions.forEach((function(n){if(n.name){var e=new Set;o(n,e),r[n.name.value]=e}})),n.exports=t},578:function(n,e,t){"use strict";t.r(e);var o=t(564),r=t(566),l=t.n(r),d={name:"GoogleMap",components:{GoogleMapMarker:o.default},middleware:"authenticated",apollo:{stations:{prefetch:!0,query:l.a}},data:function(){return{center:{lat:-6.7495268,lng:110.7585118}}},head:{title:"Stations"}},c=t(35),component=Object(c.a)(d,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",[t("gmap-map",{staticStyle:{width:"100%",height:"600px"},attrs:{zoom:16,center:n.center}},n._l(n.stations,(function(n){return t("GoogleMapMarker",{key:n.id,attrs:{station:n}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GoogleMapMarker:t(564).default})}}]);