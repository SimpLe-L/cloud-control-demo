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
        arr: ['温度', '能见度', '湿度'],
        current: 0,
        arr1: [18, 22, 40, 35, 32, 26, 39],
        arr2: [3500, 3325, 4688, 5558, 4610, 3666, 3845],
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
                  name: '温度数据',
                  type: 'line',
                  data: this.arr1
                }
              ]
            })
            break;
          case 1:
            this.myChart.setOption({
              series: [
                {
                  name: '能见度',
                  type: 'line',
                  data: this.arr2
                }
              ]
            })
            break;
            case 2:
            this.myChart.setOption({
              series: [
                {
                  name: '湿度数据',
                  type: 'line',
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
            text: '折线图展示',
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
              name: '温度数据',
              type: 'line',
              lineStyle: {
                color: "#00d887",
                width: 2
              },
              //填充区域
              areaStyle: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                    },
                    {
                      offset: 0.8,
                      color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
              },
              symbol: "circle",
              // 拐点大小
              symbolSize: 8,
              // 开始不显示拐点， 鼠标经过显示
              showSymbol: false,
              // 设置拐点颜色以及边框
              itemStyle: {
                color: "#0184d5",
                borderColor: "rgba(221, 220, 107, .1)",
                borderWidth: 12
              },
              data: this.arr2
            },

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