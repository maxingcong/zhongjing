<template>
    <div>
        <div class="circle-content-wrap-left-handle">
            <span class="circle-content-wrap-left-handle-txt">所有动态</span>
            <span class="circle-content-wrap-left-handle-follow circle-content-wrap-left-handle-recommend">推荐</span>
            <span class="circle-content-wrap-left-handle-follow">我的关注</span>
        </div>
        <public-dynamic> </public-dynamic>
    </div>
</template>

<script>
    import PublicDynamic from './PublicDynamic.vue'
    export default {
        name: 'defauleCircle',//动态
        components: {
            PublicDynamic
        }
    }
</script>

<style scoped>

</style>