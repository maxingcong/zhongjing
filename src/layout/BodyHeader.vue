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
                <div v-if="!(item.meta && item.meta.hide)"
                     :class="{'privateheader-wrap-item': true, 'privateheader-wrap-item-home': item.name == 'home'}">
                    <div>
                        <span class="privateheader-wrap-item-txt">{{item.meta.title}}</span>
                        <span class="privateheader-wrap-item-desc">{{item.meta.englishTitle}}</span>
                    </div>
                </div>
            </router-link>
            <div class="privateheader-wrap-login">
                <!--:src="auth.info.img"/>-->
                <el-dropdown v-if="auth.info.token || auth.info.phone" @command="authOut">
                    <div>
                        <img class="privateheader-wrap-login-img"
                             @click="$router.push({name: 'personal_center'})"
                             src="../assets/img/privateheader/avatar.png"/>
                        <span class="privateheader-wrap-login-txt"
                              @click="$router.push({name: 'personal_center'})">
                          {{auth.info.phone}}
                    </span>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>退出登陆</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span class="privateheader-wrap-login-txt" v-else>
                    <span @click="$router.push({name:'login'})">登录</span>/
                    <span @click="$router.push({name:'register'})">注册</span>
                </span>
            </div>
            <div class="privateheader-wrap-login-warn" @click="$router.push({name:'register'})">
                <div class="privateheader-wrap-login-warn-wrap"></div>
                <span class="privateheader-wrap-login-warn-txt">注册送188竞豆</span>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState, mapMutations} from 'vuex'
    import {removeAuth} from '@/utils/local'

    export default {
        date() {
            return {}
        },
        computed: {
            ...mapState(['menu', 'auth'])
        },
        methods: {
            ...mapMutations({
                setAuth: 'SET_AUTH'
            }),
            authOut() {
                removeAuth()
                this.setAuth()
                this.$router.push({name: '/'})
            }
        }
    }

</script>
<style scoped>

</style>