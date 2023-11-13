<template>
     <div class="header">
      <el-button type="text" @click="goBack">
        <el-icon><ArrowLeft /></el-icon>
      </el-button>
      <h3 class="title">
        请您选择体检机构
      </h3>
    </div>
   
    <div class="row"  v-for="item in HospitalList">
        <div>
            <el-row :gutter="20" @click="jump(item.hpld)">
                <el-col :span="16"><div class="grid-content ep-bg-purple" >
                    {{ item.name }}
                </div></el-col>
                <el-col :span="8"><div class="grid-content ep-bg-purple" ><el-icon><ArrowRight /></el-icon></div></el-col>
            </el-row>
            <div class="common-layout">
                <el-container>
                <el-aside width="100px">
                    <el-image style="width: 100px; height: 100px" :src="item.picture"  />
                </el-aside>

                <el-main>
                    <el-row :gutter="20">
                        <el-col :span="8"><div class="grid-content ep-bg-purple" style="font-size: 13px;" >
                            营业时间
                        </div></el-col>
                        <el-col :span="16"><div class="grid-content ep-bg-purple" style="font-size: 13px;">
                            {{ item.businesshours }}
                        </div></el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8"><div class="grid-content ep-bg-purple" style="font-size: 13px;" >
                            采血截止
                        </div></el-col>
                        <el-col :span="16"><div class="grid-content ep-bg-purple" style="font-size: 13px;">
                            采血截止时间 {{ item.deadline }}
                        </div></el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8"><div class="grid-content ep-bg-purple" style="font-size: 13px;" >
                            电话
                        </div></el-col>
                        <el-col :span="16"><div class="grid-content ep-bg-purple" style="font-size: 13px;">
                            {{ item.telephone }}
                        </div></el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8"><div class="grid-content ep-bg-purple" style="font-size: 13px;" >
                            地址
                        </div></el-col>
                        <el-col :span="16"><div class="grid-content ep-bg-purple" style="font-size: 13px;">
                            {{ item.address }}
                        </div></el-col>
                    </el-row>
                </el-main>
                </el-container>
                <el-button type="primary" plain>联系我们</el-button>
                <el-button type="primary" plain>查找位置</el-button>
                <el-button type="primary" plain v-if="this.$store.state.user.usertype==2" @click="deleteHosp(item)">删除医院</el-button>
            </div>
            
        </div>
       
    </div>
    <div>
            <el-button type="primary" plain v-if="this.$store.state.user.usertype==2" @click="addHosp">添加医院</el-button>
         
    </div>
    

</template>

<script>
import axios from '@/axios';
import { ref, onMounted } from 'vue';

    export default {
        name: 'tjjg',
        data() {
            return{
                url: require('@/assets/66aaaf.jpg'),
                HospitalList: []
            }
        },
        methods: {
            goBack() {
            // 返回上一页的逻辑
            // 可以使用浏览器的 history API 或路由的 go 方法实现返回上一页
            // 例如：this.$router.go(-1) 或 window.history.back()
             this.$router.go(-1)
            },
            jump(hpId) {
                // 跳到选择套餐页面
               
                this.$router.push({
                    path: '/hospital/tjtc',
                    query: { hpId: `${hpId}` }, // 传递参数的方式可以是 query、params 或 hash，根据实际需求选择
                });
                // this.$router.push(`${route}`);
            },
            addHosp() {
                this.$router.push({
                    path: '/addData/addHosp'
                });
            },
            deleteHosp(data) {
                axios({
                    url: '/hospital/deleteHospital',
                    method: 'post',
                    data: data
                }).then(res => {
                    let id = this.HospitalList.findIndex(item => {
                        if (item.hpld == data.hpld) {
                            return true
                        }
                    })
                    this.HospitalList.splice(id, 1)
                   
                }).catch(e => {
                    console.log(e)
                })
            }
        },
         mounted() {

                const data = {
                }
        
                axios({
                    url: '/hospital/getHospital',
                    method: 'post',
                    data: data
                }).then(res => {

                    this.HospitalList = res.data.data
                    for (let i in this.HospitalList) {
                        // console.log(this.HospitalList[i])
                        this.HospitalList[i].picture = "http://localhost:8088/downloadFileByImage?attachGroupId="+this.HospitalList[i].picture
                       
                    }
                }).catch(e => {
                    console.log(e)
                })
            
        },
    
}
</script>

<style>
.header {
  display: flex;
  align-items: center;
  padding: 13px;
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

.row{
    margin: 5px;
    margin-top: 20px;
    margin-bottom: 10px;
    border: 1px solid #f9eeee;
}


</style>