<template>
  <div class="home-page">
    <div class='image top'>
      <img src='../../assets/home-ad.png'/>
    </div>

    <div class='section projectDailyReport'>
      <div class='row caption'>
        <div class='text-dark text'>项目日报</div>
        <div class='flex-row more ef-click'>
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
      <div class='flex-column ef-click content '>
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
        <div class='flex-row more ef-click'>
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
      <div class='flex-column ef-click content '>
        <div class='row orders-title'>
          <div class='text-dark text'>
            {{ myOrders.code }}
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
        <div class='text-blue orders-schedule'>
          {{ projectDailyReport.time }}
        </div>
        <div class='text-normal orders-info'>
          {{ projectDailyReport.description }}
        </div>
      </div>
    </div><!-- 我的订单 -->

  </div>
</template>

<script>
import { request } from '../../utils/request'
export default {
  name: 'HomePage',
  data () {
    return {
      projectDailyReport: {
        title: '标题',
        time: '2018-01-01 00:00',
        description: '内容'
      },
      myOrders: {
        code: '运单编号',
        status: '运单状态',
        favour: true,
        startPoint: '起点',
        terminal: '终点',
        time: '2018-08-15 15:55',
        arrival: '到达信息'
      }
    }
  },
  components: {
  },
  created: function () {
    console.log('HomePage created.')

    this.init()
  },
  methods: {
    init: function () {
      console.log('initialize HomePage.')

      let _this = this
      request.projectDailyReportLatest().then(
        function (data) {
          console.log('Get latest project daily report success.')
          console.log('data:' + JSON.stringify(data))

          _this.projectDailyReport = {
            title: data.title,
            time: data.time,
            description: data.description
          }
        },
        function (message) {
          console.log('Get latest project daily report fail.')
          console.log('message:' + message)
        }
      )
    } // projectDailyReportLatest
  }
}
</script>

<style scoped src='./Page.css'/>
<style scoped src='./HomePage.css'/>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
