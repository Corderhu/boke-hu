<template>
  <div class="navbar">
    <div class="content">
      <div class="name">sss</div>
      <div class="tab"></div>
      <div class="right">[ 
        <router-link to="/">切换主题</router-link> 
      ]</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSelect:false
      // tab: 0,
    }
  },
  methods: {
    // changeTab(num) {
    //   this.tab = num
    // },
  },
}
</script>
<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #000;
  color: #fff;
  &::before{
    background: linear-gradient(to right, #ee0808, #e45f06, #ecd508, #08eb08, #0a5de2, #3209c7, #9b09f0);
    content: "";
    height: 3px;
    position: absolute;
    top: 0;
    width: 100%;
  }
  // padding: 10px;
  .content {
    line-height: 60px;
    display: flex;
    .right{
      float: right;
    }
  }
}
</style>
