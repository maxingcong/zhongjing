<template>
    <div class="main-content">
        <div class="hotgame-overview-box">
            <div class="box-head"><h5>热门游戏<span>Hot Game</span></h5></div>
            <div class="hotgame-list">
                <HotgameList/>
            </div>
        </div>
        <Banner/>
        <div class="page hot-forecast-box">
            <Forecast/>
        </div>
        <Hotspot/>
        <HotMatch/>
        <HotConsultation/>
    </div>
</template>

<script>
    // import {queryHomeBanner} from '@/api/home'
    import Banner from "../../components/Banner";
    import HotgameList from "../../components/HotgameList";
    import Forecast from "./components/Forecast";
    import Hotspot from "./components/Hotspot";
    import HotMatch from "./components/HotMatch";
    import HotConsultation from "./components/HotConsultation";

    export default {
        name: "home",
        components: {
            Banner,
            HotgameList,
            Forecast,
            Hotspot,
            HotConsultation,
            HotMatch
        },
        created() {
            // this.query()
        },
        methods: {
            // query() {
            //     queryHomeBanner({}).then(res => {
            //         if (res.success) {
            //             this.data = res.data
            //         } else {
            //             this.$message.warning('网路开小差')
            //         }
            //         this.loading = false
            //     }).catch(err => {
            //         this.loading = false
            //         console.log(err)
            //     })
            // }
        }
    }
</script>

<style scoped>

</style>