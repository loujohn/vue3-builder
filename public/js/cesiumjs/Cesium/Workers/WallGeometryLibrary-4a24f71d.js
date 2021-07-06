define(["exports","./arrayRemoveDuplicates-31edbb52","./Cartesian2-256b826c","./when-208fe5b0","./Math-df168bfc","./PolylinePipeline-d65ff259"],function(e,P,A,C,w,m){"use strict";var i={};var b=new A.Cartographic,M=new A.Cartographic;function E(e,i,t,r){var a=(i=P.arrayRemoveDuplicates(i,A.Cartesian3.equalsEpsilon)).length;if(!(a<2)){var n=C.defined(r),o=C.defined(t),l=new Array(a),s=new Array(a),h=new Array(a),g=i[0];l[0]=g;var p=e.cartesianToCartographic(g,b);o&&(p.height=t[0]),s[0]=p.height,h[0]=n?r[0]:0;for(var u,c,d=s[0]===h[0],f=1,v=1;v<a;++v){var y=i[v],m=e.cartesianToCartographic(y,M);o&&(m.height=t[v]),d=d&&0===m.height,u=p,c=m,w.CesiumMath.equalsEpsilon(u.latitude,c.latitude,w.CesiumMath.EPSILON10)&&w.CesiumMath.equalsEpsilon(u.longitude,c.longitude,w.CesiumMath.EPSILON10)?p.height<m.height&&(s[f-1]=m.height):(l[f]=y,s[f]=m.height,h[f]=n?r[v]:0,d=d&&s[f]===h[f],A.Cartographic.clone(m,p),++f)}if(!(d||f<2))return l.length=f,s.length=f,h.length=f,{positions:l,topHeights:s,bottomHeights:h}}}var F=new Array(2),H=new Array(2),L={positions:void 0,height:void 0,granularity:void 0,ellipsoid:void 0};i.computePositions=function(e,i,t,r,a,n){var o=E(e,i,t,r);if(C.defined(o)){i=o.positions,t=o.topHeights,r=o.bottomHeights;var l=i.length,o=l-2,s=w.CesiumMath.chordLength(a,e.maximumRadius),h=L;if(h.minDistance=s,h.ellipsoid=e,n){for(var g=0,p=0;p<l-1;p++)g+=m.PolylinePipeline.numberOfPoints(i[p],i[p+1],s)+1;var u=new Float64Array(3*g),c=new Float64Array(3*g),d=F,f=H;h.positions=d,h.height=f;var v=0;for(p=0;p<l-1;p++){d[0]=i[p],d[1]=i[p+1],f[0]=t[p],f[1]=t[p+1];var y=m.PolylinePipeline.generateArc(h);u.set(y,v),f[0]=r[p],f[1]=r[p+1],c.set(m.PolylinePipeline.generateArc(h),v),v+=y.length}}else h.positions=i,h.height=t,u=new Float64Array(m.PolylinePipeline.generateArc(h)),h.height=r,c=new Float64Array(m.PolylinePipeline.generateArc(h));return{bottomPositions:c,topPositions:u,numCorners:o}}},e.WallGeometryLibrary=i});