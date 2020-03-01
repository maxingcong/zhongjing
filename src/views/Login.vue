<template>
    <div class="login-page">
        <div class="login-wrapper">
            <div class="login">
                <h3>账号密码登录</h3>
                <el-form ref="login" :model="form" :rules="rules">
                    <el-form-item prop="userName">
                        <el-input
                                type="text"
                                v-model.trim="form.userName"
                                auto-complete="off"
                                placeholder="请输入账号"
                                maxlength="11"
                                @keyup.enter.native="onSubmit"
                        />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                                type="password"
                                v-model.trim="form.password"
                                auto-complete="off"
                                placeholder="请输入密码"
                                @keyup.enter.native="onSubmit"
                        />
                    </el-form-item>
                    <div class="login-other">
                        <el-checkbox v-model="rememberMe" class="remember">自动登录</el-checkbox>
                        <!-- <span class="forget-password" @click="forget">忘记密码</span> -->
                    </div>
                    <el-form-item align="center">
                        <el-button
                                class="login-btn"
                                type="primary"
                                @click="onSubmit"
                                :loading="submitting"
                        >登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import {userLogin} from '@/api/user/login'
    import md5 from 'js-md5'
    import {validMobile} from '@/utils/validator'

    export default {
        data() {
            return {
                submitting: false,
                isForget: false,
                rememberMe: true,
                form: {
                    userName: '',
                    password: ''
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
                    ]
                }
            }
        },
        mounted() {
        },
        methods: {
            /**
             * 用户登录
             */
            onSubmit() {
                this.$refs.login.validate(valid => {
                    if (valid) {
                        this.login()
                    }
                })
            },
            login() {
                const that = this
                const {userName, password} = that.form
                let params = {
                    userName: userName,
                    password: md5(md5(password))
                }
                that.submitting = true
                userLogin(params, [data => {
                    if (data) {
                        const user = data.user || {}
                        data.user.token = data.token
                        if (!user.roleIds || !user.permissionIds) {
                            that.$message.closeAll()
                            that.$message.warning('该账号没有角色或权限')
                            that.submitting = false
                        } else {
                            that.$store.dispatch('initUser', data.user).then(path => {
                                that.submitting = false
                                that.$router.push(path)
                            }).catch(() => {
                                that.submitting = false
                                that.$message.closeAll()
                                that.$message.warning('没有可访问的资源')
                            })
                        }
                    } else {
                        that.submitting = false
                    }
                }])
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
</style>
