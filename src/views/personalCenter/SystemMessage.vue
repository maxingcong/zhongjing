<template>
    <div>
        <div class="pannel">
            <div class="pannel-head">
                <ul>
                    <li class="active"><a>系统消息</a></li>
                </ul>
            </div>
            <div class="pannel-body">
                <div class="system-message-box">
                    <div class="message-list" v-for="item in data" :key="item.id">
                        <div class="title">{{item.createTime}}</div>
                        <div class="message-text">
                            <h5>{{item.title}}</h5>
                            <p>{{item.messageContent}}</p>
                            <!--<div class="text-right"><a href="#">查看更多 ></a></div>-->
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getSystem} from '@/api/personalCenter'

    export default {
        name: "system_message",
        created() {
            this.query()
        },
        data() {
            return {
                data: []
            }
        },
        methods: {
            query() {
                this.loading = true
                getSystem({}).then(res => {
                    if (res.succeed) {
                        this.data = res.data.rows || []
                    } else {
                        this.$message.warning(res.data.msg)
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