<template>
    <div class="page hotspot-today-box information-box match-box main-content">
        <div class="hotgame-overview-box">
            <div class="box-head"><h5>热门游戏<span>Hot Game</span></h5></div>
            <div class="hotgame-list">
                <HotgameList/>
            </div>
        </div>
        <div class="row-page">
            <DetailsLeft :data="data" @change="handChange"/>
            <DetailsRight/>
        </div>
        <DetailsFooter :data="data"/>
    </div>
</template>

<script>
    import {queryMathDetails} from '@/api/match'
    import HotgameList from "@/components/HotgameList";
    import DetailsFooter from './DetailsFooter'
    import DetailsLeft from './DetailsLeft'
    import DetailsRight from './DetailsRight'

    export default {
        name: "match_details",
        components: {
            HotgameList,
            DetailsFooter,
            DetailsLeft,
            DetailsRight
        },
        data() {
            return {
                data: {}
            }
        },
        computed: {
            id() {
                return this.$route.query.id || ''
            }
        },
        mounted() {
            this.query()
        },
        methods: {
            handChange(id) {
                this.id = id
                this.query()
            },
            query() {
                console.log(this.id)
                queryMathDetails({id: this.id}).then(res => {
                    if (res.succeed) {
                        this.data = res.data
                    } else {
                        console.log(res);
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
