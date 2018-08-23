<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>导航：
      <router-link :to="{name:'hi',params:{username:'dss'}}">hi页面</router-link>
      <!-- <router-link :to="{name:'hi1',params:{username:'dss1'}}">hi页面1</router-link> -->
      <!-- <router-link :to="{name:'hi2',params:{username:'dss2'}}">hi页面2</router-link> -->
    </p>

    <p>{{ $route.name}}</p>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
