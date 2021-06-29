import { createApp } from 'vue';
import App from './App.vue';
import ant from './lib/ant';

const app = createApp(App);

app.use(ant).mount('#app');
