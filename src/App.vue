<template>
  <div class="container">
    <app-header></app-header>
    <transition
      name="fade"
      mode="out-in"
      appear
    >
      <router-view></router-view>
    </transition>
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
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

</style>
