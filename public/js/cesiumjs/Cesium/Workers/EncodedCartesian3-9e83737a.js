define(["exports","./Cartesian2-256b826c","./Check-9b6261ac","./when-208fe5b0"],function(e,n,i,h){"use strict";function a(){this.high=n.Cartesian3.clone(n.Cartesian3.ZERO),this.low=n.Cartesian3.clone(n.Cartesian3.ZERO)}a.encode=function(e,n){var i;return h.defined(n)||(n={high:0,low:0}),0<=e?(i=65536*Math.floor(e/65536),n.high=i,n.low=e-i):(i=65536*Math.floor(-e/65536),n.high=-i,n.low=e+i),n};var r={high:0,low:0};a.fromCartesian=function(e,n){var i=(n=!h.defined(n)?new a:n).high,o=n.low;return a.encode(e.x,r),i.x=r.high,o.x=r.low,a.encode(e.y,r),i.y=r.high,o.y=r.low,a.encode(e.z,r),i.z=r.high,o.z=r.low,n};var t=new a;a.writeElements=function(e,n,i){a.fromCartesian(e,t);var o=t.high,e=t.low;n[i]=o.x,n[i+1]=o.y,n[i+2]=o.z,n[i+3]=e.x,n[i+4]=e.y,n[i+5]=e.z},e.EncodedCartesian3=a});
