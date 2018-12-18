<template>
  <div class="form">
    <FormTitle title='项目日报' :showGoback='true' @goback='onGoback'/>
    <div class='form-body' @scroll="onScroll">
      <FormBodyList
        :list="data.list"
        :more="data.more"
        @loadData='onLoadData'
        @loadMoreData='onLoadMoreData'
      >
        <template slot-scope="{ item }">
          <div class='section projectDailyReport'>
            <div :id='item.id' class='flex-column ef-click content ' @click='onClickDetail'>
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
export default {
  name: 'ProjectDailyReportList',
  data () {
    return {
      scrollTop: 0,
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
    FormBodyList
  },

  created: function () {
    console.log('Project daily report list created.')
  },

  beforeRouteEnter: function (to, from, next) {
    console.log('Project daily report list before router enter.')
    console.log('to:' + to.name)
    console.log('from:' + from.name)
    console.log('next:' + next.name)

    // 从明细来的为回退，其它都是刷新
    if (from.name === 'ProjectDailyReportDetail') {
      to.meta.isBack = true
    } else {
      to.meta.isBack = false
    }

    next() // 继续执行路由, 否则路由中断，页面不显示
  },

  activated: function () {
    console.log('Project daily report list activated.')

    this.init()
  },

  methods: {
    onGoback: function () {
      console.log('On click back')

      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/home')
    },

    onLoadData: function () {
      console.log('On load project daily report data')

      this.query(true)
    },

    onLoadMoreData: function () {
      console.log('On load more project daily report data')

      this.query()
    },

    onClickDetail: function (e) {
      console.log('On click report detail')
      console.log('id:' + e.currentTarget.id)

      this.$router.push({
        path: '/ProjectDailyReport/detail',
        name: 'ProjectDailyReportDetail',
        params: {
          id: e.currentTarget.id
        }
      })
    },

    onScroll: function (e) {
      console.log('On form-body scroll')
      console.log('Scroll top:' + e.currentTarget.scrollTop)

      this.scrollTop = e.currentTarget.scrollTop
    },

    /********************************/
    init: function () {
      console.log('Project daily report list initialize.')

      if (this.$route.meta.isBack) {
        this.restore()
      } else {
        this.query(true)
      }
    },

    query: function (reset) {
      console.log('Project daily report list query.')

      if ((reset !== true) && (this.data.pageIndex < 0)) { // 如果reset标志没有，而且pageIndex不是已经有加载过页面，则不查询
        return
      }

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
    }, // query

    restore: function (reset) {
		console.log('Restore display')
		console.log('reset:' + reset)

		// scroll top
		let el = document.getElementsByClassName('form-body')
		if (el.length === 1) {
			// el[0].scrollTo(0, this.scrollTop) // 微信似乎不支持
			el[0].scrollLeft = 0
			el[0].scrollTop = reset ? 0 : this.scrollTop
		}
    } // restore
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='./List.css'/>
<style scoped>
</style>
