<template>
  <div class="wrapper">
    <span class="title">模式控制中心</span>
    <div class="controlbar">
      <div
        v-for="(item, index) in items"
        :key="index"
        @click="modeActive(index)"
        
      >
      <!-- :class="{ active: currentId === index }" -->
        <control-item>
          <img slot="icon" :src="item.url" />
          <div slot="mode-text">{{ item.text }}</div>
        </control-item>
      </div>
    </div>
  </div>
</template>

<script>
import ControlItem from "./control-item.vue";
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
        { url: require("../../assets/controlBar/close.png"), text: "关闭雾灯" },
      ],
      currentId: 0,
    };
  },
  methods: {
    modeActive(index) {
      this.currentId = index;
    },
  },
  components: {
    ControlItem,
  },
};
</script>

<style lang="less" scoped>
.active {
  background-color: green;
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
</style>