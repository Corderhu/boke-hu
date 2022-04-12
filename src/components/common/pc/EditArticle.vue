<template>
  <el-dialog :visible.sync="visible" title="上传文件">
    <el-upload
     
      
      accept=".docx"
      action='http://192.168.1.7:8888/article/upload/article'
      list-type="picture-card"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <template #footer>
        <el-button type="primary"> 提交</el-button>
    </template>
    
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  
  methods: {
    init() {
      this.visible = true;
    },
   
  },
};
</script>