<template>
    <div class="detailTask">
        <div
            class="list"
            v-for="(item,parentIndex) in this.$store.state.listData"
            :key="item.listTitle"
        >
            <p :style="{ background: item.color}">{{item.listTitle}}</p>
            <listTaskThin
                v-for="(datas,childrenIndex) in item.data"
                :key="datas.title"
                :title="datas.title"
                :color="datas.color"
                :time="datas.time"
                :complete="datas.complete"
                :parentIndex="parentIndex"
                :childrenIndex="childrenIndex"
                @givePosition="getPosition"
            />

            <div class="addTask" @click="()=>{show(parentIndex)}">添加卡片</div>
            <addTask ref="add" :index="parentIndex" />
        </div>

        <div class="editTask" ref="editTask" v-show="editIsShow">
            <el-input placeholder="请输入内容" v-model="title"></el-input>
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
            <el-button type="danger" @click="()=>{this.editIsShow= false}">取消</el-button>
            <el-button type="success" @click="edit">修改</el-button>
        </div>
    </div>
</template>

<script>
import { _writeFile } from "@/base.js";

export default {
    data() {
        return {
            title: "",
            startTime: "",
            endTime: "",
            afterData: {},
            allData: [],
            parentIndex: 0,
            childrenIndex: 0,
            editIsShow: false
        };
    },
    methods: {
        edit() {
            // 修改按钮
            console.log(this.startTime);

            this.afterData.title = this.title;
            this.afterData.time = `${this.startTime}~${this.endTime}`;

            console.log(this.afterData);

            this.allData[this.parentIndex].data[
                this.childrenIndex
            ] = this.afterData;
            console.log(this.allData);
            this.$store.commit("editListData", this.allData);
            _writeFile(this.allData);
            // let afterAllData =

            this.editIsShow = false;
        },
        getPosition(data) {
            // console.log(this.$refs.editTask)
            this.editIsShow = true;

            let editTask = this.$refs.editTask;
            editTask.style.top = `${data.y + 10}px`;
            editTask.style.left = `${data.x - 191}px`;

            let allData = this.$store.state.listData;
            allData = JSON.parse(JSON.stringify(allData));

            let currentData = allData[data.parentIndex];

            let currentEditData = currentData.data[data.childrenIndex];

            this.allData = allData;
            this.afterData = currentEditData;
            this.parentIndex = data.parentIndex;
            this.childrenIndex = data.childrenIndex;

            // 绑定到框框上
            this.title = currentEditData.title;
            this.startTime = currentEditData.time;
            this.endTime = currentEditData.time;

            console.log(data);
        },
        show(index) {
            this.$refs.add.forEach(
                Element => (Element.$el.style.display = "none")
            );
            this.$refs.add[index].$el.style.display = "block";
        }
    }
};
</script>

<style lang="scss" scoped>
.detailTask {
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
    .editTask {
        box-sizing: border-box;
        padding: 0 10px;
        width: 300px;
        position: absolute;
        top: 0;
        left: 0;
        background: white;

        .selectTime {
            display: flex;
            margin: 10px 0;
        }
        button {
            float: right;
        }
    }
}
</style>