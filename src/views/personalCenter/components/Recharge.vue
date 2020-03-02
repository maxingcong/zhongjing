<template>
    <div>
        <div class="pannel">
            <div class="pannel-head">
                <ul>
                    <li class="active"><a href="#">竞豆充值</a></li>
                </ul>
            </div>
            <div class="pannel-body">
                <div class="bean-recharge-box">
                    <div class="box-title">选择商品</div>
                    <div class="choose-commodity">
                        <div class="commodity-list active" v-for="(item,index) in list" :key="index">
                            <div class="commodity-img"><img src="@/assets/images/chongzhi01.png"></div>
                            <div class="amount-number">￥{{item.accout}}元</div>
                            <div class="give-away-number">赠送{{item.accout}}豆</div>
                            <div class="control-number">
                                <button class="pull-left" @click="item.num++"><img src="@/assets/images/add.png">
                                </button>
                                <span class="control-input">
                                    <input type="number" v-model="item.num" @blur="handInpueBlur(item.num, index)"/>
                                </span>
                                <!--                                <span><el-input class="control-input" v-model="item.num" size="small"/></span>-->
                                <button class="pull-right" @click="item.num > 0&&item.num--"><img
                                        src="@/assets/images/reduce.png">
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="total-box">
                        <p>本次可获得赠送竞豆： <b>15000豆</b></p>
                        <span>*单个商品每次最多购买10个</span>
                        <div class="total-number pull-right">共计支付：<b>￥{{totalSum}}元</b></div>
                    </div>
                </div>
                <div class="bean-recharge-box payment-method">
                    <div class="box-title">选择支付方式</div>
                    <div class="method-list">
                        <ul>
                            <li>
                                <div class="f-checkinline">
                                    <label class="c-checkbox"> <input type="radio" name="payment"
                                                                      v-model="paymentType"
                                                                      value="1"><i></i><span><img
                                            src="@/assets/images/icon_ali01.png">支付宝支付</span></label>
                                </div>
                            </li>
                            <li>
                                <div class="f-checkinline">
                                    <label class="c-checkbox"> <input type="radio" name="payment"
                                                                      v-model="paymentType"
                                                                      value="2"><i></i><span><img
                                            src="@/assets/images/icon_wechat01.png">微信支付</span></label>
                                </div>
                            </li>
                            <li>
                                <div class="f-checkinline">
                                    <label class="c-checkbox"> <input type="radio" name="payment"
                                                                      v-model="paymentType"
                                                                      value="3"><i></i><span><img
                                            src="@/assets/images/quickpay01.png">银联云闪付</span></label>
                                </div>
                            </li>
                        </ul>
                        <div class="sumbit">
                            <button @click="submit" class="sumbit-btn"
                                    :style="{background:isTotalSum ? '#ccc': '#F95E5F'}" :disabled="isTotalSum">立即充值
                            </button>
                            <p>点击立即充值，即表示您已经同意<a href="#">《充值活动协议》</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {putRecharge, queryRecharge} from '@/api/personalCenter'

    export default {
        name: "infoRecharge",
        props: {
            isEdit: {
                default: true
            }
        },
        data() {
            return {
                list: [{
                    accout: 10,
                    num: 0
                }, {
                    accout: 10,
                    num: 0
                }, {
                    accout: 10,
                    num: 0
                }],
                paymentType: '',
                isTotalSum: true
            }
        },
        computed: {
            totalSum() {
                let totalSum = 0
                this.list.forEach(_ => {
                    if (/^\d+$/.test(_.num)) {
                        totalSum += (_.accout * _.num)
                        this.isTotalSum = false
                    }
                    if (!totalSum || !this.paymentType) {
                        this.isTotalSum = true
                    }
                })
                return totalSum
            }
        },
        inject: ["layoutApp"],
        methods: {
            handInpueBlur(value, i) {
                if (!(/^\d+$/.test(value))) {
                    this.list[i].num = 0
                }
            },
            query() {
                queryRecharge({}).then(res => {
                    if (res.success) {
                        this.list = res.data
                    } else {
                        this.$message.warning('网路开小差')
                    }
                    this.$emit('load')
                }).catch(err => {
                    this.$emit('load')
                    console.log(err)
                    this.$message.warning('网路开小差')
                })
            },
            submit() {
                if (!this.totalSum || !this.paymentType) {
                    this.isTotalSum = true
                    return
                }
                this.layoutApp.loading = true
                putRecharge({params: JSON.stringify(this.list)}).then(res => {
                    console.log(res)
                    this.$message.success('充值成功')
                    this.layoutApp.loading = false
                    this.$emit('success')
                }).catch(err => {
                    // this.message.warning('充值失败')
                    this.layoutApp.loading = false
                    this.$message.warning('充值失败')
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .control-input {
        display: inline-block !important;

        input {
            border: none;
            width: 100px;
            height: 27px;
            text-align: center;
            font-size: 18px;

            &:focus {
                border: none;
            }
        }
    }

    .sumbit-btn {
        font-size: 28px;
        color: #fff;
        font-weight: bold;
        display: block;
        width: 600px;
        height: 63px;
        text-align: center;
        background: #F95E5F;
        border-radius: 9px;
        line-height: 62px;
        margin: 0 auto;
    }

</style>