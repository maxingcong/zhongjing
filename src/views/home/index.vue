<template>
    <div class="main-content">
        <div class="hotgame-overview-box">
            <div class="box-head"><h5>热门游戏<span>Hot Game</span></h5></div>
            <div class="hotgame-list">
                <HotgameList/>
            </div>
        </div>
        <router-view :key="new Date().getTime()"></router-view>
    </div>
</template>

<script>
    import HotgameList from "../../components/HotgameList";

    export default {
        name: "home",
        components: {
            HotgameList
        },
        methods: {}
    }
</script>

<style scoped>

</style>