<template>
  <div class="div-right-part full-width">
    <v-fade-transition mode="out-in">
      <rb-load
        class="d-flex align-center"
        v-if="loading"
        @onload="loading = false"
      />
      <rb-content class="d-flex align-center justify-space-between" v-else />
    </v-fade-transition>
  </div>
</template>

<script>
export default {
  components: {
    rbLoad: () => import("./rbLoad.vue"),
    rbContent: () => import("./rbContent.vue"),
  },
  data: () => ({
    loading: true,
  }),
};
</script>

<style lang="scss" scoped>
.div-right-part {
  margin-top: 5vmin;
  height: 20vmin;
}
</style>