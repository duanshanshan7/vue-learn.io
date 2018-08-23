<template>
  <div>
      <p>{{msg}}</p>
      <p>id:{{$route.params.id}}</p>
      <p>name:{{$route.params.name}}</p>
  </div>
</template>

<script>
export default {
  name:'params',
  data(){
      return{
          msg:'我是param页面'
      }
  },
  beforeRouteEnter:(to,from,next)=>{
      console.log(to);
      console.log(from);
      next()
  },
  beforeRouteLeave:(to,from,next)=>{
      console.log(to);
      console.log(from);
      next()
  }
}
</script>

