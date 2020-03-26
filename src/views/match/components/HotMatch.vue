<template>
    <div class="page hotspot-today-box information-box match-box">
        <div class="information-category">
            <h3>热门赛事</h3>
        </div>
        <div class="page-body">
            <div class="hotmatch-list">
                <ul style="overflow: scroll">
                    <li v-for="item in list" :key="item.id">
                        <a @click="$router.push({name: 'match_details',query:{id:item.id}})">
                            <div class="status-label"><img src="@/assets/images/index/inProgress.png"></div>
                            <!--                            <div class="hotmatch-img"><img :src="item.picture"></div>-->
                            <div class="hotmatch-img"><img style="width: 280px;height: 160px" :src="item.picture"></div>
                            <div class="match-name"><img class="img-24" src="@/assets/images/index/sgame01.png">{{item.matchName}}
                            </div>
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
            return {
                list: [{id: 1}]
            }
        },
        mounted() {
            this.query()
        },
        methods: {
            query() {
                queryHomeMatch({}).then(res => {
                    if (res.succeed) {
                        this.list = res.data && res.data.rows || []
                    } else {
                        console.log(res);
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