<template>
    <div>
        <div class="header">
            <el-button type="text" @click="goBack">
                <el-icon><ArrowLeft /></el-icon>
            </el-button>
            <h3 class="title">
                健康档案
            </h3>
        </div>

        <div>
            <el-row :gutter="24" style="padding: 10px;" v-for="item in ordersListByState2" @click="jump(item)">
                <el-col :span="3"><div class="grid-content ep-bg-purple" style="text-align: left;font-size: 37.33px">
                    <el-icon><Tickets /></el-icon>
                </div></el-col>
                <el-col :span="17"><div class="grid-content ep-bg-purple" style="text-align: left;" >
                    <span style="font-weight: bold;">{{ formatDate(item.orderdate) }} 体检报告</span> <br /> {{ item.hpName }}
                </div></el-col>
                <el-col :span="4"><div class="grid-content ep-bg-purple" style="text-align: right;" >></div></el-col>
            </el-row>
        </div>
    
   

       
    </div>
</template>



<script>
import axios from '@/axios';

    export default {
        name: '',
        data() {
            return{
                ordersListByState2: []
            }
        },
        methods: {
            goBack() {
            // 返回上一页的逻辑
            // 可以使用浏览器的 history API 或路由的 go 方法实现返回上一页
            // 例如：this.$router.go(-1) 或 window.history.back()
             this.$router.go(-1)
            },
            jump(item) {
                this.$router.push({
                        path: '/hospital/tjbg',
                        query: {orderid: item.orderid,
                        date: this.formatDate(item.orderdate)}
                });
                
            },
            formatDate(dateStr) {
                const date = new Date(dateStr);

                // 使用辅助函数获取年、月、日、时、分、秒
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                const hours = String(date.getHours()).padStart(2, '0');
                const minutes = String(date.getMinutes()).padStart(2, '0');
                const seconds = String(date.getSeconds()).padStart(2, '0');

                // 根据需要的格式拼接时间字符串
                const formattedDate = `${year}年${month}月${day}日`;

                return formattedDate;
            },
          
           
        },
        mounted() {
            let req = {}
            // 查询登录的用户信息
            axios({
                url: '/orders/getOrdersListByState2',
                method: 'post',
                data: req
            }).then(res => {
                console.log(res.data)
                this.ordersListByState2 = res.data.data
            }).catch(e => {
                console.log(e)
            })
              
            
        },
    
}
</script>


<style scoped>

</style>