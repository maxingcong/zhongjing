<template>
    <div>
        <div class="page-head">
            <div class="head-left"><h5>热门赛事</h5><span>hot information</span></div>
            <div class="head-right"><a href="">全部<img src="images/index/more.png"></a></div>
        </div>
        <div class="page-body">
            <div class="hotmatch-list">
                <ul>
                    <li>
                        <a href="#">
                            <div class="hotmatch-img"><img src="images/index/hotmatch01.png"></div>
                            <div class="hotmatch-name">LPL职业联赛</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="hotmatch-img"><img src="images/index/hotmatch02.png"></div>
                            <div class="hotmatch-name">德玛西亚杯</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="hotmatch-img"><img src="images/index/hotmatch03.png"></div>
                            <div class="hotmatch-name">LOL总决赛</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="hotmatch-img"><img src="images/index/hotmatch04.png"></div>
                            <div class="hotmatch-name">KPL职业联赛</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="hotmatch-img"><img src="images/index/hotmatch05.png"></div>
                            <div class="hotmatch-name">季中冠军赛</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="hotmatch-img"><img src="images/index/hotmatch06.png"></div>
                            <div class="hotmatch-name">英雄联盟亚运会</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="hotmatch-img"><img src="images/index/hotmatch07.png"></div>
                            <div class="hotmatch-name">全明星赛</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="hotmatch-img"><img src="images/index/hotmatch08.png"></div>
                            <div class="hotmatch-name">KRKPL</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {queryHomeMatch} from '@/api/home'

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