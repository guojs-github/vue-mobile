<template>
  <div class="form">
    <FormTitle title='项目日报' :showGoback='true' @goback='onGoback'/>
    <div class='form-body' >
<!--      <FormBodyList :list="data.list" :more="data.more" @loadData='onLoadData' @loadMoreData='onLoadMoreData'>
        <template slot-scope="{ item }">
          <div class='section projectDailyReport'>
            <div class='flex-column ef-click content '>
              <div class='text-dark report-title'>
                {{ item.title }}
              </div>
              <div class='text-light report-time'>
                {{ item.time }}
              </div>
              <div class='text-normal report-description'>
                {{ item.description }}
              </div>
            </div>
          </div>

        </template>
      </FormBodyList>
-->
    </div>
  </div>
</template>

<script>
// import { request } from '../../utils/request'
import FormTitle from '@/components/Common/FormTitle'
export default {
  name: 'ProjectDailyReportDetail',
  data () {
    return {
      data: {
        head: {},
        detail: []
      }
    }
  },
  components: {
    FormTitle
  },
  created: function () {
    console.log('Project daily report detail created.')

    this.init()
  },

  methods: {
    onGoback: function () {
      console.log('On click back')

      this.$router.go(-1)
    },

    /********************************/
    init: function () {
      console.log('Project daily report detail initialize.')

      this.query()
    },

    query: function () {
      console.log('Project daily report detail query.')
      /*
      let param = {
        pageIndex: reset ? 0 : this.data.pageIndex + 1,
        pageSize: this.data.pageSize
      }

      let _this = this
      request.projectDailyReportList(param).then(
        function (data) {
          console.log('Call project daily report list success.')
          console.log('Data:' + JSON.stringify(data))

          if (data.return === 0) {
            if (reset) {
              _this.data.list.splice(0, _this.data.list.length)
              _this.data.pageIndex = -1
            }

            for (let i = 0; i < data.list.length; i++) {
              _this.data.list.splice(_this.data.list.length, 1, data.list[i])
            }

            _this.data.more = data.more
            _this.data.pageIndex++
          }
        },
        function (message) {
          console.log('Call project daily report list fail.')
          console.log('Message:' + message)
        }
      )
      */
    } // query
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='./Detail.css'/>
<style scoped>
</style>
