var L=Object.defineProperty,Z=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var J=(t,e,r)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,n=(t,e)=>{for(var r in e||(e={}))X.call(e,r)&&J(t,r,e[r]);if(P)for(var r of P(e))K.call(e,r)&&J(t,r,e[r]);return t},c=(t,e)=>Z(t,Y(e));import{ew as H,w as q,ex as W,ch as ee,ca as te,dG as O,d7 as D,ey as re,ez as se,eA as ae,eB as ne,U as m,eC as C,eD as oe,eE as ie,cU as $,eF as w,dh as A,r as g,cO as ue,ep as de,aL as le,eG as ce,bY as Q,eH as j,an as y,a as f,n as v,y as he,eI as M,B as T,eJ as ye,eK as pe,C as x,cC as fe,eL as me,x as ge,eM as Fe,dQ as be,eN as Oe,eO as Re,b4 as Se,cP as Ie,cb as qe,cE as G}from"./vendor.c414a8c9.js";import{n as _e,s as xe}from"./executeForIds.58b55597.js";function we(t,e){return e}function N(t,e,r,s){switch(r){case 0:return _(t,e+s,0);case 1:return t.originPosition==="lowerLeft"?_(t,e+s,1):Te(t,e+s,1)}}function U(t,e,r,s){return r===2?_(t,e,2):N(t,e,r,s)}function je(t,e,r,s){return r===2?_(t,e,3):N(t,e,r,s)}function Ee(t,e,r,s){return r===3?_(t,e,3):U(t,e,r,s)}function _({translate:t,scale:e},r,s){return t[s]+r*e[s]}function Te({translate:t,scale:e},r,s){return t[s]-r*e[s]}class De{constructor(e){this.options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=we,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this._attributesConstructor=()=>{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this._attributesConstructor=()=>{},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const r=H(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(!q(r))for(const s of e.features)r(s.geometry)}createSpatialReference(){return{}}addField(e,r){e.fields.push(r);const s=e.fields.map(a=>a.name);this._attributesConstructor=function(){for(const a of s)this[a]=null}}addFeature(e,r){e.features.push(r)}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this._deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"esriGeometryPoint":this.addCoordinate=(r,s,a)=>this.addCoordinatePoint(r,s,a),this.createGeometry=r=>this.createPointGeometry(r);break;case"esriGeometryPolygon":this.addCoordinate=(r,s,a)=>this._addCoordinatePolygon(r,s,a),this.createGeometry=r=>this._createPolygonGeometry(r);break;case"esriGeometryPolyline":this.addCoordinate=(r,s,a)=>this._addCoordinatePolyline(r,s,a),this.createGeometry=r=>this._createPolylineGeometry(r);break;case"esriGeometryMultipoint":this.addCoordinate=(r,s,a)=>this._addCoordinateMultipoint(r,s,a),this.createGeometry=r=>this._createMultipointGeometry(r);break;default:W(e.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,r,s){this.lengths.length===0&&(this.toAddInCurrentPath=r),this.lengths.push(r)}addQueryGeometry(e,r){const{queryGeometry:s,queryGeometryType:a}=r,o=ee(s.clone(),s,!1,!1,this.transform),i=te(o,a,!1,!1);e.queryGeometryType=a,e.queryGeometry=n({},i)}createPointGeometry(e){const r={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(r.z=0),e.hasM&&(r.m=0),r}addCoordinatePoint(e,r,s){switch(r=this.applyTransform(this.transform,r,s,0),s){case 0:e.x=r;break;case 1:e.y=r;break;case 2:"z"in e?e.z=r:e.m=r;break;case 3:e.m=r}}_transformPathLikeValue(e,r){let s=0;return r<=1&&(s=this.previousCoordinate[r],this.previousCoordinate[r]+=e),this.applyTransform(this.transform,e,r,s)}_addCoordinatePolyline(e,r,s){this._dehydratedAddPointsCoordinate(e.paths,r,s)}_addCoordinatePolygon(e,r,s){this._dehydratedAddPointsCoordinate(e.rings,r,s)}_addCoordinateMultipoint(e,r,s){s===0&&e.points.push([]);const a=this._transformPathLikeValue(r,s);e.points[e.points.length-1].push(a)}_createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,r,s){s===0&&this.toAddInCurrentPath--==0&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const a=this._transformPathLikeValue(r,s),o=e[e.length-1];s===0&&(this.coordinateBufferPtr=0,this.coordinateBuffer=new Array(this.vertexDimension),o.push(this.coordinateBuffer)),this.coordinateBuffer[this.coordinateBufferPtr++]=a}_deriveApplyTransform(e){const{hasZ:r,hasM:s}=e;return r&&s?Ee:r?U:s?je:N}}async function Ce(t,e,r){const s=O(t),a=n({},r),o=D.from(e),i=!o.quantizationParameters,{data:u}=await re(s,o,new De({sourceSpatialReference:o.sourceSpatialReference,applyTransform:i}),a);return u}function $e(t){const e=t.toJSON();return e.attachmentTypes&&(e.attachmentTypes=e.attachmentTypes.join(",")),e.keywords&&(e.keywords=e.keywords.join(",")),e.globalIds&&(e.globalIds=e.globalIds.join(",")),e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.size&&(e.size=e.size.join(",")),e}function B(t,e){const r={};for(const s of t){const{parentObjectId:a,parentGlobalId:o,attachmentInfos:i}=s;for(const u of i){const{id:d}=u,l=se(ae(`${e}/${a}/attachments/${d}`)),h=ne.fromJSON(u);h.set({url:l,parentObjectId:a,parentGlobalId:o}),r[a]?r[a].push(h):r[a]=[h]}}return r}function Ae(t,e,r){let s={query:C(n(c(n({},t.query),{f:"json"}),$e(e)))};return r&&(s=c(n(n({},r),s),{query:n(n({},r.query),s.query)})),m(t.path+"/queryAttachments",s)}async function ve(t,e,r){const s=O(t);return Ae(s,oe.from(e),n({},r)).then(a=>B(a.data.attachmentGroups,s.path))}async function Ne(t,e,r){const s=O(t);return ie(s,D.from(e),n({},r)).then(a=>({count:a.data.count,extent:$.fromJSON(a.data.extent)}))}function Pe(t,e){const r=t.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),r.outFields&&!(e==null?void 0:e.returnCountOnly)?r.outFields.includes("*")?r.outFields="*":r.outFields=r.outFields.join(","):delete r.outFields,r.outSpatialReference&&(r.outSR=r.outSR.wkid||JSON.stringify(r.outSR.toJSON()),delete r.outSpatialReference),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}async function Je(t,e,r){const s=await V(t,e,r),a=s.data,o=a.geometryType,i=a.spatialReference,u={};for(const d of a.relatedRecordGroups){const l={fields:void 0,objectIdFieldName:void 0,geometryType:o,spatialReference:i,hasZ:!!a.hasZ,hasM:!!a.hasM,features:d.relatedRecords};if(d.objectId!=null)u[d.objectId]=l;else for(const h in d)d.hasOwnProperty(h)&&h!=="relatedRecords"&&(u[d[h]]=l)}return c(n({},s),{data:u})}async function Ge(t,e,r){const s=await V(t,e,r,{returnCountOnly:!0}),a=s.data,o={};for(const i of a.relatedRecordGroups)i.objectId!=null&&(o[i.objectId]=i.count);return c(n({},s),{data:o})}async function V(t,e,r={},s){const a=C(n(n(c(n({},t.query),{f:"json"}),s),Pe(e,s)));return m(t.path+"/queryRelatedRecords",c(n({},r),{query:n(n({},r.query),a)}))}async function ke(t,e,r){e=w.from(e);const s=O(t);return Je(s,e,r).then(a=>{const o=a.data,i={};return Object.keys(o).forEach(u=>i[u]=A.fromJSON(o[u])),i})}async function Qe(t,e,r){e=w.from(e);const s=O(t);return Ge(s,e,n({},r)).then(a=>a.data)}const k="Layer does not support extent calculation.";function Me(t,e){var o,i;const r=t.geometry,s=t.toJSON(),a=s;if(g(r)&&(a.geometry=JSON.stringify(r),a.geometryType=le(r),a.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),((o=s.topFilter)==null?void 0:o.groupByFields)&&(a.topFilter.groupByFields=s.topFilter.groupByFields.join(",")),((i=s.topFilter)==null?void 0:i.orderByFields)&&(a.topFilter.orderByFields=s.topFilter.orderByFields.join(",")),s.topFilter&&(a.topFilter=JSON.stringify(a.topFilter)),s.objectIds&&(a.objectIds=s.objectIds.join(",")),s.orderByFields&&(a.orderByFields=s.orderByFields.join(",")),s.outFields&&!((e==null?void 0:e.returnCountOnly)||(e==null?void 0:e.returnExtentOnly)||(e==null?void 0:e.returnIdsOnly))?s.outFields.includes("*")?a.outFields="*":a.outFields=s.outFields.join(","):delete a.outFields,s.outSR?a.outSR=s.outSR.wkid||JSON.stringify(s.outSR):r&&s.returnGeometry&&(a.outSR=a.inSR),s.returnGeometry&&delete s.returnGeometry,s.timeExtent){const u=s.timeExtent,{start:d,end:l}=u;d==null&&l==null||(a.time=d===l?d:`${d==null?"null":d},${l==null?"null":l}`),delete s.timeExtent}return a}async function Ue(t,e,r,s){const a=await E(t,e,"json",s);return ce(e,r,a.data),a}async function Be(t,e,r){return g(e.timeExtent)&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:E(t,e,"json",r,{returnIdsOnly:!0})}async function Ve(t,e,r){return g(e.timeExtent)&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:E(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(s=>{const a=s.data;if(a.hasOwnProperty("extent"))return s;if(a.features)throw new Error(k);if(a.hasOwnProperty("count"))throw new Error(k);return s})}function ze(t,e,r){return g(e.timeExtent)&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):E(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function E(t,e,r,s={},a={}){const o=typeof t=="string"?Q(t):t,i=e.geometry?[e.geometry]:[];return s.responseType=r==="pbf"?"array-buffer":"json",ue(i,null,s).then(u=>{const d=u&&u[0];g(d)&&((e=e.clone()).geometry=d);const l=C(n(n(c(n({},o.query),{f:r}),a),Me(e,a)));return m(de(o.path,"queryTopFeatures"),c(n({},s),{query:n(n({},l),s.query)}))})}async function Le(t,e,r,s){const a=O(t),o=n({},s),{data:i}=await Ue(a,j.from(e),r,o);return A.fromJSON(i)}async function Ze(t,e,r){const s=O(t);return(await Be(s,j.from(e),n({},r))).data.objectIds}async function Ye(t,e,r){const s=O(t),a=await Ve(s,j.from(e),n({},r));return{count:a.data.count,extent:$.fromJSON(a.data.extent)}}async function Xe(t,e,r){const s=O(t);return(await ze(s,j.from(e),n({},r))).data.count}let S=class extends he{constructor(...t){super(...t),this.requestOptions=null,this.url=null}normalizeCtorArgs(t,e){return typeof t!="string"?t:n({url:t},e)}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(t){return t?Q(t):null}_encode(t,e,r){const s={};for(const a in t){if(a==="declaredClass")continue;const o=t[a];if(o!=null&&typeof o!="function")if(Array.isArray(o)){s[a]=[];for(let i=0;i<o.length;i++)s[a][i]=this._encode(o[i])}else if(typeof o=="object")if(o.toJSON){const i=o.toJSON(r&&r[a]);s[a]=e?i:JSON.stringify(i)}else s[a]=e?o:JSON.stringify(o);else s[a]=o}return s}};y([f({readOnly:!0})],S.prototype,"parsedUrl",null),y([f()],S.prototype,"requestOptions",void 0),y([f({type:String})],S.prototype,"url",void 0),S=y([v("esri.tasks.Task")],S);const Ke=S;let b=class extends Ke{constructor(t){super(t),this.dynamicDataSource=null,this.fieldsIndex=null,this.format="json",this.gdbVersion=null,this.infoFor3D=null,this.sourceSpatialReference=null}execute(t,e){return this.executeJSON(t,e).then(r=>this.featureSetFromJSON(t,r,e))}async executeJSON(t,e){var d;const r=n(n({},this.requestOptions),e),s=this._normalizeQuery(t),a=((d=t.outStatistics)==null?void 0:d[0])!=null,o=T("featurelayer-pbf-statistics"),i=!a||o;let u;if(this.format==="pbf"&&i)try{u=await Ce(this.url,s,r)}catch(l){if(l.name!=="query:parsing-pbf")throw l;this.format="json"}return this.format!=="json"&&i||(u=await ye(this.url,s,r)),this._normalizeFields(u.fields),u}async featureSetFromJSON(t,e,r){if(!this._queryIs3DObjectFormat(t)||q(this.infoFor3D)||!e.features||!e.features.length)return A.fromJSON(e);const{meshFeatureSetFromJSON:s}=await pe(import("./meshFeatureSet.56fc71ae.js").then(function(a){return a.a}),r);return s(t,this.infoFor3D,e)}executeForCount(t,e){const r=n(n({},this.requestOptions),e),s=this._normalizeQuery(t);return _e(this.url,s,r)}executeForExtent(t,e){const r=n(n({},this.requestOptions),e),s=this._normalizeQuery(t);return Ne(this.url,s,r)}executeForIds(t,e){const r=n(n({},this.requestOptions),e),s=this._normalizeQuery(t);return xe(this.url,s,r)}executeRelationshipQuery(t,e){t=w.from(t);const r=n(n({},this.requestOptions),e);return(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),ke(this.url,t,r)}executeRelationshipQueryForCount(t,e){t=w.from(t);const r=n(n({},this.requestOptions),e);return(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),Qe(this.url,t,r)}executeAttachmentQuery(t,e){const r=n(n({},this.requestOptions),e);return ve(this.url,t,r)}executeTopFeaturesQuery(t,e){const r=n(n({},this.requestOptions),e);return Le(this.parsedUrl,t,this.sourceSpatialReference,r)}executeForTopIds(t,e){const r=n(n({},this.requestOptions),e);return Ze(this.parsedUrl,t,r)}executeForTopExtents(t,e){const r=n(n({},this.requestOptions),e);return Ye(this.parsedUrl,t,r)}executeForTopCount(t,e){const r=n(n({},this.requestOptions),e);return Xe(this.parsedUrl,t,r)}_normalizeQuery(t){let e=D.from(t);if(e.sourceSpatialReference=e.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(e=e===t?e.clone():e,e.gdbVersion=t.gdbVersion||this.gdbVersion,e.dynamicDataSource=t.dynamicDataSource?M.from(t.dynamicDataSource):this.dynamicDataSource),g(this.infoFor3D)&&this._queryIs3DObjectFormat(t)){e=e===t?e.clone():e,e.formatOf3DObjects=null;for(const r of this.infoFor3D.queryFormats){if(r.id==="3D_glb"){e.formatOf3DObjects=r.id;break}r.id!=="3D_gltf"||e.formatOf3DObjects||(e.formatOf3DObjects=r.id)}if(!e.formatOf3DObjects)throw new x("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(q(e.outFields)||!e.outFields.includes("*")){e=e===t?e.clone():e,q(e.outFields)&&(e.outFields=[]);const{originX:r,originY:s,originZ:a,translationX:o,translationY:i,translationZ:u,scaleX:d,scaleY:l,scaleZ:h,rotationX:R,rotationY:F,rotationZ:p,rotationDeg:z}=this.infoFor3D.transformFieldRoles;e.outFields.push(r,s,a,o,i,u,d,l,h,R,F,p,z)}}return e}_normalizeFields(t){if(g(this.fieldsIndex)&&g(t))for(const e of t){const r=this.fieldsIndex.get(e.name);r&&Object.assign(e,r.toJSON())}}_queryIs3DObjectFormat(t){return g(this.infoFor3D)&&t.returnGeometry&&t.multipatchOption!=="xyFootprint"&&!t.outStatistics}};y([f({type:M})],b.prototype,"dynamicDataSource",void 0),y([f()],b.prototype,"fieldsIndex",void 0),y([f()],b.prototype,"format",void 0),y([f()],b.prototype,"gdbVersion",void 0),y([f()],b.prototype,"infoFor3D",void 0),y([f()],b.prototype,"sourceSpatialReference",void 0),b=y([v("esri.tasks.QueryTask")],b);const He=b,We=new fe({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function et(t){return typeof t=="string"?G(t)||{data:t}:new Promise((e,r)=>{const s=new FileReader;s.readAsDataURL(t),s.onload=()=>e(G(s.result)),s.onerror=a=>r(a)})}const tt=new Set(["Feature Layer","Table"]);let I=class extends me{constructor(){super(...arguments),this.type="feature-layer",this.refresh=ge(async()=>{var r,s;await this.load();const t=(r=this.sourceJSON.editingInfo)==null?void 0:r.lastEditDate;if(t==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const e=t!==((s=this.sourceJSON.editingInfo)==null?void 0:s.lastEditDate);return{dataChanged:e,updates:e?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})}load(t){const e=g(t)?t.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,e)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:t}},parsedUrl:e,dynamicDataSource:r,infoFor3D:s,gdbVersion:a,spatialReference:o,fieldsIndex:i}=this.layer,u=T("featurelayer-pbf")&&t&&q(s)?"pbf":"json";return new He({url:e.path,format:u,fieldsIndex:i,infoFor3D:s,dynamicDataSource:r,gdbVersion:a,sourceSpatialReference:o})}async addAttachment(t,e){await this.load();const r=t.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/addAttachment",a=this._getLayerRequestOptions(),o=this._getFormDataForAttachment(e,a.query);try{const i=await m(s,{body:o});return this._createFeatureEditResult(i.data.addAttachmentResult)}catch(i){throw this._createAttachmentErrorResult(r,i)}}async updateAttachment(t,e,r){await this.load();const s=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/updateAttachment",o=this._getLayerRequestOptions({query:{attachmentId:e}}),i=this._getFormDataForAttachment(r,o.query);try{const u=await m(a,{body:i});return this._createFeatureEditResult(u.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(s,u)}}async applyEdits(t,e){await this.load();const r=t.addFeatures.map(this._serializeFeature,this),s=t.updateFeatures.map(this._serializeFeature,this),a=this._getFeatureIds(t.deleteFeatures,e==null?void 0:e.globalIdUsed);Fe(r,s,this.layer.spatialReference);const o=[],i=[],u=[...t.deleteAttachments];for(const p of t.addAttachments)o.push(await this._serializeAttachment(p));for(const p of t.updateAttachments)i.push(await this._serializeAttachment(p));const d=o.length||i.length||u.length?{adds:o,updates:i,deletes:u}:null,l={gdbVersion:(e==null?void 0:e.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:e==null?void 0:e.rollbackOnFailureEnabled,useGlobalIds:e==null?void 0:e.globalIdUsed,returnEditMoment:e==null?void 0:e.returnEditMoment,usePreviousEditMoment:e==null?void 0:e.usePreviousEditMoment,sessionId:e==null?void 0:e.sessionId};(e==null?void 0:e.returnServiceEditsOption)?(l.edits=JSON.stringify([{id:this.layer.layerId,adds:r,updates:s,deletes:a,attachments:d}]),l.returnServiceEditsOption=We.toJSON(e==null?void 0:e.returnServiceEditsOption),l.returnServiceEditsInSourceSR=e==null?void 0:e.returnServiceEditsInSourceSR):(l.adds=r.length?JSON.stringify(r):null,l.updates=s.length?JSON.stringify(s):null,l.deletes=a.length?(e==null?void 0:e.globalIdUsed)?JSON.stringify(a):a.join(","):null,l.attachments=d&&JSON.stringify(d));const h=this._getLayerRequestOptions({method:"post",query:l}),R=(e==null?void 0:e.returnServiceEditsOption)?this.layer.url:this.layer.parsedUrl.path,F=await m(R+"/applyEdits",h);return this._createEditsResult(F)}async deleteAttachments(t,e){await this.load();const r=t.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await m(s,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(a){throw this._createAttachmentErrorResult(r,a)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then(async()=>{const r=this._getLayerRequestOptions(c(n({},t),{query:{returnUpdates:!0}})),{layerId:s,url:a}=this.layer,{data:o}=await m(`${a}/${s}`,r),{id:i,extent:u,fullExtent:d,timeExtent:l}=o,h=u||d;return{id:i,fullExtent:h&&$.fromJSON(h),timeExtent:l&&be.fromJSON({start:l[0],end:l[1]})}})}async queryAttachments(t,e={}){const{parsedUrl:r}=this.layer,s=r.path;await this.load();const a=this._getLayerRequestOptions(e);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:o}=t,i=[];for(const u of o){const d=s+"/"+u+"/attachments";i.push(m(d,a))}return Promise.all(i).then(u=>o.map((d,l)=>({parentObjectId:d,attachmentInfos:u[l].data.attachmentInfos}))).then(u=>B(u,s))}return this.queryTask.executeAttachmentQuery(t,a)}async queryFeatures(t,e){return await this.load(),this.queryTask.execute(t,c(n({},e),{query:this._createRequestQueryOptions(e)}))}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,c(n({},e),{query:this._createRequestQueryOptions(e)}))}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,c(n({},e),{query:this._createRequestQueryOptions(e)}))}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,c(n({},e),{query:this._createRequestQueryOptions(e)}))}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,c(n({},e),{query:this._createRequestQueryOptions(e)}))}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,c(n({},e),{query:this._createRequestQueryOptions(e)}))}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,c(n({},e),{query:this._createRequestQueryOptions(e)}))}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,c(n({},e),{query:this._createRequestQueryOptions(e)}))}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,c(n({},e),{query:this._createRequestQueryOptions(e)}))}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,c(n({},e),{query:this._createRequestQueryOptions(e)}))}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,c(n({},e),{query:this._createRequestQueryOptions(e)}))}_createRequestQueryOptions(t){const e=n(c(n({},this.layer.customParameters),{token:this.layer.apiKey}),t==null?void 0:t.query);return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const{data:s}=await m(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:T("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=s}this.sourceJSON=this._patchServiceJSON(t);const r=t.type;if(!tt.has(r))throw new x("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}_patchServiceJSON(t){var e;if(t.type!=="Table"&&t.geometryType&&!((e=t==null?void 0:t.drawingInfo)==null?void 0:e.renderer)&&!t.defaultSymbol){const r=Oe(t.geometryType).renderer;Re("drawingInfo.renderer",r,t)}return t.geometryType==="esriGeometryMultiPatch"&&t.infoFor3D&&(t.geometryType="mesh"),t}_serializeFeature(t){const{geometry:e,attributes:r}=t;return q(e)?{attributes:r}:e.type==="mesh"||e.type==="extent"?null:{geometry:e.toJSON(),attributes:r}}async _serializeAttachment(t){const{feature:e,attachment:r}=t,{globalId:s,name:a,contentType:o,data:i,uploadId:u}=r,d={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(e&&(d.parentGlobalId="attributes"in e?e.attributes&&e.attributes[this.layer.globalIdField]:e.globalId),u)d.uploadId=u;else if(i){const l=await et(i);d.contentType=l.mediaType,d.data=l.data,i instanceof File&&(d.name=i.name)}return a&&(d.name=a),o&&(d.contentType=o),d}_getFeatureIds(t,e){const r=t[0];return r?this._canUseGlobalIds(e,t)?this._getGlobalIdsFromFeatureIdentifier(t):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(t):this._getIdsFromFeatures(t):[]}_getIdsFromFeatures(t){const e=this.layer.objectIdField;return t.map(r=>r.attributes&&r.attributes[e])}_canUseGlobalIds(t,e){return t&&"globalId"in e[0]}_getObjectIdsFromFeatureIdentifier(t){return t.map(e=>e.objectId)}_getGlobalIdsFromFeatureIdentifier(t){return t.map(e=>e.globalId)}_createEditsResult(t){const e=t.data,{layerId:r}=this.layer,s=[];let a=null;if(Array.isArray(e))for(const u of e)s.push({id:u.id,editedFeatures:u.editedFeatures}),u.id===r&&(a={addResults:u.addResults,updateResults:u.updateResults,deleteResults:u.deleteResults,attachments:u.attachments,editMoment:u.editMoment});else a=e;const o=a==null?void 0:a.attachments,i={addFeatureResults:a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:o&&o.addResults?o.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:o&&o.updateResults?o.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:o&&o.deleteResults?o.deleteResults.map(this._createFeatureEditResult,this):[]};if(a.editMoment&&(i.editMoment=a.editMoment),s.length>0){i.editedFeatureResults=[];for(const u of s){const{adds:d,updates:l,deletes:h,spatialReference:R}=u.editedFeatures,F=R?new Se(R):null;i.editedFeatureResults.push({layerId:u.id,editedFeatures:{adds:(d==null?void 0:d.map(p=>this._createEditedFeature(p,F)))||[],updates:(l==null?void 0:l.map(p=>({original:this._createEditedFeature(p[0],F),current:this._createEditedFeature(p[1],F)})))||[],deletes:(h==null?void 0:h.map(p=>this._createEditedFeature(p,F)))||[],spatialReference:F}})}}return i}_createEditedFeature(t,e){return new Ie({attributes:t.attributes,geometry:qe(c(n({},t.geometry),{spatialReference:e}))})}_createFeatureEditResult(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new x("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}_createAttachmentErrorResult(t,e){const r=e.details.messages&&e.details.messages[0]||e.message,s=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new x("feature-layer-source:attachment-failure",r,{code:s})}}_getFormDataForAttachment(t,e){const r=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(r)for(const s in e){const a=e[s];a!=null&&(r.set?r.set(s,a):r.append(s,a))}return r}_getLayerRequestOptions(t={}){const{parsedUrl:e,gdbVersion:r,dynamicDataSource:s}=this.layer;return c(n({},t),{query:n(c(n({gdbVersion:r,layer:s?JSON.stringify({source:s}):void 0},e.query),{f:"json"}),this._createRequestQueryOptions(t)),responseType:"json"})}};y([f()],I.prototype,"type",void 0),y([f({constructOnly:!0})],I.prototype,"layer",void 0),y([f({readOnly:!0})],I.prototype,"queryTask",null),I=y([v("esri.layers.graphics.sources.FeatureLayerSource")],I);const nt=I;export{nt as default};