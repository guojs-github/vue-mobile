<template>
  <div class="form">
    <FormTitle title='项目日报' :showGoback='true' @goback='onGoback'/>
    <mt-loadmore :top-method="onLoadTop" :bottom-method="onLoadBottom" ref="loadmore">
      <div style='wdith: 100px; height: 100px; background-color: red; margin-top: 100px;'>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
import FormTitle from '@/components/Common/FormTitle'
import { Loadmore } from 'mint-ui'
export default {
  name: 'ProjectDailyReportList',
  data () {
    return {
    }
  },
  components: {
    FormTitle,
    Loadmore
  },
  methods: {
    onGoback: function () {
      console.log('On click back')

      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },

    onLoadTop: function () {
      console.log('On load top')

      this.$refs.loadmore.onTopLoaded()
    },

    onLoadBottom: function () {
      console.log('On load bottom')
    }

    /********************************/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
