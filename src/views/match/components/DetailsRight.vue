<template>
    <div class="page hotteam-box information-box hot-match-box">
        <HotForecast/>
        <HotMatch></HotMatch>
    </div>
</template>

<script>
    import HotForecast from '@/views/consultation/components/HotForecast'
    import HotMatch from '@/views/consultation/components/HotMatch'

    export default {
        components: {
            HotMatch,
            HotForecast
        },
        data() {
            return {
                list: [],//预测
                data: [],
                detail: {}
            }
        },
        mounted() {
            this.query()
        },
        methods: {
            query() {
            }
        }
    }
</script>

<style scoped>

</style>