<template>
  <div class="form">
    <FormTitle :title='title'/>
    <component :is='tabView'/>
    <HomeButtonBar @tabChange='onTabChange'/>
  </div>
</template>

<script>
import FormTitle from '@/components/Common/FormTitle'
import HomeButtonBar from '@/components/Home/HomeButtonBar'
import HomePage from '@/components/Home/HomePage'
import Trace from '@/components/Home/Trace'
import Query from '@/components/Home/Query'
import Me from '@/components/Home/Me'
export default {
  name: 'Home',
  data () {
    return {
      title: '首页',
      tabView: 'HomePage'
    }
  },
  components: {
    FormTitle,
    HomeButtonBar,
    HomePage,
    Trace,
    Query,
    Me
  },
  methods: {
    onTabChange: function (param) {
      console.log('On home tab change.')
      console.log('param:' + JSON.stringify(param))

      if (param.id === 1) {
        this.title = '首页'
        this.tabView = HomePage
      } else if (param.id === 2) {
        this.title = '物流跟踪'
        this.tabView = Trace
      } else if (param.id === 3) {
        this.title = '信息查询'
        this.tabView = Query
      } else if (param.id === 4) {
        this.title = '个人中心'
        this.tabView = Me
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
