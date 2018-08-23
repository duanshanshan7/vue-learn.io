<template>
  <div>
      <p>{{$route.params.username}}</p>
      <p>
          {{msg}}
      </p>
  </div>
</template>

<script>
export default {
  name: 'hi2',
  data(){
      return{
          msg:'我是hi2页面'
      }
  }
}
</script>

