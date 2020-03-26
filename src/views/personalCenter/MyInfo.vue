<template>
    <div v-loading="loading">
        <div class="pannel">
            <div class="pannel-body">
                <div class="user-info">
                    <div class="head-sculpture"><img style="width:104px;height: 104px;border-radius: 50%"
                                                     :src="data.avatar"></div>
                    <div class="info-text">
                        <h5>{{data.nickname}} <p><span>ID</span>{{data.id}}</p></h5>
                        <div class="tag"><img src="@/assets/images/phone.png"><span>{{data.phone}}</span></div>
                        <div class="tag no-after"><img src="@/assets/images/email.png"><span>{{data.email}}</span>
                        </div>
                    </div>
                    <div class="operation-box">
                        <a class="edit" @click="edit"><img src="@/assets/images/edit.png"/>修改 </a>
                        <div class="clear"></div>
                        <div class="details">
                            <div class="numbers">
                                <span>竞豆数量</span>
                                <h4>{{data.bean}}</h4>
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
            <InfoEdit v-show="type == 1" ref="infoEdit" @load="loading = false" :isEdit="isEdit" :item="data" @success="query"/>
            <Detailed v-show="type == 2" ref="detailed" @load="loading = false"/>
            <Recharge v-show="type == 3" ref="recharge" @load="loading = false" @success="query"/>
        </div>

    </div>
</template>

<script>
    import InfoEdit from './components/InfoEdit'
    import Detailed from './components/OnfoDetailed'
    import Recharge from './components/Recharge'
    import {queryMyInfo} from '@/api/personalCenter'
    import {mapMutations, mapState} from 'vuex'

    export default {
        name: "my_info",
        data() {
            return {
                isEdit: true,
                type: 1,
                data: {},
                loading: false
            }
        },
        components: {
            InfoEdit,
            Detailed,
            Recharge
        },
        computed: {
            ...mapState(['auth'])
        },
        watch: {
            type() {
                // this.$nextTick(() => {
                switch (this.type) {
                    case 1:
                        this.$refs.infoEdit.query();//编辑信息
                        break;
                    case 2:
                        this.$refs.detailed.query();//明细
                        break;
                    case 3:
                        this.$refs.recharge.query();//充值
                        break;
                    default:
                        this.$refs.infoEdit.query();
                }
                // this.loading = true
                // })
            }
        },
        mounted() {
            this.query()
        },
        methods: {
            ...mapMutations(
                {
                    setAuth: 'SET_AUTH',
                    setBean: 'setBean'
                }
            ),
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
            },
            query() {
                this.loading = true
                console.log(this.auth)
                queryMyInfo({phone: this.auth && this.auth.info.phone}).then(res => {
                    if (res.succeed) {
                        this.data = res.data && res.data.data || {}
                        this.setAuth({
                            'phone': res.data.data.phone,
                            'token': this.auth.info.token,
                            data: res.data.data,
                            img: '1.png'
                        })
                        this.setBean(res.data && res.data.data.bean || 0)
                    } else {
                        console.log(res)
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
    .edit :hover {
        cursor: pointer !important;
    }

</style>