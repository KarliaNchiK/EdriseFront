<template>
  <v-app>
    <v-fade-transition mode="out-in">
      <my-load-page v-if="!load" />
    </v-fade-transition>
    <v-fade-transition mode="out-in" v-if="!isMobil && needCanvas">
      <my-background-canvas
        class="main-canvas back-fixed"
        :alternate="canvasAlternate"
        ref="myCanvas"
      />
    </v-fade-transition>
    <background-mobile class="back-fixed mobile-back" v-if="isMobil" />
    <v-main class="div-main-page colorBackground scroll-hidden" id="mainContainer">
      <pcBlock class="appBar" @click="swTheme" v-if="!isMobil && load" />
      <mobileBlock class="appBar" v-else-if="load" />

      <Nuxt ref="page" />
    </v-main>
  </v-app>
</template>

<script>
import myLoadPage from "../components/loadPage.vue";
import sizeMix from "~/plugins/mixins/size.js";
export default {
  mixins: [sizeMix],
  components: {
    myBackgroundCanvas: () => import("~/components/desktop/canvas/index.vue"),
    pcBlock: () => import("~/components/desktop/header/index.vue"),
    mobileBlock: () => import("~/components/mobile/header/index.vue"),
    myLoadPage,
    backgroundMobile: () =>
      import("~/components/mobile/background/background.vue"),
  },
  data: () => ({
    load: false,
  }),
  computed: {
    canvasAlternate() {
      return this.$store.getters["general/canvas/alternate"];
    },
    needCanvas() {
      return this.$store.getters["general/canvas/canvas"];
    },
    isMobil() {
      return this.$store.getters["device/mobile"];
    },
    blockThreeVisible() {
      return this.$store.getters["visible/bv3"];
    },
  },
  methods: {
    swTheme() {
      this.$refs.myCanvas.switchTheme();
    },
    watchResize() {
      if (window.innerWidth <= 960) {
        this.$store.commit("device/set_resize", true);
      } else if (this.isMobil && window.innerWidth > 960) {
        this.$store.commit("device/set_resize", false);
      }
    },
    scrollEvent(e) {
      if (this.needCanvas && this.canvasAlternate) {
        this.$refs.myCanvas.ScrollEvent();
      }
      if (
        this.blockThreeVisible == false &&
        window.scrollY > window.innerHeight - 40
      ) {
        this.$store.commit("data/set_scroll", window.scrollY);
      }
    },
    mMove(e) {
      this.$store.commit("data/set_mPosition", {
        x: e.x,
        y: e.y,
      });
      if (!this.isMobil && this.needCanvas) {
        this.$refs.myCanvas.move();
      }
    },
  },
  mounted() {
    if (this.isMobil == false) {
      window.addEventListener("mousemove", this.mMove);
      window.addEventListener("resize", this.watchResize);
      window.addEventListener("scroll", this.scrollEvent);
      this.watchResize();
    }
    setTimeout(() => {
      this.load = true;
    }, 1000);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.watchResize);
    window.removeEventListener("scroll", this.scrollEvent);
    window.removeEventListener("mousemove", this.mMove);
  },
};
</script>

<style lang="scss" scoped>
.back-fixed {
  position: fixed;
  top: 0px;
  left: 0px;
}
@media (max-width: 960px) {
  .mobile-back {
    height: 100vh;
  }
  .div-main-page {
    padding: 0 8px !important;
    overflow-y: auto;
    height: 100vh;
  }
}
@media (min-width: 960px) {
  .main-canvas {
    z-index: 2;
    display: block;
  }
  .div-main-page {
    padding: 0 5vw !important;
  }
}
</style>