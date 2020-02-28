!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("next-core-model")):"function"==typeof define&&define.amd?define("service-entity-models",["next-core-model"],t):"object"==typeof exports?exports["service-entity-models"]=t(require("next-core-model")):e["service-entity-models"]=t(e["next-core-model"])}(this,(function(e){return function(e){var t={};function s(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(r,i,function(t){return e[t]}.bind(null,i));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dist/",s(s.s=5)}([function(t,s){t.exports=e},function(e,t,s){"use strict";const{AbstractCollection:r}=s(0),i=s(2),u=s(3);e.exports=class extends r{constructor(e,t){t||(t={}),super(e,t),this.name=t.name?t.name:"collection",this._uri=t.uri?t.uri:""}get uri(){return this._uri}set uri(e){this._uri=e}get url(){return console.warn("url is deprecated, use uri instead."),this._uri}set url(e){console.warn("url is deprecated, use uri instead."),this._uri=e}sync(e,t){if(this.uri){let s,r,o=this;t&&t.success&&"function"==typeof t.success&&(s=t.success),t&&t.error&&"function"==typeof t.error&&(r=t.error);try{let t={},n="function"==typeof this.uri?this.uri():this.uri;if("create"===e){t=o.attributes;let e={path:n,method:"POST",headers:{"Content-Type":"application/json"}};let a=(this.secure?u:i).request(e,e=>{e.setEncoding("utf8"),e.on("data",e=>{}),e.once("end",()=>{s&&s(a.statusCode)})});a.on("error",e=>{r&&r(500,e)}),a.write(o.toJSON()),a.end()}else if("update"===e){t=o.attributes;let e={path:n,method:"PUT",headers:{"Content-Type":"application/json"}};let a=(this.secure?u:i).request(e,e=>{e.setEncoding("utf8"),e.on("data",e=>{}),e.once("end",()=>{s&&s(a.statusCode,a.statusMessage)})});a.on("error",e=>{r&&r(a.statusCode,e)}),a.write(o.toJSON()),a.end()}else if("delete"===e){let e={path:n,method:"DELETE"};let t=(this.secure?u:i).request(e,e=>{e.setEncoding("utf8"),e.once("end",()=>{s&&s(t.statusCode,t.statusMessage)})});t.on("error",e=>{r&&r(500,e)}),t.end()}else{(this.secure?u:i).get(n,e=>{let t="";e.on("data",e=>{t+=e}),e.statusCode>=200&&e.statusCode<300?e.once("end",()=>{let i={};try{i=JSON.parse(t),o.set(i),s&&s(e.statusCode,e.statusMessage)}catch(t){r&&r(e.statusCode,t)}}):r&&r(e.statusCode,e.statusMessage)}).once("error",(e,t)=>{r&&r(500,e)})}}catch(e){r&&r(500,e)}}return{}}fetch(e){this.sync("read",e)}save(e){this.sync("create",e)}update(e){this.sync("update",e)}destroy(e){this.sync("delete",e)}}},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("https")},function(e,t,s){"use strict";const r={};r.GITHUB=Symbol("github"),r.SOLR=Symbol("solr"),r.DATABASE=Symbol("database"),e.exports=r},function(e,t,s){"use strict";const r=s(1),i=s(6),u=s(7),o=s(8),n=s(4),a=s(9),c=s(10);e.exports.ResourceCollection=r,e.exports.EntityCollection=i,e.exports.PaginatedResourceCollection=u,e.exports.PaginationFactory=o,e.exports.PAGINATION_API=n,e.exports.Entity=a,e.exports.Resource=c},function(e,t,s){"use strict";const{AbstractCollection:r}=s(0);e.exports=class extends r{constructor(e,t){t||(t={}),super(e,t),this.name=t.name?t.name:"collection",this._uri=t.uri?t.uri:"",this.query=t.query?t.query:null,this.datasource=t.datasource?t.datasource:null}get uri(){return this._uri}set uri(e){this._uri=e}get url(){return console.warn("url is deprecated, use uri instead."),this._uri}set url(e){console.warn("url is deprecated, use uri instead."),this._uri=e}initialize(e){e&&(e.datasource&&(this.datasource=e.datasource),e.query&&(this.query=e.query),e.name&&(this.name=e.name),e.uri&&(this.uri=e.uri)),this.datasource&&""===this.uri&&(this.uri=this.datasource.uri),this.setDataSourceCollection(this.name),this.init(e)}init(e){}setDatasource(e){this.datasource=e}sync(e,t){if(this.datasource){let s=this;try{let r,i={};"create"===e?(i=this.toJSON(),this.datasource.insert(i,()=>{s.reset(i),t&&t.success&&"function"==typeof t.success&&t.success()})):"update"===e?(i=this.toJSON(),r=t&&t.query?t.query:this.query,this.datasource.update(r,i,()=>{t&&t.success&&"function"==typeof t.success&&t.success()})):"delete"===e?(r=t&&t.query?t.query:this.query,this.datasource.remove(r,()=>{s.reset(),t&&t.success&&"function"==typeof t.success&&t.success()})):(r=t&&t.query?t.query:this.query,this.datasource.query(r,e=>{s.reset(e),t&&t.success&&"function"==typeof t.success&&t.success(e)}))}catch(e){t&&t.error&&"function"==typeof t.error&&t.error(e)}}return{}}fetch(e){this.sync("read",e)}save(e){this.sync("create",e)}update(e){this.sync("update",e)}destroy(e){this.sync("delete",e)}setDataSourceCollection(e){e&&Augmented.isString(e)&&this.datasource&&(this.name=e,this.datasource.setCollection(e))}}},function(e,t,s){"use strict";const r=s(1);e.exports=class extends r{constructor(e,t){t||(t={}),super(e,t),this.paginationConfiguration={currentPageParam:"page",pageSizeParam:"per_page"},this.pageSize=t.pageSize?t.pageSize:20,this.currentPage=t.currentPage?t.currentPage:1,this.totalPages=1}setPageSize(e){e&&(this.pageSize=e),this.refresh()}setCurrentPage(e){e||(e=1),this.currentPage=e,this.refresh()}setPaginationConfiguration(e){this.paginationConfiguration=e}fetch(e){(e=e||{}).data;var t=this.paginationConfiguration,s={};return s[t.currentPageParam]=this.currentPage,s[t.pageSizeParam]=this.pageSize,e.data=s,super.fetch(e)}nextPage(){this.currentPage<this.totalPages&&(this.currentPage=this.currentPage+1,this.refresh())}previousPage(){this.currentPage>0&&(this.currentPage=this.currentPage-1,this.refresh())}goToPage(e){e&&e<this.totalPages&&e>0&&(this.currentPage=e,this.refresh())}firstPage(){this.currentPage=1,this.refresh()}lastPage(){this.currentPage=this.totalPages,this.refresh()}refresh(){this.fetch()}}},function(e,t,s){"use strict";const r=s(4);e.exports=class{constructor(){this.type=r}static getPaginatedCollection(e,t,s){const i=s||{};let u=null;return t||(t=r.GITHUB),t===r.GITHUB?(u=new e(i),u.setPaginationConfiguration({currentPageParam:"page",pageSizeParam:"per_page"})):t===r.SOLR?(u=new e(i),u.setPaginationConfiguration({currentPageParam:"start",pageSizeParam:"rows"})):t===r.DATABASE&&(u=new e(i),u.setPaginationConfiguration({currentPageParam:"offset",pageSizeParam:"limit"})),u}}},function(e,t,s){"use strict";const{AbstractModel:r}=s(0);e.exports=class extends r{constructor(e,t,...s){t||(t={}),super(e,t,s),this.collection=t.collection?t.collection:"collection",this._uri=t.uri?t.uri:"",this.query=t.query?t.query:null,this.datasource=t.datasource?t.datasource:null,this.id=t.id?t.id:""}initialize(e){e&&(e.collection&&(this.collection=e.collection),e.datasource&&(this.datasource=e.datasource),e.uri&&(this.uri=this.datasource.uri),e.id&&(this.id=e.id),e.query&&(this.query=e.query)),this.unset("datasource"),this.unset("uri"),this.unset("query"),this.unset("collection"),this.unset("id"),this.datasource&&this.datasource.setCollection(this.collection),this.init(e)}init(e){}sync(e,t){if(this.datasource){let s=this;try{let r,i={};if("create"===e)i=s.attributes,this.datasource.insert(i,()=>{s.reset(i),t&&t.success&&"function"==typeof t.success&&t.success()});else if("update"===e)i=s.attributes,r=t&&t.query?t.query:this.query,this.datasource.update(r,i,()=>{t&&t.success&&"function"==typeof t.success&&t.success()});else if("delete"===e)r=t&&t.query?t.query:this.query,this.datasource.remove(r,()=>{s.reset(),t&&t.success&&"function"==typeof t.success&&t.success()});else{r=t&&t.query?t.query:s.query;let e=r;if(Augmented.isFunction(r)){e=r()}this.datasource.query(e,e=>{if(null===e)throw new Error("No Data Returned!");Array.isArray(e)&&e.length>0?s.reset(e[0]):Array.isArray(e)&&0===e.length?s.reset():s.reset(e),t&&t.success&&"function"==typeof t.success&&t.success(e)})}}catch(e){t&&t.error&&"function"==typeof t.error&&t.error(e)}}return{}}fetch(e){this.sync("read",e)}save(e){this.sync("create",e)}update(e){this.sync("update",e)}destroy(e){this.sync("delete",e)}}},function(e,t,s){"use strict";const{AbstractModel:r}=s(0),i=s(2),u=s(3);e.exports=class extends r{constructor(e,t,...s){t||(t={}),super(e,t,s),this.datasource=t.datasource?t.datasource:null,this.id=t.id?t.id:"",this.secure=!!t.secure&&t.secure}initialize(e){e&&e.uri&&(this.uri=e.uri),this.unset("uri"),this.init(e)}init(e){}fetch(e){this.sync("read",e)}sync(e,t){if(this.uri){let s,r,o=this;t&&t.success&&"function"==typeof t.success&&(s=t.success),t&&t.error&&"function"==typeof t.error&&(r=t.error);try{let t={},n="function"==typeof this.uri?this.uri():this.uri;if("create"===e){t=o.attributes;let e={path:n,method:"POST",headers:{"Content-Type":"application/json"}};let a=(this.secure?u:i).request(e,e=>{e.setEncoding("utf8"),e.on("data",e=>{}),e.once("end",()=>{s&&s(a.statusCode)})});a.on("error",e=>{r&&r(500,e)}),a.write(o.toJSON()),a.end()}else if("update"===e){t=o.attributes;let e={path:n,method:"PUT",headers:{"Content-Type":"application/json"}};let a=(this.secure?u:i).request(e,e=>{e.setEncoding("utf8"),e.on("data",e=>{}),e.once("end",()=>{s&&s(a.statusCode,a.statusMessage)})});a.on("error",e=>{r&&r(a.statusCode,e)}),a.write(o.toJSON()),a.end()}else if("delete"===e){let e={path:n,method:"DELETE"};let t=(this.secure?u:i).request(e,e=>{e.setEncoding("utf8"),e.once("end",()=>{s&&s(t.statusCode,t.statusMessage)})});t.on("error",e=>{r&&r(500,e)}),t.end()}else{(this.secure?u:i).get(n,e=>{let t="";e.on("data",e=>{t+=e}),e.statusCode>=200&&e.statusCode<300?e.once("end",()=>{let i={};try{i=JSON.parse(t),o.set(i),s&&s(e.statusCode,e.statusMessage)}catch(t){r&&r(e.statusCode,t)}}):r&&r(e.statusCode,e.statusMessage)}).once("error",(e,t)=>{r&&r(500,e)})}}catch(e){r&&r(500,e)}}return{}}}}])}));
//# sourceMappingURL=service-entity-models.js.map