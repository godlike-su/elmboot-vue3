import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios'  //如果需要axios，请引入

import ElementPlus from 'element-plus'  //引入element-plus库
import VForm3 from 'vform3-builds'  //引入VForm3库

import 'element-plus/dist/index.css'  //引入element-plus样式
import 'vform3-builds/dist/designer.style.css'  //引入VForm3样式

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


// Vue.config.productionTip = false

const app = createApp(App)
app.use(ElementPlus)  //全局注册element-plus
app.use(VForm3)  //全局注册VForm3(同时注册了v-form-designe、v-form-render等组件)
/* 注意：如果你的项目中有使用axios，请用下面一行代码将全局axios复位为你的axios！！ */

app.config.globalProperties.$axios = axios;


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(store).use(router)

app.mount('#app')
