<template>
    <div class="main-content">
        <div class="page mall-content mall-details-content">
            <div class="mall-details-box">
                <div class="box-head">
                    <div class="box-left"><img style="width: 527px;height: 490px" :src="data.picture"></div>
                    <div class="box-right">
                        <h2>{{data.commodityName}}</h2>
                        <p>{{data.detail}}</p>
                        <div class="price">{{data.price}}<span>{{data.conversionPrice}}</span></div>
                        <div class="number">
                            <label>数&nbsp;&nbsp;&nbsp;&nbsp;量</label>
                            <div class="number-emendation">
                                <div class="icon" @click="quantity >0 && quantity--">-</div>
                                <div class="number-text">
                                    <el-input v-model="quantity" style="height: 34px;!important;"/>
                                </div>
                                <div class="icon" @click="quantity++ && quantity <= data.stock">+</div>
                            </div>
                            <span>(还剩{{data.stock}}件)</span>
                        </div>
                        <div class="exchange-mode">
                            <label>兑换方式</label>
                            <ul>
                                <li><label> <input type="radio" name="mode"
                                                   value="1"/>
                                    竞豆兑换<b>120</b>竞豆
                                </label></li>
                                <li><label> <input type="radio" name="mode"
                                                   value="2"/>
                                    现金兑换<b>￥100</b> 竞豆
                                </label></li>
                                <li><label> <input type="radio" name="mode"
                                                   value="3"/>
                                    现金+竞豆<b>￥60+60竞豆</b>
                                </label></li>
                            </ul>
                        </div>
                        <div class="sumbit">
                            <a @click="addCard" class="add-to-cart">加入购物车</a>
                            <a @click="exchange()">立即兑换</a>
                        </div>
                    </div>
                </div>
                <div class="box-body">
                    <div class="title"><h4>商品详情</h4></div>
                    <div class="details-text">
                        <ul>
                            <li>商品名称：{{data.commodityName}}</li>
                            <li>上架时间：2019-12-31</li>
                            <li>商城：剑灵</li>
                            <li>商品毛重：100G</li>
                        </ul>
                        <div class="commodity-details-img"><img :src="data.picture"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getmallDetails, postMallCard} from '@/api/shoppingMall'
    import {mapState} from 'vuex'

    export default {
        name: "shopping_details",
        data() {
            return {
                type: '',
                quantity: 0,
                data: {
                    // id: this.$route.query.id
                }
            }
        },
        computed: {
            ...mapState(['auth']),
            id: function () {
                return this.$route.query.id
            }

        },
        mounted() {
            this.query()
        },
        methods: {
            exchange() {
                this.isexchange = true
                this.addCard()
            },
            addCard() {
                if (this.auth && this.auth.info.token) {
                    console.log('添加购物车', this.auth);
                    if (!this.quantity) {
                        this.$message.warning('当前购买数量小于1')
                        return
                    }
                    postMallCard({id: this.id, count: this.quantity}).then(res => {
                        debugger
                        if (res.succeed) {
                            if (this.isexchange) {
                                this.$router.push({name: 'shoppinf_cart'})
                            } else {
                                this.$message.success('添加成功')
                            }
                        } else {
                            console.log(res);
                            this.$message.warning(res.data.msg || '')
                            // this.$message.warning('网路开小差')
                        }
                        this.loading = false
                    }).catch(err => {
                        this.loading = false
                        console.log(err)
                    })
                } else {
                    this.$message.warning('请登录')
                    this.$router.push({name: 'login'})
                }
            },
            query() {
                getmallDetails({id: this.id}).then(res => {
                    if (res.succeed) {
                        this.data = res.data && res.data.data || {}
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

<style scoped lang="less">
    .number-emendation {
        .number-text {
            /deep/ .el-input {
                height: 34px;
                line-height: 36px;
                display: flex;

                /deep/ .el-input__inner {
                    height: 34px !important;
                    border: none;
                    text-align: center;
                    line-height: 36px !important;
                }
            }
        }
    }
</style>