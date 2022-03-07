<template>
  <div class="pc">web端 李双双是憨熊</div>
</template>
<script>
import instance from "@/request/axios.js";

export default {
  created(){
    // localStorage.clear()
    this.getThings()
  },
  methods: {
    getThings() {
      instance({
        url: "/users/first",
        method: "get",
        params: { token: localStorage.getItem("token") },
      });
      instance({
        url: "/users/getThings",
        methods: "get",
        params: { token: localStorage.getItem("token") },
      });
    },
  },
};
</script>
<style scoped></style>
