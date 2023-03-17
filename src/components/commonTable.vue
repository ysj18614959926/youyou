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
export default {
  props: ["data", "type"],
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