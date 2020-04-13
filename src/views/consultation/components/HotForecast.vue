<template>
    <div>
        <div class="page-head">
            <div class="head-left"><h5>热门预测</h5><span>Popular<br>predictions</span></div>
            <div class="head-right"><a @click="$router.push({name:'guessing_competition_list'})">全部<img
                    src="@/assets/images/index/more.png"></a></div>
        </div>
        <div class="page-body">
            <div class="duel-details">
                <div class="duel-details-list" v-for="item in list.slice(0,1)" :key="item.matchInfoId">
                    <div class="duel-details-list-head">
                        <div class="match-name"><img style="width: 24px;height: 24px" :src="item.picture">{{item.matchName}}</div>
                        <div class="match-time">{{item.matchTime | filterTime}}</div>
                    </div>
                    <div class="duel-details-list-body">
                        <div class="duel-match">
                            <div class="duel-match-logo"><img style="width: 72px;height: 72px" :src="item.aIcon"></div>
                            <div class="duel-match-name">{{item.aName}}</div>
                        </div>
                        <div class="duel-operation">
                            <img src="@/assets/images/index/pic_vs.png">
<!--                            <a v-if="item.status !== 1 || item.status !== 0"-->
<!--                               @click="$message.warning('当前赛事'+ emumObj.foreast[item.status] + '，暂时无法预测')">{{emumObj.foreast[item.status]}}</a>-->
                            <a  @click="$router.push({name:'guessing_competition_details',query:{id: item.matchInfoId}})">
                                {{item.status == 1 ? emumObj.foreast[item.status] : '参与竞猜'}}
                            </a>
                            <span>竞猜热度{{item.hotValue}}</span>
                        </div>
                        <div class="duel-match">
                            <div class="duel-match-logo"><img  style="width: 72px;height: 72px" :src="item.bIcon"></div>
                            <div class="duel-match-name">{{item.bName}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="duel-item">
                <ul>
                    <li v-for="item in list.slice(1,5)" :key="item.matchInfoId"
                        @click="$router.push({name:'guessing_competition_details',query:{id: item.matchInfoId}})">
                        <div class="match-name">
                            <img class="img-24" :src="item.picture">
                            <span class="name1">{{item.aName}}</span>
                            <img class="vs" src="@/assets/images/index/pic_vs.png">
                            <span class="name2">{{item.bName}}</span>
                        </div>
                        <div class="match-time">{{item.matchTime | filterTime}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {queryGuessingCompetition} from '@/api/home'

    export default {
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
    .duel-item li {
        cursor: pointer;
    }

</style>
