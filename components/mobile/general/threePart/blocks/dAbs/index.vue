<template>
  <div class="div-abs-container colorBackground">
    <div class="div-m-c d-flex flex-column">
      <p class="text-m-title-1">Примеры разработанных страниц и инструментов</p>
      <div class="div-container-m-c flex-grow-1">
        <block-project
          v-for="block in blocks"
          :key="block.title"
          v-bind="block"
        />
      </div>
    </div>
  </div>
</template>

<script>
import blockProject from "./blockProject.vue";
import { threePartBlock } from "~/plugins/const.js";
export default {
  components: { blockProject },
  props: ["visible"],
  data: () => ({
    blocks: [],
  }),
    created() {
    this.blocks = threePartBlock;
  },
};
</script>


<style lang="scss" scoped>
.div-abs-container {
  max-height: 185vh;
  padding-top: 5vh;
  mix-blend-mode: lighten;

  .div-m-c {
    padding: 0 5vw 0 5vw;

    & > .div-container-m-c {
      margin-top: 5vh;

      & > div {
        background-size: 400% 400%;
        animation: gradient 10s ease infinite;


        @for $i from 1 through 5 {
          &:nth-child(#{$i}) {
            animation-delay: -3s * $i;
          }
        }
      }
    }
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 00%;
  }
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 0%;
  }
  75% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>