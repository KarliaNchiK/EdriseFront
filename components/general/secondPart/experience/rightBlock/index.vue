<template>
  <v-col cols="2" class="p-relative">
    <div class="p-relative z-5 div-right-part full-size">
      <v-fade-transition mode="out-in">
        <rb-load
          class="d-flex align-center justify-center"
          v-if="loading"
          @onload="loading = false"
        />
        <rb-content
          class="d-flex align-center justify-space-between flex-column"
          v-else
        />
      </v-fade-transition>
    </div>
  </v-col>
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
  & > div {
    height: 100%;
  }
}

@media (max-width: 960px) {
  .div-right-part {
    height: 20vh;
  }
}
@media (min-width: 960px) {
  .div-right-part {
    max-height: 100%;
  }
}
</style>