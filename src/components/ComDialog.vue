<template>
    <el-dialog
            title="提示"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :visible="dialogVisible"
            @close="$emit('close')"
            width="80%">
        <slot></slot>
        <span slot="footer" class="dialog-footer">
           <el-button type="primary" @click="$emit('close')">确 定</el-button>
        </span>
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