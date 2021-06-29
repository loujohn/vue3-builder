import styleImport from 'vite-plugin-style-import';

export function configStyleImportPlugin(isBuild: boolean) {
  if (!isBuild) return [];
  const pwaPlugin = styleImport({
    libs: [
      {
        libraryName: 'ant-design-vue',
        esModule: true,
        resolveStyle: (name) => {
          return `ant-design-vue/es/${name}/style/index.css`;
        }
      }
    ]
  });
  return pwaPlugin;
}
