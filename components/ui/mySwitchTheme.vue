<template>
  <div
    class="switch-theme rounded-xl c-pointer"
    :class="{ 'div-switch-dropShadow': dark }"
    @click="switchTheme"
  >
    <div class="p-relative" :class="dark ? 'darkTheme' : 'lightTheme'">
      <moon-svg :dark="dark" />
    </div>
  </div>
</template>

<script>
import moonSvg from "../mySvg/moonSvg.vue";
export default {
  components: {
    moonSvg,
  },
  computed: {
    dark() {
      return this.$vuetify.theme.dark;
    },
  },
  methods: {
    switchTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
$color: var(--v-mainSecondColor-base);
.div-switch-dropShadow {
  filter: drop-shadow(0 0 2px $color);
}
.switch-theme {
  & > div {
    transition: 0.5s all ease;
    top: -10%;
    padding: 2px;
    aspect-ratio: 1;
    height: 120%;
    border-radius: 24px;
    // border: 1px solid var(--v-mainSecondColor-base);
    // box-shadow: 0 0 2px white;
  }
}
@media (min-width: 960px) {
  .switch-theme {
    height: 2vmax;
    border: 1px solid $color;
    box-shadow: 0 0 6px $color;

    & > .darkTheme {
      left: 50%;
      filter: drop-shadow(0 0 2px white);
      background: var(--v-colorBackground-base);
      // transform: scale(1);
    }

    & > .lightTheme {
      left: 0;
      opacity: 0.6;
      transform: scale(0.8);
    }
  }
}
@media (max-width: 960px) {
  .switch-theme {
    width: 100%;
    height: 4vmax;
    & > .darkTheme {
      border: 1px solid $color;
    }
  }
}
</style>