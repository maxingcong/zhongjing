<template>
    <div class="main-content">
        <div class="page hot-forecast-box">
            <div class="page-head-sec">
                <div class="head-left"><h5>热门预测</h5></div>
                <div class="head-right"><a @click="$router.push({name:'match'})">+更多赛事</a></div>
            </div>
            <div class="page-body">
                <div class="duel-details">
                    <div class="duel-details-list" v-for="item in hostObj" :key="item.matchInfoId">
                        <div class="duel-details-list-head">
                            <div class="match-name"><img class="img-24" :src="item.picture">{{item.matchName}}
                            </div>
                            <div class="match-time">{{item.matchTime | filterTime}}</div>
                        </div>
                        <div class="duel-details-list-body">
                            <div class="duel-match">
                                <div class="duel-match-logo"><img CLASS="img-72" :src="item.aIcon"></div>
                                <div class="duel-match-name">{{item.aName}}</div>
                            </div>
                            <div class="duel-operation">
                                <img src="@/assets/images/index/pic_vs.png">
                                <a @click="$router.push({name: 'guessing_competition_details',query:{id:item.matchInfoId}})">参与竞猜</a>
                                <span>竞猜热度{{item.hotValue || ''}}</span>
                            </div>
                            <div class="duel-match">
                                <div class="duel-match-logo"><img class="img-72" :src="item.bIcon"></div>
                                <div class="duel-match-name">{{item.bName}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page hot-forecast-box">
            <div class="all-games-box">
                <div class="box-head">
                    <img src="@/assets/images/index/wgame.png">
                    <p>全部游戏</p>
                </div>
                <div class="box-body">
                    <ul>
                        <li @click="gameType(item.id)" v-for="item in list" :key="item.id">
                            <a><img style="width: 30px;height: 30px" :src="item.gameIcon"/>{{item.gameName}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="page-head-sec">
                <div class="head-left"><p>首页>全部竞猜</p></div>
            </div>
            <div class="page-body">
                <div class="hot-forecast-list" v-for="item in guessList" :key="item.matchInfoId">
                    <div class="match-name">
                        <div class="name-title"><img class="img-24" :src="item.picture">{{item.matchName}}</div>
                        <div class="match-time">{{item.matchTime | filterTime}}</div>
                    </div>
                    <div class="match-team">
                        <div class="match-team-box">
                            <div class="match-team-name">{{item.aName}}</div>
                            <div class="match-team-logo"><img style="width: 80px;height: 80px;border-radius: 50%"
                                                              :src="item.aIcon"></div>
                        </div>
                    </div>
                    <div class="match-score">
                        <div class="vs">
                            <span>vs</span>
                        </div>
                        <p>{{item.number}}</p>
                    </div>
                    <div class="match-team right-team">
                        <div class="match-team-box">
                            <div class="match-team-logo"><img style="width: 80px;height: 80px;border-radius: 50%"
                                                              :src="item.bIcon"></div>
                            <div class="match-team-name">{{item.bName}}</div>
                        </div>
                    </div>
                    <div class="match-operation">
                        <div class="operation-text">
                            <label class="bgcolorlb lb1"
                                   @click="$router.push({name: 'guessing_competition_details',query:{id:item.matchInfoId}})">预测中</label>
                            <span>15589<img src="@/assets/images/index/hot.png"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-turning-box">
                <el-pagination
                        background
                        @current-change="currentChange"
                        layout="prev, pager, next"
                        :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
  import {queryHomeGame, queryGuessingCompetitionInfo, queryGuessingCompetition} from '@/api/home'

  export default {
    name: "guessing-competition-list",
    data() {
      return {
        gameId: '',
        list: [],
        guessList: [],
        hostObj: {},
        total: 0,
        pageNum: 1,
        pageSize: 10
      }
    },
    components: {},
    mounted() {
      this.query()
      this.queryHomeGame()
    },
    beforeRouteUpdate(to, from, next) {
      console.log(1, to, from, next);
      debugger
    },
    methods: {
      currentChange(v) {
        this.pageNum = v
        this.query()
      },
      gameType(id) {
        this.gameId = id || ''
        this.query()
      },
      queryHomeGame() {
        queryHomeGame({date: new Date()}).then(res => {
          // let data = res.body
          if (res.succeed) {
            console.log(res)
            this.list = res.data && res.data.rows || []
          } else {
            // this.list = []
            this.$message.warning(res.data.msg)
          }
        }).catch(err => {
          console.log(err)
        })
      },
      query() {
        queryGuessingCompetitionInfo({
          gameId: this.gameId,
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }).then(res => {
          if (res.succeed) {
            this.guessList = res.data && res.data.rows || []
            this.total = res.data && res.data.total || 10
          } else {
            console.log(res.data.msg)
            this.$message.warning(res.data.msg)
            // this.$message.warning('网路开小差')
          }
          this.loading = false
        }).catch(err => {
          this.loading = false
          console.log(err)
        })
        queryGuessingCompetition({pageNum: this.pageNum, pageSize: this.pageSize}).then(res => {
          if (res.succeed) {
            let guessList = res.data && res.data.rows || []
            this.hostObj = guessList.slice(0, 3) || {}
          } else {
            console.log(res.data.msg)
            this.$message.warning(res.data.msg)
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