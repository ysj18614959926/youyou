<template>
  <Header class="header" />
  <div class="content">
    <router-view></router-view>
  </div>
</template>
<script>
import Header from '@/views/header.vue'
export default {
  components: {
    Header
  },
  setup() {

  },
}
</script>

<style lang="less">
body {
  margin: 0;
  background-color: @bg_content;
  .header {
    position: relative;
    height: 60px;
    background-color: @bg_header;
    box-shadow: 0px 18px 30px 0px rgba(0,0,0,0.1);
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
