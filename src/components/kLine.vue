<template>
  <div id="k_line_echars"></div>
</template>
<script>
export default {
  name: "kLine",
  props: ["data"],
  setup() {
    return {};
  },
  mounted() {
    this.initPage();
  },
  methods: {
    initPage() {
        // 初始化echarts实例对象
      var myCharts = this.$echarts.init(document.getElementById("k_line_echars"));
      //准备配置项
      let option = {};
      //将配置项设置给echarts实例对象
      myCharts.setOption(option);
    },
  },
};
</script>