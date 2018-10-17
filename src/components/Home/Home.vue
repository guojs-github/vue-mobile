<template>
  <div class="form">
    <div class="title">
    </div>
    <HomeButtonBar/>
  </div>
</template>

<script>
import HomeButtonBar from '@/components/Home/HomeButtonBar'
export default {
  name: 'Home',
  data () {
    return {
      tabView: 'homePage'
    }
  },
  components: {
    HomeButtonBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
