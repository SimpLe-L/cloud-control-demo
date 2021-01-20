<template>
  <div class="wrapper">
    <div id="map"></div>
  </div>
</template>

<script>
import AMap from "AMap";
export default {
  data() {
    return {
      map: null,
      marker: null,
      positions: [
        {label: "marker1号 公司", position:{x: 103.977088,y: 30.633617}},
        {label: "marker2号 动物园", position:{x: 104.105944,y: 30.710045}},
        {label: "marker3号 德阳", position:{x: 104.396066,y: 31.131464}},
        {label: "marker4号 西安", position:{x: 108.984753,y: 34.253464}},
        {label: "marker5号 河南", position:{x: 113.818912,y: 34.796594}},
        {label: "marker6号 苏州", position:{x: 120.573269,y: 31.363965}},
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
        zooms: [3, 18],
        zoom: 4,
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
      // this.marker = new AMap.Marker({
      //   position: new AMap.LngLat(103.96, 30.63),
      //   // offset: new AMap.Pixel(-10, -10),
      //   icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
      //   // title: "公司",
      // });

      // this.map.add(this.marker);
      // this.map.setFitView();

      this.positions.forEach((item, index) => {
        let temp = new AMap.Marker({
          position: new AMap.LngLat(item.position.x, item.position.y),
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          title: `${item.label}`,
        })
        list.push(temp);
      });
      this.map.add(list);
      // this.map.setFitView();
    },
    // 绑定事件，例如点击标记点或者鼠标移入等
    bindEvents() {
      this.marker.on("click", (e) => {
        // console.log(`点击了位于${e.lnglat.getLng()+','+e.lnglat.getLat()}的标记点`);
        // infoWindow.open(map, marker.getPosition());
      });
    },
  },
  mounted() {
    this.MapInit();
    // this.bindEvents();
    this.addPosition();
  },
  beforeDestroy(){

  }
};
</script>

<style lang="less" scoped>
#map {
  // width: 720px;
  width: 100%;
  height: 600px;
}
</style>