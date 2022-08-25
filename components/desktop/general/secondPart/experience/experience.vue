<template>
  <v-row no-gutters class="flex-row" id="secondPart2">
    <v-col class="pr-8 d-flex flex-column full-height" cols="10">
      <div class="p-relative d-glass">
        <div class="pa-4 d-flex">
          <div class="py-2">
            <p class="text-m-subtitle-1 font-weight-medium">
              Фаттахов Айнур Джамилевич
            </p>
            <p class="text-m-subtitle-2 colorSubtitleText--text">
              Возраст 22 года. Есть 2 патента
            </p>
            <p class="text-m-subtitle-2 colorSubtitleText--text">
              +7 965 609 54 93
            </p>
          </div>
          <drag-img />
        </div>
      </div>
      <div class="p-relative mt-8 d-glass pa-4 flex-grow-1">
        <main-content />
      </div>
    </v-col>
    <right-block class="d-glass" />
  </v-row>
</template>

<script>
import rightBlock from "./rightBlock/index.vue";
import mainContent from "./mainContent/index.vue";
import dragImg from "./dragImg.vue";
import sizeMix from "~/plugins/mixins/size.js";
export default {
  mixins: [sizeMix],
  components: {
    rightBlock,
    mainContent,
    dragImg,
  },
};
</script>


