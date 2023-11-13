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

        <div style="background-color: aquamarine;">
            <div style="font-size: 100px">
                <el-icon><CircleCheck /></el-icon>
            </div>
        </div>
        <div>
            <h1>恭喜你预约成功</h1>
            <p>请体检用户带本人身份证到店认证</p>
        </div>
        <div style="border: 1px solid ghostwhite;padding-top: 10px;padding-bottom: 10px;color: #41ca9c;" @click="jump('/profile/wdyy')">
            查看订单

        </div>
        <div style="padding-top: 10px;padding-bottom: 10px;color: #41ca9c;" @click="jump('/hospital/tjyy')">
            <el-button type="primary" plain>继续为家人预约</el-button>

        </div>

   

       
    </div>
</template>



<script>
import axios from '@/axios';

    export default {
        name: 'yycg',
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
            jump(url) {
                // 跳到选择套餐页面
                let orderid = this.$route.query.orderid
                console.log(orderid)
                this.$router.push({
                    path: url,
                    query: { 'orderid': orderid }, // 传递参数的方式可以是 query、params 或 hash，根据实际需求选择
                });
                // this.$router.push(`${route}`);
            },
          
           
        },
         mounted() {

              
            
        },
    
}
</script>


<style scoped>

</style>