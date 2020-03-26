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
                    <div class="order-list">
                        <div class="list-head">
                            <div class="order-number">订单号: 787267040447818847</div>
                            <div class="order-quantity">数量</div>
                            <div class="actual-payment">实付款</div>
                            <div class="order-detail"></div>
                            <div class="order-time">下单时间</div>
                        </div>
                        <div class="list-body" v-for="item in list" :key="item.id">
                            <div class="order-number">
                                <div class="order-img"><img :src="item.picture"></div>
                                <p>{{item.commodityName}}</p>
                            </div>
                            <div class="order-quantity">{{item.shippingSn}}</div>
                            <div class="actual-payment">￥{{item.totalAmount}}</div>
                            <div class="order-detail">{{item.orderStatus}} <a @click="detail(item.id)">订单详情</a></div>
                            <div class="order-time">{{item.paymentTime}}</div>
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
    import {queryOrderList, queryOrderDetails} from '@/api/personalCenter'

    export default {
        name: "my_order",
        data() {
            return {
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