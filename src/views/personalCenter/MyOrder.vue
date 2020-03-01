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
                        <div class="list-body">
                            <div class="order-number">
                                <div class="order-img"><img src="images/shangpin01.png"></div>
                                <p>【现货】武神&幽兰颜究小盒</p>
                            </div>
                            <div class="order-quantity">2</div>
                            <div class="actual-payment">￥215.00</div>
                            <div class="order-detail">已发货 <a @click="detail">订单详情</a></div>
                            <div class="order-time">2020-2-1</div>
                        </div>
                    </div>
                    <div class="order-list">
                        <div class="list-head">
                            <div class="order-number">订单号: 787267040447818847</div>
                            <div class="order-quantity">数量</div>
                            <div class="actual-payment">实付款</div>
                            <div class="order-detail"></div>
                            <div class="order-time">下单时间</div>
                        </div>
                        <div class="list-body">
                            <div class="order-number">
                                <div class="order-img"><img src="images/shangpin01.png"></div>
                                <p>【现货】武神&幽兰颜究小盒</p>
                            </div>
                            <div class="order-quantity">2</div>
                            <div class="actual-payment">￥215.00</div>
                            <div class="order-detail">已发货 <a @click="detail">订单详情</a></div>
                            <div class="order-time">2020-2-1</div>
                        </div>
                    </div>
                    <div class="page-turning-box">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#"><i class="mdi-set mdi-chevron-left"></i></a></li>
                            <li class="page-item"><a class="page-link" href="#"><i class="mdi-set mdi-chevron-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Details v-else />
        </div>
    </div>
</template>

<script>
    import Details from './components/OrderDetails'
    export default {
        name: "my_order",
        data() {
           return {
               isShow: true
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
        methods: {
            query() {
                console.log('home')
            },
            detail() {
                this.isShow = false
            }
        }
    }
</script>

<style scoped>

</style>