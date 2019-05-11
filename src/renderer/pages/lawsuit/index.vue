<template>
  <div class="container">
    <div class="wrap">

      <img class="wrap__bg" src="static/lawsuit/bg.jpg">

      <img class="wrap__pre" src="static/pre.png" @click="back">

      <router-link to="/civil">
        <img class="wrap__item01" src="static/lawsuit/item01.png">
      </router-link>

      <router-link to="/administrative">
        <img class="wrap__item02" src="static/lawsuit/item02.png">
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  created () {

  },

  methods: {

    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.wrap {
  $rule: &;
  position: relative;
  width: 100vw;

  &__bg {
    width: 100vw;
  }

  &__item01 {
    position: absolute;
    top: 60vw;
    left: 22vw;
    width: 63.1481vw;
    height: 28.2407vw;
  }

  &__item02 {
    position: absolute;
    top: 100vw;
    left: 22vw;
    width: 63.1481vw;
    height: 28.2407vw;
  }

  &__pre {
    position: absolute;
    bottom: 15vw;
    left: 13vw;
    width: 24.9074vw;
    height: 9.4444vw;
  }
}
</style>