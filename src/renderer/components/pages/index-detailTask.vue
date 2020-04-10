<template>
    <div class="detailTask">
        <div class="list" v-for="(item,index) in this.$store.state.listData" :key="item.listTitle">
            <p :style="{ background: item.color}">{{item.listTitle}}</p>
            <listTaskThin
                v-for="datas in item.data"
                :key="datas.title"
                :title="datas.title"
                :color="datas.color"
                :time="datas.time"
                :complete="datas.complete"
            />

            <div class="addTask" @click="()=>{show(index)}">添加卡片</div>
            <addTask ref="add" :index="index"/>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        show(index) {
            this.$refs.add.forEach(
                Element => (Element.$el.style.display = "none")
            );
            this.$refs.add[index].$el.style.display = "block";
            // console.log(this.$store.state.listData[index]);
            // console.log(this.$refs.add[0].style.display = "none")
        }
    },
    created() {
        console.log(this);
    }
};
</script>

<style lang="scss" scoped>
.detailTask {
}

.list {
    width: 300px;
    padding: 10px;
    box-sizing: border-box;
    float: left;
    margin: 0 20px 20px 0;
    border-radius: 10px;
    border: 1px solid #000;

    p {
        color: #fff;
        // margin: 0;
    }
    .addTask {
        text-align: center;
        cursor: pointer;
    }
}
</style>