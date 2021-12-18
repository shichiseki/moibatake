<template>
  <div class="hello">
    <h1>ジャガイモばたけ</h1>
    <p>
      バトオペクランMOIの戦績データベースです <br>
      discordのボットに画像を送信するとこのページに戦績がデータベース化されます
    </p>
    <SearchSystem/>
  </div>
</template>

<script>
import SearchSystem from './SearchSystem.vue'
export default {
  name: 'HelloWorld',
  components: {
    SearchSystem
  },
  props: {
    msg: String
  },
//   methods: {
//   greeting: function(){
//     this.axios.get('/api/hello')
//     .then((res) => alert(res.data))
//     .catch((e) => alert(e))
//   }
// },
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
