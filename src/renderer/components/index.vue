<template>
    <div>
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
                <el-aside width="200px" class="center-listNavigation">
                    <ul>
                        <li class="active">
                            <span>
                                <i class="el-icon-s-home"></i>
                                <span class="icon-name">home</span>
                            </span>
                        </li>

                        <li>
                            <span>
                                <i class="el-icon-tickets"></i>
                                <span class="icon-name">home</span>
                            </span>
                        </li>
                    </ul>
                </el-aside>

                <!-- 主要内容部分 -->
                <el-container class="center-content">
                    <div class="addTask"><span>添加任务</span></div>
                </el-container>
            </el-container>

            <!-- 底部 -->
            <el-footer style="height: 40px;line-height: 40px;" class="index-footer">Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// 定义主体色
$themeColor: #61aefc;
$themePadding: 10px;

* {
    margin: 0;
    padding: 0;
}
body {
    padding: 0;
    margin: 0;
}

.index-container {
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 40px 500px 50px;

    .index-header {
        background: $themeColor;
        padding: 0 $themePadding;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .index-center {
        .center-listNavigation {
            border-right: 1px solid #000;
            ul {
                li {
                    height: 50px;
                    line-height: 50px;
                    font-size: 20px;
                    padding: 0 0 0 $themePadding;
                }
                li.active {
                    color: $themeColor;
                }
            }
        }

        .center-content {
            padding: $themePadding;

            .addTask {
                width: 200px;
                height: 120px;
                line-height: 120px;
                text-align: center;
                font-weight: 700;
                color: #fff;
                border-radius: 10px;
                background-image: linear-gradient(to right,#CCFFFF,#99CCFF);

            
            }
        }
    }

    .index-footer {
        background: $themeColor;
        padding: 0 0 0 $themePadding;
    }
}
</style>