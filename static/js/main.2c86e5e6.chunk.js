(this.webpackJsonpannotation_tool=this.webpackJsonpannotation_tool||[]).push([[0],{13:function(e,t,a){e.exports=a(53)},18:function(e,t,a){},20:function(e,t,a){},47:function(e,t){},48:function(e,t){},49:function(e,t){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(4),o=a.n(c),r=(a(18),a(6)),l=a.n(r),s=a(11),u=a(3),b=(a(20),a(12)),f=a.n(b),v=a(42).fabric,d=a(50),m=a(51),g=new d.Reactor({debug:!0}),h=function(e){var t,a={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(a[t]=t);return a}({fabricData:null,activeObject:null}),j=new v.Canvas,O=d.Store({getInitialState:function(){return d.toImmutable({fabricData:{objects:[]},activeObject:!1})},initialize:function(){this.on(h.fabricData,this.saveFabricData),this.on(h.activeObject,this.saveActiveObject)},saveFabricData:function(e,t){return e.set("fabricData",d.toImmutable(t))},saveActiveObject:function(e,t){return e.set("activeObject",t)}});g.registerStores({fabricStore:O});var p=m({displayName:"Fabric",componentDidMount:function(){var e=o.a.findDOMNode(this);e,j.initialize(e,{height:.95*window.innerHeight,width:.9*window.innerHeight/9*16,backgroundColor:null}),j.on("mouse:up",(function(){g.dispatch(h.fabricData,j.toObject()),g.dispatch(h.activeObject,!!j.getActiveObject())})),j.on("saveData",(function(){g.dispatch(h.fabricData,j.toObject()),g.dispatch(h.activeObject,!!j.getActiveObject()),j.renderAll()}))},render:function(){return i.a.createElement("canvas",null)}}),E=m({displayName:"NewObjects",mixins:[g.ReactMixin],getDataBindings:function(){return{fabricData:["fabricStore","fabricData"],activeObject:["fabricStore","activeObject"]}},render:function(){return this.state.fabricData.get("objects").size,i.a.createElement("div",{style:{float:"right"}},i.a.createElement("button",{onClick:this.addSquare,style:{position:"relative"}},"Add Square"),i.a.createElement("button",{onClick:this.remove,style:{position:"relative"}},"Remove"))},addSquare:function(){var e="#"+((1<<24)*Math.random()|0).toString(16),t=new v.Rect({hasRotatingPoint:!1,uniScaleTransform:!0,height:50,width:50,originX:"center",originY:"center",fill:e,borderColor:"#000",opacity:".4",top:j.height/2,left:j.width/2},(function(e){console.log(e)}));j.add(t),j.setActiveObject(t),j.fire("saveData")},remove:function(){j.remove(j.getActiveObject()),j.fire("saveData")}}),w=(m({displayName:"ActiveObject",mixins:[g.ReactMixin],getDataBindings:function(){return{fabricObject:["fabricStore","fabricData","objects",0],activeObject:["fabricStore","activeObject"]}},render:function(){if(console.log(this.state.activeObject),this.state.fabricObject){var e=this.state.fabricObject.get("fill");return console.log(j.getActiveObject()),i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("b",null,"Active Object")),i.a.createElement("div",null,"fill: ",i.a.createElement("span",{style:{color:e}},this.state.fabricObject.get("fill"))),i.a.createElement("div",null,"top: ",this.state.fabricObject.get("top")),i.a.createElement("div",null,"left: ",this.state.fabricObject.get("left")),i.a.createElement("div",null,"angle: ",this.state.fabricObject.get("angle")),i.a.createElement("div",null,"scaleX: ",this.state.fabricObject.get("scaleX")),i.a.createElement("div",null,"scaleY: ",this.state.fabricObject.get("scaleY")))}return console.log(j.getActiveObject()),null}}),[]),y=!1;var S=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),r=Object(u.a)(o,2),b=(r[0],r[1],Object(n.useState)(!1)),v=Object(u.a)(b,2),d=v[0],m=v[1],g=Object(n.useState)(!1),h=Object(u.a)(g,2),O=(h[0],h[1]),S=Object(n.useState)(0),D=Object(u.a)(S,2),A=D[0],k=D[1],C=Object(n.useState)(null),R=Object(u.a)(C,2),N=R[0],M=R[1],x=Object(n.useState)(0),F=Object(u.a)(x,2),T=F[0],I=F[1],U=Object(n.useState)(0),B=Object(u.a)(U,2),J=B[0],L=B[1],P=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n,i,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="generated_annotations",a=JSON.stringify(w),n=new Blob([a],{type:"application/json"}),e.next=5,URL.createObjectURL(n);case 5:i=e.sent,(c=document.createElement("a")).href=i,c.download=t+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:"App"},i.a.createElement("div",{style:{float:"right",position:"relative"}},i.a.createElement("button",{onClick:function(e){var t=15*T;N.seekTo((N.getCurrentTime()/T*t-1)/t)}},"Prev Frame"),i.a.createElement("button",{onClick:function(e){m(!d)}},"Pause"),i.a.createElement("button",{onClick:function(e){var t=15*T;w[J]=j.toJSON(),console.log(J),console.log(w),N.seekTo((N.getCurrentTime()/T*t+1)/t)}},"Next Frame"),i.a.createElement("button",{onClick:P},"GENERATE JSON"),"Frame # ",parseInt(J),i.a.createElement(E,null)),i.a.createElement("input",{type:"file",onChange:function(e){c(URL.createObjectURL(e.target.files[0])),y=!0}}),i.a.createElement(f.a,{onProgress:function(e){console.log(e);var t=15*T;L(Math.round(e.played*t))},ref:function(e){M(e);1==y&&null!=N&&(console.log("RESET VALUES"),w=new Array(7200),y=!1)},onDuration:function(e){I(parseInt(e)),console.log(e)},url:a,width:"90%",height:"90%",playing:d,controls:!1,style:{position:"realtive",float:"left"},volume:0,muted:!0,pip:!1}),i.a.createElement(p,null),i.a.createElement("input",{width:"100%",type:"range",min:0,max:.999999,step:"any",value:A,onMouseDown:function(e){O(!0)},onChange:function(e){k(parseFloat(e.target.value))},onMouseUp:function(e){O(!1),N.seekTo(parseFloat(e.target.value))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.2c86e5e6.chunk.js.map