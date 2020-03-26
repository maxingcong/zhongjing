<template>
    <div class="wrap-container">
        <div class="main-content">
            <div class="register-pannel">
                <div class="title">验证邮箱</div>
                <el-form :model="form" :rules="rules" ref="form">
                    <el-form-item prop="email" class="form-group">
                        <el-input type="text" placeholder="请输入邮箱" v-model="form.email">
                        </el-input>
                    </el-form-item>
                    <div class="form-group verificationCode">
                        <div class="form-content">
                            <input type="text" class="form-control" v-model="form.code"
                                   placeholder="输入验证码">
                            <button v-if="isCodeGeting" @click="queryEmail" class="btn btn-default">
                                获取验证码
                            </button>
                            <button v-else class="btn btn-default" size="small">
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
                    <button class="btn btn-default" @click="onSubmit" :class="{'btn-private': form.email && form.code}">
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
    // import {validMobile} from '@/utils/validator'
    import {queryEmailCode} from '@/api/common'

    export default {
        data() {
            return {
                submitting: false,
                isForget: false,
                rememberMe: true,
                isCodeGeting: true,
                verifyText: '',
                form: {
                    email: '',
                    code: ''
                },
                rules: {
                    code: [{
                        required: true,
                        message: '请输入验证码',
                        trigger: 'blur'
                    }],
                    email: [
                        {
                            required: true,
                            message: '请输入验邮箱',
                            validator: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        mounted() {
        },
        methods: {
            queryEmail() {
                this.$refs.form.validate(valid => {
                    if (valid) {
                        this.isCodeGeting = false
                        queryEmailCode({email: this.form.email}).then(res => {
                            console.log(res)
                        }).catch(err => {
                            console.log(err)
                        })
                    }
                })
            },
            onSubmit() {
                this.$refs.form.validate(valid => {
                    if (valid) {
                        this.login()
                    }
                })
            },
            login() {
                const that = this
                const {email, code} = that.form
                let params = {
                    email: email,
                    code
                }
                postForget(params).then(res => {
                    console.log(res)
                    if (res.succeed) {
                        that.$router.push({name: 'home'})
                    } else {
                        that.$message.warning(res.data.msg || '网络错误')
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
        /*&::before {*/
        /*content: '*';*/
        /*color: #F56C6C;*/
        /*}*/
    }
</style>
