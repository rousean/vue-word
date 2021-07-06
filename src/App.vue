<template>
  <div id="app">
    <router-view />
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer.vue'
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('getWords')
  },
  components: {
    Footer
  }
}
</script>

<style lang="less" scoped>
#app {
  height: 100%;
  width: 100%;
}
</style>
