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
        let axiosArr = [];
        let ids = this.$store.state.idArray;

        ids.forEach(item => {

          let Params = {
            // id: 669681003,
            id: item.id,
            // id: params.id,
            data: {
              "cmd":1000,
              // "id": 1190967555,
              "id": item.id_control,
              // "id": params.data.id,
              "buff":{
                "mode": 3
              }
            }
          }

          axiosArr.push(this.$http.setDevice(Params));
        });
        
         this.$axios.all(axiosArr).then((res) => {
          console.log('关闭雾灯',res);
        }).catch(err => console.log(err))
       
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