<template>
    <div class="wrap-container">
        <div class="main-content">
            <div class="login-pannel">
                <div class="pannel-left"><img src="@/assets/images/login&register/pic_login0.png"></div>
                <div class="pannel-right">
                    <div class="title">会员登录</div>
                    <el-form :model="form" :rules="rules" ref="form" :hide-required-asterisk="false">
                        <el-form-item prop="phone" class="form-group">
                            <el-input type="text" placeholder="请输入账号" v-model="form.phone">
                                <div class="form-content" slot="prefix" @click="getCode">
                                    <div class="icon"><img
                                            src="@/assets/images/login&register/user02.png"></div>
                                </div>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password" class="form-group">
                            <el-input type="password" placeholder="输入登录密码" v-model="form.password">
                                <div class="form-content" slot="prefix">
                                    <div class="icon"><img src="@/assets/images/login&register/mima02.png"></div>
                                </div>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="code" class="form-group verificationCode" label-width="80px" label="验证码">
                            <div class="form-content">
                                <el-input v-model="form.code"></el-input>
                                <div class="verificationCode-number" @click="getCode"><img
                                        :src="'data:image/jpg;base64,'+imgSrc"/></div>
                            </div>
                        </el-form-item>
                        <el-form-item prop="code" class="to-register">
                            <div class="forget-password">
                                <label class="ma-checkbox"><input type="checkbox" v-model="isAutomatic"
                                                                  value="1"><i></i><span>自动登录</span></label>
                                <p>|<a @click="$router.push({name: 'forget_password'})">忘记密码</a></p>
                            </div>
                            <a @click="$router.push({name: 'register'})" class="register">新会员注册</a>
                        </el-form-item>
                    </el-form>
                    <div class="sumbit">
                        <button class="btn btn-primary" v-loading="submitting" @click="onSubmit">登录</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {userLogin} from '@/api/user/login'
    import {queryMyInfo} from '@/api/personalCenter'

    // import md5 from 'js-md5'
    import {validMobile} from '@/utils/validator'
    import {queryImgCode} from '@/api/common'
    import {mapMutations} from 'vuex'
    import {getAuth} from '@/utils/local'

    export default {
        data() {
            return {
                submitting: false,
                isForget: false,
                rememberMe: true,
                imgSrc: '',
                isAutomatic: 1,
                form: {
                    userName: '',
                    password: '',
                    code: '',
                    uuid: ''
                },
                rules: {
                    userName: [
                        {
                            required: true,
                            validator: validMobile(),
                            trigger: 'blur'
                        }
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ],
                    code: [
                        {required: false, message: '请输入验证码', trigger: 'blur'},
                        {required: false, min: 4, max: 8, message: '验证码不正确', trigger: 'blur'}
                    ]
                }
            }
        },
        mounted() {
            this.getCode()
            let auth = getAuth()
            if (auth && auth !== 'undefined') {
                this.$router.push('home')
            }
        },
        methods: {
            ...mapMutations(
                {
                    setAuth: 'SET_AUTH',
                    setBean: 'setBean'
                }
            ),
            /**
             * 用户登录
             */
            onSubmit() {
                this.$refs.form.validate(valid => {
                    if (valid) {
                        this.login()
                    }
                })
            },
            getCode() {
                queryImgCode({}).then(res => {
                    console.log(res)
                    let data = res.data
                    if (res.succeed) {
                        this.imgCode = data.code || ''
                        this.imgSrc = data.img || ''
                        this.form.uuid = data.uuid || ''
                    } else {
                        this.$message.warning(data.msg || '请求失败，请重试')
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            login() {
                const that = this
                const {phone, password, code, uuid} = that.form
                let params = {
                    phone: phone,
                    password: password,//md5(password),
                    code,
                    uuid
                }
                that.submitting = true
                userLogin(params).then(res => {
                    if (res.succeed) {
                        that.setAuth({
                            'token': res.data.token
                        })
                        queryMyInfo({phone: phone}).then(res1 => {
                            if (res.succeed) {
                                that.setAuth({
                                    'phone': phone,
                                    'token': res.data.token,
                                    data: res1.data.data,
                                    img: '1.png'
                                })
                                this.setBean(res1.data && res1.data.data.bean || 0)
                                this.$router.push({name: '/'})
                            } else {
                                this.$message.warning(res1.data.data.msg || '')
                            }
                            this.loading = false
                        }).catch(err => {
                            this.loading = false
                            console.log(err)
                        })
                        console.log(params);
                    } else {
                        this.$message.warning(res.data.msg)
                    }
                    that.submitting = false
                }).catch(err => {
                    console.log(err);
                    that.submitting = false
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
    /deep/ .el-input--prefix .el-input__inner {
        text-indent: 46px !important;
    }

    /deep/ .el-form-item__label {
        text-align: left;
        font-size: 16px;
        color: #B3B3B3;

        &::before {
            content: '' !important;
            margin-right: 0 !important;
        }
    }

    /deep/ .el-form-item__content {
        margin-left: -5px !important;

        .el-input {
            flex: 1;
            margin-right: 10px;
        }
    }

    .register {
        position: absolute;
        right: -198px;
        top: 0;
    }

    .verificationCode-number {
        img {
            width: 100%;
            height: 48px;
        }
    }

    a:hover {
        cursor: pointer;
    }
</style>
