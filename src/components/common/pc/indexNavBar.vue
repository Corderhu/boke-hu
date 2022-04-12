<template>
  <div class="navbar">
    <div class="content">
      <div class="name"></div>
      <div class="tab">
        <router-link
          @mouseenter.native="mouseenter(0)"
          @click.native="changeTab(0)"
          class="item"
          to="/"
          icon="el-icon-search"
          >博客首页<i
            style="font-size: 8px"
            :class="tab == 0 ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"
          ></i
        ></router-link>
        <router-link
          @mouseenter.native="mouseenter(1)"
          @click.native="changeTab(1)"
          class="item"
          to="/"
          >生活情感<i
            style="font-size: 8px"
            :class="tab == 1 ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"
          ></i
        ></router-link>
        <router-link
          @mouseenter.native="mouseenter(2)"
          @click.native="changeTab(2)"
          class="item"
          to="/"
          >博客推荐<i
            style="font-size: 8px"
            :class="tab == 2 ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"
          ></i
        ></router-link>
        <router-link
          @mouseenter.native="mouseenter(3)"
          @click.native="changeTab(3)"
          class="item"
          to="/"
          >技术人生<i
            style="font-size: 8px"
            :class="tab == 3 ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"
          ></i
        ></router-link>
        <router-link
          @mouseenter.native="mouseenter(4)"
          @click.native="changeTab(4)"
          class="item"
          to="/"
          >关于我<i
            style="font-size: 8px"
            :class="tab == 4 ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"
          ></i
        ></router-link>
        <router-link
          @mouseenter.native="mouseenter(5)"
          @click.native="changeTab(5)"
          class="item"
          to="/"
          >留言<i
            style="font-size: 8px"
            :class="tab == 5 ? 'el-icon-arrow-down' : 'el-icon-arrow-right'"
          ></i
        ></router-link>
      </div>
      <div class="right">
        [
        <router-link to="/pc_index/themeSetting">切换主题</router-link>
        ]
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSelect: false,
      tab: 0,
      mousePlace: 0,
    }
  },
  methods: {
    changeTab(num) {
      this.tab = num
    },
    mouseenter(index) {
      console.log("a")
      if (index !== this.tab) {
        // const dom
      }
    },
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
  &::before {
    background: linear-gradient(
      to right,
      #ee0808,
      #e45f06,
      #ecd508,
      #08eb08,
      #0a5de2,
      #3209c7,
      #9b09f0
    );
    content: "";
    height: 3px;
    position: absolute;
    top: 0;
    width: 100%;
  }

  // padding: 10px;
  .content {
    line-height: 60px;
    // display: flex;
    .right {
      display: inline-block;
    }
    .tab {
      display: inline-block;
      float: right;
      margin-right: 78px;
      .item {
        line-height: 65px;
        height: 60px;
        margin-left: 24px;
        letter-spacing: 1px;
        cursor: pointer;
       
      }
      .el-icon-arrow-right {
         transition: All 0.2s ease-in-out;
        -webkit-transition: All 0.3s ease-in-out;
        -moz-transition: All 0.4s ease-in-out;
        -o-transition: All 0.4s ease-in-out;
        
      }
      .item:hover > .el-icon-arrow-right {
          transform: rotate(90deg);
          -webkit-transform: rotate(90deg);
          -moz-transform: rotate(90deg);
          -o-transform: rotate(90deg);
          -ms-transform: rotate(90deg);
        }
    }
  }
}
</style>
