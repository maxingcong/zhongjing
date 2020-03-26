<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import {getAuth} from '@/utils/local'
    import {mapMutations} from 'vuex'

    export default {
        name: 'App',
        mounted() {
            const auth = getAuth()
            if (auth && auth !== 'undefined') {
                const items = JSON.parse(auth)
                this.setAuth(items)
                this.setBean(items.data.bean)
            }
        },
        methods: {
            ...mapMutations({
                setAuth: 'SET_AUTH',
                setBean: 'setBean'
            })
        }
    }
</script>

<style>
</style>
