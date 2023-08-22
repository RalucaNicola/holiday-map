var Ur=Object.defineProperty,Wr=Object.defineProperties;var qr=Object.getOwnPropertyDescriptors;var ui=Object.getOwnPropertySymbols;var kr=Object.prototype.hasOwnProperty,jr=Object.prototype.propertyIsEnumerable;var hi=(t,e,i)=>e in t?Ur(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,ve=(t,e)=>{for(var i in e||(e={}))kr.call(e,i)&&hi(t,i,e[i]);if(ui)for(var i of ui(e))jr.call(e,i)&&hi(t,i,e[i]);return t},Ze=(t,e)=>Wr(t,qr(e));import{a as Xr}from"./devEnvironmentUtils.8c6e6b72.js";import{eo as Vi,Y as H,a7 as Ge,h2 as Kr,ib as Gt,ia as Yr,hN as Qr,w as k,cu as Zr,s as jt,D as Mt,a6 as Jr,j$ as mi,cD as ea,i3 as Je,lj as et,r as v,O as pi,lk as ta,I as ia,J as ra,gP as fi,ex as Pt,C as Xt,gh as aa,T as Gi,cm as Bi,az as Hi,eh as Pe,fm as oa,ll as na,dL as sa,ai as la,$ as oe,lm as ca,ln as da,gK as ua,gF as Kt,A as ha,i4 as vi,gE as Ui,gN as $e,lo as Wi,B as ma,z as gi,E as Bt,kS as Yt,gU as Ht,gW as dt,gQ as ie,ie as Rt,lp as pa,ig as Qt,lq as Ut,an as _,gI as fa,aq as qi,ar as xi,gJ as va,h8 as ga,k9 as ki,k7 as wt,ix as ji,U as xa,b5 as Xi,lr as bi,ls as Ki,eq as ba,ha as Ti,gV as Ta,lt as _i}from"./vendor.c414a8c9.js";import{e as _a,a as Et}from"./quatf64.ddec7ef6.js";import{e as Zt,o as Sa}from"./mat4f64.a79dd289.js";import{c as Wt,x as ut,u as Yi,i as Ue,L as Aa,O as Si,E as Ma}from"./BufferView.c86f5b8c.js";import{t as wa,r as ya,f as Ai,e as Ca}from"./vec33.cd12ce70.js";import{l as Mi,u as Oa,g as Pa,c as Ra,n as Ea,o as ze,r as Ie,a as Ia,b as La,d as wi,e as $a,t as Na,i as Da,f as Fa,h as za}from"./DefaultMaterial_COLOR_GAMMA.44b4578e.js";import{c as Tt,l as Nt,a as Qi,i as qt,b as _e,o as Va,r as Ga,C as q,O as qe,n as Se,N as ft,W as Ba,d as Ha,E as Ua,h as Wa,e as qa,f as ka,g as ja,j as Xa,_ as Ka}from"./requestImageUtils.7a1df149.js";import{e as ee}from"./Util.4eff9352.js";import{O as p}from"./VertexAttribute.5551e0d8.js";import{u as be,P as Ee,L as Ne,C as ce,F as Ya,D as Be,M as yi,G as Ci,Y as Qa,V as Za,E as at,I as Ae,O as re}from"./enums.de935fa5.js";import{u as Te,n as Ja,a as eo,c as to}from"./Texture.21608732.js";import{_ as io,f as ro,c as ao,D as oo,n as no}from"./VertexArrayObject.6089921b.js";import{t as de}from"./VertexElementDescriptor.d386088d.js";import{T as Zi}from"./InterleavedLayout.2c4bf260.js";import{r as so,n as lo}from"./vec3f32.8d37ecf5.js";import{S as co}from"./quat.b252f462.js";import{_ as Ji}from"./sphere.123bd66e.js";class Jt{constructor(e,i,r,a){this.primitiveIndices=e,this._numIndexPerPrimitive=i,this.indices=r,this.position=a,this.center=H(),ee(e.length>=1),ee(r.length%this._numIndexPerPrimitive==0),ee(r.length>=e.length*this._numIndexPerPrimitive),ee(a.size===3||a.size===4);const{data:o,size:n}=a,l=e.length;let d=n*r[this._numIndexPerPrimitive*e[0]];Re.clear(),Re.push(d),this.bbMin=Ge(o[d],o[d+1],o[d+2]),this.bbMax=Kr(this.bbMin);for(let u=0;u<l;++u){const f=this._numIndexPerPrimitive*e[u];for(let h=0;h<this._numIndexPerPrimitive;++h){d=n*r[f+h],Re.push(d);let x=o[d];this.bbMin[0]=Math.min(x,this.bbMin[0]),this.bbMax[0]=Math.max(x,this.bbMax[0]),x=o[d+1],this.bbMin[1]=Math.min(x,this.bbMin[1]),this.bbMax[1]=Math.max(x,this.bbMax[1]),x=o[d+2],this.bbMin[2]=Math.min(x,this.bbMin[2]),this.bbMax[2]=Math.max(x,this.bbMax[2])}}Gt(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let c=this.radius*this.radius;for(let u=0;u<Re.length;++u){d=Re.getItemAt(u);const f=o[d]-this.center[0],h=o[d+1]-this.center[1],x=o[d+2]-this.center[2],m=f*f+h*h+x*x;if(m<=c)continue;const A=Math.sqrt(m),T=.5*(A-this.radius);this.radius=this.radius+T,c=this.radius*this.radius;const b=T/A;this.center[0]+=f*b,this.center[1]+=h*b,this.center[2]+=x*b}Re.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if(Yr(this.bbMin,this.bbMax)>1){const e=Gt(H(),this.bbMin,this.bbMax,.5),i=this.primitiveIndices.length,r=new Uint8Array(i),a=new Array(8);for(let c=0;c<8;++c)a[c]=0;const{data:o,size:n}=this.position;for(let c=0;c<i;++c){let u=0;const f=this._numIndexPerPrimitive*this.primitiveIndices[c];let h=n*this.indices[f],x=o[h],m=o[h+1],A=o[h+2];for(let T=1;T<this._numIndexPerPrimitive;++T){h=n*this.indices[f+T];const b=o[h],B=o[h+1],P=o[h+2];b<x&&(x=b),B<m&&(m=B),P<A&&(A=P)}x<e[0]&&(u|=1),m<e[1]&&(u|=2),A<e[2]&&(u|=4),r[c]=u,++a[u]}let l=0;for(let c=0;c<8;++c)a[c]>0&&++l;if(l<2)return;const d=new Array(8);for(let c=0;c<8;++c)d[c]=a[c]>0?new Uint32Array(a[c]):void 0;for(let c=0;c<8;++c)a[c]=0;for(let c=0;c<i;++c){const u=r[c];d[u][a[u]++]=this.primitiveIndices[c]}this._children=new Array(8);for(let c=0;c<8;++c)d[c]!==void 0&&(this._children[c]=new Jt(d[c],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){Re.prune()}}const Re=new Vi({deallocator:null});class ei{constructor(){this.id=Qr()}unload(){}}var ht;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Geometry=2]="Geometry",t[t.Material=3]="Material",t[t.Texture=4]="Texture",t[t.COUNT=5]="COUNT"})(ht||(ht={}));class It extends ei{constructor(e,i=[],r=Tt.Triangle,a=-1){super(),this._primitiveType=r,this.edgeIndicesLength=a,this.type=ht.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[o,n]of e)n&&this._vertexAttributes.set(o,ve({},n));if(i==null||i.length===0){const o=uo(this._vertexAttributes),n=Mi(o);this.edgeIndicesLength=this.edgeIndicesLength<0?o:this.edgeIndicesLength;for(const l of this._vertexAttributes.keys())this._indices.set(l,n)}else for(const[o,n]of i)n&&(this._indices.set(o,ho(n)),o===p.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(o).length:this.edgeIndicesLength))}cloneShallow(){const e=new It([],void 0,this._primitiveType,void 0),{_vertexAttributes:i,_indices:r}=e;return this._vertexAttributes.forEach((a,o)=>{i.set(o,a)}),this._indices.forEach((a,o)=>{r.set(o,a)}),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const i=this._vertexAttributes.get(e);return i&&!i.exclusive&&(i.data=Array.from(i.data),i.exclusive=!0),i}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return k(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===Tt.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const i=this.indices.get(p.POSITION),r=this.vertexAttributes.get(p.POSITION);return Oa(r,i,e)}_computeAttachmentOriginPoints(e){const i=this.indices.get(p.POSITION),r=this.vertexAttributes.get(p.POSITION);return Pa(r,i,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(p.POSITION);if(e.length===0)return null;const i=this.primitiveType===Tt.Triangle?3:1;ee(e.length%i==0,"Indexing error: "+e.length+" not divisible by "+i);const r=Mi(e.length/i),a=this.vertexAttributes.get(p.POSITION);return new Jt(r,i,e,a)}}function uo(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}function ho(t){if(t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return t;for(const e of t)if(e>=65536)return t;return new Uint16Array(t)}function mo(){if(k(Dt)){const t=e=>Zr(`esri/libs/basisu/${e}`);Dt=import("./basis_transcoder.1a9314c4.js").then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(i=>(i.initializeBasis(),delete i.then,i)))}return Dt}let Dt;var Le;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(Le||(Le={}));let ue=null,gt=null;async function er(){return k(gt)&&(gt=mo(),ue=await gt),gt}function po(t,e){if(k(ue))return t.byteLength;const i=new ue.BasisFile(new Uint8Array(t)),r=ir(i)?tr(i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),e):0;return i.close(),i.delete(),r}function fo(t,e){if(k(ue))return t.byteLength;const i=new ue.KTX2File(new Uint8Array(t)),r=rr(i)?tr(i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),e):0;return i.close(),i.delete(),r}function tr(t,e,i,r,a){const o=io(e?be.COMPRESSED_RGBA8_ETC2_EAC:be.COMPRESSED_RGB8_ETC2),n=a&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(i*r*o*n)}function ir(t){return t.getNumImages()>=1&&!t.isUASTC()}function rr(t){return t.getFaces()>=1&&t.isETC1S()}async function vo(t,e,i){k(ue)&&(ue=await er());const r=new ue.BasisFile(new Uint8Array(i));if(!ir(r))return null;r.startTranscoding();const a=ar(t,e,r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),(o,n)=>r.getImageTranscodedSizeInBytes(0,o,n),(o,n,l)=>r.transcodeImage(l,0,o,n,0,0));return r.close(),r.delete(),a}async function go(t,e,i){k(ue)&&(ue=await er());const r=new ue.KTX2File(new Uint8Array(i));if(!rr(r))return null;r.startTranscoding();const a=ar(t,e,r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),(o,n)=>r.getImageTranscodedSizeInBytes(o,0,0,n),(o,n,l)=>r.transcodeImage(l,o,0,0,n,0,-1,-1));return r.close(),r.delete(),a}function ar(t,e,i,r,a,o,n,l){const{compressedTextureETC:d,compressedTextureS3TC:c}=t.capabilities,[u,f]=d?r?[Le.ETC2_RGBA,be.COMPRESSED_RGBA8_ETC2_EAC]:[Le.ETC1_RGB,be.COMPRESSED_RGB8_ETC2]:c?r?[Le.BC3_RGBA,be.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Le.BC1_RGB,be.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Le.RGBA32,Ee.RGBA],h=e.hasMipmap?i:Math.min(1,i),x=[];for(let b=0;b<h;b++)x.push(new Uint8Array(n(b,u))),l(b,u,x[b]);const m=x.length>1,A=m?Ne.LINEAR_MIPMAP_LINEAR:Ne.LINEAR,T=Ze(ve({},e),{samplingMode:A,hasMipmap:m,internalFormat:f,width:a,height:o});return new Te(t,T,{type:"compressed",levels:x})}const tt=jt.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),xo=542327876,bo=131072,To=4;function ti(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function _o(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const So=ti("DXT1"),Ao=ti("DXT3"),Mo=ti("DXT5"),wo=31,yo=0,Co=1,Oo=2,Po=3,Ro=4,Eo=7,Io=20,Lo=21;function $o(t,e,i){const{textureData:r,internalFormat:a,width:o,height:n}=No(i,e.hasMipmap);return e.samplingMode=r.levels.length>1?Ne.LINEAR_MIPMAP_LINEAR:Ne.LINEAR,e.hasMipmap=r.levels.length>1,e.internalFormat=a,e.width=o,e.height=n,new Te(t,e,r)}function No(t,e){const i=new Int32Array(t,0,wo);if(i[yo]!==xo)return tt.error("Invalid magic number in DDS header"),null;if(!(i[Io]&To))return tt.error("Unsupported format, must contain a FourCC code"),null;const r=i[Lo];let a,o;switch(r){case So:a=8,o=be.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Ao:a=16,o=be.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Mo:a=16,o=be.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return tt.error("Unsupported FourCC code:",_o(r)),null}let n=1,l=i[Ro],d=i[Po];(3&l)==0&&(3&d)==0||(tt.warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,d=d+3&-4);const c=l,u=d;let f,h;i[Oo]&bo&&e!==!1&&(n=Math.max(1,i[Eo])),n===1||Mt(l)&&Mt(d)||(tt.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let x=i[Co]+4;const m=[];for(let A=0;A<n;++A)h=(l+3>>2)*(d+3>>2)*a,f=new Uint8Array(t,x,h),m.push(f),x+=h,l=Math.max(1,l>>1),d=Math.max(1,d>>1);return{textureData:{type:"compressed",levels:m},internalFormat:o,width:c,height:u}}const ii=new Map([[p.POSITION,0],[p.NORMAL,1],[p.UV0,2],[p.COLOR,3],[p.SIZE,4],[p.TANGENT,4],[p.AUXPOS1,5],[p.SYMBOLCOLOR,5],[p.AUXPOS2,6],[p.FEATUREATTRIBUTE,6],[p.INSTANCEFEATUREATTRIBUTE,6],[p.INSTANCECOLOR,7],[p.MODEL,8],[p.MODELNORMAL,12],[p.MODELORIGINHI,11],[p.MODELORIGINLO,15]]);new de(p.POSITION,3,ce.FLOAT,0,12);new de(p.POSITION,3,ce.FLOAT,0,20),new de(p.UV0,2,ce.FLOAT,12,20);new de(p.POSITION,3,ce.FLOAT,0,32),new de(p.NORMAL,3,ce.FLOAT,12,32),new de(p.UV0,2,ce.FLOAT,24,32);new de(p.POSITION,3,ce.FLOAT,0,16),new de(p.COLOR,4,ce.UNSIGNED_BYTE,12,16);const Do=[new de(p.POSITION,2,ce.FLOAT,0,8)],Fo=[new de(p.POSITION,2,ce.FLOAT,0,16),new de(p.UV0,2,ce.FLOAT,8,16)];function zo(t,e=Do,i=ii,r=-1,a=1){let o=null;return e===Fo?o=new Float32Array([r,r,0,0,a,r,1,0,r,a,0,1,a,a,1,1]):o=new Float32Array([r,r,a,r,r,a,a,a]),new ro(t,i,{geometry:e},{geometry:ao.createVertex(t,Ya.STATIC_DRAW,o)})}class X extends ei{constructor(e,i){super(),this.data=e,this.type=ht.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new Jr,this.params=i||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:Be.REPEAT,t:Be.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||Nt.STRETCH,this.estimatedTexMemRequired=X._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const e=this.data;k(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(mi(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const i=!e.paused;if(e.src=e.src,i&&e.autoplay){const r=()=>{e.removeEventListener("canplay",r),e.play()};e.addEventListener("canplay",r)}}}_startPreloadImageElement(e){ea(e.src)||mi(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,i){if(k(e))return 0;if(Je(e)||et(e))return i.encoding===X.KTX2_ENCODING?fo(e,i.mipmap):i.encoding===X.BASIS_ENCODING?po(e,i.mipmap):e.byteLength;const{width:r,height:a}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?X._getDataDimensions(e):i;return(i.mipmap?4/3:1)*r*a*(i.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){var i;return{target:yi.TEXTURE_2D,pixelFormat:Ee.RGBA,dataType:Ci.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?Ne.LINEAR_MIPMAP_LINEAR:Ne.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:(i=this.params.maxAnisotropy)!=null?i:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,i){if(v(this._glTexture))return this._glTexture;if(v(this._loadingPromise))return this._loadingPromise;const r=this.data;return k(r)?(this._glTexture=new Te(e,this._createDescriptor(e),null),this._glTexture):typeof r=="string"?this._loadFromURL(e,i,r):r instanceof Image?this._loadFromImageElement(e,i,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,i,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r,i):(Je(r)||et(r))&&this.params.encoding===X.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(e,r)):(Je(r)||et(r))&&this.params.encoding===X.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(e,r)):(Je(r)||et(r))&&this.params.encoding===X.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(e,r)):et(r)?this._loadFromPixelData(e,r):Je(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,i,r){if(!(this.data instanceof HTMLVideoElement)||k(this._glTexture)||this.data.readyState<ot.HAVE_CURRENT_DATA||r===this.data.currentTime)return r;if(v(this._powerOfTwoStretchInfo)){const{framebuffer:a,vao:o,sourceTexture:n}=this._powerOfTwoStretchInfo;n.setData(this.data),this._drawStretchedTexture(e,i,a,o,n,this._glTexture)}else{const{videoWidth:a,videoHeight:o}=this.data,{width:n,height:l}=this._glTexture.descriptor;a!==n||o!==l?this._glTexture.updateData(0,0,0,Math.min(a,n),Math.min(o,l),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this.data.currentTime}_loadFromDDSData(e,i){return this._glTexture=$o(e,this._createDescriptor(e),i),this._glTexture}_loadFromKTX2(e,i){return this._loadAsync(()=>go(e,this._createDescriptor(e),i).then(r=>(this._glTexture=r,r)))}_loadFromBasis(e,i){return this._loadAsync(()=>vo(e,this._createDescriptor(e),i).then(r=>(this._glTexture=r,r)))}_loadFromPixelData(e,i){ee(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(e);return r.pixelFormat=this.params.components===1?Ee.LUMINANCE:this.params.components===3?Ee.RGB:Ee.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new Te(e,r,i),this._glTexture}_loadFromURL(e,i,r){return this._loadAsync(async a=>{const o=await Qi(r,{signal:a});return pi(a),this._loadFromImage(e,o,i)})}_loadFromImageElement(e,i,r){return r.complete?this._loadFromImage(e,r,i):this._loadAsync(async a=>{const o=await ta(r,r.src,!1,a);return pi(a),this._loadFromImage(e,o,i)})}_loadFromVideoElement(e,i,r){return r.readyState>=ot.HAVE_CURRENT_DATA?this._loadFromImage(e,r,i):this._loadFromVideoElementAsync(e,i,r)}_loadFromVideoElementAsync(e,i,r){return this._loadAsync(a=>new Promise((o,n)=>{const l=()=>{r.removeEventListener("loadeddata",d),r.removeEventListener("error",c),aa(u)},d=()=>{r.readyState>=ot.HAVE_CURRENT_DATA&&(l(),o(this._loadFromImage(e,r,i)))},c=f=>{l(),n(f||new Xt("Failed to load video"))};r.addEventListener("loadeddata",d),r.addEventListener("error",c);const u=ia(a,()=>c(ra()))}))}_loadFromImage(e,i,r){const a=X._getDataDimensions(i);this.params.width=a.width,this.params.height=a.height;const o=this._createDescriptor(e);return o.pixelFormat=this.params.components===3?Ee.RGB:Ee.RGBA,!this._requiresPowerOfTwo(e,o)||Mt(a.width)&&Mt(a.height)?(o.width=a.width,o.height=a.height,this._glTexture=new Te(e,o,i),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,i,a,o,r),this._glTexture)}_loadAsync(e){const i=new AbortController;this._loadingController=i;const r=e(i.signal);this._loadingPromise=r;const a=()=>{this._loadingController===i&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(a,a),r}_requiresPowerOfTwo(e,i){const r=Be.CLAMP_TO_EDGE,a=typeof i.wrapMode=="number"?i.wrapMode===r:i.wrapMode.s===r&&i.wrapMode.t===r;return!Ja(e.gl)&&(i.hasMipmap||!a)}_makePowerOfTwoTexture(e,i,r,a,o){const{width:n,height:l}=r,d=fi(n),c=fi(l);let u;switch(a.width=d,a.height=c,this.params.powerOfTwoResizeMode){case Nt.PAD:a.textureCoordinateScaleFactor=[n/d,l/c],u=new Te(e,a),u.updateData(0,0,0,n,l,i);break;case Nt.STRETCH:case null:case void 0:u=this._stretchToPowerOfTwo(e,i,a,o());break;default:Pt(this.params.powerOfTwoResizeMode)}return a.hasMipmap&&u.generateMipmap(),u}_stretchToPowerOfTwo(e,i,r,a){const o=new Te(e,r),n=new oo(e,{colorTarget:Qa.TEXTURE,depthStencilTarget:Za.NONE},o),l=new Te(e,{target:yi.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:Ci.UNSIGNED_BYTE,wrapMode:Be.CLAMP_TO_EDGE,samplingMode:Ne.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},i),d=zo(e),c=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,a,n,d,l,o),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:d,sourceTexture:l,framebuffer:n}:(d.dispose(!0),l.dispose(),n.detachColorTexture(),n.dispose()),e.bindFramebuffer(c),o}_drawStretchedTexture(e,i,r,a,o,n){e.bindFramebuffer(r);const l=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height);const d=e.bindTechnique(i);d.setUniform4f("uColor",1,1,1,1),d.bindTexture("tex",o),e.bindVAO(a),e.drawArrays(at.TRIANGLE_STRIP,0,no(a,"geometry")),e.bindFramebuffer(null),e.setViewport(l.x,l.y,l.width,l.height)}unload(){if(v(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:i,sourceTexture:r}=this._powerOfTwoStretchInfo;i.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(v(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),v(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}var ot;X.DDS_ENCODING="image/vnd-ms.dds",X.KTX2_ENCODING="image/ktx2",X.BASIS_ENCODING="image/x.basis",function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(ot||(ot={}));var R;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.Highlight=4]="Highlight",t[t.Draped=5]="Draped",t[t.Occlusion=6]="Occlusion",t[t.Alpha=7]="Alpha",t[t.COUNT=8]="COUNT"})(R||(R={}));class or{}function s(t,...e){let i="";for(let r=0;r<e.length;r++)i+=t[r]+e[r];return i+=t[t.length-1],i}(function(t){function e(r){return Math.round(r).toString()}function i(r){return r.toPrecision(8)}t.int=e,t.float=i})(s||(s={}));function Vo(t){const e=s`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;t.fragment.code.add(e),t.vertex.code.add(e)}function Lt(t,e){e.normalType===j.Attribute&&(t.attributes.add(p.NORMAL,"vec3"),t.vertex.code.add(s`vec3 normalModel() {
return normal;
}`)),e.normalType===j.CompressedAttribute&&(t.include(Vo),t.attributes.add(p.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(s`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),e.normalType===j.ScreenDerivative&&(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var j;(function(t){t[t.Attribute=0]="Attribute",t[t.CompressedAttribute=1]="CompressedAttribute",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(j||(j={}));function Go(t,e){const i=t.fragment;switch(i.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case J.None:i.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case J.View:i.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case J.WindingOrder:i.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Pt(e.doubleSidedMode);case J.COUNT:}}var J;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(J||(J={}));var Z;function We(t,e){switch(e.textureCoordinateType){case Z.Default:return t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case Z.Atlas:return t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(p.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);case Z.None:return void t.vertex.code.add(s`void forwardTextureCoordinates() {}`);default:Pt(e.textureCoordinateType);case Z.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.COUNT=3]="COUNT"})(Z||(Z={}));function Bo(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function nr(t,e){switch(t.include(We,e),t.fragment.code.add(s`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),e.textureCoordinateType){case Z.Default:return void t.fragment.code.add(s`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case Z.Atlas:return t.include(Bo),void t.fragment.code.add(s`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:Pt(e.textureCoordinateType);case Z.None:case Z.COUNT:return}}var G;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})(G||(G={}));class K{constructor(e,i,r,a,o=null){this.name=e,this.type=i,this.arraySize=o,this.bind={[G.Pass]:null,[G.Draw]:null},v(r)&&v(a)&&(this.bind[r]=a)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}class he extends K{constructor(e,i){super(e,"vec3",G.Draw,(r,a,o)=>r.setUniform3fv(e,i(a,o)))}}class W extends K{constructor(e,i){super(e,"vec3",G.Pass,(r,a,o)=>r.setUniform3fv(e,i(a,o)))}}class Ho extends K{constructor(e,i){super(e,"vec2",G.Draw,(r,a,o)=>r.setUniform2fv(e,i(a,o)))}}class Uo extends K{constructor(e,i){super(e,"sampler2D",G.Draw,(r,a,o)=>r.bindTexture(e,i(a,o)))}}function _t(t,e,i){const r=[new Uo(t,e)];if(i){const a=t+"Size";r.push(new Ho(a,(o,n)=>{const l=e(o,n);return v(l)?Gi(Wo,l.descriptor.width,l.descriptor.height):Bi}))}return r}const Wo=Hi();class ke extends K{constructor(e,i){super(e,"vec2",G.Pass,(r,a,o)=>r.setUniform2fv(e,i(a,o)))}}class ae extends K{constructor(e,i){super(e,"sampler2D",G.Pass,(r,a,o)=>r.bindTexture(e,i(a,o)))}}function St(t,e,i){const r=[new ae(t,e)];if(i){const a=t+"Size";r.push(new ke(a,(o,n)=>{const l=e(o,n);return v(l)?Gi(qo,l.descriptor.width,l.descriptor.height):Bi}))}return r}const qo=Hi();class ko{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,i,r=this._output){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(r,i),this._technique),this._technique}ensureResources(e){return qt.LOADED}}class jo extends ko{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,i=>this._texture=i),this._acquire(e.normalTextureId,i=>this._textureNormal=i),this._acquire(e.emissiveTextureId,i=>this._textureEmissive=i),this._acquire(e.occlusionTextureId,i=>this._textureOcclusion=i),this._acquire(e.metallicRoughnessTextureId,i=>this._textureMetallicRoughness=i)}dispose(){this._texture=Pe(this._texture),this._textureNormal=Pe(this._textureNormal),this._textureEmissive=Pe(this._textureEmissive),this._textureOcclusion=Pe(this._textureOcclusion),this._textureMetallicRoughness=Pe(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?qt.LOADED:qt.LOADING}get textureBindParameters(){return new Xo(v(this._texture)?this._texture.glTexture:null,v(this._textureNormal)?this._textureNormal.glTexture:null,v(this._textureEmissive)?this._textureEmissive.glTexture:null,v(this._textureOcclusion)?this._textureOcclusion.glTexture:null,v(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){(k(this._texture)||e!==this._texture.id)&&(this._texture=Pe(this._texture),this._textureId=e,this._acquire(this._textureId,i=>this._texture=i))}_acquire(e,i){if(k(e))return void i(null);const r=this._textureRepository.acquire(e);if(oa(r))return++this._numLoading,void r.then(a=>{if(this._disposed)return Pe(a),void i(null);i(a)}).finally(()=>--this._numLoading);i(r)}}class Xo extends or{constructor(e=null,i=null,r=null,a=null,o=null){super(),this.texture=e,this.textureNormal=i,this.textureEmissive=r,this.textureOcclusion=a,this.textureMetallicRoughness=o}}so(0,.6,.2);var V;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.COUNT=5]="COUNT"})(V||(V={}));function sr(t,e){const i=t.fragment,r=e.hasMetalnessAndRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===V.Normal&&r&&t.include(nr,e),e.pbrMode!==V.Schematic)if(e.pbrMode!==V.Disabled){if(e.pbrMode===V.Normal){i.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);const a=e.supportsTextureAtlas,o=e.pbrTextureBindType;e.hasMetalnessAndRoughnessTexture&&(i.uniforms.add(o===G.Pass?St("texMetallicRoughness",n=>n.textureMetallicRoughness,a):_t("texMetallicRoughness",n=>n.textureMetallicRoughness,a)),i.code.add(s`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(i.uniforms.add(o===G.Pass?St("texEmission",n=>n.textureEmissive,a):_t("texEmission",n=>n.textureEmissive,a)),i.code.add(s`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),e.hasOcclusionTexture?(i.uniforms.add(o===G.Pass?St("texOcclusion",n=>n.textureOcclusion,a):_t("texOcclusion",n=>n.textureOcclusion,a)),i.code.add(s`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):i.code.add(s`float getBakedOcclusion() { return 1.0; }`),i.uniforms.add(o===G.Pass?[new W("emissionFactor",n=>n.emissiveFactor),new W("mrrFactors",n=>n.mrrFactors)]:[new he("emissionFactor",n=>n.emissiveFactor),new he("mrrFactors",n=>n.mrrFactors)]),i.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${r?"vtc.uv = vuv0;":""}
      ${e.hasMetalnessAndRoughnessTexture?e.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `)}}else i.code.add(s`float getBakedOcclusion() { return 1.0; }`);else i.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function Ko(t){return Math.abs(t*t*t)}function Yo(t,e,i){const r=i.parameters,a=i.paddingPixelsOverride;return it.scale=Math.min(r.divisor/(e-r.offset),1),it.factor=Ko(t),it.minPixelSize=r.minPixelSize,it.paddingPixels=a,it}function Qo(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function Zo(t,e){return Math.max(na(t*e.scale,t,e.factor),Qo(t,e))}function Jo(t,e,i,r){return Zo(t,Yo(e,i,r))}const it={scale:0,factor:0,minPixelSize:0,paddingPixels:0};function en(t){return!!v(t)&&!t.visible}const xt=sa();function tn(t,e,i,r,a,o,n){if(!en(e))if(t.boundingInfo){ee(t.primitiveType===Tt.Triangle);const l=i.tolerance;lr(t.boundingInfo,r,a,l,o,n)}else{const l=t.indices.get(p.POSITION),d=t.vertexAttributes.get(p.POSITION);dr(r,a,0,l.length/3,l,d,void 0,o,n)}}const rn=H();function lr(t,e,i,r,a,o){if(k(t))return;const n=on(e,i,rn);if(ca(xt,t.getBBMin()),da(xt,t.getBBMax()),v(a)&&a.applyToAabb(xt),nn(xt,e,n,r)){const{primitiveIndices:l,indices:d,position:c}=t,u=l?l.length:d.length/3;if(u>hn){const f=t.getChildren();if(f!==void 0){for(let h=0;h<8;++h)f[h]!==void 0&&lr(f[h],e,i,r,a,o);return}}dr(e,i,0,u,d,c,l,a,o)}}const cr=H();function dr(t,e,i,r,a,o,n,l,d){if(n)return an(t,e,i,r,a,o,n,l,d);const c=o.data,u=o.stride||o.size,f=t[0],h=t[1],x=t[2],m=e[0]-f,A=e[1]-h,T=e[2]-x;for(let b=i,B=3*i;b<r;++b){let P=u*a[B++],O=c[P++],L=c[P++],w=c[P];P=u*a[B++];let y=c[P++],E=c[P++],g=c[P];P=u*a[B++];let C=c[P++],$=c[P++],N=c[P];v(l)&&([O,L,w]=l.applyToVertex(O,L,w,b),[y,E,g]=l.applyToVertex(y,E,g,b),[C,$,N]=l.applyToVertex(C,$,N,b));const I=y-O,F=E-L,D=g-w,z=C-O,ne=$-L,pe=N-w,Me=A*pe-ne*T,Xe=T*z-pe*m,Ke=m*ne-z*A,se=I*Me+F*Xe+D*Ke;if(Math.abs(se)<=Number.EPSILON)continue;const te=f-O,we=h-L,ye=x-w,me=te*Me+we*Xe+ye*Ke;if(se>0){if(me<0||me>se)continue}else if(me>0||me<se)continue;const fe=we*D-F*ye,Ye=ye*I-D*te,Qe=te*F-I*we,Ce=m*fe+A*Ye+T*Qe;if(se>0){if(Ce<0||me+Ce>se)continue}else if(Ce>0||me+Ce<se)continue;const Oe=(z*fe+ne*Ye+pe*Qe)/se;Oe>=0&&d(Oe,ur(I,F,D,z,ne,pe,cr),b,!1)}}function an(t,e,i,r,a,o,n,l,d){const c=o.data,u=o.stride||o.size,f=t[0],h=t[1],x=t[2],m=e[0]-f,A=e[1]-h,T=e[2]-x;for(let b=i;b<r;++b){const B=n[b];let P=3*B,O=u*a[P++],L=c[O++],w=c[O++],y=c[O];O=u*a[P++];let E=c[O++],g=c[O++],C=c[O];O=u*a[P];let $=c[O++],N=c[O++],I=c[O];v(l)&&([L,w,y]=l.applyToVertex(L,w,y,b),[E,g,C]=l.applyToVertex(E,g,C,b),[$,N,I]=l.applyToVertex($,N,I,b));const F=E-L,D=g-w,z=C-y,ne=$-L,pe=N-w,Me=I-y,Xe=A*Me-pe*T,Ke=T*ne-Me*m,se=m*pe-ne*A,te=F*Xe+D*Ke+z*se;if(Math.abs(te)<=Number.EPSILON)continue;const we=f-L,ye=h-w,me=x-y,fe=we*Xe+ye*Ke+me*se;if(te>0){if(fe<0||fe>te)continue}else if(fe>0||fe<te)continue;const Ye=ye*z-D*me,Qe=me*F-z*we,Ce=we*D-F*ye,Oe=m*Ye+A*Qe+T*Ce;if(te>0){if(Oe<0||fe+Oe>te)continue}else if(Oe>0||fe+Oe<te)continue;const di=(ne*Ye+pe*Qe+Me*Ce)/te;di>=0&&d(di,ur(F,D,z,ne,pe,Me,cr),B,!1)}}const Oi=H(),Pi=H();function ur(t,e,i,r,a,o,n){return oe(Oi,t,e,i),oe(Pi,r,a,o),ua(n,Oi,Pi),Kt(n,n),n}function on(t,e,i){return oe(i,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function nn(t,e,i,r){return sn(t,e,i,r,1/0)}function sn(t,e,i,r,a){const o=(t[0]-r-e[0])*i[0],n=(t[3]+r-e[0])*i[0];let l=Math.min(o,n),d=Math.max(o,n);const c=(t[1]-r-e[1])*i[1],u=(t[4]+r-e[1])*i[1];if(d=Math.min(d,Math.max(c,u)),d<0||(l=Math.max(l,Math.min(c,u)),l>d))return!1;const f=(t[2]-r-e[2])*i[2],h=(t[5]+r-e[2])*i[2];return d=Math.min(d,Math.max(f,h)),!(d<0)&&(l=Math.max(l,Math.min(f,h)),!(l>d)&&l<a)}function ln(t,e,i,r,a){let o=(i.screenLength||0)*t.pixelRatio;v(a)&&(o=Jo(o,r,e,a));const n=o*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return la(n*e,i.minWorldLength||0,i.maxWorldLength!=null?i.maxWorldLength:1/0)}function hr(t,e){const i=e?hr(e):{};for(const r in t){let a=t[r];a&&a.forEach&&(a=dn(a)),a==null&&r in i||(i[r]=a)}return i}function cn(t,e){let i=!1;for(const r in e){const a=e[r];a!==void 0&&(Array.isArray(a)?t[r]===null?(t[r]=a.slice(),i=!0):ha(t[r],a)&&(i=!0):t[r]!==a&&(i=!0,t[r]=a))}return i}function dn(t){const e=[];return t.forEach(i=>e.push(i)),e}const un={multiply:1,ignore:2,replace:3,tint:4},hn=1e3;class mn extends ei{constructor(e,i){super(),this.type=ht.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=ii,this._parameters=hr(e,i),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,i=!0){cn(this._parameters,e)&&(this.validateParameters(this._parameters),i&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){v(this.repository)&&this.repository.materialChanged(this)}}var kt;(function(t){t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(kt||(kt={}));var nt;(function(t){t[t.MATERIAL=0]="MATERIAL",t[t.MATERIAL_ALPHA=1]="MATERIAL_ALPHA",t[t.MATERIAL_DEPTH=2]="MATERIAL_DEPTH",t[t.MATERIAL_NORMAL=3]="MATERIAL_NORMAL",t[t.MATERIAL_DEPTH_SHADOWMAP_ALL=4]="MATERIAL_DEPTH_SHADOWMAP_ALL",t[t.MATERIAL_HIGHLIGHT=5]="MATERIAL_HIGHLIGHT",t[t.MATERIAL_DEPTH_SHADOWMAP_DEFAULT=6]="MATERIAL_DEPTH_SHADOWMAP_DEFAULT",t[t.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT=7]="MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT"})(nt||(nt={}));var He;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",t[t.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=12]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=14]="HUD_MATERIAL",t[t.LABEL_MATERIAL=15]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=16]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",t[t.DRAPED_WATER=19]="DRAPED_WATER",t[t.VOXEL=20]="VOXEL",t[t.MAX_SLOTS=21]="MAX_SLOTS"})(He||(He={}));class pn{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=H(),this._mbs=Ji(),this._obb={center:H(),halfSize:lo(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,i,r){const a=e,o=i,n=r+this.componentLocalOriginLength,l=this._totalOffset/Math.sqrt(a*a+o*o+n*n);return this._tmpVertex[0]=e+a*l,this._tmpVertex[1]=i+o*l,this._tmpVertex[2]=r+n*l,this._tmpVertex}applyToAabb(e){const i=e[0],r=e[1],a=e[2]+this.componentLocalOriginLength,o=e[3],n=e[4],l=e[5]+this.componentLocalOriginLength,d=i*o<0?0:Math.min(Math.abs(i),Math.abs(o)),c=r*n<0?0:Math.min(Math.abs(r),Math.abs(n)),u=a*l<0?0:Math.min(Math.abs(a),Math.abs(l)),f=Math.sqrt(d*d+c*c+u*u);if(f<this._totalOffset)return e[0]-=i<0?this._totalOffset:0,e[1]-=r<0?this._totalOffset:0,e[2]-=a<0?this._totalOffset:0,e[3]+=o>0?this._totalOffset:0,e[4]+=n>0?this._totalOffset:0,e[5]+=l>0?this._totalOffset:0,e;const h=Math.max(Math.abs(i),Math.abs(o)),x=Math.max(Math.abs(r),Math.abs(n)),m=Math.max(Math.abs(a),Math.abs(l)),A=Math.sqrt(h*h+x*x+m*m),T=this._totalOffset/A,b=this._totalOffset/f;return e[0]+=i*(i>0?T:b),e[1]+=r*(r>0?T:b),e[2]+=a*(a>0?T:b),e[3]+=o*(o<0?T:b),e[4]+=n*(n<0?T:b),e[5]+=l*(l<0?T:b),e}applyToMbs(e){const i=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this._totalOffset/i;return this._mbs[0]=e[0]+e[0]*r,this._mbs[1]=e[1]+e[1]*r,this._mbs[2]=e[2]+e[2]*r,this._mbs[3]=e[3]+e[3]*this._totalOffset/i,this._mbs}applyToObb(e){const i=e.center,r=this._totalOffset/Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);this._obb.center[0]=i[0]+i[0]*r,this._obb.center[1]=i[1]+i[1]*r,this._obb.center[2]=i[2]+i[2]*r,vi(this._obb.halfSize,e.halfSize,e.quaternion),Ui(this._obb.halfSize,this._obb.halfSize,e.center);const a=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*a,this._obb.halfSize[1]+=this._obb.halfSize[1]*a,this._obb.halfSize[2]+=this._obb.halfSize[2]*a,$e(this._obb.halfSize,this._obb.halfSize,e.center),co(Ei,e.quaternion),vi(this._obb.halfSize,this._obb.halfSize,Ei),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}}class fn{constructor(e=0){this.offset=e,this.sphere=Ji(),this.tmpVertex=H()}applyToVertex(e,i,r){const a=this.objectTransform.transform;let o=a[0]*e+a[4]*i+a[8]*r+a[12],n=a[1]*e+a[5]*i+a[9]*r+a[13],l=a[2]*e+a[6]*i+a[10]*r+a[14];const d=this.offset/Math.sqrt(o*o+n*n+l*l);o+=o*d,n+=n*d,l+=l*d;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*o+c[4]*n+c[8]*l+c[12],this.tmpVertex[1]=c[1]*o+c[5]*n+c[9]*l+c[13],this.tmpVertex[2]=c[2]*o+c[6]*n+c[10]*l+c[14],this.tmpVertex}applyToMinMax(e,i){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const a=this.offset/Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);i[0]+=i[0]*a,i[1]+=i[1]*a,i[2]+=i[2]*a}applyToAabb(e){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const i=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/i;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/i,this.sphere}}const Ri=new fn;function vn(t){return v(t)?(Ri.offset=t,Ri):null}new pn;const Ei=_a();function gn(t,e,i,r){const a=i.typedBuffer,o=i.typedBufferStride,n=t.length;r*=o;for(let l=0;l<n;++l){const d=2*t[l];a[r]=e[d],a[r+1]=e[d+1],r+=o}}function mr(t,e,i,r,a){const o=i.typedBuffer,n=i.typedBufferStride,l=t.length;if(r*=n,a==null||a===1)for(let d=0;d<l;++d){const c=3*t[d];o[r]=e[c],o[r+1]=e[c+1],o[r+2]=e[c+2],r+=n}else for(let d=0;d<l;++d){const c=3*t[d];for(let u=0;u<a;++u)o[r]=e[c],o[r+1]=e[c+1],o[r+2]=e[c+2],r+=n}}function xn(t,e,i,r,a=1){const o=i.typedBuffer,n=i.typedBufferStride,l=t.length;if(r*=n,a===1)for(let d=0;d<l;++d){const c=4*t[d];o[r]=e[c],o[r+1]=e[c+1],o[r+2]=e[c+2],o[r+3]=e[c+3],r+=n}else for(let d=0;d<l;++d){const c=4*t[d];for(let u=0;u<a;++u)o[r]=e[c],o[r+1]=e[c+1],o[r+2]=e[c+2],o[r+3]=e[c+3],r+=n}}function bn(t,e,i,r,a,o=1){if(!i)return void mr(t,e,r,a,o);const n=r.typedBuffer,l=r.typedBufferStride,d=t.length,c=i[0],u=i[1],f=i[2],h=i[4],x=i[5],m=i[6],A=i[8],T=i[9],b=i[10],B=i[12],P=i[13],O=i[14];if(a*=l,o===1)for(let L=0;L<d;++L){const w=3*t[L],y=e[w],E=e[w+1],g=e[w+2];n[a]=c*y+h*E+A*g+B,n[a+1]=u*y+x*E+T*g+P,n[a+2]=f*y+m*E+b*g+O,a+=l}else for(let L=0;L<d;++L){const w=3*t[L],y=e[w],E=e[w+1],g=e[w+2],C=c*y+h*E+A*g+B,$=u*y+x*E+T*g+P,N=f*y+m*E+b*g+O;for(let I=0;I<o;++I)n[a]=C,n[a+1]=$,n[a+2]=N,a+=l}}function Tn(t,e,i,r,a,o=1){if(!i)return void mr(t,e,r,a,o);const n=i,l=r.typedBuffer,d=r.typedBufferStride,c=t.length,u=n[0],f=n[1],h=n[2],x=n[4],m=n[5],A=n[6],T=n[8],b=n[9],B=n[10],P=!Wi(n),O=1e-6,L=1-O;if(a*=d,o===1)for(let w=0;w<c;++w){const y=3*t[w],E=e[y],g=e[y+1],C=e[y+2];let $=u*E+x*g+T*C,N=f*E+m*g+b*C,I=h*E+A*g+B*C;if(P){const F=$*$+N*N+I*I;if(F<L&&F>O){const D=1/Math.sqrt(F);$*=D,N*=D,I*=D}}l[a+0]=$,l[a+1]=N,l[a+2]=I,a+=d}else for(let w=0;w<c;++w){const y=3*t[w],E=e[y],g=e[y+1],C=e[y+2];let $=u*E+x*g+T*C,N=f*E+m*g+b*C,I=h*E+A*g+B*C;if(P){const F=$*$+N*N+I*I;if(F<L&&F>O){const D=1/Math.sqrt(F);$*=D,N*=D,I*=D}}for(let F=0;F<o;++F)l[a+0]=$,l[a+1]=N,l[a+2]=I,a+=d}}function _n(t,e,i,r,a,o=1){if(!i)return void xn(t,e,r,a,o);const n=i,l=r.typedBuffer,d=r.typedBufferStride,c=t.length,u=n[0],f=n[1],h=n[2],x=n[4],m=n[5],A=n[6],T=n[8],b=n[9],B=n[10],P=!Wi(n),O=1e-6,L=1-O;if(a*=d,o===1)for(let w=0;w<c;++w){const y=4*t[w],E=e[y],g=e[y+1],C=e[y+2],$=e[y+3];let N=u*E+x*g+T*C,I=f*E+m*g+b*C,F=h*E+A*g+B*C;if(P){const D=N*N+I*I+F*F;if(D<L&&D>O){const z=1/Math.sqrt(D);N*=z,I*=z,F*=z}}l[a+0]=N,l[a+1]=I,l[a+2]=F,l[a+3]=$,a+=d}else for(let w=0;w<c;++w){const y=4*t[w],E=e[y],g=e[y+1],C=e[y+2],$=e[y+3];let N=u*E+x*g+T*C,I=f*E+m*g+b*C,F=h*E+A*g+B*C;if(P){const D=N*N+I*I+F*F;if(D<L&&D>O){const z=1/Math.sqrt(D);N*=z,I*=z,F*=z}}for(let D=0;D<o;++D)l[a+0]=N,l[a+1]=I,l[a+2]=F,l[a+3]=$,a+=d}}function Ii(t,e,i,r,a,o=1){const n=r.typedBuffer,l=r.typedBufferStride,d=t.length;if(a*=l,o===1){if(i===4)for(let c=0;c<d;++c){const u=4*t[c];n[a]=e[u],n[a+1]=e[u+1],n[a+2]=e[u+2],n[a+3]=e[u+3],a+=l}else if(i===3)for(let c=0;c<d;++c){const u=3*t[c];n[a]=e[u],n[a+1]=e[u+1],n[a+2]=e[u+2],n[a+3]=255,a+=l}}else if(i===4)for(let c=0;c<d;++c){const u=4*t[c];for(let f=0;f<o;++f)n[a]=e[u],n[a+1]=e[u+1],n[a+2]=e[u+2],n[a+3]=e[u+3],a+=l}else if(i===3)for(let c=0;c<d;++c){const u=3*t[c];for(let f=0;f<o;++f)n[a]=e[u],n[a+1]=e[u+1],n[a+2]=e[u+2],n[a+3]=255,a+=l}}function Sn(t,e,i,r,a,o){for(const n of e.fieldNames){const l=t.vertexAttributes.get(n),d=t.indices.get(n);if(l&&d)switch(n){case p.POSITION:{ee(l.size===3);const c=a.getField(n,Ue);c&&bn(d,l.data,i,c,o);break}case p.NORMAL:{ee(l.size===3);const c=a.getField(n,Ue);c&&Tn(d,l.data,r,c,o);break}case p.UV0:{ee(l.size===2);const c=a.getField(n,Yi);c&&gn(d,l.data,c,o);break}case p.COLOR:{ee(l.size===3||l.size===4);const c=a.getField(n,ut);c&&Ii(d,l.data,l.size,c,o);break}case p.SYMBOLCOLOR:{ee(l.size===3||l.size===4);const c=a.getField(n,ut);c&&Ii(d,l.data,l.size,c,o);break}case p.TANGENT:{ee(l.size===4);const c=a.getField(n,Wt);c&&_n(d,l.data,r,c,o);break}}}}function ri(t){t.attributes.add(p.POSITION,"vec3"),t.vertex.code.add(s`vec3 positionModel() { return position; }`)}function pr({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function An(t){return!!ma("force-double-precision-obfuscation")||t.driverTest.doublePrecisionRequiresObfuscation}class fr extends K{constructor(e,i){super(e,"mat3",G.Draw,(r,a,o)=>r.setUniformMatrix3fv(e,i(a,o)))}}class ai extends K{constructor(e,i){super(e,"mat3",G.Pass,(r,a,o)=>r.setUniformMatrix3fv(e,i(a,o)))}}class mt extends K{constructor(e,i){super(e,"mat4",G.Pass,(r,a,o)=>r.setUniformMatrix4fv(e,i(a,o)))}}function vr(t,e){t.include(ri);const i=t.vertex;i.include(pr,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),i.uniforms.add([new W("transformWorldFromViewTH",r=>r.transformWorldFromViewTH),new W("transformWorldFromViewTL",r=>r.transformWorldFromViewTL),new ai("transformViewFromCameraRelativeRS",r=>r.transformViewFromCameraRelativeRS),new mt("transformProjFromView",r=>r.transformProjFromView),new fr("transformWorldFromModelRS",r=>r.transformWorldFromModelRS),new he("transformWorldFromModelTH",r=>r.transformWorldFromModelTH),new he("transformWorldFromModelTL",r=>r.transformWorldFromModelTL)]),i.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),i.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new W("transformWorldFromViewTL",r=>r.transformWorldFromViewTL)),i.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class Mn extends or{constructor(){super(...arguments),this.transformWorldFromViewTH=H(),this.transformWorldFromViewTL=H(),this.transformViewFromCameraRelativeRS=Et(),this.transformProjFromView=Zt()}}function gr(t,e){e.normalType===j.Attribute||e.normalType===j.CompressedAttribute?(t.include(Lt,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add([new fr("transformNormalGlobalFromModel",i=>i.transformNormalGlobalFromModel),new ai("transformNormalViewFromGlobal",i=>i.transformNormalViewFromGlobal)]),t.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):e.normalType===j.Ground?(t.include(vr,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(s`
    void forwardNormal() {
      vNormalWorld = ${e.spherical?s`normalize(vPositionWorldCameraRelative);`:s`vec3(0.0, 0.0, 1.0);`}
    }
    `)):t.vertex.code.add(s`void forwardNormal() {}`)}class wn extends Mn{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Et()}}const yn=.1,oi=.001;class xr{constructor(e,i){this._module=e,this._loadModule=i}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class Cn{constructor(e,i,r){this.release=r,i&&(this.initializeConfiguration(e,i),this._configuration=i.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=gi(this._program),this._pipeline=this._configuration=null}reload(e){gi(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.isCompiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPass(e,i){this.program.bindPass(e,i)}bindDraw(e,i){this.program.bindDraw(e,i),this.program.rebindTextures()}bindPipelineState(e,i=null,r){e.setPipelineState(this.getPipelineState(i,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return at.TRIANGLES}getPipelineState(e,i){return this._pipeline}initializeConfiguration(e,i){}}class On{constructor(e,i,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new Vi({deallocator:null}),this._glProgram=e.programCache.acquire(i.generate("vertex"),i.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=i.generateBind(G.Pass,this),this.bindDraw=i.generateBind(G.Draw,this),this._fragmentUniforms=eo()?i.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,i){this._glProgram.setUniform1i(e,i?1:0)}setUniform1i(e,i){this._glProgram.setUniform1i(e,i)}setUniform1f(e,i){this._glProgram.setUniform1f(e,i)}setUniform2f(e,i,r){this._glProgram.setUniform2f(e,i,r)}setUniform2fv(e,i){this._glProgram.setUniform2fv(e,i)}setUniform3f(e,i,r,a){this._glProgram.setUniform3f(e,i,r,a)}setUniform3fv(e,i){this._glProgram.setUniform3fv(e,i)}setUniform4f(e,i,r,a,o){this._glProgram.setUniform4f(e,i,r,a,o)}setUniform4fv(e,i){this._glProgram.setUniform4fv(e,i)}setUniformMatrix3fv(e,i){this._glProgram.setUniformMatrix3fv(e,i)}setUniformMatrix4fv(e,i){this._glProgram.setUniformMatrix4fv(e,i)}setUniform1fv(e,i){this._glProgram.setUniform1fv(e,i)}setUniform1iv(e,i){this._glProgram.setUniform1iv(e,i)}setUniform2iv(e,i){this._glProgram.setUniform3iv(e,i)}setUniform3iv(e,i){this._glProgram.setUniform3iv(e,i)}setUniform4iv(e,i){this._glProgram.setUniform4iv(e,i)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,i){if(k(i)||i.glName==null){const a=this._textures.get(e);return a&&(this._context.bindTexture(null,a.unit),this._freeTextureUnit(a),this._textures.delete(e)),null}let r=this._textures.get(e);return r==null?(r=this._allocTextureUnit(i),this._textures.set(e,r)):r.texture=i,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(i,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,i)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(i,e.unit)}),v(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}Ae.LESS;Ae.ALWAYS;const Pn={mask:255},Rn={function:{func:Ae.ALWAYS,ref:_e.OutlineVisualElementMask,mask:_e.OutlineVisualElementMask},operation:{fail:re.KEEP,zFail:re.KEEP,zPass:re.ZERO}},En={function:{func:Ae.ALWAYS,ref:_e.OutlineVisualElementMask,mask:_e.OutlineVisualElementMask},operation:{fail:re.KEEP,zFail:re.KEEP,zPass:re.REPLACE}};Ae.EQUAL,_e.OutlineVisualElementMask,_e.OutlineVisualElementMask,re.KEEP,re.KEEP,re.KEEP;Ae.NOTEQUAL,_e.OutlineVisualElementMask,_e.OutlineVisualElementMask,re.KEEP,re.KEEP,re.KEEP;function br(t,e){e.output===R.Color&&e.receiveShadows?(t.varyings.add("linearDepth","float"),t.vertex.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):e.output===R.Depth||e.output===R.Shadow?(t.include(vr,e),t.varyings.add("linearDepth","float"),t.vertex.uniforms.add(new ke("nearFar",(i,r)=>r.camera.nearFar)),t.vertex.code.add(s`void forwardLinearDepth() {
linearDepth = (-vPosition_view.z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):t.vertex.code.add(s`void forwardLinearDepth() {}`)}function Tr(t){t.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function De(t,e){In(t,e,[new he("slicePlaneOrigin",(i,r)=>Ln(e,i,r)),new he("slicePlaneBasis1",(i,r)=>{var a;return Li(e,i,r,(a=Bt(r.slicePlane))==null?void 0:a.basis1)}),new he("slicePlaneBasis2",(i,r)=>{var a;return Li(e,i,r,(a=Bt(r.slicePlane))==null?void 0:a.basis2)})])}function In(t,e,i){if(!e.hasSlicePlane){const n=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(n),void t.fragment.code.add(n)}t.extensions.add("GL_OES_standard_derivatives"),e.hasSliceInVertexProgram&&t.vertex.uniforms.add(i),t.fragment.uniforms.add(i);const r=s`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,a=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=e.hasSliceHighlight?s`
        ${a}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(r),t.fragment.code.add(r),t.fragment.code.add(o)}function _r(t,e,i){return t.instancedDoublePrecision?oe($n,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function Sr(t,e){return v(t)?$e(yt,e.origin,t):e.origin}function Ar(t,e,i){return t.hasSliceTranslatedView?v(e)?Ht(Nn,i.camera.viewMatrix,e):i.camera.viewMatrix:null}function Ln(t,e,i){if(k(i.slicePlane))return Yt;const r=_r(t,e,i),a=Sr(r,i.slicePlane),o=Ar(t,r,i);return v(o)?dt(yt,a,o):a}function Li(t,e,i,r){if(k(r)||k(i.slicePlane))return Yt;const a=_r(t,e,i),o=Sr(a,i.slicePlane),n=Ar(t,a,i);return v(n)?(Ui(rt,r,o),dt(yt,o,n),dt(rt,rt,n),$e(rt,rt,yt)):r}const $n=H(),yt=H(),rt=H(),Nn=Zt();function st(t,e={hasModelTransformation:!1,linearDepth:!1}){if(e.hasModelTransformation)return e.linearDepth?void t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);e.linearDepth?t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}function Mr(t,e){e.instanced&&e.instancedDoublePrecision&&(t.attributes.add(p.MODELORIGINHI,"vec3"),t.attributes.add(p.MODELORIGINLO,"vec3"),t.attributes.add(p.MODEL,"mat3"),t.attributes.add(p.MODELNORMAL,"mat3"));const i=t.vertex;e.instancedDoublePrecision&&(i.include(pr,e),i.uniforms.add(new he("viewOriginHi",(r,a)=>Va(oe(bt,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]),bt))),i.uniforms.add(new he("viewOriginLo",(r,a)=>Ga(oe(bt,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]),bt)))),i.code.add(s`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),i.code.add(s`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision?s`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),e.output===R.Normal&&(i.uniforms.add(new mt("viewNormal",(r,a)=>a.camera.viewInverseTransposeMatrix)),i.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),e.hasVertexTangents&&i.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}const bt=H();var le;(function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint"})(le||(le={}));function Dn(t){t.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(le.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(le.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(le.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(le.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}class wr extends K{constructor(e,i){super(e,"int",G.Pass,(r,a,o)=>r.setUniform1i(e,i(a,o)))}}function yr(t,e){e.hasSymbolColors?(t.include(Dn),t.attributes.add(p.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new wr("colorMixMode",i=>un[i.colorMixMode])),t.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Cr(t,e){e.hasVertexColors?(t.attributes.add(p.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}class Q extends K{constructor(e,i){super(e,"vec4",G.Pass,(r,a,o)=>r.setUniform4fv(e,i(a,o)))}}function Fn(t){t.vertex.code.add(s`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(s`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),t.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function zn(t){t.uniforms.add(new Q("screenSizePerspectiveAlignment",e=>Vn(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function Vn(t){return ie(Gn,t.parameters.divisor,t.parameters.offset,t.parameters.minPixelSize,t.paddingPixelsOverride)}const Gn=Rt();class Bn extends K{constructor(e,i){super(e,"mat4",G.Draw,(r,a,o)=>r.setUniformMatrix4fv(e,i(a,o)))}}function pt(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Yt):t.uniforms.add(new he("cameraPosition",(i,r)=>oe(Or,r.camera.viewInverseTransposeMatrix[3]-i.origin[0],r.camera.viewInverseTransposeMatrix[7]-i.origin[1],r.camera.viewInverseTransposeMatrix[11]-i.origin[2])))}function lt(t,e){if(t.vertex.uniforms.add(new mt("proj",(r,a)=>a.camera.projectionMatrix)),e.instancedDoublePrecision){const r=(o,n)=>oe(Or,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]);t.vertex.uniforms.add(new mt("view",(o,n)=>Ht($i,n.camera.viewMatrix,r(o,n))));const a=new W("localOrigin",r);return t.vertex.uniforms.add(a),a}t.vertex.uniforms.add(new Bn("view",(r,a)=>Ht($i,a.camera.viewMatrix,r.origin)));const i=new he("localOrigin",r=>r.origin);return t.vertex.uniforms.add(i),i}const $i=pa(),Or=H();function Pr(t,e){const i=t.vertex;e.hasVerticalOffset?(Un(i),e.hasScreenSizePerspective&&(t.include(Fn),zn(i),pt(t.vertex,e)),i.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):i.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Hn=Rt();function Un(t){t.uniforms.add(new Q("verticalOffset",(e,i)=>{const{minWorldLength:r,maxWorldLength:a,screenLength:o}=e.verticalOffset,n=Math.tan(.5*i.camera.fovY)/(.5*i.camera.fullViewport[3]),l=i.camera.pixelRatio||1;return ie(Hn,o*l,n,r,a)}))}function ni(t){t.code.add(s`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Wn(t,e){t.fragment.include(ni),e.output===R.Shadow?(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):e.output===R.Depth&&t.fragment.code.add(s`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}const qn=Qt(1,1,0,1),kn=Qt(1,0,1,1);function jn(t){t.fragment.uniforms.add(new ae("depthTex",(e,i)=>i.highlightDepthTexture)),t.fragment.uniforms.add(new ke("highlightViewportPixelSz",(e,i)=>i.inverseViewport)),t.fragment.constants.add("occludedHighlightFlag","vec4",qn).add("unoccludedHighlightFlag","vec4",kn),t.fragment.code.add(s`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, fragCoord.xy * highlightViewportPixelSz.xy).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}class Xn extends K{constructor(e,i,r){super(e,"vec4",G.Pass,(a,o,n)=>a.setUniform4fv(e,i(o,n)),r)}}class Kn extends K{constructor(e,i,r){super(e,"float",G.Pass,(a,o,n)=>a.setUniform1fv(e,i(o,n)),r)}}const Ft=8;function ct(t,e){e.hasVvInstancing&&(e.vvSize||e.vvColor)&&t.attributes.add(p.INSTANCEFEATUREATTRIBUTE,"vec4");const i=t.vertex;e.vvSize?(i.uniforms.add(new W("vvSizeMinSize",r=>r.vvSizeMinSize)),i.uniforms.add(new W("vvSizeMaxSize",r=>r.vvSizeMaxSize)),i.uniforms.add(new W("vvSizeOffset",r=>r.vvSizeOffset)),i.uniforms.add(new W("vvSizeFactor",r=>r.vvSizeFactor)),i.uniforms.add(new ai("vvSymbolRotationMatrix",r=>r.vvSymbolRotationMatrix)),i.uniforms.add(new W("vvSymbolAnchor",r=>r.vvSymbolAnchor)),i.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),i.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):i.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(i.constants.add("vvColorNumber","int",Ft),e.hasVvInstancing&&i.uniforms.add([new Kn("vvColorValues",r=>r.vvColorValues,Ft),new Xn("vvColorColors",r=>r.vvColorColors,Ft)]),i.code.add(s`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.hasVvInstancing?s`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):i.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function Yn(t){t.fragment.code.add(s`
    #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(oi)}) { discard; } }
  `)}class Y extends K{constructor(e,i){super(e,"float",G.Pass,(r,a,o)=>r.setUniform1f(e,i(a,o)))}}function Fe(t,e){Qn(t,e,new Y("textureAlphaCutoff",i=>i.textureAlphaCutoff))}function Qn(t,e,i){const r=t.fragment;switch(e.alphaDiscardMode!==q.Mask&&e.alphaDiscardMode!==q.MaskBlend||r.uniforms.add(i),e.alphaDiscardMode){case q.Blend:return t.include(Yn);case q.Opaque:r.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case q.Mask:r.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case q.MaskBlend:t.fragment.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Rr(t,e){const i=t.vertex.code,r=t.fragment.code,a=e.hasModelTransformation;e.output!==R.Depth&&e.output!==R.Shadow||(lt(t,e),t.include(st,{linearDepth:!0,hasModelTransformation:a}),t.include(We,e),t.include(ct,e),t.include(Wn,e),t.include(De,e),t.vertex.uniforms.add(new ke("nearFar",(o,n)=>n.camera.nearFar)),t.varyings.add("depth","float"),e.hasColorTexture&&t.fragment.uniforms.add(new ae("tex",o=>o.texture)),i.add(s`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${a?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),t.include(Fe,e),r.add(s`
      void main(void) {
        discardBySlice(vpos);
        ${e.hasColorTexture?s`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),e.output===R.Normal&&(lt(t,e),t.include(st,{linearDepth:!1,hasModelTransformation:a}),t.include(Lt,e),t.include(gr,e),t.include(We,e),t.include(ct,e),e.hasColorTexture&&t.fragment.uniforms.add(new ae("tex",o=>o.texture)),t.varyings.add("vPositionView","vec3"),i.add(s`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${e.normalType===j.Attribute?s`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${a?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),t.include(De,e),t.include(Fe,e),r.add(s`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?s`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${e.normalType===j.ScreenDerivative?s`
            vec3 normal = screenDerivativeNormal(vPositionView);`:s`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),e.output===R.Highlight&&(lt(t,e),t.include(st,{linearDepth:!1,hasModelTransformation:a}),t.include(We,e),t.include(ct,e),e.hasColorTexture&&t.fragment.uniforms.add(new ae("tex",o=>o.texture)),i.add(s`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${a?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),t.include(De,e),t.include(Fe,e),t.include(jn),r.add(s`
      void main() {
        discardBySlice(vpos);
        ${e.hasColorTexture?s`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function Zn(t,e){const i=t.fragment;if(e.hasVertexTangents?(t.attributes.add(p.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===J.WindingOrder?i.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):i.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(t.extensions.add("GL_OES_standard_derivatives"),i.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),e.textureCoordinateType!==Z.None){t.include(nr,e);const r=e.supportsTextureAtlas;i.uniforms.add(e.pbrTextureBindType===G.Pass?St("normalTexture",a=>a.textureNormal,r):_t("normalTexture",a=>a.textureNormal,r)),i.code.add(s`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${e.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}function si(t,e){const i=t.fragment;e.receiveAmbientOcclusion?(i.uniforms.add([new ae("ssaoTex",(r,a)=>a.ssaoHelper.colorTexture),new Q("viewportPixelSz",(r,a)=>ie(Jn,a.camera.fullViewport[0],a.camera.fullViewport[1],1/a.ssaoHelper.width,1/a.ssaoHelper.height))]),i.code.add(s`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
return texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}`)):i.code.add(s`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}const Jn=Rt();function es(t,e){const i=t.fragment,r=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;r===0?(i.uniforms.add(new W("lightingAmbientSH0",(a,o)=>oe(Ni,o.lighting.sh.r[0],o.lighting.sh.g[0],o.lighting.sh.b[0]))),i.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):r===1?(i.uniforms.add([new Q("lightingAmbientSH_R",(a,o)=>ie(ge,o.lighting.sh.r[0],o.lighting.sh.r[1],o.lighting.sh.r[2],o.lighting.sh.r[3])),new Q("lightingAmbientSH_G",(a,o)=>ie(ge,o.lighting.sh.g[0],o.lighting.sh.g[1],o.lighting.sh.g[2],o.lighting.sh.g[3])),new Q("lightingAmbientSH_B",(a,o)=>ie(ge,o.lighting.sh.b[0],o.lighting.sh.b[1],o.lighting.sh.b[2],o.lighting.sh.b[3]))]),i.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):r===2&&(i.uniforms.add([new W("lightingAmbientSH0",(a,o)=>oe(Ni,o.lighting.sh.r[0],o.lighting.sh.g[0],o.lighting.sh.b[0])),new Q("lightingAmbientSH_R1",(a,o)=>ie(ge,o.lighting.sh.r[1],o.lighting.sh.r[2],o.lighting.sh.r[3],o.lighting.sh.r[4])),new Q("lightingAmbientSH_G1",(a,o)=>ie(ge,o.lighting.sh.g[1],o.lighting.sh.g[2],o.lighting.sh.g[3],o.lighting.sh.g[4])),new Q("lightingAmbientSH_B1",(a,o)=>ie(ge,o.lighting.sh.b[1],o.lighting.sh.b[2],o.lighting.sh.b[3],o.lighting.sh.b[4])),new Q("lightingAmbientSH_R2",(a,o)=>ie(ge,o.lighting.sh.r[5],o.lighting.sh.r[6],o.lighting.sh.r[7],o.lighting.sh.r[8])),new Q("lightingAmbientSH_G2",(a,o)=>ie(ge,o.lighting.sh.g[5],o.lighting.sh.g[6],o.lighting.sh.g[7],o.lighting.sh.g[8])),new Q("lightingAmbientSH_B2",(a,o)=>ie(ge,o.lighting.sh.b[5],o.lighting.sh.b[6],o.lighting.sh.b[7],o.lighting.sh.b[8]))]),i.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==V.Normal&&e.pbrMode!==V.Schematic||i.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Ni=H(),ge=Rt();function ts(t,e){const i=t.fragment;e.isGround?i.uniforms.add(new Y("lightingFixedFactor",(r,a)=>(1-a.lighting.groundLightingFactor)*(1-a.lighting.globalFactor))):i.constants.add("lightingFixedFactor","float",0),i.uniforms.add([new W("lightingMainDirection",(r,a)=>a.lighting.lightingMainDirection),new W("lightingMainIntensity",(r,a)=>a.lighting.mainLight.intensity)]),i.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}function is(t){const e=t.fragment.code;e.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Er(t){t.vertex.code.add(s`const float PI = 3.141592653589793;`),t.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function li(t,e){const i=t.fragment.code;t.include(Er),e.pbrMode===V.Water||e.pbrMode===V.WaterOnIntegratedMesh?(i.add(s`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),i.add(s`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),i.add(s`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),i.add(s`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),i.add(s`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):e.pbrMode!==V.Normal&&e.pbrMode!==V.Schematic||(t.include(is),i.add(s`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),i.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),i.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),i.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),i.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),i.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}class rs extends K{constructor(e,i){super(e,"bool",G.Pass,(r,a,o)=>r.setUniform1b(e,i(a,o)))}}const ci=.4;function Ir(t,e){const i=t.fragment;t.include(si,e),e.pbrMode!==V.Disabled&&t.include(li,e),t.include(es,e),i.constants.add("ambientBoostFactor","float",ci),t.include(Er),i.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===V.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),i.uniforms.add(new W("lightingMainDirection",(r,a)=>a.lighting.lightingMainDirection)),i.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?s`normalize(vPosWorld)`:s`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),i.uniforms.add([new Y("lightingGlobalFactor",(r,a)=>a.lighting.globalFactor),new W("lightingMainIntensity",(r,a)=>a.lighting.mainLight.intensity)]),i.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),e.pbrMode===V.Disabled||e.pbrMode===V.WaterOnIntegratedMesh?(t.include(ts,e),i.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`)):e.pbrMode!==V.Normal&&e.pbrMode!==V.Schematic||(i.code.add(s`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),i.code.add(s`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?i.uniforms.add(new rs("hasFillLights",(r,a)=>a.enableFillLights)):i.constants.add("hasFillLights","bool",!1),i.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),i.uniforms.add([new Y("lightingSpecularStrength",(r,a)=>a.lighting.mainLight.specularStrength),new Y("lightingEnvironmentStrength",(r,a)=>a.lighting.mainLight.environmentStrength)]),i.code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),i.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode===V.Schematic?s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function as(t){t.include(ni),t.code.add(s`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}function Ct(t,e){e.hasMultipassTerrain&&(t.fragment.include(as),t.fragment.uniforms.add(new ae("terrainDepthTexture",(i,r)=>r.multipassTerrain.linearDepthTexture)),t.fragment.uniforms.add(new ke("nearFar",(i,r)=>r.camera.nearFar)),t.fragment.uniforms.add(new ke("inverseViewport",(i,r)=>r.inverseViewport)),t.fragment.code.add(s`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class Lr extends K{constructor(e,i,r,a){switch(i){case G.Pass:return void super(e,"mat4",i,(o,n,l)=>o.setUniformMatrix4fv(e,r(n,l)),a);case G.Draw:return void super(e,"mat4",i,(o,n,l)=>o.setUniformMatrix4fv(e,r(n,l)),a)}}}function $r(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Lr("shadowMapMatrix",G.Pass,(i,r)=>r.shadowMap.getShadowMapMatrices(i.origin),4)),Dr(t))}function Nr(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Lr("shadowMapMatrix",G.Draw,(i,r)=>r.shadowMap.getShadowMapMatrices(i.origin),4)),Dr(t))}function Dr(t){const e=t.fragment;e.include(ni),e.uniforms.add([new ae("shadowMapTex",(i,r)=>r.shadowMap.depthTexture),new wr("numCascades",(i,r)=>r.shadowMap.numCascades),new Q("cascadeDistances",(i,r)=>r.shadowMap.cascadeDistances),new Y("depthHalfPixelSz",(i,r)=>.5/r.shadowMap.textureSize)]),e.code.add(s`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}function os(t,e){const i=s`
  /*
  *  ${e.name}
  *  ${e.output===R.Color?"RenderOutput: Color":e.output===R.Depth?"RenderOutput: Depth":e.output===R.Shadow?"RenderOutput: Shadow":e.output===R.Normal?"RenderOutput: Normal":e.output===R.Highlight?"RenderOutput: Highlight":""}
  */
  `;to()&&(t.fragment.code.add(i),t.vertex.code.add(i))}function ns(t){t.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function Ot(t){t.include(ns),t.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(le.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(le.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(le.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${s.int(le.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(le.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}const ss=jt.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class Fr{constructor(){this.includedModules=new Map}include(e,i){if(this.includedModules.has(e)){const r=this.includedModules.get(e);if(r!==i){ss.error("Trying to include shader module multiple times with different sets of options.");const a=new Set;for(const o of Object.keys(r))r[o]!==e[o]&&a.add(o);for(const o of Object.keys(e))r[o]!==e[o]&&a.add(o);a.forEach(o=>console.error(`  ${o}: current ${r[o]} new ${e[o]}`))}}else this.includedModules.set(e,i),e(this.builder,i)}}class zr extends Fr{constructor(){super(...arguments),this.vertex=new Di,this.fragment=new Di,this.attributes=new ds,this.varyings=new us,this.extensions=new je,this.constants=new U}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const i=this.extensions.generateSource(e),r=this.attributes.generateSource(e),a=this.varyings.generateSource(),o=e==="vertex"?this.vertex:this.fragment,n=o.uniforms.generateSource(),l=o.code.generateSource(),d=e==="vertex"?ms:hs,c=this.constants.generateSource().concat(o.constants.generateSource());return`
${i.join(`
`)}

${d}

${c.join(`
`)}

${n.join(`
`)}

${r.join(`
`)}

${a.join(`
`)}

${l.join(`
`)}`}generateBind(e,i){const r=new Map;this.vertex.uniforms.entries.forEach(n=>{const l=n.bind[e];v(l)&&r.set(n.name,l)}),this.fragment.uniforms.entries.forEach(n=>{const l=n.bind[e];v(l)&&r.set(n.name,l)});const a=Array.from(r.values()),o=a.length;return(n,l)=>{for(let d=0;d<o;++d)a[d](i,n,l)}}}class ls{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const i of e)this._add(i)}_add(e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new Xt(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}generateSource(){return Array.from(this._entries.values()).map(e=>v(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}}class cs{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class Di extends Fr{constructor(){super(...arguments),this.uniforms=new ls,this.code=new cs,this.constants=new U}get builder(){return this}}class ds{constructor(){this._entries=new Array}add(e,i){this._entries.push([e,i])}generateSource(e){return e==="fragment"?[]:this._entries.map(i=>`attribute ${i[1]} ${i[0]};`)}}class us{constructor(){this._entries=new Array}add(e,i){this._entries.push([e,i])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class je{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const i=e==="vertex"?je.ALLOWLIST_VERTEX:je.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(r=>i.includes(r)).map(r=>`#extension ${r} : enable`)}}je.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],je.ALLOWLIST_VERTEX=[];class U{constructor(){this._entries=new Set}add(e,i,r){let a="ERROR_CONSTRUCTOR_STRING";switch(i){case"float":a=U._numberToFloatStr(r);break;case"int":a=U._numberToIntStr(r);break;case"bool":a=r.toString();break;case"vec2":a=`vec2(${U._numberToFloatStr(r[0])},                            ${U._numberToFloatStr(r[1])})`;break;case"vec3":a=`vec3(${U._numberToFloatStr(r[0])},                            ${U._numberToFloatStr(r[1])},                            ${U._numberToFloatStr(r[2])})`;break;case"vec4":a=`vec4(${U._numberToFloatStr(r[0])},                            ${U._numberToFloatStr(r[1])},                            ${U._numberToFloatStr(r[2])},                            ${U._numberToFloatStr(r[3])})`;break;case"ivec2":a=`ivec2(${U._numberToIntStr(r[0])},                             ${U._numberToIntStr(r[1])})`;break;case"ivec3":a=`ivec3(${U._numberToIntStr(r[0])},                             ${U._numberToIntStr(r[1])},                             ${U._numberToIntStr(r[2])})`;break;case"ivec4":a=`ivec4(${U._numberToIntStr(r[0])},                             ${U._numberToIntStr(r[1])},                             ${U._numberToIntStr(r[2])},                             ${U._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":a=`${i}(${Array.prototype.map.call(r,o=>U._numberToFloatStr(o)).join(", ")})`}return this._entries.add(`const ${i} ${e} = ${a};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const hs=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,ms=`precision highp float;
precision highp sampler2D;`;function ps(t){const e=new zr,i=e.vertex.code,r=e.fragment.code;e.include(os,{name:"Default Material Shader",output:t.output});const a=lt(e,t);return e.include(ri),e.varyings.add("vpos","vec3"),e.include(ct,t),e.include(Mr,t),e.include(Pr,t),t.output!==R.Color&&t.output!==R.Alpha||(pt(e.vertex,t),e.include(Lt,t),e.include(st,{linearDepth:!1,hasModelTransformation:t.hasModelTransformation}),t.normalType===j.Attribute&&t.offsetBackfaces&&e.include(Tr),e.include(Zn,t),e.include(gr,t),t.instancedColor&&e.attributes.add(p.INSTANCECOLOR,"vec4"),e.varyings.add("localvpos","vec3"),e.include(We,t),e.include(br,t),e.include(yr,t),e.include(Cr,t),e.vertex.uniforms.add(new Q("externalColor",o=>o.externalColor)),e.varyings.add("vcolorExt","vec4"),t.hasMultipassTerrain&&e.varyings.add("depth","float"),t.hasModelTransformation&&e.vertex.uniforms.add(new mt("model",o=>v(o.modelTransformation)?o.modelTransformation:Sa)),i.add(s`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${s.float(oi)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${t.normalType===j.Attribute?s`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${t.hasModelTransformation?"model,":""} vpos);
          ${t.normalType===j.Attribute&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),t.output===R.Alpha&&(e.include(De,t),e.include(Fe,t),e.include(Ct,t),e.fragment.uniforms.add([new Y("opacity",o=>o.opacity),new Y("layerOpacity",o=>o.layerOpacity)]),t.hasColorTexture&&e.fragment.uniforms.add(new ae("tex",o=>o.texture)),e.fragment.include(Ot),r.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, vuv0);
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===R.Color&&(e.include(De,t),e.include(Ir,t),e.include(si,t),e.include(Fe,t),e.include(t.instancedDoublePrecision?$r:Nr,t),e.include(Ct,t),pt(e.fragment,t),e.fragment.uniforms.add([a,new W("ambient",o=>o.ambient),new W("diffuse",o=>o.diffuse),new Y("opacity",o=>o.opacity),new Y("layerOpacity",o=>o.layerOpacity),new Y("lightingGlobalFactor",(o,n)=>n.lighting.globalFactor),new W("lightingMainIntensity",(o,n)=>n.lighting.mainLight.intensity)]),e.fragment.constants.add("ambientBoostFactor","float",ci),t.hasColorTexture&&e.fragment.uniforms.add(new ae("tex",o=>o.texture)),e.include(sr,t),e.include(li,t),e.fragment.include(Ot),e.include(Go,t),r.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, vuv0);
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===j.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(localvpos);`:s`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===V.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture?s`
                mat3 tangentSpace = ${t.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:s`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical?s`normalize(vpos + localOrigin);`:s`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover?s`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode===V.Normal||t.pbrMode===V.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${t.snowCover?s`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===qe.Color?s`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),e.include(Rr,t),e}const fs=Object.freeze(Object.defineProperty({__proto__:null,build:ps},Symbol.toStringTag,{value:"Module"}));class vs extends wn{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Ge(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Se.Back,this.emissiveFactor=Ge(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=Ge(.2,.2,.2),this.diffuse=Ge(.8,.8,.8),this.externalColor=Qt(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=H(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=Et(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=ft.Less,this.textureAlphaMode=q.Blend,this.textureAlphaCutoff=yn,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=kt.Occlude}}class vt extends Cn{initializeConfiguration(e,i){i.spherical=e.viewingMode===Ut.Global,i.doublePrecisionRequiresObfuscation=An(e.rctx),i.textureCoordinateType=i.hasColorTexture||i.hasMetalnessAndRoughnessTexture||i.hasEmissionTexture||i.hasOcclusionTexture||i.hasNormalTexture?Z.Default:Z.None}initializeProgram(e){return this._initializeProgram(e,vt.shader)}_initializeProgram(e,i){const r=i.get().build(this.configuration);return new On(e.rctx,r,ii)}_convertDepthTestFunction(e){return e===ft.Lequal?Ae.LEQUAL:Ae.LESS}_setPipeline(e,i){const r=this.configuration,a=e===qe.NONE,o=e===qe.FrontFace;return Ba({blending:r.output!==R.Color&&r.output!==R.Alpha||!r.transparent?null:a?Ha:Ua(e),culling:gs(r)&&Wa(r.cullFace),depthTest:{func:qa(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:a||o?r.writeDepth&&ka:null,colorWrite:ja,stencilWrite:r.hasOccludees?Pn:null,stencilTest:r.hasOccludees?i?En:Rn:null,polygonOffset:a||o?null:Xa(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,i){return i?this._occludeePipelineState:super.getPipelineState(e,i)}}function gs(t){return t.cullFace!==Se.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}vt.shader=new xr(fs,()=>import("./DefaultMaterial.glsl.8b0a9a79.js"));class xs{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,i={key:this.key};for(const r of e)i[r]=this[r];return i}}function S(t={}){return(e,i)=>{var r,a;if(e._parameterNames=(r=e._parameterNames)!=null?r:[],e._parameterNames.push(i),t.constValue!=null)Object.defineProperty(e,i,{get:()=>t.constValue});else{const o=e._parameterNames.length-1,n=t.count||2,l=Math.ceil(Math.log2(n)),d=(a=e._parameterBits)!=null?a:[0];let c=0;for(;d[c]+l>16;)c++,c>=d.length&&d.push(0);e._parameterBits=d;const u=d[c],f=(1<<l)-1<<u;d[c]+=l,Object.defineProperty(e,i,{get(){return this[o]},set(h){if(this[o]!==h&&(this[o]=h,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~f|+h<<u&f,typeof h!="number"&&typeof h!="boolean"))throw"Configuration value for "+i+" must be boolean or number, got "+typeof h}})}}}class Ve extends xs{}_([S({constValue:!0})],Ve.prototype,"hasSliceHighlight",void 0),_([S({constValue:!1})],Ve.prototype,"hasSliceInVertexProgram",void 0),_([S({constValue:!1})],Ve.prototype,"instancedDoublePrecision",void 0),_([S({constValue:!1})],Ve.prototype,"isGround",void 0),_([S({constValue:G.Pass})],Ve.prototype,"pbrTextureBindType",void 0);class M extends Ve{constructor(){super(...arguments),this.output=R.Color,this.alphaDiscardMode=q.Opaque,this.doubleSidedMode=J.None,this.pbrMode=V.Disabled,this.cullFace=Se.None,this.transparencyPassType=qe.NONE,this.normalType=j.Attribute,this.textureCoordinateType=Z.None,this.customDepthTest=ft.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1}}_([S({count:R.COUNT})],M.prototype,"output",void 0),_([S({count:q.COUNT})],M.prototype,"alphaDiscardMode",void 0),_([S({count:J.COUNT})],M.prototype,"doubleSidedMode",void 0),_([S({count:V.COUNT})],M.prototype,"pbrMode",void 0),_([S({count:Se.COUNT})],M.prototype,"cullFace",void 0),_([S({count:qe.COUNT})],M.prototype,"transparencyPassType",void 0),_([S({count:j.COUNT})],M.prototype,"normalType",void 0),_([S({count:Z.COUNT})],M.prototype,"textureCoordinateType",void 0),_([S({count:ft.COUNT})],M.prototype,"customDepthTest",void 0),_([S()],M.prototype,"spherical",void 0),_([S()],M.prototype,"hasVertexColors",void 0),_([S()],M.prototype,"hasSymbolColors",void 0),_([S()],M.prototype,"hasVerticalOffset",void 0),_([S()],M.prototype,"hasSlicePlane",void 0),_([S()],M.prototype,"hasSliceHighlight",void 0),_([S()],M.prototype,"hasColorTexture",void 0),_([S()],M.prototype,"hasMetalnessAndRoughnessTexture",void 0),_([S()],M.prototype,"hasEmissionTexture",void 0),_([S()],M.prototype,"hasOcclusionTexture",void 0),_([S()],M.prototype,"hasNormalTexture",void 0),_([S()],M.prototype,"hasScreenSizePerspective",void 0),_([S()],M.prototype,"hasVertexTangents",void 0),_([S()],M.prototype,"hasOccludees",void 0),_([S()],M.prototype,"hasMultipassTerrain",void 0),_([S()],M.prototype,"hasModelTransformation",void 0),_([S()],M.prototype,"offsetBackfaces",void 0),_([S()],M.prototype,"vvSize",void 0),_([S()],M.prototype,"vvColor",void 0),_([S()],M.prototype,"receiveShadows",void 0),_([S()],M.prototype,"receiveAmbientOcclusion",void 0),_([S()],M.prototype,"textureAlphaPremultiplied",void 0),_([S()],M.prototype,"instanced",void 0),_([S()],M.prototype,"instancedColor",void 0),_([S()],M.prototype,"instancedDoublePrecision",void 0),_([S()],M.prototype,"doublePrecisionRequiresObfuscation",void 0),_([S()],M.prototype,"writeDepth",void 0),_([S()],M.prototype,"transparent",void 0),_([S()],M.prototype,"enableOffset",void 0),_([S()],M.prototype,"cullAboveGround",void 0),_([S()],M.prototype,"snowCover",void 0),_([S({constValue:!0})],M.prototype,"hasVvInstancing",void 0),_([S({constValue:!1})],M.prototype,"useCustomDTRExponentForWater",void 0),_([S({constValue:!1})],M.prototype,"supportsTextureAtlas",void 0),_([S({constValue:!0})],M.prototype,"useFillLights",void 0);class Fi extends K{constructor(e){super(e,"mat4")}}function bs(t){const e=new zr,i=e.vertex.code,r=e.fragment.code,a=lt(e,t);return e.include(ri),e.varyings.add("vpos","vec3"),e.include(ct,t),e.include(Mr,t),e.include(Pr,t),t.output!==R.Color&&t.output!==R.Alpha||(pt(e.vertex,t),e.include(Lt,t),e.include(st),t.offsetBackfaces&&e.include(Tr),t.instancedColor&&e.attributes.add(p.INSTANCECOLOR,"vec4"),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("localvpos","vec3"),t.hasMultipassTerrain&&e.varyings.add("depth","float"),e.include(We,t),e.include(br,t),e.include(yr,t),e.include(Cr,t),e.vertex.uniforms.add(new Q("externalColor",o=>o.externalColor)),e.varyings.add("vcolorExt","vec4"),i.add(s`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${s.float(oi)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.hasMultipassTerrain?s`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===R.Alpha&&(e.include(De,t),e.include(Fe,t),e.include(Ct,t),e.fragment.uniforms.add([new Y("opacity",o=>o.opacity),new Y("layerOpacity",o=>o.layerOpacity),new Fi("view")]),t.hasColorTexture&&e.fragment.uniforms.add(new ae("tex",o=>o.texture)),e.fragment.include(Ot),r.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, vuv0);
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===R.Color&&(e.include(De,t),e.include(Ir,t),e.include(si,t),e.include(Fe,t),e.include(t.instancedDoublePrecision?$r:Nr,t),e.include(Ct,t),pt(e.fragment,t),e.fragment.uniforms.add([a,new W("ambient",o=>o.ambient),new W("diffuse",o=>o.diffuse),new Y("opacity",o=>o.opacity),new Y("layerOpacity",o=>o.layerOpacity),new Fi("view"),new Y("lightingGlobalFactor",(o,n)=>n.lighting.globalFactor),new W("lightingMainIntensity",(o,n)=>n.lighting.mainLight.intensity)]),e.fragment.constants.add("ambientBoostFactor","float",ci),t.hasColorTexture&&e.fragment.uniforms.add(new ae("tex",o=>o.texture)),e.include(sr,t),e.include(li,t),e.fragment.include(Ot),e.extensions.add("GL_OES_standard_derivatives"),r.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, vuv0);
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===V.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover?s`albedo = mix(albedo, vec3(1), 0.9);`:s``}
        ${s`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * lightingMainIntensity;`}
        ${t.pbrMode===V.Normal||t.pbrMode===V.Schematic?t.spherical?s`vec3 normalGround = normalize(vpos + localOrigin);`:s`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:s``}
        ${t.pbrMode===V.Normal||t.pbrMode===V.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${t.snowCover?s`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===qe.Color?s`gl_FragColor = premultiplyAlpha(gl_FragColor);`:s``}
      }
    `)),e.include(Rr,t),e}const Ts=Object.freeze(Object.defineProperty({__proto__:null,build:bs},Symbol.toStringTag,{value:"Module"}));class $t extends vt{initializeConfiguration(e,i){super.initializeConfiguration(e,i),i.hasMetalnessAndRoughnessTexture=!1,i.hasEmissionTexture=!1,i.hasOcclusionTexture=!1,i.hasNormalTexture=!1,i.hasModelTransformation=!1,i.normalType=j.Attribute,i.doubleSidedMode=J.WindingOrder,i.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,$t.shader)}}$t.shader=new xr(Ts,()=>import("./RealisticTree.glsl.57ce7a68.js"));class Vr extends mn{constructor(e){super(e,As),this.supportsEdges=!0,this.techniqueConfig=new M,this.vertexBufferLayout=ws(this.parameters),this.instanceBufferLayout=e.instanced?ys(this.parameters):null}isVisibleInPass(e){return e!==nt.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==nt.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==nt.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{instanced:i,hasVertexColors:r,hasSymbolColors:a,vvColorEnabled:o}=e,n=v(i)&&i.includes("color"),l=e.colorMixMode==="replace",d=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(n||o||a)?!!l||d:r?l?c:d:n||o||a?!!l||d:l?c:d}getConfiguration(e,i){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.hasVertexTangents=this.parameters.hasVertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.hasVerticalOffset=v(this.parameters.verticalOffset),this.techniqueConfig.hasScreenSizePerspective=v(this.parameters.screenSizePerspective),this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.hasSliceHighlight=this.parameters.hasSliceHighlight,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalType=this.parameters.normals==="screenDerivative"?j.ScreenDerivative:j.Attribute,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,v(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.hasOccludees=this.parameters.hasOccludees,this.techniqueConfig.cullFace=this.parameters.hasSlicePlane?Se.None:this.parameters.cullFace,this.techniqueConfig.hasMultipassTerrain=i.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=i.multipassTerrain.cullAboveGround,this.techniqueConfig.hasModelTransformation=v(this.parameters.modelTransformation),e!==R.Color&&e!==R.Alpha||(this.techniqueConfig.hasVertexColors=this.parameters.hasVertexColors,this.techniqueConfig.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=J.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?J.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?J.WindingOrder:J.None,this.techniqueConfig.instancedColor=v(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!i.ssaoHelper.ready&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?V.Schematic:V.Normal:V.Disabled,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.transparencyPassType=i.transparencyPassType,this.techniqueConfig.enableOffset=i.camera.relativeElevation<Ka,this.techniqueConfig.snowCover=this.hasSnowCover(i)),this.techniqueConfig}hasSnowCover(e){return v(e.weather)&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,i,r,a,o,n,l){if(v(this.parameters.verticalOffset)){const d=a.camera;oe(Vt,r[12],r[13],r[14]);let c=null;switch(a.viewingMode){case Ut.Global:c=Kt(zi,Vt);break;case Ut.Local:c=fa(zi,Ps)}let u=0;const f=$e(Rs,Vt,d.eye),h=qi(f),x=xi(f,f,1/h);let m=null;this.parameters.screenSizePerspective&&(m=va(c,x)),u+=ln(d,h,this.parameters.verticalOffset,m,this.parameters.screenSizePerspective),xi(c,c,u),ga(zt,c,a.transform.inverseRotation),o=$e(Cs,o,zt),n=$e(Os,n,zt)}tn(e,i,a,o,n,vn(a.verticalOffset),l)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?He.TRANSPARENT_MATERIAL:He.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:He.OPAQUE_MATERIAL)||e===He.DRAPED_MATERIAL}createGLMaterial(e){return e.output===R.Color||e.output===R.Alpha||e.output===R.Depth||e.output===R.Normal||e.output===R.Shadow||e.output===R.Highlight?new _s(e):null}createBufferWriter(){return new Ms(this.vertexBufferLayout,this.instanceBufferLayout)}}class _s extends jo{constructor(e){super(ve(ve({},e),e.material.parameters))}_updateParameters(e){const i=this._material.parameters;this.updateTexture(i.textureId);const r=e.camera.viewInverseTransposeMatrix;return oe(i.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(i.treeRendering?$t:vt,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==R.Color&&this._output!==R.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}class Ss extends vs{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const As=new Ss;class Ms{constructor(e,i){this.vertexBufferLayout=e,this.instanceBufferLayout=i}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(p.POSITION).length}write(e,i,r,a){Sn(i,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,a)}}function ws(t){const e=t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId,i=Zi().vec3f(p.POSITION).vec3f(p.NORMAL);return t.hasVertexTangents&&i.vec4f(p.TANGENT),e&&i.vec2f(p.UV0),t.hasVertexColors&&i.vec4u8(p.COLOR),t.hasSymbolColors&&i.vec4u8(p.SYMBOLCOLOR),i}function ys(t){let e=Zi();return e=t.instancedDoublePrecision?e.vec3f(p.MODELORIGINHI).vec3f(p.MODELORIGINLO).mat3f(p.MODEL).mat3f(p.MODELNORMAL):e.mat4f(p.MODEL).mat4f(p.MODELNORMAL),v(t.instanced)&&t.instanced.includes("color")&&(e=e.vec4f(p.INSTANCECOLOR)),v(t.instanced)&&t.instanced.includes("featureAttribute")&&(e=e.vec4f(p.INSTANCEFEATUREATTRIBUTE)),e}const Cs=H(),Os=H(),Ps=Ge(0,0,1),zi=H(),zt=H(),Vt=H(),Rs=H(),xe=jt.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Es(t,e){const i=await Is(t,e);return{resource:i,textures:await Fs(i.textureDefinitions,e)}}async function Is(t,e){const i=v(e)&&e.streamDataRequester;if(i)return Ls(t,i,e);const r=await ji(xa(t,Bt(e)));if(r.ok===!0)return r.value.data;Xi(r.error),Gr(r.error)}async function Ls(t,e,i){const r=await ji(e.request(t,"json",i));if(r.ok===!0)return r.value;Xi(r.error),Gr(r.error.details.url)}function Gr(t){throw new Xt("",`Request for object resource failed: ${t}`)}function $s(t){const e=t.params,i=e.topology;let r=!0;switch(e.vertexAttributes||(xe.warn("Geometry must specify vertex attributes"),r=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const o=e.faces;if(o){if(e.vertexAttributes)for(const n in e.vertexAttributes){const l=o[n];l&&l.values?(l.valueType!=null&&l.valueType!=="UInt32"&&(xe.warn(`Unsupported indexed geometry indices type '${l.valueType}', only UInt32 is currently supported`),r=!1),l.valuesPerElement!=null&&l.valuesPerElement!==1&&(xe.warn(`Unsupported indexed geometry values per element '${l.valuesPerElement}', only 1 is currently supported`),r=!1)):(xe.warn(`Indexed geometry does not specify face indices for '${n}' attribute`),r=!1)}}else xe.warn("Indexed geometries must specify faces"),r=!1;break}default:xe.warn(`Unsupported topology '${i}'`),r=!1}t.params.material||(xe.warn("Geometry requires material"),r=!1);const a=t.params.vertexAttributes;for(const o in a)a[o].values||(xe.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function Ns(t,e){const i=[],r=[],a=[],o=[],n=t.resource,l=ki.parse(n.version||"1.0","wosr");Vs.validate(l);const d=n.model.name,c=n.model.geometries,u=n.materialDefinitions,f=t.textures;let h=0;const x=new Map;for(let m=0;m<c.length;m++){const A=c[m];if(!$s(A))continue;const T=zs(A),b=A.params.vertexAttributes,B=[];for(const g in b){const C=b[g],$=C.values;B.push([g,{data:$,size:C.valuesPerElement,exclusive:!0}])}const P=[];if(A.params.topology!=="PerAttributeArray"){const g=A.params.faces;for(const C in g)P.push([C,new Uint32Array(g[C].values)])}const O=f&&f[T.texture];if(O&&!x.has(T.texture)){const{image:g,params:C}=O,$=new X(g,C);o.push($),x.set(T.texture,$)}const L=x.get(T.texture),w=L?L.id:void 0;let y=a[T.material]?a[T.material][T.texture]:null;if(!y){const g=u[T.material.substring(T.material.lastIndexOf("/")+1)].params;g.transparency===1&&(g.transparency=0);const C=O&&O.alphaChannelUsage,$=g.transparency>0||C==="transparency"||C==="maskAndTransparency",N=O?Br(O.alphaChannelUsage):void 0,I={ambient:bi(g.diffuse),diffuse:bi(g.diffuse),opacity:1-(g.transparency||0),transparent:$,textureAlphaMode:N,textureAlphaCutoff:.33,textureId:w,initTextureTransparent:!0,doubleSided:!0,cullFace:Se.None,colorMixMode:g.externalColorMixMode||"tint",textureAlphaPremultiplied:!!O&&!!O.params.preMultiplyAlpha};v(e)&&e.materialParamsMixin&&Object.assign(I,e.materialParamsMixin),y=new Vr(I),a[T.material]||(a[T.material]={}),a[T.material][T.texture]=y}r.push(y);const E=new It(B,P);h+=P.position?P.position.length:0,i.push(E)}return{name:d,stageResources:{textures:o,materials:r,geometries:i},pivotOffset:n.model.pivotOffset,boundingBox:Ds(i),numberOfVertices:h,lodThreshold:null}}function Ds(t){const e=Ki();return t.forEach(i=>{const r=i.boundingInfo;v(r)&&(wt(e,r.getBBMin()),wt(e,r.getBBMax()))}),e}async function Fs(t,e){const i=[];for(const o in t){const n=t[o],l=n.images[0].data;if(!l){xe.warn("Externally referenced texture data is not yet supported");continue}const d=n.encoding+";base64,"+l,c="/textureDefinitions/"+o,u=n.channels==="rgba"?n.alphaChannelUsage||"transparency":"none",f={noUnpackFlip:!0,wrap:{s:Be.REPEAT,t:Be.REPEAT},preMultiplyAlpha:Br(u)!==q.Opaque},h=v(e)&&e.disableTextures?Promise.resolve(null):Qi(d,e);i.push(h.then(x=>({refId:c,image:x,params:f,alphaChannelUsage:u})))}const r=await Promise.all(i),a={};for(const o of r)a[o.refId]=o;return a}function Br(t){switch(t){case"mask":return q.Mask;case"maskAndTransparency":return q.MaskBlend;case"none":return q.Opaque;default:return q.Blend}}function zs(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Vs=new ki(1,2,"wosr");async function Gs(t,e){const i=Hr(Xr(t));if(i.fileType==="wosr"){const d=await(e.cache?e.cache.loadWOSR(i.url,e):Es(i.url,e)),c=Ns(d,e);return{lods:[c],referenceBoundingBox:c.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:d.remove}}const r=await(e.cache?e.cache.loadGLTF(i.url,e,e.usePBR):Ra(new Ea(e.streamDataRequester),i.url,e,e.usePBR)),a=ba(r.model.meta,"ESRI_proxyEllipsoid");r.meta.isEsriSymbolResource&&v(a)&&r.meta.uri.includes("/RealisticTrees/")&&Us(r,a);const o=r.meta.isEsriSymbolResource?{usePBR:e.usePBR,isSchematic:!1,treeRendering:!!r.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:e.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},n=Ze(ve({},e.materialParamsMixin),{treeRendering:!!r.customMeta.esriTreeRendering});if(i.specifiedLodIndex!=null){const d=At(r,o,n,i.specifiedLodIndex);let c=d[0].boundingBox;return i.specifiedLodIndex!==0&&(c=At(r,o,n,0)[0].boundingBox),{lods:d,referenceBoundingBox:c,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1,remove:r.remove}}const l=At(r,o,n);return{lods:l,referenceBoundingBox:l[0].boundingBox,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1,remove:r.remove}}function Hr(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function At(t,e,i,r){const a=t.model,o=Et(),n=new Array,l=new Map,d=new Map;return a.lods.forEach((c,u)=>{if(r!==void 0&&u!==r)return;const f={name:c.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:v(c.lodThreshold)?c.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Ki()};n.push(f),c.parts.forEach(h=>{const x=h.material+(h.attributes.normal?"_normal":"")+(h.attributes.color?"_color":"")+(h.attributes.texCoord0?"_texCoord0":"")+(h.attributes.tangent?"_tangent":""),m=a.materials.get(h.material),A=v(h.attributes.texCoord0),T=v(h.attributes.normal),b=Bs(m.alphaMode);if(!l.has(x)){if(A){if(v(m.textureColor)&&!d.has(m.textureColor)){const z=a.textures.get(m.textureColor),ne=Ze(ve({},z.parameters),{preMultiplyAlpha:b!==q.Opaque});d.set(m.textureColor,new X(z.data,ne))}if(v(m.textureNormal)&&!d.has(m.textureNormal)){const z=a.textures.get(m.textureNormal);d.set(m.textureNormal,new X(z.data,z.parameters))}if(v(m.textureOcclusion)&&!d.has(m.textureOcclusion)){const z=a.textures.get(m.textureOcclusion);d.set(m.textureOcclusion,new X(z.data,z.parameters))}if(v(m.textureEmissive)&&!d.has(m.textureEmissive)){const z=a.textures.get(m.textureEmissive);d.set(m.textureEmissive,new X(z.data,z.parameters))}if(v(m.textureMetallicRoughness)&&!d.has(m.textureMetallicRoughness)){const z=a.textures.get(m.textureMetallicRoughness);d.set(m.textureMetallicRoughness,new X(z.data,z.parameters))}}const g=m.color[0]**(1/ze),C=m.color[1]**(1/ze),$=m.color[2]**(1/ze),N=m.emissiveFactor[0]**(1/ze),I=m.emissiveFactor[1]**(1/ze),F=m.emissiveFactor[2]**(1/ze),D=v(m.textureColor)&&A?d.get(m.textureColor):null;l.set(x,new Vr(ve(Ze(ve({},e),{transparent:b===q.Blend,customDepthTest:ft.Lequal,textureAlphaMode:b,textureAlphaCutoff:m.alphaCutoff,diffuse:[g,C,$],ambient:[g,C,$],opacity:m.opacity,doubleSided:m.doubleSided,doubleSidedType:"winding-order",cullFace:m.doubleSided?Se.None:Se.Back,hasVertexColors:!!h.attributes.color,hasVertexTangents:!!h.attributes.tangent,normals:T?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:v(D)?D.id:void 0,colorMixMode:m.colorMixMode,normalTextureId:v(m.textureNormal)&&A?d.get(m.textureNormal).id:void 0,textureAlphaPremultiplied:v(D)&&!!D.params.preMultiplyAlpha,occlusionTextureId:v(m.textureOcclusion)&&A?d.get(m.textureOcclusion).id:void 0,emissiveTextureId:v(m.textureEmissive)&&A?d.get(m.textureEmissive).id:void 0,metallicRoughnessTextureId:v(m.textureMetallicRoughness)&&A?d.get(m.textureMetallicRoughness).id:void 0,emissiveFactor:[N,I,F],mrrFactors:[m.metallicFactor,m.roughnessFactor,e.mrrFactors[2]],isSchematic:!1}),i)))}const B=Hs(h.indices||h.attributes.position.count,h.primitiveType),P=h.attributes.position.count,O=Ie(Ue,P);wa(O,h.attributes.position,h.transform);const L=[[p.POSITION,{data:O.typedBuffer,size:O.elementCount,exclusive:!0}]],w=[[p.POSITION,B]];if(v(h.attributes.normal)){const g=Ie(Ue,P);Ti(o,h.transform),ya(g,h.attributes.normal,o),L.push([p.NORMAL,{data:g.typedBuffer,size:g.elementCount,exclusive:!0}]),w.push([p.NORMAL,B])}if(v(h.attributes.tangent)){const g=Ie(Wt,P);Ti(o,h.transform),Ia(g,h.attributes.tangent,o),L.push([p.TANGENT,{data:g.typedBuffer,size:g.elementCount,exclusive:!0}]),w.push([p.TANGENT,B])}if(v(h.attributes.texCoord0)){const g=Ie(Yi,P);La(g,h.attributes.texCoord0),L.push([p.UV0,{data:g.typedBuffer,size:g.elementCount,exclusive:!0}]),w.push([p.UV0,B])}if(v(h.attributes.color)){const g=Ie(ut,P);if(h.attributes.color.elementCount===4)h.attributes.color instanceof Wt?wi(g,h.attributes.color,255):h.attributes.color instanceof ut?$a(g,h.attributes.color):h.attributes.color instanceof Aa&&wi(g,h.attributes.color,1/256);else{Na(g,255,255,255,255);const C=new Si(g.buffer,0,4);h.attributes.color instanceof Ue?Ai(C,h.attributes.color,255):h.attributes.color instanceof Si?Ca(C,h.attributes.color):h.attributes.color instanceof Ma&&Ai(C,h.attributes.color,1/256)}L.push([p.COLOR,{data:g.typedBuffer,size:g.elementCount,exclusive:!0}]),w.push([p.COLOR,B])}const y=new It(L,w);f.stageResources.geometries.push(y),f.stageResources.materials.push(l.get(x)),A&&(v(m.textureColor)&&f.stageResources.textures.push(d.get(m.textureColor)),v(m.textureNormal)&&f.stageResources.textures.push(d.get(m.textureNormal)),v(m.textureOcclusion)&&f.stageResources.textures.push(d.get(m.textureOcclusion)),v(m.textureEmissive)&&f.stageResources.textures.push(d.get(m.textureEmissive)),v(m.textureMetallicRoughness)&&f.stageResources.textures.push(d.get(m.textureMetallicRoughness))),f.numberOfVertices+=P;const E=y.boundingInfo;v(E)&&(wt(f.boundingBox,E.getBBMin()),wt(f.boundingBox,E.getBBMax()))})}),n}function Bs(t){switch(t){case"BLEND":return q.Blend;case"MASK":return q.Mask;case"OPAQUE":case null:case void 0:return q.Opaque}}function Hs(t,e){switch(e){case at.TRIANGLES:return za(t);case at.TRIANGLE_STRIP:return Fa(t);case at.TRIANGLE_FAN:return Da(t)}}function Us(t,e){for(let i=0;i<t.model.lods.length;++i){const r=t.model.lods[i];t.customMeta.esriTreeRendering=!0;for(const a of r.parts){const o=a.attributes.normal;if(k(o))return;const n=a.attributes.position,l=n.count,d=H(),c=H(),u=H(),f=Ie(ut,l),h=Ie(Ue,l),x=Ta(Zt(),a.transform);for(let m=0;m<l;m++){n.getVec(m,c),o.getVec(m,d),dt(c,c,a.transform),$e(u,c,e.center),_i(u,u,e.radius);const A=u[2],T=qi(u),b=Math.min(.45+.55*T*T,1);_i(u,u,e.radius),dt(u,u,x),Kt(u,u),i+1!==t.model.lods.length&&t.model.lods.length>1&&Gt(u,u,d,A>-1?.2:Math.min(-4*A-3.8,1)),h.setVec(m,u),f.set(m,0,255*b),f.set(m,1,255*b),f.set(m,2,255*b),f.set(m,3,255)}a.attributes.normal=h,a.attributes.color=f}}}var cl=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",fetch:Gs,gltfToEngineResources:At,parseUrl:Hr});export{bs as B,ps as k,cl as o};
