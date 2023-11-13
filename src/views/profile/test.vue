<template>
    <div>
        <div class="header">
            <el-button type="text" @click="goBack">
                <el-icon><ArrowLeft /></el-icon>
            </el-button>
            <h3 class="title">
                预约成功
            </h3>
        </div>

    
   

       
    </div>
</template>



<script>
import axios from '@/axios';

    export default {
        name: '',
        data() {
            return{
              
            }
        },
        methods: {
            goBack() {
            // 返回上一页的逻辑
            // 可以使用浏览器的 history API 或路由的 go 方法实现返回上一页
            // 例如：this.$router.go(-1) 或 window.history.back()
             this.$router.go(-1)
            },
            jump() {
                
            },
          
           
        },
         mounted() {

              
            
        },
    
}
</script>


<style scoped>

</style>