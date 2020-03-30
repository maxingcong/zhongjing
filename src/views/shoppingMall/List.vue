<template>
    <div class="all-merchandise">
        <div class="title">
            <div class="title-left">全部商品</div>
            <div class="title-right">
                <ul>
                    <li>热度<a href=""><img src="@/assets/images/mall/paixu1.png"></a></li>
                    <li>价格<a href=""><img src="@/assets/images/mall/paixu.png"></a></li>
                </ul>
            </div>
        </div>
        <div class="merchandise-list">
            <ul>
                <li v-for="item in list" :key="item.id">
                    <a @click="$router.push({name: 'shopping_details',query:{'id': item.id}})">
                        <!--                        <div class="merchandise-img"><img :src="item.picture"></div>-->
                        <div class="merchandise-img"><img style="width: 208px;height: 138px" :src="item.picture"></div>
                        <div class="merchandise-text">{{item.commodityName}}</div>
                        <div class="merchandise-price">
                            <div class="beans-number"><img src="@/assets/images/mall/icon_bean02.png">{{item.price}}
                            </div>
                            <div class="add-to-cart" @click="addCard"><img src="@/assets/images/mall/shop.png"></div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import {getmallList, postMallCard} from '@/api/shoppingMall'
  import {mapState} from 'vuex'

  export default {
    name: "shoppingList",
    data() {
      return {
        categoryId: 1,
        list: []
      }
    },
    computed: {
      ...mapState(['auth'])
    },
    watch: {
      '$route'(e) {
        this.categoryId = e.params.post_id || ''
        this.query()
      }
    },
    mounted() {
      this.query()
    },
    methods: {
      addCard() {
        if (this.auth && this.auth.info.token) {
          console.log('添加购物车', this.auth);
          postMallCard({id: this.id}).then(res => {
            if (res.succeed) {
              this.$message.success('添加成功')
              this.$router.push({name: 'shoppinf_cart'})
            } else {
              console.log(res);
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
        getmallList({categoryId: this.categoryId || ''}).then(res => {
          if (res.succeed) {
            this.list = res.data && res.data.rows || []
          } else {
            console.log(res)
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