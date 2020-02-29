<template>
    <div>
        <header>
            <div class="privateheader">
                <div class="privateheader-wrap">
                    <img class="privateheader-wrap-logo" src="../assets/img/privateheader/logo.png">
                    <router-link
                            class="menu-item"
                            v-for="(item, index) in routeItem.children"
                            :key="index"
                            :to="{name: item.name}"
                            @click.native="handleLinkClick(item)">
                        <div :class="{'privateheader-wrap-item': true, 'privateheader-wrap-item-home': item.name == 'home',
                        'privateheader-wrap-item-active': getActive(item.name)}">
                            <span class="privateheader-wrap-item-txt">{{item.meta.title}}</span>
                            <span class="privateheader-wrap-item-desc">{{item.meta.englishTitle}}</span>
                        </div>
                    </router-link>
                    <!--                    <div class="privateheader-wrap-item privateheader-wrap-item-home">-->
                    <!--                        <span class="privateheader-wrap-item-txt">首页</span>-->
                    <!--                        <span class="privateheader-wrap-item-desc">Home</span>-->
                    <!--                    </div>-->
                    <!--                    <div class="privateheader-wrap-item">-->
                    <!--                        <span class="privateheader-wrap-item-txt">资讯</span>-->
                    <!--                        <span class="privateheader-wrap-item-desc">Information</span>-->
                    <!--                    </div>-->
                    <!--                    <div class="privateheader-wrap-item">-->
                    <!--                        <span class="privateheader-wrap-item-txt">赛事</span>-->
                    <!--                        <span class="privateheader-wrap-item-desc">Match</span>-->
                    <!--                    </div>-->
                    <!--                    <div class="privateheader-wrap-item">-->
                    <!--                        <span class="privateheader-wrap-item-txt">战队</span>-->
                    <!--                        <span class="privateheader-wrap-item-desc">Clan</span>-->
                    <!--                    </div>-->
                    <!--                    <div class="privateheader-wrap-item privateheader-wrap-item-active">-->
                    <!--                        <span class="privateheader-wrap-item-txt">圈子</span>-->
                    <!--                        <span class="privateheader-wrap-item-desc">Circle</span>-->
                    <!--                    </div>-->
                    <!--                    <div class="privateheader-wrap-item">-->
                    <!--                        <span class="privateheader-wrap-item-txt">商城</span>-->
                    <!--                        <span class="privateheader-wrap-item-desc">Mall</span>-->
                    <!--                    </div>-->
                    <div class="privateheader-wrap-login">
                        <img class="privateheader-wrap-login-img"
                             src="../assets/img/privateheader/avatar.png">
                        <span class="privateheader-wrap-login-txt">登录/注册</span>
                    </div>
                    <div class="privateheader-wrap-login-warn">
                        <div class="privateheader-wrap-login-warn-wrap"></div>
                        <span class="privateheader-wrap-login-warn-txt">注册送188竞豆</span>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
    import routeItem from "../router/menu";

    export default {
        date() {
            return {
                routeItem,
                activeRt: 'home'
            }
        },
        methods: {
            getActive(item) {
                return item == this.activeRt
            }
        }
    }

</script>
<style scoped>

</style>