import config from "@/config/index.js"
import axios from "axios"

const instance = axios.create({
    baseURL: config.baseurl,
    timeout: 10000, // 10秒请求超时
    headers: {
        "content-type": "application/json",
    },
})
let refreshToken = false
let newInstanceArr = []
// 添加请求拦截器，主要用于token 认证问题
instance.interceptors.request.use((config) => {
    let token = localStorage.getItem("token")
    if (token) {
        // 有token添加token ，无则不添加
        config.headers["Authorization"] = "Bearer " + token
    }
    return config
})
//  处理请求结果

instance.interceptors.response.use((config) => {
    let data = config.data
    // return config.data
    // 处理token 过期问题
    if (data.code == 1001) {
        if (!refreshToken) {
            refreshToken = true
            // 请求新的token
            axios.get('http://192.168.1.11:8886/users/refreshToken', {params:{ token: data.data.token }}).then((data) => {
                console.log(data)
                if (data.data.code == 200) {
                    config.headers['Authorization'] = data.data.data.token
                    localStorage.setItem('token', data.data.data.token)
                    newInstanceArr.forEach(element => {
                        element()
                    });
                    newInstanceArr = []
                }
            }).catch(() => {

            }).finally(() => {
                refreshToken = false //重新归正，下次刷新
            })
        }
        return new Promise(resolve=>{
            newInstanceArr.push(()=>{
                resolve(instance(config.config))
            })
           
        })
        
    }
})
export default instance 
// console.log(config.baseurl)