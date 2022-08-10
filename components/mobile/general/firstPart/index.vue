<template>
  <div class="div-first d-flex flex-column p-relative">
    <block-images class="block-my-images" />
    <div class="d-flex justify-center align-end black--text flex-grow-1 pb-8">
      <div class="full-width">
        <name-svg />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["visible"],
  components: {
    blockImages: () => import("./blockImgs.vue"),
    nameSvg: () => import("~/components/mySvg/svgName.vue"),
  },
};
</script>

<style lang="scss" scoped>
.div-first {
  max-width: 100%;
}
.block-my-images {
  min-height: 80vh;
}
</style>