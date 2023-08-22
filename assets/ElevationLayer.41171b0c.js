var $=Object.defineProperty,b=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var _=(r,e,t)=>e in r?$(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,c=(r,e)=>{for(var t in e||(e={}))L.call(e,t)&&_(r,t,e[t]);if(v)for(var t of v(e))x.call(e,t)&&_(r,t,e[t]);return r},y=(r,e)=>b(r,T(e));import{s as S,c$ as k,eb as I,ec as D,r as u,O as m,E,ed as V,ee as j,ef as O,eg as C,eh as M,C as P,b5 as U,U as g,dH as A,an as a,a as o,ei as N,ej as H,dS as q,n as F,ek as J}from"./vendor.c414a8c9.js";import{s as z}from"./ArcGISCachedService.c8c21182.js";import"./TilemapCache.cf0417b1.js";const G=S.getLogger("esri.core.workers.WorkerHandle");class K{constructor(e,t,s,l,h={}){this._mainMethod=t,this._transferLists=s,this._listeners=[],this._promise=k(e,y(c({},h),{schedule:l})).then(d=>{if(this._thread===void 0){this._thread=d,this._promise=null,h.hasInitialize&&this.broadcast({},"initialize");for(const n of this._listeners)this._connectListener(n)}else d.close()}),this._promise.catch(d=>G.error(`Failed to initialize ${e} worker: ${d}`))}on(e,t){const s={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(s),this._connectListener(s),I(()=>{s.removed=!0,D(this._listeners,s),this._thread&&u(s.threadHandle)&&s.threadHandle.remove()})}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,s){if(this._thread){const l=this._transferLists[e],h=l?l(t):[];return this._thread.invoke(e,t,{transferList:h,signal:s})}return this._promise?this._promise.then(()=>(m(s),this.invokeMethod(e,t,s))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then(()=>{}):this._promise?this._promise.then(()=>this.broadcast(e,t)):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then(t=>{e.removed||(e.threadHandle=t)})}}class f extends K{constructor(e=null){super("LercWorker","_decode",{_decode:t=>[t.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,s){return e&&e.byteLength!==0?this.invoke({buffer:e,options:t},s):Promise.resolve(null)}release(){--this.ref<=0&&(p.forEach((e,t)=>{e===this&&p.delete(t)}),this.destroy())}}const p=new Map;function Q(r=null){let e=p.get(E(r));return e||(u(r)?(e=new f(t=>r.schedule(t)),p.set(r,e)):(e=new f,p.set(null,e))),++e.ref,e}const w=S.getLogger("esri.layers.ElevationLayer");let i=class extends z(V(j(O(C(J))))){constructor(...r){super(...r),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=Q()}normalizeCtorArgs(r,e){return typeof r=="string"?c({url:r},e):r}destroy(){this._lercDecoder=M(this._lercDecoder)}set minScale(r){this.constructed&&w.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`)}get minScale(){}set maxScale(r){this.constructed&&w.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`)}get maxScale(){}readVersion(r,e){let t=e.currentVersion;return t||(t=9.3),t}load(r){const e=u(r)?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{for(let s=0;s<t.typeKeywords.length;s++)if(t.typeKeywords[s].toLowerCase()==="elevation 3d layer")return!0;throw new P("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},r).catch(U).then(()=>this._fetchImageService(e))),Promise.resolve(this)}fetchTile(r,e,t,s){const l=u((s=s||{signal:null}).signal)?s.signal:s.signal=new AbortController().signal,h={responseType:"array-buffer",signal:l},d={noDataValue:s.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(r,e,t,s)).then(()=>g(this.getTileUrl(r,e,t),h)).then(n=>this._lercDecoder.decode(n.data,d,l)).then(n=>({values:n.pixelData,width:n.width,height:n.height,maxZError:n.fileInfo.maxZError,noDataValue:n.noDataValue,minValue:n.minValue,maxValue:n.maxValue}))}getTileUrl(r,e,t){const s=!this.tilemapCache&&this.supportsBlankTile,l=A(y(c({},this.parsedUrl.query),{blankTile:!s&&null}));return`${this.parsedUrl.path}/tile/${r}/${e}/${t}${l?"?"+l:""}`}async queryElevation(r,e){const{ElevationQuery:t}=await import("./ElevationQuery.6b65e43d.js");return m(e),new t().query(this,r,e)}async createElevationSampler(r,e){const{ElevationQuery:t}=await import("./ElevationQuery.6b65e43d.js");return m(e),new t().createSampler(this,r,e)}_fetchTileAvailability(r,e,t,s){return this.tilemapCache?this.tilemapCache.fetchAvailability(r,e,t,s):Promise.resolve("unknown")}async _fetchImageService(r){if(this.sourceJSON)return this.sourceJSON;const e={query:c({f:"json"},this.parsedUrl.query),responseType:"json",signal:r},t=await g(this.parsedUrl.path,e);t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};a([o({json:{read:{source:"copyrightText"}}})],i.prototype,"copyright",void 0),a([o({readOnly:!0,type:N})],i.prototype,"heightModelInfo",void 0),a([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),a([o({type:["show","hide"]})],i.prototype,"listMode",void 0),a([o({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],i.prototype,"minScale",null),a([o({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],i.prototype,"maxScale",null),a([o({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],i.prototype,"opacity",void 0),a([o({type:["ArcGISTiledElevationServiceLayer"]})],i.prototype,"operationalLayerType",void 0),a([o()],i.prototype,"sourceJSON",void 0),a([o({json:{read:!1},value:"elevation",readOnly:!0})],i.prototype,"type",void 0),a([o(H)],i.prototype,"url",void 0),a([o()],i.prototype,"version",void 0),a([q("version",["currentVersion"])],i.prototype,"readVersion",null),i=a([F("esri.layers.ElevationLayer")],i),i.prototype.fetchTile.__isDefault__=!0;const X=i;export{X as default};
