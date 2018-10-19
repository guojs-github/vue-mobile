<template>
  <div class="form">
    <FormTitle title='项目日报' :showGoback='true' @goback='onGoback'/>
  </div>
</template>

<script>
import FormTitle from '@/components/Common/FormTitle'
export default {
  name: 'ProjectDailyReportList',
  data () {
    return {
    }
  },
  components: {
    FormTitle
  },
  methods: {
    onGoback: function () {
      console.log('On click back')

      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
    /********************************/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
