<template>
  <div :class="[dark ? 'darkTheme' : 'lightTheme']" :style="`--way:${way}`">
    <div
      class="
        btns-slider
        d-flex
        justify-space-between
        mb-4
        rounded-xl
        p-relative
      "
    >
      <div
        v-for="n in aboutMe.length"
        :key="'icon_' + n"
        class="btn-slider rounded-circle p-relative c-pointer full-size"
        :class="{ 'b-op-1': activeBlock == n - 1 }"
        @click="go(n)"
      ></div>
    </div>
    <transition name="tr-slider" mode="out-in">
      <contentCard :key="activeBlock" v-bind="aboutMe[activeBlock]" />
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

.b-op-1 {
  background: red;
  transform: scale(2) translateY(-25%);
}
.lightTheme .btns-slider {
  @include m.my-theme-colors(15, 300);
}

.darkTheme .btns-slider {
  @include m.my-theme-colors(5, 10);
}

.btns-slider {
  height: 4vmin !important;
  background: rgba(255, 255, 255, 0.753);
  border: 1px solid grey;
  padding: 20px;

  & .btn-slider {
    transition: transform 0.5s ease;
    filter: drop-shadow(0 0 2px rgba(128, 128, 128, 0.664));
    width: 2.2vmin;
    height: 2.2vmin;
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