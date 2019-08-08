<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body stock">
          <div class="text-green card-title">
            <h3 class="d-inline">BMW</h3>
            <span class="text-small">(Price: {{ getPrice('bmw') }})</span>
          </div>
          <div class="input-group mb-3">
            <input class="form-control" placeholder="Quantity" type="text" v-model="bmwAmount">
            <button class="btn btn-success btn-sm"
                    @click="buyStocks({
                      'company' : 'bmw',
                      'amount'  : bmwAmount
                    })">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-body stock">
          <div class="text-green card-title">
            <h3 class="d-inline">Twitter</h3>
            <span class="text-small">(Price: {{ getPrice('twitter') }})</span>
          </div>
          <div class="input-group mb-3">
            <input class="form-control" placeholder="Quantity" type="text" v-model="twitterAmount">
            <button class="btn btn-success btn-sm"
                    @click="buyStocks({
                      'company' : 'twitter',
                      'amount'  : twitterAmount
                    })">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-body stock">
          <div class="text-green card-title">
            <h3 class="d-inline">Google</h3>
            <span class="text-small">(Price: {{ getPrice('google') }})</span>
          </div>
          <div class="input-group mb-3">
            <input class="form-control" placeholder="Quantity" type="text" v-model="googleAmount">
            <button class="btn btn-success btn-sm"
                    @click="buyStocks({
                      'company' : 'google',
                      'amount'  : googleAmount
                    })">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-body stock">
          <div class="text-green card-title">
            <h3 class="d-inline">Apple</h3>
            <span class="text-small">(Price: {{ getPrice('apple') }})</span>
          </div>
          <div class="input-group mb-3">
            <input class="form-control" placeholder="Quantity" type="text" v-model="appleAmount">
            <button class="btn btn-success btn-sm"
                    @click="buyStocks({
                      'company' : 'apple',
                      'amount'  : appleAmount
                    })">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Stocks",

    data() {
      return {
        bmwAmount : '',
        googleAmount : '',
        appleAmount : '',
        twitterAmount : '',
      };
    },

    methods: {
      buyStocks(stocksBought){
        this.resetInputs();
        this.$store.commit('buyStocks',{
          company   : stocksBought.company,
          amount    : stocksBought.amount
        });
      },
      resetInputs(){
        this.bmwAmount = '';
        this.googleAmount = '';
        this.twitterAmount = '';
        this.appleAmount = '';
      }
    },

    computed: {
      getPrice() {
        return (company) => {
          let priceObject;
          priceObject = this.$store.getters.getPrice(company);
          return priceObject.price;
        };
      }
    }
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
