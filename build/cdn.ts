import { ICDN } from '/#/vite';

export const cdn: ICDN = {
  css: [
    '/resources/fonts/font-icomoon/style.css',
    '/resources/fonts/font-awesome/css/font-awesome.min.css',
    '/resources/fonts/font-linearicons/style.css',
    '/resources/fonts/font-feathericons/dist/feather.css',
    './js/linkgis/linkgis.1.4.1.css'
  ],
  js: [{ packageName: 'linkgisgl', url: './js/linkgis/linkgis.1.4.1.min.js' }]
};
