<template>
  <div class="wrapper">
    <span>主动引导模式</span>
    <div class="blinkPics">
      <div class="picItem" v-for="(item, index) in arr" :key="index">
        <img :src="item.url" alt="" />
        <span>{{ item.text }}</span>
      </div>
    </div>
    <div class="brightness">
      <span>亮度等级</span>
      <el-slider
        v-model="lightness"
        :step="10"
        show-stops
        class="slider"
        :max="100"
        :marks="marks"
      >
      </el-slider>
    </div>
    <div class="delay">
      <span>延迟时间</span>
      <el-slider
        v-model="delay"
        show-stops
        :max="10"
        :marks="marks2"
        class="slider"
      >
      </el-slider>
    </div>
    <div class="btn">
      <el-button type="primary" round @click="clickBtn">参数设定</el-button>
    </div>
  </div>
</template>

<script>
import { setParam } from '../../utils/utils';

export default {
  data() {
    return {
      arr: [
        {
          url: require("../../assets/paramSet/red_blink.png"),
          text: "红色灯带",
        },
        {
          url: require("../../assets/paramSet/yellow_blink.png"),
          text: "黄色灯带",
        },
        {
          url: require("../../assets/paramSet/blink.png"),
          text: "混色灯带",
        },
      ],
      lightness: 0,
      delay: 0,
      marks: {
        0: "0%",
        30: "30%",
        50: {
          style: {
            color: "#1989FA",
          },
          label: this.$createElement("strong", "50%"),
        },
        70: "70%",
        100: "100%",
      },
      marks2: {
        // 0: '0%',
        3: "3s",
        5: {
          style: {
            color: "#1989FA",
          },
          label: this.$createElement("strong", "5s"),
        },
        7: "7s",
        10: "10s",
      },
    };
  },

  methods: {
    clickBtn() {
      // this.getAllDevice();
      // console.log(this.$store.state.allInfos);
      // this.getInfos(669681003);
      setParam();
    },
    // async getAllDevice(){
    //   const data = await this.$http.getAllDevice();
    //   console.log(data);
    // },
    async getAllDevice() {
      let data = await this.$http.getAllDevice();
      let { devices } = data.data;
      let arr = devices.map((item) => {
        return this.getInfos(item.id);
      });
      Promise.all(arr).then((res) => {
        console.log(res);
      });
      // data.then((data) => {
      //   let arr = data.data.devices;

      //   let newArr = [];
      //   for (let i = 0; i < arr.length; i++) {
      //     newArr.push(this.getInfos(arr[i].id));
      //   }

      //   Promise.all(newArr).then((res) => {
      //     console.log(res);
      //   });
      // });
    },
    async getInfos(id) {
      const params = {
        deviceId: id,
        dataId: "mode,level,latitude,blink,longitude,voltage",
        limit: 1,
      };
      let res3 = await this.$http.getDeviceData(params);
      return res3;
      // console.log("设备参数：", res3.data);
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  span {
    display: block;
  }
  .blinkPics {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
    img {
      width: 60px;
      height: 60px;
    }
    .picItem {
      padding: 5px;
    }
  }
  .slider {
    width: 90%;
    padding-left: 10px;
  }

  .brightness {
    margin: 10px 0;
  }

  .delay {
    margin: 10px 0;
  }

  .btn {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
}
/deep/ .el-button--primary {
  width: 200px;
}
/deep/ .el-slider__runway {
  background-color: burlywood;
}
</style>