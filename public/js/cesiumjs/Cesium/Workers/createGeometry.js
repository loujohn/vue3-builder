define(["./when-208fe5b0","./PrimitivePipeline-e3b3f5f3","./createTaskProcessorWorker","./Transforms-6b4b3d50","./Cartesian2-256b826c","./Check-9b6261ac","./Math-df168bfc","./RuntimeError-7f634f5d","./ComponentDatatype-6705482d","./WebGLConstants-76bb35d1","./GeometryAttribute-f3b8986e","./GeometryAttributes-b0b294d8","./GeometryPipeline-8a57f912","./AttributeCompression-2224300b","./EncodedCartesian3-9e83737a","./IndexDatatype-23f67b7a","./IntersectionTests-93618b02","./Plane-0ce78a72","./WebMercatorProjection-636024c6"],function(b,c,e,r,t,n,o,i,a,s,f,u,d,m,p,l,y,P,k){"use strict";var C={};return e(function(e,r){for(var t=e.subTasks,n=t.length,o=new Array(n),i=0;i<n;i++){var a=t[i],s=a.geometry,f=a.moduleName;b.defined(f)?(f=function(e){var r=C[e];return b.defined(r)||("object"==typeof exports?C[r]=r=require("Workers/"+e):require(["Workers/"+e],function(e){C[r=e]=e})),r}(f),o[i]=f(s,a.offset)):o[i]=s}return b.when.all(o,function(e){return c.PrimitivePipeline.packCreateGeometryResults(e,r)})})});
