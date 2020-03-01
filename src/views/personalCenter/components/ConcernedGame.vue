<template>
    <div>
        <div class="follow-list-box">
            <!--<ul class="nav-sign">-->
                <!--<li class="nav-sign-item active"><a href="#">英雄联盟</a></li>-->
                <!--<li class="nav-sign-item"><a href="#">王者荣耀</a></li>-->
            <!--</ul>-->
            <el-tabs v-model="activeName" type="card"  class="nav-sign">
                <el-tab-pane label="英雄联盟" name="first">
                    <div class="content-item">
                        <ul class="match-list">
                            <li>
                                <div class="match-img"><img src="@/assets/images/lplsaishi.png"></div>
                                <div class="match-detail">
                                    <p>LPL职业联赛</p>
                                    <p>下一场 11-27  14:00</p>
                                </div>
                                <div class="match-states">
                                    <p>直播中</p>
                                    <label class="lbl lbl-c2">才艺竞猜</label>
                                </div>
                            </li>
                            <li>
                                <div class="match-img"><img src="@/assets/images/kplsais.png"></div>
                                <div class="match-detail">
                                    <p>LPL职业联赛</p>
                                    <p>下一场 11-27  14:00</p>
                                </div>
                                <div class="match-states">
                                    <label class="lbl lbl-c1">计算中</label>
                                </div>
                            </li>
                            <li>
                                <div class="match-img"><img src="@/assets/images/lplsaishi.png"></div>
                                <div class="match-detail">
                                    <p>LPL职业联赛</p>
                                    <p>下一场 11-27  14:00</p>
                                </div>
                                <div class="match-states">
                                    <p>直播中</p>
                                    <label class="lbl lbl-c2">才艺竞猜</label>
                                </div>
                            </li>
                            <li>
                                <div class="match-img"><img src="@/assets/images/kplsais.png"></div>
                                <div class="match-detail">
                                    <p>LPL职业联赛</p>
                                    <p>下一场 11-27  14:00</p>
                                </div>
                                <div class="match-states">
                                    <label class="lbl lbl-c1">计算中</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="王者荣耀" name="second">
                    <div class="content-item">
                        <div class="content-item">
                            <ul class="match-list">
                                <li>
                                    <div class="match-img"><img src="@/assets/images/lplsaishi.png"></div>
                                    <div class="match-detail">
                                        <p>LPL职业联赛</p>
                                        <p>下一场 11-27  14:00</p>
                                    </div>
                                    <div class="match-states">
                                        <p>直播中</p>
                                        <label class="lbl lbl-c2">才艺竞猜</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="match-img"><img src="@/assets/images/kplsais.png"></div>
                                    <div class="match-detail">
                                        <p>LPL职业联赛</p>
                                        <p>下一场 11-27  14:00</p>
                                    </div>
                                    <div class="match-states">
                                        <label class="lbl lbl-c1">计算中</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
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