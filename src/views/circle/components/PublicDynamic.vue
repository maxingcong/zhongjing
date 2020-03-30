<template>
    <div>
        <div class="circle-content-wrap-left-list">
            <div class="circle-content-wrap-left-list-item" v-for="item in list" :key="item.id">
                <div class="circle-content-wrap-left-list-item-info">
                    <img class="circle-content-wrap-left-list-item-info-avatar" :src="item.avatar || item.pic"
                         alt="">
                    <div class="circle-content-wrap-left-list-item-info-content">
                        <span class="circle-content-wrap-left-list-item-info-content-name">{{item.nickname || item.circleName}}</span>
                        <span class="circle-content-wrap-left-list-item-info-content-time">{{item.createTime | filterallYear}}</span>
                    </div>
                    <button class="circle-content-wrap-left-list-item-info-btn" @click="followCircle(item)"
                            v-if="isCirle !== 4">关注
                    </button>
                </div>
                <span class="circle-content-wrap-left-list-item-title" v-html="item.content"></span>
                <div class="circle-content-wrap-left-list-item-content" v-if="isCirle != 4 && item.vidoo">
                    <d-player @play="play" ref="play" class="circle-content-wrap-left-list-item-content-video"
                              :options="{video: {url: item.vidoo}}"/>
                    <!--<img class="circle-content-wrap-left-list-item-content-one-img" src="@/assets/images/circle/demo_img.png" alt="">-->
                </div>
                <div class="circle-content-wrap-left-list-item-handle">
                    <div class="circle-content-wrap-left-list-item-handle-item">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/send.png" alt="">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">36</span>
                    </div>
                    <!--品论-->
                    <div class="circle-content-wrap-left-list-item-handle-item">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/pinglun.png" alt="">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">1020</span>
                    </div>
                    <!--点赞-->
                    <div class="circle-content-wrap-left-list-item-handle-item" @click="thumbsUp">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/dianzan.png" alt="">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">
                            <!--{{item.num}}-->123
                        </span>
                    </div>
                    <!--评论-->
                    <!--<diiv>-->
                    <!--<div ref="editor" class="text"></div>-->
                    <!--<div style="display: flex;justify-content: space-between;margin-top: 20px">-->
                    <!--<div ref="toolbar" class="toolbar"></div>-->
                    <!--<button class="circle-content-wrap-left-input-handle-btn">发表</button>-->
                    <!--</div>-->
                    <!--</diiv>-->
                </div>
            </div>
        </div>
        <div class="circle-content-wrap-left-more">加载更多</div>
    </div>
</template>

<script>
  import VueDPlayer from 'vue-dplayer'
  import '@/assets/css/vue-dplayer.css'
  import mp4File from '@/assets/video/demo_video.mp4'
  import {
    getCircleAll,
    getCircleFollow,
    queryMyFollowCircle,
    queryCancelCircle,
    getCircleDynamic
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
            url: mp4File
          }
        },
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
      thumbsUp() {
        // queryMyFollowCircle({id: e.id}).then(res => {
        //     if (res.succeed) {
        this.$message.success('点赞成功')
        //     } else {
        //         this.$message.warning(res.data.msg)
        //     }
        // }).catch(err => {
        //     console.log(err)
        // })
      },
      followCircle(e) {
        debugger
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
        debugger
        if (this.isCirle == 2) {
          getCircleFollow({}).then(res => {
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