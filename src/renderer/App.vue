<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'test'
  }
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

body {
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
