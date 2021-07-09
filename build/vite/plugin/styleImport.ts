import vitePluginImp from 'vite-plugin-imp';

export function configStyleImportPlugin(isBuild: boolean) {
  if (!isBuild) return [];
  const pwaPlugin = vitePluginImp({
    libList: [
      {
        libName: 'ant-design-vue',
        style(name) {
          if (/popconfirm/.test(name)) {
            // support multiple style file path to import
            return ['ant-design-vue/es/button/style/index.css', 'ant-design-vue/es/popover/style/index.css'];
          }
          return `ant-design-vue/es/${name}/style/index.css`;
        }
      }
    ]
  });
  return pwaPlugin;
}
