var M=Object.defineProperty,q=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var E=(i,o,e)=>o in i?M(i,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[o]=e,y=(i,o)=>{for(var e in o||(o={}))z.call(o,e)&&E(i,e,o[e]);if(A)for(var e of A(o))C.call(o,e)&&E(i,e,o[e]);return i},N=(i,o)=>q(i,F(o));import{r as j,U as v,C as u,ja as J,cH as B,O as D,ix as L,s as H,an as c,a as d,jf as Z,b4 as x,dS as f,cU as b,ei as G,ej as X,c5 as Y,n as Q,x as W,jg as ee,es as te,jh as re,ji as oe,jj as ae,bY as T,cJ as se,bX as O,eR as U}from"./vendor.c414a8c9.js";import{getSiblingOfSameTypeI as ie}from"./resourceUtils.25b019de.js";async function ne(i,o,e,t,s,r){let a=null;if(j(e)){const n=`${i}/nodepages/`,h=n+Math.floor(e.rootIndex/e.nodesPerPage);try{return{type:"page",rootPage:(await v(h,{query:{f:"json",token:t},responseType:"json",signal:r})).data,rootIndex:e.rootIndex,pageSize:e.nodesPerPage,lodMetric:e.lodSelectionMetricType,urlPrefix:n}}catch(S){j(s)&&s.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",h,S),a=S}}if(!o)return null;const l=`${i}/nodes/`,p=l+(o&&o.split("/").pop());try{return{type:"node",rootNode:(await v(p,{query:{f:"json",token:t},responseType:"json",signal:r})).data,urlPrefix:l}}catch(n){throw new u("sceneservice:root-node-missing","Root node missing.",{pageError:a,nodeError:n,url:p})}}async function P(i,o,e){if(!o||!o.resources)return;const t=o.portalItem===i.portalItem?new Set(i.paths):new Set;i.paths.length=0,i.portalItem=o.portalItem;const s=new Set(o.resources.toKeep.map(n=>n.resource.path)),r=new Set,a=[];s.forEach(n=>{t.delete(n),i.paths.push(n)});for(const n of o.resources.toUpdate)if(t.delete(n.resource.path),s.has(n.resource.path)||r.has(n.resource.path)){const{resource:h,content:S,finish:V,error:k}=n,R=ie(h,J());i.paths.push(R.path),a.push(K({resource:R,content:S,finish:V,error:k},e))}else i.paths.push(n.resource.path),a.push(le(n,e)),r.add(n.resource.path);for(const n of o.resources.toAdd)a.push(K(n,e)),i.paths.push(n.resource.path);if(t.forEach(n=>{const h=o.portalItem.resourceFromPath(n);a.push(h.portalItem.removeResource(h).catch(()=>{}))}),a.length===0)return;const l=await B(a);D(e);const p=l.filter(n=>"error"in n).map(n=>n.error);if(p.length>0)throw new u("save:resources","Failed to save one or more resources",{errors:p})}async function K(i,o){const e=await L(i.resource.portalItem.addResource(i.resource,i.content,o));if(e.ok!==!0)throw i.error&&i.error(e.error),e.error;i.finish&&i.finish(i.resource)}async function le(i,o){const e=await L(i.resource.update(i.content,o));if(e.ok!==!0)throw i.error(e.error),e.error;i.finish(i.resource)}const m=H.getLogger("esri.layers.mixins.SceneService"),he=i=>{let o=class extends i{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=W(async(e,t,s)=>{switch(e){case I.SAVE:return this._save(t);case I.SAVE_AS:return this._saveAs(s,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(e.spatialReference!=null)return x.fromJSON(e.spatialReference);{const t=e.store,s=t.indexCRS||t.geographicCRS,r=s&&parseInt(s.substring(s.lastIndexOf("/")+1,s.length),10);return r!=null?new x(r):null}}readFullExtent(e,t,s){if(e!=null&&typeof e=="object"){const l=e.spatialReference==null?N(y({},e),{spatialReference:this._readSpatialReference(t)}):e;return b.fromJSON(l,s)}const r=t.store,a=this._readSpatialReference(t);return a==null||r==null||r.extent==null||!Array.isArray(r.extent)||r.extent.some(l=>l<_)?null:new b({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:a})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},s=e.split(".");return s.length>=2&&(t.major=parseInt(s[0],10),t.minor=parseInt(s[1],10)),t}readVersion(e,t){const s=t.store,r=s.version!=null?s.version.toString():"";return this.parseVersionString(r)}readTitlePortalItem(e){return this.sublayerTitleMode!=="item-title"?void 0:e}readTitleService(e,t){const s=this.portalItem&&this.portalItem.title;if(this.sublayerTitleMode==="item-title")return ee(this.url,t.name);let r=t.name;if(!r&&this.url){const a=te(this.url);j(a)&&(r=a.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&s&&(r=s+" - "+r),re(r)}set url(e){const t=oe({layer:this,url:e,nonStandardUrlAllowed:!1,logger:m});this._set("url",t.url),t.layerId!=null&&this._set("layerId",t.layerId)}writeUrl(e,t,s,r){ae(this,e,"layers",t,r)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=T(e);return this.layerId!=null&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=ne(this.parsedUrl.path,this.rootNode,e,this.apiKey,m,t),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){var t,s,r;if((e==null?void 0:e.type)==="page"){const a=e.rootIndex%e.pageSize,l=(s=(t=e.rootPage)==null?void 0:t.nodes)==null?void 0:s[a];if(l==null||l.obb==null||l.obb.center==null||l.obb.halfSize==null)throw new u("sceneservice:invalid-node-page","Invalid node page.");if(l.obb.center[0]<_||this.fullExtent==null||this.fullExtent.hasZ)return;const p=l.obb.halfSize,n=l.obb.center[2],h=Math.sqrt(p[0]*p[0]+p[1]*p[1]+p[2]*p[2]);this.fullExtent.zmin=n-h,this.fullExtent.zmax=n+h}else if((e==null?void 0:e.type)==="node"){const a=(r=e.rootNode)==null?void 0:r.mbs;if(!Array.isArray(a)||a.length!==4||a[0]<_)return;const l=a[2],p=a[3];this.fullExtent.zmin=l-p,this.fullExtent.zmax=l+p}}async _fetchService(e){if(this.url==null)throw new u("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);t!=null&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await v(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await v(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let s=!1;if(t.data.layerType&&t.data.layerType==="Voxel"&&(s=!0),s)return this._fetchVoxelServiceLayer();const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _fetchVoxelServiceLayer(e){const t=(await v(this.parsedUrl.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl}),this.validateLayer(t)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,s){e.typeKeywords||(e.typeKeywords=[]);const r=t.getTypeKeywords();for(const a of r)e.typeKeywords.push(a);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((a,l,p)=>p.indexOf(a)===l),s===g.newItem&&(e.typeKeywords=e.typeKeywords.filter(a=>a!=="Hosted Service")))}async _saveAs(e,t){const s=y(y({},$),t);let r=se.from(e);r||(m.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new u("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),r.id&&(r=r.clone(),r.id=null);const a=r.portal||O.getDefault();await this._ensureLoadBeforeSave(),r.type=w,r.portal=a;const l={origin:"portal-item",url:null,messages:[],portal:a,portalItem:r,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},p={layers:[this.write({},l)]};return await Promise.all(l.resources.pendingOperations),await this._validateAgainstJSONSchema(p,l,s),r.url=this.url,r.title||(r.title=this.title),this._updateTypeKeywords(r,s,g.newItem),await a._signIn(),await a.user.addItem({item:r,folder:s&&s.folder,data:p}),await P(this.resourceReferences,l,null),this.portalItem=r,U(l),l.portalItem=r,r}async _save(e){const t=y(y({},$),e);this.portalItem||(m.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new u("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==w&&(m.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+w),await Promise.reject(new u("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${w}"`))),await this._ensureLoadBeforeSave();const s={origin:"portal-item",url:this.portalItem.itemUrl&&T(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||O.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},r={layers:[this.write({},s)]};return await Promise.all(s.resources.pendingOperations),await this._validateAgainstJSONSchema(r,s,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,g.existingItem),await this.portalItem.update({data:r}),await P(this.resourceReferences,s,null),U(s),this.portalItem}async _validateAgainstJSONSchema(e,t,s){let r=t.messages.filter(a=>a.type==="error").map(a=>new u(a.name,a.message,a.details));if(s&&s.validationOptions.ignoreUnsupported&&(r=r.filter(a=>a.name!=="layer:unsupported"&&a.name!=="symbol:unsupported"&&a.name!=="symbol-layer:unsupported"&&a.name!=="property:unsupported"&&a.name!=="url:unsupported"&&a.name!=="scenemodification:unsupported")),s.validationOptions.enabled||pe){const a=(await import("./schemaValidator.e26502ee.js")).validate(e,s.portalItemLayerType);if(a.length>0){const l=`Layer item did not validate:
${a.join(`
`)}`;if(m.error(`_validateAgainstJSONSchema(): ${l}`),s.validationOptions.failPolicy==="throw"){const p=a.map(n=>new u("sceneservice:schema-validation",n)).concat(r);throw new u("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:p})}}}if(r.length>0)throw new u("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}};return c([d(Z)],o.prototype,"id",void 0),c([d({type:x})],o.prototype,"spatialReference",void 0),c([f("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],o.prototype,"readSpatialReference",null),c([d({type:b})],o.prototype,"fullExtent",void 0),c([f("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],o.prototype,"readFullExtent",null),c([d({readOnly:!0,type:G})],o.prototype,"heightModelInfo",void 0),c([d({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],o.prototype,"minScale",void 0),c([d({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],o.prototype,"maxScale",void 0),c([d({readOnly:!0})],o.prototype,"version",void 0),c([f("version",["store.version"])],o.prototype,"readVersion",null),c([d({type:String,json:{read:{source:"copyrightText"}}})],o.prototype,"copyright",void 0),c([d({type:String,json:{read:!1}})],o.prototype,"sublayerTitleMode",void 0),c([d({type:String})],o.prototype,"title",void 0),c([f("portal-item","title")],o.prototype,"readTitlePortalItem",null),c([f("service","title",["name"])],o.prototype,"readTitleService",null),c([d({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],o.prototype,"layerId",void 0),c([d(X)],o.prototype,"url",null),c([Y("url")],o.prototype,"writeUrl",null),c([d()],o.prototype,"parsedUrl",null),c([d({readOnly:!0})],o.prototype,"store",void 0),c([d({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],o.prototype,"rootNode",void 0),o=c([Q("esri.layers.mixins.SceneService")],o),o},_=-1e38,pe=!1;var g;(function(i){i[i.existingItem=0]="existingItem",i[i.newItem=1]="newItem"})(g||(g={}));const w="Scene Service",$={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var I;(function(i){i[i.SAVE=0]="SAVE",i[i.SAVE_AS=1]="SAVE_AS"})(I||(I={}));export{he as A,I as K,ne as n};
