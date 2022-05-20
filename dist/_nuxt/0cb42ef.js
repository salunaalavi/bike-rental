(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{565:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return v}));var r=t(568),o=t(2),d=Object(o.h)("v-card__actions"),l=Object(o.h)("v-card__subtitle"),c=Object(o.h)("v-card__text"),v=Object(o.h)("v-card__title");r.a},567:function(e,n,t){"use strict";t(32),t(83);var r=t(1);n.a=r.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(e,n){var t=this;this.clearDelay();var r=parseInt(this["".concat(e,"Delay")],10);this["".concat(e,"Timeout")]=setTimeout(n||function(){t.isActive={open:!0,close:!1}[e]},r)}}})},580:function(e,n,t){"use strict";var r=t(567),o=t(78),d=t(18),l=t(17);n.a=Object(d.a)(r.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},581:function(e,n,t){var content=t(595);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(23).default)("2616054a",content,!0,{sourceMap:!1})},586:function(e,n,t){"use strict";t(247);var r=t(248);n.a=Object(r.a)("flex")},587:function(e,n,t){"use strict";t(247);var r=t(248);n.a=Object(r.a)("layout")},593:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"rental"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"bikeId"}},type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"update_bikes"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"bikeId"}}}]}}]}},{kind:"Argument",name:{kind:"Name",value:"_set"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"available"},value:{kind:"BooleanValue",value:!1}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"returning"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"insert_rents"},arguments:[{kind:"Argument",name:{kind:"Name",value:"objects"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"bike_id"},value:{kind:"Variable",name:{kind:"Name",value:"bikeId"}}},{kind:"ObjectField",name:{kind:"Name",value:"user_id"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"returning"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:268}};t.loc.source={body:"mutation rental($bikeId: uuid, $userId: uuid) {\r\n  update_bikes(where: {id: {_eq: $bikeId}}, _set: {available: false}) {\r\n    returning {\r\n      id\r\n    }\r\n  }\r\n  insert_rents(objects: {bike_id: $bikeId, user_id: $userId}) {\r\n    returning {\r\n      id\r\n    }\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var o={};function d(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.rental=function(e,n){var t={kind:e.kind,definitions:[d(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=o[n]||new Set,l=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var v=c;c=new Set,v.forEach((function(e){l.has(e)||(l.add(e),(o[e]||new Set).forEach((function(e){c.add(e)})))}))}return l.forEach((function(n){var r=d(e,n);r&&t.definitions.push(r)})),t}(t,"rental")},594:function(e,n,t){"use strict";t(581)},595:function(e,n,t){var r=t(22)(!1);r.push([e.i,".v-card[data-v-5a3e81ca]{transition:opacity .4s ease-in-out}.v-card[data-v-5a3e81ca]:not(.on-hover){opacity:.6}.show-btns[data-v-5a3e81ca]{color:#fff!important}",""]),e.exports=r},620:function(e,n,t){"use strict";t.r(n);var r=t(26),o=(t(72),t(82)),d=t.n(o),l=t(593),c=t.n(l),v={name:"StationCard",middleware:"authenticated",props:{bikes:{type:Array,required:!0}},apollo:{users:{query:d.a,prefetch:function(e){return{username:e.store.state.auth.username}},variables:function(){return{username:this.userState}}}},computed:{userState:function(){return this.$store.getters.isLoggedIn?this.$store.state.auth.username:null}},methods:{rent:function(e,n){var t=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$apollo.mutate({mutation:c.a,variables:{bikeId:e,userId:n}});case 3:r.next=8;break;case 5:r.prev=5,r.t0=r.catch(0),console.error(r.t0);case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()}}},m=(t(594),t(35)),f=t(92),k=t.n(f),h=t(353),y=t(568),S=t(565),N=t(556),_=t(557),w=t(586),V=t(580),O=t(193),j=t(587),D=t(560),component=Object(m.a)(v,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",{staticClass:"mb-6",attrs:{fluid:""}},[t("v-row",{attrs:{align:"stretch",dense:""}},e._l(e.bikes,(function(n){return t("v-col",{key:n.id,attrs:{"offset-md2":"","mx-auto":"",cols:"12",sm:"6",md:"6",lg:"4"}},[t("v-hover",{attrs:{"close-delay":"200"},scopedSlots:e._u([{key:"default",fn:function(r){var o=r.hover;return[t("v-card",{staticClass:"my-3 yellow transition-swing",class:{"on-hover":o},attrs:{elevation:o?24:6,color:"secondary",shaped:"",outlined:"",disabled:!1===n.available}},[t("v-img",{attrs:{height:"auto",src:"https://res.cloudinary.com/sal15/image/upload/v1652776414/pngwing.com_qbgem6.png"}}),e._v(" "),t("v-container",{attrs:{"fill-height":"",fluid:""}},[t("v-layout",[t("v-flex",{staticStyle:{"overflow-y":"auto",height:"auto"},attrs:{xs12:"","justify-center":"","d-flex":""}},[n.available?t("section",e._l(e.users,(function(r){return t("section",{key:r.id},[t("v-btn",{attrs:{rounded:"",outlined:""},on:{click:function(t){return e.rent(n.id,r.id)}}},[e._v(" Rent ")])],1)})),0):t("section",[t("v-btn",{attrs:{rounded:"",outlined:""}},[e._v(" Rented ")])],1)])],1)],1),e._v(" "),t("v-card-title",{staticClass:"d-block",attrs:{"justify-center":""}},[t("h3",{staticClass:"text-center"},[e._v(e._s(n.name))])])],1)]}}],null,!0)})],1)})),1)],1)}),[],!1,null,"5a3e81ca",null);n.default=component.exports;k()(component,{VBtn:h.a,VCard:y.a,VCardTitle:S.c,VCol:N.a,VContainer:_.a,VFlex:w.a,VHover:V.a,VImg:O.a,VLayout:j.a,VRow:D.a})},640:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"bikes"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"uuid"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"bikes"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"station_id"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"_eq"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"available"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:113}};t.loc.source={body:"query bikes($id: uuid) {\r\n  bikes(where: { station_id: { _eq: $id } }) {\r\n    id\r\n    name\r\n    available\r\n  }\r\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var o={};function d(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t,e.exports.bikes=function(e,n){var t={kind:e.kind,definitions:[d(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=o[n]||new Set,l=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var v=c;c=new Set,v.forEach((function(e){l.has(e)||(l.add(e),(o[e]||new Set).forEach((function(e){c.add(e)})))}))}return l.forEach((function(n){var r=d(e,n);r&&t.definitions.push(r)})),t}(t,"bikes")},641:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"subscription",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"bikes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"available"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:66}};t.loc.source={body:"subscription {\r\n  bikes {\r\n    id\r\n    name\r\n    available\r\n  }\r\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var o={};t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),o[e.name.value]=n}})),e.exports=t},680:function(e,n,t){"use strict";t.r(n);var r=t(160),o=(t(36),t(14),t(7),t(60),t(84),t(42),t(640)),d=t.n(o),l=t(641),c=t.n(l),v={name:"BikesPage",components:{BikeCard:t(620).default},middleware:"authenticated",data:function(){return{searchTerm:""}},apollo:{bikes:{query:d.a,prefetch:function(e){return{id:e.route.params.id}},variables:function(){return{id:this.$route.params.id}},subscribeToMore:{document:c.a,updateQuery:function(e,n){var t=n.subscriptionData;return{bikes:[].concat(Object(r.a)(e.bikes),[t.data.subBikes])}}}}},methods:{searchItems:function(e){var n=this;this.searchTerm,this.bikes=this.bikes.filter((function(e){return e.name.toLowerCase().includes(n.searchTerm.toLowerCase())}))}}},m=t(35),f=t(92),k=t.n(f),h=t(556),y=t(557),S=t(559),N=t(560),_=t(672),component=Object(m.a)(v,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-main",[t("v-container",[t("section",[t("h1",[e._v("Bikes ready to use")]),e._v(" "),t("v-text-field",{attrs:{placeholder:"Search"},on:{input:e.searchItems},model:{value:e.searchTerm,callback:function(n){e.searchTerm=n},expression:"searchTerm"}}),e._v(" "),t("v-row",[t("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[t("BikeCard",{attrs:{bikes:e.bikes}})],1)],1)],1)])],1)}),[],!1,null,null,null);n.default=component.exports;k()(component,{VCol:h.a,VContainer:y.a,VMain:S.a,VRow:N.a,VTextField:_.a})}}]);