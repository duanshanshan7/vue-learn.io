<template>
  <div>
      <h2>{{msg}}</h2>
      <hr>
      <h3>{{$store.state.count}}-{{count}}</h3>
      <button @click="add(5)">add</button>
      <button @click="reduce">reduce</button>
    <br>
      <!-- <button @click="addAction">addAction</button>
      <button @click="reduceAction">reduceAction</button> -->
  </div>
</template>

<script>
import store from '@/vuex/store'
// import {mapState,mapMutations,mapGetters, mapActions} from 'vuex'
export default {
  name:'count',
  data(){
      return{
          msg:'',
          count:2
      }
  },
//   computed:{
//       count(){
//            return this.$store.state.count
//       }
//   },
//   computed:mapState({
//       count:state=>state.count
//   }),
  computed:{
    // ...mapState(['count']),
    // count(){
    //   return this.$store.getters.count
    // }
    // ...mapGetters(['count'])
  },
  methods:{
    // ...mapMutations(['add','reduce']),   //同步
    // ...mapActions(['addAction','reduceAction'])  //异步
    add(n){
      debugger;
      this.$store.commit('add', n)
    },
    reduce(){
      this.$store.commit('reduce')
    }
  },
  store,
}
</script>

