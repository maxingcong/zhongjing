<template>
    <div class="main-content">
        <div class="hotgame-overview-box">
            <div class="box-head"><h5>热门游戏<span>Hot Game</span></h5></div>
            <div class="hotgame-list">
                <HotgameList ref="hos"/>
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
        components: {
            HotgameList,
            HotMatch,
            AllGame
        },
        mounted() {
            this.$nextTick(() => {
                this.$refs.hos.query()
            })
        },
        methods: {}
    }
</script>

<style scoped>

</style>