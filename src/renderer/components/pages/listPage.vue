<template>
    <div class="list-container">
        <div class="list-toggle">
            <router-link to="index">点击我切换形态</router-link>
        </div>
        <div class="list-title">
            <h2>{{currentTitle}}</h2>
            <div>
                <i class="el-icon-arrow-left"></i>
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
        <listTask
            v-for="item in currentData"
            :key="item.title"
            :title="item.title"
            :color="item.color"
            :complete="item.complete"
        />
        <footer class="list-footer" @click="dialog">添加卡</footer>
    </div>
</template>

<script>
import { _readFile, _writeFile } from "@/base.js";
export default {
    data() {
        return {
            currentTitle: "", // 当前数据的标题
            currentData: [], // 当前数据的数据
            currentIndex: 0 // 当前数据的索引
        };
    },
    methods: {
        dialog() {}
    },
    created() {
        _readFile().then(data => {
           
            this.currentTitle = data[this.currentIndex].listTitle;
            this.currentData = data[this.currentIndex].data;
           
        });
    }
};
</script>

<style lang="scss" scoped>
.list-container {
    width: 300px;
    opacity: 0.7;
    // background: rgba(33, 33, 33, 0.5);
    background: #e5eff5;
    border-radius: 10px;
    padding: 0 10px;
    // box-sizing: border-box;
    margin: 0;

    .list-toggle {
        height: 10px;
        text-align: center;
        margin-bottom: 10px;

        cursor: pointer;
        a {
            color: transparent;
            text-decoration: none;
        }
    }

    .list-toggle:hover {
        a {
            color: #000;
        }
    }

    .list-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        margin: 0 0 5px 0;

        i {
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