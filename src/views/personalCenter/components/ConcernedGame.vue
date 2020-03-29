<template>
    <div>
        <div class="follow-list-box">
            <el-tabs v-model="activeName" type="card" @tab-click="tabclick" class="nav-sign">
                <el-tab-pane :label="item.gameName" :name="item.gameName + index" v-for="(item,index) in list"
                             :key="index" :id="item.id">
                    <div class="content-item">
                        <List v-if="activeName == (item.gameName + index)" :key="index"
                              :datas="lists[activeName]"></List>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import {
        getFollowMatch,
        getfollowGame
    } from '@/api/personalCenter'
    import List from './ConcernedList'

    export default {
        data() {
            return {
                activeName: '',
                list: [],
                lists: {}
            }
        },
        components: {List},
        mounted() {
            this.queryType()
        },
        methods: {//关注比赛
            tabclick(e) {
                if (e.$attrs && e.$attrs.id) {
                    this.activeName = e.paneName
                    this.query(e.$attrs.id)
                }
                // debugger
            },
            queryType() {
                getfollowGame({type: 1}).then(res => {
                    if (res.succeed) {
                        this.list = res.data && res.data.data || []
                        let item = this.list[0] && this.list[0]
                        if (item.id) {
                            this.activeName = item.gameName + 0
                            this.query(item.id)
                        }
                    } else {
                        console.log(res);
                        this.$message.warning(res.data.msg || '')
                    }
                    this.loading = false
                }).catch(err => {
                    this.loading = false
                    console.log(err)
                })
            },
            query(id) {
                this.loading = true
                getFollowMatch({id: id}).then(res => {
                    debugger
                    if (res.succeed) {
                        this.lists[this.activeName] = res.data && res.data.rows || []
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