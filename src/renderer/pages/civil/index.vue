<template>
  <div class="container">
    <div class="wrap">

      <img class="wrap__bg" src="static/bg.jpg">

      <img class="wrap__pre" src="static/pre.png" @click="back">

      <router-link to="/civil01">
        <img class="wrap__item01" src="static/civil/item01.png">
      </router-link>

      <router-link to="/civil02">
        <img class="wrap__item02" src="static/civil/item02.png">
      </router-link>

      <router-link to="/civil03">
        <img class="wrap__item03" src="static/civil/item03.png">
      </router-link>

      <router-link to="/civil04">
        <img class="wrap__item04" src="static/civil/item04.png">
      </router-link>

      <router-link to="/civil05">
        <img class="wrap__item05" src="static/civil/item05.png">
      </router-link>

      <router-link to="/civil06">
        <img class="wrap__item06" src="static/civil/item06.png">
      </router-link>

      <router-link to="/civil07">
        <img class="wrap__item07" src="static/civil/item07.png">
      </router-link>

      <!-- <router-link to="/civil08">
        <img class="wrap__item08" src="static/civil/item08.png">
      </router-link>

      <router-link to="/civil09">
        <img class="wrap__item09" src="static/civil/item09.png">
      </router-link> -->

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

  &__pre {
    position: absolute;
    bottom: 15vw;
    left: 13vw;
    width: 24.9074vw;
    height: 9.4444vw;
  }

  &__item01 {
    position: absolute;
    top: 50vw;
    left: 15vw;
    width: 67.4074vw;
    height: 12.037vw;
  }

  &__item02 {
    position: absolute;
    top: 61vw;
    left: 15vw;
    width: 67.4074vw;
    height: 12.037vw;
  }

  &__item03 {
    position: absolute;
    top: 72vw;
    left: 15vw;
    width: 67.4074vw;
    height: 12.037vw;
  }

  &__item04 {
    position: absolute;
    top: 83vw;
    left: 15vw;
    width: 67.4074vw;
    height: 12.037vw;
  }

  &__item05 {
    position: absolute;
    top: 94vw;
    left: 15vw;
    width: 67.4074vw;
    height: 12.037vw;
  }

  &__item06 {
    position: absolute;
    top: 105vw;
    left: 15vw;
    width: 67.4074vw;
    height: 12.037vw;
  }

  &__item07 {
    position: absolute;
    top: 116vw;
    left: 15vw;
    width: 67.4074vw;
    height: 12.037vw;
  }

  &__item08 {
    position: absolute;
    top: 127vw;
    left: 15vw;
    width: 67.4074vw;
    height: 12.037vw;
  }

  &__item09 {
    position: absolute;
    top: 138vw;
    left: 15vw;
    width: 67.4074vw;
    height: 12.037vw;
  }
}
</style>
