define(["./when-208fe5b0","./Cartesian2-256b826c","./Transforms-6b4b3d50","./ComponentDatatype-6705482d","./Check-9b6261ac","./GeometryAttribute-f3b8986e","./GeometryAttributes-b0b294d8","./IndexDatatype-23f67b7a","./Math-df168bfc","./VertexFormat-50670d5e","./WallGeometryLibrary-4a24f71d","./RuntimeError-7f634f5d","./WebGLConstants-76bb35d1","./arrayRemoveDuplicates-31edbb52","./PolylinePipeline-d65ff259","./EllipsoidGeodesic-83c2c979","./EllipsoidRhumbLine-0f3b1a9d","./IntersectionTests-93618b02","./Plane-0ce78a72"],function(S,I,N,M,e,W,B,U,q,p,J,t,a,i,n,r,o,s,m){"use strict";var Y=new I.Cartesian3,Z=new I.Cartesian3,j=new I.Cartesian3,K=new I.Cartesian3,Q=new I.Cartesian3,X=new I.Cartesian3,$=new I.Cartesian3;function d(e){var t=(e=S.defaultValue(e,S.defaultValue.EMPTY_OBJECT)).positions,a=e.maximumHeights,i=e.minimumHeights,n=S.defaultValue(e.vertexFormat,p.VertexFormat.DEFAULT),r=S.defaultValue(e.granularity,q.CesiumMath.RADIANS_PER_DEGREE),e=S.defaultValue(e.ellipsoid,I.Ellipsoid.WGS84);this._positions=t,this._minimumHeights=i,this._maximumHeights=a,this._vertexFormat=p.VertexFormat.clone(n),this._granularity=r,this._ellipsoid=I.Ellipsoid.clone(e),this._workerName="createWallGeometry";t=1+t.length*I.Cartesian3.packedLength+2;S.defined(i)&&(t+=i.length),S.defined(a)&&(t+=a.length),this.packedLength=t+I.Ellipsoid.packedLength+p.VertexFormat.packedLength+1}d.pack=function(e,t,a){var i;a=S.defaultValue(a,0);var n=e._positions,r=n.length;for(t[a++]=r,i=0;i<r;++i,a+=I.Cartesian3.packedLength)I.Cartesian3.pack(n[i],t,a);var o=e._minimumHeights,r=S.defined(o)?o.length:0;if(t[a++]=r,S.defined(o))for(i=0;i<r;++i)t[a++]=o[i];var s=e._maximumHeights;if(r=S.defined(s)?s.length:0,t[a++]=r,S.defined(s))for(i=0;i<r;++i)t[a++]=s[i];return I.Ellipsoid.pack(e._ellipsoid,t,a),a+=I.Ellipsoid.packedLength,p.VertexFormat.pack(e._vertexFormat,t,a),t[a+=p.VertexFormat.packedLength]=e._granularity,t};var c=I.Ellipsoid.clone(I.Ellipsoid.UNIT_SPHERE),y=new p.VertexFormat,f={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:c,vertexFormat:y,granularity:void 0};return d.unpack=function(e,t,a){t=S.defaultValue(t,0);for(var i,n,r=e[t++],o=new Array(r),s=0;s<r;++s,t+=I.Cartesian3.packedLength)o[s]=I.Cartesian3.unpack(e,t);if(0<(r=e[t++]))for(i=new Array(r),s=0;s<r;++s)i[s]=e[t++];if(0<(r=e[t++]))for(n=new Array(r),s=0;s<r;++s)n[s]=e[t++];var m=I.Ellipsoid.unpack(e,t,c);t+=I.Ellipsoid.packedLength;var l=p.VertexFormat.unpack(e,t,y),u=e[t+=p.VertexFormat.packedLength];return S.defined(a)?(a._positions=o,a._minimumHeights=i,a._maximumHeights=n,a._ellipsoid=I.Ellipsoid.clone(m,a._ellipsoid),a._vertexFormat=p.VertexFormat.clone(l,a._vertexFormat),a._granularity=u,a):(f.positions=o,f.minimumHeights=i,f.maximumHeights=n,f.granularity=u,new d(f))},d.fromConstantHeights=function(e){var t=(e=S.defaultValue(e,S.defaultValue.EMPTY_OBJECT)).positions,a=e.minimumHeight,i=e.maximumHeight,n=S.defined(a),r=S.defined(i);if(n||r)for(var o=t.length,s=n?new Array(o):void 0,m=r?new Array(o):void 0,l=0;l<o;++l)n&&(s[l]=a),r&&(m[l]=i);return new d({positions:t,maximumHeights:m,minimumHeights:s,ellipsoid:e.ellipsoid,vertexFormat:e.vertexFormat})},d.createGeometry=function(e){var t=e._positions,a=e._minimumHeights,i=e._maximumHeights,n=e._vertexFormat,r=e._granularity,o=e._ellipsoid,i=J.WallGeometryLibrary.computePositions(o,t,i,a,r,!0);if(S.defined(i)){for(var s=i.bottomPositions,m=i.topPositions,a=i.numCorners,l=m.length,r=2*l,u=n.position?new Float64Array(r):void 0,p=n.normal?new Float32Array(r):void 0,d=n.tangent?new Float32Array(r):void 0,c=n.bitangent?new Float32Array(r):void 0,y=n.st?new Float32Array(r/3*2):void 0,f=0,g=0,h=0,b=0,v=0,C=$,x=X,A=Q,_=!0,E=0,w=1/((l/=3)-a-1),F=0;F<l;++F){var L,k=3*F,H=I.Cartesian3.fromArray(m,k,Y),V=I.Cartesian3.fromArray(s,k,Z);n.position&&(u[f++]=V.x,u[f++]=V.y,u[f++]=V.z,u[f++]=H.x,u[f++]=H.y,u[f++]=H.z),n.st&&(y[v++]=E,y[v++]=0,y[v++]=E,y[v++]=1),(n.normal||n.tangent||n.bitangent)&&(L=I.Cartesian3.clone(I.Cartesian3.ZERO,K),V=I.Cartesian3.subtract(H,o.geodeticSurfaceNormal(H,Z),Z),F+1<l&&(L=I.Cartesian3.fromArray(m,3+k,K)),_&&(k=I.Cartesian3.subtract(L,H,j),V=I.Cartesian3.subtract(V,H,Y),C=I.Cartesian3.normalize(I.Cartesian3.cross(V,k,C),C),_=!1),I.Cartesian3.equalsEpsilon(H,L,q.CesiumMath.EPSILON10)?_=!0:(E+=w,n.tangent&&(x=I.Cartesian3.normalize(I.Cartesian3.subtract(L,H,x),x)),n.bitangent&&(A=I.Cartesian3.normalize(I.Cartesian3.cross(C,x,A),A))),n.normal&&(p[g++]=C.x,p[g++]=C.y,p[g++]=C.z,p[g++]=C.x,p[g++]=C.y,p[g++]=C.z),n.tangent&&(d[b++]=x.x,d[b++]=x.y,d[b++]=x.z,d[b++]=x.x,d[b++]=x.y,d[b++]=x.z),n.bitangent&&(c[h++]=A.x,c[h++]=A.y,c[h++]=A.z,c[h++]=A.x,c[h++]=A.y,c[h++]=A.z))}i=new B.GeometryAttributes;n.position&&(i.position=new W.GeometryAttribute({componentDatatype:M.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u})),n.normal&&(i.normal=new W.GeometryAttribute({componentDatatype:M.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:p})),n.tangent&&(i.tangent=new W.GeometryAttribute({componentDatatype:M.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:d})),n.bitangent&&(i.bitangent=new W.GeometryAttribute({componentDatatype:M.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:c})),n.st&&(i.st=new W.GeometryAttribute({componentDatatype:M.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:y}));var G=r/3;r-=6*(a+1);var D=U.IndexDatatype.createTypedArray(G,r),P=0;for(F=0;F<G-2;F+=2){var T=F,z=F+2,O=I.Cartesian3.fromArray(u,3*T,Y),R=I.Cartesian3.fromArray(u,3*z,Z);I.Cartesian3.equalsEpsilon(O,R,q.CesiumMath.EPSILON10)||(O=F+1,R=F+3,D[P++]=O,D[P++]=T,D[P++]=R,D[P++]=R,D[P++]=T,D[P++]=z)}return new W.Geometry({attributes:i,indices:D,primitiveType:W.PrimitiveType.TRIANGLES,boundingSphere:new N.BoundingSphere.fromVertices(u)})}},function(e,t){return(e=S.defined(t)?d.unpack(e,t):e)._ellipsoid=I.Ellipsoid.clone(e._ellipsoid),d.createGeometry(e)}});