<template>
    <div class="row-page">
        <div class="page hotspot-today-box">
            <div class="page-head">
                <div class="head-left"><h5>今日热点</h5><span>Hot spots</span></div>
                <div class="head-right"><a @click="$router.push({name:'consultation'})">更多<img
                        src="@/assets/images/index/more.png"></a></div>
            </div>
            <div class="page-body">
                <div class="hotspotDetailsBox">
                    <div class="hotspotDetailsBox-left">
                        <div class="focus-box"
                             @click="$router.push({name:'consultation_details',query:{id:data.one.id}})">
                            <div class="focus-img"><img :src="data.one && data.one.picture || ''"></div>
                            <!--{{data.one.picture}}-->
                            <div class="focus-title"><a>{{data.one && data.one.title || ''}}</a></div>
                        </div>
                        <div class="new-match">
                            <div class="title">
                                <h5>最新赛事</h5>
                                <a @click="$router.push({name:'match'})">更多<img
                                        src="@/assets/images/index/ssmore_pic.png"></a>
                            </div>
                            <div class="new-match-list">
                                <ul>
                                    <li v-for="(item,index) in data.newMatch && data.newMatch.rows && data.newMatch.rows.slice(0,4)"
                                        :key="index"
                                        @click="$router.push({name:'match_details',query:{id:item.id}})">
                                        <div class="new-match-img"><img :src="item.picture"/>
                                        </div>
                                        <div class="new-match-name"><a>{{item.matchName}}</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="hotspotDetailsBox-right">
                        <div class="hotspot-list"
                             @click="$router.push({name:'consultation_details',query:{id:item.id}})"
                             v-for="(item,index) in data.informationList && data.informationList.rows && data.informationList.rows.slice(0,5)"
                             :key="index">
                            <div class="hotspot-list-img"><img :src="item.picture"/></div>
                            <div class="hotspot-list-text">
                                <h3>{{item.title}}</h3>
                                <div class="tag">
                                    <label class="hollowlb lb1">{{item.className}}</label>
                                    <div class="data">日期：{{item.releaseTime |filterTime}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page hotteam-box">
            <div class="page-head">
                <div class="head-left"><h5>热门战队</h5><span>hot Teams</span></div>
                <div class="head-right"><a @click="$router.push({name:'combatTeam'})">更多<img
                        src="@/assets/images/index/more.png"></a></div>
            </div>
            <div class="page-body">
                <div class="hotteam-box-list">
                    <ul>
                        <li v-for="(item,index) in list" :key="index"
                            @click="$router.push({name:'team_details',query:{id:item.id}})">
                            <div class="hotteam-img">
                                <img :src="item.combatTeamIcon">
                            </div>
                            <div class="hotteam-name">{{item.combatTeamName}}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {queryTodayHot, queryHomeCombatTeam} from '@/api/home'

    export default {
        name: "Forecast.vue",
        data() {
            return {
                data: {},
                list: []
            }
        },
        mounted() {
            this.query()
        },
        filters: {
            filterTime(item) {
                let arr = item && item.split('T') || [],
                    a = arr[0] || '',
                    b = arr[1].split('.')[0] || ''
                a = a.split('-').slice(1, 3).join('-')
                b = b.split(':').slice(0, 2).join(':')
                console.log(b)
                return a
            }
        },
        methods: {
            query() {
                queryTodayHot({}).then(res => {
                    if (res.succeed) {
                        this.data = res.data && res.data.data || {}
                    } else {
                        console.log(res)
                    }
                    this.loading = false
                }).catch(err => {
                    this.loading = false
                    console.log(err)
                })

                queryHomeCombatTeam({}).then(res => {
                    if (res.succeed) {
                        this.list = res.data && res.data.rows || []
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