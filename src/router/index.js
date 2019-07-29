import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/pages/Home.vue"
import PageNotFound from "../components/pages/PageNotFound.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '', component: Home },
    { path: "*", component: PageNotFound }
  ]
})
