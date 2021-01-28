<template>
  <div class="container">
    <my-header />
    <section class="boxContainer">
      <!-- 左边盒子，树形组件容器 -->
      <div class="leftContainer">
        <div class="leftbox1 panel">
          <device-show />
          <div class="panel-footer"></div>
        </div>
        <div class="leftbox2 panel">
            <param-set />
          <div class="panel-footer"></div>
        </div>
      </div>
      <!-- 中间，地图及模式控制容器 -->

      <div class="middleContainer">
        <div class="middlebox1 panel">
          <my-map />
          <div class="panel-footer"></div>
        </div>

        <div class="middlebox2 panel">
          <mode-control />
          <div class="panel-footer"></div>
        </div>
      </div>

      <!-- 右边盒子，xxx容器 -->
      <div class="rightContainer">
        <div class="rightbox1 panel">
            <temperature />
          <div class="panel-footer"></div>
        </div>
        <div class="rightbox2 panel">
            <humidity />
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MyHeader from "../../components/header/header";
import DeviceShow from "../../components/devices/devices";
import MyMap from "../../components/map/map";
import ModeControl from "../../components/modeControl/mode-control";
import ParamSet from "../../components/paramSet/param-set";
import Temperature from "../../components/temperature/temperature";
import Humidity from "../../components/humidity/humidity";
import "./index.less";
export default {
  components: {
    MyHeader,
    DeviceShow,
    MyMap,
    ModeControl,
    ParamSet,
    Temperature,
    Humidity
  },
  data() {
    return {

    };
  },

  methods: {
    async getAllDevice(){
      // let tempArr = [];
      const data = await this.$http.getAllDevice();
      let { devices } = data.data;
      let tempArr = devices.map((item, index) => {
        return parseInt(item.id);
      })
      console.log(tempArr);
    },
    async getInfos(id){
        const params = {
          deviceId: id,
          dataId: 'mode,level,latitude,blink,longitude,voltage',
          limit: 1
        }
        let res = await this.$http.getDeviceData(params);
        return res;
      },
      // async getInfos(id){
      //   const params = {
      //     deviceId: id,
      //     dataId: 'mode,level,latitude,blink,longitude,voltage',
      //     limit: 1
      //   }
      //   let res = await this.$http.getDeviceData(params);
      //   return res;
      // },

  //     axios.get('/userAll').then( async response {
  //   //要同步这个方法
  //   await axios.get('/user?ID=12345').then(function (response) {
  //       console.log(response);
  //     }).catch(function (error) {
  //       console.log(error);
  //     });
  // }).catch(function (error) {
  //   console.log(error);
  // });
    async getDevice() {
      const pid = 'ML302';
      const data = await this.$http.getDevice(pid);
      console.log(data)
      let { device_id , name} = data.data;
      console.log(name);
      console.log(device_id);

      //获取的设备信息
      // data.data: {
      //   device_id: "628579624"
      //   key: "nLaZwdW+U2vLNcKKTFQOzT7JTZztJhiE/t5hqp3A0pA="
      //   name: "ML302"
      //   pid: 371437
      // }


      // data
      //   .then(({ data }) => {
      //     console.log(data)
      //     // this.pid = data.pid
      //     this.deviceId = data.device_id;
      //     this.deviceName = data.name;
      //   })
      //   .catch(err => {
      //     console.log(err.data)
      //   })

    },
    async getPosition(){
      // 设备经度
      const longParams = {
        deviceId: 671340176,
        dataId: 'longitude',
        limit: 1
      }
      // 设备纬度
      const latParams = {
        deviceId: 671340176,
        dataId: 'latitude',
        limit: 1
      }
      let res1 = await this.$http.getDeviceData(longParams);
      console.log('设备经度：',res1);  
      let res2 = await this.$http.getDeviceData(latParams);
      console.log('设备纬度：',res2);  
    }
  },
  created(){
    this.getAllDevice();
    // this.getPosition();
  }
};
</script>

<style lang="less" scoped>
</style>