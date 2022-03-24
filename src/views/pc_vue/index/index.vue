<template>
  <div class="index">
    <Welcome></Welcome>
    <!-- 主要内容 -->
    <div class="content" v-if="!isSetting">
      <div class="left">22121</div>
      <div class="right">22121</div>
    </div>
    <!-- 设置内容 -->
     <div class="setting" v-else>
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Welcome from "./components/welcome.vue"
export default {
  components: {
    Welcome,
  },
  data() {
    return {
      isSetting:false
    }
  },
}
</script>
<style lang="scss" scoped>
.index {
  // background-color: #fff;
  .content {
    
    width: 1200px;
    margin: 80px auto 0;
    position: relative;
    overflow: hidden;
    .left {
      // min-height: 100%;
      background-color: #fff;
      width: 75%;
      float: left;
      overflow: hidden;
    }
    .right {
      // min-height: 100%;
      background-color: #fff;
      width: 282px;
      float: right;
      overflow: hidden;
    }
  }
}
</style>
