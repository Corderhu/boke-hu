<template>
  <div class="welcome">
    <img class="img" src="@/assets/index/leftWelcome.png" style="margin-top:26px" />
    <img class="img" src="@/assets/index/rightWelcome.png" style="float:right"/>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.welcome {
  padding-left: 368px;
  padding-top: 8px;
   padding-right: 300px; 
  .img {
   
    width: 284px;
    height: 543px;
  }
}
</style>
