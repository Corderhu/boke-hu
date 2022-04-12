<template>
  <div class="index">
    <!-- 主要内容 -->
    <div class="content" v-if="!isSetting">
      <div class="left">
        <div class="header">
          <div class="banner">
            <el-carousel :interval="4000"  height="260px" >
              <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="img"></div>
        </div>
      </div>
      <div class="right" :style="{height:height}">22121</div>
    </div>
    <!-- 设置内容 -->
    <div class="setting" v-else>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isSetting: false,
      height:'10px'
    };
  },
  mounted(){
    this.height = '20px'
  },
  updated(){
    console.log('a')  
    this.height = '400px'
    // this.$refs.m.style.height = 400 + 'px'
  },
};
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
      .header {
        .banner {
          width: 68.5%;
          height: 260px;
          border-radius: 4px;
          overflow: hidden;
        }
      }
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
