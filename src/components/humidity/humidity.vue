<template>
  <div class="wrapper">
    <span class="title">数据展示2</span>
    <div class="linebox2" ref="linebox2" style="width: 250px;height:320px;"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      drawLine(){
        // let myChart = this.$echarts.init(document.getElementById('linebox2'));
        let myChart = this.$echarts.init(this.$refs.linebox2);
        myChart.setOption({
          title: {
            text: '某站点车辆信息',
            // subtext: '纯属虚构',
            left: 'center',
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
              trigger: 'item'
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              top: 30,
              textStyle: {
              color: '#fff'
            }
          },
          series: [
            {
              name: '车辆信息',
              type: 'pie',
              radius: '50%',
              top: 160,
              data: [
                  {value: 1048, name: '小轿车'},
                  {value: 735, name: '货车'},
                  {value: 580, name: '集装车'},
                  {value: 484, name: '面包车'},
                  {value: 300, name: '客运车'}
              ],
              emphasis: {
                  itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              },
        
            }
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
.wrapper {
  // width: 100%;
  // height: 100%;
  .title {
    display: block;
    text-align: center;
    // margin: 5px;
    color: #F5EF65;
  }
}
</style>