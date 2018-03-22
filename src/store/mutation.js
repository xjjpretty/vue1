// import state from './state'
export default {
  login:(state,Info)=>{
    state.isLogin = Info.isLogin;
    state.name = Info.name;
    state.pwd = Info.pwd;
  }
}
