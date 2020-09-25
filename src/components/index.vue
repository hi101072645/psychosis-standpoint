<template>
  <div class="hello">
    <h1>歡迎</h1>

    <router-link to="Q1" class="button-start">開始</router-link>

  </div>
</template>

<script>
import '../sass/main.scss'
export default {
  name: 'index',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
