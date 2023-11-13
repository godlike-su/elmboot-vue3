<template>
    <div>
        <div class="header">
        <el-button type="text" @click="goBack">
            <el-icon><ArrowLeft /></el-icon>
        </el-button>
        <h3 class="title">
            选择体检日期
        </h3>
        </div>


        <div>
          
            <el-calendar v-model="orderdate" />
        </div>
        <el-button type="primary" plain @click="jump">下一步</el-button>

     


        <el-dialog
            v-model="dialogVisible"
            title=""
            width="80%"
            :before-close="handleClose"
        >
            <span>{{ message }}</span>
            <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">
                Confirm
                </el-button>
            </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
import axios from '@/axios';
import { ref, onMounted } from 'vue';

    export default {
        name: 'tjri',
        data() {
            return {
                orderdate: '',
                dialogVisible: false,
                message: '请选择预约日期'
                
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
                if (this.orderdate === '') {
                    this.message = "请选择预约日期"
                    this.dialogVisible = true;

                    return;
                }
                let now = new Date()
                if (this.orderdate < now) {
                    this.dialogVisible = true;
                    this.message = "预约日期不能小于当天日期"
                    return;
                }
                // 跳到选择套餐页面
                let hpId = this.$route.query.hpId
                let smid = this.$route.query.smid
                this.$router.push({
                    path: '/hospital/qrdd',
                    query: { orderdate: this.orderdate, hpId: hpId, smid: smid }, // 传递参数的方式可以是 query、params 或 hash，根据实际需求选择
                });
                
                // this.$router.push(`${route}`);
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
            }
        },
         mounted() {

            
            
        },
        

    
}
</script>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>