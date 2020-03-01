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
                        <!--<li>-->
                        <!--<div :class="{'nav-icon':true, ['icon'+ (index+1)] : true }"></div>-->
                        <a>{{item.meta.title}}</a>
                        <!--</li>-->
                    </router-link>
                    <!--<li class="active"><a href="follow-team.html">关注战队</a></li>-->
                    <!--<li><a href="follow-match.html">关注比赛</a></li>-->
                    <!--<li><a href="follow-player.html">关注选手</a></li>-->
                </ul>
            </div>
            <div class="pannel-body">
                <router-view />
                <!--<div class="follow-list-box">-->
                    <!--<ul class="nav-sign">-->
                        <!--<li class="nav-sign-item active"><a href="#">英雄联盟</a></li>-->
                        <!--<li class="nav-sign-item"><a href="#">王者荣耀</a></li>-->
                    <!--</ul>-->
                    <!--<div class="content-item">-->
                        <!--<ul class="team-list">-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gameblg.png"></div>-->
                                <!--<div class="team-name">BLG.J</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gameedg.png"></div>-->
                                <!--<div class="team-name">EDG.Y</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gamefpb.png"></div>-->
                                <!--<div class="team-name">FPB</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gameigy.png"></div>-->
                                <!--<div class="team-name">IGY</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gamejdm.png"></div>-->
                                <!--<div class="team-name">JDM</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gameblg.png"></div>-->
                                <!--<div class="team-name">BLG.J</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gameedg.png"></div>-->
                                <!--<div class="team-name">EDG.Y</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gamefpb.png"></div>-->
                                <!--<div class="team-name">FPB</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gameigy.png"></div>-->
                                <!--<div class="team-name">IGY</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gamejdm.png"></div>-->
                                <!--<div class="team-name">JDM</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gameblg.png"></div>-->
                                <!--<div class="team-name">BLG.J</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gameedg.png"></div>-->
                                <!--<div class="team-name">EDG.Y</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gamefpb.png"></div>-->
                                <!--<div class="team-name">FPB</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gameigy.png"></div>-->
                                <!--<div class="team-name">IGY</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gamejdm.png"></div>-->
                                <!--<div class="team-name">JDM</div>-->
                            <!--</li>-->
                        <!--</ul>-->
                    <!--</div>-->
                    <!--<div class="content-item hidden">-->
                        <!--<ul class="team-list">-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gameblg.png"></div>-->
                                <!--<div class="team-name">BLG.J</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gameedg.png"></div>-->
                                <!--<div class="team-name">EDG.Y</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gamefpb.png"></div>-->
                                <!--<div class="team-name">FPB</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gameigy.png"></div>-->
                                <!--<div class="team-name">IGY</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gamejdm.png"></div>-->
                                <!--<div class="team-name">JDM</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gameblg.png"></div>-->
                                <!--<div class="team-name">BLG.J</div>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<div class="team-logo"><img src="images/gameedg.png"></div>-->
                                <!--<div class="team-name">EDG.Y</div>-->
                            <!--</li>-->
                        <!--</ul>-->
                    <!--</div>-->
                <!--</div>-->
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