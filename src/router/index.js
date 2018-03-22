import Vue from 'vue'
import Router from 'vue-router'

//import BeforeEach from './hooks/beforeEach'     //路由钩子
import home from './map/home.js'
import msg from './map/msg.js'
import login from './map/login.js'
import hooks from './hooks/'
Vue.use(Router)

const router = new Router(
  {
    mode:'history',
    routes: [
      ...home,
      ...msg,
      ...login
    ]
});
hooks(router);

export default router;
