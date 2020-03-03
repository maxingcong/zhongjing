<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id"><a><img :src="'http://120.24.224.218:8080/'+item.gameName" ></a></li>
            <li><a><img src="@/assets/images/index/hotgame02.png"></a></li>
        </ul>
    </div>
</template>

<script>
    import {queryHomeGame} from '@/api/home'

    export default {
        name: "hotGameList",
        data() {
            return {
                list: []
            }
        },
        mounted() {
            this.query()
        },
        methods: {
            query() {
                queryHomeGame({}).then(res => {
                    let data = res.body
                    if (res.succeed) {
                        console.log(res)
                        this.list = data || []
                    } else {
                        this.list = []
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>