<template>
  <div class="welcome">
    <div>
      <img
        class="img"
        src="@/assets/index/leftWelcome.png"
        style="padding-top: 80px"
      />
      <div class="text">
        <span class="weight">你好，</span><br />
        <span class="weight">这是个人博客网站。</span><br />
        <span class="weight-sort">擅长编程</span><br />
        <span class="sort">欢迎有爱好的人互相交流,学习。</span>
      </div>

      <img
        class="img"
        src="@/assets/index/rightWelcome.png"
        style="float: right"
      />
    </div>
    <div class="content">
      <div class="news">

      </div>
      <div class="tianqi">
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.welcome {
  padding-left: 368px;
  padding-top: 6px;
  padding-right: 300px;
  .img {
    width: 284px;
    height: 543px;
    vertical-align: top;
  }
  .text {
    display: inline-block;
    margin-left: 66px;
    padding-top: 152px;
    .weight {
      font-size: 60px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #000000;
      line-height: 84px;
    }
    .weight-sort {
      display: inline-block;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      line-height: 40px;
      margin-top: 12px;
      margin-bottom: 27px;
    }
    .sort {
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      line-height: 28px;
    }
  }
}
</style>
