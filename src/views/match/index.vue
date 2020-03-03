<template>
    <div class="main-content">
        <div class="hotgame-overview-box">
            <div class="box-head"><h5>热门游戏<span>Hot Game</span></h5></div>
            <div class="hotgame-list">
                <HotgameList/>
            </div>
        </div>
        <HotMatch/>
        <AllGame/>
    </div>
</template>

<script>
    import HotgameList from "../../components/HotgameList";
    import HotMatch from "./components/HotMatch";
    import AllGame from "./components/AllGame";

    export default {
        name: "home",
        components: {
            HotgameList,
            HotMatch,
            AllGame
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