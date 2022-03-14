<template>
  <div class="index">
    <Welcome></Welcome>
  </div>
</template>
<script>
import Welcome from "./components/welcome.vue"
export default {
  components: {
    Welcome,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.index {
  background-color: #fff;
}
</style>
