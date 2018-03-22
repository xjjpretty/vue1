<template>

  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <i class="el-icon-location"></i>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
    <div>这是首页</div>
  </div>
</template>

<script>
    export default {
        name: 'index'
    }
</script>
