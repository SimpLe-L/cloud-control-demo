<template>
  <div class="wrapper">
    <div id="map"></div>
    <info-window v-show="flag" ref="InfoWindow" />
  </div>
</template>

<script>
import AMap from "AMap";
import InfoWindow from "./componets/info-window";
import lightoffModelVue from '../../views/paramPages/lightoff-model.vue';

export default {
  components: {
    InfoWindow
  },
  data() {
    return {
      map: null,
      showInfos: null,
      flag: false,
      test: JSON.parse(localStorage.getItem('devicesList')),
      positions: [
        { label: "marker1号 公司", position: { x: 103.977088, y: 30.633617 } },
        {
          label: "marker2号 动物园",
          position: { x: 104.105944, y: 30.710045 }
        },
        { label: "marker3号 德阳", position: { x: 104.396066, y: 31.131464 } },
        { label: "marker4号 西安", position: { x: 108.984753, y: 34.253464 } },
        { label: "marker5号 河南", position: { x: 113.818912, y: 34.796594 } },
        { label: "marker6号 苏州", position: { x: 120.573269, y: 31.363965 } },
      ]
    };
  },
  methods: {
    //初始化地图
    MapInit() {
      let _this = this;
      _this.map = new AMap.Map("map", {
        // center: [116.397428, 39.90923],
        mapStyle: "amap://styles/28afcbe371566ded2d7d024b6635aa8e",
        // 0028D7
        resizeEnable: true,
        showIndoorMap: false,
        zooms: [3, 18],
        zoom: 4
        // viewMode:'3D'
      });
      //工具栏
      // AMap.plugin(['AMap.ToolBar'],function(){
      //    _this.map.addControl(new AMap.ToolBar());
      // })

      // this.addPosition();
    },
    // 地图上添加标记点
    addPosition() {
      let list = [];
      // 测试用
      // this.positions.forEach((item) => {
      //   let temp = new AMap.Marker({
      //     position: new AMap.LngLat(item.position.x, item.position.y),
      //     icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
      //     title: `${item.label}`
      //   });
      //   temp.on("mouseover", this.showInfo);
      //   temp.on("mouseout", this.infoClose);
        
      //   list.push(temp);
      // });

      this.test.forEach((item) => {
        let temp = new AMap.Marker({
          position: new AMap.LngLat(item.longitude, item.latitude),
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          title: `${item.label}`,
          extData: {
            ...item
          }
        });
        temp.on("mouseover", this.showInfo);
        temp.on("mouseout", this.infoClose);
        
        list.push(temp);
      });
      // console.log(list);
      this.map.add(list);
    },
    // 展示信息框
    showInfo(e) {
      let _this = this;
      _this.flag = true;
      // showInfos
      // let infoWindow = new AMap.InfoWindow({
      //   isCustom: true,
      //   content: _this.$refs.InfoWindow.$el,
      //   offset: new AMap.Pixel(0, -30)
      // });

      // infoWindow.open(this.map, e.target.getPosition());

      _this.showInfos = new AMap.InfoWindow({
        isCustom: true,
        content: _this.$refs.InfoWindow.$el,
        offset: new AMap.Pixel(0, -30)
      });

      _this.showInfos.open(this.map, e.target.getPosition());
      _this.$refs.InfoWindow.initialize({
        infos: e.target.getExtData()
      });
    },
    infoClose(){
      let _this = this;
      _this.flag = false;
      _this.showInfos.close()
    }
  },
  mounted() {
    this.MapInit();
    // this.bindEvents();
    this.addPosition();
  },
  watch: {
    "$store.state.curPosition": function() {
      this.map.setZoomAndCenter(15, this.$store.state.curPosition);
      // 标记点跳动动画
      // marker.setAnimation('AMAP_ANIMATION_BOUNCE');
    }
  },
  beforeDestroy() {}
};
</script>

<style lang="less" scoped>
#map {
  // width: 720px;
  width: 100%;
  height: 600px;
}
.content-window-card {
  position: relative;
  box-shadow: none;
  bottom: 0;
  left: 0;
  width: auto;
  padding: 0;
}

.content-window-card p {
  height: 2rem;
}

.custom-info {
  border: solid 1px silver;
}

div.info-top {
  position: relative;
  background: none repeat scroll 0 0 #f9f9f9;
  border-bottom: 1px solid #ccc;
  border-radius: 5px 5px 0 0;
}

div.info-top div {
  display: inline-block;
  color: #333333;
  font-size: 14px;
  font-weight: bold;
  line-height: 31px;
  padding: 0 10px;
}

div.info-top img {
  position: absolute;
  top: 10px;
  right: 10px;
  transition-duration: 0.25s;
}

div.info-top img:hover {
  box-shadow: 0px 0px 5px #000;
}

div.info-middle {
  font-size: 12px;
  padding: 10px 6px;
  line-height: 20px;
}

div.info-bottom {
  height: 0px;
  width: 100%;
  clear: both;
  text-align: center;
}

div.info-bottom img {
  position: relative;
  z-index: 104;
}

span {
  margin-left: 5px;
  font-size: 11px;
}

.info-middle img {
  float: left;
  margin-right: 6px;
}
</style>