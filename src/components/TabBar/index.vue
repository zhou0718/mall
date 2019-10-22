<template>
<div>
<tab-bar>
  <tab-bar-item path="/home" >
    <img slot="img" src="../../assets/img/tabbar/home.svg" alt="">
    <img slot="activeImg" src="../../assets/img/tabbar/home_active.svg" alt="">
    <div slot="text">首页</div>
  </tab-bar-item>

  <tab-bar-item path="/category" >
    <img  slot="img" src="../../assets/img/tabbar/category.svg" alt="">
    <img slot="activeImg" src="../../assets/img/tabbar/category_active.svg" alt="">
    <div slot="text">分类</div>
  </tab-bar-item>

  <tab-bar-item path="shop" >
    <img slot="img" src="../../assets/img/tabbar/shopcart.svg" alt="">
    <img slot="activeImg" src="../../assets/img/tabbar/shopcart_active.svg" alt="">
    <div slot="text">购物车</div>
  </tab-bar-item>

  <tab-bar-item path="profile">
    <img slot="img" src="../../assets/img/tabbar/profile.svg" alt="">
    <img slot="activeImg" src="../../assets/img/tabbar/profile_active.svg" alt="">
    <div slot="text">我的</div>
  </tab-bar-item>
</tab-bar>
</div>
</template>

<script>
  import TabBar from './TabBar'
  import TabBarItem from "./TabBarItem";
  export default {
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>
