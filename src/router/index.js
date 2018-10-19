// @此处指向路径由webpack配置文件指定，例如webpack.base.config.js 中resolve的定义
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import ProjectDailyReportList from '@/components/ProjectDailyReport/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', /* 当url后面服务器地址描述后只有/的时候，调用对应组件进行显示 */
      name: 'Home',
      component: Home
    },
    {
      path: '/ProjectDailyReport/list',
      name: 'ProjectDailyReportList',
      component: ProjectDailyReportList
    }
  ]
})
