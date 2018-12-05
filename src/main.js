// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import VueAxios from 'vue-axios';
import App from './App';
import router from './router';
import axios from './backend/axios';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(Vuetify, {
  iconfont: 'mdi',
});


Vue.axios.get('https://api-prod.andela.com', {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
}).then((response) => {
  // eslint-disable-next-line no-console
  console.log(response.data);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>',
});
