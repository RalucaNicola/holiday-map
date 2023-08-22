import{s as h,ld as m,le as y,C as p,lf as w,lg as b,hI as v,lh as x,li as F}from"./vendor.c414a8c9.js";const d=h.getLogger("esri.layers.support.labelFormatUtils"),g={type:"simple",evaluate:()=>null},E={getAttribute:(a,l)=>a.field(l)};async function L(a,l,e){if(!a||!a.symbol)return g;const t=a.where,s=m(a),i=t?await import("./WhereClause.86ae959e.js"):null;let o;if(s.type==="arcade"){const n=await y(s.expression,e,l);o={type:"arcade",evaluate(u){try{const r=n.evaluate({$feature:"attributes"in u?n.repurposeFeature(u):u});if(r!=null)return r.toString()}catch{d.error(new p("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:u,expression:s}))}return null},needsHydrationToEvaluate:()=>F(s.expression)==null}}else o={type:"simple",evaluate:n=>s.expression.replace(/{[^}]*}/g,u=>{const r=u.slice(1,-1),c=l.get(r);if(!c)return u;let f=null;return"attributes"in n?n&&n.attributes&&(f=n.attributes[c.name]):f=n.field(c.name),f==null?"":V(f,c)})};if(t){let n;try{n=i.WhereClause.create(t,l)}catch(r){return d.error(new p("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:t,error:r})),g}const u=o.evaluate;o.evaluate=r=>{const c="attributes"in r?void 0:E;try{if(n.testFeature(r,c))return u(r)}catch(f){d.error(new p("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:t,feature:r,error:f}))}return null}}return o}function V(a,l){if(a==null)return"";const e=l.domain;if(e){if(e.type==="codedValue"||e.type==="coded-value"){const s=a;for(const i of e.codedValues)if(i.code===s)return i.name}else if(e.type==="range"){const s=+a,i="range"in e?e.range[0]:e.minValue,o="range"in e?e.range[1]:e.maxValue;if(i<=s&&s<=o)return e.name}}let t=a;return l.type==="date"||l.type==="esriFieldTypeDate"?t=w(t,b("short-date")):v(l)&&(t=x(+t)),t||""}export{L as createLabelFunction,V as formatField};