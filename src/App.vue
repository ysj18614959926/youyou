<template>
  <div v-loading="isLoad" element-loading-background="rgba(0, 0, 0, 0.3)" element-loading-text="Loading...">
    <top-head class="top_head"></top-head>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import TopHead from "@/views/topHead.vue";
import { homePage } from "./mock/mock";

export default {
  name: "appPage",
  components: {
    TopHead,
  },
  created() {
    this.initPage();
  },
  computed: {
    isLoad() {
      return this.$store.state.isLoad;
    }
  },
  methods: {
    initPage() {
      const { error_num, data } = homePage;
      if (error_num == 0) {
        this.$store.commit("updateHomePage", data);
        setTimeout(() => {
          this.$store.commit("updateLoad", false);
        }, 200);
      }
    },
  },
};
</script>

<style lang="less">
body {
  margin: 0;
  background-color: @bg_content;
  .top_head {
    position: relative;
    height: 60px;
    background-color: @bg_header;
    box-shadow: 0px 18px 30px 0px rgba(0, 0, 0, 0.1);
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content {
    box-sizing: border-box;
    height: calc(100vh - 60px);
    overflow: auto;
    padding: 12px;
  }
}
</style>
