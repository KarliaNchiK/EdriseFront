<template>
  <div class="div-three p-relative">
    <div class="div-three-sticky">
      <d-sticky />
    </div>
    <div class="div-three-abs p-absolute">
      <d-abs :visible="visible" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["visible"],
  components: {
    dSticky: () => import("./blocks/dSticky/index.vue"),
    dAbs: () => import("./blocks/dAbs/index.vue"),
  },
};
</script>

<style lang="scss" scoped>
.div-three {
  height: 285vh;
  z-index: 1;
  width: 100vw !important;
  left: -8px;

  & > .div-three-sticky {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    display: block;
  }

  & > .div-three-abs {
    top: 0;
    left: 0;
    width: 100%;
    height: 185vh;
    z-index: 2;
  }
}
</style>