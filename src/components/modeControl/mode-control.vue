<template>
  <div class="wrapper">
    <span class="title">模式控制中心</span>
    <div class="controlbar">
      <div
        v-for="(item, index) in items"
        :key="index"
        @click="modeActive(index)"
        :class="{ active: currentId === index }"
      >
        <control-item>
          <img slot="icon" :src="item.url" />
          <div slot="mode-text">{{ item.text }}</div>
        </control-item>
      </div>
      <el-button type="primary" round   @click="btnClick">模式设定</el-button>
      
    </div>
  </div>
</template>

<script>
import ControlItem from "./control-item.vue";
import { useHooks } from "../../hooks/index";
import { setMode } from '../../utils/utils';
export default {
  data() {
    return {
      items: [
        { url: require("../../assets/controlBar/auto.png"), text: "自动模式" },
        {
          url: require("../../assets/controlBar/strength.png"),
          text: "轮廓强化",
        },
        { url: require("../../assets/controlBar/blink.png"), text: "主动引导" },
        { url: require("../../assets/controlBar/crash.png"), text: "尾跟警示" },
        {
          url: require("../../assets/controlBar/saving.png"),
          text: "节能模式",
        },
        { url: require("../../assets/controlBar/close.png"), text: "关闭雾灯" },
      ],
      currentId: 0,
    };
  },
  methods: {
    modeActive(index) {
      this.currentId = index;
      const { set_mode } = useHooks();
      set_mode(index);
      // this.currentId = index;
      // this.$store.dispatch('SET_CURMODE', index);
    },

    btnClick(){
      let ids = this.$store.state.idArray;
      let axiosArr = [];
      ids.forEach(item => {
        axiosArr.push(setMode({
          id: item.id,
          id_control: item.id_control
        }))
      });
      
      this.$axios.all(axiosArr).then((res) => {
        console.log(res);
      }).catch(err => console.log(err))

    }
  },
  components: {
    ControlItem,
  },
};
</script>

<style lang="less" scoped>
.active {
  position: relative;
  border-radius: 10px;
  transition: all 0.3s;

  &:hover {
    filter: contrast(1.1);
  }

  // &:active {
  //     filter: contrast(0.9);
  // }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid gold;
    transition: all 0.5s;
    animation: clippath 3s infinite linear;
    border-radius: 10px;
  }

  &::after {
    animation: clippath 3s infinite -1.5s linear;
  }
}
@keyframes clippath {
  0%,
  100% {
    clip-path: inset(0 0 98% 0);
  }

  25% {
    clip-path: inset(0 98% 0 0);
  }
  50% {
    clip-path: inset(98% 0 0 0);
  }
  75% {
    clip-path: inset(0 0 0 98%);
  }
}

.wrapper {
  .title {
    // width: 100%;
    font-size: 20px;
    display: block;
    text-align: center;
  }
  .controlbar {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
}

/deep/ .el-button--primary{
  width: 100px;
}
</style>