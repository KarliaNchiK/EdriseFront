<template>
  <div class="loading-page">
    <p>Loading...</p>
    <div>
      <inf />
    </div>
  </div>
</template>

<script>
import inf from "./mySvg/infinity.vue";
export default {
  components: {
    inf,
  },
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--v-colorBackground-base);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 999;
}
</style>