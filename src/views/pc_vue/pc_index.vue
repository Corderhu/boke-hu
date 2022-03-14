<template>
  <div class="pc">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from "@/components/common/pc/indexNavBar.vue" 
export default {
  components:{
    Navbar,
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
<style scoped></style>
