<template>
  <div class="form">
    <FormTitle title='项目日报' :showGoback='true' @goback='onGoback'/>
    <div class='form-body' >
      <div class='section border-bottom bill-head'>
        <div class='row'>
          <div class='text-normal start-date'>{{ data.head.startDate }}</div>
          <div class='text-normal hyphen'>-</div>
          <div class='text-normal end-date'>{{ data.head.endDate }}</div>
        </div>
      </div>
      <div class='detail'>
        <div :id="item.id" class='section detail-item' v-for="item in data.detail" :key="item.id">
          <div class='row text-blue company'>{{ item.company }}</div>
          <div class='row pickup'>
            <div class='text-normal label'>提货完成</div>
            <div class='text-normal value'>{{ item.pickup }}</div>
          </div>
          <div class='row shipping'>
            <div class='text-normal label'>省际在途</div>
            <div class='text-normal value'>{{ item.shipping }}</div>
          </div>
          <div class='row transfer'>
            <div class='text-normal label'>入库中转</div>
            <div class='text-normal value'>{{ item.transfer }}</div>
          </div>
          <div class='row sign'>
            <div class='label'>入库中转</div>
            <div class='text-normal value'>{{ item.sign }}</div>
          </div>
          <div class='row total'>
            <div class='label'>总单数</div>
            <div class='text-red value'>{{ item.total }}</div>
          </div>
        </div>
        <div class='text-light list-bottom-hint'>—— 我是有底线的 ——</div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from '../../utils/toast'
import { request } from '../../utils/request'
import FormTitle from '@/components/Common/FormTitle'
export default {
  name: 'ProjectDailyReportDetail',
  data () {
    return {
      id: -1,
      data: {
        head: {
          startDate: '',
          endDate: ''
        },
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

      this.getParams()
      if (this.check()) {
        this.query()
      }
    },

    getParams: function () {
      console.log('Get params')
      let params = this.$route.params

      // Bill id
      this.id = params.id
      console.log('bill id:' + this.id)
    },

    check: function () {
      console.log('Check')
      let _this = this

      if (typeof this.id === 'undefined') {
        toast.show(
          '单据识别号无效，无法展示信息',
          2000,
          function () {
            _this.onGoback()
          }
        )
        return false
      }

      return true
    },

    query: function () {
      console.log('Project daily report detail query.')

      let param = {
        id: this.id
      }

      let _this = this
      request.projectDailyReportDetail(param).then(
        function (data) {
          console.log('Call project daily report list success.')
          console.log('Data:' + JSON.stringify(data))

          if (data.return === 0) {
            // head////////////
            _this.data.head.startDate = _this.formatDateString(data.head.startDate)
            _this.data.head.endDate = _this.formatDateString(data.head.endDate)

            // detail////////////
            // clear
            _this.data.detail.splice(0, _this.data.detail.length)
            // add
            for (let i = 0; i < data.detail.length; i++) {
              _this.data.detail.splice(_this.data.detail.length, 1, data.detail[i])
            }
          }
        },
        function (message) {
          console.log('Call project daily report detail fail.')
          console.log('Message:' + message)

          toast.show(
            '获取单据信息失败',
            2000,
            function () {
              _this.onGoback()
            }
          ) // toast
        }
      ) // then
    }, // query

    formatDateString: function (d) {
      console.log('Format date string.')
      console.log('d:' + d)

      if ((typeof d !== 'string') || (d.trim().length <= 0)) {
        return ''
      }

      let temp = window.myApi.time.formatDateString(d)
      temp = temp.replace('-', '年')
      temp = temp.replace('-', '月')
      temp += '日'

      return temp
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='./Detail.css'/>
<style scoped>
</style>
