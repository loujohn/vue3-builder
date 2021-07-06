import { ICDN } from '/#/vite';

export const cdn: ICDN = {
  css: [
    '/js/cesiumjs/Cesium/Widgets/widgets.css',
    '/js/cesiumjs/mars3d/mars3d.css',
    '/resources/fonts/font-icomoon/style.css',
    '/resources/fonts/font-awesome/css/font-awesome.min.css',
    '/resources/fonts/font-linearicons/style.css',
    '/resources/fonts/font-feathericons/dist/feather.css'
  ],
  js: [
    { packageName: 'Cesium', url: '/js/cesiumjs/Cesium/Cesium.js' },
    { packageName: 'mars3d', url: '/js/cesiumjs/mars3d/mars3d.js' }
  ]
};
