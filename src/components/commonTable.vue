<template>
  <el-table
    class="common_table"
    :data="data"
    style="width: 100%"
    stripe
    highlight-current-row
    :size="type == 'held' ? '' : 'small'"
  >
    <el-table-column align="center" prop="code" label="股票代码" sortable />
    <el-table-column align="center" prop="name" label="名称" />
    <el-table-column align="center" label="买入时间" width="180">
      <template #default="scope">
        {{ formatDate(scope.row.buy_datetime) }}
      </template>
    </el-table-column>
    <template v-if="type !== 'held'">
      <el-table-column align="center" label="卖出时间" width="180">
        <template #default="scope">
          {{ formatDate(scope.row.sell_datetime) }}
        </template>
      </el-table-column>
    </template>
    <el-table-column align="center" prop="buy_price" label="买入价格" />
    <template v-if="type !== 'held'">
      <el-table-column align="center" prop="sell_price" label="卖出价格" />
    </template>
    <el-table-column align="center" label="盈亏">
      <template #default="scope">
        <div
          :class="[
            'area_change',
            scope.row.area_change.indexOf('-') == -1 ? 'profit_txt' : 'loss_txt',
          ]"
        >
          {{ scope.row.area_change }}
        </div>
      </template>
    </el-table-column>
    <el-table-column align="center" label="操作">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click="handleClick(scope.row)"
          >查看详情</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { formatDate } from "../utils/utils";
export default {
  props: ["data", "type"],
  setup() {
    return {
      formatDate,
    };
  },
  methods: {
    handleClick(item) {
      this.$router.push({
        path: '/kpan',
        query: {
          code: item.code,
          data_type: this.type,
          type: 'single'
        }
      });
    }
  }
};
</script>
<style lang="less">
.common_table {
  .area_change {
    display: flex;
    align-items: center;
    font-weight: bold;
    justify-content: center;
  }
  .profit_txt {
    color: #d20;
  }
  .loss_txt {
    color: #383;
  }
}
</style>