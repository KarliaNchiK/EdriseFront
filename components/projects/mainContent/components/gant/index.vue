<template>
  <div class="gant-container">
    <gantHeader class="gant-header" />
    <gantContent class="gant-content" />
  </div>
</template>

<script>
import gantHeader from "./gantHeader.vue";
import gantContent from "./gantContent/index.vue";
export default {
  components: {
    gantHeader,
    gantContent,
  },
};
</script>

<style lang="scss" scoped>
.gant-container {
  padding: 1vmin;
  .gant-header {
    border: 1px solid rgba(128, 128, 128, 0.5);
    border-radius: 4px 4px 0 0;
  }
}
</style>