<template>
  <el-table
    class="common_table"
    :data="data"
    style="width: 100%"
    stripe
    highlight-current-row
    :size="type == 'held' ? '' : 'small'"
  >
    <el-table-column
      v-for="item in column"
      :key="item.key"
      :prop="item.key"
      :label="item.label"
      :sortable="item.sortable"
      :width="item.width"
      align="center"
    >
      <template #default="scope">
        <div v-if="item.type == 'time'">
          {{ formatDate(scope.row[item.key]) }}
        </div>
        <div v-if="item.type == 'date'">日期</div>
        <div v-if="item.type == 'change'">
          <div
            :class="[
              'area_change',
              scope.row.area_change.indexOf('-') == -1
                ? 'profit_txt'
                : 'loss_txt',
            ]"
          >
            {{ scope.row.area_change }}
          </div>
        </div>
        <div v-if="item.type == 'double'">
          {{scope.row[item.value[0]]}}/{{scope.row[item.value[1]]}}
        </div>
        <div v-if="item.type == 'double_date'">
          {{formatDate(scope.row[item.value[0]], 'date')}}-{{formatDate(scope.row[item.value[1]], 'date')}}
        </div>
        <div v-if="item.type == 'value'">
          {{ scope.row[item.key] }}
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
          >{{ type == "held" ? "查看" : "" }}详情</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { formatDate } from "../utils/utils";
export default {
  props: ["data", "type", "column"],
  setup() {
    return {
      formatDate,
    };
  },
  methods: {
    handleClick(item) {
      this.$router.push({
        path: "/kpan",
        query: {
          code: item.code,
          data_type: this.type,
          type: "single",
        },
      });
    },
  },
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
  .cell {
    padding: 0!important;
    min-width: none;
  }
}
</style>