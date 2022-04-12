import instance  from "./axios";

const get = function(url,params,headers){
  return instance({
    url,
    method:'get',
    params,
    headers:headers
  })
}

const post = function(url,data,headers){
  return instance({
    url,
    method:'post',
    data,
    headers,
  })
} 

const put  = function(url,data,headers) {
  return instance({
    url,
    method:'post',
    data,
    headers
  })
}
export {get, post, put}