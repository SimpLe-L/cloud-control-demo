<template>
  <div class="wrapper">
    <!-- <span>轮廓增强模式</span> -->
    <div class="blinkPics">
      <div 
      class="picItem"
      v-for="(item, index) in arr" 
      :key="index"
      @click="lightActive(index)"
      :class="{ activet: currentId === index }"
      >
        <img :src="item.url" alt="">
        <span >{{item.text}}</span>
      </div>
    </div>
    <div class="brightness">
      <span>亮度等级</span>
      <el-slider v-model="lightness" :step="10" show-stops  class="slider" :max="100" :marks="marks">
    </el-slider>
    </div>
    <!-- <div class="board">
      <span>上下行</span>
      <el-slider v-model="board"  show-stops  class="slider" :max="2" :marks="marks2">
    </el-slider>
    </div> -->
    <div class="btn">
       <el-button type="primary" round @click="clickBtn">参数设定</el-button>
    </div>
  </div>
</template>

<script>
import { setLightParams, setParam } from '../../utils/utils';

  export default {
     data(){
      return {
        arr: [
          {
            url: require("../../assets/paramSet/yellow_blink.png"), text: "黄灯常亮"
          },
          {
            url: require("../../assets/paramSet/red_blink.png"), text: "红灯常亮"
          },
          {
            url: require("../../assets/paramSet/green_blink.png"), text: "绿灯常亮"
          },
        ],
        lightness: 10,
        board: 0,
        marks: {
          0: '0%',
          30: '30%',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '50%')
          },
          70: '70%',
          100: '100%'
        },
        marks2: {
          0: '上行',
          1: '下行',
          2: '双'
        },
        currentId: 0
    }
  },
  methods: {
    lightActive(index){
      this.currentId = index;
    },
    clickBtn(){
      let axiosArr = [];
      let ids = this.$store.state.idArray;
      ids.forEach(element => {
        let param = {
          id: element.id,
          data:{
            "cmd": 1002,
            "id": element.id_control,
            "buff":{
              "mode": 1,
              "param": {
                "level": this.lightness, 
                "gp": this.currentId + 1              
              }
            }
          }
        }

        // axiosArr.push(this.$http.setDevice(param));
        axiosArr.push(setParam(param));
      });
      // 669681003
      // console.log(axiosArr);
      this.$axios.all(axiosArr).then((res) => {
        // console.log(res);
        this.$message({
          message: '强化参数设置成功',
          type: 'success'
        });
      }).catch(err => {
        this.$message.error('强化参数设置失败');
      })
      // setParam(param);

      // let res = this.$http.setDevice(param);
      // res.then(res => {
      //   console.log(res);
      // })
      // console.log(param);

      // this.$notify({
      //   title: '成功',
      //   message: '设置成功~',
      //   // offset: 200,
      //   type: 'success'
      // });
    }
  }
}
</script>

<style lang="less" scoped>
.active {
  background: 
        linear-gradient(90deg, #A2FE01 50%, transparent 0) repeat-x,
        linear-gradient(90deg, #A2FE01 50%, transparent 0) repeat-x,
        linear-gradient(0deg, #A2FE01 50%, transparent 0) repeat-y,
        linear-gradient(0deg, #A2FE01 50%, transparent 0) repeat-y;
  background-size: 4px 2px, 4px 2px, 2px 4px, 2px 4px;
  background-position: 0 0, 0 100%, 0 0, 100% 0;
  animation: linearGradientMove .3s infinite linear;
}
@keyframes linearGradientMove {
    100% {
        background-position: 4px 0, -4px 100%, 0 -4px, 100% 4px;
    }
}
.activet {
  border-radius: 8px;
  background: hsla(0,0%,100%,.1);
}
.wrapper {
  span {
    display: block;
  }
  .blinkPics{
    display: flex;
    justify-content: space-around;
    align-items: center;
    // margin-top: 20px;
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
/deep/ .el-slider__runway{
  background-color: burlywood;
}
</style>