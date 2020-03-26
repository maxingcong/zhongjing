<template>
    <div>
        <div class="pannel">
            <div class="pannel-head">
                <ul>
                    <li class="active"><a>竞豆明细</a></li>
                </ul>
            </div>
            <div class="pannel-body">
                <div class="bean-recharge-box">
                    <table class="table-info">
                        <thead>
                        <tr>
                            <th>时间</th>
                            <th>项目</th>
                            <th>数量</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item in data" :key="item.id">
                            <td>{{item.createTime | filterYear}}</td>
                            <td><p>{{item.describe}}</p></td>
                            <td><span class="text-warning"><b>{{item.status}}</b></span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {queryDetailed} from '@/api/personalCenter'

    export default {
        name: "infoDetailed",
        props: {
            isEdit: {
                default: true
            }
        },
        data() {
            return {
                data: []
            }
        },
        methods: {
            query() {
                queryDetailed({}).then(res => {
                    if (res.succeed) {
                        this.data = res.data && res.data.data || {}
                    } else {
                        console.log(this.data)
                        // this.$message.warning('网路开小差')
                    }
                    this.$emit('load')
                }).catch(err => {
                    this.$emit('load')
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>