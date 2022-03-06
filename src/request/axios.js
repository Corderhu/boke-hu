import config from '@/config/index.js'
import axios from 'axios'

const instance = axios.create({
    baseurl:config.baseurl,
    timeout:6000,
    headers: {
        'content-type': "application/json"
      }
})

// 添加请求拦截器，主要用于token 认证问题
instance.interceptors.request(request=>{

})
console.log(config.baseurl)