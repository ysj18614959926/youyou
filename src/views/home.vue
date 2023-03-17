<template>
  <div class="home_page">
    <el-affix :offset="72">
      <el-alert
        :title="homePage.last_update_time + ' ' + homePage.last_update_content"
        type="success"
        center
        show-icon
      />
    </el-affix>
    <div class="con">
      <div class="left">
        <el-tag class="held" size="large">当前持有</el-tag>
        <common-table :data="homePage.held" type="held"></common-table>
      </div>
      <div class="right">
        <div class="progress">
          <el-progress
            type="dashboard"
            :percentage="parseFloat(homePage.accuracy)"
          >
            <template #default="{ percentage }">
              <div class="percentage-value">{{ percentage }}%</div>
              <div class="percentage-label">准确率</div>
            </template>
          </el-progress>
        </div>
        <div class="profit">
          <div class="top">
            <div class="tit">盈利</div>
            <div class="detail">查看全部</div>
          </div>
          <common-table :data="homePage.held" type="profit"></common-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CommonTable from "../components/commonTable.vue";
export default {
  name: "homePage",
  components: {
    CommonTable,
  },
  computed: {
    homePage() {
      return this.$store.state.homePage;
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
  .el-affix {
    margin-top: 12px;
  }
  .con {
    margin-top: 12px;
    display: flex;
    .left {
      width: 60%;
      padding-right: 12px;
      box-sizing: border-box;
      .held {
        margin-bottom: 12px;
        color: #206bc4;
      }
    }
    .right {
      font-size: 14px;
      flex: 1;
      .progress,
      .profit,
      .loss {
        background-color: @theme_white;
        border-radius: 8px;
      }
      .progress {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 160px;
        .percentage-label {
          margin-top: 6px;
        }
        .el-progress-circle__path {
          stroke: @theme_blue;
        }
      }
      .profit {
        margin-top: 12px;
        padding: 0 12px 12px;
        box-sizing: border-box;
        .top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 50px;
          .tit {
            font-weight: bold;
          }
          .detail {
            color: @font_txt;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>