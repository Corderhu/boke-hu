<template>
  <div class="theme">
    <div class="title">主题设置:</div>
    <div
      :class="index == 0 ? ['item'] : ['item', 'item-align']"
      v-for="(el, index) in theme"
      :key="el.type"
    >
      {{ el.dec }}
      <div>
        <el-button type="primary" style="width: 100px" @click="changeTheme(el.type)">使用</el-button>
      </div>
    </div>
    <settings ref="setting"/>
  </div>
</template>
<script>
import settings from './components/settings.vue'
export default {
  components:{
    settings,
  },
  data() {
    return {
      theme: [
        { type: "light", dec: "日常主题" },
        { type: "dark", dec: "夜晚主题" },
        { type: "byMyself", dec: "自定义主题" },
      ],
    }
  },
  methods: {
    changeTheme(type){
      if(type !== 'byMyself'){
        // 初始化主题颜色
        window.document.documentElement.setAttribute( "data-theme", type );
      }else{
        // 自定义主题设置
        this.$refs.setting.init()
        // window.document.documentElement.setAttribute( "data-theme", type );
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.theme {
  position: relative;
  margin-top: 63px;
  text-align: center;
  .title {
    font-size: 36px;
    padding: 20px 0 60px 0;
  }
  .item {
    width: 200px;
    height: 200px;
    border: 1px solid #a10f0f;
    display: inline-block;
    cursor: pointer;
  }
  .item-align {
    margin-left: 35px;
  }
}
</style>
