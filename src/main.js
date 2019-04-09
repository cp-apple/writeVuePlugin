import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MyPlugin from '@/plugin/main.js';
import MyMsg from '@/plugin/message/index.js';

Vue.config.productionTip = false;
Vue.use(MyPlugin)
  .use(MyMsg);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
