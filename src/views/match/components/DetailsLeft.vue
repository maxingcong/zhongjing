<template>
    <div class="page hotspot-today-box information-box match-drtails-box">
        <div class="match-video-box">
            <div class="box-head">
                <div class="head-left">
                    <h3>赛事视频</h3>
                    <p>{{data && data.data && data.data.matchVideo && data.data.matchVideo.gameName}} <a
                            @click="handFollow">+关注</a></p>
                </div>
                <div class="head-right">开赛时间：{{data && data.data && data.data.matchVideo &&
                    data.data.matchVideo.matchTime
                    | filterTimeDate}}
                </div>
            </div>
            <div class="box-body">
                <div class="video-content">
                    <!-- <d-player v-if="isPlayError" @play="play" ref="player"
                              class="circle-content-wrap-left-list-item-content-video"
                              @error="onPlayerWaiting"
                              :options="options"/> -->
                    <iframe v-if="videoAddress" :src="videoAddress" width="100%" height="460px"></iframe>
                    <div v-else style="width:100%;height:460px" v-html="data.data && data.data.matchVideo && data.data.matchVideo.matchIntroduce"></div>
                </div>
            </div>
        </div>
        <div class="match-schedule-box">
            <div class="box-head"><h3>比赛赛程</h3></div>
            <div class="box-body">
                <div class="schedule-list"
                     v-for="(item,index) in data && data.data&& data.data.guessingCompetition.rows || []"
                     :key="index">
                    <div class="schedule-time">{{item.matchTime || '' | filterTime}}</div>
                    <div class="schedule-match-name">
                        <img src="@/assets/images/index/steam011.png">
                        <div class="name-text">{{item.aName}}</div>
                    </div>
                    <div class="schedule-score">
                        <div class="vs">
                            <div class="vs-number left">{{item.aScore}}</div>
                            <span>：</span>
                            <div class="vs-number right">{{item.bScore}}</div>
                        </div>
                    </div>
                    <div class="schedule-match-name"><img src="@/assets/images/index/steam022.png">
                        <div class="name-text">{{item.bName}}</div>
                    </div>
                    <div class="schedule-operation">
                        <a><label class="bdcolorlb lb1"
                                  @click="$router.push({name: 'match_details',query:{id:item.matchInfoId}})">视频</label></a>
<!--                        <label class="bdcolorlb lb2"-->
<!--                               v-if="item.status !== 1  || item.status !== 0"-->
<!--                               @click="$message.warning('当前赛事'+ emumObj.foreast[item.status] + '，暂时无法预测')">{{emumObj.foreast[item.status]}}</label>-->
                        <label class="bdcolorlb lb2"
                               @click="$router.push({name: 'guessing_competition_details',query:{id: item.matchInfoId}})">
                            {{item.status == 1 ? emumObj.foreast[item.status] : '参与竞猜'}}
                        </label>
                        <!--                        <label class="bdcolorlb lb2" @click="$router.push({name: 'guessing_competition_details',query:{id: 1 //item.id,md: item.matchInfoId}})">预测中</label>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {postMath} from '@/api/match'
    // import mp4File from '@/assets/video/demo_video.mp4'
    import VueDPlayer from 'vue-dplayer'
    import '@/assets/css/vue-dplayer.css'
    import {mapState} from 'vuex'


    export default {
        components: {
            'd-player': VueDPlayer
        },
        props: {
            data: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        data() {
            return {
                options: {
                    video: {
                        url: ''
                    }
                },
                isPlayError: true
            }
        },
        computed: {
            ...mapState(['auth']),
            id() {
                return this.$route.query.id || ''
            }
        },
        watch: {
            data: function (v) {
                try {
                    this._setVideoUrl(v.data.matchVideo.videoAddress)
                } catch (e) {
                    console.log(e)
                }
            },
            id: function () {
                this.query()
            }
        },
        mounted() {
            this.player = this.$refs.player.dp
            this.isPlayError = true
        },
        methods: {
            onPlayerWaiting() {
                this.isPlayError = false
            },
            play() {
                console.log('play callback')
            },
            // 设置视频播放路径
            _setVideoUrl(url) {
                this.videoAddress = url
                // this.player.switchVideo({
                //     url: url
                // })
            },
            handFollow() {
                if (this.auth.info.token) {
                    postMath({matchId: this.data.data && this.data.data.matchVideo && this.data.data.matchVideo.id}).then(res => {
                        if (res.succeed) {
                            this.$message.success('关注成功')
                        } else {
                            this.$message.success('关注失败', res.data.msg)
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                } else {
                    this.$router.push({name: 'login'})
                }
            },
            query(id) {
                console.log(id)
                // queryMathDetails({id: id}).then(res => {
                //     if (res.succeed) {
                //         this.dataItem = res.data
                //         // this.options.video.url = this.dataItem.data.matchVideo.videoAddress
                //     } else {
                //         console.log(res);
                //         // this.$message.warning('网路开小差')
                //     }
                //     this.loading = false
                // }).catch(err => {
                //     this.loading = false
                //     console.log(err)
                // })
            }
        }
    }
</script>

<style scoped>
    .circle-content-wrap-left-list-item-content-video {
        width: 100%;
        height: 500px;
    }
/deep/ iframe{
    width: 100%;
    height: 460px;
}
</style>
