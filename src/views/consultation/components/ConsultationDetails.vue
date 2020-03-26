<template>
    <div>
        <div class="page-body">
            <div class="information-category-content">
                <div class="information-details">
                    <div class="information-antLins">
                        <img src="@/assets/images/index/palce.png">
                        <ul>
                            <li>当前位置：</li>
                            <li><a href="#">中竞网首页</a></li>
                            <li>></li>
                            <li><a href="#">资讯</a></li>
                            <li>></li>
                            <li>正文</li>
                        </ul>
                    </div>
                    <h1>{{data.title}}</h1>
                    <div class="source-information">
                        <div class="source"><span>来源：{{data.source}}</span><span>作者：{{data.author}}</span></div>
                        <div class="time">时间：{{data.releaseTime | filterYear}}</div>
                    </div>
                    <h2>苏州场15点 BLG vs DMO FoFo和xiye新队正名战 </h2>
                    <p v-html="data.content"></p>
                </div>
                <div class="related-information-box">
                    <div class="box-head"><h4>相关资讯</h4></div>
                    <div class="box-body">
                        <div class="hotinformation-classification-list">
                            <ul class="hotinformation-text">
                                <li><span class="circle-icon-text text3"></span><a href="#">iG 宣布 Jackeylove
                                    合约到期成为自由人正在实施</a></li>
                                <li><span class="circle-icon-text text3"></span><a href="#">iG 宣布 Jackeylove
                                    合约到期成为自由人正在实施</a></li>
                                <li><span class="circle-icon-text text3"></span><a href="#">iG 宣布 Jackeylove
                                    合约到期成为自由人正在实施</a></li>
                                <li><span class="circle-icon-text text3"></span><a href="#">iG 宣布 Jackeylove
                                    合约到期成为自由人正在实施</a></li>
                            </ul>
                        </div>
                        <div class="hotinformation-classification-list">
                            <ul class="hotinformation-text">
                                <li><span class="circle-icon-text text3"></span><a href="#">iG 宣布 Jackeylove
                                    合约到期成为自由人正在实施</a></li>
                                <li><span class="circle-icon-text text3"></span><a href="#">iG 宣布 Jackeylove
                                    合约到期成为自由人正在实施</a></li>
                                <li><span class="circle-icon-text text3"></span><a href="#">iG 宣布 Jackeylove
                                    合约到期成为自由人正在实施</a></li>
                                <li><span class="circle-icon-text text3"></span><a href="#">iG 宣布 Jackeylove
                                    合约到期成为自由人正在实施</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {queryInfoDetails} from '@/api/consultation'

    export default {
        name: "Forecast.vue",
        data() {
            return {
                id: this.$route.query.id,
                data: {}
            }
        },
        mounted() {
            this.query()
        },
        methods: {
            query() {
                queryInfoDetails({id: this.id}).then(res => {
                    debugger
                    if (res.succeed) {
                        this.data = res.data && res.data.data || {}
                    } else {
                        console.log(res)
                        // this.$message.warning('网路开小差')
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