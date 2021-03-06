import type { Plugin } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { configStyleImportPlugin } from './styleImport';
import { configSvgIconsPlugin } from './svgSprite';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
    vueJsx()
  ];
  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild));
  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin(isBuild));
  return vitePlugins;
}
