<template>
    <div class="main-content">
        <div class="page mall-content">
            <div class="left-sidebar">
                <ul>
                    <router-link
                            class="menu-item"
                            v-for="(item, index) in menu.shoppingMall"
                            :key="index"
                            tag="li"
                            :to="{path: item.path}"
                            active-class="active">
                        <a>{{item.meta.title}}</a>
                    </router-link>
                </ul>
            </div>
            <div class="mall-box">
                <!--<div class="box-head" v-if="auth && auth.token">-->
                <div class="box-head">
                    <div class="head-left"><img src="@/assets/images/mall/goto2.png"><h4><span>我的竞豆</span>{{auth.bean}}
                    </h4></div>
                    <div class="head-right">
                        <ul>
                            <li><a @click="$router.push({name: 'shoppinf_cart'})"><img
                                    src="@/assets/images/mall/shoppingCart.png">购物车</a></li>
                            <li><a @click="''"><img src="@/assets/images/mall/icon_shop_exchange.png">兑换记录</a></li>
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
  import {getCommodityCategory} from '@/api/shoppingMall'

  export default {
    name: "shoppingMall",
    computed: {
      ...mapState(['menu', 'auth'])
    },
    methods: {
      query() {
        getCommodityCategory({id: this.id}).then(res => {
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

<style scoped>

</style>