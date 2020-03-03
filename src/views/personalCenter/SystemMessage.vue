<template>
    <div>
        <div class="pannel">
            <div class="pannel-head">
                <ul>
                    <li class="active"><a href="#">系统消息</a></li>
                </ul>
            </div>
            <div class="pannel-body">
                <div class="system-message-box">
                    <div class="message-list">
                        <div class="title">2020-1-2</div>
                        <div class="message-text">
                            <h5>推荐好友领福利咯</h5>
                            <p>推荐好友最高可获得188竟豆!竟猜奖励多多哦快邀请您的好友一起来玩耍吧!</p>
                            <div class="text-right"><a href="#">查看更多 ></a></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="message-list">
                        <div class="title">2020-1-2</div>
                        <div class="message-text">
                            <h5>推荐好友领福利咯</h5>
                            <p>推荐好友最高可获得188竟豆!竟猜奖励多多哦快邀请您的好友一起来玩耍吧!</p>
                            <div class="text-right"><a href="#">查看更多 ></a></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="message-list">
                        <div class="title">2020-1-2</div>
                        <div class="message-text">
                            <h5>推荐好友领福利咯</h5>
                            <p>推荐好友最高可获得188竟豆!竟猜奖励多多哦快邀请您的好友一起来玩耍吧!</p>
                            <div class="text-right"><a href="#">查看更多 ></a></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="message-list">
                        <div class="title">2020-1-2</div>
                        <div class="message-text">
                            <h5>推荐好友领福利咯</h5>
                            <p>推荐好友最高可获得188竟豆!竟猜奖励多多哦快邀请您的好友一起来玩耍吧!</p>
                            <div class="text-right"><a href="#">查看更多 ></a></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="message-list">
                        <div class="title">2020-1-2</div>
                        <div class="message-text">
                            <h5>推荐好友领福利咯</h5>
                            <p>推荐好友最高可获得188竟豆!竟猜奖励多多哦快邀请您的好友一起来玩耍吧!</p>
                            <div class="text-right"><a href="#">查看更多 ></a></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="message-list">
                        <div class="title">2020-1-2</div>
                        <div class="message-text">
                            <h5>推荐好友领福利咯</h5>
                            <p>推荐好友最高可获得188竟豆!竟猜奖励多多哦快邀请您的好友一起来玩耍吧!</p>
                            <div class="text-right"><a href="#">查看更多 ></a></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {postSystem} from '@/api/personalCenter'

    export default {
        name: "system_message",
        created() {
            this.query()
        },
        methods: {
            query() {
                this.loading = true
                postSystem({}).then(res => {
                    if (res.success) {
                        this.data = res.data
                    } else {
                        this.$message.warning('网路开小差')
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