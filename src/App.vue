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
// #app {
//   // min-width:1800px;
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   color: #2c3e50;
// }
div{
  box-sizing: border-box;
}

// #nav {
//   padding: 30px;

  a {
    // font-weight: bold;
    // color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
    &:hover{
      cursor: pointer;
    }
  }
// }
</style>
