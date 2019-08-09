<template>

<div class="row">
  <div class="col-md-6" v-for="(stock, index) in stocks">
    <div class="card">
      <div class="card-body stock">
        <div class="text-blue card-title">
          <h3 class="d-inline">{{ stock.company }}</h3>
          <span class="text-small">(Price: {{ stock.price }})</span>
        </div>
        <div class="input-group mb-3">
          <input class="form-control" placeholder="Quantity" type="text"
                 v-model="selling[index]">
          <button class="btn btn-danger btn-sm"
                  @click="sellStocks(stock, index)">
            Sell
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
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
                if (stock){
                    console.log(stock);
                }
            }
        },
        created() {
            this.loadStocks;
        }
    }
</script>

<style scoped>
  button {
    margin-left: 300px;
  }
</style>
