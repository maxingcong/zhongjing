<template>
    <div>
        <div class="page-body">
            <div class="information-category-content">
                <div class="information-category-list" v-for="item in list" :key="item.id">
                    <div class="information-img"><img src="@/assets/images/index/picb.png"></div>
                    <div class="information-text">
                        <h3>2019年德玛西亚杯八强赛的晋级队伍名单</h3>
                        <p>小组赛阶段在12月22日已经决出了八强赛的晋级队伍名单，VG、WE、EDG、TES、JDG、RNG、RW和BLG取得了各自小组</p>
                        <div class="tag">
                            <span>日期：2019-11-27</span>
                            <div class="goto">
                                <a @click="$router.push({name:'consultation_details',query:{id: item.id}})">
                                    <img class="normal" src="@/assets/images/index/goto.png">
                                    <img class="hover" src="@/assets/images/index/goto2.png">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="information-category-list-more"><a href="#">加载更多</a></div>
            </div>
        </div>
    </div>
</template>

<script>
    import HotgameList from "../../components/HotgameList";
    import HotMatch from "./components/HotMatch";
    import HotForecast from "./components/HotForecast";
    import {queryInfoClass} from '@/api/consultation'

    export default {
        name: "consultation",
        components: {
            HotgameList,
            HotMatch,
            HotForecast
        },
        computed: {
            rout() {
                // this.id = this.$route.params.id
                // this.query()
                // console.log(this.$route.query.id)
                return this.$route.query.id
            }
        },
        watch: {
            rout: function (e) {
                if (!e) {
                    this.id = ''
                } else {
                    this.id = e
                }
                if (e && e == 3) {
                    this.newQuery()
                } else {
                    this.query()
                }
            }
        },
        data() {
            return {
                isConsultationType: '',
                list: [],
                id: ''
            }
        },
        mounted() {
            this.query()
        },
        methods: {
            handQuery(e) {
                if (this.rout) {
                    console.log(e)
                }
            },
            query() {
                queryInfoClass({id: this.rout}).then(res => {
                    if (res.succeed) {
                        this.list = res.data && res.data.rows || []
                    } else {
                        console.log(res)
                        // this.$message.warning('网路开小差')
                    }
                    this.loading = false
                }).catch(err => {
                    this.loading = false
                    console.log(err)
                })
            },
            newQuery() {
                queryInfoClass({id: this.rout}).then(res => {
                    if (res.succeed) {
                        this.list = res.data && res.data.rows || []
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

</style>