<template>
    <div class="page hot-match-box">
        <div class="page-head">
            <div class="head-left"><h5>热门赛事</h5><span>hot information</span></div>
            <div class="head-right"><a @click="$router.push({name:'match'})">更多<img
                    src="@/assets/images/index/more.png"></a>
            </div>
        </div>
        <div class="page-body">
            <div class="hotmatch-list">
                <ul>
                    <li v-for="item in list" :key="item.id"
                        @click="$router.push({name: 'match_details',query:{id:item.gameId}})">
                        <div class="hotmatch-img"><img
                                style="width: 280px;height: 162px"
                                :src="item.picture">
                        </div>
                        <div class="hotmatch-name">{{item.matchName}}</div>
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
            return {
                list: []
            }
        },
        mounted() {
            this.query()
        },
        methods: {
            query() {
                queryHomeMatch({gameId: 1}).then(res => {
                    if (res.succeed) {
                        this.list = res.data && res.data.rows || []
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