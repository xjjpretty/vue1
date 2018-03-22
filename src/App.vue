<template>
  <el-container>
    <el-header style="padding: 0">
      <span class="logo">Vue Demo</span>
      <topNav></topNav>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <sidebar></sidebar>
      </el-aside>
      <el-main>
        <breadcrumb></breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import topNav from './components/topNav.vue'
  import sidebar from './components/sidebar.vue'
  import breadcrumb from './components/breadcrumb.vue'
  export default {
    name: 'app',
    components: {
      topNav,sidebar,breadcrumb
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
