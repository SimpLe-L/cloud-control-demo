<template>
  <div class="wrapper">
    <div class="pic">
      <img src="@/assets/paramSet/change.png" alt="">
    </div>
    <div class="control">
      <span class="info">此模式用于控制雾灯上下行</span>
      <div class="rgroup">
        <el-radio-group v-model="select">
          <el-radio :label="0">上行</el-radio>
          <el-radio :label="1">下行</el-radio>
          <el-radio :label="2">双向</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div class="btn">
       <el-button type="primary" round @click="clickBtn">参数设定</el-button>
    </div>
  </div>
</template>

<script>
import { setBoard } from '../../utils/utils';
  export default {
    data(){
      return {
        select: 0,
      }
    },
    methods: {
      clickBtn(){
        let ids = this.$store.state.idArray;
        // console.log(ids);
    
        let axiosArr = [];
        ids.forEach(item => {
          axiosArr.push(setBoard({
            id: item.id,
            id_control: item.id_control,
            board: this.select
          }))
        });
        
        this.$axios.all(axiosArr).then((res) => {
          this.$message({
            message: '上下行设置成功',
            type: 'success'
          });
        }, error => {
          this.$message.error('上下行设置失败');
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.wrapper {
  // display: flex;
  // justify-content: center;
  .pic {
    width: 100px;
    height: 100px;
    margin: 5px auto;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .info{
    display: block;
    padding-left: 10px;
  }
  .control{
    margin: 20px auto 0;

    .rgroup{
      margin-top: 20px;
      padding-left: 10px;
    }
  }

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