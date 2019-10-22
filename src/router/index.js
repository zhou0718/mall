import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes =[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:()=>import('../views/home/Home')
  },
  {
    path:'/category',
    component:()=>import('../views/category/Category')
  },
  {
    path:'/profile',
    component:()=>import('../views/profile/Profile')
  },
  {
    path:'/shop',
    component:()=>import('../views/shopcart/ShopCart')

  }
]

const router = new Router({
  mode:"history",
  routes
})

export  default  router
