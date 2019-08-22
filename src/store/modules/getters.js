const getters = {
  loadStocks: (state) => {
    return state.stocksAvailable;
  },
  getStocks: (state) => {
    return state.stocksBought;
  }
};

export default getters;
