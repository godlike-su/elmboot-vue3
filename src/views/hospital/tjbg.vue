<template>
    <div>
        <div class="header">
            <el-button type="text" @click="goBack">
                <el-icon><ArrowLeft /></el-icon>
            </el-button>
            <h3 class="title">
                {{ date }}体检报告
            </h3>
        </div>

        <div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">总结结论</el-menu-item>
                <span style="width: 100px;"></span>
                <el-menu-item index="2">报告详情</el-menu-item>             
            </el-menu>
        </div>
    
        <div v-if="isShow">
            <div style="background-color: #7fbfff;border-top-left-radius: 5px;border-top-right-radius: 5px;margin-top: 10px;height: 35px;">
                <p style="padding: 5px;text-align: left ;color: #FFF;">
                    异常项
                </p>
            </div>
            <div style="border: 1px solid hsl(92, 27%, 88%);" v-for="item in yccidetailedreport">
                <el-row :gutter="24">
                    <el-col :span="10">
                        <p style="text-align: left ;">
                            <span style="color: #FFF;background-color: coral;" v-if="item.iserror === 1">异</span>
                            {{ item.name }}
                        </p>
                    </el-col>
                    <el-col :span="14" style="text-align: left;">
                        {{ item.value }}{{ item.unit }} <br>
                        <span style="font-size: 13px;">正常值范围：
                            <span v-if="item.type===3">无需验证</span>
                            <span v-if="item.type===4">{{ item.normalValueString }}</span>
                            <span v-if="item.type===1">
                                {{ item.minrange }} ~  {{ item.maxrange }}
                            </span>
                            <span v-if="item.type===2">
                                {{ item.minrange }} =  {{ item.maxrange }}
                            </span>
                            {{ item.unit }}
                        </span>
                    </el-col>
                </el-row>
            </div>

            <div style="background-color: #7fbfff;border-top-left-radius: 5px;border-top-right-radius: 5px;margin-top: 10px;height: 35px;">
                <p style="padding: 5px;text-align: left ;color: #FFF;">
                    一、尊敬的客户，您本次体检结论如下：
                </p>
            </div>
            <div style="border: 1px solid hsl(92, 27%, 88%);" v-for="(item,i) in oberallresult" >
                <el-row :gutter="24">
                    <el-col :span="24">
                        <p style="text-align: left ;">
                           {{ i+1 }}、 {{ item.title }}
                        </p>
                    </el-col>
                </el-row>
            </div>




            <div style="background-color: #7fbfff;border-top-left-radius: 5px;border-top-right-radius: 5px;margin-top: 10px;height: 35px;">
                <p style="padding: 5px;text-align: left ;color: #FFF;">
                    二、尊敬的客户，您本次体检建议信息如下：
                </p>
            </div>
            <div style="border: 1px solid hsl(92, 27%, 88%);" v-for="(item,i) in oberallresult" >
                <el-row :gutter="24">
                    <el-col :span="24">
                        <p style="text-align: left ;font-weight: bold;">
                           {{ i+1 }}、 {{ item.title }}
                        </p>
                        <p style="text-align: left ;text-indent: 2em">
                            {{ item.content }}
                        </p>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div v-if="!isShow">
            <div v-for="item in checkitem">
                <div style="background-color: #7fbfff;border-top-left-radius: 5px;border-top-right-radius: 5px;margin-top: 10px;height: 35px;" 
                >
                    <p style="padding: 5px;text-align: left ;color: #FFF;">
                        {{ item.ciname }}
                    </p>
                </div>
                <div style="border: 1px solid hsl(92, 27%, 88%);" v-for="cid in item.cidetailedreportList">
                    <el-row :gutter="24">
                        <el-col :span="10">
                            <p style="text-align: left ;">
                                <span style="color: #FFF;background-color: coral;" v-if="cid.iserror === 1">异</span>
                                {{ cid.name }}
                            </p>
                        </el-col>
                        <el-col :span="14" style="text-align: left;">
                            {{ cid.value }} {{ cid.unit }} <br>
                            <span style="font-size: 13px;">正常值范围：
                                <span v-if="cid.type===3">无需验证</span>
                                <span v-if="cid.type===4">{{ cid.normalValueString }}</span>
                                <span v-if="cid.type===1">
                                    {{ cid.minrange }} ~  {{ cid.maxrange }}
                                </span>
                                <span v-if="cid.type===2">
                                    {{ cid.minrange }} =  {{ cid.maxrange }}
                                </span>
                                {{ cid.unit }}
                            </span>
                        </el-col>
                    </el-row>
                </div>
             </div>
        </div>
   

       
    </div>
</template>



<script>
import axios from '@/axios';

    export default {
        name: 'tjbg',
        data() {
            return{
              date: '',
              isShow: true,
              activeIndex: '1',
              orders: '',
              orderid: '',
              yccidetailedreport: [],
              oberallresult: [],
              checkitem: '',

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
            handleSelect(key, keyPath) {
                if (key === '1') {
                    this.isShow = true;
                } else {
                    this.isShow = false;
                }
               
            }
          
           
        },
         mounted() {
            this.date = this.$route.query.date
            this.orderid = this.$route.query.orderid
            let req = {}
            req.orderid = this.orderid
            // 根据订单id查询订单信息
            axios({
                url: '/orders/getOrdersById',
                method: 'post',
                data: req
            }).then(res => {
                // console.log(res.data)
                this.orders = res.data.data
            }).catch(e => {
                console.log(e)
            })
            // 总结结论
            axios({
                url: '/oberallresult/list',
                method: 'post',
                data: req
            }).then(res => {
                // console.log(res.data)
                this.oberallresult = res.data.data
            }).catch(e => {
                console.log(e)
            })
            // 获取异常项目
            req = {}
            req.orderld = this.orderid
            axios({
                url: '/cidetailedreport/listIserror1ByOrderId',
                method: 'post',
                data: req
            }).then(res => {
                // console.log(res.data)
                this.yccidetailedreport = res.data.data
            }).catch(e => {
                console.log(e)
            })
            axios({
                url: '/cidetailedreport/listCideByOrderId',
                method: 'post',
                data: req
            }).then(res => {
                console.log(res.data)
                this.checkitem = res.data.data
            }).catch(e => {
                console.log(e)
            })
            
        },
    
}
</script>


<style scoped>

</style>