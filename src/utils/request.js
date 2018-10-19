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
  }
}

export {
  request
}
