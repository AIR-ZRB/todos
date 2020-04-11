<template>
    <div class="list-task">
        <div class="task-color" :style="{background: _props.color}"></div>
        <div class="task-text">
            <p class="task-title">{{_props.title}}</p>
            <p>{{_props.time}}</p>
        </div>

        <p class="task-icon">
            <el-col :span="12">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        <i class="el-icon-more"></i>
                    </span>

                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item
                            icon="el-icon-edit-outline"
                            @click.native="editCurrentTask"
                        >编辑</el-dropdown-item>

                        <el-dropdown-item icon="el-icon-delete" @click.native="removeCurrentTask">删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </p>
    </div>
</template>

<script>
import { _writeFile } from "@/base.js";
export default {
    data() {
        return {
            allData: "",
            currentData: ""
        };
    },
    methods: {
        editCurrentTask() {
            let data = {
                x: event.target.getBoundingClientRect().left,
                y: event.target.getBoundingClientRect().top,
                parentIndex: this._props.parentIndex,
                childrenIndex: this._props.childrenIndex
            };

            this.$emit("givePosition", data);
        },
        removeCurrentTask() {
            this.upData();
            this.currentData.data.splice(this._props.childrenIndex, 1);
            this.allData[this._props.parentIndex] = this.currentData;

            this.$store.commit("editListData", this.allData);
            _writeFile(this.allData);
        },
        upData() {
            this.allData = JSON.parse(
                JSON.stringify(this.$store.state.listData)
            );
            this.currentData = this.allData[this._props.parentIndex];
        }
    },
    mounted() {
        this.upData();
    },

    // 这个index是最外层元素的index
    props: [
        "title",
        "color",
        "time",
        "complete",
        "parentIndex",
        "childrenIndex"
    ]
};
</script>

<style lang="scss" scoped>
.el-dropdown-link {
    cursor: pointer;
    font-size: 26px;
}
.el-icon-arrow-down {
    font-size: 12px;
}
.demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
}

.list-task {
    background: #fff;
    width: 100%;
    height: 70px;
    padding: 10px;
    box-shadow: 5px 5px 15px #999;

    border-radius: 5px;
    box-sizing: border-box;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .task-color {
        height: 40px;
        width: 40px;

        border-radius: 50%;
        // background: red;
    }

    .task-text {
        width: 60%;
        height: 100%;
        display: grid;
        margin-left: 30px;
        grid-template-rows: 60% 40%;
        p {
            margin: 0;
        }
        .task-title {
            font-size: 20px;
            font-weight: 700;
        }
    }

    .task-icon {
        margin: 0;
        font-size: 26px;
        transform: rotate(90deg);
        // color: #c1c3ca;
    }
}
</style>