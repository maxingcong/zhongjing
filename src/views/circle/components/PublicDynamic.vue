<template>
    <div>
        <div class="circle-content-wrap-left-list">
            <div class="circle-content-wrap-left-list-item" v-for="item in list" :key="item.id">
                <div class="circle-content-wrap-left-list-item-info">
                    <img class="circle-content-wrap-left-list-item-info-avatar" :src="item.avatar || item.pic"
                         alt="">
                    <div class="circle-content-wrap-left-list-item-info-content">
                        <span class="circle-content-wrap-left-list-item-info-content-name">{{item.nickname || item.circleName}}</span>
                        <span class="circle-content-wrap-left-list-item-info-content-time">{{item.before}}</span>
                    </div>
                    <button class="circle-content-wrap-left-list-item-info-btn" @click="followCircle(item)"
                            v-if="isCirle !== 4 && item.phone !== auth.info.phone">关注
                    </button>
                </div>
                <span class="circle-content-wrap-left-list-item-title" v-html="item.content"></span>
                <div class="circle-content-wrap-left-list-item-content" v-if="isCirle != 4 && item.vidoo">
                    <d-player @play="play" ref="play" class="circle-content-wrap-left-list-item-content-video"
                              :options="{video: {url: item.vidoo}}"/>
                </div>
                <div class="circle-content-wrap-left-list-item-handle">
                    <div class="circle-content-wrap-left-list-item-handle-item" @click="share">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/send.png" alt="">
                    </div>
                    <div class="circle-content-wrap-left-list-item-handle-item" @click="thumbsUp(item.postId),item.isZan++">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/dianzan.png" alt="">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">
                            <!--{{item.num}}-->{{item.isZan}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="circle-content-wrap-left-more" @click="pageSize+=10">加载更多</div>
    </div>
</template>

<script>
    import VueDPlayer from 'vue-dplayer'
    import '@/assets/css/vue-dplayer.css'
    // import mp4File from '@/assets/video/demo_video.mp4'
    import {
        getCircleAll,
        getCircleFollow,
        queryMyFollowCircle,
        queryCancelCircle,
        getCircleDynamic,
        queryMyzan
    } from '@/api/circle'
    import {mapState} from 'vuex'

    export default {
        name: 'publicDynamic',//动态
        components: {
            'd-player': VueDPlayer
        },
        data() {
            return {
                options: {
                    video: {
                        url: ''
                    }
                },
                pageNum: 0,
                pageSize: 10,
                list: []
            }
        },
        props: {
            isCirle: {
                type: String,
                default: ''
            }
        },
        watch: {
            isCirle() {
                this.query()
            }
        },
        mounted() {
            this.query()
        },
        computed: {
            ...mapState(['auth'])
        },
        methods: {
            play() {
                console.log('play callback')
            },
            thumbsUp(id) {
                if(!this.auth.info.token){
                    this.$router.push({name:'login'})
                }
                queryMyzan({postId: id}).then(res => {
                    if (res.succeed) {
                     this.$message({
                         offset: '200',
                         type: 'success',
                         message: '点赞成功'
                     })
                    } else {
                        this.$message.warning(res.data.msg)
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            share(){
               window.open('http://v.t.sina.com.cn/share/share.php?=title'+encodeURIComponent(document.title)+'&url='+encodeURIComponent(location.href)
+'&source=bookmark','_blank','width=450,height=400')
            },
            followCircle(e) {
                    if(!this.auth.info.token){
                    this.$router.push({name:'login'})
                }
                if (true) {
                    queryMyFollowCircle({circleId: e.id}).then(res => {
                        if (res.succeed) {
                            this.$message.success('关注成功')
                        } else {
                            console.log(res);
                            this.$message.warning(res.data.data.msg || '网络错误')
                        }
                        this.loading = false
                    }).catch(err => {
                        this.loading = false
                        console.log(err)
                    })
                } else {
                    this.cancelfollowCircle(e)
                }
            },
            cancelfollowCircle(e) {
                queryCancelCircle({circle_id: e.id}).then(res => {
                    if (res.succeed) {
                        this.$message.success('关注成功')
                    } else {
                        console.log(res);
                        this.$message.warning(res.data.data.msg || '网络错误')
                    }
                    this.loading = false
                }).catch(err => {
                    this.loading = false
                    console.log(err)
                })
            },
            query() {
                if (this.isCirle == 2) {
                    getCircleFollow({pageNum: this.pageNum, pageSize:this.pageSize}).then(res => {
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
                } else {
                    getCircleDynamic({}).then(res => {
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
    }
</script>

<style scoped>

</style>
