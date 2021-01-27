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
            text: '某站点用户访问来源',
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
              name: '访问来源',
              type: 'pie',
              radius: '50%',
              top: 160,
              data: [
                  {value: 1048, name: '搜索引擎'},
                  {value: 735, name: '直接访问'},
                  {value: 580, name: '邮件营销'},
                  {value: 484, name: '联盟广告'},
                  {value: 300, name: '视频广告'}
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
  }
}
</style>