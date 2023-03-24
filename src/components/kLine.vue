<template>
  <div id="k_line_echars" style="width: 100%; height: 100%"></div>
</template>
<script>
export default {
  name: "kLine",
  props: ["data", "buySellInfo"],
  setup() {
    let state = {};
    return {
      state,
    };
  },
  mounted() {
    this.initPage();
  },
  methods: {
    initPage() {
      let k_data = [];
      this.data.forEach((item) => {
        k_data.push([item.open, item.close, item.low, item.high]); // open,close,low,high
      });
      // 初始化echarts实例对象
      let myCharts = this.$echarts.init(
        document.getElementById("k_line_echars")
      );
      //准备配置项
      let option = {
        // 缩放
        // dataZoom: [
        //   // {
        //   //   type: "inside",
        //   //   xAxisIndex: [0, 1],
        //   //   start: 0,
        //   //   end: 100,
        //   // },
        //   {
        //     show: true,
        //     xAxisIndex: [0, 1],
        //     type: "slider",
        //     bottom: "2%",
        //     start: 0,
        //     end: 100,
        //   },
        // ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          textStyle: {
            color: "#000",
          },
          position: function (pos, params, el, elRect, size) {
            const obj = {
              top: 10,
            };
            obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30;
            return obj;
          },
        },
        axisPointer: {
          link: [
            {
              xAxisIndex: "all",
            },
          ],
          label: {
            backgroundColor: "#777",
          },
        },
        toolbox: {
          show: false,
        },
        grid: [
          {
            top: "5%",
            left: "8%",
            right: "4%",
            height: "32%",
          },
          {
            left: "8%",
            right: "4%",
            top: "42%",
            height: "10%",
          },
          {
            left: "8%",
            right: "6%",
            top: "57%",
            height: "10%",
          },
          {
            left: "8%",
            right: "6%",
            top: "72%",
            height: "12%",
          },
        ],
        xAxis: [
          {
            gridIndex: 0,
            type: "category",
            show: false,
            data: this.data.map((it) => {
              return this.getLocalTime(it.timestamp);
            }),
          },
          {
            gridIndex: 1,
            type: "category",
            show: false,
            data: this.data.map((it) => {
              return this.getLocalTime(it.timestamp);
            }),
          },
          {
            gridIndex: 2,
            type: "category",
            show: false,
            data: this.data.map((it) => {
              return this.getLocalTime(it.timestamp);
            }),
          },
          {
            gridIndex: 3,
            type: "category",
            axisLine: {
              onZero: false,
            },
            data: this.data.map((it) => {
              return this.getLocalTime(it.timestamp);
            }),
          },
        ],
        yAxis: [
          {
            gridIndex: 0,
            scale: true,
          },
          {
            type: "value",
            scale: true,
            gridIndex: 1,
            axisTick: {
              alignWithLabel: true,
            },
          },
          {
            type: "value",
            scale: true,
            gridIndex: 2,
            axisTick: {
              alignWithLabel: true,
            },
          },
          {
            type: "value",
            scale: true,
            gridIndex: 3,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        series: [
          {
            name: "k",
            xAxisIndex: 0,
            yAxisIndex: 0,
            type: "candlestick",
            data: k_data,
            markPoint: {
              data: [
                {
                  name: 'buy',
                  value: 'B',
                  xAxis: this.data.findIndex(it => it.timestamp == this.buySellInfo.buy_datetime),
                  yAxis: this.data.find(it => it.timestamp == this.buySellInfo.buy_datetime)?.open,
                  symbolSize: 30,
                  itemStyle: {
                    color: '#d20'
                  },
                  label: {
                    color: '#FFF'
                  }
                },
                {
                  name: 'sell',
                  value: 'S',
                  xAxis: this.data.findIndex(it => it.timestamp == this.buySellInfo.sell_datetime),
                  yAxis: this.data.find(it => it.timestamp == this.buySellInfo.sell_datetime)?.open,
                  symbolSize: 30,
                  itemStyle: {
                    color: '#383'
                  },
                  label: {
                    color: '#FFF'
                  }
                }
              ],
            },
          },
          {
            xAxisIndex: 0,
            yAxisIndex: 0,
            name: "MA5",
            type: "line",
            data: this.data.map((it) => it.ma5),
            symbol: "none",
            smooth: true,
            lineStyle: {
              opacity: 0.5,
              width: 1,
            },
          },
          {
            xAxisIndex: 0,
            yAxisIndex: 0,
            name: "MA10",
            type: "line",
            data: this.data.map((it) => it.ma10),
            symbol: "none",
            smooth: true,
            lineStyle: {
              opacity: 0.5,
              width: 1,
            },
          },
          {
            xAxisIndex: 0,
            yAxisIndex: 0,
            name: "MA20",
            type: "line",
            data: this.data.map((it) => it.ma20),
            symbol: "none",
            smooth: true,
            lineStyle: {
              opacity: 0.5,
              width: 1,
            },
          },
          {
            xAxisIndex: 0,
            yAxisIndex: 0,
            name: "ma30",
            type: "line",
            data: this.data.map((it) => it.ma30),
            symbol: "none",
            smooth: true,
            lineStyle: {
              opacity: 0.5,
              width: 1,
            },
          },
          {
            xAxisIndex: 1,
            yAxisIndex: 1,
            name: "UP",
            type: "line",
            data: this.data.map((it) => it.ub),
            symbol: "none",
            smooth: true,
            lineStyle: {
              opacity: 0.5,
              width: 1,
            },
          },
          {
            xAxisIndex: 1,
            yAxisIndex: 1,
            name: "LOW",
            type: "line",
            data: this.data.map((it) => it.lb),
            symbol: "none",
            smooth: true,
            lineStyle: {
              opacity: 0.5,
              width: 1,
            },
          },
          {
            xAxisIndex: 1,
            yAxisIndex: 1,
            name: "MID",
            type: "line",
            data: this.data.map((it) => it.b_ma20),
            symbol: "none",
            smooth: true,
            lineStyle: {
              opacity: 0.5,
              width: 1,
            },
          },
          {
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: "DEA",
            type: "line",
            data: this.data.map((it) => it.dea),
            symbol: "none",
            smooth: true,
            lineStyle: {
              opacity: 0.5,
              width: 1,
            },
          },
          {
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: "DIF",
            type: "line",
            data: this.data.map((it) => it.dif),
            symbol: "none",
            smooth: true,
            lineStyle: {
              opacity: 0.5,
              width: 1,
            },
          },
          {
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: "MACD",
            type: "bar",
            barWidth: "1px",
            itemStyle: {
              //柱体背景色
              normal: {
                color: (val) => {
                  var index_color = val.value;
                  return index_color > 0 ? "#E93030" : "#229D45";
                },
              },
            },
            data: this.data.map((it) => it.macd),
          },
          {
            xAxisIndex: 3,
            yAxisIndex: 3,
            name: "K",
            type: "line",
            data: this.data.map((it) => it.kdjk),
            symbol: "none",
            smooth: true,
            lineStyle: {
              opacity: 0.5,
              width: 1,
            },
          },
          {
            xAxisIndex: 3,
            yAxisIndex: 3,
            name: "D",
            type: "line",
            data: this.data.map((it) => it.kdjd),
            symbol: "none",
            smooth: true,
            lineStyle: {
              opacity: 0.5,
              width: 1,
            },
          },
          {
            xAxisIndex: 3,
            yAxisIndex: 3,
            name: "J",
            type: "line",
            data: this.data.map((it) => it.kdjj),
            symbol: "none",
            smooth: true,
            lineStyle: {
              opacity: 0.5,
              width: 1,
            },
          },
        ],
      };
      //将配置项设置给echarts实例对象
      myCharts.setOption(option);
    },
    getLocalTime(nS) {
      var date = new Date(Number(nS));
      let M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      let D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate() + " ";
      return M + D;
    },
  },
};
</script>