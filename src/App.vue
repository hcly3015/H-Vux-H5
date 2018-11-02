<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  word-break: break-word;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
body {
  background-color: #001827;
}

#app {
  height: 100%;
}
</style>
