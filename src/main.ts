import { createApp } from 'vue';
import App from './App.vue';
import ant from './lib/ant';
import { setupRouter } from './router/index';
import { setupStore } from './store';
import { setupI18n } from '@/locales/setupI18n';

import PerfectScrollbar from 'vue3-perfect-scrollbar';

if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.less');
}

async function bootstrap() {
  const app = createApp(App);
  setupStore(app);
  setupRouter(app);
  await setupI18n(app);
  app.use(ant);
  app.use(PerfectScrollbar);
  app.mount('#app', true);
}
bootstrap();
