<template>
  <div class="home-page" @scroll="onScroll">
    <div class='image top'>
      <img src='../../assets/home-ad.png'/>
    </div>

    <div class='section projectDailyReport'>
      <div class='row caption'>
        <div class='text-dark text'>项目日报</div>
        <div class='flex-row more ef-click' @click='onClickProjectDailyReportMore'>
          <div class='text-light more-text' >
            查看更多
          </div>
          <div class='image'>
            <img src='../../assets/arrow-right.png'/>
          </div>
        </div>
      </div>
      <div class='border-bottom caption-bottom-line'>
      </div>
      <div :id='projectDailyReport.id' class='flex-column ef-click content' @click='onClickProjectDailyReportDetail'>
        <div class='text-dark report-title'>
          {{ projectDailyReport.title }}
        </div>
        <div class='text-light report-time'>
          {{ projectDailyReport.time }}
        </div>
        <div class='text-normal report-description'>
          {{ projectDailyReport.description }}
        </div>
      </div>
    </div><!-- 项目日报 -->

    <div class='section my-orders'>
      <div class='row caption'>
        <div class='text-dark text'>我的订单</div>
        <div class='flex-row more ef-click' @click='onClickMyOrdersMore'>
          <div class='text-light more-text'>
            查看更多
          </div>
          <div class='image'>
            <img src='../../assets/arrow-right.png'/>
          </div>
        </div>
      </div>
      <div class='border-bottom caption-bottom-line'>
      </div>
      <div :id = 'myOrders.id' class='flex-column ef-click content' @click='onClickOrderDetail'>
        <div class='row orders-title'>
          <div class='flex-row text'>
            <div>运单号:</div>
            <div class='text-dark label-value-margin'>{{ myOrders.code }}</div>
          </div>
          <div class='flex-row text-dark right'>
            <div class='text-red status'>
              {{ myOrders.status }}
            </div>
            <div class='image favour'>
              <img src='../../assets/star_fill.png' v-if='myOrders.favour == true'>
              <img src='../../assets/star.png' v-else>
            </div>
          </div>
        </div>
        <div class='row orders-schedule'>
          <div class='text-blue startPoint'>{{ myOrders.startPoint}} </div>
          <div class='background-blue hyphen'></div>
          <div class='text-blue terminal'>{{ myOrders.terminal}} </div>
        </div>
        <div class='flex-column text-normal orders-info'>
          <div class='flex-row text-normal time'>
            <div>时间:</div>
            <div class='label-value-margin'>{{ myOrders.time }}</div>
          </div>
          <div class='flex-row text-normal arrival'>
            <div>到达:</div>
            <div class='label-value-margin'>{{ myOrders.arrival }}</div>
          </div>
        </div>
      </div>
    </div><!-- 我的订单 -->

    <div class='section warning'>
      <div class='row caption'>
        <div class='text-dark text'>预警提醒</div>
        <div class='flex-row more ef-click' @click='onClickWarningsMore'>
          <div class='text-light more-text'>
            查看更多
          </div>
          <div class='image'>
            <img src='../../assets/arrow-right.png'/>
          </div>
        </div>
      </div>
      <div class='border-bottom caption-bottom-line'>
      </div>
      <div class='flex-column content '>
        <div class='text-dark warning-title'>
          {{ warning.title }}
        </div>
        <div class='text-light warning-time'>
          {{ warning.time }}
        </div>
        <div class='text-normal warning-content'>
          {{ warning.content }}
        </div>
      </div>
    </div><!-- 预警提醒 -->

  </div>
</template>

<script>
import { request } from '../../utils/request'
export default {
  name: 'HomePage',
  data () {
    return {
      scrollTop: 0,
      projectDailyReport: {
        id: -1,
        title: '标题',
        time: '1900-01-01 00:00',
        description: '描述'
      },
      myOrders: {
        id: -1,
        code: '运单编号',
        status: '运单状态',
        favour: true,
        startPoint: '起点',
        terminal: '终点',
        time: '2018-08-15 15:55',
        arrival: '到达信息'
      },
      warning: {
        id: -1,
        title: '标题',
        time: '1900-01-01 00:00',
        content: '内容'
      }
    }
  },

  components: {
  },

  created: function () {
    console.log('HomePage created.')

    this.init()
  },

  activated: function () {
    console.log('Home page activated.')

    this.init()
  },

  methods: {
    onClickProjectDailyReportMore: function (e) {
      console.log('On click more project daily report.')

      this.$router.push('/ProjectDailyReport/list')
    },

    onClickProjectDailyReportDetail: function (e) {
      console.log('On click project daily report detail.')

      this.$router.push({
        path: '/ProjectDailyReport/detail',
        name: 'ProjectDailyReportDetail',
        params: {
          id: e.currentTarget.id
        }
      })
    },

    onClickMyOrdersMore: function (e) {
      console.log('On click more of my orders.')

      this.$router.push('/Orders/MyOrders')
    },

    onClickOrderDetail: function (e) {
      console.log('On click order detail.')
      console.log('id:' + e.currentTarget.id)

      this.$router.push({
        path: '/Orders/detail',
        name: 'OrderDetail',
        params: {
          id: e.currentTarget.id
        }
      })
    },

	onClickWarningsMore: function (e) {
		console.log('On click more warnings')

		this.$router.push({
			path: '/Warning/list',
			name: 'WarningList'
		})
	},
	
    onScroll: function (e) {
      console.log('On home-page scroll')
      console.log('Scroll top:' + e.currentTarget.scrollTop)

      this.scrollTop = e.currentTarget.scrollTop
    },

    /******************************************************/
    init: function () {
      console.log('initialize HomePage.')

      this.query()
      this.restore()
    },

    query: function () {
      console.log('Query data')

      this.queryProjectDailyReport()
      this.queryMyOrders()
      this.queryWarning()
    },

    queryProjectDailyReport: function () {
      console.log('Get latest project daily report.')

      let _this = this
      request.projectDailyReportLatest().then(
        function (data) {
          console.log('Get latest project daily report success.')
          console.log('data:' + JSON.stringify(data))

          _this.projectDailyReport = {
            id: data.id,
            title: data.title,
            time: data.time,
            description: data.description
          }
        },
        function (message) {
          console.log('Get latest project daily report fail.')
          console.log('message:' + message)
        }
      ) // projectDailyReportLatest
    },

    queryMyOrders: function () {
      console.log('Get latest order.')

      let _this = this
      request.myOrdersLatest().then(
        function (data) {
          console.log('Get latest order success.')
          console.log('data:' + JSON.stringify(data))

          _this.myOrders = {
            id: data.id,
            code: data.code,
            status: data.status,
            favour: data.favour,
            startPoint: data.startPoint,
            terminal: data.terminal,
            time: data.time,
            arrival: data.arrival
          }
        },
        function (message) {
          console.log('Get latest order fail.')
          console.log('message:' + message)
        }
      ) // myOrdersLatest
    },

    queryWarning: function () {
      console.log('Get latest warning.')

      let _this = this
      request.warningLatest().then(
        function (data) {
          console.log('Get latest warning success.')
          console.log('data:' + JSON.stringify(data))

          _this.warning = {
            title: data.title,
            time: data.time,
            content: data.content
          }
        },
        function (message) {
          console.log('Get latest warning fail.')
          console.log('message:' + message)
        }
      ) // warningLatest
    },

    restore: function () {
      console.log('Restore display')
      console.log('scrollTop:' + this.scrollTop)

      // scroll top
      let el = document.getElementsByClassName('home-page')
      if (el.length === 1) {
        el[0].scrollTo(0, this.scrollTop)
      }
    } // restore
  }
}
</script>

<style scoped src='./Page.less' lang='less'/>
<style scoped src='./HomePage.less' lang='less'/>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
