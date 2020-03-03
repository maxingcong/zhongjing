<template>
    <div>
        <div class="page-head">
            <div class="head-left"><h5>热门预测</h5><span>Popular<br>predictions</span></div>
            <div class="head-right"><a href="">全部<img src="images/index/more.png"></a></div>
        </div>
        <div class="page-body">
            <div class="duel-details">
                <div class="duel-details-list">
                    <div class="duel-details-list-head">
                        <div class="match-name"><img src="images/index/sgame01.png">KPL职业赛</div>
                        <div class="match-time">11-22(周五) 19:00</div>
                    </div>
                    <div class="duel-details-list-body">
                        <div class="duel-match">
                            <div class="duel-match-logo"><img src="images/index/icon_game0211.png"></div>
                            <div class="duel-match-name">AG超玩会</div>
                        </div>
                        <div class="duel-operation">
                            <img src="images/index/pic_vs.png">
                            <a href="guessing-competition-list-details.html">参与竞猜</a>
                            <span>竞猜热度8698</span>
                        </div>
                        <div class="duel-match">
                            <div class="duel-match-logo"><img src="images/index/icon_game0311.png"></div>
                            <div class="duel-match-name">AG超玩会</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="duel-item">
                <ul>
                    <li>
                        <div class="match-name">
                            <img src="images/index/sgame02.png">
                            <span class="name1">LPL</span>
                            <img class="vs" src="images/index/pic_vs.png">
                            <span class="name2">LPL</span>
                        </div>
                        <div class="match-time">11-22(周五) 18:00</div>
                    </li>
                    <li>
                        <div class="match-name">
                            <img src="images/index/sgame02.png">
                            <span class="name1">LPL</span>
                            <img class="vs" src="images/index/pic_vs.png">
                            <span class="name2">LPL</span>
                        </div>
                        <div class="match-time">11-22(周五) 18:00</div>
                    </li>
                    <li>
                        <div class="match-name">
                            <img src="images/index/sgame02.png">
                            <span class="name1">LPL</span>
                            <img class="vs" src="images/index/pic_vs.png">
                            <span class="name2">LPL</span>
                        </div>
                        <div class="match-time">11-22(周五) 18:00</div>
                    </li>
                    <li>
                        <div class="match-name">
                            <img src="images/index/sgame02.png">
                            <span class="name1">LPL</span>
                            <img class="vs" src="images/index/pic_vs.png">
                            <span class="name2">LPL</span>
                        </div>
                        <div class="match-time">11-22(周五) 18:00</div>
                    </li>
                    <li>
                        <div class="match-name">
                            <img src="images/index/sgame02.png">
                            <span class="name1">LPL</span>
                            <img class="vs" src="images/index/pic_vs.png">
                            <span class="name2">LPL</span>
                        </div>
                        <div class="match-time">11-22(周五) 18:00</div>
                    </li>
                    <li>
                        <div class="match-name">
                            <img src="images/index/sgame02.png">
                            <span class="name1">LPL</span>
                            <img class="vs" src="images/index/pic_vs.png">
                            <span class="name2">LPL</span>
                        </div>
                        <div class="match-time">11-22(周五) 18:00</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {queryHomeMatch} from '@/api/home'

    export default {
        data() {
            return {}
        },
        mounted() {
            this.query()
        },
        methods: {
            query() {
                queryHomeMatch({}).then(res => {
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