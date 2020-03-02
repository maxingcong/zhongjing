<template>
    <div>
        <div class="follow-list-box">
            <el-tabs v-model="activeName" type="card" class="nav-sign">
                <el-tab-pane label="英雄联盟" name="first">
                    <div class="content-item">
                        <ul class="team-list">
                            <li>
                                <div class="team-logo"><img src="@/assets/images/001.png"></div>
                                <div class="team-name">教练BLG.J</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/002.png"></div>
                                <div class="team-name">EDG.Y</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/003.png"></div>
                                <div class="team-name">辅助FPB</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/004.png"></div>
                                <div class="team-name">IGY</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/005.png"></div>
                                <div class="team-name">JDM</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/001.png"></div>
                                <div class="team-name">教练BLG.J</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/002.png"></div>
                                <div class="team-name">EDG.Y</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/003.png"></div>
                                <div class="team-name">辅助FPB</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/004.png"></div>
                                <div class="team-name">IGY</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/005.png"></div>
                                <div class="team-name">JDM</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/001.png"></div>
                                <div class="team-name">教练BLG.J</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/002.png"></div>
                                <div class="team-name">EDG.Y</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/003.png"></div>
                                <div class="team-name">辅助FPB</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/004.png"></div>
                                <div class="team-name">IGY</div>
                            </li>
                            <li>
                                <div class="team-logo"><img src="@/assets/images/005.png"></div>
                                <div class="team-name">JDM</div>
                            </li>
                        </ul>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="王者荣耀" name="second">
                    <div class="content-item">
                        <div class="content-item">
                            <ul class="team-list">
                                <li>
                                    <div class="team-logo"><img src="@/assets/images/001.png"></div>
                                    <div class="team-name">教练BLG.J</div>
                                </li>
                                <li>
                                    <div class="team-logo"><img src="@/assets/images/002.png"></div>
                                    <div class="team-name">EDG.Y</div>
                                </li>
                                <li>
                                    <div class="team-logo"><img src="@/assets/images/003.png"></div>
                                    <div class="team-name">辅助FPB</div>
                                </li>
                                <li>
                                    <div class="team-logo"><img src="@/assets/images/004.png"></div>
                                    <div class="team-name">IGY</div>
                                </li>
                                <li>
                                    <div class="team-logo"><img src="@/assets/images/005.png"></div>
                                    <div class="team-name">JDM</div>
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
    import {queryInfoPlayer} from '@/api/personalCenter'

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
        },
        mounted() {
            this.query()
        },
        methods: {
            query() {
                this.loading = true
                queryInfoPlayer({}).then(res => {
                    if (res.success) {
                        this.data = res.data
                    } else {
                        this.$message.warning('网路开小差')
                    }
                    this.loading = false
                }).catch(err => {
                    this.loading = false
                    console.log(err)
                    this.$message.warning('网路开小差')
                })
            }
        }
    }
</script>

<style scoped>

</style>