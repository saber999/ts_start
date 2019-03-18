import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import errTips from './package/index';
Vue.config.productionTip = false;
Vue.use(errTips)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
