<template>
    <div>
        <div class="pannel-body">
            <div class="agent-promotion-box">
                <form>
                    <div class="form-group">
                        <label class="form-label">选择方式</label>
                        <div class="form-content">
                            <ul class="payment-method">
                                <li><label class="d-radiobox"> <input type="radio" name="tdr7" value="nn"><i></i><em></em><b><img src="images/icon_wechat01.png">微信支付</b></label></li>
                                <li><label class="d-radiobox"> <input type="radio" name="tdr7" value="nn"><i></i><em></em><b><img src="images/icon_wechat01.png">微信支付</b></label></li>
                                <li><label class="d-radiobox"> <input type="radio" name="tdr7" value="nn"><i></i><em></em><b><img src="images/quickpay01.png">银联云闪付</b></label></li>
                            </ul>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">账户余额：</label>
                        <div class="form-content">
                            <input type="text" class="form-control" value="¥138.00">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">可提现：</label>
                        <div class="form-content">
                            <input type="text" class="form-control" value="¥98.00">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">提现金额：</label>
                        <div class="form-content">
                            <input type="text" class="form-control" value="" placeholder="请输入需要提现的金额">
                        </div>
                    </div>
                    <div class="sumbit"><a href="#">确认</a></div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "agent_promotion",
        created() {
            this.query()
        },
        methods: {
            query() {
                console.log('home')
            }
        }
    }
</script>

<style scoped>

</style>