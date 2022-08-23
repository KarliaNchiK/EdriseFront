<template>
  <div class="div-two p-relative" id="secondPart">
    <div
      class="d-flex div-cards-content"
      ref="divTwo"
      :style="{ transform: `translateX(-${offsetX}px)` }"
    >
      <div
        class="switch-dots p-absolute d-flex justify-center full-width"
        :style="{ transform: `translateX(${offsetX}px)` }"
      >
        <span
          v-for="(n, i) in 3"
          :key="'dot_' + n"
          :class="{ 'active-dot': i == activeBlock }"
          class="c-pointer"
          @click="changeActive(i)"
        ></span>
      </div>
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
export default {
  props: ["visible", "top", "bottom", "end"],
  components: {
    cardBlock,
    technology,
    education,
    experience,
  },
  data: () => ({
    scrollWidth: 0,
    scrollActive: false,
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
    activeBlock: 0,
  }),

  computed: {
    offsetX() {
      if (typeof window == "undefined" || this.top) return 0;
      if (this.bottom) {
        return this.scrollWidth;
      }

      return window.innerWidth * 0.894 * this.activeBlock;
    },
  },

  methods: {
    scrollY(e) {
      if (this.scrollActive) {
        e.preventDefault();
      } else if (
        !this.scrollActive &&
        window.scrollY >= window.innerHeight &&
        window.scrollY <= window.innerHeight * 3.5
      ) {
        let i = null;
        if (window.scrollY < window.innerHeight * 1.5) {
          i = 0;
        } else if (window.scrollY < window.innerHeight * 2.5) {
          i = 1;
        } else if (window.scrollY < window.innerHeight * 3.5) {
          i = 2;
        }
        if (i != this.activeBlock) {
          this.changeActive(i);
        }
      }
    },
    changeActive(i) {
      this.scrollActive = true;
      let k = 1;
      if (i < this.activeBlock) k += 0.5;
      this.activeBlock = i;
      let offsetY = (this.activeBlock + k) * window.innerHeight;
      window.scrollTo({
        top: offsetY,
        behavior: "instant",
      });
      setTimeout(() => {
        this.scrollActive = false;
      }, 500);
      return;
    },
    resize() {
      this.scrollWidth = window.innerWidth * 1.798;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollY, {
      capture: true,
    });
    window.addEventListener("resize", this.resize);
    this.resize();
    this.$observer.observe(this.$el);
    const block = document.querySelector("#secondPart2");
    this.$observer.observe(block);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },
};
</script>

<style lang="scss" scoped>
.div-two {
  height: 350vh;

  .switch-dots {
    margin-top: 32px;
    z-index: 6;
    span {
      width: 1vw;
      height: 1vw;
      border-radius: 50%;
      background-color: var(--v-mainSecondColor-base);
      margin-right: 8px;
      transition: all 0.5s ease;
      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        content: "";
        position: absolute;
        width: 0.7vw;
        height: 0.7vw;
        background: var(--v-colorBackground-base);
        border-radius: 50%;
        transition: opacity 0.4s ease;
        opacity: 0;
      }

      &:hover {
        &::before {
          opacity: 0.7;
        }
      }
    }
    .active-dot {
      transform: scale(1.5);

      &::before {
        opacity: 1;
      }
    }
  }
  & > .div-cards-content {
    transition: transform 0.5s ease;
    will-change: transform;
    height: 100vh;
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