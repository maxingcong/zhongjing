<template>
    <div class="wrap-container">
        <div class="main-content">
            <div class="register-pannel">
                <div class="title">新用户注册</div>
                <el-form :model="form" :rules="rules" ref="form" @submit.native.prevent>
                    <el-form-item prop="phone">
                        <el-input type="text" placeholder="请输入账号" v-model="form.phone"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="输入登录密码" v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item prop="confirmPassword">
                        <el-input type="password" placeholder="再次输入登录密码" v-model="form.confirmPassword"></el-input>
                    </el-form-item>
                    <el-form-item prop="nickname">
                        <el-input type="text" placeholder="设置昵称" v-model="form.nickname"></el-input>
                    </el-form-item>
                    <el-form-item prop="code" class="register-form-item">
                        <el-input class="register-input" placeholder="请输入验证码"
                                  v-model="form.code">
                            <div slot="suffix">
                                <div class="verificationCode-number" @click="getCode"><img
                                        :src="'data:image/jpg;base64,'+imgSrc"/></div>
                            </div>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="phoneCode" class="register-form-item">
                        <el-input class="register-input" placeholder="手机验证码"
                                  v-model="form.phoneCode">
                            <div slot="suffix">
                                <button v-if="isCodeGeting" @click.stop="getPhotoCode" style="background:#FD5F5F;color:#fff" class="btn btn-default">获取验证码
                                </button>
                                <button v-if="!isCodeGeting" style="background：#ccc" class="btn btn-default" size="small">
                                    <countdown :end-time="new Date().getTime()+60*1000" @finish="finish">
                                        <template slot="process" slot-scope="{timeObj}">
                                            <span>重新获取</span>
                                            {{timeObj.s}}s
                                        </template>
                                    </countdown>
                                </button>
                            </div>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="invitationCode">
                        <el-input type="text" placeholder="输入邀请码" v-model="form.invitationCode">
                            <span slot="suffix" style="line-height: 50px;padding-right: 10px;font-size: 16px">选填</span>
                        </el-input>
                    </el-form-item>
                    <div class="forget-password">
                        <el-form-item prop="isCheck">
                            <label class="ma-checkbox"><input type="checkbox" v-model="form.isCheck"
                                                              value="true"><i></i><span>我已阅读并同意 <a
                                    @click="dialogVisible = true"
                                    style="color:#5E9DF1;">《中竞网用户服务协议》</a></span></label>
                        </el-form-item>
                    </div>
                </el-form>
                <div class="sumbit">
                    <button class="btn btn-primary registration-success-btn" :loading="submitting" @click="onSubmit">
                        注册
                    </button>
                </div>
            </div>
        </div>
        <ComDialog :dialogVisible="dialogVisible" @close="close">
            <div>
                <pdf :src="src" v-for="item in 10" :key="item"
                     :page="item"
                     @num-pages="10"/>
            </div>
        </ComDialog>
        <div class="modal registration-success" :class="{'modal-open': isModalOpen}">
            <div class="modal-content">
                <a @click="isModalOpen = false" class="modal-remove"><img
                        src="@/assets/images/login&register/close_icon.png"></a>
                <div class="modal-head">
                    <p>注册成功！</p>
                    <p>并已获得188竞豆</p>
                </div>
                <div class="modal-body">
                    <p>立即绑定邮箱</p>
                    <a @click="$router.push({name:'verify_email'})">马上验证邮箱</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {postRegistrt} from '@/api/user/register'
    import {queryImgCode, queryPhoneCode} from '@/api/common'
    import ComDialog from '@/components/ComDialog'
    import pdf from 'vue-pdf'
    import {mapMutations} from 'vuex'

    export default {
        components: {
            ComDialog,
            pdf
        },
        data() {
            return {
                src: 'http://cloud.pack.ininin.com/xy.pdf',
                submitting: false,
                isCodeGeting: true,
                dialogVisible: false,
                isModalOpen: false,
                imgCode: '',
                imgSrc: '',
                form: {
                    phone: '',
                    password: '',
                    confirmPassword: '',
                    nickname: '',
                    code: '',
                    phoneCode: '',
                    invitationCode: '',
                    uuid: ''
                },
                rules: {
                    phone: [
                        {
                            required: true,
                            message: "请输入手机号",
                            trigger: "blur"
                        },
                        {
                            type: "string",
                            pattern: /^1[3456789]\d{9}$/,
                            message: "请输入正确的手机号",
                            transform(value) {
                                return String(value).trim();
                            },
                            trigger: "blur"
                        }
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ],
                    confirmPassword: [
                        {required: true, message: '请确认密码', trigger: 'blur'},
                        {
                            validator: (rule, value, callback) => {
                                if (value !== this.form.password) {
                                    callback(new Error('两次密码不一致请重新输入'))
                                } else {
                                    callback()
                                }
                            },
                            trigger: 'blur'
                        }
                    ],
                    nickname: [
                        {required: true, message: '请输入昵称', trigger: 'blur'}
                    ],
                    code: [
                        {required: true, message: '请输入验证码', trigger: 'blur'},
                        {required: true, min: 4, max: 8, message: '验证码格式错误', trigger: 'blur'}
                    ],
                    phoneCode: [
                        {required: true, message: '请输入短信验证码', trigger: 'blur'},
                        {required: true, min: 4, max: 8, message: '验证码格式错误', trigger: 'blur'}
                    ],
                    isCheck: [
                        {required: true, message: '请仔细阅读并同意协议', trigger: 'blur'}
                    ]
                }
            }
        },
        mounted() {
            this.getCode()
        },
        methods: {
            ...mapMutations(
                {
                    setAuth: 'SET_AUTH'
                }
            ),
            finish() {
                this.isCodeGeting = true;
            },
            getPhotoCode() {
                if (this.form.phone) {
                    queryPhoneCode({phone: this.form.phone}).then(res => {
                        if (res.succeed) {
                            this.$message.success('发送成功')
                            // this.form.phoneCode = res.data || ''
                            this.isCodeGeting = false
                        } else {
                            console.log(res)
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                } else {
                    this.$message.warning('请输入手机号')
                }
            },
            getCode() {
                queryImgCode({}).then(res => {
                    console.log(res)
                    let data = res.data
                    if (res.succeed) {
                        this.imgCode = data.code || ''
                        this.imgSrc = data.img || ''
                        this.uuid = data.uuid || ''
                    } else {
                        this.$message.warning(data.msg || '请求失败，请重试')
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            close() {
                this.dialogVisible = false
            },

            onSubmit() {
                this.submitting = true
                this.$refs.form.validate(valid => {
                    if (valid) {
                        let formData = {...this.form}
                        formData.uuid = this.uuid || ''
                        postRegistrt(formData).then(res => {
                            console.log(res)
                            if (res.succeed) {
                                this.$message.success('注册成功')
                                this.isModalOpen = true
                                debugger
                                this.setAuth({'phone': this.form.phone, 'token': res.data.data})
                            } else {
                                this.$message.warning(res.data.msg || '注册失败')
                            }
                            this.submitting = false
                        }).catch(err => {
                            this.submitting = false
                            console.log(err)
                        })
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    /deep/ .register-form-item {
        .el-input__suffix {
            right: 0;
        }
    }

    .verificationCode-number {
        width: 150px;
        height: 50px;
        border: 1px solid #DCDFE6;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .register-input {
        flex: 1;
        margin-right: 12px;
    }

    .btn-default {
        width: 150px;
    }
</style>
