<template>
  <div class="home-page">
    <div class='image top'>
      <img src='../../assets/trace-banner.png'/>
    </div>

    <div class='section ef-click menu orders-finished' @click='onClickOrdersFinished'>
      <div class='flex-row'>
        <div class='image'>
          <img src='../../assets/query-inventory.png'/>
        </div>
        <div class='text-normal label'>已完结订单</div>
      </div>
      <img src='../../assets/arrow-right.png'/>
    </div>

    <div class='section ef-click menu orders-shipping' @click='onClickOrdersShipping'>
      <div class='flex-row'>
        <div class='image'>
          <img src='../../assets/orders-shipping.png'/>
        </div>
        <div class='text-normal label'>已发货订单</div>
      </div>
      <img src='../../assets/arrow-right.png'/>
    </div>

    <div class='section ef-click menu orders-query' @click='onClickOrdersQuery'>
      <div class='flex-row'>
        <div class='image'>
          <img src='../../assets/query-by-orders-no.png'/>
        </div>
        <div class='text-normal label'>运单号查询</div>
      </div>
      <img src='../../assets/arrow-right.png'/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Trace',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    onClickOrdersFinished: function (e) {
      console.log('On click menu orders finished.')
    },

    onClickOrdersShipping: function (e) {
      console.log('On click menu orders shipping.')
    },

    onClickOrdersQuery: function (e) {
      console.log('On click menu orders query.')
    }

    /**********************************************/
  }
}
</script>

<style scoped src='./Page.css'/>
<style scoped src='./Trace.css'/>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
