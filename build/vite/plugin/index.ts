import type { Plugin } from 'vite';

import vue from '@vitejs/plugin-vue';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue()
  ];
  return vitePlugins;
}
