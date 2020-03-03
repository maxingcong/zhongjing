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
                            <li><a href="match-details.html"><img src="@/assets/images/index/sgame01.png">王者荣耀</a></li>
                            <li><a href="match-details.html"><img src="@/assets/images/index/sgame02.png">LOL</a></li>
                            <li><a href="match-details.html"><img src="@/assets/images/index/sgame01.png">王者荣耀</a></li>
                            <li><a href="match-details.html"><img src="@/assets/images/index/sgame02.png">LOL</a></li>
                            <li><a href="match-details.html"><img src="@/assets/images/index/sgame01.png">王者荣耀</a></li>
                            <li><a href="match-details.html"><img src="@/assets/images/index/sgame02.png">LOL</a></li>
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
                        <li>
                            <a href="#">
                                <div class="status-label"><img src="@/assets/images/index/inProgress.png"></div>
                                <div class="hotmatch-img"><img src="@/assets/images/index/hotmatch01.png"></div>
                                <div class="match-name"><img src="@/assets/images/index/sgame01.png">KPL职业赛</div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="status-label"><img src="@/assets/images/index/inProgress.png"></div>
                                <div class="hotmatch-img"><img src="@/assets/images/index/hotmatch02.png"></div>
                                <div class="match-name"><img src="@/assets/images/index/sgame01.png">KPL职业赛</div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="status-label"><img src="@/assets/images/index/inProgress.png"></div>
                                <div class="hotmatch-img"><img src="@/assets/images/index/hotmatch03.png"></div>
                                <div class="match-name"><img src="@/assets/images/index/sgame01.png">KPL职业赛</div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="status-label"><img src="@/assets/images/index/hasEnded.png"></div>
                                <div class="hotmatch-img"><img src="@/assets/images/index/hotmatch04.png"></div>
                                <div class="match-name"><img src="@/assets/images/index/sgame01.png">KPL职业赛</div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="status-label"><img src="@/assets/images/index/hasEnded.png"></div>
                                <div class="hotmatch-img"><img src="@/assets/images/index/hotmatch04.png"></div>
                                <div class="match-name"><img src="@/assets/images/index/sgame01.png">KPL职业赛</div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="status-label"><img src="@/assets/images/index/hasEnded.png"></div>
                                <div class="hotmatch-img"><img src="@/assets/images/index/hotmatch04.png"></div>
                                <div class="match-name"><img src="@/assets/images/index/sgame01.png">KPL职业赛</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {queryHomeGame} from '@/api/home'

    export default {
        name: "Forecast.vue",
        data() {
            return {}
        },
        mounted() {
            this.query()
        },
        methods: {
            query() {
                queryHomeGame({}).then(res => {
                    if (res.success) {
                        this.data = res.data
                    } else {
                        this.$message.warning('网路开小差')
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