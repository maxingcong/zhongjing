<template>
    <div>
        <div class="pannel">
            <div class="pannel-head">
                <ul>
                    <li class="active" @click="isShow = true">{{isShow ? '我的订单' : '我的订单 > 订单详情'}}</li>
                </ul>
            </div>
            <div v-if="isShow" class="pannel-body">
                <div class="order-box">
                    <!-- {{list}} -->
                    <div class="order-list" v-for="item in list" :key="item.id">
                        <div class="list-head">
                            <div class="order-number" style="flex:0 0 300px">订单号: {{item.orderSn}}</div>
                            <div class="order-quantity">数量</div>
                            <div class="actual-payment">实付款</div>
                            <div class="order-detail">订单详情</div>
                            <div class="order-time" style="flex:0 0 170px">下单时间</div>
                        </div>
                        <div class="list-body">
                            <div class="order-number" style="flex:0 0 300px">
                                <div class="order-img"><img :src="item.img"></div>
                                <!-- <p>{{item.orderItems[0].commodityName}}</p> -->
                            </div>
                            <div class="order-quantity">{{item.orderItems[0].commodityName}}</div>
                            <div class="actual-payment">￥{{item.totalAmount}}</div>
                            <div class="order-detail">{{emums.orderStatus[item.orderStatus]}} <a style="color:#5997f7" @click="detail(item.id)">订单详情</a></div>
                            <div class="order-time" style="flex:0 0 170px">{{item.paymentTime}}</div>
                        </div>
                    </div>
                </div>
                <el-pagination
                        layout="prev, pager, next"
                        @current-change="query"
                        :total="total">
                </el-pagination>
            </div>
            <Details :data="data" v-else/>
        </div>
    </div>
</template>

<script>
    import Details from './components/OrderDetails'
    import emums from '@/enum.js'
    import {queryOrderList, queryOrderDetails} from '@/api/personalCenter'

    export default {
        name: "my_order",
        data() {
            return {
                emums,
                isShow: true,
                data: {},
                list: [],
                total: 0
            }
        },
        created() {
            this.query()
        },
        components: {
            Details
        },
        mounted() {
            this.isShow = true
        },
        beforeRouteUpdate() {
            this.isShow = true
        },
        methods: {
            query() {
                this.loading = true
                queryOrderList({}).then(res => {
                    debugger
                    if (res.succeed) {
                        this.list = (res.data && res.data.rows) || []
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
            },
            detail(id) {
                queryOrderDetails({id}).then(res => {
                    debugger
                    if (res.succeed) {
                        this.data = res.data && res.data.data || {}
                    } else {
                        console.log(res);
                        // this.$message.warning('网路开小差')
                    }
                    this.isShow = false
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