<template>
  <div class="home_page">
    <el-affix :offset="72" class="alert_affix">
      <el-alert
        :title="homePage.last_update_time + ' ' + homePage.last_update_content"
        type="success"
        center
        show-icon
        :closable="false"
      />
    </el-affix>
    <div class="con">
      <div class="left">
        <el-tag class="held" size="large">当前持有</el-tag>
        <common-table :data="homePage.held" type="held"></common-table>
      </div>
      <el-affix :offset="122.5">
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
          <div class="profit_and_loss">
            <div class="top">
              <div class="tit">盈利Top5</div>
            </div>
            <el-popover
              placement="left"
              :width="900"
              trigger="hover"
            >
              <template #default>
                <common-table
                  :data="homePage.profit"
                  type="profit"
                ></common-table>
              </template>
              <template #reference>
                <profit-overview itemType="profit"></profit-overview>
              </template>
            </el-popover>
          </div>
          <div class="profit_and_loss">
            <div class="top">
              <div class="tit">亏损Top5</div>
            </div>
            <el-popover
              placement="left"
              :width="900"
              trigger="hover"
            >
              <template #default>
                <common-table
                  :data="homePage.loss"
                  type="loss"
                ></common-table>
              </template>
              <template #reference>
                <profit-overview itemType="loss"></profit-overview>
              </template>
            </el-popover>
          </div>
        </div>
      </el-affix>
    </div>
  </div>
</template>
<script>
import CommonTable from "../components/commonTable.vue";
import { formatDate } from "../utils/utils";
import profitOverview from "../components/profitOverview.vue";
export default {
  name: "homePage",
  setup() {
    return {
      formatDate,
    };
  },
  components: {
    CommonTable,
    profitOverview,
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
  .alert_affix {
    width: 100% !important;
  }
  .con {
    padding-top: 24px;
    display: flex;
    .left {
      flex: 1;
      padding-right: 12px;
      box-sizing: border-box;
      .held {
        margin-bottom: 12px;
        color: #206bc4;
      }
    }
    .right {
      font-size: 14px;
      width: 400px;
      .progress,
      .profit_and_loss {
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
      .profit_and_loss {
        margin-top: 12px;
        padding: 0 12px 12px;
        box-sizing: border-box;
        .top {
          padding-top: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
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