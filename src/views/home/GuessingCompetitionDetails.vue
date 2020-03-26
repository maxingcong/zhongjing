<template>
    <div class="main-content">
        <div class="page guessingCompetitionDetails-box">
            <div class="top-ant-lines">
                <ul>
                    <li><a @click="$router.push({name:'home'})">首页</a></li>
                    <li>><a @click="$router.push({name:'guessing_competition_list'})">全部竞猜</a></li>
                    <li>>竞猜详情</li>
                </ul>
            </div>
            <div class="personal-situation" v-if="auth.info.token">
                <div class="head-portrait">
                    <img :src="auth.info.data.avatar" style="width: 36px;height: 36px;border-radius: 50%">
                    <span>{{auth.info.nickname}}</span>
                </div>
                <div class="competing-beans">剩余竞豆： <b>{{auth.bean}}</b></div>
            </div>
            <div class="match-details-box">
                <div class="box-head">
                    <div class="match-details-time">比赛时间 {{data.match && data.match.matchTime | filterTime}}</div>
                    <div class="match-details-name"><img src="@/assets/images/index/sgame01.png">KPL职业赛</div>
                    <div class="match-details-heat"><img src="@/assets/images/index/hotfire.png">预测热度：1566953</div>
                </div>
                <div class="box-body">
                    <div class="match-team-details">
                        <div class="match-team-details-box">
                            <!--<div class="match-team-name">AS仙阁</div>-->
                            <div class="match-team-name">{{data.match && data.match.aName}}</div>
                            <!--<div class="match-team-logo"><img :src="data.match && data.match.aicon"></div>-->
                            <div class="match-team-logo"><img src="@/assets/images/index/bteam01.png"></div>
                        </div>
                    </div>
                    <div class="match-score">
                        <label class="bgcolorlb lb2">比赛中</label>
                        <h4>VS</h4>
                    </div>
                    <div class="match-team-details right-team">
                        <div class="match-team-details-box">
                            <!--<div class="match-team-logo"><img :src="data.match && data.match.bicon"></div>-->
                            <div class="match-team-logo"><img src="@/assets/images/index/bteam02.png"></div>
                            <div class="match-team-name">{{data.match && data.match.bName}}</div>
                            <!--<div class="match-team-name">BIU</div>-->
                        </div>
                    </div>
                </div>
                <div class="ranking-box" style="text-align: center;">
                    <label class="ranking-lb1" :style="{'margin-right': 0,background: data ? 'rgb(78, 171, 62)' : '#ccc' }"
                           @click="submitHouseOwner">申请房主</label>
                    <!--                    <label class="ranking-lb2">NO.2房主:中竞网提莫</label>-->
                    <!--                    <label class="ranking-lb3">NO.3房主:中竞网寒冰</label>-->
                </div>
            </div>
            <div class="guessing-wrap">
                <div v-for="item in data.betting || []" :key="item.id">
                    <!--<img src="@/assets/images/index/lb.png">-->
                    <div style="width: 100%;height: 10px"></div>
                    <div class="guessing-data-box">
                        <div class="box-head" style="margin-bottom: 10px">
                            <div class="head-left">
                                <label>{{item.className}}</label>
                                <h5>{{item.title}}</h5>
                            </div>
                            <div class="head-right">剩余 <img src="@/assets/images/index/miaobiao.png"> <b>24:50:24</b>
                            </div>
                        </div>
                        <div class="box-body">
                            <ul style="position: relative;left: 16px;">
                                <label :style="{flex: '0 0 31%', 'margin-right': '20px','box-sizing': 'border-box'}" v-for="v in item.bettings"
                                       :key="v.id" @click="queryDate(item,v)">
                                    <input type="radio" style="visibility: hidden" name="mode" v-model="guessingType"
                                           :value="v"/>
                                    <li style="width: 100%;border: none;"
                                        :class="{active:guessingType == v}"><h3>
                                        {{v.bettingName}}</h3>
                                        <span>赔率{{v.odds}}</span></li>
                                </label>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="newParticipation">
                <div class="title">最新参与</div>
                <table class="table-info">
                    <thead>
                    <tr>
                        <th>昵称</th>
                        <th>内容</th>
                        <th>时间</th>
                        <th>竞豆</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,index) in data.join || []" :key="index">
                        <td>{{item && item.nickname || ''}}</td>
                        <td><p>{{item && item.bettingName || ''}}</p></td>
                        <td>{{item && item.createTime || '' | filterTime }}</td>
                        <td><span class="text-warning"><b>{{item && item.bean || ''}}</b></span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <el-dialog
                :close-on-click-modal="false"
                :close-on-press-escape="false"
                :show-close="false"
                :visible="dialogVisible">
            <div slot="title" class="dialog_guessing">
                <span>本次预测</span>
                <span v-if="auth.info.token">我的竞豆：{{auth.bean}}</span>
            </div>
            <div class="dialog_guessing_main">
                <div class="dialog_guessing_main_title">{{dialogData.className}}</div>
                <div class="dialog_guessing_main_concat">
                    <div class="guessing_main_concat_title">{{dialogData.title}}</div>
                    <div style="padding-left: 25px">
                        <div class="guessing_main_concat_label">
                            <div class="guessing_main_concat_label_select">我的选择：<i>{{dialogData.bettingName}}</i></div>
                            <div class="guessing_main_concat_label_select_number">赔付：<i>{{dialogData.odds}}</i></div>
                        </div>
                        <div class="guessing_main_concat_input">
                            <input type="number" v-model="quantity"/>
                            <button @click="submit(dialogData)">预测</button>
                        </div>
                        <div class="guessing_main_concat_expect">
                            <div>中奖可获得：{{money}}</div>
                        </div>
                        <div class="guessing_main_concat_expect_rule">
                            <div>结算是固定的倍数/预测范围：5千-50万豆/次</div>
                        </div>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
           <el-button type="text" style="color: #FF8282;font-size: 18px" @click="dialogVisible = false">关 闭</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
    import {queryGuessingDetails, postGuessing, postHouseOwner} from '@/api/home'
    import {mapMutations, mapState} from 'vuex'

    export default {
        name: "guessing-competition-details",
        data() {
            return {
                data: {},
                guessingType: '',
                dialogVisible: false,
                dialogData: {},
                quantity: '',
                money: 0
            }
        },
        watch: {
            quantity(newName) {
                // debugger
                if (!(/(^[1-9]\d*$)/.test(Number(newName)))) {
                    this.quantity = ''
                } else {
                    this.quantity = newName
                }
                let money = this.quantity * this.dialogData.odds
                console.log(money);
                this.money = money && Number(money).toFixed(2)
            }
        },
        components: {},
        computed: {
            id() {
                return this.$route.query.id || ''
            },
            matchInfoId() {
                return this.$route.query.md || ''
            },
            ...mapState(['auth'])
        },
        mounted() {
            this.query()
        },
        methods: {
            ...mapMutations(
                {
                    setBean: 'setBean'
                }
            ),
            queryDate(e, item) {
                // if (!this.auth.info || !this.auth.info.token) {
                //     this.$router.push({name: 'login'})
                //     return
                // }
                this.dialogData = Object.assign({}, e, item)
                this.quantity = ''
                this.dialogVisible = true
            },
            submit() {
                if (!this.quantity) {
                    this.$message.warning('请填入竞猜数量')
                } else {
                    console.log(this.dialogData);
                    postGuessing({
                        bean: this.quantity,
                        bettingId: this.dialogData.bettingId,
                        matchInfoId: this.id
                    }).then(res => {
                        if (res.succeed) {
                            this.$message.success('竞猜成功')
                            this.setBean((this.auth.bean - this.quantity))
                            this.query()
                            // this.data = res.data && res.data.data || {}
                        } else {
                            this.$message.warning(res.data.msg || '网络请求错误')
                            // console.log(res)
                        }
                        this.loading = false
                    }).catch(err => {
                        this.loading = false
                        console.log(err)
                    })
                }
                console.log(1);
            },
            query() {
                queryGuessingDetails({id: this.id, matchInfoId: this.matchInfoId}).then(res => {
                    if (res.succeed) {
                        this.data = res.data && res.data.data || {}
                    } else {
                        console.log(res)
                    }
                    this.loading = false
                }).catch(err => {
                    this.loading = false
                    console.log(err)
                })
            },
            submitHouseOwner() {
                if (true) {
                    postHouseOwner({matchInfoId: this.id}).then(res => {
                        if (res.succeed) {
                            this.$message.success('申请成功')
                            this.$router.push({name: 'my_room'})
                        } else {
                            this.$message.warning(res.data.msg || '网络失败')
                            console.log(res)
                        }
                        this.loading = false
                    }).catch(err => {
                        this.loading = false
                        console.log(err)
                    })
                } else {
                    this.$message.warning('当前房主已存在，或当前竞猜状态不对')
                }
            }
        }
    }
</script>

<style scoped lang="less">
    ul {
        display: flex;
        flex-wrap: wrap;
    }

    .dialog_guessing {
        height: 57px;
        width: 100%;
        background: #FF8282;
        color: #ffffff;
        border-radius: 10px 10px 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 23px;
    }

    /deep/ .el-dialog__header {
        padding: 0;
        border-radius: 10px 10px 0 0;
    }

    /deep/ .el-dialog {
        border-radius: 10px;
    }

    .dialog_guessing_main {
        display: flex;
        padding: 24px;
        box-sizing: border - box;

        .dialog_guessing_main_title {
            width: 104px;
            height: 34px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            background: rgba(255, 79, 79, 1);
            border-radius: 4px;
        }

        .dialog_guessing_main_concat {
            flex: 1;
            margin-left: 18px;

            .guessing_main_concat_title {
                width: 200px;
                height: 23px;
                font-size: 22px;
                font-weight: bold;
                color: rgba(51, 51, 51, 1);
            }

            .guessing_main_concat_label {
                margin-top: 44px;
                font-size: 30px;
                color: #333333;
                display: flex;

                .guessing_main_concat_label_select {
                    width: 300px;
                    font-weight: 400;
                    color: rgba(51, 51, 51, 1);

                    i {
                        font-weight: bold;
                    }
                }

                .guessing_main_concat_label_select_number {
                    width: 103px;
                    line-height: 42px;
                    font-size: 20px;
                    font-weight: bold;
                    color: rgba(255, 163, 31, 1);
                }
            }

            .guessing_main_concat_input {
                display: flex;
                margin-top: 24px;

                input {
                    width: 350px;
                    height: 65px;
                    background: rgba(255, 255, 255, 1);
                    border: 4px solid rgba(250, 95, 84, 1);
                    border-radius: 8px;
                    margin-right: 10px;
                    outline: none;
                    text-indent: 10px;
                    font-size: 34px;
                    font-weight: bold;
                    color: rgba(250, 95, 84, 1);
                }

                button {
                    width: 100px;
                    height: 66px;
                    font-size: 26px;
                    font-weight: bold;
                    outline: none;
                    color: rgba(255, 255, 255, 1);
                    background: rgba(250, 95, 84, 1);
                    border: 0px solid rgba(250, 95, 84, 1);
                    border-radius: 8px;
                }
            }

            .guessing_main_concat_expect {
                width: 305px;
                height: 20px;
                margin-top: 20px;
                font-size: 20px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
            }

            .guessing_main_concat_expect_rule {
                margin-top: 20px;
                width: 352px;
                height: 17px;
                font-size: 16px;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
            }
        }
    }

</style>