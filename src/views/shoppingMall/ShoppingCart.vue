<template>
    <div class="main-content">
        <div class="page mall-content mall-details-content">
            <div class="mall-box">
                <div class="box-head">
                    <div class="head-left">
                        <div class="send-address">
                            <img src="@/assets/images/mall/address.png">
                            <span>寄送至</span>
                            <h4>{{address.name}}</h4>
                            <p>{{address.province}}|{{address.city}}|{{address.region}} | {{address.detailAddress}}</p>
                            <p>{{address.phone}}</p>
                        </div>
                    </div>
                    <div class="head-right">
                        <ul>
                            <li><a @click="$router.push({name:'edit_address',params: {type:'edit',address: ads}})"
                                   class="edit-address"><i
                                    class="mdi-set mdi-square-edit-outline mr5"></i>修改本地址</a></li>
                        </ul>
                    </div>
                </div>
                <div class="box-body">
                    <div class="shoppingCart-content">
                        <div class="shoppingCart-list list-title">
                            <div class="select-icon"></div>
                            <div class="commodity-information">商品信息</div>
                            <div class="selling-price">售价</div>
                            <div class="quantity">数量</div>
                            <div class="operation">操作</div>
                        </div>
                        <div class="shoppingCart-list" v-for="(item , index) in list" :key="item.id">
                            <div class="select-icon">
                                <label class="ma-checkbox"><input type="checkbox" @change="calculation()" v-model="item.isCheck"><i></i><span></span></label>
                            </div>
                            <div class="commodity-information">
                                <div class="commodity-img"><img :src="item.picture"></div>
                                <div class="commodity-name">{{item.commodityName}}</div>
                            </div>
                            <div class="selling-price">￥{{item.price}}</div>
                            <div class="quantity">
                                <div class="number-emendation">
                                    <div class="icon" @click="item.count && item.count > 1 && item.count--,calculation()">-</div>
                                    <div class="number-text">{{item.count}}</div>
                                    <div class="icon" @click="item.count && item.count++,calculation()">+</div>
                                </div>
                            </div>
                            <div class="operation"><a @click="list.splice(index,1),deleteList(item.id)">删除</a></div>
                        </div>
                        <div class="selectAll-box">
                            <div class="box-head">
                                <div class="head-left"><label class="ma-checkbox"><input type="checkbox"
                                                                                          v-model="checkAll"
                                                                                         @change="calculation()"><i></i><span>全选</span></label>
                                </div>
                                <div class="head-right">总价： <b>￥{{totalPrice}}元</b></div>
                            </div>
                            <div class="box-body">
                                <p><span>留言：</span>买家留言 ，选填</p>
                                <textarea v-model="form.message" style="width:600px;margin-top:20px"></textarea>
                            </div>
                        </div>
                        <div class="paymentMethod-box">
                            <div class="box-left">
                                <div class="title">确认订单</div>
                            </div>
                            <div class="box-right"><a @click="dialogVisible = true">确认订单</a></div>
                        </div>
                    </div>
                </div>
                <el-dialog
                  title="确认订单"
                  :visible.sync="dialogVisible"
                  width="600px">
                <el-form  status-icon ref="ruleForm" label-width="100px">
                    <el-form-item label="支付方式">
                        <ul style="display: flex">
                                    <li style="flex:0 0 32%"><label class="d-radiobox"> <input type="radio" name="tdr7" v-model="form.payType"
                                                                          value="0"><i></i><em></em><b>
                                        竞豆兑换<b></b></b></label></li>
                                    <li style="flex:0 0 32%"><label class="d-radiobox"> <input type="radio" name="tdr7" v-model="form.payType"
                                                                          value="1"><i></i><em></em><b>
                                        现金兑换<b>￥100</b> 竞豆</b></label></li>
                                </ul>
                  </el-form-item>
                  <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="passwords" autocomplete="off"></el-input>
                  </el-form-item>
                </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="submit">确 定 支 付</el-button>
                  </span>
                </el-dialog>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {getmallCard,deleteCard,postPay} from '@/api/shoppingMall'

  export default {
    data() {
      return {
        type: '',
        list: [],
        ads: {},
        address: {},
        dialogVisible:false,
        passwords: '',
        form:{
          message:'',
          payType: null
        },
        totalPrice: 0,
        checkAll: false
      }
    },
    watch: {},
    mounted() {
      this.query()
    },
    computed: {
      ...mapState(['auth'])
    },
    methods: {
      submit(){
        let list = []
          this.list.forEach(v=>{
          if(v.isCheck){
            list.push({id:v.id,num:v.count})
          }
        })
        if(!list.length){
          this.$message.warning('请勾选付款商品')
          return
        }

        if(!this.form.payType && this.form.payType != 0){
          this.$message.warning('请选择付款方式')
          return
        }
        if(!this.address || !this.address.id){
          this.$message.warning('请选择收获地址')
          return
        }
        postPay({
          payType:this.form.payType,
          checkList: list,
          addressId:this.address.id,
          message:this.form.message
        }).then(res => {
          if (res.succeed) {
            this.$message.succeed('删除成功')
            this.calculation()
          } else {
            console.log(res);
            this.$message.warning(res.data && res.data.msg || '')
          }
          this.loading = false
        }).catch(err => {
          this.loading = false
          console.log(err)
        })

      },
      calculation() {
        let totalPrice = 0
        this.list.forEach(v=>{
          if(this.checkAll){
            v.isCheck = true
          }
          if(v.count && v.price && v.isCheck){
             let num = (v.count * v.price).toFixed(2)
             totalPrice+=Number(num)
          }
        })
        this.totalPrice = totalPrice
      },
      deleteList(id){
        deleteCard({checkList: id}).then(res => {
          if (res.succeed) {
            this.$message.success('删除成功')
            this.calculation()
          } else {
            console.log(res);
            this.$message.warning(res.data && res.data.msg || '')
          }
          this.loading = false
        }).catch(err => {
          this.loading = false
          console.log(err)
        })
      },
      query() {
        getmallCard({}).then(res => {
          if (res.succeed) {
            this.list = res.data && res.data.data.cart || []
            this.address = res.data.data.address.rows[0] || {}
            this.calculation()
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
ul li{
  flex: 0 0 32%;
}
</style>