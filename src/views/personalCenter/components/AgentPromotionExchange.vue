<template>
    <div>
        <div class="pannel-body">
            <div class="agent-promotion-box">
                <form>
                    <div class="form-group">
                        <label class="form-label">选择方式</label>
                        <div class="form-content">
                            <ul class="payment-method">
                                <li><label class="d-radiobox"> <input type="radio" name="1"
                                                                      value="nn"><i></i><em></em><b><img
                                        src="@/assets/images/icon_wechat01.png">微信支付</b></label></li>
                                <li><label class="d-radiobox"> <input type="radio" name="2"
                                                                      value="nn"><i></i><em></em><b><img
                                        src="@/assets/images/icon_wechat01.png">微信支付</b></label></li>
                                <li><label class="d-radiobox"> <input type="radio" name="3"
                                                                      value="nn"><i></i><em></em><b><img
                                        src="@/assets/images/quickpay01.png">银联云闪付</b></label></li>
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
    import {queryAgentExchange, postAgentExchange} from '@/api/personalCenter'

    export default {
        name: "agent_promotion",
        created() {
            this.query()
        },
        methods: {
            query() {
                this.loading = true
                queryAgentExchange({}).then(res => {
                    if (res.success) {
                        this.data = res.data
                    } else {
                        this.$message.warning(res.data.msg || '')
                        // this.$message.warning('网路开小差')
                    }
                    this.loading = false
                }).catch(err => {
                    this.loading = false
                    console.log(err)
                })
            },
            submit() {
                if (!this.totalSum || !this.paymentType) {
                    this.isTotalSum = true
                    return
                }
                this.layoutApp.loading = true
                postAgentExchange({params: JSON.stringify(this.list)}).then(res => {
                    console.log(res)
                    this.$message.success('充值成功')
                    this.layoutApp.loading = false
                    this.$emit('success')
                }).catch(err => {
                    // this.message.warning('充值失败')
                    this.layoutApp.loading = false
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>