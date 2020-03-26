<template>
    <div>
        <div class="circle-content-wrap-left-handle">
            <span class="circle-content-wrap-left-handle-txt">我的动态</span>
        </div>
        <public-dynamic :isCirle="'4'"></public-dynamic>
    </div>
</template>

<script>
    import PublicDynamic from './PublicDynamic.vue'

    export default {
        name: 'dynamic',//动态
        components: {
            PublicDynamic
        }
    }
</script>

<style scoped>

</style>