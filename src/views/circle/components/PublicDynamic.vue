<template>
    <div>
        <div class="circle-content-wrap-left-list">
            <div class="circle-content-wrap-left-list-item" v-for="item in list" :key="item.id">
                <div class="circle-content-wrap-left-list-item-info">
                    <img class="circle-content-wrap-left-list-item-info-avatar" :src="item.avatar || item.pic"
                         alt="">
                    <div class="circle-content-wrap-left-list-item-info-content">
                        <span class="circle-content-wrap-left-list-item-info-content-name">{{item.nickname || item.circleName}}</span>
                        <span class="circle-content-wrap-left-list-item-info-content-time">{{item.before}}</span>
                    </div>
                    <button class="circle-content-wrap-left-list-item-info-btn" @click="followCircle(item)"
                            v-if="isCirle !== 4 && item.phone !== auth.info.phone">关注
                    </button>
                </div>
                <span class="circle-content-wrap-left-list-item-title" v-html="item.content"></span>
                 <!-- <div :ref="item.postId + 'toolbar'" v-if="item[postId + 'toolbar']" class="toolbar"></div> -->
                 <div class="circle-content-wrap-left-input" v-if="item[id + 'toolbar']">
                    <div :ref="item.id + 'editor'" class="text"></div>
                    <div style="display: flex;justify-content: space-between;margin-top: 20px">
                        <div :ref="item.id + 'toolbar'" class="toolbar"></div>
                        <button class="circle-content-wrap-left-input-handle-btn" @click="submitF">发表</button>
                    </div>
                </div>
                 <!--  -->
                <div class="circle-content-wrap-left-list-item-content" v-if="isCirle != 4 && item.vidoo">
                    <d-player @play="play" ref="play" class="circle-content-wrap-left-list-item-content-video"
                              :options="{video: {url: item.vidoo}}"/>
                </div>
                <div class="circle-content-wrap-left-list-item-handle">
                    <div class="circle-content-wrap-left-list-item-handle-item" @click="share(item.content)">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/send.png" alt="">
                    </div>
                    <div class="circle-content-wrap-left-list-item-handle-item" @click="thumbsUp(item)">
                        <img class="circle-content-wrap-left-list-item-handle-item-img"
                             src="@/assets/images/circle/dianzan.png" alt="">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">
                            <!--{{item.num}}-->{{item.isZan}}
                        </span>
                    </div>
                    <!-- <div class="circle-content-wrap-left-list-item-handle-item" @click="fabu(item)">
                        <span class="circle-content-wrap-left-list-item-handle-item-txt">
                          评论
                        </span>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="circle-content-wrap-left-more" @click="pageSize+=10">加载更多</div>
    </div>
</template>

<script>
    import VueDPlayer from 'vue-dplayer'
    import '@/assets/css/vue-dplayer.css'
    // import mp4File from '@/assets/video/demo_video.mp4'
    import {
        getCircleAll,
        getCircleFollow,
        queryMyFollowCircle,
        queryCancelCircle,
        getCircleDynamic,
        posyCircleAll,
        queryMyzan
    } from '@/api/circle'
    import E from 'wangeditor'
    import {mapState} from 'vuex'

    export default {
        name: 'publicDynamic',//动态
        components: {
            'd-player': VueDPlayer
        },
        data() {
            return {
                options: {
                    video: {
                        url: ''
                    }
                },
                pageNum: 0,
                pageSize: 10,
                list: []
            }
        },
        props: {
            isCirle: {
                type: String,
                default: ''
            }
        },
        watch: {
            isCirle() {
                this.query()
            }
        },
        mounted() {
            this.query()
        },
        computed: {
            ...mapState(['auth'])
        },
        methods: {
            fabu(item){
                item[item.id + 'toolbar'] = true
                this.$nextTick(()=>{
                this.seteditor(item)
                })                
                debugger
            },
             seteditor(item) {
                 debugger
                const token = this.auth.info.token
                this.editor = new E(this.$refs[item.id + 'toolbar'], this.$refs[item.id + 'editor'])
                this.editor.customConfig.uploadImgShowBase64 = true // base 64 存储图片
                this.editor.customConfig.uploadImgServer = '/api' + '/api/file'// 配置服务器端地址
                this.editor.customConfig.uploadImgHeaders = {
                'Authorization': token
                }// 自定义 header
                this.editor.customConfig.uploadFileName = 'file' // 后端接受上传文件的参数名
                this.editor.customConfig.uploadImgMaxSize = 2 * 1024 * 1024 // 将图片大小限制为 2M
                this.editor.customConfig.uploadImgMaxLength = 6 // 限制一次最多上传 3 张图片
                this.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000 // 设置超时时间

                // 配置菜单
                this.editor.customConfig.menus = [
                // 'head', // 标题
                // 'bold', // 粗体
                // 'fontSize', // 字号
                // 'fontName', // 字体
                // 'italic', // 斜体
                // 'underline', // 下划线
                // 'strikeThrough', // 删除线
                // 'foreColor', // 文字颜色
                // 'backColor', // 背景颜色
                // 'link', // 插入链接
                // 'list', // 列表
                // 'justify', // 对齐方式
                // 'quote', // 引用
                'image', // 插入图片
                'emoticon' // 表情
                // 'table', // 表格
                // 'video', // 插入视频
                // 'code', // 插入代码
                // 'undo', // 撤销
                // 'redo', // 重复
                // 'fullscreen' // 全屏
                ]

                this.editor.customConfig.uploadImgHooks = {
                fail: (xhr, editor, result) => {
                    // 插入图片失败回调
                    console.log(xhr, editor, result)
                },
                success: (xhr, editor, result) => {
                    // 图片上传成功回调
                    console.log(xhr, editor, result)
                },
                timeout: (xhr, editor) => {
                    // 网络超时的回调
                    console.log(xhr, editor)
                },
                error: (xhr, editor) => {
                    // 图片上传错误的回调
                    console.log(xhr, editor)
                },
                customInsert: (insertImg, result, editor) => {
                    console.log(insertImg, editor, result)
                    // 图片上传成功，插入图片的回调
                    //result为上传图片成功的时候返回的数据，这里我打印了一下发现后台返回的是data：[{url:"路径的形式"},...]
                    // console.log(result.data[0].url)
                    //insertImg()为插入图片的函数
                    //循环插入图片
                    // for (let i = 0; i < 1; i++) {
                    // console.log(result)
                    // let url = this.$imgBaseUrl + result.data.realFileName
                    let url = result.data.picture
                    insertImg(url)
                    // }
                }
                }
                this.editor.customConfig.onchange = (html) => {
                this.info_ = html // 绑定当前逐渐地值
                this.$emit('change', this.info_) // 将内容同步到父组件中
                }
                // 创建富文本编辑器
                this.editor.create()
                this.$forceUpdate()
            },
            play() {
                console.log('play callback')
            },
            thumbsUp(item) {
                if(!item.zan){
                    item.isZan++
                    item.zan = true
                }
                if(!this.auth.info.token){
                    this.$router.push({name:'login'})
                }
                queryMyzan({postId: item.postId}).then(res => {
                    if (res.succeed) {
                     this.$message({
                         offset: '200',
                         type: 'success',
                         message: '点赞成功'
                     })
                    } else {
                        this.$message.warning(res.data.msg)
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            share(item){
//                window.open('http://v.t.sina.com.cn/share/share.php?=title'+encodeURIComponent(document.title)+'&url='+encodeURIComponent(location.href)
// +'&source=bookmark','_blank','width=450,height=400')
                posyCircleAll({content: item}).then(res => {
                        if (res.succeed) {
                            this.$message.success('转发成功')
                            this.info_ = null
                            this.query()
                        } else {
                            this.$message.warning(res.data && res.data.msg || '网络错误')
                        }
                        }).catch(err => {
                        console.log(err)
                        })
            },
            followCircle(e) {
                    if(!this.auth.info.token){
                    this.$router.push({name:'login'})
                }
                if (true) {
                    queryMyFollowCircle({circleId: e.id}).then(res => {
                        if (res.succeed) {
                            this.$message.success('关注成功')
                        } else {
                            console.log(res);
                            this.$message.warning(res.data.data.msg || '网络错误')
                        }
                        this.loading = false
                    }).catch(err => {
                        this.loading = false
                        console.log(err)
                    })
                } else {
                    this.cancelfollowCircle(e)
                }
            },
            cancelfollowCircle(e) {
                queryCancelCircle({circle_id: e.id}).then(res => {
                    if (res.succeed) {
                        this.$message.success('关注成功')
                    } else {
                        console.log(res);
                        this.$message.warning(res.data.data.msg || '网络错误')
                    }
                    this.loading = false
                }).catch(err => {
                    this.loading = false
                    console.log(err)
                })
            },
            query() {
                if (this.isCirle == 2) {
                    getCircleFollow({pageNum: this.pageNum, pageSize:this.pageSize}).then(res => {
                        // let data = res.body
                        // debugger
                        if (res.succeed) {
                            // console.log(res)
                            this.list = res.data && res.data.rows || []
                        } else {
                            this.list = []
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                } else {
                    getCircleDynamic({}).then(res => {
                        // let data = res.body
                        // debugger
                        if (res.succeed) {
                            // console.log(res)
                            this.list = res.data && res.data.rows || []
                        } else {
                            this.list = []
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>
