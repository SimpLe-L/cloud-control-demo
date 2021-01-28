<template>
  <div class="wrapper">
    <h3>关闭雾灯</h3>
    <div class="btn">
       <el-button type="primary" round @click="clickBtn">设定参数</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
       clickBtn(){
        let param = {
        "cmd": 1002,
        "id": 66666,
        "buff":{
          "mode": 3,
          "param": {
          }
        }
      }
      this.$notify({
        title: '成功',
        message: '设置成功~',
        // offset: 200,
        type: 'success'
      });
      }
    }
  }
</script>

<style lang="less" scoped>
.wrapper {
  .btn {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
}
/deep/ .el-button--primary{
  width: 200px;
}
</style>