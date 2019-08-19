import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const stocksAvailable = [
    { company : 'BMW', price : 75 },
    { company : 'Twitter', price : 9 },
    { company : 'Apple', price : 312 },
    { company : 'Google', price : 114 },
  ];

let stocksBought = [];

export const store = new Vuex.Store({
  state: {
    money: 10000,
    stocksAvailable,
    stocksBought,
  },
  getters: {
    loadStocks: (state) => {
      return state.stocksAvailable;
    },
    getStocks: (state) => {
      return state.stocksBought;
    }
  },
  mutations: {
    buyStocks(state, payload) {
      let priceObject = state.stocksAvailable.find(stock => stock.company === payload.company);
      if (state.money - payload.amount * priceObject.price > 0)
        state.money -= payload.amount * priceObject.price;
      else {
        alert("I'm afraid you are overreaching");
      }
      let found = false;
      for (let stock of state.stocksBought){
        if (stock.company === payload.company){
          stock.amount = parseFloat(stock.amount);
          stock.amount += parseFloat(payload.amount);
          stock.price  = parseFloat(payload.price);
          found = true;
        }
      }
      if (!found)
        state.stocksBought.push(payload);
    },
    sellStocks(state, payload) {
      state.money += parseFloat(payload.amount) * payload.price;
      let stockObject = state.stocksBought.find(stock => stock.company === payload.company);
      if (payload.amount === stockObject.amount){
        state.stocksBought.filter( el => el.company !== stockObject.company );
      } else {
        for (let tinyStock of state.stocksBought){
          if (tinyStock.company === payload.company){
            tinyStock.amount -= payload.amount;
          }
        }
      }
    },
    changePrices(state) {
      for(let stock of stocksAvailable){
        let ran = Math.random() * (stock.price + 1) / 9;
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        let percent = ran * plusOrMinus;
        if (stock.price < 1 && percent < 0)
          stock.price += 1;
        else
          stock.price += Math.floor(percent);
        let bought = state.stocksBought.find(bought => bought.company === stock.company);
        if (typeof bought !== 'undefined')
          bought.price = stock.price;
      }
    }
  }
});
