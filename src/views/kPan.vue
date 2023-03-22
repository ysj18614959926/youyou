<template>
  <div v-if="state.query.type == 'single'">
    <to-do></to-do>
  </div>
  <div class="kpan_all" v-else>
    <div class="left">
      <div class="held">当前持有</div>
      <el-scrollbar>
        <div class="l_item" v-for="item in homePage.held" :key="item.code">
          <span>{{ item.name }}</span>
        </div>
      </el-scrollbar>
    </div>
    <div class="right">
      <el-card class="box_card">
        <template #header>
          <div class="card-header">
            创业板指数
          </div>
        </template>
        <k-line :data="kLineData.data"></k-line>
      </el-card>
    </div>
  </div>
</template>
<script>
import { kLine as kLineData } from "../mock/mock";
import kLine from '../components/kLine.vue';
import toDo from '../components/toDo.vue';
export default {
  name: "kPan",
  components: {
    kLine,
    toDo
  },
  setup() {
    const state = {
      query: ""
    };
    return {
      state,
      kLineData
    };
  },
  computed: {
    homePage() {
      return this.$store.state.homePage;
    },
  },
  created() {
    this.state.query = this.$route.query;
  },
};
</script>
<style lang="less">
.kpan_all {
  margin-top: 12px;
  display: flex;
  .left {
    background: #ffffffb3;
    border-radius: 4px;
    position: fixed;
    left: 12px;
    top: 72px;
    width: 180px;
    overflow-y: auto;
    .held {
      height: 40px;
      line-height: 40px;
      font-weight: bold;
      width: 180px;
      text-align: center;
      border-bottom: 1px solid @bg_content;
    }
    .el-scrollbar {
      height: calc(100vh - 125px);
    }
    .l_item {
      height: 28px;
      line-height: 28px;
      text-align: center;
      span {
        cursor: pointer;
      }
    }
  }
  .right {
    margin-left: 192px;
    width: 100%;
    .box_card {
        width: 100%;
        background: #ffffff80!important;
        .el-card__header, .el-card__body {
            padding: 12px;
        }
    }
  }
}
</style>