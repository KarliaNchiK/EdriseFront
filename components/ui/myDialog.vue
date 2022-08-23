<template>
  <div
    class="
      m-dialog
      elevation-4
      m-dialog-b
      height-trans
      full-size
      overflow-hidden
    "
    :class="[contentClass, { 'm-rounded': rounded }]"
    v-if="active"
    ref="dContent"
    :style="`--height:${100 - height}%; --round:${
      20 - (20 * height) / 100
    }vmin;`"
  >
    <slot></slot>
  </div>
</template>

<script>
import sizeMix from "~/plugins/mixins/size.js";
export default {
  mixins: [sizeMix],
  props: {
    dialog: Boolean,
    bottom: {
      default: false,
      type: Boolean,
    },
    half: {
      default: false,
      type: Boolean,
    },
    rounded: {
      default: false,
      type: Boolean,
    },
    contentClass: {
      default: "",
      type: String,
    },
  },
  data: () => ({
    active: false,
    y: 0,
    sdvig: 0,
    gSdvig: 0,
    stop: false,
    inScroll: false,
    setTim: null,
    scrollTop: 0,
  }),
  watch: {
    dialog(n) {
      clearTimeout(this.setTim);
      if (n) {
        this.main.style.overflowY = "hidden";
        this.active = true;
        this.stop = false;
        this.$nextTick().then(() => {
          this.setTim = setTimeout(() => {
            this.$refs.dContent.classList.add("height-full");
            this.addEvents();
          }, 100);
        });

        return;
      }
      this.main.style.overflowY = "";
      this.$refs.dContent.classList.remove("height-full");
      this.setTim = setTimeout(() => {
        this.removeEvents();
        this.gSdvig = 0;
        this.sdvig = 0;
        this.active = false;
      }, 500);
    },
  },
  computed: {
    height() {
      return this.half ? 50 + this.sdvig + this.gSdvig : 100;
    },
    childBlock() {
      return this.active ? this.$refs.dContent.firstChild : null;
    },
    main() {
      return document.getElementById("mainContainer");
    },
  },
  methods: {
    addEvents() {
      this.$refs.dContent.addEventListener("touchstart", this.tStart);
      this.$refs.dContent.addEventListener("touchmove", this.tMove);
      this.$refs.dContent.addEventListener("touchend", this.tEnd);
      window.addEventListener("touchstart", this.wTStart);
    },
    removeEvents() {
      window.removeEventListener("touchstart", this.wTStart);
      this.$refs.dContent.removeEventListener("touchstart", this.tStart);
      this.$refs.dContent.removeEventListener("touchmove", this.tMove);
      this.$refs.dContent.removeEventListener("touchend", this.tEnd);
    },
    wTStart(e) {
      this.tClose();
    },
    tStart(e) {
      e.stopPropagation();
      this.$refs.dContent.classList.remove("height-trans");
      this.y = e.targetTouches[0].clientY;
      if (this.childBlock.scrollTop == 0) {
        this.stop = false;
      }
    },
    tMove(e) {
      e.stopPropagation();

      if (this.stop || !this.half) {
        if (e.cancelable) {
          e.preventDefault();
        }
        return;
      }
      let sdvig = this.y - e.targetTouches[0].clientY;
      if (this.height < 100 || (this.childBlock.scrollTop == 0 && sdvig < 0)) {
        if (e.cancelable) {
          e.preventDefault();
        }
        this.sdvig = (sdvig / window.innerHeight) * 200;
        if (Math.abs(this.sdvig) > 5) {
          if (this.gSdvig == 0 && this.sdvig < -5) {
            this.tClose();
            return;
          }
          this.stop = true;
          this.$refs.dContent.classList.add("height-trans");
          this.gSdvig = 50 - this.gSdvig;
          this.sdvig = 0;
          this.y = e.targetTouches[0].clientY;
        }
      } else if (!this.stop) {
        this.stop = true;
      }
    },
    tEnd(e) {
      e.stopPropagation();
      this.stop = false;
      this.$refs.dContent.classList.add("height-trans");
      this.sdvig = 0;
    },
    tClose() {
      if (this.active) {
        this.stop = true;
        this.$refs.dContent.classList.add("height-trans");
        this.$emit("end");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.height-trans {
  transition: transform 0.5s ease !important;
}
.height-full {
  transform: translateY(var(--height)) !important;
}
.m-rounded {
  border-radius: var(--round) var(--round) 0 0;
}
.m-dialog {
  position: fixed;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  background-color: var(--v-colorBackground-base);
  border-top: 1px solid var(--v-mainFirstColor-base) !important;
  will-change: transform;
  z-index: 998;
}
</style>