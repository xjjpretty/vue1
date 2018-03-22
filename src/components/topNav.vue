<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo topNav" mode="horizontal">
    <el-menu-item index="1"><i class="el-icon-refresh"></i></el-menu-item>
    <el-menu-item index="2"><i class="el-icon-edit-outline"></i></el-menu-item>
  </el-menu>
</template>

<script>
    export default {
      name: 'top',
      data: function () {
        return {
          activeIndex: '1'
        }
      }
    }
</script>
