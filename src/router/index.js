// @此处指向路径由webpack配置文件指定，例如webpack.base.config.js 中resolve的定义
import Vue from 'vue'
import Router from 'vue-router'
import Title from '@/components/Title/Title'
import Home from '@/components/Home/Home'
import ProjectDailyReportList from '@/components/ProjectDailyReport/List'
import ProjectDailyReportDetail from '@/components/ProjectDailyReport/Detail'
import MyOrders from '@/components/Orders/MyOrders'
import OrderDetail from '@/components/Orders/Detail'
import OrderTrace from '@/components/Orders/Trace'
import OrderEvaluate from '@/components/Orders/Evaluate'
import WarningList from '@/components/Warning/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', /* 当url后面服务器地址描述后只有/的时候，调用对应组件进行显示 */
      name: 'Title',
      component: Title
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/ProjectDailyReport/list',
      name: 'ProjectDailyReportList',
      component: ProjectDailyReportList,
      meta: {
        keepAlive: true, // 用于判断页面是否要使用缓存机制
        isBack: false // 判断页面是否返回，如果不是返回则还是要刷新数据
      }
    },
    {
      path: '/ProjectDailyReport/detail',
      name: 'ProjectDailyReportDetail',
      component: ProjectDailyReportDetail
    },
    {
      path: '/Orders/MyOrders',
      name: 'MyOrders',
      component: MyOrders,
      meta: {
        keepAlive: true,
        isBack: false
      }
    },
    {
      path: '/Orders/detail',
      name: 'OrderDetail',
      component: OrderDetail,
      meta: {
        keepAlive: true,
        isBack: false
      }
    },
    {
      path: '/Orders/trace',
      name: 'OrderTrace',
      component: OrderTrace
    },
    {
      path: '/Orders/evaluate',
      name: 'OrderEvaluate',
      component: OrderEvaluate
    },
    {
      path: '/Warning/list',
      name: 'WarningList',
      component: WarningList,
      meta: {
        keepAlive: true, 
        isBack: false
      }
    }
  ]
})
