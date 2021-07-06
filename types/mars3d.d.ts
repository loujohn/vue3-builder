declare module 'mars3d' {
  import type Cesium from 'cesium';
  class layer {
    static createLayer(viewer: Cesium.Viewer | undefined, arg: any): any;

    static GeoJsonLayer: any;
  }
  export function createMap(arg0: any): Cesium.Viewer;
}
