<template>
  <div class="home-page">
    <div class='image top'>
      <img src='../../assets/query-info-banner.png'/>
    </div>

    <div class='section ef-click menu query-inventory' @click='onClickQueryInventory'>
      <div class='flex-row'>
        <div class='image'>
          <img src='../../assets/query-inventory.png'/>
        </div>
        <div class='text-normal label'>库存查询</div>
      </div>
      <img src='../../assets/arrow-right.png'/>
    </div>

    <div class='section ef-click menu query-orders' @click='onClickQueryOrders'>
      <div class='flex-row'>
        <div class='image'>
          <img src='../../assets/query-orders.png'/>
        </div>
        <div class='text-normal label'>订单查询</div>
      </div>
      <img src='../../assets/arrow-right.png'/>
    </div>

    <div class='section ef-click menu query-by-bar-code' @click='onClickQueryByBarCode'>
      <div class='flex-row'>
        <div class='image'>
          <img src='../../assets/query-by-bar-code.png'/>
        </div>
        <div class='text-normal label'>条码跟踪</div>
      </div>
      <img src='../../assets/arrow-right.png'/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Query',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    onClickQueryInventory: function (e) {
      console.log('On click query inventory.')
    },

    onClickQueryOrders: function (e) {
      console.log('On click query orders.')
    },

    onClickQueryByBarCode: function (e) {
      console.log('On click query by bar code.')
    }

    /************************************/
  }
}
</script>

<style scoped src='./Page.css'/>
<style scoped src='./Query.css'/>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
