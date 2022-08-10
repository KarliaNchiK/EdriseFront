<template>
  <div class="p-relative colorText--text text-m-body-1">
    <div class="d-flex">
      <img
        :src="data.imgSrc + darkPicture"
        class="img-logo-k rounded-lg pa-1"
      />
      <div class="pl-4">
        <p class="text-m-subtitle-1">
          {{ data.name }}
        </p>
        <p class="text-m-subtitle-2 colorSubtitleText--text">
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
    <v-divider></v-divider>
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
  height: 7vmax;
}
</style>