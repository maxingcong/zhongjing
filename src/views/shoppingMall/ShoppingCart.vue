<template>
    <div class="main-content">
        <div class="page mall-content mall-details-content">
            <div class="mall-box">
                <div class="box-head">
                    <div class="head-left">
                        <div class="send-address">
                            <img src="@/assets/images/mall/address.png">
                            <span>寄送至</span>
                            <h4>瑞文</h4>
                            <p>浙江省 杭州市 江干区 九环路和平大厦五号302 </p>
                            <p>13800380056</p>
                        </div>
                    </div>
                    <div class="head-right">
                        <ul>
                            <li><a @click="$router.push({name:'edit_address',params: {type:'edit',address: ads}})"
                                   class="edit-address"><i
                                    class="mdi-set mdi-square-edit-outline mr5"></i>修改本地址</a></li>
                        </ul>
                    </div>
                </div>
                <div class="box-body">
                    <div class="shoppingCart-content">
                        <div class="shoppingCart-list list-title">
                            <div class="select-icon"></div>
                            <div class="commodity-information">商品信息</div>
                            <div class="selling-price">售价</div>
                            <div class="quantity">数量</div>
                            <div class="payment-method">支付方式</div>
                            <div class="operation">操作</div>
                        </div>
                        <div class="shoppingCart-list" v-for="item in list" :key="item.id">
                            <div class="select-icon">
                                <label class="ma-checkbox"><input type="checkbox" value="1"><i></i><span></span></label>
                            </div>
                            <div class="commodity-information">
                                <div class="commodity-img"><img src="images/mall/icon_thing02.png"></div>
                                <div class="commodity-name">游戏皮肤B款</div>
                            </div>
                            <div class="selling-price">￥60</div>
                            <div class="quantity">
                                <div class="number-emendation">
                                    <div class="icon">-</div>
                                    <div class="number-text">2</div>
                                    <div class="icon">+</div>
                                </div>
                            </div>
                            <div class="payment-method">
                                <ul>
                                    <li><label class="ma-radio"><input type="radio" name="tr"
                                                                       value="2"><i></i><span>￥60</span></label></li>
                                    <li><label class="ma-radio"><input type="radio" name="tr" value="2"
                                                                       disabled=""><i></i><span>1200竞豆</span></label>
                                    </li>
                                    <li><label class="ma-radio"><input type="radio" name="tr" value="2"
                                                                       disabled=""><i></i><span>￥60+600竞豆</span></label>
                                    </li>
                                </ul>
                            </div>
                            <div class="operation"><a href="#">删除</a></div>
                        </div>
                        <div class="selectAll-box">
                            <div class="box-head">
                                <div class="head-left"><label class="ma-checkbox"><input type="checkbox"
                                                                                         value="1"><i></i><span>全选</span></label>
                                </div>
                                <div class="head-right">总价： <b>￥120元</b></div>
                            </div>
                            <div class="box-body">
                                <p><span>留言：</span>买家留言 ，选填</p>
                            </div>
                        </div>
                        <div class="paymentMethod-box">
                            <div class="box-left">
                                <div class="title">支付</div>
                                <ul>
                                    <li><label class="d-radiobox"> <input type="radio" name="tdr7"
                                                                          value="nn"><i></i><em></em><b><img
                                            src="@/assets/images/icon_wechat01.png">微信支付</b></label></li>
                                    <li><label class="d-radiobox"> <input type="radio" name="tdr7"
                                                                          value="nn"><i></i><em></em><b><img
                                            src="@/assets/images/icon_wechat01.png">微信支付</b></label></li>
                                    <li><label class="d-radiobox"> <input type="radio" name="tdr7"
                                                                          value="nn"><i></i><em></em><b><img
                                            src="@/assets/images/quickpay01.png">银联云闪付</b></label></li>
                                </ul>
                            </div>
                            <div class="box-right"><a href="#">确认付款</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {getmallCard} from '@/api/shoppingMall'

    export default {
        data() {
            return {
                type: '',
                list: [],
                ads: {}
            }
        },
        watch: {},
        mounted() {
            this.query()
        },
        computed: {
            ...mapState(['auth'])
        },
        methods: {
            query() {
                getmallCard({}).then(res => {
                    if (res.succeed) {
                        debugger
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