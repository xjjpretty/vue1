import add from '@/view/add.vue'
import list from '@/view/list.vue'
export default [
    //列表
  {
    path:'/msg/list',
    name:'列表',
    component:list,
    children:[
      //新增
      {
        path:'/msg/add',
        name:'新增',
        component:add
      }
    ]
  },
  //详情
  // {
  //   path:'/msg/detail',
  //   name:'detail',
  //   component:detail
  // }

]

