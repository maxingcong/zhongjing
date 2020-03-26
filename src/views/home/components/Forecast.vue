<template>
    <div>
        <div class="page-head">
            <div class="head-left"><h5>热门预测</h5><span>Popular<br>predictions</span></div>
            <div class="head-right"><a @click="$router.push({name:'guessing_competition_list'})">更多<img
                    src="@/assets/images/index/more.png"></a></div>
        </div>
        <div class="page-body">
            <div class="hot-forecast-list" v-for="item in list"
                 :key="'guessing_competition_list' + item.id + item.matchInfoId">
                <div class="match-name">
                    <div class="name-title"><img :src="item.picture">{{item.matchName}}</div>
                    <div class="match-time">{{item.matchTime | filterTime}}</div>
                </div>
                <div class="match-team">
                    <div class="match-team-innerbox">
                        <div class="team-name"><img :src="item.aicon"><span>{{item.aname}}</span></div>
                        <div class="fraction">1.16</div>
                    </div>
                </div>
                <div class="match-score">
                    <div class="vs">
                        <div class="vs-number left">{{item.ascore}}</div>
                        <span>vs</span>
                        <div class="vs-number right">{{item.bscore}}</div>
                    </div>
                    <div class="vs-proportion">
                        <div class="proportion-left" style="width:50%;"></div>
                        <div class="proportion-right" style="width:50%;"></div>
                    </div>
                </div>
                <div class="match-team right-team">
                    <div class="match-team-innerbox">
                        <div class="team-name"><img :src="item.bicon"><span>{{item.bname}}</span></div>
                        <div class="fraction">1.16</div>
                    </div>
                </div>
                <div class="match-operation">
                    <div class="operation-text">
                        <a @click="$router.push({name: 'guessing_competition_details',query:{id:item.id,md: item.matchInfoId}})">参与竞猜</a>
                        <span>竞猜热度15589</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {queryGuessingCompetition} from '@/api/home'

    export default {
        name: "Forecast.vue",
        data() {
            return {
                list: []
            }
        },
        mounted() {
            this.query()
        },
        methods: {
            query() {
                queryGuessingCompetition({}).then(res => {
                    if (res.succeed) {
                        this.list = res.data && res.data.rows || []
                    } else {
                        console.log(res.data.msg)
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