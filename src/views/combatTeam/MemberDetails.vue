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
                    <li>EDG</li>
                </ul>
            </div>
        </div>
        <div class="big-screen-content">
            <div class="main-content">
                <div class="page team-member-introduce-box">
                    <div class="box-left">
                        <div class="team-logo"><img src="@/assets/images/index/logo0101.png"></div>
                        <div class="team-member-img"><img :src="data.player && data.player.playerPicture"></div>
                    </div>
                    <div class="box-right">
                        <div class="title">
                            <h3>{{data.player && data.player.playerName}}</h3><a @click="queryFollowTeam">关注</a>
                            <!-- <p>中文名称暂缺</p> -->
                        </div>
                        <div class="label"><span>InvictusGaming</span><span class="main-attack">{{data.player && data.player.position}}</span>
                        </div>
                        <div class="match-data">
                            <!-- 比赛信息缺失 -->
                            <div class="head">2019职业联赛</div>
                            <div class="body">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>场均击杀</th>
                                        <th>场均补刀</th>
                                        <th>场均参团率</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>4.20</td>
                                        <td>228</td>
                                        <td>62.40%</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-content">
            <div class="page team-member-box">
                <div class="box-head"><h3>常用英雄</h3></div>
                <div class="box-body">
                    <ul class="hero-list">
                        <li v-for="item in hero" :key="item.id">
                            <div class="hero-img">
                                <img :src="item.heroIcon">
                                <div class="hero-img-text">{{item.heroName || '数据缺失'}}</div>
                            </div>
                            <div class="user-data">
                                <ul>
                                    <li><span>使用</span><label>{{item.use}}%</label></li>
                                    <li><span>胜率</span><label>{{item.winRate}}%</label></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="box-head" style="margin-top:40px;"><h3>个人数据</h3></div>
                <div class="box-body">
                    <div class="personalData">
                        <table class="table-primary">
                            <thead>
                            <tr>
                                <th width="12%">赛事名称</th>
                                <th>出场次数</th>
                                <th>总击杀(场均)</th>
                                <th>总助攻(场均)</th>
                                <th>总死亡( 场均)</th>
                                <th>KDA</th>
                                <th>场均金钱</th>
                                <th>场均补刀</th>
                                <th>场均插眼</th>
                                <th>场均排眼</th>
                                <th>场均参团率</th>
                                <th>MVP次数</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in personalData" :key="item.id">
                                <td width="12%">{{item.matchName}}</td>
                                <td>{{item.appearanceNum}}</td>
                                <td>{{item.sumKill}}<span>
                                    <!-- 缺 -->
                                    </span></td>
                                <td>{{item.sumAssists}}<span>
                                    <!-- 缺 -->
                                    </span></td>
                                <td>{{item.sumDeath}}<span>
                                    <!-- 缺 -->
                                    </span></td>
                                <td>{{item.kda}}</td>
                                <td>{{item.money}}</td>
                                <td>{{item.knifeRepair}}</td>
                                <td>{{item.plugEye}}</td>
                                <td>{{item.rowEye}}</td>
                                <td>{{item.teamRate}}%</td>
                                <td>{{item.mvpNum}}0%</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import HotgameList from "../../components/HotgameList";
    import {queryTeamMenber, postTeamPlayer, postCancelPlayer} from '@/api/combatTeam'

    export default {
        name: "team_details",
        components: {
            // HotgameList
        },
        mounted() {
            this.query()
        },
        data() {
            return {
                data: {},
                personalData: [],
                hero: []
            }
        },
        computed: {
            id() {
                return this.$route.query.id
            }
        },
        methods: {
            queryFollowTeam() {
                debugger
                if (true) {
                    postTeamPlayer({playerId: this.id}).then(res => {
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
                postCancelPlayer({playerId: this.id}).then(res => {
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
                queryTeamMenber({playerId: this.id}).then(res => {
                    if (res.succeed) {
                        this.data = res.data && res.data.data || {}
                        this.hero = this.data.hero.rows || []
                        this.personalData = this.data.personalData
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
    .big-screen-content {
        position: relative;
        width: 100vw;
        left: calc((1200px - 100vw) / 2);
    }

</style>