<template>
  <div class="landing">
    <h1 class="greeting">歡迎</h1>
    <p>我是一些介紹和宣導語</p>
    <router-link
        to="Q1"
        @click.native="addStep"
        class="button-start">開始</router-link>
  </div>
</template>

<script>
import '../sass/landing.scss'
export default {
  name: 'index',
  props: {
    msg: String
  },
  data(){
    return {
      step: 0
    }
  },
  methods: {
    addStep() {
      this.$bus.$emit('change:step', 1);
    },
  }
}
</script>

