import config from "@/config/index.js"
import axios from "axios"

const instance = axios.create({
    baseurl: config.baseurl,
    timeout: 10000, // 10秒请求超时
    headers: {
        "content-type": "application/json",
    },
})

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
    return config.data
})
console.log(config.baseurl)