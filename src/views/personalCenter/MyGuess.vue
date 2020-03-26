<template>
    <div>
        <div class="pannel">
            <div class="pannel-head">
                <ul>
                    <li class="active"><a>我的竞猜</a></li>
                </ul>
            </div>
            <div class="pannel-body">
                <div class="guessing-competition-box">
                    <div class="box" v-for="item in data" :key="item.id">
                        <div class="box-head">
                            <div class="head-data-list time">2019-11-28 23:09</div>
                            <div class="head-data-list game"><img :src="item.picture" class="mr10">{{item.matchName}}
                            </div>
                            <div class="head-data-list states"><span
                                    class="mr10 text-success"> {{item.status || ''}}</span><label
                                    class="lbl lbl-c1">{{item.bettingResult || '已结算'}}</label></div>
                        </div>
                        <div class="box-body">
                            <div class="detail-data">
                                <span>项目</span>
                                <p class="text-danger">测胜利</p>
                            </div>
                            <div class="detail-data">
                                <span>投注竞豆</span>
                                <p class="text-warning">{{item.beanNumber}}</p>
                            </div>
                            <div class="detail-data">
                                <span>已投</span>
                                <p class="small-size">QGhappy胜出（1.26）</p>
                            </div>
                            <div class="detail-data">
                                <span>赛果</span>
                                <p class="small-size">QGhappy胜出</p>
                            </div>
                            <div class="detail-data">
                                <span>收益</span>
                                <p class="text-danger"><b>+5000</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <el-pagination
                        layout="prev, pager, next"
                        :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import {queryGuess} from '@/api/personalCenter'

    export default {
        name: "my_guess",
        data() {
            return {
                data: [],
                total: 0
            }
        },
        created() {
            this.query()
        },
        methods: {
            query() {
                this.loading = true
                queryGuess({}).then(res => {
                    if (res.succeed) {
                        this.data = res.data && res.data.rows || []
                        this.total = res.data && res.data.total || 0
                    } else {
                        console.log(res)
                        this.$message.warning(res.data.msg || '')
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