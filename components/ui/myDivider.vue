<template>
  <div
    :class="[
      { gradient: anim },
      { 'm-divider-vertical': vertical },
      { 'm-divider': !vertical },
    ]"
  ></div>
</template>

<script>
export default {
  props: {
    anim: {
      default: false,
      type: Boolean,
    },
    vertical: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.m-divider {
  height: 2px;
  width: 100%;
  background: linear-gradient(
    to right,
    var(--v-mainFirstColor-base),
    var(--v-mainSecondColor-base)
  );

  &-vertical {
    height: 100%;
    width: 2px;
    background: linear-gradient(
      to right,
      var(--v-mainFirstColor-base),
      var(--v-mainSecondColor-base)
    ) !important ;
  }
}
.gradient {
  animation: gradient 10s alternate infinite;
}

@keyframes gradient {
  0% {
    filter: hue-rotate(0);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>