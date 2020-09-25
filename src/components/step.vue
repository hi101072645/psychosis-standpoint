<template>
  <div class="step">
   {{ nowStep }}
  </div>
</template>

<script>
export default {
  name: 'step',
  props: {
    msg: String
  },
  data() {
    return {
      nowStep: 1
    }
  }
}
</script>
