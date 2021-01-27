<template>
  <div class="wrapper">
    <span class="title">参数设定</span>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import AutoModel from '../../views/paramPages/auto-model';
import StrengthenModel from '../../views/paramPages/strengthen-model';
import GuideModel from '../../views/paramPages/guide-model';
import CrashModel from '../../views/paramPages/crash-model';
import LightoffModel from '../../views/paramPages/lightoff-model';
  export default {
    components:{
      AutoModel,
      StrengthenModel,
      GuideModel,
      CrashModel,
      LightoffModel
    },
    data(){
      return {
        modeArr: ['AutoModel', 'StrengthenModel', 'GuideModel', 'CrashModel', 'LightoffModel']
      }
    },
    methods: {
      
    },
    computed:{
      currentComponent(){
        let currentMode = this.$store.state.curMode;
        return this.modeArr[currentMode];
      },
    },
    watch:{
    }
  }
</script>

<style lang="less" scoped>
.wrapper {
  // width: 100%;
  // height: 100%;
  .title {
    display: block;
    text-align: center;
    // margin: 5px;
  }
}
</style>