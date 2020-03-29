<template>
    <div>
        <div class="pannel">
            <div class="pannel-head">
                <ul>
                    <li class="active" @click="switchNum = 1">代理推广{{switchNum == 2 ? '-明细': switchNum == 3 ? '-好友' :
                        switchNum == 4 ? '-兑换' : '' }}
                    </li>
                </ul>
            </div>
            <div class="pannel-body" v-if="switchNum == 1">
                <div class="agent-promotion-box">
                    <div class="agent-promotion-box-title">推广10人即可成为代理，赚取佣金！</div>
                    <div class="competing-beans-box">
                        <div class="box-head">
                            <a @click="switchNum = 2" class="beans-details pull-left">明细</a>
                            <span>您赚取的竞豆</span>
                            <a @click="switchNum = 3" class="good-friend pull-right">好友</a>
                        </div>
                        <div class="clear"></div>
                        <div class="box-body">
                            <h3>0</h3>
                            <a @click="switchNum = 4" class="exchange">立即兑换</a>
                        </div>
                    </div>
                    <div class="extension-box">
                        <div class="my-promotion">
                            <div class="title">我的推广</div>
                            <ul>
                                <li>
                                    <a @click="editType('qrcode')" class="QR-code-btn">
                                        <div class="promotion-mode"><img src="@/assets/images/code.png"></div>
                                        <div class="promotion-name">二维码</div>
                                    </a>
                                </li>
                                <li>
                                    <a @click="editType('invitation-link')" class="invitation-link-btn">
                                        <div class="promotion-mode"><img src="@/assets/images/code.png"></div>
                                        <div class="promotion-name">邀请链接</div>
                                    </a>
                                </li>
                                <li>
                                    <a @click="editType('generalization-code')" class="generalization-code-btn">
                                        <div class="promotion-mode"><img src="@/assets/images/code.png"></div>
                                        <div class="promotion-name">推广码</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="promotion-instructions">
                            <div class="title">推广说明</div>
                            <p>1.邀请10个好友注册参与竞猜，即可成为代理，成为代理后邀请好友或好友竞猜获得奖金即可收获佣金。</p>
                            <p> 2.推广获竞豆，玩家通过你的</p>
                        </div>
                    </div>
                </div>
            </div>
            <AgentPromotionDetails ref="agentPromotionDetails" v-if="switchNum == 2"/>
            <AgentPromotionFriend ref="agentPromotionFriend" v-if="switchNum == 3"/>
            <AgentPromotionExchange ref="agentPromotionExchange" v-if="switchNum == 4"/>
        </div>
        <div class="modal QR-code" :class="{'modal-open': type == 'qrcode'}">
            <div class="modal-content">
                <div class="modal-head">
                    <a @click="type = ''" class="modal-remove"><i class="mdi-set mdi-close el-icon-close"></i></a>
                    <!--<a href="javascript:;" class="modal-remove"><i class="mdi-set mdi-close mr5"></i></a>-->
                    <div class="user-info">
                        <div class="head-sculpture"><img src="@/assets/images/myicon.png"></div>
                        <div class="info-text">
                            <p>中竞网瑞雯</p>
                            <p>ID:23569331311</p>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="QR-code-img"><img src="@/assets/images/QR-code-img.png"></div>
                </div>
            </div>
        </div>
        <!-- 邀请链接弹框 -->
        <div class="modal invitation-link" :class="{'modal-open': type == 'invitation-link'}">
            <div class="modal-content">
                <div class="modal-head modal-body">
                    <a @click="cope" class="modal-remove"><i
                            class="mdi-set mdi-close el-icon-close"></i></a>
                    <div class="invitation-link-box">
                        <h5>推广链接复制成功！</h5>
                        <a href="#" class="determination" @click="type = ''">确定</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 推广码弹框 -->
        <div class="modal generalization-code" :class="{'modal-open': type == 'generalization-code'}">
            <div class="modal-content">
                <div class="modal-head">
                    <a @click="type = ''" class="modal-remove"><i class="mdi-set mdi-close el-icon-close"></i></a>
                    <div class="user-info">
                        <div class="head-sculpture"><img src="@/assets/images/myicon.png"></div>
                        <p>中竞网瑞雯</p>
                        <h2>这里真的太好玩了！注册即送188竞豆！</h2>
                        <h2>和我一起竞猜赢大奖吧！</h2>
                    </div>
                </div>
                <div class="modal-body">
                    <el-input v-model="url"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AgentPromotionDetails from './components/AgentPromotionDetails'
    import AgentPromotionFriend from './components/AgentPromotionFriend'
    import AgentPromotionExchange from './components/AgentPromotionExchange'
    import {queryAgent, queryAgentCode} from '@/api/personalCenter'

    export default {
        name: "agent_promotion",
        components: {
            AgentPromotionDetails,
            AgentPromotionFriend,
            AgentPromotionExchange
        },
        data() {
            return {
                switchNum: 1,
                type: '',
                url: ''
            }
        },
        watch: {
            switchNum() {
                // this.$nextTick(() => {
                switch (this.type) {
                    case 1:
                        this.query();
                        break;
                    case 2:
                        this.$refs.agentPromotionDetails.query();
                        break;
                    case 3:
                        this.$refs.agentPromotionFriend.query();
                        break;
                    case 4:
                        this.$refs.agentPromotionExchange.query();
                        break;
                    default:
                        this.query();
                }
                this.loading = true
                // })
            }
        },
        created() {
            this.query()
        },
        methods: {
            cope() {
                this.type = ''
                document.execCommand('Copy');
            },
            editType(e) {
                this.type = e
            },
            query() {//代理推广
                this.loading = true
                queryAgent({}).then(res => {
                    if (res.success) {
                        this.data = res.data.data || {}
                    } else {
                        console.log(1)
                        // this.$message.warning(res.data.msg || '')
                    }
                    this.loading = false
                }).catch(err => {
                    this.loading = false
                    console.log(err)
                })
                queryAgentCode({}).then(res => {
                    if (res.succeed) {
                        this.data = res.data.data || {}
                    } else {
                        console.log(1)
                        // this.$message.warning(res.data.msg || '')
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

<style scoped lang="less">
    .modal.generalization-code .modal-content {
        margin: 2rem auto;
    }

    .modal.QR-code .modal-content {
        margin: 2rem auto;
    }
</style>