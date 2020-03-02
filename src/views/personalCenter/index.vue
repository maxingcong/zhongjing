<template>
    <div class="main-content">
        <div class="main-content-head">
            <ul>
                <li><a href="#">中竞网</a></li>
                <li>>个人中心</li>
            </ul>
        </div>
        <div class="section">
            <div class="sidebar">
                <div class="side-box">
                    <ul class="side-nav">
                        <router-link
                                class="menu-item"
                                v-for="(item, index) in menu.myCenter"
                                :key="index"
                                tag="li"
                                :to="{name: item.name}"
                                active-class="active">
                            <div :class="{'nav-icon':true, ['icon'+ (index+1)] : true }"></div>
                            <a>{{item.meta.title}}</a>
                        </router-link>
                    </ul>
                </div>
            </div>
            <div class="section-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "personal_center",
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

<style scoped lang="less">
    /deep/ .is-active {
        color: #ee5d5d !important;
    }


</style>