<template>
  <div>
    <div class="selection">
      <template v-if="order">
        <el-radio
            v-for="(item,idx) in option"
            v-model="radio"
            @change="myClick"
            class="radio-selection"
            :key="idx"
            :label="item.value"
        >{{ item.label }}</el-radio>
      </template>
      <template v-else>
        <el-radio
            v-for="(item,idx) in optionOp"
            v-model="radio"
            @change="myClick"
            class="radio-selection"
            :key="idx"
            :label="item.value"
        >{{ item.label }}</el-radio>
      </template>
      <p>{{ radio }}</p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'q1',
  props: {
    id: Number,
    answer: Number,
    op: Boolean,
  },
  data() {
    return {
      order: this.op,
      radio: this.answer,
      option: [
        {label: '非常同意', value: 1},
        {label: '同意', value: 2},
        {label: '無特別偏好', value: 3},
        {label: '不同意', value: 4},
        {label: '非常不同意', value: 5},
      ],
      optionOp: [
        {label: '非常同意', value: 5},
        {label: '同意', value: 4},
        {label: '無特別偏好', value: 3},
        {label: '不同意', value: 2},
        {label: '非常不同意', value: 1},
      ]
    }
  },
  methods: {
    myClick: function () {
      this.$emit('option-change', this.radio , this.id)
    }
  }
}
</script>
