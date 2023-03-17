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
        <el-table
          :data="homePage.held"
          style="width: 100%"
          border
          stripe
          highlight-current-row
        >
          <el-table-column
            align="center"
            prop="code"
            label="股票代码"
            sortable
            width="180"
          />
          <el-table-column align="center" prop="name" label="名称" />
          <el-table-column align="center" label="买入时间">
            <template #default="scope">
              {{ formatDate(scope.row.buy_datetime) }}
            </template>
          </el-table-column>
          <el-table-column align="center" prop="buy_price" label="买入价格" />
          <el-table-column align="center" label="盈亏">
            <template #default="scope">
              <div
                :class="[
                  'range',
                  scope.row.range.indexOf('-') == -1 ? 'profit' : 'loss',
                ]"
              >
                {{ scope.row.range }}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
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
        return `${Y}/${this.initBit(M)}/${D} ${this.initBit(h)}:${this.initBit(
          m
        )}:${this.initBit(s)}`;
      } else {
        return "-";
      }
    },
    initBit(num) {
      return num > 9 ? num : "0" + num;
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
      .range {
        display: flex;
        align-items: center;
        font-weight: bold;
        justify-content: center;
      }
      .profit {
        color: #d20;
      }
      .loss {
        color: #383;
      }
    }
  }
}
</style>