<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/navigation/Header'

export default {
  name: 'App',
  components: {
    appHeader: Header
  }
}
</script>

<style>
</style>
