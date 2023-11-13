import axios from 'axios';
import store from '@/store'
import router from '@/router';

const baseURL = "http://localhost:8088"

// 创建 Axios 实例
const instance = axios.create({
  // baseURL: 'http://localhost:8088/', // 替换为你的 API 地址
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 可以修改请求配置，添加认证信息等
    // console.log('访问路径为： ' + config.url);
  
    if(config.method.toUpperCase() === 'GET'){
			// console.log('GET请求')
      config.url = baseURL + config.url
		}else{
     
      if (store.state.Cookie!='') {
        config.url = baseURL + config.url
				config.contentType = 'application/json';
				config.headers = {'Content-Type':'application/json'};
				config.dataType = 'json';
				config.data = JSON.stringify(config.data)
				// config.methods = 'post' 
				config.method = 'post'
        config.headers.Authorization = store.state.Cookie
       
      }
		
			else{
        config.url = baseURL + config.url
				config.contentType = 'application/json';
				config.headers = {'Content-Type':'application/json'};
				config.dataType = 'json';
				config.data = JSON.stringify(config.data)
				// config.methods = 'post' 
				config.method = 'post'
      
				// console.log(config)
			}
			
		}
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    console.error('请求拦截器错误', error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做些什么
   
    console.log(response.data.status)
    if (response.data.status == 401) {
      alert('登录权限不足')
      router.push({
        path: '/',
      });
      return;
    }
    if (response.data.status != 200) {

      return Promise.reject(response);
    }
    return response;
  },
  function (error) {
    // 对响应错误做些什么
    console.error('响应拦截器错误', error);
    return Promise.reject(error);
  }
);

export default instance;
