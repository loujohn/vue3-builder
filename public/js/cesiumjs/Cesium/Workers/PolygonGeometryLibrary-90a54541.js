define(["exports","./ArcType-dc1c5aee","./arrayRemoveDuplicates-31edbb52","./Cartesian2-256b826c","./ComponentDatatype-6705482d","./when-208fe5b0","./EllipsoidRhumbLine-0f3b1a9d","./GeometryAttribute-f3b8986e","./GeometryAttributes-b0b294d8","./GeometryPipeline-8a57f912","./IndexDatatype-23f67b7a","./Math-df168bfc","./Transforms-6b4b3d50","./PolygonPipeline-99979152"],function(e,I,x,E,A,P,f,_,G,p,L,M,d,D){"use strict";function S(){this._array=[],this._offset=0,this._length=0}Object.defineProperties(S.prototype,{length:{get:function(){return this._length}}}),S.prototype.enqueue=function(e){this._array.push(e),this._length++},S.prototype.dequeue=function(){if(0!==this._length){var e=this._array,t=this._offset,r=e[t];return e[t]=void 0,10<++t&&2*t>e.length&&(this._array=e.slice(t),t=0),this._offset=t,this._length--,r}},S.prototype.peek=function(){if(0!==this._length)return this._array[this._offset]},S.prototype.contains=function(e){return-1!==this._array.indexOf(e)},S.prototype.clear=function(){this._array.length=this._offset=this._length=0},S.prototype.sort=function(e){0<this._offset&&(this._array=this._array.slice(this._offset),this._offset=0),this._array.sort(e)};var R={computeHierarchyPackedLength:function(e){for(var t=0,r=[e];0<r.length;){var i=r.pop();if(P.defined(i)){t+=2;var n=i.positions,a=i.holes;if(P.defined(n)&&(t+=n.length*E.Cartesian3.packedLength),P.defined(a))for(var o=a.length,s=0;s<o;++s)r.push(a[s])}}return t},packPolygonHierarchy:function(e,t,r){for(var i=[e];0<i.length;){var n=i.pop();if(P.defined(n)){var a=n.positions,o=n.holes;if(t[r++]=P.defined(a)?a.length:0,t[r++]=P.defined(o)?o.length:0,P.defined(a))for(var s=a.length,u=0;u<s;++u,r+=3)E.Cartesian3.pack(a[u],t,r);if(P.defined(o))for(var l=o.length,h=0;h<l;++h)i.push(o[h])}}return r},unpackPolygonHierarchy:function(e,t){for(var r=e[t++],i=e[t++],n=new Array(r),a=0<i?new Array(i):void 0,o=0;o<r;++o,t+=E.Cartesian3.packedLength)n[o]=E.Cartesian3.unpack(e,t);for(var s=0;s<i;++s)a[s]=R.unpackPolygonHierarchy(e,t),t=a[s].startingIndex,delete a[s].startingIndex;return{positions:n,holes:a,startingIndex:t}}},y=new E.Cartesian3;R.subdivideLineCount=function(e,t,r){r=E.Cartesian3.distance(e,t)/r,r=Math.max(0,Math.ceil(M.CesiumMath.log2(r)));return Math.pow(2,r)};var g=new E.Cartographic,m=new E.Cartographic,v=new E.Cartographic,C=new E.Cartesian3;R.subdivideRhumbLineCount=function(e,t,r,i){t=e.cartesianToCartographic(t,g),r=e.cartesianToCartographic(r,m),i=new f.EllipsoidRhumbLine(t,r,e).surfaceDistance/i,i=Math.max(0,Math.ceil(M.CesiumMath.log2(i)));return Math.pow(2,i)},R.subdivideLine=function(e,t,r,i){var n=R.subdivideLineCount(e,t,r),a=E.Cartesian3.distance(e,t),o=a/n,s=i=!P.defined(i)?[]:i;s.length=3*n;for(var u,l,h,c=0,f=0;f<n;f++){var p=(p=e,u=t,l=f*o,h=a,E.Cartesian3.subtract(u,p,y),E.Cartesian3.multiplyByScalar(y,l/h,y),E.Cartesian3.add(p,y,y),[y.x,y.y,y.z]);s[c++]=p[0],s[c++]=p[1],s[c++]=p[2]}return s},R.subdivideRhumbLine=function(e,t,r,i,n){var t=e.cartesianToCartographic(t,g),r=e.cartesianToCartographic(r,m),a=new f.EllipsoidRhumbLine(t,r,e),i=a.surfaceDistance/i,i=Math.max(0,Math.ceil(M.CesiumMath.log2(i))),o=Math.pow(2,i),s=a.surfaceDistance/o,u=n=!P.defined(n)?[]:n;u.length=3*o;for(var l=0,h=0;h<o;h++){var c=a.interpolateUsingSurfaceDistance(h*s,v),c=e.cartographicToCartesian(c,C);u[l++]=c.x,u[l++]=c.y,u[l++]=c.z}return u};var b=new E.Cartesian3,w=new E.Cartesian3,T=new E.Cartesian3,N=new E.Cartesian3;R.scaleToGeodeticHeightExtruded=function(e,t,r,i,n){i=P.defaultValue(i,E.Ellipsoid.WGS84);var a=b,o=w,s=T,u=N;if(P.defined(e)&&P.defined(e.attributes)&&P.defined(e.attributes.position))for(var l=e.attributes.position.values,h=l.length/2,c=0;c<h;c+=3)E.Cartesian3.fromArray(l,c,s),i.geodeticSurfaceNormal(s,a),u=i.scaleToGeodeticSurface(s,u),o=E.Cartesian3.multiplyByScalar(a,r,o),o=E.Cartesian3.add(u,o,o),l[c+h]=o.x,l[c+1+h]=o.y,l[c+2+h]=o.z,n&&(u=E.Cartesian3.clone(s,u)),o=E.Cartesian3.multiplyByScalar(a,t,o),o=E.Cartesian3.add(u,o,o),l[c]=o.x,l[c+1]=o.y,l[c+2]=o.z;return e},R.polygonOutlinesFromHierarchy=function(e,t,r){var i,n,a=[],o=new S;for(o.enqueue(e);0!==o.length;){var s=o.dequeue(),u=s.positions;if(t)for(n=u.length,h=0;h<n;h++)r.scaleToGeodeticSurface(u[h],u[h]);if(!((u=x.arrayRemoveDuplicates(u,E.Cartesian3.equalsEpsilon,!0)).length<3)){for(var l=s.holes?s.holes.length:0,h=0;h<l;h++){var c=s.holes[h],f=c.positions;if(t)for(n=f.length,i=0;i<n;++i)r.scaleToGeodeticSurface(f[i],f[i]);if(!((f=x.arrayRemoveDuplicates(f,E.Cartesian3.equalsEpsilon,!0)).length<3)){a.push(f);var p=0;for(P.defined(c.holes)&&(p=c.holes.length),i=0;i<p;i++)o.enqueue(c.holes[i])}}a.push(u)}}return a},R.polygonsFromHierarchy=function(e,t,r,i){var n=[],a=[],o=new S;for(o.enqueue(e);0!==o.length;){var s,u=o.dequeue(),l=u.positions,h=u.holes;if(r)for(s=l.length,v=0;v<s;v++)i.scaleToGeodeticSurface(l[v],l[v]);if(!((l=x.arrayRemoveDuplicates(l,E.Cartesian3.equalsEpsilon,!0)).length<3)){var c=t(l);if(P.defined(c)){var f=[],p=D.PolygonPipeline.computeWindingOrder2D(c);p===D.WindingOrder.CLOCKWISE&&(c.reverse(),l=l.slice().reverse());for(var d,y=l.slice(),g=P.defined(h)?h.length:0,m=[],v=0;v<g;v++){var C=h[v],b=C.positions;if(r)for(s=b.length,d=0;d<s;++d)i.scaleToGeodeticSurface(b[d],b[d]);if(!((b=x.arrayRemoveDuplicates(b,E.Cartesian3.equalsEpsilon,!0)).length<3)){var w=t(b);if(P.defined(w)){D.PolygonPipeline.computeWindingOrder2D(w)===D.WindingOrder.CLOCKWISE&&(w.reverse(),b=b.slice().reverse()),m.push(b),f.push(y.length);var y=y.concat(b),c=c.concat(w),T=0;for(P.defined(C.holes)&&(T=C.holes.length),d=0;d<T;d++)o.enqueue(C.holes[d])}}}n.push({outerRing:l,holes:m}),a.push({positions:y,positions2D:c,holes:f})}}}return{hierarchy:n,polygons:a}};var O=new E.Cartesian2,q=new E.Cartesian3,B=new d.Quaternion,H=new d.Matrix3;R.computeBoundingRectangle=function(e,t,r,i,n){for(var i=d.Quaternion.fromAxisAngle(e,i,B),a=d.Matrix3.fromQuaternion(i,H),o=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,u=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,h=r.length,c=0;c<h;++c){var f=E.Cartesian3.clone(r[c],q);d.Matrix3.multiplyByVector(a,f,f);f=t(f,O);P.defined(f)&&(o=Math.min(o,f.x),s=Math.max(s,f.x),u=Math.min(u,f.y),l=Math.max(l,f.y))}return n.x=o,n.y=u,n.width=s-o,n.height=l-u,n},R.createGeometryFromPositions=function(e,t,r,i,n,a){var o=D.PolygonPipeline.triangulate(t.positions2D,t.holes);o.length<3&&(o=[0,1,2]);var s=t.positions;if(i){for(var u=s.length,l=new Array(3*u),h=0,c=0;c<u;c++){var f=s[c];l[h++]=f.x,l[h++]=f.y,l[h++]=f.z}i=new _.Geometry({attributes:{position:new _.GeometryAttribute({componentDatatype:A.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:l})},indices:o,primitiveType:_.PrimitiveType.TRIANGLES});return n.normal?p.GeometryPipeline.computeNormal(i):i}return a===I.ArcType.GEODESIC?D.PolygonPipeline.computeSubdivision(e,s,o,r):a===I.ArcType.RHUMB?D.PolygonPipeline.computeRhumbLineSubdivision(e,s,o,r):void 0};var k=[],z=new E.Cartesian3,W=new E.Cartesian3;R.computeWallGeometry=function(e,t,r,i,n){var a,o,s,u=e.length,l=0;if(i)for(o=3*u*2,a=new Array(2*o),s=0;s<u;s++)p=e[s],d=e[(s+1)%u],a[l]=a[l+o]=p.x,a[++l]=a[l+o]=p.y,a[++l]=a[l+o]=p.z,a[++l]=a[l+o]=d.x,a[++l]=a[l+o]=d.y,a[++l]=a[l+o]=d.z,++l;else{var h=M.CesiumMath.chordLength(r,t.maximumRadius),c=0;if(n===I.ArcType.GEODESIC)for(s=0;s<u;s++)c+=R.subdivideLineCount(e[s],e[(s+1)%u],h);else if(n===I.ArcType.RHUMB)for(s=0;s<u;s++)c+=R.subdivideRhumbLineCount(t,e[s],e[(s+1)%u],h);for(o=3*(c+u),a=new Array(2*o),s=0;s<u;s++){var f,p=e[s],d=e[(s+1)%u];n===I.ArcType.GEODESIC?f=R.subdivideLine(p,d,h,k):n===I.ArcType.RHUMB&&(f=R.subdivideRhumbLine(t,p,d,h,k));for(var y=f.length,g=0;g<y;++g,++l)a[l]=f[g],a[l+o]=f[g];a[l]=d.x,a[l+o]=d.x,a[++l]=d.y,a[l+o]=d.y,a[++l]=d.z,a[l+o]=d.z,++l}}var u=a.length,m=L.IndexDatatype.createTypedArray(u/3,u-6*e.length),v=0;for(u/=6,s=0;s<u;s++){var C=s,b=C+1,w=C+u,T=w+1;p=E.Cartesian3.fromArray(a,3*C,z),d=E.Cartesian3.fromArray(a,3*b,W),E.Cartesian3.equalsEpsilon(p,d,M.CesiumMath.EPSILON10,M.CesiumMath.EPSILON10)||(m[v++]=C,m[v++]=w,m[v++]=b,m[v++]=b,m[v++]=w,m[v++]=T)}return new _.Geometry({attributes:new G.GeometryAttributes({position:new _.GeometryAttribute({componentDatatype:A.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:a})}),indices:m,primitiveType:_.PrimitiveType.TRIANGLES})},e.PolygonGeometryLibrary=R});