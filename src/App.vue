<template>
  <div>
    <top-head class="top-head"></top-head>
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
  methods: {
    initPage() {
      const { errno, data } = homePage;
      if (errno == 0) {
        this.$store.commit("updateHomePage", data);
      }
    },
  },
};
</script>

<style lang="less">
body {
  margin: 0;
  background-color: @bg_content;
  .top-head {
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
