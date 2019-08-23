<template>

<div class="row">
  <transition-group name="sfade">
    <div class="col-md-6" v-for="(stock) in stocks" :key="stock.company">
    <div class="card" v-if="stock.amount > 0">
      <div class="card-body stock">
        <div class="text-blue card-title">
          <h3 class="d-inline">{{ stock.company }}</h3>
          <span class="text-small">(Price: {{ stock.price }} | Amount: {{ stock.amount }})</span>
        </div>
        <div class="input-group mb-3 line">
          <input class="form-control" placeholder="Quantity" type="text"
                 v-model="selling[stock.company]">
          <button class="btn btn-danger btn-sm"
                  @click="sellStocks({
                                    'company' : stock.company,
                                    'price'   : parseFloat(stock.price),
                                    'amount'  : selling[stock.company]
                  })"
                  :disabled="bought[stock.company] <= 0 || !Number.isInteger(bought[stock.company])"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  </div>
  </transition-group>
</div>

</template>

<script>
  import {EventBus} from "../../main";
    export default {
        data() {
            return {
                stocks  : [],
                selling : [],
            }
        },
        name: "Portfolio",
        computed: {
            loadStocks() {
                this.stocks = this.$store.getters.getStocks;
            }
        },
        methods: {
            sellStocks(stock) {
                this.selling = [];
                let inStock = this.stocks.find(element => element.company === stock.company );
                if (parseInt(stock.amount) > parseInt(inStock.amount)){
                    alert(`You have only ${inStock.amount} stocks from ${stock.company}`);
                } else {
                    if (stock.amount > 0){
                        this.$store.commit('sellStocks', {
                            company: stock.company,
                            price: stock.price,
                            amount: stock.amount
                        });
                        this.loadStocks;
                    }
                    else {
                        alert("You must fill in the number of shares you want to purchase");
                    }
                }
            }
        },
        created() {
            this.loadStocks;
          EventBus.$on('reloadStocks', () => {
              this.loadStocks;
            })
        }
    }
</script>

<style scoped>

  .card {
    margin-top: 30px;
  }

  button {
    margin-left: 300px;
  }

  .line {
    padding: 10px;
  }

  .sfade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
    opacity: 0;
    position: absolute;
  }

  .sfade-move {
    transition: transform 1s;
  }
</style>
