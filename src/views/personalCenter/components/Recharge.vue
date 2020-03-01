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
                        <div class="commodity-list active">
                            <div class="commodity-img"><img src="images/chongzhi01.png"></div>
                            <div class="amount-number">￥10元</div>
                            <div class="give-away-number">赠送5000豆</div>
                            <div class="control-number">
                                <button class="pull-left"><img src="images/add.png"></button>
                                <span>1</span>
                                <button class="pull-right"><img src="images/reduce.png"></button>
                            </div>
                        </div>
                        <div class="commodity-list">
                            <div class="commodity-img"><img src="images/chongzhi02.png"></div>
                            <div class="amount-number">￥20元</div>
                            <div class="give-away-number">赠送10000豆</div>
                            <div class="control-number">
                                <button class="pull-left"><img src="images/reduce.png"></button>
                                <span>1</span>
                                <button class="pull-right"><img src="images/add.png"></button>
                            </div>
                        </div>
                        <div class="commodity-list">
                            <div class="commodity-img"><img src="images/chongzhi03.png"></div>
                            <div class="amount-number">￥50元</div>
                            <div class="give-away-number">赠送50000豆</div>
                            <div class="control-number">
                                <button class="pull-left"><img src="images/reduce.png"></button>
                                <span>1</span>
                                <button class="pull-right"><img src="images/add.png"></button>
                            </div>
                        </div>
                        <div class="commodity-list">
                            <div class="commodity-img"><img src="images/chongzhi04.png"></div>
                            <div class="amount-number">￥100元</div>
                            <div class="give-away-number">赠送50000豆</div>
                            <div class="control-number">
                                <button class="pull-left"><img src="images/reduce.png"></button>
                                <span>1</span>
                                <button class="pull-right"><img src="images/add.png"></button>
                            </div>
                        </div>
                        <div class="commodity-list">
                            <div class="commodity-img"><img src="images/chongzhi05.png"></div>
                            <div class="amount-number">￥500元</div>
                            <div class="give-away-number">赠送50000豆</div>
                            <div class="control-number">
                                <button class="pull-left"><img src="images/reduce.png"></button>
                                <span>1</span>
                                <button class="pull-right"><img src="images/add.png"></button>
                            </div>
                        </div>
                        <div class="commodity-list">
                            <div class="commodity-img"><img src="images/chongzhi06.png"></div>
                            <div class="amount-number">￥1000元</div>
                            <div class="give-away-number">赠送50000豆</div>
                            <div class="control-number">
                                <button class="pull-left"><img src="images/reduce.png"></button>
                                <span>1</span>
                                <button class="pull-right"><img src="images/add.png"></button>
                            </div>
                        </div>
                    </div>
                    <div class="total-box">
                        <p>本次可获得赠送竞豆： <b>15000豆</b></p>
                        <span>*单个商品每次最多购买10个</span>
                        <div class="total-number pull-right">共计支付：<b>￥30元</b></div>
                    </div>
                </div>
                <div class="bean-recharge-box payment-method">
                    <div class="box-title">选择支付方式</div>
                    <div class="method-list">
                        <ul>
                            <li>
                                <div class="f-checkinline">
                                    <label class="c-checkbox"> <input type="radio" name="aa" value="1"><i></i><span><img src="images/icon_ali01.png">支付宝支付</span></label>
                                </div>
                            </li>
                            <li>
                                <div class="f-checkinline">
                                    <label class="c-checkbox"> <input type="radio" name="aa" value="1"><i></i><span><img src="images/icon_wechat01.png">微信支付</span></label>
                                </div>
                            </li>
                            <li>
                                <div class="f-checkinline">
                                    <label class="c-checkbox"> <input type="radio" name="aa" value="1"><i></i><span><img src="images/quickpay01.png">银联云闪付</span></label>
                                </div>
                            </li>
                        </ul>
                        <div class="sumbit">
                            <a href="#" class="sumbit-btn">立即充值</a>
                            <p>点击立即充值，即表示您已经同意<a href="#">《充值活动协议》</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "infoRecharge",
        props: {
            isEdit: {
                default: true
            }
        }
    }
</script>

<style scoped>

</style>