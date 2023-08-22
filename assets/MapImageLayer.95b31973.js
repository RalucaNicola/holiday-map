var E=Object.defineProperty,j=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var x=(e,t,r)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))T.call(t,r)&&x(e,r,t[r]);if(S)for(var r of S(t))$.call(t,r)&&x(e,r,t[r]);return e},u=(e,t)=>j(e,M(t));import{iZ as L,jC as P,i_ as N,ed as R,ee as U,ef as F,eg as J,i$ as q,jb as k,jD as A,al as C,ek as V,r as _,b5 as z,jY as w,dX as v,C as O,U as b,M as D,cU as G,dQ as H,jc as K,jE as W,an as a,a as n,dS as B,c5 as X,i5 as Q,ej as Y,n as Z}from"./vendor.c414a8c9.js";import{r as ee}from"./scaleUtils.edcb9e53.js";import{E as te,y as re,X as se}from"./SublayersOwner.38ece968.js";import{c as ie}from"./ExportImageParameters.8eae0ec5.js";import{n as I}from"./sublayerUtils.b8a7a6d3.js";import"./floorFilterUtils.69500d62.js";let i=class extends L(P(N(te(re(R(U(F(J(q(k(A(C(V))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return typeof e=="string"?p({url:e},t):e}load(e){const t=_(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(z).then(()=>this._fetchService(t))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("PNG32")?"png32":"png24"}writeSublayers(e,t,r,s){if(!this.loaded||!e)return;const y=e.slice().reverse().flatten(({sublayers:o})=>o&&o.toArray().reverse()).toArray();let l=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const o=w(s.origin);if(o===v.PORTAL_ITEM){const h=this.createSublayersForOrigin("service").sublayers;l=I(y,h,v.SERVICE)}else if(o>v.PORTAL_ITEM){const h=this.createSublayersForOrigin("portal-item");l=I(y,h.sublayers,w(h.origin))}}const c=[],d=p({writeSublayerStructure:l},s);let m=l;y.forEach(o=>{const h=o.write({},d);c.push(h),m=m||o.originOf("visible")==="user"}),c.some(o=>Object.keys(o).length>1)&&(t.layers=c),m&&(t.visibleLayers=y.filter(o=>o.visible).map(o=>o.id))}createExportImageParameters(e,t,r,s){const y=s&&s.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const l=new ie({layer:this,floors:s==null?void 0:s.floors,scale:ee({extent:e,width:t})*y}),c=l.toJSON();l.destroy();const d=!s||!s.rotation||this.version<10.3?{}:{rotation:-s.rotation},m=e&&e.spatialReference,o=m.wkid||JSON.stringify(m.toJSON());c.dpi*=y;const h={};if(s==null?void 0:s.timeExtent){const{start:g,end:f}=s.timeExtent.toJSON();h.time=g&&f&&g===f?""+g:`${g==null?"null":g},${f==null?"null":f}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(h.time="null,null");return p(p(p({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:o,imageSR:o,size:t+","+r},c),d),h)}async fetchImage(e,t,r,s){var c;const y={responseType:"image",signal:(c=s==null?void 0:s.signal)!=null?c:null,query:u(p(p(u(p(p({},this.parsedUrl.query),this.createExportImageParameters(e,t,r,s)),{f:"image"}),this.refreshParameters),this.customParameters),{token:this.apiKey})},l=this.parsedUrl.path+"/export";if(y.query.dynamicLayers!=null&&!this.capabilities.exportMap.supportsDynamicLayers)throw new O("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:y.query});return b(l,y).then(d=>d.data).catch(d=>{throw D(d)?d:new O("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:d})})}async fetchRecomputedExtents(e={}){const t=u(p({},e),{query:u(p({returnUpdates:!0,f:"json"},this.customParameters),{token:this.apiKey})}),{data:r}=await b(this.url,t),{extent:s,fullExtent:y,timeExtent:l}=r,c=s||y;return{fullExtent:c&&G.fromJSON(c),timeExtent:l&&H.fromJSON({start:l[0],end:l[1]})}}loadAll(){return K(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return W(this,e)}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await b(this.parsedUrl.path,{query:u(p(p({f:"json"},this.parsedUrl.query),this.customParameters),{token:this.apiKey}),signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};a([n({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),a([n()],i.prototype,"dpi",void 0),a([n()],i.prototype,"gdbVersion",void 0),a([n()],i.prototype,"imageFormat",void 0),a([B("imageFormat",["supportedImageFormatTypes"])],i.prototype,"readImageFormat",null),a([n({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],i.prototype,"imageMaxHeight",void 0),a([n({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],i.prototype,"imageMaxWidth",void 0),a([n()],i.prototype,"imageTransparency",void 0),a([n({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),a([n({json:{read:!1,write:!1}})],i.prototype,"labelsVisible",void 0),a([n({type:["ArcGISMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),a([n({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),a([n()],i.prototype,"sourceJSON",void 0),a([n({json:{write:{ignoreOrigin:!0}}})],i.prototype,"sublayers",void 0),a([X("sublayers",{layers:{type:[se]},visibleLayers:{type:[Q]}})],i.prototype,"writeSublayers",null),a([n({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),a([n({json:{read:!1},readOnly:!0,value:"map-image"})],i.prototype,"type",void 0),a([n(Y)],i.prototype,"url",void 0),i=a([Z("esri.layers.MapImageLayer")],i);const he=i;export{he as default};