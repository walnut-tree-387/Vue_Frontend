<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@font-face {
    font-family: proxima_neva;
    src: url('~@/assets/fonts/proxima_neva.otf');
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}
body {
  font-family: 'proxima_neva', sans-serif;
}
</style>
