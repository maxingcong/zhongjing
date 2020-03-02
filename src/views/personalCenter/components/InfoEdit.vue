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
                        <li>
                            <img src="@/assets/images/bisai.png">
                            <span>比赛</span>
                        </li>
                        <li>
                            <img src="@/assets/images/zhandui.png">
                            <span>战队</span>
                        </li>
                        <li>
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
                        <div class="head-portrait-edit">
                            <el-upload
                                    class="avatar-uploader"
                                    accept="image/jpeg,image/jpg,image/png"
                                    action="/api/123"
                                    ref="upload"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <a><i class="mdi-set mdi-camera"></i></a></div>
                    </div>
                </div>
                <div class="edit-box">
                    <div class="box-head"><h5>修改名称</h5></div>
                    <div class="box-body">
                        <form style="align-items: normal;">
                            <div class="form-left">
                                <div class="form-group">
                                    <div class="form-content">
                                        <input type="text" class="form-control" value="" placeholder="输入您想修改的名称">
                                    </div>
                                </div>
                            </div>
                            <div class="form-right"><a @click="submit" class="sumbit-btn">确定</a></div>
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
                                        <input type="text" class="form-control" value="" placeholder="输入原绑定手机号">
                                    </div>
                                </div>
                                <!--                                <div class="form-group validation-code">-->
                                <!--                                    <div class="form-content">-->
                                <!--                                        <input type="text" class="form-control" value="" placeholder="输入验证码">-->
                                <!--                                        <a href="#" class="sumbit-btn">确定</a>-->
                                <!--                                    </div>-->
                                <!--                                </div>-->
                                <div class="form-group">
                                    <div class="form-content">
                                        <input type="text" class="form-control" value="" placeholder="输入新的手机号">
                                    </div>
                                </div>
                                <div class="form-group validation-code">
                                    <div class="form-content">
                                        <input type="text" class="form-control" value="" placeholder="输入验证码">
                                        <a @click="submit" class="sumbit-btn">确定</a>
                                    </div>
                                </div>
                            </div>
                            <!--                            <div class="form-right">-->
                            <!--                                <div class="modified-successfully-box">-->
                            <!--                                    <img src="@/assets/images/success-img.png">-->
                            <!--                                    <p>修改成功！</p>-->
                            <!--                                </div>-->
                            <!--                            </div>-->
                        </form>
                    </div>
                </div>
                <div class="edit-box">
                    <div class="box-head"><h5>修改邮箱</h5></div>
                    <div class="box-body">
                        <form>
                            <div class="form-left">
                                <div class="form-group">
                                    <div class="form-content">
                                        <input type="text" class="form-control" value="" placeholder="输入原绑定邮箱">
                                    </div>
                                </div>
                                <!--                                <div class="form-group validation-code">-->
                                <!--                                    <div class="form-content">-->
                                <!--                                        <input type="text" class="form-control" value="" placeholder="输入验证码">-->
                                <!--                                        <a href="#" class="sumbit-btn">确定</a>-->
                                <!--                                    </div>-->
                                <!--                                </div>-->
                                <div class="form-group">
                                    <div class="form-content">
                                        <input type="text" class="form-control" value="" placeholder="输入新的邮箱">
                                    </div>
                                </div>
                                <div class="form-group validation-code">
                                    <div class="form-content">
                                        <input type="text" class="form-control" value="" placeholder="输入验证码">
                                        <a @click="submit" class="sumbit-btn">确定</a>
                                    </div>
                                </div>
                            </div>
                            <div class="form-right">
                                <div class="modified-successfully-box">
                                    <img src="@/assets/images/success-img.png">
                                    <p>修改成功！</p>
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

    import {queryMyInfo, postMyInfo} from '@/api/personalCenter'

    export default {
        name: "infoEdit",
        data() {
            return {
                data: {},
                imageUrl: ''
            }
        },
        props: {
            isEdit: {
                default: true
            }
        },
        methods: {
            query() {
                queryMyInfo({}).then(res => {
                    if (res.success) {
                        this.data = res.data
                    } else {
                        this.$message.warning('网路开小差')
                    }
                    this.$emit('load')
                }).catch(err => {
                    console.log(err)
                    this.$emit('load')
                    this.$message.warning('网路开小差')
                })
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isLt2M;
            },
            submit() {
                this.$message({
                    offset: 200,
                    duration: 500000,
                    iconClass: '11123',
                    type: 'info',
                    center: true,
                    dangerouslyUseHTMLString: true,
                    message: '<h3>修 改 成 功 !</h3> <img src="data:image/png;base64,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">'
                })
                postMyInfo({params: JSON.stringify(this.list)}).then(res => {
                    //     console.log(res)
                    //     this.$message.success({
                    //         dangerouslyUseHTMLString: true,
                    //         message: '<img src="@/assets/images/success-img.png">'
                    //     })
                    //     this.$emit('success')
                    // }).catch(err => {
                    //     // this.$message.warning('充值失败')
                    //     this.$message.success({
                    //         dangerouslyUseHTMLString: true,
                    //         message: '<img src="@/assets/images/success-img.png">'
                    //     })
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .avatar-uploader {
        width: 96px;
        height: 96px;
        position: absolute;
        left: 54%;
        border-radius: 50%;
        background: transparent;
        z-index: 1;

        /deep/ .el-icon-plus {
            font-size: 96px;
            color: transparent;
        }
    }
</style>