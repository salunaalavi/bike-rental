(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{526:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"user"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"user_id"}},type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Rents"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"user_id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"user_id"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bike_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"Bike"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:149}};t.loc.source={body:"query user($user_id: uuid) {\r\n  Rents(where: {user_id: {_eq: $user_id}}) {\r\n    id\r\n    user_id\r\n    bike_id\r\n    Bike {\r\n      name\r\n    }\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var d={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),d[e.name.value]=n}})),e.exports=t,e.exports.user=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=d[n]||new Set,l=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var m=c;c=new Set,m.forEach((function(e){l.has(e)||(l.add(e),(d[e]||new Set).forEach((function(e){c.add(e)})))}))}return l.forEach((function(n){var r=o(e,n);r&&t.definitions.push(r)})),t}(t,"user")},592:function(e,n,t){"use strict";t.r(n);var r=t(526),d={name:"BikesPage",middleware:"authenticated",apollo:{Rents:{query:t.n(r).a,prefetch:function(e){var n=e.route;e.store;return{station_id:n.params.stationId,bike_id:n.params.bikeId}},variables:function(){return{station_id:this.$route.params.stationId,bike_id:this.$route.params.bikeId}}}}},o=t(44),l=t(149),c=t.n(l),m=t(580),v=t(521),f=t(517),k=t(582),component=Object(o.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[t("h1",[e._v("Bikes ready to use")])])],1),e._v(" "),t("v-row",[t("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[t("v-main",e._l(e.Rents,(function(n){return t("section",{key:n.id},[e._v("\n          rent id: "+e._s(n.id)+"\n        ")])})),0)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VCol:m.a,VContainer:v.a,VMain:f.a,VRow:k.a})}}]);