<template>
    <div>
        <div class="header">
        <el-button type="text" @click="goBack">
            <el-icon><ArrowLeft /></el-icon>
        </el-button>
        <h3 class="title">
            选择体检套餐
        </h3>
        </div>

    <div v-for="item in setmealList" :key="item.id" class="setmeal-item">
      <div class="left-content">
        <!-- 左侧内容 -->
        <h3>
            <span v-if="item.type === 1">男士套餐</span>
            <span v-if="item.type === 0">女士套餐</span>
        </h3>
        <el-button type="primary" plain v-if="this.$store.state.user.usertype==2" @click="deleteSetmel(item)">删除套餐</el-button>
        <p>{{ item.name }}</p>
      </div>
      <div class="right-content">
        <!-- 右侧详情按钮 -->
        <el-button type="primary" @click="fetchDetails(item.smid)">
            详情<el-icon><ArrowDown /></el-icon>
        </el-button>
      </div>
      <div v-if="item.show" class="details">
        <el-button type="primary" plain v-if="this.$store.state.user.usertype==2" @click="addCheckite(item)">添加检查项</el-button>
        <div  v-for="tc in item.tc" style="border: 1px solid #d6e4d6;">
            <!-- 详细信息展示块 -->
            <p>检查名称：{{ tc.ciname }}</p>
            <p>检查内容：{{ tc.cicontent }}</p>
            <p>检查意义：{{ tc.meaning }}</p>
            <el-button type="primary" plain v-if="this.$store.state.user.usertype==2" @click="deleteCheckite(tc, item)">删除检查项</el-button> <br>
          
            检查项明细:
            <el-button type="primary" plain v-if="this.$store.state.user.usertype==2" @click="addCheckitemdetailed(tc)">新增检查项明细</el-button> 
            <div v-for="cd in tc.checkitemdetailedList">
                <p style="font-size: 13px;">{{ cd.ciname }}</p>
                <el-button type="primary" plain v-if="this.$store.state.user.usertype==2" @click="deleteCheckitemdetailed(cd, item)">删除检查项明细</el-button> 
            </div>
        </div>
        
        <!-- 添加继续体检预约流程的按钮和逻辑 -->
        <el-button type="success" @click="reserveSetmeal(item)">
          继续体检预约
        </el-button>
      </div>
    </div>

    <div>
            <el-button type="primary" plain v-if="this.$store.state.user.usertype==2" @click="addSetmel">添加套餐</el-button>
         
    </div>
    </div>
</template>



<script>
import axios from '@/axios';

    export default {
        name: 'tjtc',
        data() {
            return{
                url: require('@/assets/66aaaf.jpg'),
                setmealList: [],
                hpId: 0,
                selectedSetmeal: null,
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
                    params: { 'hpId': hpId }, // 传递参数的方式可以是 query、params 或 hash，根据实际需求选择
                });
                // this.$router.push(`${route}`);
            },
            addSetmel() {
                this.$router.push({
                    path: '/addData/addSetmeal',
                   
                });
            },
            deleteSetmel(data) {
                axios({
                    url: '/setmeal/deleteSetmeal',
                    method: 'post',
                    data: data
                }).then(res => {
                    let id = this.setmealList.findIndex(item => {
                        if (item.smid == data.smid) {
                            return true
                        }
                    })
                    this.setmealList.splice(id, 1)
                   
                }).catch(e => {
                    console.log(e)
                })
            },
            addCheckite(item) {
                this.$router.push({
                    path: '/addData/addCheckite',
                    query: {  smid: item.smid, name:item.name }, // 传递参数的方式可以是 query、params 或 hash，根据实际需求选择
                });
            },
            deleteCheckite(data, item) {
                axios({
                    url: '/checkitem/deleteCheckitem',
                    method: 'post',
                    data: data
                }).then(res => {
                   this.fetchDetails(item.smid)
                   
                }).catch(e => {
                    console.log(e)
                }) 
            },
            addCheckitemdetailed(item) {
                this.$router.push({
                    path: '/addData/addCheckitemdetailed',
                    query: {  cild: item.cild, ciname:item.ciname }, // 传递参数的方式可以是 query、params 或 hash，根据实际需求选择
                });
            },
            deleteCheckitemdetailed(data, item) {
                axios({
                    url: '/checkitemdetailed/deleteCheckitemD',
                    method: 'post',
                    data: data
                }).then(res => {
                   this.fetchDetails(item.smid)
                   
                }).catch(e => {
                    console.log(e)
                }) 
            },
            async fetchDetails(smid) {
                const req = {
                    'smid': smid
                }
                await axios({
                    url: '/checkitem/getCheckitemBySmid',
                    method: 'post',
                    data: req
                }).then(res => {
                    // this.HospitalList = res.data.data
                    // 更新对应套餐的详细信息
                    const setmeal = this.setmealList.find(item => item.smid === smid);
                    console.log(res.data.data)
                    if (setmeal.show) {
                        setmeal.show = false;
                    } else {
                        setmeal.show = true;
                    }
                    setmeal.tc = res.data.data
                }).catch(e => {
                    console.error('获取详细信息失败', error);
                })
            },
            reserveSetmeal(item) {
                // 执行体检预约流程的逻辑
                // 可以使用路由跳转到预约页面或执行其他相关操作
                console.log(item)
                this.$router.push({
                    path: '/hospital/tjri',
                    query: { hpId: this.hpId, smid: item.smid }, // 传递参数的方式可以是 query、params 或 hash，根据实际需求选择
                });
            },
        },
         mounted() {

                const data = {
                };
                this.hpId = this.$route.query.hpId
                axios({
                    url: '/setmeal/getSetmeal',
                    method: 'post',
                    data: data
                }).then(res => {
                    
                    this.setmealList = res.data.data
                }).catch(e => {
                    console.log(e)
                })
            
        },
    
}
</script>


<style scoped>
.setmeal-item {
  /* display: flex; */
  /* align-items: center; */
  margin: 10px;
  border: 1px solid #f0f0f0;
}

.left-content {
  flex: 1;
}

.right-content {
  margin-left: 10px;
}

.details {
  margin-top: 10px;
  padding: 10px;
  background-color: #f0f0f0;
}
</style>