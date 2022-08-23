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
  .naw-draw {
    position: sticky;
    top: 0;
  }
}

@media (min-width: 960px) {
  .page-container {
    min-height: 100vh;
    .naw-draw {
      width: 20%;
      height: 100vh;
    }
    .main-container {
      width: 60%;
    }
  }
}
@media (max-width: 960px) {
  .page-container {
    .naw-draw {
      width: 5%;
      z-index: 800;
      height: 95vh;
    }
    .main-container {
      width: 95%;
      z-index: 5;
    }
  }
}
</style>