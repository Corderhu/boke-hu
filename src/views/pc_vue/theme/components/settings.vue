<template>
    <el-dialog :visible.sync='dialogVisible' title="自定义主题：" width="500px" :destroy-on-close='true'> 
        <el-form label-position="left" size="small" label-width="130px">
            <el-form-item label="自定义主题名：">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="自定义背景色：">
                <el-color-picker v-model="form.bgc" ></el-color-picker>
            </el-form-item>
            <el-form-item label="自定义文字颜色：">
                <el-color-picker v-model="form.color"></el-color-picker>
            </el-form-item>
            <el-form-item label="自定义选中色：">
                <el-color-picker v-model="form.a"></el-color-picker>
            </el-form-item>
            <!-- <el-form-item label="自定义背景色：">
                <el-color-picker ></el-color-picker>
            </el-form-item>
            <el-form-item label="自定义背景色：">
                <el-color-picker ></el-color-picker>
            </el-form-item> -->
        </el-form>
         <template #footer class="dialog-footer">
            <div>
              <el-button>取消</el-button>
              <el-button type="primary">确认</el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script>
export default {
    data(){
        return{
          form:{
            name:'自定义主题',
            bgc:'#c2c12c',
            color:"#cd4444",
            a:"#cdcdcd"
          },
          dialogVisible:false
        }
    },
    methods:{
        init(){
            this.dialogVisible = true
        }
    }
}
</script>
<style lang='scss' scoped>

</style>