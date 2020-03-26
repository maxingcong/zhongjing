<template>
    <div class="main-content">
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
    import Banner from "../../components/Banner";
    import Forecast from "./components/Forecast";
    import Hotspot from "./components/Hotspot";
    import HotMatch from "./components/HotMatch";
    import HotConsultation from "./components/HotConsultation";

    export default {
        name: "home",
        components: {
            Banner,
            Forecast,
            Hotspot,
            HotConsultation,
            HotMatch
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>

</style>