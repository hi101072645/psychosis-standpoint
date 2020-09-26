<template>
  <div>
<!--    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
      <h2>我是第三頁</h2>
      <div class="question" v-for="(item, idx) in List">
        <p class="intro">{{ item.desc }}</p>
        <radio
            :answer="item.answer"
            :id="idx"
            @option-change="pageAnswer"></radio>
      </div>
      <router-link
          :disabled="true"
          to="Q4"
          @click.native="getAnswer"
          class="button-start">123</router-link>
      <span>===========</span>
      <br>
      <span>本頁分數 {{ count }} </span>
      <span> 結果是：{{ result }}</span>
    <br>
<!--    </el-form>-->
  </div>
</template>

<script>
import radio from './radio'

export default {
  name: 'q3',
  components: {
    radio
  },
  props: {},
  data() {
    return {
      test: 111,
      radio1: 1,
      result: '',
      List: [
        {desc: '問題1', answer: 0},
        {desc: '問題2', answer: 0},
        {desc: '問題3', answer: 0},
      ],
      count: 0
    }
  },
  watch: {
    List: {
      handler: function () {
        this.count = 0
        for (let i = 0; i < this.List.length; i++) {
          this.count += this.List[i].answer
        }
        this.count >= 9 ? this.result = 'A': this.result = 'B'
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
  },
  methods: {
    pageAnswer(text , id) {
      this.List[id].answer = text
    },
    getAnswer() {
      this.$bus.$emit('get:answer', 'ans3', this.result);
    },
  }
}
</script>
