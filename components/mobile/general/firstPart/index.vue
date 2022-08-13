<template>
  <div class="mb-8" id="firstPart">
    <block-images class="block-my-images" />
    <name-svg />
  </div>
</template>

<script>
export default {
  props: ["visible"],
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
.block-my-images {
  min-height: 80vh;
}
</style>