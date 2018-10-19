<template>
  <div class="title title-red">
    {{ title }}
    <div class='title-back' @click='onClickGoBack' v-if='showGoback==true'/>
  </div>
</template>

<script>
export default {
  name: 'FormTitle',
  props: [
    'title',
    'showGoback'
  ],
  data () {
    return {
    }
  },
  methods: {
    onClickGoBack: function () {
      console.log('Click go back button')

      this.$emit('goback')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src='./FormTitle.css' />
<style scoped>
</style>
