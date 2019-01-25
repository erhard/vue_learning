import Vue from 'vue';
import Login from './components/Login.vue';
import store from './store';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(Login),
}).$mount('#app');
