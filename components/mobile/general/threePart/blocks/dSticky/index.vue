<template>
  <div class="full-height div-t-m p-relative" id="threePart">
    <v-row no-gutters class="row-main-container">
      <v-col cols="3" class="d-flex justify-end pr-4 p-relative">
        <div class="text-m-subtitle-1 div-t-f white--text">
          <p>2022</p>
          <p>Разработчик</p>
        </div>
      </v-col>
      <v-col
        cols="9"
        class="p-relative flex-grow-0 d-flex full-height div-text-r-image"
      >
        <img src="images/mobile/pictures/stay.jpg" class="img-three" />
        <div class="flex-grow-1 full-size d-flex ml-2">
          <div class="full-height c-pointer">
            <test-svg />
          </div>
        </div>
      </v-col>
    </v-row>
    <div class="row-contact-details d-flex flex-column justify-end px-2">
      <div class="text-m-subtitle-1 d-flex">
        <p class="p-r">- Хотите поработать вместе?</p>
      </div>
      <div class="text-m-subtitle-1 d-flex justify-end mt-8">
        <p class="p-r">Тогда напишите мне -</p>
      </div>
      <div class="line-icon d-flex align-center mt-8">
        <div class="d-flex align-center justify-space-between flex-grow-1">
          <v-btn
            icon
            :style="`--color:${icon.borderColor}; --iconColor:${icon.color}`"
            outlined
            v-for="icon in icons"
            :key="icon.icon"
            large
            class="btn-soc-mob"
            target="_blank"
            :href="icon.link"
          >
            <v-icon>{{ icon.icon }}</v-icon>
          </v-btn>
        </div>
        <div class="text-m-subtitle-1 d-flex ml-4">
          <p class="p-r">karlianchik@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import testSvg from "./testSvg.vue";
import { icons } from "~/plugins/const.js";
export default {
  components: {
    testSvg,
  },
  data: () => ({
    icons: [],
  }),
  mounted() {
    this.icons = icons;
    this.$observer.observe(this.$el);
  },
};
</script>

<style scoped lang="scss">
.div-t-m {
  padding: 10vh 0px 5vh 0;

  .row-main-container {
    height: 50vh;
    .div-t-f {
      writing-mode: vertical-rl;
      font-weight: 500;
    }

    .img-three {
      width: 70%;
      max-height: 100%;
      object-fit: cover;
      mask-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 1) 70%,
        rgba(0, 0, 0, 0)
      );
    }
  }

  .row-contact-details {
    margin-top: 2vh;
    height: 33vh;

    .p-r {
      position: relative;
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
    }
  }
}
</style>