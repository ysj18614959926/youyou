<template>
  <div class="kpan_single" v-if="query.type == 'single'">
    <el-card class="box_card">
        <template #header>
          <div class="card-header">
            {{state.curr.name}}
          </div>
        </template>
        <k-line :data="kLineData.data" :buySellInfo="state.buySellInfo"></k-line>
      </el-card>
  </div>
  <div class="kpan_all" v-else>
    <div class="left">
      <div class="held">当前持有</div>
      <el-scrollbar>
        <div class="l_item" v-for="item in homePage.held" :key="item.code" :class="state.curr.code == item.code ? 'active' : ''">
          <span @click="changeItem(item)">{{ item.name }}</span>
        </div>
      </el-scrollbar>
    </div>
    <div class="right">
      <el-card class="box_card">
        <template #header>
          <div class="card-header">
            {{state.curr.name}}
          </div>
        </template>
        <k-line :data="kLineData.data" :buySellInfo="state.buySellInfo"></k-line>
      </el-card>
    </div>
  </div>
</template>
<script>
import { kLine as kLineData } from "../mock/mock";
import kLine from '../components/kLine.vue';
import { reactive } from 'vue';

export default {
  name: "kPan",
  components: {
    kLine
  },
  setup() {
    const state = reactive({
      curr: {},
      buySellInfo: {}
    });
    return {
      state,
      kLineData
    };
  },
  computed: {
    homePage() {
      return this.$store.state.homePage;
    },
    query() {
      return this.$route.query;
    }
  },
  created() {
    if (this.query.type != 'single') {
      this.state.curr = this.homePage.held[0];
      this.state.buySellInfo = this.homePage.held[0];
    } else {
      this.state.curr = {
        code: this.query.code,
        name: this.query.name
      };
      this.state.buySellInfo = {...this.homePage[this.query.data_type].find(it => it.code == this.query.code)};
    }
  },
  methods: {
    changeItem(item) {
      this.state.curr = item;
      this.state.buySellInfo = item;
    }
  }
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
      height: 34px;
      line-height: 34px;
      text-align: center;
      span {
        cursor: pointer;
      }
    }
    .active {
      color: @theme_blue;
      font-weight: bold;
    }
  }
  .right {
    margin-left: 192px;
    width: 100%;
    .box_card {
        width: 100%;
        height: calc(100vh - 86px);
        background: #ffffff80!important;
        .el-card__header, .el-card__body {
            padding: 12px;
        }
        .el-card__body {
          height: calc(100% - 72px);
        }
    }
  }
}
.kpan_single {
  margin-top: 12px;
  .box_card {
        width: 100%;
        height: calc(100vh - 86px);
        background: #ffffff80!important;
        .el-card__header, .el-card__body {
            padding: 12px;
        }
        .el-card__body {
          height: calc(100% - 72px);
        }
    }
}
</style>