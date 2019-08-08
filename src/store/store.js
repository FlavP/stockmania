import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const prices = [
    { company : 'bmw', price : 75 },
    { company : 'twitter', price : 9 },
    { company : 'apple', price : 312 },
    { company : 'google', price : 114 },
  ];

let stocks = [];

export const store = new Vuex.Store({
  state: {
    money: 10000,
    prices,
    stocks
  },
  getters: {
    getPrice: (state) => company => {
      return state.prices.find(price => price.company === company);
    }
  },
  mutations: {
    buyStocks(state, payload) {
      let found = false;
      for (let stock of state.stocks){
        if (stock.company === payload.company){
          stock.amount += payload.amount;
          found = true;
        }
      }
      if (!found)
        state.stocks.push(payload);
    }
  }
});
