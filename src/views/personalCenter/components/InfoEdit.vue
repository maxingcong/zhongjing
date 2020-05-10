<template>
    <div>
        <div v-if="isEdit" class="pannel">
            <div class="pannel-head">
                <ul>
                    <li class="active"><a href="#">我的关注</a></li>
                </ul>
            </div>
            <div class="pannel-body">
                <div class="personal-follow-list">
                    <ul>
                        <li @click="$router.push({name:'my_concern'})">
                            <img src="@/assets/images/bisai.png">
                            <span>比赛</span>
                        </li>
                        <li @click="$router.push({name:'concerned_game'})">
                            <img src="@/assets/images/zhandui.png">
                            <span>战队</span>
                        </li>
                        <li @click="$router.push({name:'concerned_player'})">
                            <img src="@/assets/images/xuanshou.png">
                            <span>选手</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-else class="pannel">
            <div class="pannel-body">
                <div class="edit-box">
                    <div class="box-head"><h5>修改头像</h5></div>
                    <div class="box-body">
                        <div class="head-portrait-edit" style="margin-bottom:75px">
                            <el-upload
                                    class="avatar-uploader"
                                    accept="image/jpeg,image/jpg,image/png"
                                    action="/api/api/file"
                                    :headers="{'Authorization': this.auth.info.token}"
                                    ref="upload"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <a><i class="mdi-set mdi-camera"></i></a></div>
                        <a @click="editImg" class="edit-img">确 认</a>
                    </div>
                </div>
                <div class="edit-box">
                    <div class="box-head"
                    ><h5>修改名称</h5></div>
                    <div class="box-body">
                        <form style="align-items: normal;">
                            <div class="form-left">
                                <div class="form-group">
                                    <div class="form-content">
                                        <div class="form-group">
                                            <div class="form-content">
                                                <input type="text" class="form-control" v-model="name"
                                                       placeholder="输入你想修改的昵称"/>
                                            </div>
                                        </div>
                                        <div class="form-group validation-code">
                                            <div class="form-content">
                                                <a @click="editName" class="sumbit-btn a-position">确 认</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--                            <div class="form-right"><a @click="submit" class="sumbit-btn">确定</a></div>-->
                        </form>
                    </div>
                </div>
                <div class="edit-box">
                    <div class="box-head"><h5>修改手机</h5></div>
                    <div class="box-body">
                        <form>
                            <div class="form-left">
                                <div class="form-group">
                                    <div class="form-content">
                                        <input type="text" class="form-control" v-model="phone.phone"
                                               placeholder="输入原绑定手机号"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-content">
                                        <input type="text" class="form-control" v-model="phone.newPhone"
                                               placeholder="输入新的手机号">
                                    </div>
                                </div>
                                <div class="form-group validation-code">
                                    <div class="form-content">
                                        <input type="text" class="form-control" v-model="phone.code"
                                               placeholder="输入验证码"/>
                                        <countdown style="background：#ccc" v-if="!isCodeGeting" :end-time="new Date().getTime()+60*1000"
                                                   @finish="finish">
                                            <template slot="process" slot-scope="{timeObj}">
                                                <a class="sumbit-btn" style="background: #ccc !important;"> <span>重新获取</span>
                                                    ({{timeObj.s}}s)</a>
                                            </template>
                                        </countdown>
                                        <a v-if="isCodeGeting" @click="queryCode('phone')" class="sumbit-btn">获取验证码</a>
                                    </div>
                                </div>
                                <div class="form-group validation-code">
                                    <div class="form-content">
                                        <a @click="submitPhone" class="sumbit-btn a-position">确定</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="edit-box">
                    <div class="box-head"><h5>修改邮箱</h5></div>
                    <div class="box-body">
                        <div v-if="!email.email" style="font-size:18px;color:red;margin:10px 0">!绑定邮箱获取更多福利</div>
                        <form>
                            <div class="form-left">
                                <div class="form-group">
                                    <div class="form-content">
                                        <input type="text" class="form-control" v-model="email.email"
                                               placeholder="输入原绑定邮箱">
                                    </div>
                                </div>
                                <!--<div class="form-group validation-code">-->
                                <!--<div class="form-content">-->
                                <!--<input type="email" class="form-control" v-model="email.code"-->
                                <!--placeholder="输入验证码"/>-->
                                <!--<countdown v-if="!isEmailCode" :end-time="new Date().getTime()+60*1000"-->
                                <!--@finish="finishEmail">-->
                                <!--<template slot="process" slot-scope="{timeObj}">-->
                                <!--<a class="sumbit-btn"><span>重新获取</span>-->
                                <!--({{timeObj.s}}s)</a>-->
                                <!--</template>-->
                                <!--</countdown>-->
                                <!--<a v-if="isEmailCode" @click="queryCode('email')" class="sumbit-btn">获取验证码</a>-->
                                <!--</div>-->
                                <!--</div>-->
                                <div class="form-group">
                                    <div class="form-content">
                                        <input type="text" class="form-control" v-model="email.newEmail"
                                               placeholder="输入新的邮箱"/>
                                    </div>
                                </div>
                                <div class="form-group validation-code">
                                    <div class="form-content">
                                        <input type="text" class="form-control" v-model="email.newCode"
                                               placeholder="输入验证码"/>
                                        <countdown v-if="!isNewEmailCode" :end-time="new Date().getTime()+60*1000"
                                                   @finish="finishNewEmail">
                                            <template slot="process" slot-scope="{timeObj}" class="sumbit-btn">
                                                <a class="sumbit-btn" style="background: #ccc !important;"><span>重新获取</span>
                                                    ({{timeObj.s}}s)</a>
                                            </template>
                                        </countdown>
                                        <a v-if="isNewEmailCode" @click="queryCode('newEmail')"
                                           class="sumbit-btn">获取验证码</a>
                                    </div>
                                </div>
                                <div class="form-group validation-code">
                                    <div class="form-content">
                                        <a @click="submitEmail" class="sumbit-btn a-position">确定</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import {
        queryMyInfo,
        postMyInfoImg,
        postMyInfoPhoto,
        postMyInfoEmail
    } from '@/api/personalCenter'
    import {queryEmailCode, queryPhoneCode} from '@/api/common'
    import {mapState} from "vuex";

    export default {
        name: "infoEdit",
        data() {
            return {
                data: {},
                imageUrl: '',
                name: '',
                isCodeGeting: true,
                isEmailCode: true,
                isNewEmailCode: true,
                email: {
                    email: '',
                    // code: '',
                    newEmail: '',
                    newCode: ''
                },
                phone: {
                    code: '',
                    newPhone: '',
                    phone: ''
                }
            }
        },
        computed: {
            ...mapState(['auth'])
        },
        props: {
            isEdit: {
                default: true
            },
            item: {
                default: () => {
                    return {}
                }
            }
        },
        watch: {
            item() {
                this.imageUrl = this.item.avatar || ''
                this.name = this.item.nickname || ''
                this.phone.phone = this.item.phone || ''
                this.email.email = this.item.email || ''
            }
        },
        methods: {
            finish() {
                this.isCodeGeting = true;
            },
            finishEmail() {
                this.isEmailCode = true;
            },
            finishNewEmail() {
                this.isNewEmailCode = true;
            },
            editImg() {
                postMyInfoImg({avatar: this.imageUrl}).then(res => {
                    console.log(res)
                    debugger
                    if (res.succeed) {
                        debugger
                        this.$message.success('头像修改成功')
                    } else {
                        this.$message.warning(res.data.msg || '')
                    }
                    this.$emit('success')
                }).catch(err => {
                    console.log(err);
                })
            },
            editName() {
                postMyInfoImg({nickname: this.name}).then(res => {
                    console.log(res)
                    if (res.succeed) {
                        this.$message.success('昵称修改成功')
                    } else {
                        this.$message.warning(res.data.msg || '')
                    }
                    this.$emit('success')
                }).catch(err => {
                    console.log(err);
                })
            },
            query() {
                queryMyInfo({}).then(res => {
                    if (res.success) {
                        this.data = res.data
                    } else {
                        // this.$message.warning('网路开小差')
                    }
                    this.$emit('load')
                }).catch(err => {
                    console.log(err)
                    this.$emit('load')
                    this.$message.warning('网路开小差')
                })
            },
            submitPhone() {

            },
            queryCode(v) {
                if (v == 'email') {
                    if (this.phone.phone) {
                        this.isEmailCode = false
                        this.queryEmail()
                    } else {
                        this.$message.warning('请输入邮箱')
                    }
                } else if (v == 'phone') {
                    if (this.phone.phone) {
                        this.isCodeGeting = false
                        this.getPhotoCode()
                    } else {
                        this.$message.warning('请输入原手机号')
                    }
                } else if (v == 'newEmail') {
                    if (this.phone.phone) {
                        this.isNewEmailCode = false
                        this.queryNewEmail()
                    } else {
                        this.$message.warning('请输入新的邮箱')
                    }
                }
            },
            getPhotoCode() {
                if (this.phone.phone) {
                    queryPhoneCode({phone: this.phone.phone}).then(res => {
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
            queryEmail() {
                queryEmailCode({email: this.email.email}).then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            },
            queryNewEmail() {
                queryEmailCode({email: this.email.newEmail}).then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            },
            handleAvatarSuccess(res) {
                debugger
                if (res.code == 200) {
                    this.imageUrl = res.data.picture || ''
                    // this.$message.success('头像修改成功')
                    // this.$emit('success')
                }
            },
            beforeAvatarUpload(file) {
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isLt2M;
            },
            submitPhone() {
                postMyInfoPhoto({
                    phone: this.phone.phone,
                    code: this.phone.code,
                    newPhone: this.phone.newPhone
                }).then(res => {
                    console.log(res)
                    if (res.succeed) {
                        this.$message.success('手机号码修改成功')
                    } else {
                        this.$message.warning(res.data.msg || '')
                    }
                    this.$emit('success')
                }).catch(err => {
                    console.log(err);
                })
            },
            submitEmail() {
                postMyInfoEmail({
                    email: this.email.email,
                    // code: this.email.code,
                    newEmail: this.email.newEmail,
                    newCode: this.email.newCode
                }).then(res => {
                    console.log(res)
                    if (res.succeed) {
                        this.$message.success('邮箱修改成功')
                        this.email.newEmail = ''
                        this.email.newCode = ''
                    } else {
                        this.$message.warning(res.data.msg || '')
                    }
                    this.$emit('success')
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped lang="less">
.box-head{
    border: none !important;
}
    .avatar-uploader {
        width: 96px;
        height: 96px;
        position: absolute;
        left: 44.5%;
        border-radius: 50%;
        background: transparent;
        z-index: 1;

        img {
            width: 96px;
            height: 96px;
            border-radius: 50%;
            margin: 0 auto;
            position: absolute;
            top: 0;
            left: 0;
        }

        /deep/ .el-icon-plus {
            font-size: 96px;
            color: transparent;
        }
    }

    .box-body {
        position: relative;
    }

    .a-position {
        position: absolute;
        right: 0;
    }

    .edit-img {
        width: 143px;
        height: 44px;
        line-height: 44px;
        font-size: 14px;
        color: #fff;
        background: #FD5F5F;
        border-radius: 1px;
        text-align: center;
        display: inline-block;
        margin-left: 20px;
        position: absolute;
        right: 0;
        bottom: -40px;
    }
</style>