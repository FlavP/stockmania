import Vue from 'vue';
import Vuex from 'vuex';
import getters from './modules/getters.js';
import mutations from './modules/mutations.js';

Vue.use(Vuex);

const stocksAvailable = [
    { company : 'BMW', price : 75 },
    { company : 'Twitter', price : 9 },
    { company : 'Apple', price : 312 },
    { company : 'Google', price : 114 },
  ];

let stocksBought = [];

export const store = new Vuex.Store({
  namespaced: true,
  state: {
    money: 10000,
    stocksAvailable,
    stocksBought,
  },
  getters,
  mutations
});
