/*
  请求接口对象
  2018.10.10 By GuoJS
*/

const request = {
  projectDailyReportLatest: () => {
    console.log('Get latest project daily report.')

    let p = new Promise(function (resolve, reject) {
      resolve({
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
  }

}

export {
  request
}
