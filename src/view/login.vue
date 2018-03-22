<template>
  <el-form
    :model = 'loginForm'
    :rules="rules"
    ref="loginForm"
    label-width="80px">
    <el-form-item label="用户名" prop="name">
      <el-input v-model="loginForm.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pwd">
      <el-input type="password" auto-complete="off" v-model="loginForm.pwd"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onsubmit('loginForm')">登陆</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
      name: 'login',
      data(){
        var checkName = (rule,value,callBack) =>{
//          if(value < 10){
//            callBack(new Error('请输入密码'))
//          }
        };
        return {
          loginForm : {
            'name':'',
            'pwd': ''
          },
          rules: {
            name : [
              {required:true,message:'用户名必填',trigger:'blur'},
            ]
          }
        }
      },
      methods:{
        onsubmit(formname){
          this.$refs[formname].validate((valid) =>{
            if(valid){
              this.$ajax.get('http://rap2api.taobao.org/app/mock/3749/GET/xjjLogin',{
                params: {
                  usename : '22'
                }
              })
                .then((response)=>{
                  if(response.data != null){
                    this.$store.commit('login',response.data);
                    this.loginForm.name = '';
                    this.loginForm.pwd = '';
                    this.$router.push('/index')
                    let redirect = decodeURIComponent(this.$route.query.redirect || '/');

                    this.$router.push({
                      path: redirect
                    })

                  }
                })
            }else{
              console.log('no')
            }
          })
        }
      }

    }
</script>
