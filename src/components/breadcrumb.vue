<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <i class="el-icon-location"></i>
    <el-breadcrumb-item v-for="">首页</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
    export default {
        name: '',
        data(){
          console.log(this.$router.name)
          return{

          }
        }
    }
</script>
