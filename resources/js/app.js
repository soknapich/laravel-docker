import './bootstrap';

import { createApp } from 'vue';
import router from '@/router/index';
import App from '@/App.vue';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);  // ✅ First, install Pinia
app.use(router);
app.mount('#app');