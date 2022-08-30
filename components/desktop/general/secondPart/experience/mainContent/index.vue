<template>
  <div class="p-relative full-height div-three-main d-flex align-center">
    <div
      class="full-height div-content flex-grow-1 pr-4"
      :style="`--way:${way}`"
    >
      <transition name="tr-slider" mode="out-in">
        <contentCard :key="activeBlock" v-bind="aboutMe[activeBlock]" />
      </transition>
    </div>
    <div
      class="
        flex-shrink-0
        btns-slider
        d-flex
        justify-space-between
        flex-column
        rounded-xl
        p-relative
      "
      :class="[dark ? 'darkTheme' : 'lightTheme']"
    >
      <div
        v-for="n in aboutMe.length"
        :key="'icon_' + n"
        class="
          btn-slider
          c-pointer
          full-size
          d-flex
          align-center
          justify-center
          z-5
        "
        @click="go(n)"
      >
        <v-icon :class="{ 'b-op-1': activeBlock == n - 1 }">
          {{ aboutMe[n - 1].icon }}
        </v-icon>
      </div>
      <div
        class="switch-backgr p-absolute rounded-xl full-width"
        :style="{
          transform: `translateY(${100 * activeBlock}%)`,
          backgroundColor: `hsla(${switchBack}, 100%, 70%)`,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import { aboutMe } from "~/static/const/const.js";
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
    switchBack() {
      let a = this.dark ? 10 : 320;
      return a + 10 * this.activeBlock;
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
  opacity: 1 !important;
  color: white !important;
  transform: scale(1.2);
}
.div-three-main {
  .lightTheme > .btn-slider {
    @include m.my-theme-colors-i(10, 330);
  }

  .darkTheme > .btn-slider {
    @include m.my-theme-colors-i(10, 10);
  }

  & .btns-slider {
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(128, 128, 128, 0.5);
    box-shadow: inset 0 0 3px grey;
    height: 60%;
    width: 2.5vw;

    .switch-backgr {
      left: 0;
      top: 0;
      height: calc(100% / 6);
      transition-property: transform, background-color;
      transition: 0.5s cubic-bezier(0.17, -0.62, 0.67, 1.29);
      border: 1px solid rgba(177, 177, 177, 0.671);
    }

    .btn-slider {
      i {
        opacity: 0.6;
        transition-property: color, transform;
        transition: 0.5s ease;
        font-size: 1.3vw;
      }
    }
  }
  & > .div-content {
    transition: top 0.4s ease-in-out;
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
  transform: translateY(calc(var(--way) * 30px));
}
.tr-slider-leave-to {
  transform: translateY(calc(var(--way) * -30px));
}
</style>