<template>
    <div>
        home
    </div>
</template>

<script>
    export default {
        name: "home",
        created() {
            this.query()
        },
        methods: {
            query() {
                console.log('home')
            }
        }
    }
</script>

<style scoped>

</style>