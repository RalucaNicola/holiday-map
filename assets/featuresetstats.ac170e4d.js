import{fg as h,fR as l,ff as d,f4 as F,fj as m,fi as c}from"./vendor.c414a8c9.js";import{n as f}from"./arcadeUtils.6b1ae109.js";import{WhereClause as g}from"./WhereClause.86ae959e.js";async function s(t,e,u,n,a,r){if(n.length===1){if(d(n[0]))return f(t,n[0],c(n[1],-1));if(m(n[0]))return f(t,n[0].toArray(),c(n[1],-1))}else if(n.length===2){if(d(n[0]))return f(t,n[0],c(n[1],-1));if(m(n[0]))return f(t,n[0].toArray(),c(n[1],-1));if(l(n[0])){const o=await n[0].load(),i=await y(g.create(n[1],o.getFieldsIndex()),r,a);return n[0].calculateStatistic(t,i,c(n[2],1e3),e.abortSignal)}}else if(n.length===3&&l(n[0])){const o=await n[0].load(),i=await y(g.create(n[1],o.getFieldsIndex()),r,a);return n[0].calculateStatistic(t,i,c(n[2],1e3),e.abortSignal)}return f(t,n,-1)}async function y(t,e,u){const n=t.getVariables();if(n.length>0){const a=[];for(let o=0;o<n.length;o++){const i={name:n[o]};a.push(await e.evaluateIdentifier(u,i))}const r={};for(let o=0;o<n.length;o++)r[n[o]]=a[o];return t.parameters=r,t}return t}function p(t){t.mode==="async"&&(t.functions.stdev=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return s("stdev",n,a,r,e,t)})},t.functions.variance=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return s("variance",n,a,r,e,t)})},t.functions.average=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return s("mean",n,a,r,e,t)})},t.functions.mean=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return s("mean",n,a,r,e,t)})},t.functions.sum=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return s("sum",n,a,r,e,t)})},t.functions.min=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return s("min",n,a,r,e,t)})},t.functions.max=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return s("max",n,a,r,e,t)})},t.functions.count=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){if(h(r,1,1),l(r[0]))return r[0].count(n.abortSignal);if(d(r[0])||F(r[0]))return r[0].length;if(m(r[0]))return r[0].length();throw new Error("Invalid Parameters for Count")})})}export{p as registerFunctions};