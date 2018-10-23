<template>
  <div class="form">
    <FormTitle title='项目日报' :showGoback='true' @goback='onGoback'/>
    <div class='form-body' >
      <FormBodyList :list="data.list" :more="data.more" @loadData='onLoadData' @loadMoreData='onLoadMoreData'>
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
          </div><!-- 项目日报 -->
        </template>
      </FormBodyList>
    </div>
  </div>
</template>

<script>
import { request } from '../../utils/request'
import FormTitle from '@/components/Common/FormTitle'
import FormBodyList from '@/components/Common/FormBodyList'
import { Loadmore } from 'mint-ui'
export default {
  name: 'ProjectDailyReportList',
  data () {
    return {
      data: {
        pageIndex: -1,
        pageSize: 30,
        more: true,
        list: []
      }
    }
  },
  components: {
    FormTitle,
    FormBodyList,
    Loadmore
  },
  created: function () {
    console.log('Project daily report list created.')

    this.init()
  },

  methods: {
    onGoback: function () {
      console.log('On click back')

      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },

    onLoadData: function () {
      console.log('On load project daily report data')

      this.query(true)
    },

    onLoadMoreData: function () {
      console.log('On load more project daily report data')

      this.query()
    },

    /********************************/
    init: function () {
      console.log('Project daily report list initialize.')
    },

    query: function (reset) {
      console.log('Project daily report list query.')

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
    } // query
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='./List.css'/>
<style scoped>
</style>
