<template>
    <div class="header">
      <el-button type="text" @click="goBack">
        <el-icon><ArrowLeft /></el-icon>
      </el-button>
      <h3 class="title">
        用户体检预约
      </h3>
    </div>

    <div class="demo-image ul">
     
     <!-- <span class="demonstration">{{ fit }}</span> -->
     <el-image style="width: 350px; height: 500px" :src="url" :fit="fit" />
    </div>

    <div style="margin-top: 5px;margin-bottom: 5px;">
        <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content ep-bg-purple" @click="jump('/hospital/tjjg')">
                <el-button type="warning" plain >本人预约</el-button>
            </div></el-col>
            <el-col :span="12"><div class="grid-content ep-bg-purple" >
                <el-button type="success" plain>家属预约</el-button>
            </div></el-col>         
        </el-row>
    </div>
  </template>
  
  <script>
  import axios from '@/axios';
  export default {
    data() {
    return{
        url: require('@/assets/66aaaf.jpg')
        }
    },
    methods: {
      goBack() {
        // 返回上一页的逻辑
        // 可以使用浏览器的 history API 或路由的 go 方法实现返回上一页
        // 例如：this.$router.go(-1) 或 window.history.back()
        this.$router.go(-1)
      },
        jump(route) {
            console.log(`${route}`);
            this.$router.push(`${route}`);
        }
    }
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f0f0f0;
  }
  
  .title {
    flex: 1;
    text-align: center;
    margin: 0;
  }

.demo-image .ul {
    margin: 5px;
}
  </style>
  