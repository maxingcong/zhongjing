<template>
    <div>
        <div class="follow-list-box">
            <!--<ul >-->
                <!--<li class="nav-sign-item active"><a href="#"></a></li>-->
                <!--<li class="nav-sign-item"><a href="#">王者荣耀</a></li>-->
            <!--</ul>-->
            <el-tabs v-model="activeName" type="card"  class="nav-sign">
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
    export default {
        name: "infoEdit",
        props: {
            isEdit: {
                default: true
            }
        },
        data() {
            return {
                activeName: 'first'
            }
        }
    }
</script>

<style scoped>

</style>