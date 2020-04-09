<template>
    <div class="editTask" v-show="this.$store.state.editTaskIsShow" @click="clickShow">
        <div class="createTask">
            <input type="text" placeholder="添加看板标题" v-model="textValue" />
            <span class="close" @click="close">
                <i class="el-icon-close"></i>
            </span>

            <div class="selectColor">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <div class="confirm" @click="()=>{ close('submit') }">确定</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            textValue: ""
        };
    },
    methods: {
        close(submit) {
            if (submit === "submit") {
                console.warn("提交");
                //  还没写入文件-----------
                let editData = [];
                this.$store.state.listData.forEach(element => {
                    editData.push(element);
                });

                editData.push({
                    listTitle: this.textValue,
                    color: "black"
                });

                this.$store.commit("editListData", editData);
                this.textValue = "";
            }

            this.$store.commit("editTaskShow", false);
        },
        clickShow(event) {
            if (event.target.className === "editTask") {
                this.$store.commit("editTaskShow", false);
            }
        }
    },
    mounted() {}
};
</script>

<style lang="scss" scoped>
.editTask {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(000, 000, 000, 0.5);
    display: flex;
    justify-content: center;
    padding: 40px;

    .createTask {
        box-sizing: border-box;
        width: 300px;
        height: 100px;
        background: skyblue;
        padding: 20px;
        border-radius: 5px;
        position: relative;

        input {
            color: #fff;
            background: transparent;
            border: 0;
            outline: none;
            font-size: 18px;
        }

        .selectColor {
            position: absolute;
            top: 0;
            right: -110px;
            width: 100px;
            height: 100px;

            ul {
                margin: 0;
                padding: 0;
                width: 100%;
                display: flex;
                justify-content: space-between;
                height: 35px;

                li {
                    list-style: none;
                    width: 30px;
                    height: 30px;
                    background: #000;
                    border-radius: 5px;
                }
            }
        }

        .close {
            width: 30px;
            height: 30px;
            text-align: center;

            position: absolute;
            right: 20px;
            top: 20px;
            color: #fff;
            cursor: pointer;
        }

        .confirm {
            // width: 50px;
            // height: 30px;
            border-radius: 5px;
            background: #fff;
            padding: 5px 20px;
            position: absolute;
            left: 0;
            bottom: -35px;
            font-size: 16px;
            color: #bbb;
            cursor: pointer;
        }
    }
}
</style>