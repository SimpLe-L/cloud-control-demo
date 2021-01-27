<template>
  <div class="wrapper">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="mode-text">
      <slot name="mode-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style lang="less" scoped>
.wrapper {
  cursor: pointer;
  padding: 5px;
  // border: 1px solid red;
  // position: absolute;
  .icon {
    padding-left: 5px;
    width: 50px;
    height: 50px;
    text-align: center;
  }

  .mode-text {
    margin-top: 10px;
  }
}
</style>