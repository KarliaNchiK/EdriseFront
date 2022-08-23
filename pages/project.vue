<template>
  <div class="page-container d-flex">
    <client-only>
      <nawDraw class="naw-draw flex-shrink-0" />
    </client-only>
    <mainContent class="main-container" />
  </div>
</template>


<script>
export default {
  layout: "projects",
  components: {
    nawDraw: () => import("~/components/projects/nawDraw/index.vue"),
    mainContent: () => import("~/components/projects/mainContent/index.vue"),
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  min-height: 100vh;

  .naw-draw {
    position: sticky;
    top: 0;
    height: 100vh;
  }
}

@media (min-width: 960px) {
  .naw-draw {
    width: 20%;
  }
  .main-container {
    width: 60%;
  }
}
@media (max-width: 960px) {
  .page-container {
    .naw-draw {
      width: 5%;
      z-index: 800;
    }
    .main-container {
      width: 95%;
      z-index: 5;
    }
  }
}
</style>