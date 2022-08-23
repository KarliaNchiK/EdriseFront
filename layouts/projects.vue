<template>
  <v-app app>
    <div id="mainContainer" class="div-main-page">
      <Nuxt />
    </div>
  </v-app>
</template>


<script>
export default {
  computed: {
    isMobil() {
      return this.$store.getters["device/mobile"];
    },
  },
  methods: {
    resizeE() {
      if (!this.isMobil && window.innerWidth <= 960) {
        this.$store.commit("device/set_resize", true);
      } else if (this.isMobil && window.innerWidth > 960) {
        this.$store.commit("device/set_resize", false);
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.resizeE);
    this.$nextTick(() => {
      this.resizeE();
    });
  },
  created() {
    if (!!!this.$route.query.comp) {
      this.$router.replace({
        query: {
          comp: "album",
        },
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 960px) {
  .div-main-page {
    overflow-y: auto;
    height: 100vh;
  }
}
</style>