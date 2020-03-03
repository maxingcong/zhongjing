<template>
    <div>
        <div class="pannel-body">
            <div class="agent-promotion-box">
                <table class="table-info">
                    <thead>
                    <tr>
                        <th>时间</th>
                        <th>用户</th>
                        <th>注册</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2019-11-30</td>
                        <td>
                            <div class="user">
                                <div class="user-image"><img src="images/user1.png"></div>
                                <div class="user-name">用户133****1113</div>
                            </div>
                        </td>
                        <td><span class="text-danger">已注册</span></td>
                    </tr>
                    <tr>
                        <td>2019-11-30</td>
                        <td>
                            <div class="user">
                                <div class="user-image"><img src="images/user1.png"></div>
                                <div class="user-name">用户133****1113</div>
                            </div>
                        </td>
                        <td><span class="text-danger">已注册</span></td>
                    </tr>
                    <tr>
                        <td>2019-11-30</td>
                        <td>
                            <div class="user">
                                <div class="user-image"><img src="images/user1.png"></div>
                                <div class="user-name">用户133****1113</div>
                            </div>
                        </td>
                        <td><span>未注册</span></td>
                    </tr>
                    <tr>
                        <td>2019-11-30</td>
                        <td>
                            <div class="user">
                                <div class="user-image"><img src="images/user1.png"></div>
                                <div class="user-name">用户133****1113</div>
                            </div>
                        </td>
                        <td><span class="text-danger">已注册</span></td>
                    </tr>
                    <tr>
                        <td>2019-11-30</td>
                        <td>
                            <div class="user">
                                <div class="user-image"><img src="images/user1.png"></div>
                                <div class="user-name">用户133****1113</div>
                            </div>
                        </td>
                        <td><span>未注册</span></td>
                    </tr>
                    <tr>
                        <td>2019-11-30</td>
                        <td>
                            <div class="user">
                                <div class="user-image"><img src="images/user1.png"></div>
                                <div class="user-name">用户133****1113</div>
                            </div>
                        </td>
                        <td><span>未注册</span></td>
                    </tr>
                    <tr>
                        <td>2019-11-30</td>
                        <td>
                            <div class="user">
                                <div class="user-image"><img src="images/user1.png"></div>
                                <div class="user-name">用户133****1113</div>
                            </div>
                        </td>
                        <td><span>未注册</span></td>
                    </tr>
                    <tr>
                        <td>2019-11-30</td>
                        <td>
                            <div class="user">
                                <div class="user-image"><img src="images/user1.png"></div>
                                <div class="user-name">用户133****1113</div>
                            </div>
                        </td>
                        <td><span>未注册</span></td>
                    </tr>
                    <tr>
                        <td>2019-11-30</td>
                        <td>
                            <div class="user">
                                <div class="user-image"><img src="images/user1.png"></div>
                                <div class="user-name">用户133****1113</div>
                            </div>
                        </td>
                        <td><span>未注册</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import {queryAgentFriend} from '@/api/personalCenter'

    export default {
        name: "agent_promotion",
        created() {
            this.query()
        },
        methods: {
            query() {
                this.loading = true
                queryAgentFriend({}).then(res => {
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