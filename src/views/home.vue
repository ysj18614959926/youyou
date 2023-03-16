<template>
  <div class="home_page">
    <el-affix :offset="72">
      <el-alert
        :title="
          formatDate(homePage.last_update_time) +
          ' ' +
          homePage.last_update_content
        "
        type="success"
        center
        show-icon
      />
    </el-affix>

    <div class="con">
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "homePage",
  computed: {
    homePage() {
      return this.$store.state.homePage;
    },
  },
  methods: {
    formatDate(timeStamp) {
      if (timeStamp) {
        let d = new Date(Number(timeStamp));
        let Y = d.getFullYear();
        let M = d.getMonth();
        let D = d.getDate();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        return `${Y}年${M}月${D}日 ${h}时${m}分${s}秒`;
      } else {
        return "-";
      }
    },
  },
};
</script>
<style lang="less">
.home_page {
  .el-alert--success.is-light {
    background-color: #ffffffcc;
  }
  .el-alert--success.is-light {
    color: @theme_blue;
  }
  .el-alert__title {
    line-height: 22.5px !important;
  }
  .con {
    margin-top: 12px;
    display: flex;
    .left {
      width: 70%;
      height: 1200px;
      border: 1px solid #000;
    }
  }
}
</style>