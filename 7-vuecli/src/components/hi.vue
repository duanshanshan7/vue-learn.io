<template>
  <div>
      <!-- <p>{{$route.params.username}}</p> -->
      <p>{{msg}}</p>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'hi',
  data(){
      return{
          msg:'我是hi页面'
      }
  }
}
</script>
