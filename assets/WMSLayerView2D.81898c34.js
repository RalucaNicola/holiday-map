var R=Object.defineProperty;var M=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var S=(r,e,t)=>e in r?R(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,F=(r,e)=>{for(var t in e||(e={}))U.call(e,t)&&S(r,t,e[t]);if(M)for(var t of M(e))b.call(e,t)&&S(r,t,e[t]);return r};import{an as o,a as m,d3 as q,n as V,C as x,s as W,M as $,ae as L,cU as C}from"./vendor.c414a8c9.js";import{t as j}from"./BitmapContainer.c9ff86ec.js";import{f as z,u as D}from"./LayerView.da2fde64.js";import{S as H}from"./ExportStrategy.6c446032.js";import{i as N}from"./RefreshableLayerView.909741ab.js";import{l as Q}from"./ExportWMSImageParameters.28ae8021.js";import"./WGLContainer.400ca512.js";import"./enums.de935fa5.js";import"./pixelUtils.8244b2be.js";import"./utils.26cfa974.js";import"./Utils.d29fb889.js";import"./enums.6e42a319.js";import"./Texture.21608732.js";import"./VertexElementDescriptor.d386088d.js";import"./MaterialKey.003e1aef.js";import"./VertexArrayObject.6089921b.js";import"./ProgramTemplate.443da894.js";import"./StyleDefinition.627ffe6c.js";import"./config.40d47db8.js";import"./GeometryUtils.8166011b.js";import"./earcut.d30cbec0.js";import"./Bitmap.95cbe132.js";const A=r=>{let e=class extends r{initialize(){this.exportImageParameters=new Q({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(t){const{layer:i}=this;if(!t)return Promise.reject(new x("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const{popupEnabled:n}=i;if(!n)return Promise.reject(new x("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:n}));const u=this.createFetchPopupFeaturesQuery(t);if(!u)return Promise.resolve([]);const{extent:a,width:s,height:p,x:d,y:l}=u;if(!(a&&s&&p))throw new x("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:a,width:s,height:p});const c=i.fetchFeatureInfo(a,s,p,d,l);return Promise.resolve(c?[c]:[])}};return o([m()],e.prototype,"exportImageParameters",void 0),o([m({readOnly:!0})],e.prototype,"exportImageVersion",null),o([m()],e.prototype,"layer",void 0),o([m(q)],e.prototype,"timeExtent",void 0),e=o([V("esri.layers.mixins.WMSLayerView")],e),e},O=W.getLogger("esri.views.2d.layers.WMSLayerView2D");let h=class extends A(N(z(D))){constructor(){super(...arguments),this.container=new j}supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}update(r){this.strategy.update(r).catch(e=>{$(e)||O.error(e)})}attach(){const{layer:r,container:e}=this,{imageMaxHeight:t,imageMaxWidth:i}=r;this.strategy=new H({container:e,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(L(()=>this.exportImageVersion,()=>this.requestUpdate()),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(r){const{view:e,container:t}=this,{x:i,y:n}=r,{spatialReference:u}=e;let a=null,s=0,p=0;if(t.children.some(E=>{const{width:f,height:w,resolution:v,x:y,y:g}=E,P=y+v*f,I=g-v*w;return i>=y&&i<=P&&n<=g&&n>=I&&(a=new C({xmin:y,ymin:I,xmax:P,ymax:g,spatialReference:u}),s=f,p=w,!0)}),!a)return null;const d=a.width/s,l=Math.round((i-a.xmin)/d),c=Math.round((a.ymax-n)/d);return{extent:a,width:s,height:p,x:l,y:c}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(r,e,t,i){return this.layer.fetchImage(r,e,t,F({timeExtent:this.timeExtent},i))}};o([m()],h.prototype,"strategy",void 0),o([m()],h.prototype,"updating",void 0),h=o([V("esri.views.2d.layers.WMSLayerView2D")],h);const ce=h;export{ce as default};
