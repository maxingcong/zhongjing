<template>
    <div class="main-content">
        <div class="page mall-content">
            <div class="left-sidebar">
                <ul>
                    <!--                    <li class="active"><a href="#">全部商品</a></li>-->
                    <!--                    <li><a href="#">游戏手办</a></li>-->
                    <!--                    <li><a href="#">游戏皮肤</a></li>-->
                    <!--                    <li><a href="#">积分红包</a></li>-->
                    <router-link
                            class="menu-item"
                            v-for="(item, index) in menu.shoppingMall"
                            :key="index"
                            tag="li"
                            :to="{path: item.path + '/:'+ index}"
                            active-class="active">
                        <a>{{item.meta.title}}</a>
                    </router-link>
                </ul>
            </div>
            <div class="mall-box">
                <div class="box-head">
                    <div class="head-left"><img src="@/assets/images/mall/goto2.png"><h4><span>我的竞豆</span>888</h4></div>
                    <div class="head-right">
                        <ul>
                            <li><a href="mall-shoppingCart.html"><img
                                    src="@/assets/images/mall/shoppingCart.png">购物车</a></li>
                            <li><a href="#"><img src="@/assets/images/mall/icon_shop_exchange.png">兑换记录</a></li>
                        </ul>
                    </div>
                </div>
                <div class="box-body">
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "shoppingMall",
        computed: {
            ...mapState(['menu'])
        }
    }
</script>

<style scoped>

</style>