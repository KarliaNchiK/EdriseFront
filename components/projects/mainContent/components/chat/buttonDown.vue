<template>
  <div class="d-flex justify-end pr-2 p-absolute full-width btn-down">
    <v-fab-transition>
      <v-btn
        v-if="canDown"
        fab
        small
        @click="down"
        outlined
        color="blue darken-1"
        class="elevation-2"
      >
        <v-icon>mdi-arrow-down</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
export default {
  props: ["canDown"],
  methods: {
    async down() {
      var scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      window.scrollTo({
        top: scrollHeight,
        behavior: "instant",
      });
      this.$nextTick().then(() => {
        this.$store.commit("data/set_canDown", false);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-down {
  transform: translateY(-150%);
}
</style>