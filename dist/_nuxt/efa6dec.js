(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{523:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"Stations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"Position"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"lat"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lng"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:88}};t.loc.source={body:"{\r\n  Stations {\r\n    id\r\n    name\r\n    Position {\r\n      lat\r\n      lng\r\n    }\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,n)})),e.definitions&&e.definitions.forEach((function(e){o(e,n)}))}var r={};t.definitions.forEach((function(e){if(e.name){var n=new Set;o(e,n),r[e.name.value]=n}})),e.exports=t},587:function(e,n,t){"use strict";t.r(n);var o=t(523),r={name:"StationsPage",middleware:"authenticated",apollo:{Stations:{prefetch:!0,query:t.n(o).a}},head:{title:"Stations"}},d=t(44),l=t(149),c=t.n(l),m=t(521),f=t(517),component=Object(d.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",[t("h1",[e._v("Stations")]),e._v(" "),t("v-main",e._l(e.Stations,(function(n){return t("section",{key:n.id},[t("nuxt-link",{attrs:{to:"/stations/"+n.id}},[e._v("\n        "+e._s(n.name)+"\n      ")])],1)})),0)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VContainer:m.a,VMain:f.a})}}]);