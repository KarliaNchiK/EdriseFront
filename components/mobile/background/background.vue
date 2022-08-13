<template>
  <svg
    viewBox="0 0 390 844"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="`morph-${activemorph}`"
  >
    <path
      d="M204.269 246.662C237.417 164.441 204.269 56.1346 175.857 0L0 0L0 844H231.498C225.579 830.131 210.601 794.769 213.88 760C219.821 697 263.508 687 301.345 588.423C354.491 449.962 169.288 333.429 204.269 246.662Z"
      class="path-large"
    />
    <path
      d="M126.308 0L0 0L0 844H83.411C105.654 819.943 123.526 767.619 119.159 724.717C112.329 657.634 167.174 587.527 192.562 535.236C208.867 501.652 203.246 460.797 186.797 427.284C165.106 383.092 127.775 335.746 119.159 314C103.668 274.907 121.544 189.328 150.14 144.342C172.606 109 148.551 36.0855 126.308 0Z"
      class="path-medium"
    />
    <path
      d="M94.1504 24.317C69.627 13.5512 26.1529 25.6234 0 31.3089V844H35.0046C44.6611 825.94 72.5527 790.327 78.719 758.616C94.1504 679.26 58.9833 683.547 44.4823 607.468C40.191 584.954 124.449 572.366 145.692 485.076C160.517 424.155 44.6611 277.123 35.0046 224.95C25.3482 172.777 95.2448 122.722 109.729 91.6194C124.214 60.5164 119.443 35.4207 94.1504 24.317Z"
      class="path-small"
    />
  </svg>
</template>

<script>
export default {
  computed: {
    activemorph() {
      return this.$store.getters["data/morph"];
    },
  },
};
</script>

<style lang="scss" scoped>
.morph-0 {
  // transform: rotate(30deg) scale(1.3) translateX(-30%);
  transform: rotate(-15deg) scale(1.3) translateX(-10%);
}
.morph-1 {
  transform: rotate(-30deg) scale(1.5) translateX(-20%) translateY(10%);
}

.morph-2 {
  transform: rotate(30deg) scale(1.3) translateX(-30%);
}
svg {
  will-change: transform;
  transition: transform 1s ease;
}
.path-large {
  fill: rgba(248, 105, 105, 0.25);
}
.path-medium {
  fill: rgba(212, 44, 44, 0.25);
}
.path-small {
  fill: rgba(228, 8, 8, 0.25);
}
</style>