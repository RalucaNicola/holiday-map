var E=Object.defineProperty;var x=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var k=(t,e,s)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,T=(t,e)=>{for(var s in e||(e={}))L.call(e,s)&&k(t,s,e[s]);if(x)for(var s of x(e))P.call(e,s)&&k(t,s,e[s]);return t};import{M as F,s as $,an as O,n as A,ci as U,e6 as z,O as _,b4 as B,a8 as v,w as M,r as w,hY as j,E as J}from"./vendor.c414a8c9.js";import{n as N}from"./CIMSymbolHelper.cef2d21f.js";import{p as V}from"./visualVariablesUtils.65951d45.js";import{x as W,l as D,b as Y,E as Z,t as q}from"./Matcher.9dc9529f.js";import{p as G}from"./BaseProcessor.29a96e61.js";import"./BidiEngine.ec67919b.js";import"./enums.6e42a319.js";import"./MaterialKey.003e1aef.js";import"./Utils.d29fb889.js";import"./enums.de935fa5.js";import"./Texture.21608732.js";import"./VertexElementDescriptor.d386088d.js";import"./GeometryUtils.814cb798.js";import"./visualVariablesUtils.f6ff214d.js";import"./tileUtils.4ce20f65.js";import"./TileClipper.139cac50.js";import"./Geometry.b68345ae.js";import"./GeometryUtils.8166011b.js";import"./ExpandedCIM.13be576b.js";import"./quantizationUtils.2450b4c7.js";import"./earcut.d30cbec0.js";import"./devEnvironmentUtils.8c6e6b72.js";class H{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null}destroy(){}async fetchResource(e,s){const r=this._resourceMap,i=r.get(e);if(i)return i;let a=this._inFlightResourceMap.get(e);if(a)return a;try{a=this._remoteClient.invoke("tileRenderer.fetchResource",{url:e},T({},s)),this._inFlightResourceMap.set(e,a),a.then(o=>(this._inFlightResourceMap.delete(e),r.set(e,o),o))}catch(o){return F(o)?null:{width:0,height:0}}return a}getResource(e){var s;return(s=this._resourceMap.get(e))!=null?s:null}}function C(t,e){return(!t.minScale||t.minScale>=e)&&(!t.maxScale||t.maxScale<=e)}function R(t){const e=t.message,s={message:{data:{},tileKey:e.tileKey,tileKeyOrigin:e.tileKeyOrigin,version:e.version},transferList:new Array};for(const r in e.data){const i=e.data[r];if(s.message.data[r]=null,w(i)){const a=i.stride,o=i.indices.slice(0),l=i.vertices.slice(0),h=i.records.slice(0),d={stride:a,indices:o,vertices:l,records:h,metrics:v(i.metrics,n=>n.slice(0))};s.transferList.push(o,l,h),s.message.data[r]=d}}return s}$.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let I=class extends G{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new H(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(t){this._bufferIds.forEach(e=>{e.forEach(t)})}async update(t,e){const s=e.schema.processors[0];if(s.type!=="symbol")return;const r=U(this._schema,s);z(r,"mesh")&&(t.mesh=!0,t.why.mesh.push("Symbology changed"),this._schema=s,this._factory=this._createFactory(s),this._factory.update(s,this.tileStore.tileScheme.tileInfo))}onTileMessage(t,e,s,r){return _(r),this._onTileData(t,e,s,r)}onTileClear(t){const e={clear:!0};return this._bufferData.delete(t.key.id),this._bufferIds.delete(t.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:e})}onTileError(t,e,s){const r=s.signal,i={tileKey:t.id,error:e};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:r})}onTileUpdate(t){for(const e of t.removed)this._bufferData.has(e.key.id)&&this._bufferData.delete(e.key.id),this._bufferIds.has(e.key.id)&&this._bufferIds.delete(e.key.id);for(const e of t.added)this._bufferData.forEach(s=>{for(const r of s)r.message.tileKey===e.id&&this._updateTileMesh("append",e,R(r),[],!1,!1,null)})}_addBufferData(t,e){this._bufferData.has(t)||this._bufferData.set(t,[]),this._bufferData.get(t).push(R(e))}_createFactory(t){const{geometryType:e,objectIdField:s,fields:r}=this.service,i=(d,n)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",d,n),a={geometryType:e,fields:r,spatialReference:B.fromJSON(this.spatialReference)},o=new W(i,this.tileStore.tileScheme.tileInfo),{matcher:l,aggregateMatcher:h}=t.mesh;return this._store=o,this._matchers.feature=D(l,o,a,this._resourceManagerProxy),this._matchers.aggregate=v(h,d=>D(d,o,a,this._resourceManagerProxy)),new Y(e,s,o)}async _onTileData(t,e,s,r){_(r);const{type:i,addOrUpdate:a,remove:o,clear:l,end:h}=e,d=!!this._schema.mesh.sortKey;if(!a){const u={type:i,addOrUpdate:null,remove:o,clear:l,end:h,sort:d};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:u},r)}const n=this._processFeatures(t,a,s,r,e.status.version);try{const u=await n;if(M(u)){const c={type:i,addOrUpdate:null,remove:o,clear:l,end:h,sort:d};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:t.id,data:c},r)}const f=[];for(const c of u){let m=!1;const p=c.message.bufferIds,g=t.key.id,b=c.message.tileKey;if(g!==b&&w(p)){if(!this.tileStore.get(b)){this._addBufferData(g,c),f.push(c);continue}let y=this._bufferIds.get(b);y||(y=new Set,this._bufferIds.set(b,y));const K=Array.from(p);for(const S of K){if(y.has(S)){m=!0;break}y.add(S)}}m||(this._addBufferData(g,c),f.push(c))}await Promise.all(f.map(c=>{const m=t.key.id===c.message.tileKey,p=m?e.remove:[],g=m&&e.end;return this._updateTileMesh(i,t,c,p,g,e.clear,r.signal)}))}catch(u){this._handleError(t,u,r)}}async _updateTileMesh(t,e,s,r,i,a,o){const l=t,h=s.message.tileKey,d=!!this._schema.mesh.sortKey;h!==e.key.id&&(i=!1);const n=v(s,m=>m.message),u=v(s,m=>m.transferList)||[],f={type:l,addOrUpdate:n,remove:r,clear:a,end:i,sort:d},c={transferList:J(u)||[],signal:o};return _(c),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:h,data:f},c)}async _processFeatures(t,e,s,r,i){if(M(e)||!e.hasFeatures)return null;const a={transform:t.transform,hasZ:!1,hasM:!1},o=this._factory,l={viewingMode:"",scale:t.scale},h=await this._matchers.feature,d=await this._matchers.aggregate;_(r);const n=this._getLabelInfos(t,e);return await o.analyze(e.getCursor(),this._resourceManagerProxy,h,d,a,l),_(r),this._writeFeatureSet(t,e,a,n,o,s,i)}_writeFeatureSet(t,e,s,r,i,a,o){const l=e.getSize(),h=new Z(t.key.id,{features:l,records:l,metrics:0},this._schema.mesh.matcher.symbologyType,a,!0,o),d={viewingMode:"",scale:t.scale},n=e.getCursor();for(;n.next();)try{const f=n.getDisplayId(),c=w(r)?r.get(f):null;i.writeCursor(h,n,s,d,t.level,c,this._resourceManagerProxy)}catch{}const u=t.tileInfoView.tileInfo.isWrappable;return h.serialize(u)}_handleError(t,e,s){if(!F(e)){const r={tileKey:t.id,error:e.message};return this.remoteClient.invoke("tileRenderer.onTileError",r,{signal:s.signal})}}_getLabelingSchemaForScale(t){const e=this._schema.mesh.labels;if(M(e))return null;if(e.type==="subtype"){const r={type:"subtype",classes:{}};let i=!1;for(const a in e.classes){const o=e.classes[a].filter(l=>C(l,t.scale));i=i||!!o.length,r.classes[a]=o}return i?r:null}const s=e.classes.filter(r=>C(r,t.scale));return s.length?{type:"simple",classes:s}:null}_getLabels(t,e){var s;if(e.type==="subtype"){const r=this.service.subtypeField,i=j(r,"Expected to find subtype Field"),a=t.readAttribute(i);return a==null?[]:(s=e.classes[a])!=null?s:[]}return e.classes}_getLabelInfos(t,e){const s=this._getLabelingSchemaForScale(t);if(M(s))return null;const r=new Map,i=e.getCursor();for(;i.next();){const a=i.getDisplayId(),o=[],l=V(a),h=l&&i.readAttribute("cluster_count")!==1?"aggregate":"feature",d=this._getLabels(i,s);for(const n of d){if(n.target!==h)continue;const u=i.getStorage(),f=l&&h==="feature"?u.getComputedStringAtIndex(i.readAttribute("referenceId"),n.fieldIndex):u.getComputedStringAtIndex(a,n.fieldIndex);if(!f)continue;const c=N(f.toString()),m=c[0],p=c[1];this._store.getMosaicItem(n.symbol,q(m)).then(g=>{o[n.index]={glyphs:g.glyphMosaicItems,rtl:p,index:n.index}})}r.set(a,o)}return r}};I=O([A("esri.views.2d.layers.features.processors.SymbolProcessor")],I);const ve=I;export{ve as default};