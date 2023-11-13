<template>
    <div class="register-container">
      <el-form ref="registerForm" :model="registerForm" :rules="registerRules" class="register-form">
        <h2 class="register-title">欢迎注册</h2>
        <el-form-item prop="userid">
          <el-input v-model="registerForm.userid" placeholder="手机号码"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="registerForm.password" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="realname">
          <el-input v-model="registerForm.realname" placeholder="真实姓名"></el-input>
        </el-form-item>
        <el-form-item prop="sex">
          <el-radio-group v-model="registerForm.sex">
            <el-radio label="1">男</el-radio>
            <el-radio label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="identitycard">
          <el-input v-model="registerForm.identitycard" placeholder="身份证号"></el-input>
        </el-form-item>
        <el-form-item prop="birthday">
          <el-date-picker v-model="registerForm.birthday" type="date" placeholder="出生日期"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">完成</el-button>
          <el-button @click="goToLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
    import axios from '@/axios';
  export default {
    data() {
      return {
        registerForm: {
          userid: '',
          password: '',
          realname: '',
          sex: null,
          identitycard: '',
          birthday: null,
        },
        registerRules: {
          userid: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
          realname: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' },
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' },
          ],
          identitycard: [
            { required: true, message: '请输入身份证号', trigger: 'blur' },
          ],
          birthday: [
            { required: true, message: '请选择出生日期', trigger: 'change' },
          ],
        },
      };
    },
    methods: {
      register() {
        this.$refs.registerForm.validate((valid) => {
          if (valid) {
            // 在此处处理注册逻辑
            axios({
                url: '/register',
                method: 'post',
                data: this.registerForm
            }).then(res => {
                console.log(res);
                alert("注册成功")
                this.goToLogin()
            }).catch(e => {
                alert(e.data.message)
            })
          } else {
            console.log('表单验证失败');
            return false;
          }
        });
      },
      goToLogin() {
        // 在此处进行跳转到登录页面的逻辑
        console.log('跳转到登录页面');
        this.$router.push({
            path: '/'
        });
      },
    },
    mounted() {
        this.$store.commit('setTabbar', false)
    },
  };
  </script>
  
  <style>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .register-form {
    width: 400px;
    padding: 20px;
    border: 1px solid #7fbfff
  }
  </style>