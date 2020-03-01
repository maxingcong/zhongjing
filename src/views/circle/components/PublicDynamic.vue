<template>
    <div>
        <div class="circle-content-wrap-left-list">
            <div class="circle-content-wrap-left-list-item">
                <div class="circle-content-wrap-left-list-item-info">
                    <img class="circle-content-wrap-left-list-item-info-avatar" src="@/assets/images/circle/lol.png"
                         alt="">
                    <div class="circle-content-wrap-left-list-item-info-content">
                        <span class="circle-content-wrap-left-list-item-info-content-name">英雄联盟那些事</span>
                        <span class="circle-content-wrap-left-list-item-info-content-time">15分钟以前</span>
                    </div>
                    <button class="circle-content-wrap-left-list-item-info-btn">关注</button>
                </div>
                <span class="circle-content-wrap-left-list-item-title">LPL全明星周末11月30日海口冯小刚电影公社正式开幕</span>
                <div class="circle-content-wrap-left-list-item-content">
                    <d-player @play="play" ref="play" class="circle-content-wrap-left-list-item-content-video"
                              :options="options"/>
                    <!--<img class="circle-content-wrap-left-list-item-content-one-img" src="@/assets/images/circle/demo_img.png" alt="">-->
                </div>
                <div class="circle-content-wrap-left-list-item-handle">
                    <div class="circle-content-wrap-left-list-item-handle-item">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/send.png" alt="">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">36</span>
                    </div>
                    <div class="circle-content-wrap-left-list-item-handle-item">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/pinglun.png" alt="">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">1020</span>
                    </div>
                    <div class="circle-content-wrap-left-list-item-handle-item">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/dianzan.png" alt="">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">1020</span>
                    </div>
                </div>
            </div>
            <div class="circle-content-wrap-left-list-item">
                <div class="circle-content-wrap-left-list-item-info">
                    <img class="circle-content-wrap-left-list-item-info-avatar" src="@/assets/images/circle/lol.png"
                         alt="">
                    <div class="circle-content-wrap-left-list-item-info-content">
                        <span class="circle-content-wrap-left-list-item-info-content-name">英雄联盟那些事</span>
                        <span class="circle-content-wrap-left-list-item-info-content-time">15分钟以前</span>
                    </div>
                    <button class="circle-content-wrap-left-list-item-info-btn">关注</button>
                </div>
                <span class="circle-content-wrap-left-list-item-title">LPL全明星周末11月30日海口冯小刚电影公社正式开幕</span>
                <div class="circle-content-wrap-left-list-item-content">
                    <div class="circle-content-wrap-left-list-item-content-six">
                        <img class="circle-content-wrap-left-list-item-content-six-img"
                             src="@/assets/images/circle/1.png" alt=""/>
                        <img class="circle-content-wrap-left-list-item-content-six-img"
                             src="@/assets/images/circle/2.png" alt=""/>
                        <img class="circle-content-wrap-left-list-item-content-six-img"
                             src="@/assets/images/circle/3.png" alt=""/>
                        <img class="circle-content-wrap-left-list-item-content-six-img"
                             src="@/assets/images/circle/4.png" alt=""/>
                        <img class="circle-content-wrap-left-list-item-content-six-img"
                             src="@/assets/images/circle/5.png" alt=""/>
                        <img class="circle-content-wrap-left-list-item-content-six-img"
                             src="@/assets/images/circle/6.png" alt=""/>
                    </div>
                </div>
                <div class="circle-content-wrap-left-list-item-handle">
                    <div class="circle-content-wrap-left-list-item-handle-item">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/send.png" alt="">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">36</span>
                    </div>
                    <div class="circle-content-wrap-left-list-item-handle-item">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/pinglun.png" alt="">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">1020</span>
                    </div>
                    <div class="circle-content-wrap-left-list-item-handle-item">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/dianzan.png" alt="">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">1020</span>
                    </div>
                </div>
            </div>
            <div class="circle-content-wrap-left-list-item">
                <div class="circle-content-wrap-left-list-item-info">
                    <img class="circle-content-wrap-left-list-item-info-avatar" src="@/assets/images/circle/lol.png"
                         alt="">
                    <div class="circle-content-wrap-left-list-item-info-content">
                        <span class="circle-content-wrap-left-list-item-info-content-name">英雄联盟那些事</span>
                        <span class="circle-content-wrap-left-list-item-info-content-time">15分钟以前</span>
                    </div>
                    <button class="circle-content-wrap-left-list-item-info-btn">关注</button>
                </div>
                <div class="circle-content-wrap-left-list-item-content">
                    <span class="circle-content-wrap-left-list-item-content-txt">LPL全明星周末11月30日海口冯小刚电影公社正式开幕啦！祝贺！</span>
                </div>
                <div class="circle-content-wrap-left-list-item-handle">
                    <div class="circle-content-wrap-left-list-item-handle-item">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/send.png" alt="">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">36</span>
                    </div>
                    <div class="circle-content-wrap-left-list-item-handle-item">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/pinglun.png" alt="">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">1020</span>
                    </div>
                    <div class="circle-content-wrap-left-list-item-handle-item">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/dianzan.png" alt="">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">1020</span>
                    </div>
                </div>
            </div>
            <div class="circle-content-wrap-left-list-item">
                <div class="circle-content-wrap-left-list-item-info">
                    <img class="circle-content-wrap-left-list-item-info-avatar" src="@/assets/images/circle/lol.png"
                         alt="">
                    <div class="circle-content-wrap-left-list-item-info-content">
                        <span class="circle-content-wrap-left-list-item-info-content-name">英雄联盟那些事</span>
                        <span class="circle-content-wrap-left-list-item-info-content-time">15分钟以前</span>
                    </div>
                    <button class="circle-content-wrap-left-list-item-info-btn">关注</button>
                </div>
                <div class="circle-content-wrap-left-list-item-content">
                    <div id="dplayer" class="circle-content-wrap-left-list-item-content-video"><img
                            src="@/assets/images/circle/video.png"></div>
                </div>
                <div class="circle-content-wrap-left-list-item-handle">
                    <div class="circle-content-wrap-left-list-item-handle-item">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/send.png" alt="">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">36</span>
                    </div>
                    <div class="circle-content-wrap-left-list-item-handle-item">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/pinglun.png" alt="">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">1020</span>
                    </div>
                    <div class="circle-content-wrap-left-list-item-handle-item">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/dianzan.png" alt="">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">1020</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="circle-content-wrap-left-more">加载更多</div>
    </div>
</template>

<script>
    import VueDPlayer from 'vue-dplayer'
    import '@/assets/css/vue-dplayer.css'
    import mp4File from '@/assets/video/demo_video.mp4'

    export default {
        name: 'publicDynamic',//动态
        components: {
            'd-player': VueDPlayer
        },
        data() {
            return {
                options: {
                    video: {
                        url: mp4File
                    }
                }
            }
        },
        mounted() {
            // new DPlayer({
            //     container: document.getElementById('dplayer'),
            //     video: {
            //         url: './video/demo_video.mp4',
            //     },
        },
        methods: {
            play() {
                console.log('play callback')
            }
        }
    }
</script>

<style scoped>

</style>