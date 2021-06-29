import { createApp } from 'vue';
import App from './App.vue';
import ant from './lib/ant';

import './style/tailwind.css';

const app = createApp(App);

app.use(ant).mount('#app');
