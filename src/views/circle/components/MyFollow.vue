<template>
    <div>
        <div class="follow-content-wrap-left-input-title">我的关注</div>
        <div class="follow-content-wrap-left-input-list" v-for="item in list" :key="item.id">
            <div class="follow-content-wrap-left-input-list-item">
                <img class="follow-content-wrap-left-input-list-item-img" :src="item.avatar || item.pic" alt="">
                <span class="follow-content-wrap-left-input-list-item-gamename">{{item.nickname || item.circleName}}</span>
                <span class="follow-content-wrap-left-input-list-item-desc" v-html="item.content"></span>
                <span class="follow-content-wrap-left-input-list-item-time">{{item.before}}</span>
            </div>
        </div>
        <div class="circle-content-wrap-left-more" @click="pageSize+=10">加载更多</div>
    </div>
</template>

<script>
    import {getCircleFollow} from '@/api/circle'

    export default {
        name: 'follow', //关注
        data() {
            return {
                list: [],
                  pageNum: 0,
                pageSize: 10
            }
        },
        mounted() {
            this.query()
        },
        methods: {
            query() {
                getCircleFollow({pageNum: this.pageNum, pageSize:this.pageSize}).then(res => {
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