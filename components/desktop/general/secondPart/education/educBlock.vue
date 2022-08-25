<template>
  <div
    class="p-relative text-m-subtitle-1 div-b-e colorText--text d-glass pa-4"
  >
    <div class="d-flex">
      <img
        :src="data.imgSrc + darkPicture"
        class="img-logo-k rounded-lg pa-1"
      />
      <div class="pl-4">
        <p class="text-capitalize text-m-body-1">
          {{ data.name }}
        </p>
        <p class="colorSubtitleText--text text-m-subtitle-2">
          {{ title }} обучение в {{ data.dateEnd }} году
        </p>
      </div>
    </div>
    <div class="pt-4">
      <v-icon class="pr-2" color="light-blue lighten-1"
        >mdi-school-outline</v-icon
      >Квалификация - {{ data.qual }}
    </div>
    <div class="py-1">
      <v-icon
        class="pr-2"
        :color="data.colorDip == 'Красный' ? 'red darken-1' : 'blue darken-1'"
        >mdi-book-education-outline</v-icon
      >{{ data.colorDip }} диплом
    </div>
    <div>
      <v-icon class="pr-2" color="purple lighten-3"
        >mdi-chart-timeline-variant-shimmer</v-icon
      >Программа:
      {{ data.programm }}
    </div>
    <div class="py-1">
      <v-icon class="pr-2" color="purple darken-1"
        >mdi-arrow-decision-outline</v-icon
      >Направленность (профиль) образовательной программы: {{ data.way }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    title() {
      let a = "Заверш",
        b = new Date().getFullYear() >= this.data.dateEnd ? "ил" : "у";
      return a + b;
    },
    darkPicture() {
      return this.$vuetify.theme.dark ? "Dark.png" : ".png";
    },
  },
};
</script>

<style lang="scss" scoped>
.img-logo-k {
  height: 7vh;
}

.div-b-e {
  transition: all 0.5s ease;
  & div {
    z-index: 5;
    position: relative;
  }

  &:hover {
    z-index: 8;
    animation: lamp 3s linear 1 forwards;
    transform: scale(1.02);
  }
}

@keyframes lamp {
  0% {
    box-shadow: none;
  }
  15% {
    box-shadow: 0 0 4px var(--v-mainSecondColor-base);
  }
  20% {
    box-shadow: none;
  }
  25% {
    box-shadow: 0 0 4px var(--v-mainSecondColor-base);
  }
  30% {
    box-shadow: none;
  }
  35% {
    box-shadow: 0 0 4px var(--v-mainSecondColor-base);
  }
  40% {
    box-shadow: none;
  }
  45% {
    box-shadow: 0 0 4px var(--v-mainSecondColor-base),
      inset 0 0 1px var(--v-mainFirstColor-base);
  }
  100% {
    box-shadow: 0 0 8px var(--v-mainSecondColor-base),
      inset 0 0 3px var(--v-mainFirstColor-base),
      0 0 12px var(--v-mainSecondColor-base);
  }
}
</style>