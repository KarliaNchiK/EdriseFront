<template>
  <div class="d-flex div-appBar py-2 justify-end z-5">
    <div class="div-naw-butt mt-3">
      <naw-svg class="c-pointer" @click="drawer = !drawer" :close="drawer" />
    </div>
    <my-dialog bottom content-class="colorBackground" :dialog="drawer">
      <mobile-naw-draw @dialogFalse="drawer = false" />
    </my-dialog>
  </div>
</template>


<script>
import NawSvg from "../../mySvg/nawSvg.vue";
export default {
  components: {
    mobileNawDraw: () => import("./nawDraw.vue"),
    myDialog: () => import("../../ui/myDialog.vue"),
    NawSvg,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>

<style lang="scss" scoped>
.div-naw-butt {
  width: 5vmin;
  z-index: 999;
}
.div-appBar {
  width: 100%;
  max-width: 100vw;
}
</style>

<style>
.transY-enter-active,
.transY-leave-active {
  transition: all 1s cubic-bezier(0.2, 0, 0.3, 1);
}
.transY-enter,
.transY-leave-to {
  transform-origin: bottom !important;
  height: 0vh;
}
</style>