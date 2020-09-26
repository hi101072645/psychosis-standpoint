<template>
  <div class="step">
    <div class="bar"></div>
    <div>步驟: {{ showStep }}</div>
    <div>答案: {{ answer }}</div>
  </div>
</template>

<script>
export default {
  name: 'step',
  props: {
    step: Number,
    ans: Array
  },
  data() {
    return {
      showStep: this.step,
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
    this.$bus.$on('step:next', (step) => {
      this.GetStep(step)
    });
    this.$bus.$on('step:prev', (msg) => {
      this.GetStep(msg)
    });
    this.$bus.$on('get:answer', (name, ans) => {
      this.showAns(name, ans)
    })
  },
  methods: {
    GetStep() {
      this.showStep += 1
    },
    showAns(name, answer) {
      this.answer[name] = answer
    }
  }
}
</script>
