<template>
    <div>
        <div class="pannel-body">
            <div class="order-box">
                <div class="box">
                    <div class="consignee-information">
                        <ul>
                            <li>
                                <div class="title">收货人信息</div>
                                <p><b>{{data.name}}</b><span>{{data.province}}{{data.city}}{{data.region}}
                                    {{data.detailAddress}}</span><span>{{data.phone}}</span></p>
                            </li>
                            <li>
                                <div class="title">我的留言</div>
                                <p>{{data.message}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="order-list">
                    <div class="list-body">
                        <div class="order-number"><b class="mr10">2019-12-09</b>订单号: {{data.orderSn}}</div>
                        <div class="order-quantity">售价</div>
                        <div class="actual-payment detail-payment">数量</div>
                        <!-- <div>商品金额</div> -->
                        <div class="order-quantity">商品金额</div>
                        <div class="order-time">状态</div>
                    </div>
                    <div class="list-body" v-for="(item,index) in data.orderItems" :key="index">
                        <div class="order-number">
                            <div class="order-img"><img :src="item.picture"></div>
                            <p>{{item.commodityName}}</p>
                        </div>
                        <div class="order-quantity">￥{{item.combinationPrice}}竞豆</div>
                        <div class="actual-payment detail-payment">{{item.count}}</div>
                        <div class="order-quantity">{{item.shippingAmount || 0}}</div>
                        <!-- <div>{{item.shippingAmount || 0}}</div> -->
                        <div class="order-time">{{emums.orderStatus[data.orderStatus]}}</div>
                    </div>
                    <div class="freight-details">
                        <p>运费： <span>商家包邮</span></p>
                        <p>竞豆支付： <span class="amount">{{data.totalBean}}</span></p>
                        <p>现金支付： <span class="amount">￥{{data.totalAmount}}</span></p>
                    </div>
                     <div class="freight-details">
                         <button @click="submit" class="btn btn-primary">立即支付
                            </button>
                    </div>
                </div>
                <el-dialog
                  title="支付"
                  :visible.sync="ispay"
                  width="600px">
                    <el-form>
                       <el-form-item label="请扫码支付">
                         <div style="width:100%;height:100%;display:flex;justify-content: center;">
                            <canvas  width='100' height= '100px' ref="code"></canvas>
                          </div>
                       </el-form-item>
                    </el-form>
                  </el-dialog>
                <!-- <div class="box">
                    <div class="logistics-information">
                        <div class="title">物流信息</div>
                        <p>快递单号：75326045052156</p>
                        <p>发货时间：2019-04-26 22:45:29</p>
                        <p>快递公司：申通快递</p>
                        <div class="express-details">
                            <ul>
                                <li>
                                    <div class="date">2019-12-04 <span>周三</span></div>
                                    <div class="time">23:27:58</div>
                                    <div class="details-text">商品已经下单</div>
                                </li>
                                <li>
                                    <div class="date"></div>
                                    <div class="time">23:24:06</div>
                                    <div class="details-text">您的订单开始处理</div>
                                </li>
                                <li>
                                    <div class="date">2019-12-05 <span>周四</span></div>
                                    <div class="time">10:38:08</div>
                                    <div class="details-text">包裹正在揽收</div>
                                </li>
                                <li>
                                    <div class="date"></div>
                                    <div class="time">20:08:58</div>
                                    <div class="details-text">【杭州市】浙江杭州上城区城南公司 已揽收</div>
                                </li>
                                <li>
                                    <div class="date">2019-12-06 <span>周五</span></div>
                                    <div class="time">21:57:18</div>
                                    <div class="details-text">【嘉兴市】 已到达 浙江杭州分拔中心</div>
                                </li>
                                <li>
                                    <div class="date"></div>
                                    <div class="time">21:57:18</div>
                                    <div class="details-text">【嘉兴市】 已离开 浙江杭州分拔中心；发往</div>
                                </li>
                                <li>
                                    <div class="date">2019-12-07 <span>周六</span></div>
                                    <div class="time">02:17:58</div>
                                    <div class="details-text">【嘉兴市】 已离开 浙江杭州分拔中心；发往内蒙古赤峰公司</div>
                                </li>
                                <li>
                                    <div class="date">2019-12-08 <span>周日</span></div>
                                    <div class="time">02:17:58</div>
                                    <div class="details-text">【北京市】 已到达 北京分拔中心</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
    import emums from '@/enum.js'

    export default {
        name: "infoRecharge",
        props: {
            isEdit: {
                default: true
            },
            data: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        data(){
            return {
                emums,
                ispay:false
            }
        },
        methods:{
            submit(){
                this.ispay = true
                // that.$nextTick(()=>{
                // try{
                //   QRCode.toCanvas(that.$refs.code, res.data.msg, function (error) {
                //     console.error(error)
                //     that.$message.warning(error)
                //   })
                // }catch(e){
                //   console.log(e)
                // }
            }
        }
    }
</script>

<style scoped>
.detail-payment{
   width: 100px !important;
}
</style>