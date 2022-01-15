<template>
  <div class="hello2">
  <!-- <select v-model="selectedFruits"> -->
  <!-- <option disabled value="">果物一覧</option> -->
  <!-- <option v-for="fruit in optionFruits" v-bind:value="fruit.name" v-bind:key="fruit.id">
  {{ fruit.name }} -->
<vue-good-table
  :columns="columns"
  :rows="rows"
  >
</vue-good-table>
  <!-- </option>
  </select> -->
  <!-- <span>Selected: {{ selectedFruits }}</span>
  <span>S: {{ optionFruits }}</span> -->
  </div>

</template>

<script>
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next'

export default {
  name: 'SearchSystem',
  components: {
    VueGoodTable
  },
  data() {
    return {
      // selectedFruits: {id: 1, name: 'リンゴ'}.name,
      // optionFruits: [{id: 1, name: 'リンゴ'}],
      columns: [
        {
          label: 'id',
          field: 'id',
          type: 'number',
        },
        {
          label: '投稿時間',
          field: 'dt',
          type: 'number',
        },
        {
          label: '参加者 PSN ID',
          field: 'participants',
          // dateInputFormat: 'yyyy-MM-dd',
          // dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'マッチの種類',
          field: 'match_type',
          // type: 'percentage',
        },
        {
          label: 'ルール',
          field: 'rule',
        },
        {
          label: 'コスト',
          field: 'cost',
        },
        {
          label: 'マップ',
          field: 'map',
        },
        {
          label: '参加人数',
          field: 'rule_partipants',
        },
        {
          label: '自軍のスコア',
          field: 'team_a_score',
        },
        {
          label: '敵軍のスコア',
          field: 'team_b_score',
        },
        {
          label: '勝敗',
          field: 'win_or_lose',
        }
      ],
      rows: []
    }
  },
  created() {
    this.axios.get('/show').then((res) => {

      this.rows = res.data
      // alert(this.rows)

    })
  }
}

//   methods: {
//   greeting: function(){
//     this.axios.get('/api/hello')
//     .then((res) => alert(res.data))
//     .catch((e) => alert(e))
//   }
// },
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
div.hello2 {
      margin-left: auto;
    margin-right: auto;
  width: 90%;
}
</style>
