<template>
  <div class="p-relative px-2 px-md-0">
    <div class="d-flex justify-space-between align-center">
      <v-btn icon @click="switchMiniVariant" outlined class="d-none d-md-block">
        <v-icon class="miniIcon" :class="{ rotateIcon: miniVariant }">
          mdi-arrow-left-thin
        </v-icon>
      </v-btn>
      <div class="py-4 search-input-container">
        <m-search-input />
      </div>
      <div class="p-relative">
        <v-btn icon class="pa-1 shop-icon">
          <v-icon color="white"> mdi-basket-outline </v-icon>
        </v-btn>
      </div>
    </div>
    <div class="d-flex top-divider full-size p-relative">
      <div class="d-none d-md-block">
        <m-left-panel :miniVariant="miniVariant" />
      </div>
      <div class="flex-grow-1 p-relative full-width">
        <project-cards />
      </div>
    </div>
  </div>
</template>

<script>
import mSearchInput from "./mSearchInput.vue";
import projectCards from "./projectCards/index.vue";
import mLeftPanel from "./leftPanel/leftPanel.vue";
export default {
  components: {
    mSearchInput,
    projectCards,
    mLeftPanel,
  },
  data: () => ({
    miniVariant: true,
    filterStep: [
      "Идея",
      "В разработке",
      "Нет прибыли",
      "Активный рост",
      "Расширение",
    ],
    filterType: [
      "It",
      "Робототехника",
      "Нефтехимия",
      "Медицина",
      "Инженерия",
      "Нанотехнологии",
    ],
    filterSize: ["Локальный", "Местный", "Всероссийский", "Международный"],
    amenities: [],
    amenities2: [],
    amenities3: [],
  }),
  methods: {
    switchMiniVariant() {
      this.miniVariant = !this.miniVariant;
    },
  },
};
</script>


<style scoped lang="scss">
.top-divider {
  border-top: 1px solid rgba(0, 0, 0, 0.15);
}
.miniIcon {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.rotateIcon {
  transform: rotate(180deg);
}

.shop-icon {
  background: #2196f3;
  box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.25),
    inset -2px -2px 4px rgba(0, 0, 0, 0.25), 1px 2px 8px rgba(0, 0, 0, 0.25);
}

@media (min-width: 960px) {
  .search-input-container {
    width: 40%;
  }
}
@media (max-width: 960px) {
  .search-input-container {
    width: 100%;
  }
}
</style>
