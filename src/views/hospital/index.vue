<template>
  <div class="common-layout">
      
    <el-select v-model="selectedItem" placeholder="请选择" @change="handleSelectChange">
      <el-option v-for="item in options" :key="item.hpld" :label="item.name" :value="item.hpld"></el-option>
    </el-select>
    
    <div class="demo-image ul">
     
        <!-- <span class="demonstration">{{ fit }}</span> -->
        <el-image style="width: 350px; height: 180px" :src="url" :fit="fit" />
     
    </div>

    <div class="common-layout ul" @click="jump('')">
      <el-container>
        <el-aside width="200px">
          <el-icon><Comment /></el-icon>
        </el-aside>
        <el-container>
          <el-header style="font-weight: bold;">免费咨询</el-header>
          <el-main>新型冠状病毒肺炎</el-main>
        </el-container>
      </el-container>
    </div>

    <div class="common-layout ul" @click="jump('/hospital/tjyy')">
      <el-container>
        <el-aside width="200px">
          <el-icon><Avatar /></el-icon>
        </el-aside>
        <el-container>
          <el-header style="font-weight: bold;">团检预约</el-header>
          <el-main>团体体验套餐定制</el-main>
        </el-container>
      </el-container>
    </div>

    <div>
      <el-row :gutter="20" style="padding: 5px; border: 1px solid ghostwhite;margin: 5px;">
          <el-col :span="8"><div class="grid-content ep-bg-purple" style="font-weight: bold;text-align: left;">我的健康报告</div></el-col>
          <el-col :span="11"><div class="grid-content ep-bg-purple" ></div></el-col>
          <el-col :span="1"><div class="grid-content ep-bg-purple" ></div></el-col>
      </el-row>
      <el-row :gutter="24" style="padding: 5px; margin: 5px;">
          <el-col :span="18"><div class="grid-content ep-bg-purple" style="text-align: left;">随时随地查看体检报告</div></el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" style="text-align: left;"><el-button type="info" @click="jump('/hospital/jkda')">立即查看</el-button></div></el-col>
      </el-row>
    </div>

  
     
  </div>
</template>

<script>
import { reactive } from 'vue'
import axios from '@/axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import store from '@/store';
const router = useRouter()

export default {
  name: 'index',
  data() {
    return{
      fits: ref(['contain']),
      url: require('@/assets/234567.png')
    }
  },
  methods: {
    jump(route) {
      console.log(`${route}`)
      this.$router.push(`${route}`);
    }
  },
  setup() {
    const selectedItem = ref(null);
    const options = ref([]);
   

    // 在页面加载时调用接口获取数据
    onMounted(() => {
      fetchData();
    });

    // 调用接口获取数据
    const fetchData = async () => {
      const data = {

      }
      let req = {}
        // 查询登录的用户信息
        axios({
            url: '/users/getMe',
            method: 'post',
            data: null
        }).then(res => {
            store.commit('setUser', res.data.data)
            console.log(res.data)
           
        }).catch(e => {
            console.log(e)
        })

      try {
        const response = await axios.post('/hospital/getHospital', data); // 替换为你的接口地址
       
        options.value = response.data.data; // 将获取的数据赋值给选项列表
      } catch (error) {
        console.error(error);
      }
    };

    const handleSelectChange = (value) => {
      console.log('Selected value:', value);
    };

    return {
      selectedItem,
      options,
      handleSelectChange,
    };
  },
}





</script>

<style scoped>
.demo-image .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image .block:last-child {
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.demo-image .ul {
  margin: 5px;
}
.common-layout .ul {
  border: 1px solid #f9eeee;
  margin: 5px;
}
</style>