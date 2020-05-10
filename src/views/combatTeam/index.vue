<template>
    <div class="main-content">
        <div class="hotgame-overview-box">
            <div class="box-head"><h5>热门游戏<span>Hot Game</span></h5></div>
            <div class="hotgame-list">
                <HotgameList/>
            </div>
        </div>
        <div>
            <div class="page team-box" v-for="(item,index) in list" :key="index">
                <div class="box-head"><h3>
                    {{item.gameName}}</h3></div>
                <div class="box-body">
                    <ul class="item-list">
                        <li v-for="(t,v) in item.combatTeams" :key="v">
                            <a @click="$router.push({name:'team_details',query:{id:t.id}})">
                                <div class="team-logo"><img style="width: 154px;height: 154px;    border-radius: 50%;" :src="t.combatTeamIcon"></div>
                                <div class="team-name">{{t.combatTeamName}}</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import HotgameList from "../../components/HotgameList";
  import {queryTeamList} from '@/api/combatTeam'

  export default {
    components: {
      HotgameList
    },
    data() {
      return {
        list: []
      }
    },
    created() {
      this.query()
    },
    methods: {
      query() {
        queryTeamList({}).then(res => {
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