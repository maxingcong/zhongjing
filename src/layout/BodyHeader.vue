<template>
    <div class="privateheader">
        <div class="privateheader-wrap">
            <img class="privateheader-wrap-logo" src="../assets/img/privateheader/logo.png">
            <router-link
                    class="menu-item"
                    v-for="(item, index) in menu.data[0].children"
                    :key="index"
                    :to="{name: item.name}"
                    active-class="privateheader-wrap-item-active">
                <div :class="{'privateheader-wrap-item': true, 'privateheader-wrap-item-home': item.name == 'home'}">
                    <div v-show="!(item.meta && item.meta.hide)">
                        <span class="privateheader-wrap-item-txt">{{item.meta.title}}</span>
                        <span class="privateheader-wrap-item-desc">{{item.meta.englishTitle}}</span>
                    </div>
                </div>
            </router-link>
            <div class="privateheader-wrap-login">
                <img class="privateheader-wrap-login-img" @click="$router.push({name: 'personal_center'})"
                     src="../assets/img/privateheader/avatar.png" />
                <span class="privateheader-wrap-login-txt" @click="$router.push({name: 'personal_center'})"
                      v-if="auth.tooken">auth.customer</span>
                <span class="privateheader-wrap-login-txt" v-else>
                    <span @click ="$router.push({name:'login'})">登录</span>/
                    <span @click="$router.push({name:'login'})">注册</span>
                </span>
            </div>
            <div class="privateheader-wrap-login-warn">
                <div class="privateheader-wrap-login-warn-wrap"></div>
                <span class="privateheader-wrap-login-warn-txt">注册送188竞豆</span>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'

    export default {
        date() {
            return {}
        },
        computed: {
            ...mapState(['menu','auth'])
        },
        methods: {
        }
    }

</script>
<style scoped>

</style>