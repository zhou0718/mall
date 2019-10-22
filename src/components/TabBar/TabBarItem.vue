<template>
  <!-- 这样写相当于把数据写死了，数据应该是动态变化的，所以这里应该定义具名插槽 -->
  <!--  <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg">
      首页
    </div>-->
  <div class="tab-bar-item" @click="ItemClick" >
    <!-- 为了给插槽里的内容加上样式，最好给插槽外面包上一层div,放便调整样式 -->
    <div v-if="isActive"><slot name="img"></slot></div>
    <div v-else><slot name="activeImg"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>


<script>
  export default {
    data(){
      return{

      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) ==-1
      },
      activeStyle(){
        return this.isActive? {} :{color:this.activeColor}
      }
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    methods:{
     ItemClick(){
       this.$router.push(this.path);
     },

   },

  }
</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    margin-top: 10px;
    font-size: 14px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align:middle;
  }
</style>
