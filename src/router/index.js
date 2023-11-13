import { createRouter, createWebHistory } from 'vue-router'


import Tabbar from '@/components/Tabbar.vue'
import Index from '../views/hospital/index.vue'
import Hospital from '../views/hospital/index.vue'
import Discover from '../views/discover/index.vue'
import Mall from '../views/mall/index.vue'
import login from '../views/login.vue'
import regiester from '../views/regiester.vue'

// 体检预约
import tjyy from '@/views/hospital/tjyy.vue'
// 体检机构
import tjjg from '@/views/hospital/tjjg.vue'
import tjtc from '@/views/hospital/tjtc.vue'
import tjri from '@/views/hospital/tjri.vue'
import qrdd from '@/views/hospital/qrdd.vue'
import yycg from '@/views/hospital/yycg.vue'
import jkda from '@/views/hospital/jkda.vue'
import tjbg from '@/views/hospital/tjbg.vue'

import addHosp from '@/views/addData/addHosp.vue'
import addSetmeal from '@/views/addData/addSetmeal.vue'
import addCheckite from '@/views/addData/addCheckite.vue'
import addCheckitemdetailed from '@/views/addData/addCheckitemdetailed.vue'


import Profile from '../views/profile/index.vue'
import wdyy from '../views/profile/wdyy.vue'
import store from '@/store'

const routes = [ 
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/addData/addCheckitemdetailed',
    name: 'addCheckitemdetailed',
    component: addCheckitemdetailed
  },
  {
    path: '/addData/addCheckite',
    name: 'addCheckite',
    component: addCheckite
  },
  {
    path: '/addData/addSetmeal',
    name: 'addSetmeal',
    component: addSetmeal
  },
  {
    path: '/addData/addHosp',
    name: 'addHosp',
    component: addHosp
  },
  {
    path: '/regiester',
    name: 'regiester',
    component: regiester
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/tabbar',
    name: 'tabbar',
    component: Tabbar
  },
  // 我
  {
    path: '/profile/wdyy',
    name: 'wdyy',
    component: wdyy
  },
  // 体检预约  
  {
    path: '/hospital/tjyy',
    name: 'tjyy',
    component: tjyy
  },
  {
    path: '/hospital/tjbg',
    name: 'tjbg',
    component: tjbg
  },
  {
    path: '/hospital/jkda',
    name: 'jkda',
    component: jkda
  },
  {
    path: '/hospital/tjjg',
    name: 'tjjg',
    component: tjjg
  },
  {
    path: '/hospital/tjtc',
    name: 'tjtc',
    component: tjtc
  },
  {
    path: '/hospital/tjri',
    name: 'tjri',
    component: tjri
  },
  {
    path: '/hospital/qrdd',
    name: 'qrdd',
    component: qrdd
  },
  {
    path: '/hospital/yycg',
    name: 'yycg',
    component: yycg
  },
  // 云医院
  {
    path: '/hospital',
    name: 'hospital',
    component: Hospital,
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      },
     
      
    ]
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    children: [

    ]
  },
  {
    path: '/mall',
    name: 'mall',
    component: Mall,
    children: [

    ]
  },
  
  {
    path: '/discover',
    name: 'discover',
    component: Discover,
    children: [

    ]
  },
 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (from.path === '/' || from.path === '/regiester') {
    
    store.commit('setTabbar', true)
  }
  next();
});


export default router
