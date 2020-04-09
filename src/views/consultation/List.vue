<template>
    <div>
        <div class="page-body">
            <div class="information-category-content">
                <div class="information-category-list" v-for="item in list" :key="item.id">
                    <div class="information-img"><img style="width: 260px;height: 164px" :src="item.picture"></div>
                    <div class="information-text">
                        <h3>{{item.title}}</h3>
                        <p>{{item.briefIntroduction}}</p>
                        <div class="tag">
                            <span>日期：{{item.releaseTime}}</span>
                            <div class="goto">
                                <a @click="$router.push({name:'consultation_details',query:{id: item.id,rd:rout}})">
                                    <img class="normal" src="@/assets/images/index/goto.png">
                                    <img class="hover" src="@/assets/images/index/goto2.png">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="information-category-list-more"><a @click="pageNum++,query()">加载更多</a></div>
            </div>
        </div>
    </div>
</template>

<script>
  import HotgameList from "../../components/HotgameList";
  import HotMatch from "./components/HotMatch";
  import HotForecast from "./components/HotForecast";
  import {queryInfoClassList} from '@/api/consultation'

  export default {
    name: "consultation",
    components: {
      HotgameList,
      HotMatch,
      HotForecast
    },
    computed: {
      rout() {
        // this.id = this.$route.params.id
        // this.query()
        // console.log(this.$route.query.id)
        return this.$route.query.id
      }
    },
    watch: {
      rout: function (e) {
        if (!e) {
          this.id = ''
        } else {
          this.id = e
        }
        this.pageNum = 0
        this.query()
      }
    },
    data() {
      return {
        isConsultationType: '',
        list: [],
        id: '',
        pageNum: 0,
        pageSize: 10
      }
    },
    mounted() {
      this.query()
    },
    methods: {
      handQuery(e) {
        if (this.rout) {
          console.log(e)
        }
      },
      query() {
        queryInfoClassList({classId: this.rout, pageNum: this.pageNum, pageSize: this.pageSize}).then(res => {
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
