import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/pages/Home.vue"
import PageNotFound from "../components/pages/PageNotFound.vue";
import Portfolio from "../components/pages/Portfolio.vue";
import Stocks from "../components/pages/Stocks.vue"

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks },
    { path: "*", component: PageNotFound }
  ]
})
