<template>
  <div>
    <transition name="fade" appear>
      <div class="landing" v-if="landing">
        <h1 class="greeting">歡迎</h1>
        <p>我是一些介紹和宣導語</p>
        <button
            @click="nextStep"
            class="button-start">開始
        </button>
      </div>
    </transition>
    <transition name="fade" appear>
      <component v-if="!landing" :is="page"></component>
    </transition>
    <stepButton v-if="!landing"></stepButton>
  </div>
</template>

<script>
import '../sass/landing.scss'
import q1 from './q1'
import stepButton from './step-button'

export default {
  name: 'index',
  props: {
    msg: String
  },
  components: {
    q1,stepButton
  },
  data() {
    return {
      step: 0,
      page: 'q1',
      landing: true
    }
  },
  methods: {
    nextStep() {
      this.$bus.$emit('step:next', 1);
      this.landing = false
    },
  }
}
</script>

<style>
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity .5s
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active  {
  transition: opacity .5s .5s
}
.fade-enter-to {
  opacity: 1;
}
</style>