<template>
  <div class="step">
    <div v-if="nowStep">{{ nowStep }}</div>
  </div>
</template>

<script>
export default {
  name: 'step',
  props: {
    step: Number
  },
  data() {
    return {
      nowStep: this.step
    }
  }
}
</script>
