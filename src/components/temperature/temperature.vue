<template>
  <div class="wrapper">
    <span class="title">数据展示</span>
    <div class="linebox" ref="linebox" style="width: 250px;height:320px;"></div>
    <!-- <div class="linebox2" ref="linebox2" style="width: 250px;height:320px;"></div>
    <div class="linebox3" ref="linebox3" style="width: 250px;height:320px;"></div> -->
    <div class="select">
      <span v-for="(item, index) in arr" :key="index" 
      :class="{ active: current === index}"
      @click="changeLine(index)"
      >
      {{item}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        myChart: null,
        arr: ['能见度', '湿度', '温度'],
        current: 1,
        arr1: [120, 132, 101, 134, 90, 230, 210],
        arr2: [820, 932, 901, 934, 1290, 1330, 1320],
        arr3: [150, 232, 201, 154, 190, 330, 410]
      }
    },

    methods: {
      changeLine(index){
        this.current = index;
        
        switch (index) {
          case 0:
            this.myChart.setOption({
              series: [
                {
                  name: '邮件营销',
                  type: 'line',
                  stack: '总量',
                  data: this.arr1
                }
              ]
            })
            break;
          case 1:
            this.myChart.setOption({
              series: [
                {
                  name: '邮件营销',
                  type: 'line',
                  stack: '总量',
                  data: this.arr2
                }
              ]
            })
            break;
            case 2:
            this.myChart.setOption({
              series: [
                {
                  name: '邮件营销',
                  type: 'line',
                  stack: '总量',
                  data: this.arr3
                }
              ]
            })
            break;
          default:
            break;
        }
      },
      drawLine(){
        this.myChart = this.$echarts.init(this.$refs.linebox);
        this.myChart.setOption({
          title: {
            text: '折线图堆叠',
            left: 'center',
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          // legend: {
          //   data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          // },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: this.arr1
            },
            // {
            //   name: '联盟广告',
            //   type: 'line',
            //   stack: '总量',
            //   data: [220, 182, 191, 234, 290, 330, 310]
            // },
            // {
            //   name: '视频广告',
            //   type: 'line',
            //   stack: '总量',
            //   data: [150, 232, 201, 154, 190, 330, 410]
            // },
            // {
            //   name: '直接访问',
            //   type: 'line',
            //   stack: '总量',
            //   data: [320, 332, 301, 334, 390, 330, 320]
            // },
            // {
            //   name: '搜索引擎',
            //   type: 'line',
            //   stack: '总量',
            //   data: [820, 932, 901, 934, 1290, 1330, 1320]
            // }
          ]
        })
      }
    },

    mounted(){
      this.drawLine();
    },
  }
</script>

<style lang="less" scoped>
.active{
  background-color: goldenrod!important;
}
.wrapper {
  // width: 100%;
  // height: 100%;
  .title {
    display: block;
    text-align: center;
    // margin: 5px;
  }
  .select{
    position: absolute;
    left: 5px;
    bottom: 5px;

    span{
      cursor: pointer;
      margin-right: 3px;
      // background-color: transparent;
      color: #fff;
      // border-color: transparent;
      border-radius: 5px;
      background-color: tomato;
    }
  }
}
</style>