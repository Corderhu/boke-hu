<template>
  <div class="pc">
    <Navbar></Navbar>
    <!-- <div></div> -->
    <router-view></router-view>
    <post-a/>
  </div>
</template>
<script>
import Navbar from "@/components/common/pc/indexNavBar.vue" 
import PostA from "@/components/common/pc/PostA.vue"
// import PostA from '../../components/common/pc/PostA.vue'
export default {
  components:{
    Navbar,
    PostA
   
  },
  created() {},
  mounted() {
    //在移动端与web首页判定避免一直app.vue中一直触发(只在首页第一次触发，在网页中输入网址不会一直处在首页)
    this._isMobile()
  },
  methods: {
     // 判断是移动端还是web端，进入不同的页面
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      if (flag) {
        // 移动端
        this.$router.replace("/m_index")
      } 
      else {
        // web端
        if(this.$route.name != 'index'){
          this.$router.replace("/pc_index/index")
        }
        
      }
    },
  },
}
</script>
<style scoped lang='scss'>
.edit{
  position: fixed;
  right:30px;
  bottom:150px;
  font-size: 30px;
  background-color: #fff;
  opacity: 0.3;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  &:hover{
    content: '上传文章';
  }
}
</style>
