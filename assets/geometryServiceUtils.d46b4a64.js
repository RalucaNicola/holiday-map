import{R as l,C as c,bX as s,cM as g,cN as u}from"./vendor.c414a8c9.js";async function f(e=null,o){var a,r;if(l.geometryServiceUrl)return l.geometryServiceUrl;if(!e)throw new c("internal:geometry-service-url-not-configured");let t;t="portal"in e?e.portal||s.getDefault():e,await t.load({signal:o});const n=(r=(a=t.helperServices)==null?void 0:a.geometry)==null?void 0:r.url;if(!n)throw new c("internal:geometry-service-url-not-configured");return n}async function y(e,o,t=null,n){const a=await f(t,n),r=new g;r.geometries=[e],r.outSpatialReference=o;const i=await u(a,r,{signal:n});if(i&&Array.isArray(i)&&i.length===1)return i[0];throw new c("internal:geometry-service-projection-failed")}export{f as getGeometryServiceURL,y as projectGeometry};
