<template>
  <div class="hello2">
  <select v-model="selectedFruits">
  <!-- <option disabled value="">果物一覧</option> -->
  <option v-for="fruit in optionFruits" v-bind:value="fruit.name" v-bind:key="fruit.id">
  {{ fruit.name }}
  </option>
  </select>
  <span>Selected: {{ selectedFruits }}</span>
  <span>S: {{ optionFruits }}</span>
  </div>

</template>

<script>
export default {
  name: 'SearchSystem',
  // props: {
  // },
  data() {
    return {
      selectedFruits: {id: 1, name: 'リンゴ'}.name,
      optionFruits: [{id: 1, name: 'リンゴ'}],
    }
  },
  created() {
    this.axios.get('/api/hello')
    .then((res) => {for (let i = 0; i < 5; i++) {
      this.optionFruits.push({id:`${i}`, name:`${res.data}`})
    }
    this.axios.get('/show').then((res) => alert(res))})
    .catch((e) => alert(e))

    // alert(this.optionFruits)

  }

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
