<template>
  <div class="div-two p-relative pt-8" id="secondPart">
    <card-block
      v-for="(block, n) in items"
      :key="block.title"
      v-bind="block"
      :id="'secondPart' + n"
    >
      <component :is="block.comp"></component>
    </card-block>
  </div>
</template>

<script>
import cardBlock from "./cardBlock.vue";

import technology from "./technology/technology.vue";
import education from "./education/education.vue";
import experience from "./experience/experience.vue";
import { secondPart } from "~/static/const/const.js";
export default {
  props: ["visible", "top", "bottom", "end"],
  components: {
    cardBlock,
    technology,
    education,
    experience,
  },
  data: () => ({
    items: [],
  }),
  methods: {},
  created() {
    this.items = secondPart;
  },
  mounted() {
    const blocks = document.querySelectorAll("#secondPart2, #secondPart1");
    blocks.forEach((block) => {
      this.$observer.observe(block);
    });
  },
};
</script>

<style lang="scss" scoped>
.div-two {
  & > div {
    height: 140vmin;
  }
}
</style>