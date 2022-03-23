<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    // this._isMobile()
  },
  methods: {
   
  },
}
</script>

<style lang="scss">
html , body {
  padding: 0;
  margin: 0;
}
div{
  box-sizing: border-box;
}



  a {
   

    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover{
      cursor: pointer;
    }
  }

</style>
