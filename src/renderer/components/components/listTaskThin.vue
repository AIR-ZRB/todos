<template>
    <div class="list-task">
        <div class="task-color" :style="{background: _props.color}"></div>
        <div class="task-text">
            <p class="task-title">{{_props.title}}</p>
            <p>{{_props.time}}</p>
        </div>

        <p class="task-icon">
            <i class="el-icon-more"></i>
        </p>
    </div>
</template>

<script>
export default {
    props: ["title", "color", "time", "complete"]
};
</script>

<style lang="scss" scoped>
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