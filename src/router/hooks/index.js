import store from '@/store/'

export default (router) => {
  router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth == undefined){
      if(!store.state.isLogin){
        //没有登陆
        next({
          path: '/login',
          query: { redirect: to.fullPath }//把要跳转的地址作为参数传到下一步
        });
        return false;
      }else{
        //已登陆
        next()
      }
    }else{
      next()
    }

  })
}
