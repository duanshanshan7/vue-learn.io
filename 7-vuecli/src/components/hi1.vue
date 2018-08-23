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
  name: 'hi1',
  data(){
      return{
          msg:'我是hi1页面'
      }
  }
}
</script>

