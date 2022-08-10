<template>
  <div :class="[dark ? 'darkTheme' : 'lightTheme']" :style="`--way:${way}`">
    <transition name="tr-slider" mode="out-in">
      <contentCard :key="activeBlock" v-bind="aboutMe[activeBlock]">
        <div class="btns-slider d-flex justify-space-between">
          <div
            v-for="n in aboutMe.length"
            :key="'icon_' + n"
            class="btn-slider rounded-circle p-relative c-pointer"
            :class="{ 'b-op-1': activeBlock == n - 1 }"
            @click="go(n)"
          ></div>
        </div>
      </contentCard>
    </transition>
  </div>
</template>

<script>
import { aboutMe } from "~/plugins/const.js";
export default {
  components: {
    contentCard: () => import("./card.vue"),
  },
  data: () => ({
    activeBlock: 0,
    way: 1,
    aboutMe: [],
  }),
  computed: {
    dark() {
      return this.$vuetify.theme.dark;
    },
  },
  methods: {
    go(n) {
      this.way = this.activeBlock > n - 1 ? -1 : 1;
      this.activeBlock = n - 1;
    },
  },
  created() {
    this.aboutMe = aboutMe;
  },
};
</script>

<style lang="scss" scoped>
@use "~/assets/mixins.scss" as m;

.b-op-1::before {
  opacity: 1 !important;
  box-shadow: inset 0 0 6px grey;
  filter: blur(0px) !important;
}
.lightTheme .btns-slider {
  @include m.my-theme-colors(15, 300);
}

.darkTheme .btns-slider {
  @include m.my-theme-colors(5, 10);
}

.btns-slider {
  height: 4vmin !important;
  width: 55%;

  & .btn-slider {
    filter: drop-shadow(0 0 2px rgba(128, 128, 128, 0.664));
    width: 2.2vmin;
    height: 2.2vmin;

    &::before {
      left: -50%;
      top: -50%;
      position: absolute;
      content: "";
      height: 200%;
      width: 200%;
      z-index: -1;
      border-radius: 50%;
      filter: blur(1px);
      transition: opacity 0.5s ease;
      opacity: 0;
    }
  }
}

.tr-slider-enter-active,
.tr-slider-leave-active {
  transition: all 0.5s ease;
}
.tr-slider-enter,
.tr-slider-leave-to {
  opacity: 0;
}
.tr-slider-enter {
  transform: translateX(calc(var(--way) * 30px));
}
.tr-slider-leave-to {
  transform: translateX(calc(var(--way) * -30px));
}
</style>