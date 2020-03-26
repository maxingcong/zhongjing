<template>
    <div class="main-content">
        <div class="page mall-content mall-details-content">
            <div class="mall-box add-address-box">
                <div class="box-head" v-if="isEdit || isAdd"><h3>{{isEdit ? '修改' : '新增'}}收货信息</h3></div>
                <div class="box-body" v-if="isEdit || isAdd">
                    <el-form ref="form" :model="form" :rules="rules" label-width="80px" label-position="left">
                        <el-form-item label="联系人" prop="name">
                            <el-input v-model="form.name" placeholder="输入您想修改的名称"/>
                        </el-form-item>
                        <el-form-item label="手机号" prop="phone">
                            <el-input v-model="form.phone" placeholder="输入您想修改的手机号"/>
                        </el-form-item>
                        <el-form-item label="地址信息" prop="region">
                            <el-cascader
                                    style="width:100%"
                                    ref="cascader"
                                    placeholder="请选择省/市/区/街道"
                                    v-model="form.region"
                                    :options="addressList"
                                    :props="props"
                                    clearable
                                    @change="handleAreaChange"
                            ></el-cascader>
                        </el-form-item>
                        <el-form-item label="详细地址" prop="detailAddress">
                            <el-input type="textarea" v-model="form.detailAddress"
                                      placeholder="请输入详细地址信息，如道路、门牌号、小区、楼栋号、单元等信息"/>
                        </el-form-item>
                        <div class="form-group">
                            <div class="form-label"></div>
                            <div class="form-content"><a @click="handAddress" class="btn">保存</a></div>
                        </div>
                    </el-form>
                </div>
                <div class="saved-address" v-loading="loading">
                    <div class="title"><h5>已保存收货地址</h5><a @click="isAdd = true">+新增收货地址</a>
                    </div>
                    <table class="table-primary">
                        <thead>
                        <tr>
                            <th>收货人</th>
                            <th>收货地址</th>
                            <th>联系电话</th>
                            <th>操作</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item in list" :key="item.id">
                            <td>{{item.name}}</td>
                            <td>{{item.province}}|{{item.city}}|{{item.region}} | {{item.detailAddress}}</td>
                            <td>{{item.phone}}</td>
                            <td>
                                <div class="edit-address"><a @click="edit(item)">修改</a> | <a
                                        @click="remove(item)">删除</a>
                                </div>
                            </td>
                            <td class="text-right"><span class="text-warning" v-if="item.defaultStatus"
                                                         @click="defaultAddress(item)">默认地址</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getAddressList, postyAddress, removeAddress, defaultAddress} from '@/api/shoppingMall'

    export default {
        name: "edit_address",
        data() {
            const addressList = this.$location.data(3).options
            return {
                list: [],
                isAdd: false,
                loading: false,
                isEdit: '',
                addressList,
                form: {
                    name: '',
                    phone: '',
                    defaultStatus: '',
                    postCode: '',
                    region: [],
                    address: '',
                    province: '',
                    city: '',
                    detailAddress: ''
                },
                props: {
                    expandTrigger: 'hover'
                },
                rules: {
                    name: [{
                        required: true,
                        message: '请输入联系人姓名',
                        trigger: 'blur'
                    }],
                    phone: [{
                        required: true,
                        pattern: /^1[3456789]\d{9}$/,
                        message: "请输入正确的手机号",
                        transform(value) {
                            return String(value).trim();
                        },
                        trigger: "blur"
                    }],
                    region: [{
                        required: true,
                        message: '请选择省市区',
                        trigger: 'blur'
                    }],
                    detailAddress: [{
                        required: true,
                        message: '请输入详细地址',
                        trigger: 'blur'
                    }]
                }
            }
        },
        computed: {
            type: function () {
                return this.$route.params.type || ''
            },
            ads: function () {
                return this.$route.params.ads || {}
            }
        },
        watch: {
            ads: function (e) {
                this.form = {...e}
            },
            type: function () {
                this.isEdit = 'edit'
            }
        },
        mounted() {
            this.query()
        },
        methods: {
            handleAreaChange(e) {
                this.form.address = e[0]
                this.form.province = e[1]
                this.form.city = e[2]
            },
            edit(e) {
                this.isEdit = 'edit'
                this.form = {...e}
            },
            handAddress() {
                if (!this.loading) {
                    this.$refs.form.validate(valid => {
                        if (valid) {
                            postyAddress(this.form).then(res => {
                                if (res.succeed) {
                                    debugger
                                    this.$message.success(this.isEdit ? '修改成功' : '添加成功')
                                } else {
                                    console.log(res);
                                    this.$message.warning(res.data.msg || '')
                                }
                                this.loading = false
                                this.query()
                            }).catch(err => {
                                this.loading = false
                                console.log(err)
                            })
                        }
                    })
                }
            },
            remove(e) {
                removeAddress({id: e.id}).then(res => {
                    if (res.succeed) {
                        // debugger
                        this.$message.success('删除成功')
                    } else {
                        console.log(res);
                        this.$message.warning(res.data.msg || '')
                        // this.$message.warning('网路开小差')
                    }
                    this.loading = false
                    this.query()
                }).catch(err => {
                    this.loading = false
                    console.log(err)
                })
            },
            defaultAddress(e) {
                defaultAddress({id: e.id}).then(res => {
                    if (res.succeed) {
                        // debugger
                        this.$message.success('设置成功')
                    } else {
                        this.$message.warning(res.data.msg || '')
                        console.log(res);
                        // this.$message.warning('网路开小差')
                    }
                    this.query()
                    this.loading = false
                }).catch(err => {
                    this.loading = false
                    console.log(err)
                })
            },
            query() {
                getAddressList({}).then(res => {
                    if (res.succeed) {
                        // debugger
                        this.list = res.data && res.data.rows || []
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
            }
        }
    }
</script>

<style scoped>

</style>