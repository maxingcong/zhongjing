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
                            <div class="box-right"><a @click="confirmorder">确认订单</a></div>
                        </div>
                    </div>
                </div>
                <el-dialog
                  title="支付"
                  :visible.sync="dialogVisible"
                  width="600px">
                  <div v-if="!iscode">
                     <el-form  status-icon ref="ruleForm" label-width="100px">
                      <el-form-item label="支付类型">
                          <ul style="display: flex">
                                      <li style="flex:0 0 32%"><label class="d-radiobox"> <input type="radio" name="tdr7" v-model="form.payMode"
                                                                            value="1"><i></i><em></em><b>
                                          现金支付<b>{{payDate.totalPrice}}</b></b></label></li>
                                      <li style="flex:0 0 32%"><label class="d-radiobox"> <input type="radio" name="tdr7" v-model="form.payMode"
                                                                            value="2"><i></i><em></em><b>
                                          竞豆支付<b>￥{{payDate.totalBean}}</b> 竞豆</b></label></li>
                                          <li style="flex:0 0 32%"><label class="d-radiobox"> <input type="radio" name="tdr7" v-model="form.payMode"
                                                                            value="3"><i></i><em></em><b>
                                          组合支付<b>{{payDate.totalBean}}</b> 竞豆</b></label></li>
                                </ul>
                          </el-form-item>
                          <el-form-item label="支付方式" v-if="form.payMode && form.payMode != 2">
                                <ul style="display: flex">
                                            <li style="flex:0 0 32%"><label class="d-radiobox"> <input type="radio" name="tdr1" v-model="form.payType"
                                                                                  value="1"><i></i><em></em><b>
                                                微信<b></b></b></label></li>
                                            <li style="flex:0 0 32%"><label class="d-radiobox"> <input type="radio" name="tdr1" v-model="form.payType"
                                                                                  value="2"><i></i><em></em><b>
                                                支付宝<b></b></b></label></li>
                                        </ul>
                          </el-form-item>
                          <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="passwords" autocomplete="off"></el-input>
                          </el-form-item>
                       </el-form>
                  </div>
                  <div v-else>
                    <el-form>
                       <el-form-item label="请扫码支付">
                         <div style="width:100%;height:100%;display:flex;justify-content: center;">
                            <canvas  width='100' height= '100px' ref="code"></canvas>
                          </div>
                       </el-form-item>
                    </el-form>
                  </div>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" v-if="!iscode" @click="submit">确 定 支 付</el-button>
                  </span>
                </el-dialog>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {getmallCard,deleteCard,postPay,confirmOrder} from '@/api/shoppingMall'
  import QRCode from 'qrcode'

  export default {
    data() {
      return {
        type: '',
        list: [],
        ads: {},
        address: {},
        dialogVisible:false,
        passwords: '',
        iscode:false,
        payDate: {},
        form:{
          message:'',
          payType: 0,
          payMode: ''
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
      confirmorder(){
         let list = []
          this.list.forEach(v=>{
          if(v.isCheck){
            list.push({commodityId:v.commodityId,count:v.count})
          }
        })
        if(!list.length){
          this.$message.warning('请勾选付款商品')
          return
        }
        if(!this.address || !this.address.id){
          this.$message.warning('请选择收获地址')
          return
        }
         this.dialogVisible = true
         this.iscode = false
         confirmOrder({cartVos:[...list],
          addressId:this.address.id,
          message:this.form.message
        }).then(res => {
          if (res.succeed) {
            this.payDate = res.data.data || {}
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
      submit(){
        if(!this.form.payMode){
          this.$message.warning('请选择支付类型')
         return
        }else if(this.form.payMode != 2 && !this.form.payType){
          this.$message.warning('请选择支付方式')
          return
        }else if(!this.passwords){
          this.$message.warning('请输入密码')
            return
        }
        postPay({payType:this.form.payMode == 2 ? 0 : this.form.payType,
          password:this.passwords,
          payMode:this.form.payMode,
          orderSn:this.payDate.orderSn
        }).then(res => {
          if (res.succeed) {
            if(res.code == 200 && escape(res.msg).indexOf( "%u" )>0){
              this.$message.success(res.data && res.data.msg || '')
            }else{
              console.log(res);
              this.iscode = true
              let that =this
              that.$nextTick(()=>{
                try{
                  QRCode.toCanvas(that.$refs.code, res.data.msg, function (error) {
                    console.error(error)
                    that.$message.warning(error)
                  })
                }catch(e){
                  console.log(e)
                }
              })
            }
          } else {
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