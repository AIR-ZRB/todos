<template>
    <div class="list">
        <div class="list-container" ref="list">
            <div class="list-toggle">
                <router-link to="index">点击我切换形态</router-link>
            </div>
            <div class="list-title">
                <h2>{{currentTitle}}</h2>
                <div class="ctrl-toggle">
                    <i class="el-icon-arrow-left" @click="()=>{toggleList('left')}"></i>
                    <i class="el-icon-arrow-right" @click="()=>{toggleList('right')}"></i>
                </div>
            </div>
            <listTask
                v-for="item in currentData"
                :key="item.title"
                :title="item.title"
                :color="item.color"
                :complete="item.complete"
                :time="item.time"
            />
            <!-- <footer class="list-footer" @click="dialog">添加卡</footer> -->
        </div>
    </div>
</template>

<script>
import { _readFile, _writeFile } from "@/base.js";

export default {
    data() {
        return {
            allData: "",
            currentTitle: "", // 当前数据的标题
            currentData: [], // 当前数据的数据
            currentIndex: 0, // 当前数据的索引
            disable: false
        };
    },
    methods: {
        dialog() {},
        // 左右切换
        toggleList(direction) {
            if (direction === "left") {
                this.currentIndex < 1
                    ? (this.currentIndex = 0)
                    : (this.currentIndex -= 1);
            } else {
                this.currentIndex >= this.allData.length - 1
                    ? (this.currentIndex = this.allData.length - 1)
                    : (this.currentIndex = this.currentIndex + 1);
            }
        }
    },
    watch: {
        currentIndex() {
            this.currentTitle = this.allData[this.currentIndex].listTitle;
            this.currentData = this.allData[this.currentIndex].data;
        }
    },
    created() {
        _readFile().then(data => {
            this.$store.commit("editListData", data);
            this.allData = data;
            this.currentTitle = this.allData[this.currentIndex].listTitle;
            this.currentData = this.allData[this.currentIndex].data;
        });
    },
    mounted() {
        // 设置窗口大小
        let _this = this;

        this.$store.commit("editWindowSize", {
            // width: _this.$refs.list.offsetWidth,
            // height: _this.$refs.list.style.height,
            // width: 1000,

            width: 320,
            // width: 1000,
            height: 580
        });
    }
};
</script>

<style lang="scss" scoped>
.list {
    width: 300px;
    height: 580px;
    overflow-y: scroll;
}
.list-container {
    // -webkit-app-region: drag;

    overflow: hidden;
    opacity: 0.9;
    background: #e5eff5;
    border-radius: 10px;
    padding: 0 10px;
    // box-sizing: border-box;
    margin: 0;
    // position: absolute;

    .list-toggle {
        height: 10px;
        text-align: center;
        margin-bottom: 10px;
        -webkit-app-region: no-drag;

        cursor: pointer;
        a {
            color: transparent;
            text-decoration: none;
        }

        &:hover {
            a {
                color: #000;
            }
        }
    }

    .list-title {
        -webkit-app-region: drag;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        margin: 0 0 5px 0;

        i {
            -webkit-app-region: no-drag;
            font-size: 20px;
            font-weight: 700;
            cursor: pointer;
        }
    }

    .list-footer {
        padding: 10px 0;
        text-align: center;
        cursor: pointer;
    }
}
</style>