<template>
    <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="@/assets/images/index/banner.png"></div>
            <div class="swiper-slide" v-for="item in list" :key="item.id"><img
                    :src="'http://120.24.224.218:8080/'+item.picture"></div>
        </div>
    </div>
</template>

<script>
    import {queryHomeBanner} from '@/api/home'
    import Swiper from 'swiper'

    export default {
        name: "hotGameList",
        data() {
            return {
                list: []
            }
        },
        mounted() {
            this.query()
        },
        methods: {
            query() {
                this.mySwiper = new Swiper('.swiper-container', {
                    // autoplay: true,//可选选项，自动滑动
                    speed: 300,
                    grabCursor: true,
                    setWrapperSize: true
                    // direction: 'vertical'
                })
                queryHomeBanner({}).then(res => {
                    let data = res.body
                    if (res.succeed) {
                        // console.log(res)
                        this.list = data || []
                    } else {
                        this.list = []
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .swiper-container {
        height: 450px;
        overflow: hidden;

        .swiper-wrapper {
            display: flex;
            flex-wrap: nowrap;
        }
    }
</style>