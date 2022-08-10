<template>
  <div
    class="div-point"
    ref="pCursor"
    :style="{ transform: `translate(${x}px,${y}px)` }"
  >
    <svg-point />
  </div>
</template>

<script>
export default {
  components: {
    svgPoint: () => import("~/components/mySvg/pointSvg.vue"),
  },
  data: () => ({
    half: 0,
  }),
  computed: {
    x() {
      return this.$store.getters["data/x"] - this.half;
    },
    y() {
      return this.$store.getters["data/y"] - this.half;
    },
  },
  mounted() {
    this.half = window.innerHeight * 0.03;
  },
};
</script>

<style lang="scss" scoped>
$size: calc(6vh);
.div-point {
  will-change: transform;
  opacity: 0.9;
  height: $size;
  width: $size;
  pointer-events: none;
  z-index: 6;
  position: fixed;
  transition-property: opacity, transform;
  transition-duration: 1s, 0.1s;
  transition-timing-function: ease, linear;
  // transform: translate(-50%, -50%);
  top: 0;
  left: 0;
}
</style>