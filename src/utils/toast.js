/*
  toast显示
  2018.10.25 By GuoJS
*/
import { Toast } from 'mint-ui'

const toast = {
  show: (message, delay, complete) => {
    console.log('Show toast.')
    console.log('message:' + message)
    console.log('complete:' + JSON.stringify(complete))
    console.log('delay:' + delay)

    if ((typeof message !== 'string') || (message.trim().length <= 0)) {
      console.log('Invalid toast message')
      return
    }

    let delayy = 2000
    if ((typeof delay === 'number') && (delay > delayy)) {
      delayy = delay
    }

    let instance = Toast({
      message: message,
      duration: delayy
    })

    setTimeout(
      () => {
        instance.close() // Close the toast

        console.log('Toast complete')
        if (typeof complete === 'function') {
          complete()
        }
      },
      delayy
    )
  } // show
}

export {
  toast
}
