<template>
    <el-dialog :visible.sync='dialogVisible' title="自定义主题：" width="600px" :destroy-on-close='true'> 
        <el-form label-position="left" size="small" label-width="120px">
            <el-form-item label="自定义主题名：">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="自定义背景色：">
                <el-color-picker ></el-color-picker>
            </el-form-item>
            <el-form-item label="自定义背景色：">
                <el-color-picker ></el-color-picker>
            </el-form-item>
            <el-form-item label="自定义背景色：">
                <el-color-picker ></el-color-picker>
            </el-form-item>
            <el-form-item label="自定义背景色：">
                <el-color-picker ></el-color-picker>
            </el-form-item>
            <el-form-item label="自定义背景色：">
                <el-color-picker ></el-color-picker>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>
<script>
export default {
    data(){
        return{
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