<template>
  <div class="d-flex justify-space-between align-start appbar">
    <div
      v-for="(text, n) in texts"
      :key="text"
      class="
        p-relative
        overflow-hidden
        c-pointer
        d-flex
        align-center
        justify-center
        rounded-xl
      "
      @click="goToId(n)"
    >
      <p class="text-naw-content pa-2 rounded-xl" v-html="text"></p>
    </div>
    <p class="pt-2 text-naw-content ml-12vw">г. Казань</p>
    <div class="p-absolute bl-sw-t z-5">
      <my-switch-theme @click="swTheme" />
    </div>
  </div>
</template>

<script>
import { appBarText } from "~/static/const/const.js";
export default {
  components: {
    mySwitchTheme: () => import("~/components/ui/mySwitchTheme.vue"),
  },
  data: () => ({
    texts: [],
  }),
  methods: {
    swTheme() {
      this.$emit("click");
    },
    goToId(n) {
      console.log(window.innerHeight * (n + 1))
      window.scrollTo({
        top: window.innerHeight * (n + 1),
        behavior: "instant",
      });
    },
  },
  created() {
    this.texts = appBarText;
  },
};
</script>

<style lang="scss" scoped>
.appbar {
  padding-top: 2.5vh;

  & > div {
    padding: 3px;
  }

  & > div:not(:last-child) {
    &::before,
    &::after {
      opacity: 0;
      transition: opacity 0.5s ease;
      content: "";
      position: absolute;
      height: 370%;
      width: 105%;
      z-index: 2;
      animation: animate 4s linear infinite;
      animation-play-state: paused;
    }

    &::before {
      background: conic-gradient(
        transparent,
        transparent,
        transparent,
        var(--v-mainSecondColor-base)
      );
    }

    &::after {
      background: conic-gradient(
        transparent,
        transparent,
        transparent,
        var(--v-mainFirstColor-base)
      );
      animation-delay: -2s;
    }

    &:hover::before,
    &:hover::after {
      opacity: 1;
      animation-play-state: running;
    }

    & > p {
      transition: background-color 0.05s ease 1s;
      z-index: 4;
    }
  }

  & > div:hover > p {
    transition-delay: 0s;
    background-color: var(--v-colorBackground-base);
  }

  .ml-12vw {
    margin-left: 12vw;
  }
}
.bl-sw-t {
  width: 4vw;
  right: 0;
  top: 10vh;
}

@keyframes animate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>