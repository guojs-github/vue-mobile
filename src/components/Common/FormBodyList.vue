<template>
  <mt-loadmore :top-method="onLoadTop" :top-distance='50' ref="loadmore">
    <slot>你需要在列表中插入一些现实内容</slot>
  </mt-loadmore>
</template>

<script>
import { Loadmore } from 'mint-ui'
export default {
  name: 'FormBodyList',
  props: [
  ],
  data () {
    return {
    }
  },
  components: {
    Loadmore
  },
  methods: {
    onLoadTop: function () {
      console.log('On load top of form body list.')

      this.$emit('loadData')
      this.$refs.loadmore.onTopLoaded()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
