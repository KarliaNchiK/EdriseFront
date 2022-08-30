<template>
  <v-row class="full-height div-t-m p-relative" no-gutters>
    <v-col cols="3" class="d-flex justify-end pr-16 pt-16">
      <div class="full-height d-flex flex-column justify-end full-width">
        <div class="vis-card p-relative" @click="dialog = true">
          <circle-text-svg classText="svg-visbut-text">
            <template v-slot:text> Связь -- Связь -- Связь -- </template>
            <template v-slot:icon>
              <v-icon class="i-b-c">mdi-phone-plus</v-icon>
            </template>
          </circle-text-svg>
        </div>
        <p class="text-m-body-2 colorSubtitleText--text">
          &#169; Фаттахов Айнур - {{ new Date().getFullYear() }}
        </p>
      </div>
      <div
        class="mouse-transform div-t-f"
        :style="`--offsetX:${x / 2}px; --offsetY:${y / 2}px`"
      >
        <p>2022</p>
        <p>Разработчик</p>
      </div>
    </v-col>
    <v-col
      cols="6"
      class="p-relative flex-grow-0 d-flex full-height div-text-r-image"
    >
      <img
        :style="`--offsetX:${x}px; --offsetY:${y}px`"
        src="images/pc/pictures/stay.jpg"
        class="img-three mouse-transform"
        ref="img"
      />
      <div class="flex-grow-1 full-size d-flex ml-4">
        <div
          class="full-height c-pointer"
          @mouseenter="onIdea = true"
          @mouseleave="onIdea = false"
        >
          <test-svg style="opacity: 0.8" />
        </div>
        <div class="p-relative d-flex div-sw-text pl-2">
          <v-slide-x-transition mode="out-in">
            <p v-if="!onIdea" key="Go">Вперёд!</p>
            <p v-else key="yep">К успеху!</p>
          </v-slide-x-transition>
        </div>
      </div>
    </v-col>
    <v-col cols="3" class="pl-4 d-flex flex-column">
      <v-btn
        icon
        :style="`--color:${icon.borderColor}; --iconColor:${icon.color}`"
        outlined
        v-for="icon in icons"
        :key="icon.icon"
        large
        class="btn-soc d-flex mt-4"
        target="_blank"
        :href="icon.link"
      >
        <v-icon>{{ icon.icon }}</v-icon>
      </v-btn>
      <div class="full-height justify-end d-flex flex-column div-r-text">
        <div class="text-body-1 d-flex">
          <p class="p-r">- Хотите поработать вместе?</p>
        </div>
        <div class="text-body-1 d-flex justify-end pt-8">
          <p class="p-r">Тогда напишите мне -</p>
        </div>
        <div class="text-h6 d-flex justify-center mt-8 p-relative c-pointer">
          <p class="p-email">karlianchik@gmail.com</p>
        </div>
      </div>
    </v-col>
    <v-dialog v-model="dialog" v-if="dialog" width="unset">
      <my-business-card />
    </v-dialog>
  </v-row>
</template>

<script>
import testSvg from "./testSvg.vue";
import { icons } from "~/static/const/const.js";
import circleTextSvg from "~/components/mySvg/circleTextSvg.vue";

export default {
  components: {
    testSvg,
    myBusinessCard: () => import("~/components/ui/myBusinessCard.vue"),
    circleTextSvg,
  },
  data: () => ({
    angileX: null,
    angileY: null,
    onIdea: false,
    icons: [],
    dialog: false,
  }),
  computed: {
    x() {
      return (this.$store.getters["data/x"] - this.angileX) / 100;
    },
    y() {
      return (this.$store.getters["data/y"] - this.angileY) / 100;
    },
  },
  mounted() {
    let rect = this.$refs.img.getBoundingClientRect();
    this.angileX = rect.x;
    this.angileY = rect.y;
    this.icons = icons;
  },
};
</script>

<style scoped lang="scss">
.i-b-c {
  font-size: 1.8vmax;
}
.div-t-m {
  padding: 10vh 0px 5vh 0;

  .vis-card {
    top: -5%;
    width: 6vmax;
    height: 6vmax;
    transition: transform 1s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

  & .div-t-f {
    writing-mode: vertical-rl;
    font-size: 2em;
    font-weight: 500;
  }
}
.div-text-r-image {
  & > div > .div-sw-text {
    padding-top: 2px;
    writing-mode: vertical-rl;

    & > p {
      font-size: 1.1em;
      font-weight: 500;
    }
  }
}

.img-three {
  width: 70%;
  height: 80vh;
  object-fit: cover;
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0));
}

.mouse-transform {
  will-change: transform;
  transform: translate(var(--offsetX), var(--offsetY));
}
.div-r-text {
  & .p-r {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 2px;
      background: var(--v-mainFirstColor-base);
      opacity: 0.5;
      bottom: 0;
    }

    &::after {
      position: absolute;
      content: "";
      width: 10%;
      height: 2px;
      background: var(--v-colorBackground-base);
      left: -25%;
      bottom: 0;
      transition: all 1s ease;
    }

    &:hover::after {
      left: 100%;
    }
  }

  & .p-email {
    position: relative;
    cursor: pointer;
    &::before {
      transition: all 0.8s ease;
      position: absolute;
      content: "";
      width: 0%;
      height: 2px;
      background-color: var(--v-mainSecondColor-base);
      opacity: 0.8;
      bottom: 0;
      left: 50%;
    }

    &:hover::before {
      left: 0%;
      width: 100%;
    }
  }
}
</style>