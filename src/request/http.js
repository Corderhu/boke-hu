import instance  from "./axios";

const get = function(url,params){
  return instance({
    url,
    method:'get',
    params,
  })
}

const post = function(url,data){
  return instance({
    url,
    method:'post',
    data,
  })
} 

const put  = function(url,data) {
  return instance({
    url,
    method:'post',
    data,
  })
}
export {get, post, put}