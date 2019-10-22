<template>
  <div id="app">
    <index></index>
    <router-view/>
  </div>
</template>

<script>
  import Index from './components/TabBar/index'
export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style>
@import "./style/tab-bar.css";


</style>
