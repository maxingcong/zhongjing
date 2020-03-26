<template>
    <div>
        <div class="circle-content-wrap-left-handle">
            <span class="circle-content-wrap-left-handle-txt" @click="getCirleType()">所有动态</span>
            <span class="circle-content-wrap-left-handle-follow"
                  :class="{'circle-content-wrap-left-handle-recommend' :isCirle == '1'}"
                  @click="getCirleType('1')">推荐</span>
            <span class="circle-content-wrap-left-handle-follow" v-if="auth.info && auth.info.token"
                  :class="{'circle-content-wrap-left-handle-recommend' :isCirle == '2'}"
                  @click="getCirleType('2')">我的关注</span>
        </div>
        <public-dynamic ref="pulic" :isCirle="isCirle"></public-dynamic>
    </div>
</template>

<script>
    import PublicDynamic from './PublicDynamic.vue'
    import {mapState} from 'vuex'

    export default {
        name: 'defauleCircle',//动态
        components: {
            PublicDynamic
        },
        data() {
            return {
                isCirle: '1'
            }
        },
        computed: {
            ...mapState(['auth'])
        },
        methods: {
            getCirleType(item) {
                this.isCirle = item || ''
            }
        }
    }
</script>

<style scoped>

</style>