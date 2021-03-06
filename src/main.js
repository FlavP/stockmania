// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/store'
import VueResource from 'vue-resource'

export const EventBus = new Vue();

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.http.options.root = 'https://stocks-a8150.firebaseio.com/traded.json';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
