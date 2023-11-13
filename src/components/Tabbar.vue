<template>
    <div>
      
  <el-row class="bottom-menu" >
      <el-col :span="6">
        <el-button type="text" @click="navigateTo('/hospital')">云医院</el-button>
      </el-col>
      <el-col :span="6">
        <el-button type="text" @click="navigateTo('/mall')">商城</el-button>
      </el-col>
      <el-col :span="6">
        <el-button type="text" @click="navigateTo('/discover')">发现</el-button>
      </el-col>
      <el-col :span="6">
        <el-button type="text" @click="navigateTo('/profile')">我</el-button>
      </el-col>
    </el-row>
    </div>
  </template>

<script>

export default {
  
  name: 'Tabbar',
  data() {
      return {
      
      }
    },
 
  props: {
    msg: String
  },
  methods: {
    navigateTo(route) {
      // 在这里处理点击菜单项后的导航逻辑
      console.log(`Navigating to ${route}`);
      // 使用 $router.push 进行页面跳转
      this.$router.push(`${route}`); // 替换 "/home" 为你要跳转的目标路由路径
      // 使用 $router.push 进行页面跳转，并传递参数
      // this.$router.push({
      //   name: route,
      //   query: { id: productId }, // 传递参数的方式可以是 query、params 或 hash，根据实际需求选择
      // });
     
    },
    mounted() {
     
     
    },
  },
}
</script>

  
<style scoped>

.bottom-menu {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f0f0f0;
  padding: 10px;
 
}
</style>
