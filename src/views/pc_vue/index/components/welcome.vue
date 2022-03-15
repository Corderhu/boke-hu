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
        <div class="title">最新动态</div>
        <div class="cat">
          <div class="item" v-for="item in 3" :key="item">
            <img class="header" />
            <div class="show"></div>
            <div class="opera"></div>
          </div>
        </div>
      </div>
      <div class="tianqi">
        <div class="title">日历天气</div>
        <div class="whether">
          <iframe
            allowtransparency="true"
            frameborder="0"
            width="390"
            height="96"
            scrolling="no"
            src="//tianqi.2345.com/plugin/widget/index.htm?s=2&z=2&t=0&v=0&d=2&bd=0&k=&f=ffffff&ltf=009944&htf=cc0000&q=1&e=0&a=1&c=58027&w=290&h=96&align=left"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {},
}
</script>
<style lang="scss" scoped>
.welcome {
  padding-left: 368px;
  padding-top: 6px;
  padding-right: 365px;
  .img {
    width: 284px;
    height: 543px;
    vertical-align: top;
  }
  .text {
    display: inline-block;
    margin-left: 55px;
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
  .content {
    display: flex;
    margin-top: 86px;
    .news {
      width: 800px;
      margin-right: 16px;
      .cat {
        margin-top: 12px;
        .item {
          padding: 12px 0 16px 0;
          position: relative;
          cursor: pointer;
          .header {
            width: 84px;
            height: 84px;
            background: #2e2a2a;
            border-radius: 14px;
            // border: 1px solid #979797;
          }
        }
      }
    }
    .tianqi {
      width: 334px;
      height: 338px;
      // background: #d8d8d8;
      // background: #1b7db4;
      overflow: hidden;
      .whether {
        margin-top: 10px;
        background: #1b7db4;
        height: 100%;
        // background-color: rgb(15, 43, 197);
      }
    }
    .title {
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      line-height: 40px;
    }
  }
}
</style>
