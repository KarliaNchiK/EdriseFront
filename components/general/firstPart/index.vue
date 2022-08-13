<template>
  <div class="div-first d-flex flex-column p-relative" id="firstPart">
    <p class="ff-ibm-medium text-m-h4 text-uppercase colorText--text">
      Fullstack
    </p>
    <p class="ff-ibm-medium text-m-h4 text-uppercase mt-n6 colorText--text">
      разработчик
    </p>
    <block-images class="mt-6 block-my-images" />
    <div
      class="
        d-flex
        justify-space-between
        align-end
        black--text
        flex-grow-1
        pb-8
      "
    >
      <circle-text-svg class="svg-c-t" classText="svg-c-t-text">
        <template v-slot:text> Edrise — Edrise — Edrise — </template>
        <template v-slot:icon>
          <v-icon color="colorText" class="text-m-h4">
            mdi-arrow-down-thin
          </v-icon>
        </template>
      </circle-text-svg>

      <p
        class="
          font-weight-bold
          colorText--text
          p-l10vw
          ff-poppins
          text-m-subtitle-2
        "
      >
        ПОДДЕРЖИВАЮ ДИЗАЙНЕРОВ <br />
        И АГЕНТСТВА <br />
        С ТВОРЧЕСКОЙ РАЗРАБОТКОЙ
      </p>
      <div class="flex-grow-1">
        <name-svg />
      </div>
    </div>
  </div>
</template>

<script>
import circleTextSvg from "~/components/mySvg/circleTextSvg.vue";
export default {
  props: ["visible"],
  components: {
    blockImages: () => import("./blockImgs.vue"),
    nameSvg: () => import("~/components/mySvg/svgName.vue"),
    circleTextSvg,
  },
  mounted() {
    this.$observer.observe(this.$el);
  },
};
</script>

<style lang="scss">
.svg-c-t-text {
  font-size: 0.86em;
  letter-spacing: 0.05rem;
  fill: var(--v-mainFirstColor-base) !important;
}
</style>

<style lang="scss" scoped>
.div-first {
  max-width: 100%;
  height: 85vh;
  padding-top: 4vh;
  .block-my-images {
    height: 30vh;
  }

  .svg-c-t {
    width: 5vw;
  }

  & .p-l10vw {
    padding-left: 10vw;
  }

  & div:last-child > div:last-child {
    margin-left: 18vw;
  }
}
</style>