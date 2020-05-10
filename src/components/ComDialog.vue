<template>
    <el-dialog
            title="提示"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :visible="dialogVisible"
            @close="$emit('close')"
            width="80%">
        <slot></slot>
           <el-button type="primary" style="    width: 300px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    bottom: 140px;"  @click="$emit('close')">确 定</el-button>

        <!-- <span slot="footer" class="dialog-footer">
        </span> -->
    </el-dialog>
</template>

<script>

    export default {
        name: "com_dialog",
        props: {
            dialogVisible: {
                default: false,
                type: Boolean
            }
        },
        data() {
            return {}
        },
        mounted() {
        }
    }
</script>

<style scoped lang="less">
    .swiper-container {
        height: 450px;
        overflow: hidden;

        .swiper-wrapper {
            display: flex;
            flex-wrap: nowrap;
        }
    }
</style>