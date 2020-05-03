<template>
    <div class="page hot-information-box">
        <div class="page-head">
            <div class="head-left"><h5>热门资讯</h5><span>hot information</span></div>
            <div class="head-right"><a @click="$router.push({name:'consultation'})">更多<img
                    src="@/assets/images/index/more.png"></a></div>
        </div>
        <div class="page-body">
            <div class="hotinformation-classification">
                <div class="hotinformation-classification-list">
                    <div class="list-title"><span class="circle-icon-title title1"></span><h5>资讯报道</h5></div>
                    <ul class="hotinformation-text">
                        <li v-for="(item,index) in conList" :key="index">
                            <span class="circle-icon-text text1"></span>
                            <a @click="$router.push({name: 'consultation_details',query:{id: item.gameId}})">
                                {{item.title}}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="hotinformation-classification-list">
                    <div class="list-title"><span class="circle-icon-title title2"></span><h5>赛事资讯</h5></div>
                    <ul class="hotinformation-text">
                        <li v-for="(item,index) in matchList" :key="index">
                            <span class="circle-icon-text text1"></span>
                            <a @click="$router.push({name: 'consultation_details',query:{id: item.gameId}})">
                                {{item.title}}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="hotinformation-classification-list">
                    <div class="list-title"><span class="circle-icon-title title3"></span><h5>视频资讯</h5></div>
                    <ul class="hotinformation-video">
                        <!--{{// vidioList}}-->
                        <li v-for="(item,index) in vidioList" :key="index">
                            <div class="hotinformation-video-img">
                                <img :src="item.picture"/>
                            </div>
                            <span class="circle-icon-text text3"></span>
                            <a @click="$router.push({name: 'consultation_details',query:{id: gameId}})">
                                {{item.title}}
                            </a>
                        </li>
                    </ul>
                    <ul class="hotinformation-text">
                        <!--{{// vidioListText}}-->
                        <li v-for="(item,index) in vidioListText" :key="index">
                            <span class="circle-icon-text text1"></span>
                            <a @click="$router.push({name: 'consultation_details',query:{id: item.gameId}})">
                                {{item.title}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {queryInfoClassList} from '@/api/consultation'

  export default {
    data() {
      return {
        vidioList: [],
        matchList: [],
        conList: [],
        vidioListText: []
      }
    },
    mounted() {
      this.query()
    },
    methods: {
      query() {
        queryInfoClassList({pageSize: 30, pageNum: 1}).then(res => {
          if (res.succeed) {
            this.data = res.data && res.data.rows || []
            // debugger
            // console.log(res.data.rows);
            this.data.forEach(v => {
              // debugger
              if (v.className == '视频资讯') {
                if (v.picture) {
                  this.vidioList.push(v)
                } else {
                  // debugger
                  this.vidioListText.push(v)
                }
              } else if (v.className == '最新资讯') {
                this.conList.push(v)
              } else {//赛事
                this.matchList.push(v)
              }
            })
          } else {
            console.log(123)
            // this.$message.warning('网路开小差')
          }
          this.loading = false
        }).catch(err => {
          this.loading = false
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>

</style>