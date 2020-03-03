<template>
    <div class="page hotspot-today-box information-box match-box">
        <div class="information-category">
            <h3>热门赛事</h3>
        </div>
        <div class="page-body">
            <div class="hotmatch-list">
                <ul>
                    <li>
                        <a href="match-details.html">
                            <div class="status-label"><img src="@/assets/images/index/inProgress.png"></div>
                            <div class="hotmatch-img"><img src="@/assets/images/index/hotmatch01.png"></div>
                            <div class="match-name"><img src="@/assets/images/index/sgame01.png">KPL职业赛</div>
                        </a>
                    </li>
                    <li>
                        <a href="match-details.html">
                            <div class="status-label"><img src="@/assets/images/index/inProgress.png"></div>
                            <div class="hotmatch-img"><img src="@/assets/images/index/hotmatch02.png"></div>
                            <div class="match-name"><img src="@/assets/images/index/sgame01.png">KPL职业赛</div>
                        </a>
                    </li>
                    <li>
                        <a href="match-details.html">
                            <div class="status-label"><img src="@/assets/images/index/inProgress.png"></div>
                            <div class="hotmatch-img"><img src="@/assets/images/index/hotmatch03.png"></div>
                            <div class="match-name"><img src="@/assets/images/index/sgame01.png">KPL职业赛</div>
                        </a>
                    </li>
                    <li>
                        <a href="match-details.html">
                            <div class="status-label"><img src="@/assets/images/index/inProgress.png"></div>
                            <div class="hotmatch-img"><img src="@/assets/images/index/hotmatch04.png"></div>
                            <div class="match-name"><img src="@/assets/images/index/sgame01.png">KPL职业赛</div>
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