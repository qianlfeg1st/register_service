<template>
  <div class="container">
    <div class="wrap">

      <img class="wrap__bg" src="static/bg.jpg">

      <router-link to="/lawyer01">
        <img class="wrap__item01" src="static/lawyer/item01.png" @click="">
      </router-link>

      <!-- <router-link to="/lawyer03">
        <img class="wrap__item02" src="static/lawyer/item02.png" @click="">
      </router-link> -->

      <img class="wrap__pre" src="static/pre.png" @click="back">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

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

  &__pre {
    position: absolute;
    bottom: 15vw;
    left: 13vw;
    width: 24.9074vw;
    height: 9.4444vw;
  }

}
</style>
