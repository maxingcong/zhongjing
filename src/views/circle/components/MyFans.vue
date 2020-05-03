<template>
    <div>
        <div class="circle-content-wrap-left-handle">
            <span class="circle-content-wrap-left-handle-txt">我的粉丝 <span>（16）</span></span>
        </div>
        <div class="circle-content-wrap-left-list">
            <div class="circle-content-wrap-left-list-item" v-for="item in list" :key="item.id">
                <div class="fans-list-item">
                    <div class="fans-img"><img :src="item.avatar"></div>
                    <div class="fans-name">{{item.nickname}}</div>
                    <div class="fans-text">{{item.title}}</div>
                    <div class="fans-time">{{item.before}}</div>
                </div>
            </div>
        </div>
        <div class="circle-content-wrap-left-more" @click="pageSize+=10">加载更多</div>
    </div>
</template>

<script>
    import {queryMyFans} from '@/api/circle'

    export default {
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
                queryMyFans({pageNum: this.pageNum, pageSize:this.pageSize}).then(res => {
                    // let data = res.body
                    // debugger
                    if (res.succeed) {
                        // console.log(res)
                        this.list = res.data && res.data.rows || []
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