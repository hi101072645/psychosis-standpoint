<template>
  <div id="app">
    <div class="wrap">
      <step :step="nowStep"></step>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import './sass/main.scss'
import index from './components/index.vue'
import step from './components/step.vue'

export default {
  name: 'App',
  components: {
    index,
    step
  },
  data() {
    return {
      nowStep: 0
    }
  }
}
</script>

