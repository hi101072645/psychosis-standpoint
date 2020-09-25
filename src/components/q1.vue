<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <div class="question" v-for="item in List">
        <p class="intro">{{ item.desc }}</p>
        <radio :answer="item.answer" @option-change="pageAnswer"></radio>
      </div>
      <span>===========</span>
      <span>{{ count }}</span>
    </el-form>
  </div>
</template>

<script>
import radio from './radio'

export default {
  name: 'q1',
  components: {
    radio
  },
  props: {},
  data() {
    return {
      radio1: 1,
      List: [
        {desc: '問題1', answer: 0},
        {desc: '問題2', answer: 0},
        {desc: '問題3', answer: 0},
      ],

    }
  },
  watch: {},
  methods: {
    pageAnswer() {
      alert('123')
    }
  }
}
</script>
