<template>
  <div class="pa-2" v-if="!isMobil">
    <naw-content />
  </div>
  <div v-else>
    <div class="naw-butt mt-3 pl-1">
      <naw-svg
        class="c-pointer p-relative"
        :class="{ rightPosition: drawer }"
        @click="drawer = !drawer"
        :close="drawer"
      />
    </div>
    <my-dialog bottom content-class="colorBackground" :dialog="drawer">
      <naw-content @dialogFalse="drawer = false" mobile />
    </my-dialog>
  </div>
</template>

<script>
export default {
  components: {
    nawContent: () => import("./content.vue"),
    NawSvg: () => import("~/components/mySvg/nawSvg.vue"),
    myDialog: () => import("~/components/ui/myDialog.vue"),
  },
  data: () => ({
    drawer: false,
  }),
  computed: {
    isMobil() {
      return this.$store.getters["device/mobile"];
    },
  },
};
</script>

<style lang="scss" scoped>
.naw-but {
  height: 3vh;
}
.rightPosition {
  z-index: 999;
  transform: translateX(92vw);
  transition: transform 0.5s ease;
}
</style>