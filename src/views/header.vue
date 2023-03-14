<template>
    <div>
        <div class="left">
            <div class=" tab active_tab">首页</div>
        </div>
        <div class="right">
            <div class="run">稳定运行：{{state.timer}}</div>
            <img src="@/assets/avator.jpg" alt="头像" width="40">
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue';
export default {
    setup() {
        const baseTime = 1672502400000;
        const state = reactive({
            timer: '-天-时-分-秒'
        })
        return {
            state,
            baseTime
        }
    },
    computed: {

    },
    created() {
        this.runTime();
    },
    methods: {
        runTime() {
            setInterval(() => {
                let now = new Date().getTime();
                let usedTime = now - this.baseTime; // 相差的毫秒数
                let days = Math.floor(usedTime / (24 * 3600 * 1000)); // 计算出天数
                let leave = usedTime % (24 * 3600 * 1000); // 计算天数后剩余的时间
                let hours = Math.floor(leave / (3600 * 1000)); // 计算剩余的小时数
                let leave2 = leave % (3600 * 1000); // 计算剩余小时后剩余的毫秒数
                let minutes = Math.floor(leave2 / (60 * 1000)); // 计算剩余的分钟数
                let leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
                let seconds=Math.round(leave3/1000)
                this.state.timer = days + '天' + hours + '时' + minutes + '分' + seconds + '秒';
            }, 1000);
        }
    }
}
</script>
<style lang="less">
.right {
    display: flex;
    align-items: center;
    .run {
        margin-right: 12px;
        color: @theme_white;
    }
}
.tab {
    position: relative;
    line-height: 60px;
    color: @theme_white;
    width: 100px;
    text-align: center;
}
.active_tab::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 90%;
    background: @theme_white;
    height: 2px;
    bottom: 2px;
    left: 5%;
}
</style>