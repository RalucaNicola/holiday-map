import{an as s,n as o}from"./vendor.c414a8c9.js";import{I as d}from"./Utils.d29fb889.js";import{t as a}from"./BaseGraphicContainer.1378f3d2.js";import{_ as h}from"./enums.de935fa5.js";let t=class extends a{doRender(r){r.drawPhase===d.HIGHLIGHT&&super.doRender(r)}renderChildren(r){if(this.attributeView.bindTextures(r.context),!this.children.some(n=>n.hasData))return;super.renderChildren(r);const{painter:i}=r,e=i.effects.highlight;e.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(h.COLOR_BUFFER_BIT),this._renderChildren(r,e.defines.concat(["highlightAll"])),e.draw(r),e.unbind()}};t=s([o("esri.views.2d.layers.support.HighlightGraphicContainer")],t);const f=t;export{f as n};
