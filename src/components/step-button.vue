<template>
  <div class="button-group">
    <button
        @click.native="backStep"
        class="button">返回</button>
    <button
        @click.native="nextStep"
        class="button">下一頁</button>
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
    }
  },
  watch: {
  },
  methods: {
    nextStep() {
      this.$bus.$emit('step:next');
    },
    backStep() {
      this.$bus.$emit('step:prev');
    },
  }
}
</script>
