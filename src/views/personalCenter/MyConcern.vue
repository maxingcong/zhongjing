<template>
    <div>
        <div class="pannel">
            <div class="pannel-head">
                <ul>
                    <router-link
                            class="menu-item"
                            v-for="(item, index) in menu.concerned"
                            :key="index"
                            tag="li"
                            :to="{name: item.name}"
                            active-class="active">
                        <a>{{item.meta.title}}</a>
                    </router-link>
                </ul>
            </div>
            <div class="pannel-body">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "my_concern",
        created() {
            this.query()
        },
        computed: {
            ...mapState(['menu'])
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