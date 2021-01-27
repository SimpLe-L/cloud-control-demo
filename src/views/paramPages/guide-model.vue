<template>
  <div class="wrapper">
    <span>主动引导模式</span>
    <div class="blinkPics">
      <div class="red_blink">
        <img src="@/assets/paramSet/red_blink.png" alt="">
        <span style="color: red">红色闪烁</span>
      </div>
      <div class="yellow_blink">
        <img src="@/assets/paramSet/yellow_blink.png" alt="">
        <span style="color: #f4ea2a">黄色闪烁</span>
      </div>
    </div>
    <div class="brightness">
      <span>亮度等级</span>
      <el-slider v-model="lightness" :step="20"  class="slider" :max="100">
    </el-slider>
    </div>
    <div class="blink">
      <span>闪烁频率</span>
      <el-slider v-model="frequency"  class="slider">
    </el-slider>
    </div>

    <div class="btn">
       <el-button type="primary" round @click="clickBtn">圆角按钮</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        lightness: 0,
        frequency: 0,
      }
    },
    methods: {
      clickBtn(){
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
  span {
    display: block;
  }
  .blinkPics{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
    img {
      width: 60px;
      height: 60px;
    }
  }
  .slider {
    width: 90%;
    padding-left: 10px;
  }

  .brightness {
    margin: 10px 0;
  }

  .blink {
    margin: 10px 0;
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