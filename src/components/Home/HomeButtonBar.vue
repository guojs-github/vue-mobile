<template>
  <div class='flex-row button-bar'>
    <div class='flex-column tab' v-for='tab in tabs' v-bind:key='tab.id' :class='{selected:tab.id==selectedTab}' @click='onTabChange(tab.id)'>
      <div class='image'>
        <img v-bind:src='tab.imageSelected' v-if='selectedTab == tab.id' >
        <img v-bind:src='tab.image' v-else >
      </div>
      <div class='text text-normal'>
        {{ tab.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      selectedTab: 1,
      tabs: [
        { id: 1, name: '首页', image: require('@/assets/home.png'), imageSelected: require('@/assets/home_fill.png') },
        { id: 2, name: '物流跟踪', image: require('@/assets/trace.png'), imageSelected: require('@/assets/trace_fill.png') },
        { id: 3, name: '信息查询', image: require('@/assets/query.png'), imageSelected: require('@/assets/query_fill.png') },
        { id: 4, name: '我的', image: require('@/assets/me.png'), imageSelected: require('@/assets/me_fill.png') }
      ]
    }
  },
  methods: {
    onTabChange: function (id) {
      console.log('On tab change.')
      console.log('id:' + id)

      if (id !== this.selectedTab) {
        this.selectedTab = id
        this.$emit('tabChange', {id: id})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='./HomeButtonBar.css' />
<style scoped>
</style>
