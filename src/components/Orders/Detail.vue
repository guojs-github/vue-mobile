<template>
  <div class="form">
    <FormTitle title='订单详情' :showGoback='true' @goback='onGoback'/>
    <div class='form-body' >
      <div class='section border-bottom bill-head'>
        <div class='row first'>
          <div class='label text-light'>运单号:</div>
          <div class='value text-normal'>{{ data.head.code }}</div>
        </div>
        <div class='row'>
          <div class='label text-light'>订单状态:</div>
          <div class='value text-normal'>{{ data.head.status }}</div>
        </div>
        <div class='row'>
          <div class='label text-light'>订单类型:</div>
          <div class='value text-normal'>{{ data.head.type }}</div>
        </div>
        <div class='row'>
          <div class='label text-light'>发货编号:</div>
          <div class='value text-normal'>{{ data.head.shippingCode }}</div>
        </div>
        <div class='row multi-line'>
          <div class='label text-light'>收货地址:</div>
          <div class='value text-normal'>{{ data.head.address }}</div>
        </div>
        <div class='row'>
          <div class='label text-light'>联系人:</div>
          <div class='value text-normal'>{{ data.head.contact }}</div>
        </div>
        <div class='row last'>
          <div class='label text-light'>联系电话:</div>
          <div class='value text-normal'>{{ data.head.contactTel }}</div>
        </div>
      </div>
<!--
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
-->	  
    </div>
  </div>
</template>

<script>
import { toast } from '../../utils/toast'
import { request } from '../../utils/request'
import FormTitle from '@/components/Common/FormTitle'
export default {
  name: 'OrderDetail',

  data () {
    return {
      id: -1,
      data: {
        head: {
          id: -1,
          code: '单据编号',
          status: '订单状态',
          favour: false,
          type: '订单类型',
          shippingCode: '发货编号',
          address: '收货地址',
          contact: '联系人',
          contactTel: '联系电话'
        },
        detail: []
      }
    }
  },

  components: {
    FormTitle
  },

  created: function () {
    console.log('Order detail created.')

    this.init()
  },

  methods: {
    onGoback: function () {
      console.log('On click back')

      this.$router.go(-1)
    },

    /********************************/
    init: function () {
      console.log('Order detail initialize.')

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
      console.log('Order detail query.')

      let param = {
        id: this.id
      }

      let _this = this
      request.orderDetail(param).then(
        function (data) {
          console.log('Call order detail success.')
          console.log('Data:' + JSON.stringify(data))

          if (data.return === 0) {
            // head////////////
            _this.data.head.id = data.head.id
            _this.data.head.code = data.head.code
            _this.data.head.status = data.head.status
            _this.data.head.favour = data.head.favour
            _this.data.head.type = data.head.type
            _this.data.head.shippingCode = data.head.shippingCode
            _this.data.head.address = data.head.address
            _this.data.head.contact = data.head.contact
            _this.data.head.contactTel = data.head.contactTel

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
          console.log('Call order detail fail.')
          console.log('Message:' + message)

          toast.show(
            '读取单据信息失败',
            2000,
            function () {
              _this.onGoback()
            }
          ) // toast
        }
      ) // then
    } // query
  } // methods
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='./Detail.css'/>
<style scoped>
</style>
