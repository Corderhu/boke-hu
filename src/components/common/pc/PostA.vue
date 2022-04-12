<template>
  <div>
    <div class="edit">
      <i @click="showDialog" class="el-icon-edit-outline" />
    </div>
    <EditArticle ref="dia"/>
  </div>
</template>
<script>
import EditArticle from './EditArticle.vue'
export default {
    components:{
        EditArticle,
    },
    data(){
        return{
            
        }
    },
    methods:{
        showDialog(){
               this.$refs.dia.init()
                // console.log(this.$refs)
            }
    }
}
</script>
<style scoped lang='scss'>
.edit {
  position: fixed;
  right: 30px;
  bottom: 150px;
  font-size: 30px;
  background-color: #fff;
  opacity: 0.3;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  &:hover {
    content: "上传文章";
  }
}
</style>