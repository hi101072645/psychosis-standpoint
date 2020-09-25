<template>
  <div>
    <div class="selection">

      <el-radio
          v-for="(item,idx) in option"
          v-model="radio"
          @click="myClick"
          :key="idx"
          :label="item.value"
          border>{{ item.label }}</el-radio>

      <p>{{ radio }}</p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'q1',
  props: {
    answer: Number
  },
  data() {
    return {
      radio: this.answer,
      option: [
        {label: '非常同意', value: 2},
        {label: '同意', value: 1},
        {label: '無特別偏好', value: 0},
        {label: '不同意', value: -1},
        {label: '非常不同意', value: -2},
      ]
    }
  },
  methods: {
    myClick: function () {
      this.$emit('option-change')
      console.log('111')
    }
  }
}
</script>
