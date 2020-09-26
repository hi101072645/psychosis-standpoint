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
<!--      <p>{{ radio }}</p>-->

    </div>
  </div>
</template>

<script>
export default {
  name: 'step-changer',
  props: {  },
  data() {
    return {
      order: this.op,
      radio: this.answer,
    }
  },
  methods: {
  }
}
</script>
