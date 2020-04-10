<template>
    <div ref="index" class="index">
        <el-container class="index-container">
            <!-- 头部区域 -->
            <el-header style="height:40px; line-height:40px;" class="index-header">
                Todos
                <router-link to="/mini">
                    <i class="el-icon-sort toggle" title="切换到最小化"></i>
                </router-link>
            </el-header>

            <!-- 列表导航栏区域 -->
            <el-container class="index-center">
                <!-- 左侧部分 -->
                <el-aside width="200px" class="center-listNavigation">
                    <ul>
                        <li
                            v-for="(item,index) in list"
                            :key="item.link"
                            :class="item.active"
                            @click="()=>{listNavigation(index)}"
                        >
                            <router-link :to="item.link">
                                <span>
                                    <i :class="item.icon"></i>
                                    <span class="icon-name">{{item.name}}</span>
                                </span>
                            </router-link>
                        </li>
                    </ul>
                </el-aside>

                <!-- 右侧主要内容部分 -->
                <el-container class="center-content">
                    <router-view data="ddd"></router-view>
                </el-container>
            </el-container>

            <!-- 编辑框 -->
            <editTask />
        </el-container>
    </div>
</template>

<script>
import { _readFile, _writeFile } from "@/base.js";

export default {
    data() {
        return {
            list: [
                {
                    active: "active",
                    icon: "el-icon-document-copy",
                    link: "/index/allTask",
                    name: "任务块"
                },
                {
                    active: "",
                    icon: "el-icon-s-operation",
                    link: "/index/detailTask",
                    name: "详细任务"
                }
            ]
        };
    },
    methods: {
        listNavigation(index) {
            this.list.forEach(Element => (Element.active = ""));
            this.list[index].active = "active";
        }
    },
    created() {
        _readFile().then(data => {
            this.$store.commit("editListData", data);
        });
    },
    mounted() {
        this.$store.commit("editWindowSize", {
            width: 900,
            height: 700
        });
    }
};
</script>

<style lang="scss" scoped>
// 定义主体色
$themeColor: #61aefc;
$themePadding: 10px;

* {
    margin: 0;
    padding: 0;
}

.index {
    background: #fff;
    width: 100%;
    height: 100%;
}

.index-container {
    height: 100%;
    border-radius: 15px;

    .index-header {
        background: $themeColor;
        padding: 0 $themePadding;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        -webkit-app-region: drag;

        .toggle {
            -webkit-app-region: no-drag;
        }
    }

    .index-center {
        .center-listNavigation {
            ul {
                li {
                    height: 50px;
                    line-height: 50px;
                    font-size: 20px;
                    padding: 0 0 0 $themePadding;
                    cursor: pointer;
                }
                li.active {
                    background: $themeColor;
                }
                a {
                    float: left;
                    width: 100%;
                    height: 100%;
                    text-decoration: none;
                    color: #000;
                }
            }
        }

        .center-content {
            padding: 10px;
            padding: $themePadding;
            overflow-y: scroll;
        }
    }
}
</style>