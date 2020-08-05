(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{1453:function(e,r,n){"use strict";n.r(r),n.d(r,"plugin",(function(){return c})),n.d(r,"validate",(function(){return p}));var t=n(547),_=n.n(t),i=n(548),a=n(362),o=n(388),s=n(358),u=n(339),l={ts:[".ts",".tsx"],js:[".js",".jsx"],json:[".json"]},c=function(){var e=Object(i.a)(_.a.mark((function e(r,n,t,i){var c,p,d,f,E,m,O,h,g,v,b,y,D;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object.assign({module:"es2015",federation:!1,apolloClientVersion:2,useExplicitTyping:!1},t),p=parseInt(c.apolloClientVersion),d=c.federation?Object(o.h)(r):r,f=c.useExplicitTyping,e.next=6,Object(s.g)({schema:d,document:Object(u.parse)("\n      {\n        __schema {\n          types {\n            kind\n            name\n            possibleTypes {\n              name\n            }\n          }\n        }\n      }\n    ")});case 6:if(E=e.sent,m=Object(a.extname)(i.outputFile).toLowerCase(),E.data){e.next=10;break}throw new Error('Plugin "fragment-matcher" couldn\'t introspect the schema');case 10:if(O=function(e){return"UNION"===e.kind||"INTERFACE"===e.kind},h=function(e,r){var n;return Object.assign({},e,((n={})[r.name]=r.possibleTypes.map((function(e){return e.name})),n))},g=2===p?{__schema:Object.assign({},E.data.__schema,{types:E.data.__schema.types.filter((function(e){return"UNION"===e.kind||"INTERFACE"===e.kind}))})}:{possibleTypes:E.data.__schema.types.filter(O).reduce(h,{})},v=JSON.stringify(g,null,2),!l.json.includes(m)){e.next=16;break}return e.abrupt("return",v);case 16:if(!l.js.includes(m)){e.next=19;break}return b="es2015"===c.module?"export default":"module.exports =",e.abrupt("return","\n      "+b+" "+v+"\n    ");case 19:if(!l.ts.includes(m)){e.next=23;break}return 2===p?y="IntrospectionResultData":3===p&&(y="PossibleTypesResultData"),f?D="export type "+y+" = "+v+";":2===p?D="export interface "+y+" {\n        __schema: {\n          types: {\n            kind: string;\n            name: string;\n            possibleTypes: {\n              name: string;\n            }[];\n          }[];\n        };\n      }":3===p&&(D="export interface "+y+" {\n        possibleTypes: {\n          [key: string]: string[]\n        }\n      }"),e.abrupt("return","\n      "+D+"\n      const result: "+y+" = "+v+";\n      export default result;\n    ");case 23:throw new Error("Extension "+m+" is not supported");case 24:case"end":return e.stop()}}),e)})));return function(r,n,t,_){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(_.a.mark((function e(r,n,t,i){var o,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=Object(a.extname)(i).toLowerCase(),(s=Object.values(l).reduce((function(e,r){return[].concat(e,r)}),[])).includes(o)){e.next=4;break}throw new Error('Plugin "fragment-matcher" requires extension to be one of '+s.map((function(e){return e.replace(".","")})).join(", ")+"!");case 4:if("commonjs"!==t.module||!l.ts.includes(o)){e.next=6;break}throw new Error('Plugin "fragment-matcher" doesn\'t support commonjs modules combined with TypeScript!');case 6:case"end":return e.stop()}}),e)})));return function(r,n,t,_){return e.apply(this,arguments)}}()},388:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(process){__webpack_require__.d(__webpack_exports__,"a",(function(){return ApolloFederation})),__webpack_require__.d(__webpack_exports__,"b",(function(){return DetailedError})),__webpack_require__.d(__webpack_exports__,"c",(function(){return addFederationReferencesToSchema})),__webpack_require__.d(__webpack_exports__,"d",(function(){return federationSpec})),__webpack_require__.d(__webpack_exports__,"e",(function(){return getBaseType})),__webpack_require__.d(__webpack_exports__,"f",(function(){return isComplexPluginOutput})),__webpack_require__.d(__webpack_exports__,"g",(function(){return isUsingTypes})),__webpack_require__.d(__webpack_exports__,"h",(function(){return removeFederation})),__webpack_require__.d(__webpack_exports__,"i",(function(){return resolveExternalModuleAndFn}));var _home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(357),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(533),param_case__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(529),graphql__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(312),graphql__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(338),graphql__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(313),graphql__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(339),graphql__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1446),lodash__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(530),lodash__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);function resolveExternalModuleAndFn(pointer){var importExternally=function importExternally(moduleName){return eval("require('"+moduleName+"')")};if("function"==typeof pointer)return pointer;var _pointer$split=pointer.split("#"),moduleName=_pointer$split[0],functionName=_pointer$split[1];"change-case"===moduleName&&(moduleName=Object(param_case__WEBPACK_IMPORTED_MODULE_3__.a)(functionName));var _importExternally=importExternally("path"),resolve=_importExternally.resolve,localFilePath=resolve(process.cwd(),moduleName),_importExternally2=importExternally("fs"),existsSync=_importExternally2.existsSync,localFileExists=existsSync(localFilePath),importFrom=importExternally("import-from"),loadedModule=localFileExists?importExternally(localFilePath):importFrom(process.cwd(),moduleName);if(!(functionName in loadedModule)&&"function"!=typeof loadedModule)throw new Error(functionName+" couldn't be found in module "+moduleName+"!");return loadedModule[functionName]||loadedModule}function isComplexPluginOutput(e){return"object"==typeof e&&e.hasOwnProperty("content")}function mergeOutputs(e){var r={content:"",prepend:[],append:[]};return Array.isArray(e)&&e.forEach((function(e){var n,t;"string"==typeof e?r.content+=e:(r.content+=e.content,(n=r.prepend).push.apply(n,e.prepend||[]),(t=r.append).push.apply(t,e.append||[]))})),[].concat(r.prepend,[r.content],r.append).join("\n")}function isWrapperType(e){return Object(graphql__WEBPACK_IMPORTED_MODULE_4__.J)(e)||Object(graphql__WEBPACK_IMPORTED_MODULE_4__.L)(e)}function getBaseType(e){return isWrapperType(e)?getBaseType(e.ofType):e}function isOutputConfigArray(e){return Array.isArray(e)}function isConfiguredOutput(e){return"object"==typeof e&&e.plugins}function normalizeOutputParam(e){if(isOutputConfigArray(e))return{documents:[],schema:[],plugins:isConfiguredOutput(e)?e.plugins:e};if(isConfiguredOutput(e))return e;throw new Error('Invalid "generates" config!')}function normalizeInstanceOrArray(e){return Array.isArray(e)?e:e?[e]:[]}function normalizeConfig(e){var r;return"string"==typeof e?[(r={},r[e]={},r)]:Array.isArray(e)?e.map((function(e){var r;return"string"==typeof e?((r={})[e]={},r):e})):"object"==typeof e?Object.keys(e).reduce((function(r,n){var t;return[].concat(r,[(t={},t[n]=e[n],t)])}),[]):[]}function hasNullableTypeRecursively(e){return!Object(graphql__WEBPACK_IMPORTED_MODULE_4__.L)(e)||!(!Object(graphql__WEBPACK_IMPORTED_MODULE_4__.J)(e)&&!Object(graphql__WEBPACK_IMPORTED_MODULE_4__.L)(e))&&hasNullableTypeRecursively(e.ofType)}function isUsingTypes(e,r,n){var t=0,_=[];return Object(graphql__WEBPACK_IMPORTED_MODULE_5__.c)(e,{SelectionSet:{enter:function(e,t,i,a){if(!a.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&r.includes(e.name.value)}))){var o=e.selections||[];if(n&&o.length>0){var s=function(){if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.FRAGMENT_DEFINITION)return i.typeCondition.name.value;if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.FIELD){var e=_[_.length-1];if(!e)throw new Error("Unable to find parent type! Please make sure you operation passes validation");var r=e.getFields()[i.name.value];if(!r)throw new Error('Unable to find field "'+i.name.value+'" on type "'+e+'"!');return getBaseType(r.type).name}if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.OPERATION_DEFINITION){if("query"===i.operation)return n.getQueryType().name;if("mutation"===i.operation)return n.getMutationType().name;if("subscription"===i.operation)return n.getSubscriptionType().name}else if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.INLINE_FRAGMENT&&i.typeCondition)return i.typeCondition.name.value;return null}();_.push(n.getType(s))}}},leave:function(e){var r=e.selections||[];n&&r.length>0&&_.pop()}},Field:{enter:function(e,i,a,o,s){if(!e.name.value.startsWith("__")&&!s.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&r.includes(e.name.value)}))){var u=e.selectionSet&&e.selectionSet.selections||[],l=u.filter((function(e){return e.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.FRAGMENT_SPREAD&&!r.includes(e.name.value)}));if((0===u.length||l.length>0)&&t++,n){var c=_[_.length-1];if(c&&Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(c)){var p=c.getFields()[e.name.value];if(!p)throw new Error('Unable to find field "'+e.name.value+'" on type "'+c+'"!');hasNullableTypeRecursively(p.type)&&t++}}}}},enter:{VariableDefinition:function(e,n,_,i,a){a.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&r.includes(e.name.value)}))||t++},InputValueDefinition:function(e,n,_,i,a){a.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&r.includes(e.name.value)}))||t++}}}),t>0}var federationSpec=Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)("\n  scalar _FieldSet\n\n  directive @external on FIELD_DEFINITION\n  directive @requires(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @provides(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @key(fields: _FieldSet!) on OBJECT | INTERFACE\n");function addFederationReferencesToSchema(e){var r=e.getTypeMap();for(var n in r){var t=e.getType(n);if(Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(t)&&isFederationObjectType(t)){var _,i=t.toConfig();i.fields=Object.assign(((_={})[resolveReferenceFieldName]={type:t},_),i.fields);var a=new graphql__WEBPACK_IMPORTED_MODULE_4__.f(i);a.astNode=a.astNode||Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)(Object(graphql__WEBPACK_IMPORTED_MODULE_8__.c)(a)).definitions[0],a.astNode.fields.unshift({kind:graphql__WEBPACK_IMPORTED_MODULE_6__.a.FIELD_DEFINITION,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_6__.a.NAME,value:resolveReferenceFieldName},type:{kind:graphql__WEBPACK_IMPORTED_MODULE_6__.a.NAMED_TYPE,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_6__.a.NAME,value:n}}}),r[n]=a}}return e}function removeFederation(e){var r=e.getQueryType().getFields();delete r._entities,delete r._service;var n=e.getTypeMap();return delete n._Service,delete n._Entity,delete n._Any,e}var resolveReferenceFieldName="__resolveReference",ApolloFederation=function(){function e(e){var r=e.enabled,n=e.schema;this.enabled=!1,this.enabled=r,this.schema=n,this.providesMap=this.createMapOfProvides()}var r=e.prototype;return r.filterTypeNames=function(e){return this.enabled?e.filter((function(e){return"_FieldSet"!==e})):e},r.filterFieldNames=function(e){return this.enabled?e.filter((function(e){return e!==resolveReferenceFieldName})):e},r.skipDirective=function(e){return this.enabled&&["external","requires","provides","key"].includes(e)},r.skipScalar=function(e){return this.enabled&&"_FieldSet"===e},r.skipField=function(e){var r=e.fieldNode,n=e.parentType;return!!(this.enabled&&Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(n)&&isFederationObjectType(n))&&this.isExternalAndNotProvided(r,n)},r.isResolveReferenceField=function(e){var r="string"==typeof e.name?e.name:e.name.value;return this.enabled&&r===resolveReferenceFieldName},r.transformParentType=function(e){var r=this,n=e.fieldNode,t=e.parentType,_=e.parentTypeSignature;if(this.enabled&&Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(t)&&isFederationObjectType(t)){var i=getDirectivesByName("key",t);if(i.length){var a=["{ __typename: '"+t.name+"' } &"],o=getDirectivesByName("requires",n).map(this.extractKeyOrRequiresFieldSet),s=this.translateFieldSet(lodash__WEBPACK_IMPORTED_MODULE_9__.merge.apply(void 0,[{}].concat(o)),_),u=i.map((function(e){var n=r.extractKeyOrRequiresFieldSet(e);return r.translateFieldSet(n,_)})),l=u.length>1?["(",")"]:["",""],c=l[0],p=l[1];return a.push([c,u.join(" | "),p].join("")),o.length&&a.push("& "+s),a.join(" ")}}return _},r.isExternalAndNotProvided=function(e,r){return this.isExternal(e)&&!this.hasProvides(r,e)},r.isExternal=function(e){return getDirectivesByName("external",e).length>0},r.hasProvides=function(e,r){var n=this.providesMap[Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(e)?e.name:e.name.value];return!(!n||!n.length)&&n.includes(r.name.value)},r.translateFieldSet=function(e,r){return"GraphQLRecursivePick<"+r+", "+JSON.stringify(e)+">"},r.extractKeyOrRequiresFieldSet=function(e){var r=e.arguments.find((function(e){return"fields"===e.name.value})).value.value;return Object(graphql__WEBPACK_IMPORTED_MODULE_5__.c)(Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)("{"+r+"}"),{leave:{SelectionSet:function(e){return e.selections.reduce((function(e,r){return e[r.name]=r.selection,e}),{})},Field:function(e){return{name:e.name.value,selection:!e.selectionSet||e.selectionSet}},Document:function(e){return e.definitions.find((function(e){return"OperationDefinition"===e.kind&&"query"===e.operation})).selectionSet}}})},r.extractProvidesFieldSet=function(e){var r=e.arguments.find((function(e){return"fields"===e.name.value})).value.value;if(/[{}]/gi.test(r))throw new Error("Nested fields in _FieldSet is not supported in the @provides directive");return r.split(/\s+/g)},r.createMapOfProvides=function(){var e=this,r={};return Object.keys(this.schema.getTypeMap()).forEach((function(n){var t=e.schema.getType(n);Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(t)&&Object.values(t.getFields()).forEach((function(n){var t,_=getDirectivesByName("provides",n.astNode).map(e.extractProvidesFieldSet).reduce((function(e,r){return[].concat(e,r)}),[]),i=getBaseType(n.type);r[i.name]||(r[i.name]=[]),(t=r[i.name]).push.apply(t,_)}))})),r},e}();function isFederationObjectType(e){var r=Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(e)?e.astNode||Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)(Object(graphql__WEBPACK_IMPORTED_MODULE_8__.c)(e)).definitions[0]:e,n=r.name.value,t=r.directives,_=!["Query","Mutation","Subscription"].includes(n),i=!n.startsWith("__"),a=t.some((function(e){return"key"===e.name.value}));return _&&i&&a}function getDirectivesByName(e,r){var n;return(n=Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(r)?r.astNode:r)&&n.directives?n.directives.filter((function(r){return r.name.value===e})):[]}var DetailedError=function(e){function r(n,t,_){var i;return(i=e.call(this,n)||this).message=n,i.details=t,i.source=_,Object.setPrototypeOf(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(i),r.prototype),Error.captureStackTrace(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(i),r),i}return Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.a)(r,e),r}(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__.a)(Error));function isDetailedError(e){return e.details}}).call(this,__webpack_require__(324))}}]);