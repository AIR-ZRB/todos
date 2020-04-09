<template>
    <div class="allTask">
        <h2>
            <i class="el-icon-document"></i>
            所有任务
        </h2>

        <div class="Task" v-for="item in $store.state.listData" :key="item.listTitle" :style="{background: item.color}">
            <span>{{item.listTitle}}</span>
        </div>

        <div class="Task" @click="()=>{this.$store.commit('editTaskShow',true)}">
            <span>创建块任务</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    created() {
        // console.log(this.$store.state.listData);
    }
};
</script>

<style lang="scss" scoped>
.allTask {
    h2 {
        margin: 5px 0;
    }

    .Task {
        width: 200px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-weight: 700;
        color: #fff;
        border-radius: 10px;
        // background-image: linear-gradient(to right, #ccffff, #99ccff);
        background: #ccc;
        cursor: pointer;
        margin: 10px;
        margin-left: 0;
        float: left;
    }
}
</style>