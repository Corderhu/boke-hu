<template>
  <div class="m">移动端</div>
</template>
<script>
export default {
  mounted() {
     //在移动端与web首页判定避免一直app.vue中一直触发(只在首页第一次触发，在网页中输入网址不会一直处在首页)
    this._isMobile()
  },
  methods: {
     _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      if (flag) {
        // 移动端
        // this.$router.replace("/m_index")
      } 
      else {
        // web端
        this.$router.replace("/pc_index")
      }
    },
  },
}
</script>
<style scoped></style>
