<template>
    <div class="wrap-container">
        <div class="main-content">
            <div class="register-pannel">
                <div class="title">忘记密码</div>
                <el-form :model="form" :rules="rules" ref="form">
                    <el-form-item prop="phone" class="form-group">
                        <el-input type="text" placeholder="请输入账号" v-model="form.phone">
                        </el-input>
                    </el-form-item>
                    <div class="form-group verificationCode">
                        <div class="form-content">
                            <input type="text" class="form-control" value="" v-model="form.code"
                                   placeholder="输入验证码">
                            <button v-if="isCodeGeting" @click="getPhotoCode" class="btn btn-default btn-private">
                                获取验证码
                            </button>
                            <button v-else class="btn btn-default btn-private" size="small">
                                <countdown :end-time="new Date().getTime()+60*1000" @finish="isCodeGeting = true">
                                    <template slot="process" slot-scope="{timeObj}">
                                        <span>重新获取</span>
                                        ({{timeObj.s}}s)
                                    </template>
                                </countdown>
                            </button>
                        </div>
                    </div>
                </el-form>
                <div class="sumbit">
                    <button class="btn btn-default" @click="onSubmit"
                            :class="{'btn-private': form.phone && form.code}">
                        确认
                    </button>
                </div>
                <p class="verify-item" v-if="verifyText"><span class="verify-icon">*</span><span>{{verifyText}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {postForget} from '@/api/user/forgetPassword'
    import {validMobile} from '@/utils/validator'
    import {queryPhoneCode} from '@/api/common'
    

    export default {
        data() {
            return {
                submitting: false,
                isForget: false,
                rememberMe: true,
                isCodeGeting: true,
                verifyText: '',
                form: {
                    userName: '',
                    password: ''
                },
                rules: {
                    phone: [
                        {
                            required: true,
                            validator: validMobile(),
                            trigger: 'blur'
                        }
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                }
            }
        },
        mounted() {
        },
        methods: {
            getPhotoCode() {
                this.$refs.form.validate(valid => {
                    if (valid) {
                        this.isCodeGeting = false
                        queryPhoneCode({photo: this.form.phone}).then(res => {
                            console.log(res)
                        }).catch(err => {
                            console.log(err)
                        })
                    }
                })
            },
            onSubmit() {
                this.$refs.form.validate(valid => {
                    if (valid && this.form.code) {
                        this.login()
                    }
                })
            },
            login() {
                const that = this
                const {phone, code} = that.form
                let params = {
                    phone: phone,
                    code
                }
                postForget(params).then(res => {
                    console.log(res)
                    if (res.succeed) {
                        console.log(res)
                    } else {
                        this.verifyText = res.data.msg || ''
                    }
                    debugger
                }).catch(err => {
                    console.log(err)
                    that.$message.error(err.data.msg)
                })
            },
            /**
             * 忘记密码
             */
            forget() {
                this.isForget = true
                this.$refs.forgetPassword.load(this.form.userName)
            },
            setLocalUserName() {
                console.log(123)
            }
        }
    }
</script>

<style lang="less" scoped>
    .btn-private {
        background: #FD5F5F !important;
        color: #fff !important;
    }

    .verify-item {
        display: flex;
        height: 16px;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        span {
            color: #B3B3B3;
        }
    }

    .verify-icon {
        padding-top: 4px;
        color: #F56C6C !important;
        margin-right: 5px;
    }
</style>
