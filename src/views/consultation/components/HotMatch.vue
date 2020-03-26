<template>
    <div>
        <div class="page-head">
            <div class="head-left"><h5>热门赛事</h5><span>hot information</span></div>
            <div class="head-right"><a @click="$router.push({name: 'match'})">全部<img
                    src="@/assets/images/index/more.png"></a>
            </div>
        </div>
        <div class="page-body">
            <div class="hotmatch-list">
                <ul>
                    <li v-for="item in list" :key="item.id"
                        @click="$router.push({name: 'match_details',query:{id:item.id}})">
                        <div class="hotmatch-img"><img
                                style="width: 160px;height: 92px"
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