import index from '@/view/index.vue'

export default [{
  path:'*',
},{
  path:'/',
  redirect: '/index',
  component: index
},{
  path:'/index',
  name:'index',
  component: index
}]
