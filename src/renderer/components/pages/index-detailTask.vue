<template>
    <div class="detailTask">
        <div
            class="list"
            v-for="item in this.$store.state.listData"
            :key="item.listTitle"
            :style="{ background: item.color}"
        >
            <p>{{item.listTitle}}</p>
            <listTask
                v-for="datas in item.data"
                :key="datas.title"
                :title="datas.title"
                :color="datas.color"
                :complete="datas.complete"
            />
        </div>
    </div>
</template>

<script>
export default {
    created() {}
};
</script>

<style lang="scss" scoped>
.detailTask {
  
}

.list {
    width: 250px;
    padding: 10px;
    box-sizing: border-box;
    float: left;
    margin-right: 20px;
    border-radius: 10px;

    p {
        color: #fff;
    }
}
</style>