<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
          <router-link  class="nav-item" tag="li" to="/" active-class="active" exact>
            <a class="nav-link">Stock Trader</a>
          </router-link>
        <li class="nav-item">
          <router-link  class="nav-item" tag="li" to="/portfolio" active-class="active">
            <a class="nav-link">Portfolio</a>
          </router-link>
        </li>
        <router-link class="nav-item" tag="li" to="/stocks" active-class="active">
          <a class="nav-link" href="#">Stocks</a>
        </router-link>
      </ul>
      <ul class="navbar-nav navbar-right mr-auto">
        <li class="nav-item">
          <button class="btn nav-link" @click="nextDay()">End Day</button>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Save</a>
            <a class="dropdown-item" href="#">Load</a>
          </div>
        </li>
      </ul>
      <div class="nav nav-item">
        <span class="navbar-text">Funds: ${{ getMoney }}</span>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Header',
    computed: {
      getMoney() {
        return this.$store.state.money
      }
    },
    methods: {
      nextDay() {
        this.$store.commit('changePrices');
      }
    }
  }
</script>

<style scoped>

</style>
