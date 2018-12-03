<template>
  <div class="home-page">
    <div class='image top background-image'>
      <div class='row'>
        <div class='avatar image'>
          <img src='../../assets/avatar.png'/>
        </div>
        <div class='login text-white ef-click'>登录/注册 ></div>
      </div>
    </div>

    <div class='booking section'>
      <div class='row'>
        <div class='booking row ef-click'>
          <div class='button-image image'>
            <img src='../../assets/me-booking.png'>
          </div>
          <div class='button-text text-normal'>提送货预约</div>
        </div>
        <div class='my-booking row ef-click'>
          <div class='button-image image'>
            <img src='../../assets/me-my-booking.png'>
          </div>
          <div class='button-text text-normal'>我的预约</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Me',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style scoped src='./Page.css'/>
<style scoped src='./Me.css'/>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
