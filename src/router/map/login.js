import login from '@/view/login.vue'
export default [{
  path: '/login',
  name: 'login',
  component: login,
  meta:{
    requireAuth : false
  }
}]
