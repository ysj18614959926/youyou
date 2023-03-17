<template>
  <el-table
    class="common_table"
    :data="data"
    style="width: 100%"
    border
    stripe
    highlight-current-row
    :size="type == 'held' ? '' : 'small'"
  >
    <el-table-column align="center" prop="code" label="股票代码" sortable />
    <el-table-column align="center" prop="name" label="名称" />
    <el-table-column align="center" label="买入时间">
      <template #default="scope">
        {{ formatDate(scope.row.buy_datetime) }}
      </template>
    </el-table-column>
    <el-table-column align="center" prop="buy_price" label="买入价格" />
    <template v-if="type != 'held'">
      <el-table-column align="center" label="买入时间">
        <template #default="scope">
          {{ formatDate(scope.row.buy_datetime) }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="buy_price" label="买入价格" />
    </template>
    <el-table-column align="center" label="盈亏">
      <template #default="scope">
        <div
          :class="[
            'range',
            scope.row.range.indexOf('-') == -1 ? 'profit_txt' : 'loss_txt',
          ]"
        >
          {{ scope.row.range }}
        </div>
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
};
</script>
<style lang="less">
.common_table {
  .range {
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