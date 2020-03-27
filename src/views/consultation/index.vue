<template>
    <div>
        <div class="main-content">
            <div class="hotgame-overview-box">
                <div class="box-head"><h5>热门游戏<span>Hot Game</span></h5></div>
                <div class="hotgame-list">
                    <HotgameList/>
                </div>
            </div>
            <div class="main-content">
                <div class="row-page">
                    <div class="page hotspot-today-box information-box">
                        <div class="information-category">
                            <h3>所有资讯</h3>
                            <ul class="nav">
                                <li @click="getLiType()" class="nav-item"
                                    :class="{active: isConsultationType == ''}">
                                    <a>全部</a>
                                </li>
                                <li v-for="item in list" :key="item.id" @click="getLiType(item.id)"
                                    :class="{active: isConsultationType == item.id}"
                                    class="nav-item"><a>{{item.className}}</a>
                                </li>
                                <!--                                <li @click="getLiType(1)" :class="{active: isConsultationType == 1}"-->
                                <!--                                    class="nav-item"><a>赛事资讯</a>-->
                                <!--                                </li>-->
                                <!--                                <li @click="getLiType(2)" :class="{active: isConsultationType == 2}"-->
                                <!--                                    class="nav-item"><a>视频资讯</a>-->
                                <!--                                </li>-->
                            </ul>
                        </div>
                        <router-view></router-view>
                    </div>
                    <div class="page hotteam-box information-box hot-match-box">
                        <HotForecast/>
                        <div style="height: 20px"></div>
                        <HotMatch/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import HotgameList from "../../components/HotgameList";
  import HotMatch from "./components/HotMatch";
  import HotForecast from "./components/HotForecast";
  import {queryInfoClass} from '@/api/consultation'


  export default {
    name: "consultation",
    components: {
      HotgameList,
      HotMatch,
      HotForecast
    },
    computed: {
      rout() {
        return this.$route.name
      }
    },
    data() {
      return {
        isConsultationType: '',
        list: []
      }
    },
    mounted() {
      this.query()
    },
    methods: {
      handQuery(e) {
        console.log(e)
      },
      query() {
        queryInfoClass({}).then(res => {
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
      },
      getLiType(item) {
        this.$router.push({name: 'consultation_list', query: {id: item}})
        this.isConsultationType = item || ''
        // this.query()
      }
    }
  }
</script>

<style scoped>

</style>