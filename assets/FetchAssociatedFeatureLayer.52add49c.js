import{w as n,r as h,U as u,dJ as g,b5 as l,K as y,cJ as f,bX as S}from"./vendor.c414a8c9.js";const P={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}};class F{constructor(t,s,r,e){this.parsedUrl=t,this.portalItem=s,this.apiKey=r,this.signal=e,this.rootDocument=null;const o=this.parsedUrl.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);o&&(this.urlParts={root:o[1],layerId:parseInt(o[2],10)})}async fetch(){var r;if(!this.urlParts)return null;const t=(r=this.portalItem)!=null?r:await this._portalItemFromServiceItemId();if(n(t))return this._loadFromUrl();const s=await this._findAndLoadRelatedPortalItem(t);return n(s)?null:this._loadFeatureLayerFromPortalItem(s)}async fetchPortalItem(){var s;if(!this.urlParts)return null;const t=(s=this.portalItem)!=null?s:await this._portalItemFromServiceItemId();return n(t)?null:this._findAndLoadRelatedPortalItem(t)}async _fetchRootDocument(){if(h(this.rootDocument))return this.rootDocument;if(n(this.urlParts))return this.rootDocument={},{};const t={query:{f:"json",token:this.apiKey},responseType:"json",signal:this.signal},s=`${this.urlParts.root}/SceneServer`;try{const r=await u(s,t);this.rootDocument=r.data}catch{this.rootDocument={}}return this.rootDocument}async _fetchServiceOwningPortalUrl(){var r;const t=(r=g)==null?void 0:r.findServerInfo(this.parsedUrl.path);if(t==null?void 0:t.owningSystemUrl)return t.owningSystemUrl;const s=this.parsedUrl.path.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const e=(await u(s,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(e)return e}catch(e){l(e)}return null}async _findAndLoadRelatedPortalItem(t){try{return(await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find(s=>s.type==="Feature Service")||null}catch(s){return l(s),null}}async _loadFeatureLayerFromPortalItem(t){await t.load({signal:this.signal});const s=await this._findMatchingAssociatedSublayerUrl(t.url);return new y({url:s,portalItem:t}).load({signal:this.signal})}async _loadFromUrl(){const t=await this._findMatchingAssociatedSublayerUrl(`${this.urlParts.root}/FeatureServer`);return new y({url:t}).load({signal:this.signal})}async _findMatchingAssociatedSublayerUrl(t){const s=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),r={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},e=this.urlParts.layerId,o=this._fetchRootDocument(),m=u(s,r),[c,d]=await Promise.all([m,o]),p=d&&d.layers,a=c.data&&c.data.layers;if(!Array.isArray(a))throw new Error("expected layers array");if(Array.isArray(p)){for(let i=0;i<Math.min(p.length,a.length);i++)if(p[i].id===e)return`${s}/${a[i].id}`}else if(e<a.length)return`${s}/${a[e].id}`;throw new Error("could not find matching associated sublayer")}async _portalItemFromServiceItemId(){const t=(await this._fetchRootDocument()).serviceItemId;if(!t)return null;const s=new f({id:t,apiKey:this.apiKey}),r=await this._fetchServiceOwningPortalUrl();h(r)&&(s.portal=new S({url:r}));try{return s.load({signal:this.signal})}catch(e){return l(e),null}}}export{F as l,P as t};
