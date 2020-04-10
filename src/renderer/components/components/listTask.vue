<template>
    <div class="list-task">
        <div class="task-color" :style="{background: _props.color}"></div>
        <p class="task-title">{{_props.title}}</p>
        <p class="task-icon">
            <i class="el-icon-s-unfold"></i>
            <span class="right">{{_props.time}}</span>
        </p>
    </div>
</template>

<script>
export default {
    props:["title","color","time","complete"]
};
</script>

<style lang="scss" scoped>
.list-task {
    background: #fff;
    width: 100%;
    height: 120px;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
    .task-color {
        width: 15%;
        height: 10px;
        border-radius: 5px;
        background: red;
    }

    .task-title {
        font-size: 20px;
        font-weight: 700;
        margin: 15px 0;
    }
    .task-icon {
        margin: 0;
        font-size: 24px;
        color: #c1c3ca;
    }

    .right {
        float: right;
        font-size: 18px;
        color: #111;
    }
}
</style>