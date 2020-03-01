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
                        <div class="head-portrait-edit"><a href="#"><i class="mdi-set mdi-camera"></i></a></div>
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
                            <div class="form-right"><a href="#" class="sumbit-btn">确定</a></div>
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
                                <div class="form-group validation-code">
                                    <div class="form-content">
                                        <input type="text" class="form-control" value="" placeholder="输入验证码">
                                        <a href="#" class="sumbit-btn">确定</a>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-content">
                                        <input type="text" class="form-control" value="" placeholder="输入新的手机号">
                                    </div>
                                </div>
                                <div class="form-group validation-code">
                                    <div class="form-content">
                                        <input type="text" class="form-control" value="" placeholder="输入验证码">
                                        <a href="#" class="sumbit-btn">确定</a>
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
                                <div class="form-group validation-code">
                                    <div class="form-content">
                                        <input type="text" class="form-control" value="" placeholder="输入验证码">
                                        <a href="#" class="sumbit-btn">确定</a>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-content">
                                        <input type="text" class="form-control" value="" placeholder="输入新的邮箱">
                                    </div>
                                </div>
                                <div class="form-group validation-code">
                                    <div class="form-content">
                                        <input type="text" class="form-control" value="" placeholder="输入验证码">
                                        <a href="#" class="sumbit-btn">确定</a>
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
    export default {
        name: "infoEdit",
        props: {
            isEdit: {
                default: true
            }
        }
    }
</script>

<style scoped>

</style>