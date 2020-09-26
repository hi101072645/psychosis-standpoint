<template>
  <div>
    <h1 style="padding-top: 100px;">結果是：</h1>
    <span v-for="item in answer">
      {{ item.value }}
    </span>

  </div>
</template>

<script>
export default {
  name: 'Result',
  props: {
  },
  data() {
    return {
      radio: this.answer,
      answer: {
        ans1: '',
        ans2: '',
        ans3: '',
        ans4: '',
      },
    }
  },
  created() {
    this.$bus.$on('step:next', (msg) => {
      this.GetStep(msg)
    });
    this.$bus.$on('get:answer', (name, ans) => {
      this.showAns(name, ans)
    })
  },
  methods: {
    showAns(name, answer) {
      this.answer[name] = answer
    }
  }
}
</script>
