<template>
  <div class="step">
    <div class="bar"></div>
    <div>步驟: {{ nowStep }}</div>
    <div>答案: {{ answer }}</div>
  </div>
</template>

<script>
export default {
  name: 'step',
  props: {
    ans: Array
  },
  data() {
    return {
      answer: {
        ans1: '',
        ans2: '',
        ans3: '',
        ans4: '',
      },
      nowStep: 0
    }
  },
  created() {
    this.$bus.$on('step:next', () => {
      this.nextStep()
    });
    this.$bus.$on('step:prev', () => {
      this.prevStep()
    });
    this.$bus.$on('get:answer', (name, ans) => {
      this.showAns(name, ans)
    })
  },
  methods: {
    nextStep() {
      this.nowStep += 1
    },
    prevStep() {
      this.nowStep -= 1
    },
    showAns(name, answer) {
      this.answer[name] = answer
    }
  }
}
</script>
