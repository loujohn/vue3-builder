import { createApp } from 'vue';
import App from './App.vue';
import ant from './lib/ant';
import { setupRouter } from './router/index';
import store from './store';

import './style/tailwind.css';
if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.less');
}

const app = createApp(App);

app.use(ant).use(store).mount('#app');
setupRouter(app);
