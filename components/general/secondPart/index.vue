<template>
  <div class="div-two p-relative" id="secondPart">
    <div
      class="d-flex div-cards-content"
      ref="divTwo"
      :style="{ transform: `translateX(-${offsetX}px)` }"
    >
      <card-block
        v-for="(block, n) in items"
        :key="block.title"
        :title="block.title"
        :left="block.left"
        :img="block.img"
        :class="{ activeBlock: activeBlock == n }"
      >
        <component :is="block.comp"></component>
      </card-block>
    </div>
  </div>
</template>

<script>
import cardBlock from "./cardBlock.vue";

import technology from "./technology/technology.vue";
import education from "./education/education.vue";
import experience from "./experience/experience.vue";

import { debounce } from "vue-debounce";
export default {
  props: ["visible", "top", "bottom", "end"],
  components: {
    cardBlock,
    technology,
    education,
    experience,
  },
  data: () => ({
    left: 0,
    scrollWidth: 0,
    items: [
      {
        title: "Технологии",
        img: "/me/stayBorder",
        left: true,
        comp: "technology",
      },
      {
        title: "Образование",
        img: "/me/headRight",
        left: false,
        comp: "education",
      },
      {
        title: "О себе",
        img: "/me/smile",
        left: true,
        comp: "experience",
      },
    ],
  }),

  computed: {
    activeBlock() {
      if (typeof window == "undefined") return 0;
      return Math.round(this.left / (window.innerWidth * 0.894));
    },
    scrollY() {
      return this.$store.getters["data/scrollY"];
    },
    offsetX() {
      if (typeof window == "undefined") return 0;
      this.left = this.scrollY - window.innerHeight;
      if (this.left < 0) return 0;
      else if (this.left > this.scrollWidth) {
        this.left = this.scrollWidth;
      }
      this.debounceInput(this);
      return this.left;
    },
  },

  methods: {
    debounceInput: debounce((t) => {
      if (t.top || t.bottom) return;
      let sdvig =
        window.innerWidth * 0.894 * t.activeBlock + window.innerHeight;
      window.scrollTo({
        top: sdvig,
        behavior: "smooth",
      });
    }, 600),

    resize() {
      this.scrollWidth = window.innerWidth * 1.798;
    },
  },
  mounted() {
    window.addEventListener("resize", this.resize);
    this.resize();
    this.$observer.observe(this.$el);
    const block = document.querySelector("#endSecondPart");
    this.$observer.observe(block);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },
};
</script>

<style lang="scss" scoped>
.div-two {
  height: calc(179.8vw + 100vh);
  & > .div-cards-content {
    transition: transform 100ms linear;
    will-change: transform;
    height: 100vh;
    max-height: 100vh;
    position: sticky;
    top: 0px;
    left: 0px;

    & > div {
      will-change: transform;
      transition-property: transform, opacity;
      transition: 0.5s ease;
      opacity: 0.6;
      transform: scale(0.9);
      flex: 1 0 100%;
    }
  }
}

.activeBlock {
  opacity: 1 !important;
  transform: scale(1) !important;
}
</style>