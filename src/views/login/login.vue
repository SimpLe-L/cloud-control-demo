<template>
  <div class="login">
    <div class="login-layout">
      <div class="login-layout-header">
      </div>
      <login-main></login-main>
      <div class="login-layout-footer"></div>
      <ParticlesBg type="lines" bg/>
    </div>  
  </div>
</template>

<script>

import LoginMain from './login-layout/login-main.vue';
import { ParticlesBg } from "particles-bg-vue";
import './index.less';
  export default {
    components: {
      LoginMain,
      ParticlesBg
    }
  }
</script>
    

<style lang="less" scoped>

</style>