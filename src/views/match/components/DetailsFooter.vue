<template>
    <div class="page">
        <div class="page-head">
            <div class="head-left"><h5>关于LPL职业联赛</h5></div>
        </div>
        <div class="page-body">
            <div class="about-text">
                <p>
                    英雄联盟职业联赛（LPL竞猜）是国内《英雄联盟》最高级别的职业联赛竞猜，目前分为常规赛竞猜、季后赛竞猜、升降级赛竞猜三部分。十二支顶尖豪门战队将为赛季总冠军荣誉以及高额的赛事奖金继续展开争夺。常规赛将把LPL的12支队伍均分为两个小组，小组内将进行双循环比赛，不同小组间将进行单循环对抗。积分排名前八的战队将晋级季后赛，为赛季总冠军以及高额的赛事奖金继续展开争夺。另外，各队伍将根据积分与排名实力获得参加2019赛季世界总决赛的资格。</p>
                <p>
                    6月1日，2019英雄联盟职业联赛夏季赛将正式开启，各大战队也将迈入新的征程，向夏季赛冠军以及2019全球总决赛出征名额发起冲击。自夏季赛开始，部分战队也会发生一些新的变化，进行了俱乐部品牌升级的六支战队分别是：LNG、TES、JDG、DMO、SN、LGD，他们将以新的队伍精神，为夏季赛带来新的开始。而其余十支LPL战队同样整装待发，为荣誉而战！</p>
            </div>
        </div>
    </div>
</template>

<script>
    // import {queryHomeMatch} from '@/api/home'

    export default {
        data() {
            return {}
        },
        props: {
            data: {
                default: () => {
                    return {}
                },
                type: Object
            }
        },
        mounted() {
            this.query()
        },
        methods: {
            query() {
                console.log('w');
                // queryHomeMatch({}).then(res => {
                //     if (res.success) {
                //         this.data = res.data
                //     } else {
                //         // this.$message.warning('网路开小差')
                //     }
                //     this.loading = false
                // }).catch(err => {
                //     this.loading = false
                //     console.log(err)
                // })
            }
        }
    }
</script>

<style scoped>

</style>