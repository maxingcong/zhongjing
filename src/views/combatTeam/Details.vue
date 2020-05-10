<template>
    <div>
        <div class="main-content">
            <div class="team-antLines">
                <i class="mdi-set mdi-home-outline"></i>
                <ul>
                    <li><a @click="$router.push({name:'home'})">首页</a></li>
                    <li class="line">/</li>
                    <li><a @click="$router.push({name:'combatTeam'})">战队列表</a></li>
                    <li class="line">/</li>
                    <li>{{data.combatTeamName}}</li>
                </ul>
            </div>
        </div>
        <div class="big-screen-content">
            <div class="main-content">
                <div class="page team-introduce-box">
                    <div class="box-left"><img style="width: 396px;height: 396px" :src="data[0].combatTeamIcon || ''">
                    </div>
                    <div class="box-right">
                        <div class="title"><h3></h3><span>{{data[0].combatTeamName}}</span><a @click="queryFollowTeam">关注</a>
                        </div>
                        <div class="label">
                            <span>游戏：{{data[0].gameName}}</span><span>热度：{{data[0].calorificValue}}</span>
                        </div>
                        <p v-html="data[0].combatTeamIntroduce"></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-content">
            <div class="page team-member-box">
                <div class="box-head"><h3>队员介绍</h3></div>
                <div class="box-body">
                    <ul class="item-list" style="display: flex;flex-wrap: wrap;">
                        <li v-for="item in data[0].players" :key="item.id">
                            <a @click="$router.push({name: 'team_member_details',query:{id:item.id}})">
                                <div class="team-member-img"><img style="height:92px; width:92px;   border-radius: 50%;" :src="item.playerPicture"></div>
                                <div class="team-member-name">
                                    <div>{{item.playerName}}</div>
                                    <div style="width: 100%;text-align: center"><label>{{item.introduce}}</label></div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  // import HotgameList from "../../components/HotgameList";
  import {queryTeamDetails} from '@/api/combatTeam'
  import {postTeam, postCancelTeam} from '@/api/combatTeam'

  export default {
    name: "team_details",
    components: {
      // HotgameList
    },
    created() {
      if (!this.id) {
        this.$router.go(-1)
        return
      }
      this.query()
    },
    computed: {
      id() {
        return this.$route.query.id
      }
    },
    data() {
      return {
        data: []
      }
    },
    methods: {
      queryFollowTeam() {
        if (true) {
          postTeam({combatTeamId: this.id}).then(res => {
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
          this.queryCancelTeam()
        }
      },
      queryCancelTeam() {
        postCancelTeam({combatTeamId: this.id}).then(res => {
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
        queryTeamDetails({id: this.id}).then(res => {
          debugger
          if (res.succeed) {
            this.data = res.data && res.data.data || {}
          } else {
            console.log(res);
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
    .big-screen-content {
        position: relative;
        width: 100vw;
        left: calc((1200px - 100vw) / 2);
    }

</style>