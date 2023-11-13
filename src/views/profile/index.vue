<template>
  <div>
      <div class="header">
          <el-button type="text" @click="goBack">
              <el-icon><ArrowLeft /></el-icon>
          </el-button>
          <h3 class="title">
              个人中心
          </h3>
      </div>

      <div style="background-color: aqua; height: 100px; padding: 10px;">
        <!-- 头像 -->
        <div class="common-layout">
          <el-container>
            <el-aside width="150px">
              <el-row class="demo-avatar demo-basic">
                <el-col :span="12">
                  <div class="sub-title"></div>
                  <div class="demo-basic--circle">
                    <div class="block">
                      <el-avatar :size="100" :src="circleUrl" />
                    </div>
                  </div>
                </el-col>
                </el-row>

            </el-aside>

            <el-container style="text-align: left;">
              <el-header>{{ users.realname }}</el-header>
              <el-main>账号：{{ users.userid }}</el-main>
            </el-container>
          </el-container>
      </div>

      <div>
        <div style="height: 50px;border: 1px solid ghostwhite;padding: 10px;" @click="jump('/profile/wdyy')">
          <el-row :gutter="24" style="  margin-top: 10px;font-weight: bold;" >
            <el-col :span="10"><div class="grid-content ep-bg-purple" style="text-align: left;">我的预约</div></el-col>
        
            <el-col :span="14"><div class="grid-content ep-bg-purple"  style="text-align: right;">></div></el-col>
          </el-row>
        </div>
        <div style="height: 50px;border: 1px solid ghostwhite;padding: 10px;" @click="jump('')">
          <el-row :gutter="24" style="  margin-top: 10px;font-weight: bold;" >
            <el-col :span="10"><div class="grid-content ep-bg-purple" style="text-align: left;">我的服务</div></el-col>
        
            <el-col :span="14"><div class="grid-content ep-bg-purple"  style="text-align: right;">></div></el-col>
          </el-row>
        </div>
        <div style="height: 50px;border: 1px solid ghostwhite;padding: 10px;" @click="jump('')">
          <el-row :gutter="24" style="  margin-top: 10px;font-weight: bold;" >
            <el-col :span="10"><div class="grid-content ep-bg-purple" style="text-align: left;">我的医生</div></el-col>
        
            <el-col :span="14"><div class="grid-content ep-bg-purple"  style="text-align: right;">></div></el-col>
          </el-row>
        </div>
        <div style="height: 50px;border: 1px solid ghostwhite;padding: 10px;" @click="jump('')">
          <el-row :gutter="24" style="  margin-top: 10px;font-weight: bold;" >
            <el-col :span="10"><div class="grid-content ep-bg-purple" style="text-align: left;">问诊订单</div></el-col>
        
            <el-col :span="14"><div class="grid-content ep-bg-purple"  style="text-align: right;">></div></el-col>
          </el-row>
        </div>
        <div style="height: 50px;border: 1px solid ghostwhite;padding: 10px;" @click="jump('')">
          <el-row :gutter="24" style="  margin-top: 10px;font-weight: bold;" >
            <el-col :span="10"><div class="grid-content ep-bg-purple" style="text-align: left;">商城订单</div></el-col>
        
            <el-col :span="14"><div class="grid-content ep-bg-purple"  style="text-align: right;">></div></el-col>
          </el-row>
        </div>
        <div style="height: 50px;border: 1px solid ghostwhite;padding: 10px;" @click="logout('')">
          <el-row :gutter="24" style="  margin-top: 10px;font-weight: bold;" >
            <el-col :span="10"><div class="grid-content ep-bg-purple" style="text-align: left;">退出登录</div></el-col>
        
            <el-col :span="14"><div class="grid-content ep-bg-purple"  style="text-align: right;">></div></el-col>
          </el-row>
        </div>
       
      </div>

      </div>

  
 

     
  </div>
</template>



<script>
import axios from '@/axios';

  export default {
      name: '',
      data() {
          return{
            users: ''
            
          }
      },
      methods: {
          goBack() {
          // 返回上一页的逻辑
          // 可以使用浏览器的 history API 或路由的 go 方法实现返回上一页
          // 例如：this.$router.go(-1) 或 window.history.back()
           this.$router.go(-1)
          },
          jump(url) {
            this.$router.push({
              path: url,
                    
            });
          },
          logout() {
            console.log('退出登录')
            
            axios({
                url: '/logout',
                method: 'post',
                data: null
            }).then(res => {
                //跳转登录页面
                this.$router.push({
                    path: '/'
                });
            }).catch(e => {
                console.log(e)
            })
          }
        
         
      },
       mounted() {

        let req = {}
        // 查询登录的用户信息
        axios({
            url: '/users/getMe',
            method: 'post',
            data: null
        }).then(res => {
            this.$store.commit('setUser', res.data.data)
            this.users = res.data.data
        }).catch(e => {
            console.log(e)
        })
          
      },
  
}
</script>


<style scoped>

</style>