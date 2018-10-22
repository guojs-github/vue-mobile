<template>
  <div class="form">
    <FormTitle title='项目日报' :showGoback='true' @goback='onGoback'/>
    <FormBodyList @loadData='onLoadData'>
      <div style='wdith: 100px; height: 500px; background-color: red; margin-top: 50px;'>
      </div>
    </FormBodyList>
  </div>
</template>

<script>
import FormTitle from '@/components/Common/FormTitle'
import FormBodyList from '@/components/Common/FormBodyList'
import { Loadmore } from 'mint-ui'
export default {
  name: 'ProjectDailyReportList',
  data () {
    return {
    }
  },
  components: {
    FormTitle,
    FormBodyList,
    Loadmore
  },
  created: function () {
    console.log('Project daily report list created.')
  },
  methods: {
    onGoback: function () {
      console.log('On click back')

      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },

    onLoadData: function () {
      console.log('On load data')
    }

    /********************************/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
