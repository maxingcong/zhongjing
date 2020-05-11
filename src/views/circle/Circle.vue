<template>
    <div class="circle-content">
        <div class="circle-content-wrap">
            <div class="circle-content-wrap-left" :style="{width: (auth.info && auth.info.token ? '777px' : '100%')}">
                <div class="circle-content-wrap-left-input" v-if="auth.info && auth.info.token">
                    <div ref="editor" class="text"></div>
                    <div style="display: flex;justify-content: space-between;margin-top: 20px">
                        <div ref="toolbar" class="toolbar"></div>
                        <button class="circle-content-wrap-left-input-handle-btn" @click="submitF">发表</button>
                    </div>
                </div>
                <DefaultCircle ref="defalue" v-if="type == ''"/>
                <MyFollow v-if="type == 1"/>
                <MyDynamic v-if="type == 2"/>
                <MyFanse v-if="type == 3"/>
            </div>
            <div class="circle-content-wrap-right" v-if="auth.info && auth.info.token">
                <div class="privatecircleright">
                    <div class="privatecircleright-info">
                        <div class="privatecircleright-info-top">
                            <img class="privatecircleright-info-top-img" src="" alt="">
                        </div>
                        <div class="privatecircleright-info-info">
                            <img class="privatecircleright-info-info-avatar" :src="data.avatar"
                                 alt="" @click="type = ''">
                            <span class="privatecircleright-info-info-txt"
                                  style="text-align: center">{{data.nickname}}</span>
                        </div>
                        <div class="privatecircleright-info-bottom">
                            <div class="privatecircleright-info-bottom-item">
                                <span class="privatecircleright-info-bottom-item-num">{{data.followUserNum}}</span>
                                <span class="privatecircleright-info-bottom-item-desc">
                                    <a @click="type = 1">关注</a></span>
                            </div>
                            <div class="privatecircleright-info-bottom-item">
                                <span class="privatecircleright-info-bottom-item-num">{{data.postNum}}</span>
                                <span class="privatecircleright-info-bottom-item-desc">
                                    <a @click="type = 2">动态</a></span>
                            </div>
                            <div class="privatecircleright-info-bottom-item">
                                <span class="privatecircleright-info-bottom-item-num">{{data.fansNum}}</span>
                                <span class="privatecircleright-info-bottom-item-desc"><a
                                        @click="type = 3">粉丝</a></span>
                            </div>
                        </div>
                    </div>
                    <div class="privatecircleright-list">
                        <div class="privatecircleright-list-title">
                            <span class="privatecircleright-list-title-name">推荐圈子</span>
                            <span class="privatecircleright-list-title-desc">recommend</span>
                        </div>
                        <div class="privatecircleright-list-list">
                            <div class="privatecircleright-list-list-item" v-for="item in Recomlist" :key="item.id">
                                <img class="privatecircleright-list-list-item-img"
                                     :src="item.avatar"
                                     style="width: 64px;height: 64px"
                                     alt="">
                                <span class="privatecircleright-list-list-item-txt">{{item.nickname}}</span>
                                <span class="privatecircleright-list-list-item-follow"
                                      @click="followCircle(item.id)">关注</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import DefaultCircle from './components/DefaultCircle'
  import MyDynamic from './components/MyDynamic'
  import MyFanse from './components/MyFans'
  import MyFollow from './components/MyFollow'
  import E from 'wangeditor'
  import {queryMyInfo, queryMyRecommend, posyCircleAll, queryMyFollowCircle, queryCancelCircle} from '@/api/circle'
  import {mapState} from 'vuex'


  export default {
    components: {
      MyFollow,
      DefaultCircle,
      MyDynamic,
      MyFanse
    },
    data() {
      return {
        editor: null,
        info_: null,
        type: '',
        data: {},
        list: [],
        Recomlist: []
      }
    },
    watch: {
      isClear(val) {
        // 触发清除文本域内容
        if (val) {
          this.editor.txt.clear()
          this.info_ = null
        }
      },
      value: function (value) {
        if (value !== this.editor.txt.html()) {
          this.editor.txt.html(this.value)
        }
      }
      //value为编辑框输入的内容，这里我监听了一下值，当父组件调用得时候，如果给value赋值了，子组件将会显示父组件赋给的值
    },
    computed: {
      ...mapState(['auth'])
    },
    mounted() {
      this.query()
      if (this.auth.info && this.auth.info.token) {
        this.seteditor()
        this.editor.txt.html(this.value)
      }
    },
    methods: {
      submitF() {
        console.log(this.editor.txt)
        let item = this.editor.txt.html().length
        if(item > 1000){
          this.$message.warning('您输入的内容过长，请重新编辑')
          return
        }
        debugger
        posyCircleAll({content: this.editor.txt.html()}).then(res => {
          if (res.succeed) {
            this.$message.success('发表成功')
            this.editor.txt.clear()
            this.info_ = null
            // debugger
            let dom = this.$refs.defalue
            dom.$refs.pulic.query()
            this.query()
          } else {
            this.$message.warning(res.data && res.data.msg || '网络错误')
          }
        }).catch(err => {
          console.log(err)
        })
      },
      followCircle(id) {
        if (true) {
          queryMyFollowCircle({circleId: id}).then(res => {
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
          this.cancelfollowCircle(id)
        }
      },
      cancelfollowCircle(id) {
        queryCancelCircle({circle_id: id}).then(res => {
          if (res.succeed) {
            this.$message.success('取消关注成功')
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
        queryMyInfo({}).then(res => {
          if (res.succeed) {
            this.data = res.data && res.data.data || []
          } else {
            this.$message.warning(res.data && res.data.msg || '网络错误')
            this.list = []
          }
        }).catch(err => {
          console.log(err)
        })
        this.queryList()
      },
      queryList() {
        queryMyRecommend({}).then(res => {
          // let data = res.body
          if (res.succeed) {
            // console.log(res)
            this.Recomlist = res.data && res.data.rows || []
          } else {
            this.$message.warning(res.data && res.data.msg || '网络错误')
            this.list = []
          }
        }).catch(err => {
          console.log(err)
        })
      },
      seteditor() {
        const token = this.auth.info.token
        this.editor = new E(this.$refs.toolbar, this.$refs.editor)
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
      }
    }
  }
</script>

<style scoped lang="less">
    /deep/ .w-e-text-container {
        .w-e-text {
            padding-bottom: 40px;
        }
    }

    /deep/ .w-e-text {
        background: #fff;
        min-height: 40px;
    }

    /deep/ .w-e-icon-happy {
        font-size: 28px;
        color: #fff !important;

        &:hover {
            color: #ffffff;
        }
    }

    /deep/ .w-e-icon-image {
        font-size: 28px;
        color: #fff !important;

        &:hover {
            color: #ffffff;
        }
    }
</style>