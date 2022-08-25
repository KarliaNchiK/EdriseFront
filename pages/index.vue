<template>
  <div class="main-container">
    <component :is="firstPart" :visible="bv1" />
    <component :is="secondPart" :top="bv1" :visible="bv2" :bottom="bv3" />
    <component :is="threePart" v-if="renderThree" :visible="bv3" />
  </div>
</template>


<script>
export default {
  asyncData({ isMobile }) {
    return { isMobile };
  },

  computed: {
    bv1() {
      return this.$store.getters["visible/bv1"];
    },
    bv2() {
      return this.$store.getters["visible/bv2"];
    },
    bv3() {
      return this.$store.getters["visible/bv3"];
    },
    renderThree() {
      return this.$store.getters["visible/renderThree"];
    },
    mobile() {
      return this.$store.getters["device/mobile"];
    },
    path() {
      return this.mobile || this.isMobile ? "mobile/" : "desktop/";
    },

    firstPart() {
      let path = this.path;
      return () => import(`../components/${path}general/firstPart/index.vue`);
    },
    secondPart() {
      let path = this.path;
      return () => import(`../components/${path}general/secondPart/index.vue`);
    },
    threePart() {
      let path = this.path;
      return () => import(`../components/${path}general/threePart/index.vue`);
    },
  },
  beforeDestroy() {
    this.$observer.disconnect();
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 960px) {
  .main-container > div {
    width: calc(99.4vw - 16px);
  }
}

@media (min-width: 960px) {
  .main-container > div {
    width: 89.4vw;
    z-index: 4;
  }
}
</style>