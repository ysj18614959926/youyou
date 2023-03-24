<template>
  <div
    class="profit_overview"
    :id="`profit_and_loss_overview-${itemType}`"
  ></div>
</template>
<script>
export default {
  name: "profitOverview",
  props: ["itemType"],
  computed: {
    homePage() {
      return this.$store.state.homePage;
    },
    profitData() {
      return [...this.homePage.profit];
    },
    lossData() {
      return [...this.homePage.loss];
    },
  },
  mounted() {
    this.initView();
  },
  methods: {
    initView() {
      let list = this.itemType == "profit" ? this.profitData : this.lossData.map(it => {return {...it, area_change: it.area_change.replace('-', '')};});
      let xData = list.map((it) => it.name);
      let yData = list.map((it) => parseFloat(it.area_change));
      let chartDom = document.getElementById(
        `profit_and_loss_overview-${this.itemType}`
      );
      let myChart = this.$echarts.init(chartDom);
      let option;
      let itemColor = this.itemType == 'profit' ? '#d20' : '#383';

      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          }
        },
        grid: {
          top: "8%"
        },
        xAxis: {
          type: "category",
          data: xData,
          axisLabel: {
                rotate: 30
            }
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: yData,
            type: "bar",
            itemStyle: {
                normal: {
                    color: function(params) {
                        return itemColor;
                    }
                }

            }
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>
<style lang="less">
.profit_overview {
  height: 200px;
}
</style>