<template>
    <div>
        <div class="pannel">
            <div class="pannel-body">
                <div class="user-info">
                    <div class="head-sculpture"><img src="@/assets/images/touxiang01.png"></div>
                    <div class="info-text">
                        <h5>中竞网瑞文 <p><span>ID</span>5656598989</p></h5>
                        <div class="tag"><img src="@/assets/images/phone.png"><span>1598002049</span></div>
                        <div class="tag no-after"><img src="@/assets/images/email.png"><span>791859946@qq.com</span>
                        </div>
                    </div>
                    <div class="operation-box">
                        <a class="edit" @click="edit"><img src="@/assets/images/edit.png"/>修改 </a>
                        <div class="clear"></div>
                        <div class="details">
                            <div class="numbers">
                                <span>竞豆数量</span>
                                <h4>0</h4>
                            </div>
                            <div class="recharge">
                                <a @click="detailed" class="number-detail">明细</a>
                                <a @click="recharge" class="recharge-btn">充值</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <InfoEdit v-if="type == 1" :isEdit="isEdit"/>
            <Detailed v-if="type == 2"/>
            <Recharge v-if="type == 3"/>
        </div>

    </div>
</template>

<script>
    import InfoEdit from './components/InfoEdit'
    import Detailed from './components/OnfoDetailed'
    import Recharge from './components/Recharge'

    export default {
        name: "my_info",
        data() {
            return {
                isEdit: true,
                type: 1
            }
        },
        components: {
            InfoEdit,
            Detailed,
            Recharge
        },
        methods: {
            edit() {
                this.type = 1
                // console.log(123)
                this.isEdit = !this.isEdit
            },
            detailed() {
                this.type = 2
            },
            recharge() {
                this.type = 3
            }
        }
    }
</script>

<style scoped>
    .edit :hover {
        cursor: pointer !important;
    }

</style>