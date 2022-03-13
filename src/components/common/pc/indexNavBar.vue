<template>
    <div class="navbar">
        <div class="left">

        </div>
        <div class="center">
            <a class="item"><span>首页</span></a>
            <a class="item"><span>前端</span></a>
            <a class="item"><span>说说</span></a>
            <a class="item"><span>关于</span></a>
        </div>
        <div class="right">
            右边
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang='scss' scoped>
    .navbar{

        width:100%;
        height: 40px;
        min-width: 1200px;
        background-color: #000;
        color: #fff;
        display: flex;
        line-height: 40px;
        .left{
            width:200px;
        }
        .center{
            width: calc(100% - 400px);
            min-width:800px;
            
            .item{
                display: inline-block;
                min-width: 100px;
                text-align: center;
                font-size:13px
            }
        }
        .right{
            width:200px;
        }
    }
</style>