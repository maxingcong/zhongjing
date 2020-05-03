<template>
    <div>
        <div class="pannel">
            <div class="pannel-head">
                <ul>
                    <li class="active"><a>我的房间</a></li>
                </ul>
            </div>
            <div class="pannel-body">
                <div class="guessing-competition-box">
                    <div class="box" v-for="item in data" :key="item.id">
                        <div class="box-head">
                            <div class="head-data-list time">{{item.matchTime}}</div>
                            <div class="head-data-list game"><img style="border-radius: 50%"
                                                                  :src="item.gameIcon" class="mr10 img-24">{{item.matchName}}
                            </div>
                            <div class="head-data-list states"><span
                                    class="mr10 text-success"> {{item.status || ''}}</span><label
                                    class="lbl lbl-c1">{{emumObj.foreast[item.status]}}</label></div>
                        </div>
                        <div class="box-body">
                            <div class="detail-data">
                                <span>房主次数</span>
                                <p class="text-danger">{{item.ownerNumber}}</p>
                            </div>
                            <div class="detail-data">
                                <span>共计投注</span>
                                <p class="text-warning">{{item.beanNumber}}</p>
                            </div>
                            <div class="detail-data">
                                <span>赛果</span>
                                <p class="small-size">{{item.matchName}}胜出（1.26）</p>
                            </div>
                            <div class="detail-data">
                                <span>盈亏情况</span>
                                <p class="small-size">{{item.matchName}}胜出</p>
                            </div>
                            <div class="detail-data">
                                <span>房主收益</span>
                                <p class="text-danger"><b>+{{item.ownerNumber}}</b></p>
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
    </div>
</template>

<script>
    import {queryMyRoom} from '@/api/personalCenter'

    export default {
        name: "my_room",
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
                queryMyRoom({
                    pageNum: this.pageNum,
                    pageSize: this.pageSize
                }).then(res => {
                    if (res.succeed) {
                        this.data = (res.data && res.data.rows) || []
                        this.total = (res.data && res.data.total) || 0
                    } else {
                        console.log(res);
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