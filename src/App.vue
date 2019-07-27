<template>
  <div class="container">
    <app-header></app-header>
  </div>
</template>

<script>
import Header from './components/navigation/Header'

export default {
  name: 'App',
  components: {
    'app-header': Header
  }
}
</script>

<style>
</style>
