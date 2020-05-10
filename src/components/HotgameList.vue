<template>
    <div>
        <ul>
            <li  @click="$router.push({name: 'consultation_list',query:{id:item.id}}), $emit('switch', item.id)"  v-for="item in list" :key="item.id">
                <a><img style="width: 54px;height: 54px;border-" :src="item.gameIcon"/></a>
<!--                <a><img style="width: 50px;height: 50px;border-radius: 50%;" src="@/assets/images/index/bteam16.png"/></a>-->
            </li>
        </ul>
    </div>
</template>

<script>
    import {queryHomeGame} from '@/api/home'

    export default {
        name: "hotGameList",
        data() {
            return {
                list: [],
                cont: 0
            }
        },
        mounted() {
            this.query()
        },
        methods: {
            query() {
                this.list = []
                queryHomeGame({}).then(res => {
                    // let data = res.body
                    if (res.succeed) {
                        // debugger
                        console.log(res)
                        this.list = res.data && res.data.rows || []
                        this.$forceUpdate()
                    } else {
                        this.list = []
                    }
                }).catch(err => {
                    this.cont++
                    if (this.cont < 5) {
                        this.query()
                    } else {
                        this.cont = 0
                    }
                    // debugger
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>