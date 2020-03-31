<template>
    <div class="page">
        <div class="page-head">
            <div class="head-left"><h5>{{data.data && data.data.matchVideo && data.data.matchVideo.matchName}}</h5>
            </div>
        </div>
        <div class="page-body">
            <div class="about-text" v-html="data.data &&  data.data.matchVideo && data.data.matchVideo.matchIntroduce">
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