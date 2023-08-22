import{d as $,j as N,m as z,f as V,y as H,x as J,K,a as W,n as Z,t as U,b as v,S as Q,V as X,c as Y,p as ee,Z as S,e as B,g as te,h as ne,i as se,P as re,k as L}from"./vendor.c414a8c9.js";const ie=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};ie();const oe=(e,t,n)=>{let r=t-e;return n&&(r>n/2?r=-r+n:r<-n/2&&(r=r+n)),r},p=(e,t,n,r,s)=>{if(!r)r=1;else if(r===0)throw new Error("Can not interpolate between two values where the distance is 0");const i=oe(e,t,s),o=n/r;return e+i*o},x=(e,t,n,r,s)=>{if(e.declaredClass&&e.declaredClass===t.declaredClass){if(e.declaredClass==="esri.Camera"){const i=e,o=t;return new $({heading:p(i.heading,o.heading,n,r,360),position:x(i.position,o.position,n,r),tilt:p(i.tilt,o.tilt,n,r)})}else if(e.declaredClass==="esri.geometry.Point"){const i=e,o=t,a=i.spatialReference;return new N({spatialReference:a,x:p(i.x,o.x,n,r,s),y:p(i.y,o.y,n,r,s),z:p(i.z,o.z,n,r,s)})}}throw new Error("Values a and b do not have compatible types for interpolation")},ae=(e,t,n,r,s)=>{if(e.length===t.length)return e.map((i,o)=>j(i,t[o],n,r,s));throw new Error("Value arrays must have same length for interpolation")},A=e=>e&&Object.prototype.toString.call(e)==="[object Date]"&&!isNaN(e),ce=(e,t,n,r)=>{const s=e.getTime(),i=t.getTime();return new Date(p(s,i,n,r))},j=(e,t,n,r,s)=>{const i=typeof e;if(typeof t===i){if(i==="number")return p(e,t,n,r,s);if(i==="object")return Array.isArray(e)&&Array.isArray(t)?ae(e,t,n,r,s):A(e)&&A(t)?ce(e,t,n,r):x(e,t,n,r);if(e===void 0)return}throw new Error("Values a and b do not have compatible types for interpolation")};class le{constructor(t){this.xs=[],this.dxs=[],this.points=[],this.createPolyline=s=>{const i=this.xs,o=i.length,a=o?i[0]:0,y=o?i[o-1]:0,I=a+(y-a)*s,R=this.spatialReference,g=[];if(2<=o){let d=0;for(g.push(this.points[0]);d<i.length-1&&I>i[d+1];)d++,g.push(this.points[d]);const _=this.dxs[d],G=this.points[d],q=this.points[d+1];g.push(j(G,q,I-i[d],_)||[])}return new z({paths:[g],spatialReference:R})},this.newPoint=s=>{const i=s[0],o=s[1],a=s[2];return new N({spatialReference:this.spatialReference,x:i,y:o,z:a})};const n=t.paths.length?t.paths[0]:[];this.spatialReference=t.spatialReference;let r=null;n.forEach((s,i)=>{this.points.push([].concat(s));const o=this.newPoint(s);if(i===0)this.xs.push(0);else{const a=V(r,o,void 0);this.dxs.push(a),this.xs.push(a+this.xs[i-1])}r=o})}}var ue=Object.defineProperty,he=Object.getOwnPropertyDescriptor,k=(e,t,n,r)=>{for(var s=r>1?void 0:r?he(t,n):t,i=e.length-1,o;i>=0;i--)(o=e[i])&&(s=(r?o(t,n,s):o(s))||s);return r&&s&&ue(t,n,s),s};const w="_line_objectid",de=e=>{let t=e.renderer;t&&(t=U(t.toJSON()));let n=e.elevationInfo;n&&typeof n.clone=="function"&&(n=n.clone());const r=[new v({name:"OBJECTID",type:"oid"}),new v({name:w,type:"long"})];return e.fields.forEach(s=>{s.type!=="oid"&&s.name!=="OBJECTID"&&s.name!==w&&r.push(s)}),new K({fields:r,geometryType:"polyline",labelingInfo:e.labelingInfo?e.labelingInfo.map(s=>s.clone()):void 0,labelsVisible:e.labelsVisible,legendEnabled:e.legendEnabled,listMode:e.listMode,maxScale:e.maxScale,minScale:e.maxScale,objectIdField:"OBJECTID",opacity:e.opacity,outFields:["*"],popupEnabled:e.popupEnabled,popupTemplate:e.popupTemplate?e.popupTemplate.clone():void 0,renderer:t,source:[],spatialReference:e.spatialReference,title:e.title})};let b=class extends H{constructor(){super(...arguments);this.resolveAnimationLayer=null,this.rejectAnimationLayer=null,this.animationLayerPromise=new Promise((e,t)=>{this.resolveAnimationLayer=e,this.rejectAnimationLayer=t}),this.animationGraphics=new Map,this.sections=new Map,this.seekGraphicDebounce=J((e,t)=>this.seekGraphicSequencial(e,t)),this.queryLineGraphic=e=>{const t=this.sourceLayer;return t?t.queryFeatures({objectIds:[e],outFields:["*"],returnGeometry:!0}).then(n=>{if(n.features.length)return n.features[0];throw new Error("No such graphic with objectId `{objectId}`")}):Promise.reject("No source layer assigned")},this.getAnimationGraphic=e=>{if(this.animationGraphics.has(e)){const t=this.animationGraphics.get(e);return Promise.resolve(t)}else return this.queryLineGraphic(e).then(t=>t.clone()).then(t=>{const n=t.attributes[this.sourceLayer.objectIdField];return t.attributes[w]=n,this.animationGraphics.set(e,t),t})},this.initializeAnimationLayer=()=>this.sourceLayer.load().then(e=>{if(e.geometryType!=="polyline"){const n=new Error('`lineLayer` must have `geometryType` "polyline"');throw this.rejectAnimationLayer(n),n}const t=de(e);this.resolveAnimationLayer(t)})}get sourceLayer(){return this._get("sourceLayer")}set sourceLayer(e){const t=this._get("sourceLayer");if(t){if(t===e)return;throw new Error("The `sourceLayer` property cannot be changed once a layer has been assigned")}e&&(this._set("sourceLayer",e),this.initializeAnimationLayer())}getLineGraphic(e){const t=e.attributes[w];return this.queryLineGraphic(t)}whenAnimatedLayer(){return this.animationLayerPromise}seek(e,t){return this.seekGraphicDebounce(e,t)}seekGraphicSequencial(e,t){return this.getAnimationGraphic(t).then(n=>{const r={addFeatures:[],updateFeatures:[]};let s=this.sections.get(t);s?r.updateFeatures=[n]:(s=new le(n.geometry),this.sections.set(t,s),r.addFeatures=[n]);const i=s.createPolyline(e);return n.geometry=i,this.whenAnimatedLayer().then(o=>{o.applyEdits(r)})})}};k([W()],b.prototype,"sourceLayer",1);b=k([Z("animations.layers.LineLayerAnimation")],b);var pe=b;const f=new Q({portalItem:{id:"02bae9c8de294eabaa91972b14394ecc"}}),m=new X({container:"viewDiv",map:f,ui:{components:[]}});let me=new Y({view:m}),F=new ee({view:m});m.ui.add(F,"top-right");m.ui.add(me,"top-left");m.ui.add(F,"top-right");const O=new S({url:"./data/points.geojson",renderer:new B({symbol:new te({color:[255,255,255,1],size:8,style:"circle",outline:{width:1,color:[0,0,0,.5]}})}),labelingInfo:[new ne({labelExpressionInfo:{expression:"$feature.name"},labelPlacement:"center-right",symbol:new se({color:[255,255,255,1],haloSize:1,haloColor:[0,0,0,.5],font:{size:14,family:"Caveat",weight:"bold"}})})]}),c=e=>{O.definitionExpression=e};f.add(O);const T=new S({url:"./data/paths.geojson",definitionExpression:"1=2",renderer:new re({field:"type",defaultSymbol:new L({width:3,color:[255,0,0],style:"short-dash",cap:"round",join:"round"}),uniqueValueInfos:[{value:"road",symbol:new L({width:3,color:[255,0,0],style:"solid",cap:"round",join:"round"})}]})});f.add(T);const l=e=>{T.definitionExpression=e},D=new S({url:"./data/animated-paths.geojson",renderer:new B({symbol:new L({width:3,color:[255,0,0],style:"solid",cap:"round",join:"round"})})}),M=new pe({sourceLayer:D});M.whenAnimatedLayer().then(e=>{f.add(e)});function fe(e){const t=e.getBoundingClientRect(),n=t.top,r=window.innerHeight||document.documentElement.clientHeight;return Math.min(Math.max((r/2-n)/t.height,1e-4),1)}let E=[];const P={"section-1":0,"section-3":1,"section-4":2,"section-5":3,"section-6":4};let h=null,C=null;const ye=e=>{switch(e){case"section-0":c("name IN ('Coronado Island', 'User Conference')"),u(e),l("1=2");break;case"section-1":c("name IN ('San Diego', 'Los Angeles')"),u(e,2500),l("1=2");break;case"section-2":c("name IN ('Hollywood Bowl', 'Griffith Observatory', 'Santa Monica beach', 'Walk of Fame')"),u(e),l("1=2");break;case"section-3":c("name IN ('Laguna beach', 'Los Angeles')"),u(e),l("1=2");break;case"section-4":c("name IN ('Zuma beach', 'Los Angeles', 'Laguna beach')"),l("1=2"),u(e);break;case"section-5":c("name IN ('Zuma beach','Santa Barbara', 'Los Angeles')"),l("1=2");break;case"section-6":c("name IN ('Santa Barbara', 'Los Angeles', 'Pismo beach')"),l("1=2"),u(e);break;case"section-7":l("name IN ('Pismo Beach - Big Sur', 'Big Sur hike')"),c("name IN ('Santa Barbara', 'Los Angeles', 'Pismo beach', 'Andrew Molera State Park', 'beautiful beach')"),u(e,4e3);break;case"section-8":l("name IN ('Pismo Beach - Big Sur', 'Big Sur - Carmel')"),c("name IN ('Carmel by the Sea')"),u(e,4e3);break;case"section-9":c("name IN ('Carmel by the Sea', 'Mission Dolores Park', '45th SF Marathon', 'Alcatraz Island')"),l("name IN ('Pismo Beach - Big Sur', 'Big Sur - Carmel', 'Carmel - San Francisco')"),u(e,4e3);break;case"section-10":c("name IN ('Muir Woods National Monument', 'San Francisco')"),l("name IN ('Pismo Beach - Big Sur', 'Big Sur - Carmel', 'Carmel - San Francisco', 'San Francisco - Muir')"),u(e,2e3);break;default:c("name IN ('Muir Woods National Monument', 'San Francisco', 'San Diego', 'Los Angeles', 'Santa Barbara', 'Carmel by the Sea')"),u("intro",1500);break}};function u(e,t=1500){m.goTo(f.bookmarks.filter(n=>n.name===e).getItemAt(0).viewpoint,{duration:t})}const ge=()=>{h&&h===C?typeof P[h]!="undefined"&&D.queryObjectIds().then(function(e){const t=P[h],n=e[t];if(typeof n!="undefined"&&h){const r=fe(document.getElementById(h));M.seek(r,n)}}):(C=h,ye(h))},we=()=>{const e=document.querySelectorAll("section"),t=Array.from(e),n=window.innerHeight||document.documentElement.clientHeight;E=t.map(s=>{const i=s.getBoundingClientRect(),o=i.top,a={id:s.id,current:!1},y=(n/2-o)/i.height;return y>=0&&y<=1&&(a.current=!0),a});const r=E.filter(s=>s.current===!0)[0];h=r?r.id:null};window.onscroll=e=>{we(),ge()};document.querySelectorAll(".media>img").forEach(e=>{e.addEventListener("click",t=>{const n=document.querySelector(".full-screen-modal");n.classList.add("visible-full-screen-modal");const r=t.target.cloneNode(!0);n.appendChild(r),n.addEventListener("click",s=>{n.removeChild(r),n.classList.remove("visible-full-screen-modal")},{once:!0})})});