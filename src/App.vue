<template>
  <div id="app">
    <step></step>
    <router-view></router-view>
  </div>
</template>

<script>

import index from './components/index.vue'
import step from './components/step.vue'

export default {
  name: 'App',
  components: {
    index,
    step
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
