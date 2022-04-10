import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import MzUI from '@/packages/mzui.vue';
import '@/utils/touchEmulator';
createApp(App).use(router).use(MzUI).mount('#app');
