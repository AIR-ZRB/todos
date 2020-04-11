<template>
    <div v-show="false">
        <p>请输入任务</p>
        <el-input v-model="title" placeholder="请输入内容"></el-input>
        <p>请选择开始事件和结束时间</p>
        <div class="selectTime">
            <el-time-select
                placeholder="起始时间"
                v-model="startTime"
                :picker-options="{
                    start: '08:00',
                    step: '00:30',
                    end: '23:00'
                    }"
            ></el-time-select>
            <el-time-select
                placeholder="结束时间"
                v-model="endTime"
                :picker-options="{
                    start: '08:00',
                    step: '00:30',
                    end: '23:00',
                    minTime: startTime
                    }"
            ></el-time-select>
        </div>
        <el-button type="success" style="float:right" @click="addTask">添加</el-button>
    </div>
</template>

<script>
import { _writeFile } from "@/base.js";
export default {
    data() {
        return {
            title: "",
            startTime: "",
            endTime: ""
        };
    },
    methods: {
        addTask() {
            let index = this._props.index;
            let addBeforeData = [];
            let color = [
                "red",
                "purple",
                "blue",
                "skyblue",
                "yellow",
                "green",
                "pink",
                "orange"
            ];
            // 添加的数据
            let addData = {
                title: this.title,
                complete: false,
                color: color[Number.parseInt(Math.random() * color.length)],
                time: `${this.startTime}~${this.endTime}`
            };

            // 单条数据
            let getData = this.$store.state.listData[this._props.index];

            // store全部数据
            let allData = [];

            this.$store.state.listData.forEach(element => {
                allData.push(element);
            });

            addBeforeData = JSON.parse(JSON.stringify(getData));

            addBeforeData.data.push(addData);
            allData[index] = addBeforeData;

            this.$store.commit("editListData", allData);
            _writeFile(allData);
        }
    },
    props: ["index"]
};
</script>

<style lang="scss" scoped>
.selectTime {
    display: flex;
    margin: 0 0 10px 0;
}
</style>