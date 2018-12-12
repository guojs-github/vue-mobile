/*
  请求接口对象
  2018.10.10 By GuoJS
*/

const request = {
  projectDailyReportLatest: () => {
    console.log('Get latest project daily report.')

    let p = new Promise(function (resolve, reject) {
      resolve({
        id: 1024,
        title: '集一项目运营汇报（支线部分）',
        time: '2018-08-09 15:52',
        description: '2018年至今，业务类型为提货如省仓供898单，其中干线在途29单，声仓已签收867单，在途113单，客户签收498单；支线公司声称1172单，支线在途27单，客户签收1130单。'
      })
    })
    return p
  },

  myOrdersLatest: () => {
    console.log('Get latest order.')

    let p = new Promise(function (resolve, reject) {
      resolve({
        id: 2048,
        code: 'LGS201808190000023',
        status: '已完结',
        favour: true,
        startPoint: '北京',
        terminal: '武汉',
        time: '2018-08-15 15:55',
        arrival: '成都 到港'
      })
    })
    return p
  },

  warningLatest: () => {
    console.log('Get latest warning.')

    let p = new Promise(function (resolve, reject) {
      resolve({
        title: '系统上线提示',
        time: '2019-01-01 00:00',
        content: '兹定于2019元旦期间更新应用系统，当前业务服务将停止，请有关方面配合，做好相关准备工作。'
      })
    })
    return p
  },

  projectDailyReportList: (param) => {
    console.log('Call project daily report list.')
    console.log('param:' + JSON.stringify(param))

    let p = new Promise(function (resolve, reject) {
      let data = {
        return: 0,
        more: true,
        list: []
      }

      if (param.pageIndex < 2) {
        data.more = true
        for (let i = 0; i < param.pageSize; i++) {
          let id = param.pageIndex * param.pageSize + i
          let item = {
            id: id,
            title: '集一项目运营汇报（支线部分）' + id,
            time: '2018-08-09 15:52',
            description: '2018年至今，业务类型为提货如省仓供898单，其中干线在途29单，声仓已签收867单，在途113单，客户签收498单；支线公司声称1172单，支线在途27单，客户签收1130单。'
          }

          data.list[data.list.length] = item
        }
      } else {
        data.more = false
        for (let i = 0; i < 3; i++) {
          let id = param.pageIndex * param.pageSize + i
          let item = {
            id: id,
            title: '集一项目运营汇报（支线部分）' + id,
            time: '2018-08-09 15:52',
            description: '2018年至今，业务类型为提货如省仓供898单，其中干线在途29单，声仓已签收867单，在途113单，客户签收498单；支线公司声称1172单，支线在途27单，客户签收1130单。'
          }

          data.list[data.list.length] = item
        }
      }

      resolve(data)
    })
    return p
  },

  projectDailyReportDetail: (param) => {
    console.log('Call project daily report detail.')
    console.log('param:' + JSON.stringify(param))

    let p = new Promise(function (resolve, reject) {
      let data = {
        return: 0,
        head: {
          startDate: '20180101',
          endDate: '20180831'
        },
        detail: []
      }

      for (let i = 0; i < 100; i++) {
        let item = {
          id: i,
          company: '中通服供应链管理有限公司' + i,
          pickup: 104,
          shipping: 0,
          transfer: 53,
          sign: 51,
          total: 105
        }

        data.detail[data.detail.length] = item
      }

      resolve(data)
    })
    return p
  },

  orderDetail: (param) => {
    console.log('Call order detail.')
    console.log('param:' + JSON.stringify(param))

    let p = new Promise(function (resolve, reject) {
      let data = {
        return: 0,
        head: {
          id: 2048,
          code: 'FH20170811000001',
          status: '已发车',
          favour: true,
          type: '提货入库',
          shippingCode: 'HTM20180808014901',
          address: '温江区XX大道XX路绣大道锦蓉路',
          contact: '王小二',
          contactTel: '15000012345'
        },
        detail: []
      }

      for (let i = 0; i < 100; i++) {
        let item = {
          id: i,
          taskCode: 'YY_XXXXXXX_X16A',
          quantity: i
        }

        data.detail[data.detail.length] = item
      }

      resolve(data)
    })
    return p
  }
}

export {
  request
}
