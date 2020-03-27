<template>
    <div class="row-page">
        <div class="page allGame-box">
            <div class="page-body">
                <div class="all-games-box">
                    <div class="box-head">
                        <img src="@/assets/images/index/wgame.png">
                        <p>全部游戏</p>
                    </div>
                    <div class="box-body">
                        <ul>
                            <li v-for="item in list" :key="item.id"><a @click="id = item.id,query()"><img
                                    style="width: 30px;height: 30px"
                                    :src="item.gameIcon">{{item.gameName}}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="page allMatch-box">
            <div class="page-head-sec">
                <div class="head-left"><p>首页>全部赛事</p></div>
            </div>
            <div class="page-body">
                <div class="hotmatch-list">
                    <ul>
                        <li v-for="item in allList" :key="item.id">
                            <a @click="$router.push({name: 'match_details',query:{id:item.id}})">
                                <div class="status-label"><img src="@/assets/images/index/inProgress.png"></div>
                                <div class="hotmatch-img"><img style="width: 260px;height: 150px" :src="item.picture">
                                </div>
                                <div class="match-name"><img :src="item.gameIcon">{{item.matchName}}</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {queryMathList} from '@/api/match'
  import {queryHomeGame} from '@/api/home'

  export default {
    name: "Forecast.vue",
    data() {
      return {
        list: [],
        allList: [],
        id: 1,
        pageNum: 0
      }
    },
    mounted() {
      this.query()
      this.queryAll()
    },
    methods: {
      query() {
        queryMathList({gameId: this.id, pageSize: 10, pageNum: this.pageNum}).then(res => {
          if (res.succeed) {
            this.allList = res.data && res.data.rows || []
          } else {
            console.log(res)
            // this.$message.warning('网路开小差')
          }
          this.loading = false
        }).catch(err => {
          this.loading = false
          console.log(err)
        })
      },
      queryAll() {
        queryHomeGame({pageSize: 10, pageNum: 0}).then(res => {
          if (res.succeed) {
            this.list = res.data && res.data.rows || []
          } else {
            console.log(res)
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