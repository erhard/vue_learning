import Vue from 'vue';
import Login from './components/Login.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(Login),
}).$mount('#app');
