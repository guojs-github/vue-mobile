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
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      projectDailyReport: {
        title: '集一项目运营汇报（支线部分）',
        time: '2018-08-09 15:52',
        description: '2018年至今，业务类型为提货如省仓供898单，其中干线在途29单，声仓已签收867单，在途113单，客户签收498单；支线公司声称1172单，支线在途27单，客户签收1130单。'
      }
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style scoped src='./Page.css'/>
<style scoped src='./HomePage.css'/>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
