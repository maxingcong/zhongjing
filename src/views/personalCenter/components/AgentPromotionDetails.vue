<template>
    <div>
        <div class="pannel-body">
            <div class="agent-promotion-box">
                <table class="table-info">
                    <thead>
                    <tr>
                        <th>时间</th>
                        <th>操作</th>
                        <th>数量</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>2019-11-30</td>
                        <td><p>邀请用户成功注册</p></td>
                        <td><span class="text-danger"><b>+100</b></span></td>
                    </tr>
                    <tr>
                        <td>2019-11-30</td>
                        <td><p>推广活动奖励</p></td>
                        <td><span class="text-danger"><b>+100</b></span></td>
                    </tr>
                    <tr>
                        <td>2019-11-30</td>
                        <td><p>兑换</p></td>
                        <td><span class="text-primary"><b>-100</b></span></td>
                    </tr>
                    <tr>
                        <td>2019-11-30</td>
                        <td><p>邀请用户成功注册</p></td>
                        <td><span class="text-danger"><b>+100</b></span></td>
                    </tr>
                    <tr>
                        <td>2019-11-30</td>
                        <td><p>兑换</p></td>
                        <td><span class="text-danger"><b>+100</b></span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import {queryAgentDetails} from '@/api/personalCenter'

    export default {
        name: "agent_promotion",
        created() {
            this.query()
        },
        methods: {
            query() {
                this.loading = true
                queryAgentDetails({}).then(res => {
                    if (res.success) {
                        this.data = res.data
                    } else {
                        this.$message.warning('网路开小差')
                    }
                    this.loading = false
                }).catch(err => {
                    this.loading = false
                    console.log(err)
                    this.$message.warning('网路开小差')
                })
            }
        }
    }
</script>

<style scoped>

</style>