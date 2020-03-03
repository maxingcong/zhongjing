<template>
    <div class="page hot-information-box">
        <div class="page-head">
            <div class="head-left"><h5>热门资讯</h5><span>hot information</span></div>
            <div class="head-right"><a href="">更多<img src="images/index/more.png"></a></div>
        </div>
        <div class="page-body">
            <div class="hotinformation-classification">
                <div class="hotinformation-classification-list">
                    <div class="list-title"><span class="circle-icon-title title1"></span><h5>资讯报道</h5></div>
                    <ul class="hotinformation-text">
                        <li><span class="circle-icon-text text1"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text1"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text1"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text1"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text1"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text1"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text1"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text1"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text1"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                    </ul>
                </div>
                <div class="hotinformation-classification-list">
                    <div class="list-title"><span class="circle-icon-title title2"></span><h5>赛事资讯</h5></div>
                    <ul class="hotinformation-text">
                        <li><span class="circle-icon-text text2"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text2"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text2"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text2"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text2"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text2"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text2"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text2"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text2"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                    </ul>
                </div>
                <div class="hotinformation-classification-list">
                    <div class="list-title"><span class="circle-icon-title title3"></span><h5>视频资讯</h5></div>
                    <ul class="hotinformation-video">
                        <li>
                            <div class="hotinformation-video-img"><img src="images/index/pic01.png"></div>
                            <span class="circle-icon-text text3"></span><a href="#">LOL全明星赛宣传片</a>
                        </li>
                        <li>
                            <div class="hotinformation-video-img"><img src="images/index/pic01.png"></div>
                            <span class="circle-icon-text text3"></span><a href="#">LOL全明星赛宣传片</a>
                        </li>
                    </ul>
                    <ul class="hotinformation-text">
                        <li><span class="circle-icon-text text3"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text3"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text3"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                        <li><span class="circle-icon-text text3"></span><a href="#">iG 宣布 Jackeylove 合约到期成为自由人正在实施</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {queryHomeConsultation} from '@/api/home'

    export default {
        name: "Forecast.vue",
        data() {
            return {}
        },
        mounted() {
            this.query()
        },
        methods: {
            query() {
                queryHomeConsultation({}).then(res => {
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