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
                            <div class="head-data-list time">{{item.createTime}}</div>
                            <div class="head-data-list game"><img style="width: 25px;height: 25px" :src="item.picture" class="mr10">{{item.matchName}}
                            </div>
                            <div class="head-data-list states"><span
                                    class="mr10 text-success"> {{emumObj.foreast[item.status]}}</span>
                                <!--<label-->
                                    <!--class="lbl lbl-c1">{{emumObj.foreast[item.bettingResult]}}</label>-->
                                    </div>
                        </div>
                        <div class="box-body">
                            <div class="detail-data">
                                <span>项目</span>
                                <p class="text-danger">{{item.className || ''}}</p>
                            </div>
                            <div class="detail-data">
                                <span>投注竞豆</span>
                                <p class="text-warning">{{item.bean}}</p>
                            </div>
                            <div class="detail-data">
                                <span>已投</span>
                                <p class="small-size">{{item.bettingName}}（{{item.odds}}）</p>
                            </div>
                            <div class="detail-data">
                                <span>赛果</span>
                                <p class="small-size">{{item.bettingResultName}}</p>
                            </div>
                            <div class="detail-data">
                                <span>收益</span>
                                <p class="text-danger"><b>{{item.profit}}</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <el-pagination
                        layout="prev, pager, next"
                        @current-change="currentChange"
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
                total: 0,
                pageNum: 0,
                pageSize: 10
            }
        },
        created() {
            this.query()
        },
        methods: {
            currentChange(v) {
                this.pageNum = v
                this.query()
            },
            query() {
                this.loading = true
                queryGuess({pageNum: this.pageNum, pageSize: this.pageSize}).then(res => {
                    if (res.succeed) {
                        debugger
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