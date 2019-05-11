<template>
  <div class="container">
    <div class="wrap">

      <img class="wrap__bg" src="static/index/bg.jpg" alt="">

      <router-link to="/lawsuit">
        <img class="wrap__item01" src="static/index/item01.png" @click="">
      </router-link>

      <router-link to="/discontent">
        <img class="wrap__item02" src="static/index/item02.png" @click="">
      </router-link>

      <router-link to="/execution">
        <img class="wrap__item03" src="static/index/item03.png" @click="">
      </router-link>

      <router-link to="/finish">
        <img class="wrap__item04" src="static/index/item04.png" @click="">
      </router-link>

      <router-link to="/lawyer">
        <img class="wrap__item05" src="static/index/item05.png" @click="">
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
    top: 50vw;
    left: 15vw;
    width: 67.4074vw;
    height: 12.037vw;
  }

  &__item02 {
    position: absolute;
    top: 65vw;
    left: 15vw;
    width: 67.4074vw;
    height: 12.037vw;
  }

  &__item03 {
    position: absolute;
    top: 80vw;
    left: 15vw;
    width: 67.4074vw;
    height: 12.037vw;
  }

  &__item04 {
    position: absolute;
    top: 95vw;
    left: 15vw;
    width: 67.4074vw;
    height: 12.037vw;
  }

  &__item05 {
    position: absolute;
    top: 110vw;
    left: 15vw;
    width: 67.4074vw;
    height: 12.037vw;
  }
}
</style>