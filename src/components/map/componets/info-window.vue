<template>
<div class="container">
  <el-card shadow="never" :body-style="{ padding: '0px' }" >
    <div class="wrapper">
      <div class="header">
        <span>路段名字随便取</span>
      </div>
      <div class="body">
        <div class="pic">
          <img src="@/assets/imgs/test.png" alt="">
        </div>
        <div class="infos">
          <span>电量: {{voltage}}</span>
          <!-- <span>{{voltage}}</span> -->
          <span>模式：{{mode}}</span>
          <span>亮度：{{brightness}}</span>
          <span>闪烁频率：{{frequency}}次/分</span>
          <span>桩号：{{mileage}}</span>
        </div>
      </div>
    </div>
  </el-card>
</div>

</template>

<script>
export default {
  data() {
    return {
      voltage: '',
      mode: '',
      frequency: '',
      brightness: '',
      mileage: 'k11+228'
    };
  },

  methods: {
    initialize(infos){
      this.voltage = infos.infos.voltage; 
      this.frequency = infos.infos.blink;
      this.brightness = infos.infos.level;
      this.voltage = infos.infos.voltage; 
      if(infos.infos.mode == 2){
        this.mode = '主动诱导';
      }else if(infos.infos.mode == 1){
        this.mode = '轮廓增强';
      }else{
        this.mode = '灭灯';
      }
    }
  },
  mounted(){
    // this.initialize()
  }
};
</script>

<style lang="less" scoped>
.container::after {
  display: block;
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  bottom: 0;
  left: 47%;
  border-top: 10px solid #fff;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}
.wrapper {
  width: 350px;
  height: 200px;
  background-color: #fff;
  /deep/ .el-card__body{
    padding: 0;
  }
  .header {
    padding: 5px 12px;
    border-bottom: 1px solid #adadad;
  }
  .body {
    display: flex;
    margin: 10px 0;
    // height: 100%;
    // overflow: hidden;
    .pic {
      width: 180px;
      height: 150px;
      margin-left: 10px;
      margin-bottom: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .infos {
      height: 150px;
      margin-left: 5px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      >span {
        display: block;
      }
    }
  }
}
</style>

<!--


<template>
  <div class="app-main" :style="conheight">
    <div style="height:100%;width:100%" id="container" width tabindex="0"></div>
    <div class="search-div" >
      <el-input id="tipInput" v-model="inputSearchVal" placeholder="请输入搜索地址">
        <el-button slot="append" icon="el-icon-search" @click="searchKeyword"> 
          搜索
        </el-button>
      </el-input>
    </div>

    <infoWindowComponent ref="infoWindowComponent"></infoWindowComponent>
  </div>
</template>
<script>
//引入组件页面
import infoWindowComponent from '@/views/infoWindow/info.vue'
export default {
  name: 'mapDetail',
  components:{
    infoWindowComponent
  },
  /**
	注：positionResult 为marker点击事件的 event
  */

  openInfo(positionResult){
      var that = this
      let infoWindow = new AMap.InfoWindow({
          isCustom:true,
          content: that.$refs.infoWindowComponent.$el, 
          offset: new AMap.Pixel(0, -25)
      });
      infoWindow.open(this.map, positionResult.lnglat);
      this.infoWindow = infoWindow;
      // 调用组件方法，初始化组件页面的infoWindow等数据
      that.$refs.infoWindowComponent.initialize({
        overlay: positionResult.target,
        infoWindow: that.infoWindow
      });
  }
}

</script>


-->
