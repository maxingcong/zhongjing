<template>
    <div>
        <div class="pannel">
            <div class="pannel-head">
                <ul>
                    <li class="active" @click="switchNum = 1">代理推广{{switchNum == 2 ? '-明细': switchNum == 3 ? '-好友' : switchNum == 4 ? '-兑换' : '' }}</li>
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
                                    <a href="#" class="QR-code-btn">
                                        <div class="promotion-mode"><img src="@/assets/images/code.png"></div>
                                        <div class="promotion-name">二维码</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="invitation-link-btn">
                                        <div class="promotion-mode"><img src="@/assets/images/code.png"></div>
                                        <div class="promotion-name">邀请链接</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="generalization-code-btn">
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
            <AgentPromotionDetails v-if="switchNum == 2" />
            <AgentPromotionFriend v-if="switchNum == 3" />
            <AgentPromotionExchange v-if="switchNum == 4" />
        </div>
    </div>
</template>

<script>
    import AgentPromotionDetails from './components/AgentPromotionDetails'
    import AgentPromotionFriend from './components/AgentPromotionFriend'
    import AgentPromotionExchange from './components/AgentPromotionExchange'
    export default {
        name: "agent_promotion",
        components: {
            AgentPromotionDetails,
            AgentPromotionFriend,
            AgentPromotionExchange
        },
        data() {
            return {
                switchNum: 1
            }
        },
        created() {
            this.query()
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