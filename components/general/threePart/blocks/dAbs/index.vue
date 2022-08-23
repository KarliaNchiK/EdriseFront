<template>
  <div class="p-relative overflow-hidden full-height">
    <div
      class="div-m-c d-flex flex-column justify-space-around p-relative"
      ref="divMain"
    >
      <img
        src="images/pc/tp/image.png"
        alt=""
        class="p-absolute full-size z-5 e-none"
      />
      <img
        src="images/pc/tp/triangle.png"
        alt=""
        class="p-absolute full-size z-5 e-none"
      />
      <card-project
        class="card-project"
        v-for="block in blocks"
        :key="block.title"
        v-bind="block"
      ></card-project>
    </div>
  </div>
</template>

<script>
import cardProject from "./cardProject.vue";
import { threePartBlock } from "~/plugins/const.js";
export default {
  props: ["visible"],
  components: {
    cardProject,
  },
  data: () => ({
    blocks: [],
  }),
  created() {
    this.blocks = threePartBlock;
  },
};
</script>


<style lang="scss" scoped>
.div-m-c {
  height: 100vh;

  @for $i from 3 through 7 {
    & > .card-project:nth-child(#{$i}) {
      transform: translateX(150% - 23% * (5 - $i) * (5 - $i));
    }
  }
}
</style>