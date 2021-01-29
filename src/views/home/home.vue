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
import { getDevice, getInfos, flat, merge } from "../../utils/utils";
import { useHooks } from '../../hooks/index';

import "./index.less";
export default {
  components: {
    MyHeader,
    DeviceShow,
    MyMap,
    ModeControl,
    ParamSet,
    Temperature,
    Humidity,
  },
  data() {
    return {
      allDeviceInfo: []
    };
  },

  methods: {
    async getAllInfos() {
      let arr = [],
          arr2 = [];
      let data = await getDevice();
      let { devices } = data.data;
      devices.forEach((item, index) => {
        // console.log(item);
        if (item.online) {
          let temp = {
            id: item.id,
            label: item.title
          };
          arr.push(getInfos(item.id));
          arr2.push(temp);
        }
      });
      // console.log( this.deviceInfo);
      Promise.all(arr).then((res) => {
        const { get_allInfos } = useHooks();
        let arr = flat(res);
        let allDeviceInfo = merge(arr, arr2);
        localStorage.setItem('devicesList', JSON.stringify(allDeviceInfo));
        // localStorage.setItem('devicesList', allDeviceInfo);
        // get_allInfos(allDeviceInfo);
        // console.log(this.$store.state.allInfos);
      });
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
      const pid = "ML302";
      const data = await this.$http.getDevice(pid);
      console.log(data);
      let { device_id, name } = data.data;
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
  },
  created() {
    this.getAllInfos();
    // this.getPosition();
  },
  mounted(){
    // this.getAllInfos();
  }
};
</script>

<style lang="less" scoped>
</style>