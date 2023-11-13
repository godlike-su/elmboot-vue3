<template>
    <div>
        <div class="header">
            <el-button type="text" @click="goBack">
                <el-icon><ArrowLeft /></el-icon>
            </el-button>
            <h3 class="title">
                我的预约
            </h3>
        </div>

        <div style="height: 50px;border: 1px solid ghostwhite;padding: 10px;" v-for="item in orders">
            <el-col :span="24"><div class="grid-content ep-bg-purple" style="text-align: left;font-size: 10px;">{{ formatDate(item.orderdate) }}</div></el-col>
          <el-row :gutter="24" style="  margin-top: 10px;font-weight: bold;" >
            <el-col :span="10"><div class="grid-content ep-bg-purple" style="text-align: left;">{{ item.name }}</div></el-col>
            
            <el-col :span="14" v-if="isShowYy(item.orderdate)" @click="cancleOrder(item.orderid)">
                <div class="grid-content ep-bg-purple"  style="text-align: right;color: coral;">取消订单</div>
            </el-col>
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
                orders: []
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
            isShowYy(data) {
                let now = new Date()
                let d = new Date(data)
              
                if (d > now) {
                    return true;
                }
                return false;
            },
            cancleOrder(orderid) {
                console.log('取消订单' + orderid)
           
     
                let req = {}
                req.orderid = orderid
                axios({
                    url: '/orders/deleteOrder',
                    method: 'post',
                    data: req
                }).then(res => {
                    this.orders = this.orders.filter(item => item.orderid !== orderid);
                
                }).catch(e => {
                    console.log(e)
                })
           
            }
          
           
        },
         mounted() {

            let req = {}
            // 查询登录的用户信息
            axios({
                url: '/orders/getOrdersMe',
                method: 'post',
                data: null
            }).then(res => {
                console.log(res.data)
                this.orders = res.data.data
            }).catch(e => {
                console.log(e)
            })
            
        },
    
}
</script>


<style scoped>

</style>