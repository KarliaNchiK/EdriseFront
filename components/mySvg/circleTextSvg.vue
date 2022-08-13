<template>
  <div class="c-pointer d-flex p-relative">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      id="needAnim"
    >
      <path
        d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30Z"
        stroke="transparent"
        fill="none"
        stroke-width="1"
        id="visCardCircle"
      />

      <text class="text" :class="classText">
        <textPath xlink:href="#visCardCircle">
          <slot name="text"></slot>
        </textPath>
      </text>
    </svg>

    <div
      class="
        p-absolute
        d-container-i
        full-size
        d-flex
        align-center
        justify-center
      "
    >
      <slot name="icon"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["classText"],
  // computed: {
  //   scrollY() {
  //     console.log("asd");
  //     return this.$store.getters["data/scrollY"] / 5;
  //   },
  //   scrollClass() {
  //     return {
  //       transform: "rotate(" + this.scrollY + "deg)",
  //     };
  //   },
  // },
  mounted() {
    this.$observer.observe(this.$el.firstChild);
  },
};
</script>

<style lang="scss" scoped>
.active-anim {
  animation: rotate-self-360 10s linear infinite;
}
svg {
  overflow: visible;
  will-change: transform;
  transform-box: fill-box;
  transform-origin: center;
}

.d-container-i {
  left: 0%;
  top: 0%;
}

@keyframes rotate-self-360 {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-360deg);
  }
}
</style>