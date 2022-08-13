<template>
  <div id="firstPart" class="first-part">
    <block-images class="block-my-images" />
    <div>
      <name-svg />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    blockImages: () => import("./blockImgs.vue"),
    nameSvg: () => import("~/components/mySvg/svgName.vue"),
  },
  mounted() {
    this.$observer.observe(this.$el);
  },
};
</script>

<style lang="scss" scoped>
.first-part {
  height: 95vh;
}
.block-my-images {
  min-height: 80vh;
}
</style>