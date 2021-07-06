define(["./Cartesian2-256b826c","./Check-9b6261ac","./when-208fe5b0","./EllipseOutlineGeometry-98507ad5","./Math-df168bfc","./GeometryOffsetAttribute-6df3a23d","./Transforms-6b4b3d50","./RuntimeError-7f634f5d","./ComponentDatatype-6705482d","./WebGLConstants-76bb35d1","./EllipseGeometryLibrary-a441e5a8","./GeometryAttribute-f3b8986e","./GeometryAttributes-b0b294d8","./IndexDatatype-23f67b7a"],function(r,e,l,n,i,t,s,o,a,d,u,m,c,p){"use strict";function y(e){var i=(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).radius,e={center:e.center,semiMajorAxis:i,semiMinorAxis:i,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,numberOfVerticalLines:e.numberOfVerticalLines};this._ellipseGeometry=new n.EllipseOutlineGeometry(e),this._workerName="createCircleOutlineGeometry"}y.packedLength=n.EllipseOutlineGeometry.packedLength,y.pack=function(e,i,t){return n.EllipseOutlineGeometry.pack(e._ellipseGeometry,i,t)};var f=new n.EllipseOutlineGeometry({center:new r.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),G={center:new r.Cartesian3,radius:void 0,ellipsoid:r.Ellipsoid.clone(r.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,numberOfVerticalLines:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0};return y.unpack=function(e,i,t){i=n.EllipseOutlineGeometry.unpack(e,i,f);return G.center=r.Cartesian3.clone(i._center,G.center),G.ellipsoid=r.Ellipsoid.clone(i._ellipsoid,G.ellipsoid),G.height=i._height,G.extrudedHeight=i._extrudedHeight,G.granularity=i._granularity,G.numberOfVerticalLines=i._numberOfVerticalLines,l.defined(t)?(G.semiMajorAxis=i._semiMajorAxis,G.semiMinorAxis=i._semiMinorAxis,t._ellipseGeometry=new n.EllipseOutlineGeometry(G),t):(G.radius=i._semiMajorAxis,new y(G))},y.createGeometry=function(e){return n.EllipseOutlineGeometry.createGeometry(e._ellipseGeometry)},function(e,i){return(e=l.defined(i)?y.unpack(e,i):e)._ellipseGeometry._center=r.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=r.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),y.createGeometry(e)}});
