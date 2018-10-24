<template>
  <mt-loadmore :top-method="onLoadTop" :top-distance='50' ref="loadmore">
    <div
      id='form-body-list'
      infinite-scroll-disabled="false"
      infinite-scroll-distance="10"
      v-infinite-scroll="onLoadMore"
    >
      <div v-for="item in list" :key="item.id">
        <slot :item="item">
          {{ item.id }}
        </slot>
      </div>
      <div class='text-light list-bottom-hint'>—— {{ bottomHint }} ——</div>
    </div>
  </mt-loadmore>
</template>

<script>
import { Loadmore, InfiniteScroll } from 'mint-ui'
export default {
  name: 'FormBodyList',

  components: {
    Loadmore,
    InfiniteScroll
  },

  props: {
    list: {
      type: Array,
      required: true
    },
    more: {
      type: Boolean,
      required: false
    }
  },

  data () {
    return {
    }
  },

  computed: {
    bottomHint: function () {
      return this.$props.more ? '拼命加载中' : '我是有底线的'
    }
  },

  activated: function () {
    console.log('Activate FormBodyList component.')
  },

  deactivated: function () {
    console.log('Deactivate FormBodyList component.')
  },

  methods: {
    onLoadTop: function () {
      console.log('On load top of form body list.')

      this.$emit('loadData')
      this.$refs.loadmore.onTopLoaded()
    },

    onLoadMore: function () {
      console.log('On load more data.')

      if (this.$props.more === true) {
        this.$emit('loadMoreData')
      }
    }

    /****************************************/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='./FormBodyList.css'/>
<style scoped>
</style>
