<template>
  <div class="row">
    <div class="col-md-6" v-for="stock in stocks">
      <div class="card">
        <div class="card-body stock">
          <div class="text-green card-title">
            <h3 class="d-inline">{{ stock.company }}</h3>
            <span class="text-small">(Price: {{ stock.price }})</span>
          </div>
          <div class="input-group mb-3">
            <input class="form-control" placeholder="Quantity" type="text" v-model="bought[stock.company]">
            <button class="btn btn-success btn-sm"
                                  @click="buyStocks({
                                    'company' : stock.company,
                                    'price'   : parseFloat(stock.price),
                                    'amount'  : bought[stock.company]
                                  })"
                          >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {EventBus} from "../../main";
    export default {
        name: "Stocks",

        data() {
            return {
                bought : [],
                stocks : []
            };
        },

        methods: {
            buyStocks(stocksBought) {
                this.bought = [];
                if (stocksBought.amount > 0) {
                    this.$store.commit('buyStocks', {
                        company: stocksBought.company,
                        price: stocksBought.price,
                        amount: stocksBought.amount
                    });
                }
                else {
                    alert("You must fill in the number of shares you want to purchase");
                }
            },
        },

        computed: {
            loadStocks() {
                this.stocks = this.$store.getters.loadStocks;
            },
        },

        created() {
            this.loadStocks;
          EventBus.$on('reloadStocks', () => {
            this.loadStocks;
          });
        },

    }
</script>

<style scoped>

  .text-green {
    background-color: lightgreen;
    color: darkgreen;
  }

  .stock {
    border: 1px solid #c7c3bf;
    padding: 0
  }

  button {
    margin-left: 300px;
  }
</style>
