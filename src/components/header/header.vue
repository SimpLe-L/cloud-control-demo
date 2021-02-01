<template>
    <header>
      <span class="companylogo">
        <img src="../../assets/imgs/logo.png" alt="">
      </span>
       <span class="title">英威讯云控灯系统</span>
      <!-- <span class="showTime">{{currentTime}}</span> -->
      <span class="showTime">2026年1月22日 12:33:34</span>
      
    </header>
</template>

<script>
// import './index.less';
import { timeFormat } from '../../utils/utils';
  export default {
    data() {
      return {
        currentTime: '',
      }
    },
    created() {
      // let timer = setInterval(() => {
      //   this.currentTime = timeFormat();
      // },1000)
    },

    beforeDestroy(){
      // clearInterval(this.timer);
    }
  }
</script>

<style lang="less" scoped>
header {
  background: url(../../assets/imgs/header_bg1.png) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 64px;
  font-size: 20px;
  position: relative;
  overflow: hidden;

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 30px;
    transform: translate(-50%, -50%);
  }

  .showTime {
    position: absolute;
    top: 40%;
    right: 0;
    transform: translate(0, -50%);
    font-size: 20px;
    margin-right: 10px;
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>