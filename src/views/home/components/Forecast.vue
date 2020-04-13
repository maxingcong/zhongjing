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
                    <div class="name-title"><img style="width: 32px;height: 32px;border-radius: 50%"
                                                 :src="item.picture">{{item.matchName}}
                    </div>
                    <div class="match-time">{{item.matchTime | filterTime}}</div>
                </div>
                <div class="match-team">
                    <div class="match-team-innerbox">
                        <div class="team-name">
                            <span style="display: inline-block;width: 200px;text-align: right;padding-right: 10px">{{item.aName}}</span>
                            <img style="width: 56px;height: 56px;border-radius: 50%"
                                 :src="item.aIcon"></div>
                        <!--<div class="fraction">{{// item.aScore}}</div>-->
                    </div>
                </div>
                <div class="match-score">
                    <div class="vs">
                        <div class="vs-number left">{{item.aScore}}</div>
                        <span>vs</span>
                        <div class="vs-number right">{{item.bScore}}</div>
                    </div>
                    <div class="vs-proportion">
                        <div class="proportion-left" style="width:50%;"></div>
                        <div class="proportion-right" style="width:50%;"></div>
                    </div>
                </div>
                <div class="match-team right-team" style="text-align: left">
                    <div class="match-team-innerbox" style="width: 80px;float: left;margin-left: 50px">
                        <div class="team-name" style="width: 200px"><img
                                style="width:56px;height: 56px;border-radius: 50%"
                                :src="item.bIcon"><span style="margin-left: 0">{{item.bName}}</span>
                        </div>
                        <!--<div class="fraction">{{// item.bScore}}</div>-->
                    </div>
                </div>
                <div class="match-operation">
                    <div class="operation-text">
<!--                        <a v-if="item.status !== 1 || item.status !== 0"-->
<!--                           @click="$message.warning('当前赛事'+ emumObj.foreast[item.status] + '，暂时无法预测')"></a>-->
                        <a
                           @click="$router.push({name: 'guessing_competition_details',query:{id: item.matchInfoId}})">{{item.status == 1 ? emumObj.foreast[item.status] : '参与竞猜'}}</a>
                        <span>竞猜热度{{item.hotValue}}</span>
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
                queryGuessingCompetition({pageNum: 0, pageSize: 4}).then(res => {
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
