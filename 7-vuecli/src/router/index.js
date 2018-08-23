import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi from '@/components/hi'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'
import params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        left:hi1,
        right:hi2
      }
    },
    {
      path: '/hi',
      name: 'hi',
      component: hi,
      children:[
        {path: '/',name:'hi',component:hi},
        // {path: 'hi1',name:'hi1',component:hi1},
        // {path: 'hi2',name:'hi2',component:hi2}
      ]
    },
    {
      path:'/params/:id(\\d+)/:name',   //括号里写参数限制的正则表达式  d+只能传递数字
      component:params,
      name:'params',
      alias:'/aliasParams/:id(\\d+)/:name',
      // beforeEnter:(to,from,next) =>{
      //   console.log(to);
      //   console.log(from);
      //   next(true)
      // }
    },
    //redirect重定向路由
    {
      path:'/goHome',
      redirect:'/'
    },
    {
      path:'/goParams/:id(\\d+)/:name',
      redirect:'/params/:id(\\d+)/:name'
    },
    {
      path:'*',   //404错误页面
      component:Error
    }
  ]
})
