<template>
  <div class="navbar">
    <div class="left"></div>
    <div class="center">
      <img class="label" src="@/assets/index/label.png" >
      <a :class="tab == 0 ? 'active' : 'item'" @click="changeTab(0)"
        ><span>首页</span></a
      >
      <a :class="tab == 1 ? 'active' : 'item'" @click="changeTab(1)"
        ><span>前端</span></a
      >
      <a :class="tab == 2 ? 'active' : 'item'" @click="changeTab(2)"
        ><span>说说</span></a
      >
      <a :class="tab == 3 ? 'active' : 'item'" @click="changeTab(3)"
        ><span>关于</span></a
      >
    </div>
    <div class="right">
      <i class="el-icon-search" ></i>
      <i class="el-icon-s-unfold"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: 0,
    }
  },
  methods: {
    changeTab(num) {
      this.tab = num
    },
  },
}
</script>
<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 30px;
  min-width: 1200px;
  background-color: #000;
  color: #fff;
  display: flex;
  line-height: 30px;
  font-size: 12px;
  .left {
    width: 368px;
  }
  .center {
    width: calc(100% - 736px);
    min-width: 600px;
    .label{
      height:25px;
      vertical-align: middle;
      margin-right:15px;
    }
    .item {
      display: inline-block;
      min-width: 84px;
       text-align: center;
    }
    .active {
       display: inline-block;
      min-width: 84px;
      height: 30px;
      text-align: center;
      background: rgba(216, 216, 216, 0.5);
    }
  }
  .right {
    width: 368px;
    .el-icon-search{
      margin-right:30px
    }
  }
}
</style>
