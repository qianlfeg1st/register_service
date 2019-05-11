<template>
  <div class="container">

    <div class="wrap">

      <img class="wrap__bg" src="static/civil/civil09.jpg">

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

  &__pre {
    position: absolute;
    bottom: 15vw;
    left: 13vw;
    width: 24.9074vw;
    height: 9.4444vw;
  }

}
</style>
