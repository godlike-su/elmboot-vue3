<template>
    <div>
        <div class="header">
            <el-button type="text" @click="goBack">
                <el-icon><ArrowLeft /></el-icon>
            </el-button>
            <h3 class="title">
                确认订单
            </h3>
        </div>

        <div>
            <el-row :gutter="20" style="padding: 5px; border: 1px solid ghostwhite;margin: 5px;">
                <el-col :span="8"><div class="grid-content ep-bg-purple" style="font-weight: bold;text-align: left;">体检人信息</div></el-col>
                <el-col :span="11"><div class="grid-content ep-bg-purple" ></div></el-col>
                <el-col :span="1"><div class="grid-content ep-bg-purple" ></div></el-col>
            </el-row>
            <el-row :gutter="20" style="padding: 5px; margin: 5px;">
                <el-col :span="6"><div class="grid-content ep-bg-purple" style="text-align: left;">姓名</div></el-col>
                <el-col :span="12"><div class="grid-content ep-bg-purple" style="text-align: left;">{{ users.realname }}</div></el-col>
            </el-row>
            <el-row :gutter="20" style="padding: 5px; margin: 5px;">
                <el-col :span="6"><div class="grid-content ep-bg-purple" style="text-align: left;">证件号码</div></el-col>
                <el-col :span="12"><div class="grid-content ep-bg-purple" style="text-align: left;">{{ users.identitycard }}</div></el-col>
            </el-row>
            <el-row :gutter="20" style="padding: 5px; margin: 5px;">
                <el-col :span="6"><div class="grid-content ep-bg-purple" style="text-align: left;">出生日期</div></el-col>
                <el-col :span="12"><div class="grid-content ep-bg-purple" style="text-align: left;">{{ formatDate(users.birthday) }}</div></el-col>
            </el-row>
            <el-row :gutter="20" style="padding: 5px; margin: 5px;">
                <el-col :span="6"><div class="grid-content ep-bg-purple" style="text-align: left;">手机号码</div></el-col>
                <el-col :span="12"><div class="grid-content ep-bg-purple" style="text-align: left;">{{ users.userid }}</div></el-col>
            </el-row>
        </div>

        <div>
            <el-row :gutter="20" style="padding: 5px; border: 1px solid ghostwhite;margin: 5px;">
                <el-col :span="8"><div class="grid-content ep-bg-purple" style="font-weight: bold;text-align: left;">体检日期</div></el-col>
                <el-col :span="12"><div class="grid-content ep-bg-purple" ></div></el-col>
            </el-row>
            <el-row :gutter="20" style="padding: 5px; margin: 5px;">
                <el-col :span="20"><div class="grid-content ep-bg-purple" style="text-align: left;">{{ formatDate(orderdate) }}</div></el-col>
            </el-row>
        </div>

        
        <div>
            <el-row :gutter="20" style="padding: 5px; border: 1px solid ghostwhite;margin: 5px;">
                <el-col :span="8"><div class="grid-content ep-bg-purple" style="font-weight: bold;text-align: left;">体检机构</div></el-col>
                <el-col :span="12"><div class="grid-content ep-bg-purple" ></div></el-col>
            </el-row>
            <el-row :gutter="20" style="padding: 5px; margin: 5px;">
                <el-col :span="20"><div class="grid-content ep-bg-purple" style="text-align: left;">{{ hospital.name }}</div></el-col>
            </el-row>
            <el-row :gutter="20" style="padding: 5px; margin: 5px;">
                <el-col :span="6"><div class="grid-content ep-bg-purple" style="text-align: left;">营业时间</div></el-col>
                <el-col :span="12"><div class="grid-content ep-bg-purple" style="text-align: left;">{{ hospital.businesshours }}</div></el-col>
            </el-row>
            <el-row :gutter="20" style="padding: 5px; margin: 5px;">
                <el-col :span="6"><div class="grid-content ep-bg-purple" style="text-align: left;">采血截止</div></el-col>
                <el-col :span="12"><div class="grid-content ep-bg-purple" style="text-align: left;">{{ hospital.deadline }}</div></el-col>
            </el-row>
            <el-row :gutter="20" style="padding: 5px; margin: 5px;">
                <el-col :span="6"><div class="grid-content ep-bg-purple" style="text-align: left;">机构电话</div></el-col>
                <el-col :span="12"><div class="grid-content ep-bg-purple" style="text-align: left;">{{ hospital.telephone }}</div></el-col>
            </el-row>
            <el-row :gutter="20" style="padding: 5px; margin: 5px;">
                <el-col :span="6"><div class="grid-content ep-bg-purple" style="text-align: left;">机构地址</div></el-col>
                <el-col :span="12"><div class="grid-content ep-bg-purple" style="text-align: left;">{{ hospital.address }}</div></el-col>
            </el-row>
            <el-row :gutter="20" style="padding: 5px; margin: 5px;">
                <el-col :span="6"><div class="grid-content ep-bg-purple" style="text-align: left;">规则</div></el-col>
                <el-col :span="12"><div class="grid-content ep-bg-purple" style="text-align: left;">{{ hospital.rule }}</div></el-col>
            </el-row>
        </div>
        <div>
            <el-row :gutter="20" style="padding: 5px; border: 1px solid ghostwhite;margin: 5px;">
                <el-col :span="8"><div class="grid-content ep-bg-purple" style="font-weight: bold;text-align: left;">体检项目</div></el-col>
                <el-col :span="12"><div class="grid-content ep-bg-purple" ></div></el-col>
            </el-row>
           
            <el-row :gutter="20" style="padding: 5px; margin: 5px;">
                <el-col :span="6" v-if="setmeal.type === 1"><div class="grid-content ep-bg-purple" style="text-align: left;" >男士套餐</div></el-col>
                <el-col :span="6" v-if="setmeal.type === 0"><div class="grid-content ep-bg-purple" style="text-align: left;" >女士套餐</div></el-col>
                <el-col :span="12"><div class="grid-content ep-bg-purple" style="text-align: left;">{{ setmeal.name }}</div></el-col>
            </el-row>
            <el-row :gutter="20" style="padding: 5px; margin: 5px;">
                <el-col :span="20"><div class="grid-content ep-bg-purple" style="text-align: left;">套餐详情：</div></el-col>
            </el-row>
           
            <div  v-for="item in checkitem ">
                <el-row :gutter="20" style="padding: 5px; margin: 5px;">
                    <el-col :span="8"><div class="grid-content ep-bg-purple" style="text-align: left;" >检查项名称</div></el-col>
                    <el-col :span="12"><div class="grid-content ep-bg-purple" style="text-align: left;">{{ item.ciname }}</div></el-col>
                </el-row>
                
                <el-row :gutter="20" style="padding: 5px; margin: 5px;" v-if="item.checkitemdetailedList != ''">
                    <el-col :span="20"><div class="grid-content ep-bg-purple" style="text-align: left;font-size: 13px;font-weight: bold;">包含项目明细:</div></el-col>
                 </el-row>
                <div v-for="it in item.checkitemdetailedList">
                    <el-row :gutter="20" style="padding: 5px; margin: 5px;">
                        <el-col :span="20"><div class="grid-content ep-bg-purple" style="text-align: left;font-size: 13px;">{{ it.ciname }}</div></el-col>
                     </el-row>
                </div>
            </div>
            

            <el-row :gutter="24" style="padding: 10px; margin-top: 10px; margin-bottom: 10px;background-color: azure;">
                <el-col :span="10" ><div class="grid-content ep-bg-purple" style="text-align: left;" >
                    实付款：<span style="color: coral;">￥{{ setmeal.price }}</span></div>
                </el-col>
                <el-col :span="14"><div class="grid-content ep-bg-purple" style="text-align: right;">
                    <el-button type="primary" @click="jump">确认支付</el-button>
                </div></el-col>
            </el-row>

        </div>

    </div>
</template>


<script>
import axios from '@/axios';
import { ref, onMounted } from 'vue';

    export default {
        name: 'qrdd',
        data() {
            return {
                orderdate: '',
                hpld: '',
                smid:'',
                users: '',
                hospital: '',
                setmeal: '',
                checkitem: [],
             
                
            };
    },
        methods: {
            goBack() {
            // 返回上一页的逻辑
            // 可以使用浏览器的 history API 或路由的 go 方法实现返回上一页
            // 例如：this.$router.go(-1) 或 window.history.back()
             this.$router.go(-1)
            },
            jump() {
            
                // 提交订单
                let req = {}
                req.orderdate = this.formatDate2(this.orderdate);
                req.userid = this.users.userid;
                req.hpld = this.hpld;
                req.smid = this.smid;
                // 订单状态(1: 末归档 ; 2 : 已归档 )
                req.state = 1;
                axios({
                url: '/orders/addOrderMe',
                method: 'post',
                data: req
                }).then(res => {
                
                    console.log(res.data)
                    this.$router.push({
                     path: '/hospital/yycg',
                     query: {orderid: res.data.message}
                    });
               
                }).catch(e => {
                    alert(e.data.message)
                    console.log(e)
                })
              
                
                // this.$router.push(`${route}`);
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
            formatDate2(dateStr) {
                const date = new Date(dateStr);

                // 使用辅助函数获取年、月、日、时、分、秒
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                const hours = String(date.getHours()).padStart(2, '0');
                const minutes = String(date.getMinutes()).padStart(2, '0');
                const seconds = String(date.getSeconds()).padStart(2, '0');

                // 根据需要的格式拼接时间字符串
                const formattedDate = `${year}-${month}-${day}`;

                return formattedDate;
            },
          
        },
         mounted() {
            this.hpld = this.$route.query.hpId
            this.smid = this.$route.query.smid
            this.orderdate = this.$route.query.orderdate
            let req = {}
            // 查询登录的用户信息
            axios({
                url: '/users/getMe',
                method: 'post',
                data: null
            }).then(res => {
               
                this.users = res.data.data
            }).catch(e => {
                console.log(e)
            })
            req.hpld = this.hpld;
            // 查询医院信息
            axios({
                url: '/hospital/getHospitalByHpld',
                method: 'post',
                data: req
            }).then(res => {
               
                this.hospital = res.data.data
            }).catch(e => {
                console.log(e)
            })
            // 查询套餐信息
            req = {}
            req.smid = this.smid
            axios({
                url: '/setmeal/getSetmeal',
                method: 'post',
                data: req
            }).then(res => {
                // console.log(res.data)
                this.setmeal = res.data.data[0]
            }).catch(e => {
                console.log(e)
            })
            // 套餐详情
            axios({
                url: '/checkitem/getCheckitemBySmid',
                method: 'post',
                data: req
            }).then(res => {
                // console.log(res.data)
                this.checkitem = res.data.data
            }).catch(e => {
              
                console.log(e)
            })
            
            
            
        },
        

    
}
</script>