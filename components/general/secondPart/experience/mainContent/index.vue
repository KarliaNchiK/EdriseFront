<template>
  <div
    class="p-relative full-height div-three-main d-flex align-center"
    :class="[dark ? 'darkTheme' : 'lightTheme']"
  >
    <div
      class="full-height div-content flex-grow-1 pr-4"
      :style="`--way:${way}`"
    >
      <transition name="tr-slider" mode="out-in">
        <contentCard :key="activeBlock" v-bind="aboutMe[activeBlock]" />
      </transition>
    </div>
    <div class="btns-slider d-flex justify-space-between flex-column pr-4">
      <div
        v-for="n in aboutMe.length"
        :key="'icon_' + n"
        class="btn-slider rounded-circle p-relative c-pointer"
        :class="{ 'b-op-1': activeBlock == n - 1 }"
        @click="go(n)"
      ></div>
    </div>
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
.div-three-main {
  &.lightTheme .btns-slider {
    @include m.my-theme-colors(15, 300);
  }

  &.darkTheme .btns-slider {
    @include m.my-theme-colors(5, 10);
  }

  & .btns-slider {
    & .btn-slider {
      filter: drop-shadow(0 0 2px rgba(128, 128, 128, 0.664));

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

      &:hover::before {
        opacity: 0.7;
      }
    }
  }
  & > .div-content {
    left: 0;
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
@media (min-width: 960px) {
  .div-three-main {
    & > .btns-slider {
      & > .btn-slider {
        width: 1.4vmin;
        height: 1.4vmin;
      }
      height: 35%;
    }
  }

  .tr-slider-enter {
    transform: translateY(calc(var(--way) * 30px));
  }
  .tr-slider-leave-to {
    transform: translateY(calc(var(--way) * -30px));
  }
}
</style>