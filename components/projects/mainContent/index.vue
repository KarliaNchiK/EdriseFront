<template>
  <div :class="{ 'full-width': nameComp == 'ads' }">
    <component :is="component" />
  </div>
</template>

<script>
export default {
  computed: {
    nameComp() {
      return !!this.$route.query.comp ? this.$route.query.comp : "album";
    },
    component() {
      let a = this.nameComp;
      return () => import("./components/" + a + "/index.vue");
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  box-sizing: border-box;
  height: 100%;
}
</style>