<template>
  <el-menu
    default-active="activeIndex"
    class="el-menu-demo"
    router
    >

    <div
    :key = 'item.path'
    v-for="(item,index) in nav" >
      <el-menu-item
        :index = 'item.path'
        v-if="!item.child"
      >{{item.name}}</el-menu-item>
      <el-submenu
        :index = 'item.path'
        v-if="item.child"
      >
        <template slot="title">{{item.name}}</template>
        <el-menu-item
          :index="children.path"
          v-for="(children,i) in item.child"
          :key = 'children.path'
          :data-id="children.path"
        >
          {{children.name}}
        </el-menu-item>
      </el-submenu>
    </div>
  </el-menu>


  <!--<div>-->
    <!--<router-link to="/index">user list</router-link>-->
    <!--<router-link to="/msg/add">user list</router-link>-->
    <!--<router-link to="/msg/test">user list</router-link>-->
  <!--</div>-->
</template>

<script>
    export default {
      name: '',
      data: function () {
        return {
          nav: [],
          activeIndex: '2'
        }
      },
      mounted: function () {
        this.nav = [
          {
            "name" :'首页',
            "path" : '/index',
            "child":''
          }, {
            "name" : '留言板',
            "path" : '',
            "child" : [
              {
                "name" : '列表',
                "path" : '/msg/list',
                "child" : ''
              },{
                "name" : '详情',
                "path" : '4',
                "child" : ''
              },{
                "name" : '新增',
                "path" : '/msg/add',
                "child" : ''
              },{
                "name" : '修改',
                "path" : '6',
                "child" : ''
              }
            ]
          }
        ]
      }
    }
</script>
