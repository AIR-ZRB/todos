<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "todos"
};
</script>

<style lang="scss" >
/* CSS */
$themeColor: #61aefc;

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
    width: 1px; /*滚动条宽度*/
    height: 1px; /*!*滚动条高度*!*/
}

/*定义滚动条轨道 内阴影+圆角*/
// ::-webkit-scrollbar-track {
//     -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
//     border-radius: 10px; /*!*滚动条的背景区域的圆角*!*/
//     background-color: red; /*!*滚动条的背景颜色*!*/
// }

/*定义滑块 内阴影 + 圆角*/
::-webkit-scrollbar-thumb {
    border-radius: 99px; /*滚动条的圆角*/
    // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    // background-color: skyblue; /*!*滚动条的背景颜色*!*/
}
#app {
    float: left;
    overflow: hidden;
    border-radius: 20px;
    overflow: hidden;
}
</style>
