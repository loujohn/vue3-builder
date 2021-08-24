const resolveExternalsPlugin = require('vite-plugin-resolve-externals');

export function configExternal(): Plugin | Plugin[] {
  return resolveExternalsPlugin({
    cesium: 'Cesium',
    mars3d: 'mars3d',
    mapConfig: 'mapConfig',
    Map2D: 'Map2D'
  });
}
