<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <!--            <div class="swiper-slide"><img src="@/assets/images/index/banner.png"></div>-->
                <div class="swiper-slide" v-for="item in list" :key="item.id"><img style="width: 1200px;height: 450px"
                                                                                   :src="item.pic"></div>
            </div>
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
        queryHomeBanner({}).then(res => {
          let data = res.body
          if (res.succeed) {
            // console.log(res)
            this.list = data || []
            this.mySwiper = new Swiper('.swiper-container', {
              autoplay: 2000,//可选选项，自动滑动
              width: 1200,
              height: 450,
              roundLengths: true,
              grabCursor: true,
              setWrapperSize: true,
              observer: true,//修改swiper自己或子元素时，自动初始化swiper
              observeParents: false,//修改swiper的父元素时，自动初始化swiper
              autoplayDisableOnInteraction: false,
              onSlideChangeEnd: function (swiper) {
                swiper.update();
                try {
                  this.mySwiper.startAutoplay();
                  this.mySwiper.reLoop();
                } catch (e) {
                  console.log(e)
                }
              }
              // direction: 'vertical'
            })
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