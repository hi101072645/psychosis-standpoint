<template>
  <div>
<!--    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->

      <div class="question" v-for="(item, idx) in List">
        <p class="intro">{{ item.desc }}</p>
        <radio :answer="item.answer" :id="idx" @option-change="pageAnswer"></radio>
      </div>
      <span>===========</span>
      <br>
      <span>{{ test }}</span>
    <br>
    <p>{{ List }}</p>
<!--    </el-form>-->
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
      test: 111,
      radio1: 1,
      List: [
        {desc: '問題1', answer: 0},
        {desc: '問題2', answer: 0},
        {desc: '問題3', answer: 0},
      ],
      count: 0
    }
  },
  watch: {
  },
  computed: {
  },
  methods: {
    pageAnswer(text , id) {
      this.List[id].answer = text
    }
  }
}
</script>
