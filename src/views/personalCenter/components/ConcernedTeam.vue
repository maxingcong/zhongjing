<template>
    <div>
        <div class="follow-list-box">
            <!--<ul >-->
            <!--<li class="nav-sign-item active"><a href="#"></a></li>-->
            <!--<li class="nav-sign-item"><a href="#">王者荣耀</a></li>-->
            <!--</ul>-->
            <el-tabs v-model="activeName" type="card" class="nav-sign">
                <el-tab-pane label="英雄联盟" name="first">
                    <div class="content-item">
                        <ul class="team-list">
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gameblg.png"></div>
                                <div class="team-name">BLG.J</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gameedg.png"></div>
                                <div class="team-name">EDG.Y</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gamefpb.png"></div>
                                <div class="team-name">FPB</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gameigy.png"></div>
                                <div class="team-name">IGY</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gamejdm.png"></div>
                                <div class="team-name">JDM</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gameblg.png"></div>
                                <div class="team-name">BLG.J</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gameedg.png"></div>
                                <div class="team-name">EDG.Y</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gamefpb.png"></div>
                                <div class="team-name">FPB</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gameigy.png"></div>
                                <div class="team-name">IGY</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gamejdm.png"></div>
                                <div class="team-name">JDM</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gameblg.png"></div>
                                <div class="team-name">BLG.J</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gameedg.png"></div>
                                <div class="team-name">EDG.Y</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gamefpb.png"></div>
                                <div class="team-name">FPB</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gameigy.png"></div>
                                <div class="team-name">IGY</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gamejdm.png"></div>
                                <div class="team-name">JDM</div>
                            </li>
                        </ul>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="王者荣耀" name="second">
                    <div class="content-item">
                        <ul class="team-list">
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gameblg.png"></div>
                                <div class="team-name">BLG.J</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gameedg.png"></div>
                                <div class="team-name">EDG.Y</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gamefpb.png"></div>
                                <div class="team-name">FPB</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gameigy.png"></div>
                                <div class="team-name">IGY</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gamejdm.png"></div>
                                <div class="team-name">JDM</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/gameblg.png"></div>
                                <div class="team-name">BLG.J</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="images/gameedg.png"></div>
                                <div class="team-name">EDG.Y</div>
                            </li>
                        </ul>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import {getFollowTeam} from '@/api/personalCenter'

    export default {
        // name: "infoEdit",
        // props: {
        //     isEdit: {
        //         default: true
        //     }
        // },
        data() {
            return {
                activeName: 'first',
                list: []
            }
        },
        mounted() {
            debugger
            this.query()
        },
        methods: {//关注战队
            query() {
                this.loading = true
                getFollowTeam({}).then(res => {
                    debugger
                    if (res.succeed) {
                        this.list = res.data && res.data.rows || []
                    } else {
                        console.log(res);
                        this.$message.warning(res.data.msg || '')
                        // this.$message.warning('网路开小差')
                    }
                    this.loading = false
                }).catch(err => {
                    this.loading = false
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>