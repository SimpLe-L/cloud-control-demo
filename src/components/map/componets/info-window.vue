<template>
  <div>
    <el-card class="box-card" style="padding: 0 80 30 80;width: 400px;border-radius: 10px;">
      <div id="del-div">
        <el-link type="primary" icon="el-icon-close" @click="close()"></el-link>
      </div>
      <div style="text-align: center;">
        <h4>详 情</h4>
      </div>
      <p v-if="isInfo">部署 : 测试一下</p>
      <p v-if="isInfo">地点 : 测试一下2222</p>
      <p v-if="isInfo">说明 : 测试一下111111</p>
      <p v-if="!isInfo" style="text-align: center;color: #b3b3b3;">暂无信息</p>
      <div id="infoWindowTool">
        <el-link type="primary" @click="edit()">编辑</el-link>
        <el-link type="primary" @click="del()">删除</el-link>
      </div>
    </el-card>
    <div class="amap-info-sharp">
      <i class="el-icon-caret-bottom"></i>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        overlay: null,
        infoWindow: null,
        isInfo: true,
      };
    },

    methods: {
      initialize(e) {
        this.overlay = e.overlay;
        this.infoWindow = e.infoWindow;
      },
      //关闭
      close() {
        this.infoWindow.close();
      },
      edit() {
        console.log("编辑按钮测试");
      },
      del() {
        console.log("删除按钮测试");
      }
    }
  }
</script>

<style lang="less" scoped>
.amap-info-sharp {
  bottom: -1px;
  left: 48.5%;
  position: absolute;
  color: #fff;
  z-index: -1;
}
#del-div {
  position: absolute;
  right: 20;
  top: 20;
  transform: scale(1.2);
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
	打开消息窗体
	我这边实现的是点击marker事件后，弹出消息框
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
