<template>
  <div id="application">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"><!-- 匹配view router选择的组件会显示在这里，要求缓存页面显示 -->
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"><!-- 匹配view router选择的组件会显示在这里，非缓存页面显示 -->
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="./assets/styles/index.css">
<style scoped>
</style>
