<template>
    <div>
        <div class="pannel">
            <div class="pannel-head">
                <ul>
                    <li class="active"><a>竞豆充值</a></li>
                </ul>
            </div>
            <div class="pannel-body">
                <div class="bean-recharge-box">
                    <div class="box-title">选择竞豆</div>
                    <div class="choose-commodity">
                        <div class="commodity-list active" v-for="(item,index) in list" :key="index">
                            <div class="commodity-img"><img :src="item.pic"></div>
                            <div class="amount-number">￥{{item.price}}元</div>
                            <div class="give-away-number">赠送{{item.giveBean}}豆</div>
                            <div class="control-number">
                                <button class="pull-left" @click="item.num++ && item.num<=10"><img src="@/assets/images/add.png">
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
                        <p>本次可获得赠送竞豆： <b>{{totalSum*100}}豆</b></p>
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
                                                                      v-model="payType"
                                                                      value="1"><i></i><span><img
                                            src="@/assets/images/icon_ali01.png">支付宝支付</span></label>
                                </div>
                            </li>
                            <li>
                                <div class="f-checkinline">
                                    <label class="c-checkbox"> <input type="radio" name="payment"
                                                                      v-model="payType"
                                                                      value="2"><i></i><span><img
                                            src="@/assets/images/icon_wechat01.png">微信支付</span></label>
                                </div>
                            </li>
                            <li>
                                <div class="f-checkinline">
                                    <label class="c-checkbox"> <input type="radio" name="payment"
                                                                      v-model="payType"
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
                 <el-dialog
                  :visible.sync="dialogVisible"
                  :destroy-on-close="true"
                  width="600px">
                    <el-form>
                       <el-form-item label="请扫码支付">
                         <div style="width:100%;height:100%;display:flex;justify-content: center;">
                            <canvas v-if="msgText"  width='100' height= '100px' ref="code"></canvas>
                          <div v-else>网络忙，请稍后</div>
                          </div>
                       </el-form-item>
                    </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                  </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import {putRecharge, queryRecharge} from '@/api/personalCenter'
    import QRCode from 'qrcode'

    export default {
        name: "infoRecharge",
        props: {
            isEdit: {
                default: true
            }
        },
        data() {
            return {
                list: [
                //     {
                //     accout: 10,
                //     num: 0
                // }, {
                //     accout: 10,
                //     num: 0
                // }, {
                //     accout: 10,
                //     num: 0
                // }
                ],
                payType: '',
                isTotalSum: true,
                dialogVisible: false,
                msgText: ''
            }
        },
        computed: {
            totalSum() {
                let totalSum = 0
                this.list.forEach(_ => {
                    if (/^\d+$/.test(_.num)) {
                        totalSum += (_.price * _.num)
                        this.isTotalSum = false
                    }
                    if (!totalSum || !this.payType) {
                        this.isTotalSum = true
                    }
                })
                return totalSum
            }
        },
        inject: ["layoutApp"],
        mounted(){
           this.query()
        },
        methods: {
            handInpueBlur(value, i) {
                if (!(/^\d+$/.test(value))) {
                    this.list[i].num = 0
                }
            },
            query() {
                this.dialogVisible = false
                queryRecharge({}).then(res => {
                    if (res.succeed) {
                        this.list = res.data && res.data.rows.map(item=>{
                            item.num = 0
                            return item
                        })
                    } else {
                        console.log(res)
                        // this.$message.warning('网路开小差')
                    }
                    this.$emit('load')
                }).catch(err => {
                    this.$emit('load')
                    console.log(err)
                    this.$message.warning('网路开小差')
                })
            },
            submit() {
                if (!this.totalSum || !this.payType) {
                    this.isTotalSum = true
                    return
                }
                this.layoutApp.loading = true
                let arr = []
                this.list.forEach(v=>{
                   arr.push({id: v.id,count: v.num})
                })
                putRecharge({payType:this.payType,recharges:arr}).then(res => {
                    console.log(res)
                    if(res.code == 200 && escape(res.msg).indexOf( "%u" )>0){
                        this.$message.success(res.data && res.data.msg || '')
                    }else{
                        let that =this
                        that.msgText = res.data.msg
                        that.dialogVisible = true
                        that.$nextTick(()=>{
                            try{
                            QRCode.toCanvas(that.$refs.code, res.data.msg, function (error) {
                                console.error(error)
                                that.$message.warning(error)
                            })
                            this.$forceUpdate()
                            }catch(e){
                            console.log(e)
                            }
                        })
                    }
                    this.layoutApp.loading = false
                    this.$emit('success')
                }).catch(err => {
                    this.layoutApp.loading = false
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