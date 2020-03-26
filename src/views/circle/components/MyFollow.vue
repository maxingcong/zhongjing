<template>
    <div>
        <div class="follow-content-wrap-left-input-title">我的关注</div>
        <div class="follow-content-wrap-left-input-list">
            <div class="follow-content-wrap-left-input-list-item">
                <img class="follow-content-wrap-left-input-list-item-img" src="" alt="">
                <span class="follow-content-wrap-left-input-list-item-gamename">LOL战场</span>
                <span class="follow-content-wrap-left-input-list-item-desc">LPL全明星周末11月30日海口冯小刚电影公社LPL全明星周末11月30日海口冯小刚电影公社</span>
                <span class="follow-content-wrap-left-input-list-item-time">12分钟前更新</span>
            </div>
            <div class="follow-content-wrap-left-input-list-item">
                <img class="follow-content-wrap-left-input-list-item-img" src="" alt="">
                <span class="follow-content-wrap-left-input-list-item-gamename">LOL战场</span>
                <span class="follow-content-wrap-left-input-list-item-desc">LPL全明星周末11月30日海口冯小刚电影公社LPL全明星周末11月30日海口冯小刚电影公社</span>
                <span class="follow-content-wrap-left-input-list-item-time">12分钟前更新</span>
            </div>
            <div class="follow-content-wrap-left-input-list-item">
                <img class="follow-content-wrap-left-input-list-item-img" src="" alt="">
                <span class="follow-content-wrap-left-input-list-item-gamename">LOL战场</span>
                <span class="follow-content-wrap-left-input-list-item-desc">LPL全明星周末11月30日海口冯小刚电影公社LPL全明星周末11月30日海口冯小刚电影公社</span>
                <span class="follow-content-wrap-left-input-list-item-time">12分钟前更新</span>
            </div>
        </div>
        <div class="circle-content-wrap-left-more">加载更多</div>

    </div>
</template>

<script>
    import {getCircleFollow} from '@/api/circle'

    export default {
        name: 'follow', //关注
        data() {
            return {
                list: []
            }
        },
        mounted() {
            this.query()
        },
        methods: {
            query() {
                getCircleFollow({}).then(res => {
                    // debugger
                    let data = res.data
                    if (res.succeed) {
                        // console.log(res)
                        this.list = data.rows || []
                    } else {
                        this.list = []
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>