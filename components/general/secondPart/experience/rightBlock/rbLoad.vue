<template>
  <div
    ref="contArrow"
    @mouseup="mUp"
    @mouseleave="mUp"
    class="div-m-load p-relative full-size"
  >
    <div class="p-absolute d-r-bg d-flex full-size justify-center">
      <div
        class="
          d-flex
          justify-center
          align-center
          div-r-arrow
          p-absolute
          rounded-circle
          overflow-hidden
          c-pointer
          z-5
        "
        :style="`--sdvig:${100 - gSdvig}%`"
        @mousedown="mDown"
      >
        <my-arrow />
        <p class="p-absolute text-m-subtitle-1">Вверх</p>
      </div>
    </div>
    <div
      class="
        rounded-xl
        p-absolute
        full-size
        div-r-main
        d-flex
        align-center
        c-pointer
        justify-center
        text-m-h4
      "
      :style="`--sdvig:${gSdvig}%`"
      ref="rightBg"
    >
      <p>Загрузка {{ 100 - gSdvig }}%</p>
    </div>
  </div>
</template>


<script>
import myArrow from "~/components/mySvg/myArrow.vue";
export default {
  components: {
    myArrow,
  },
  data: () => ({
    sdvig: 100,
    lSdvig: 0,
    down: false,
    y: -1,
  }),
  computed: {
    gSdvig() {
      let s = this.sdvig - this.lSdvig;
      if (s <= 1) {
        this.$emit("onload");
      }
      return s <= 0 ? 0 : s;
    },
  },
  methods: {
    mDown(e) {
      if ((this.y = -1)) {
        this.$refs.rightBg.addEventListener("mousedown", this.mDown);
      }
      this.down = true;
      this.$refs.contArrow.addEventListener("mousemove", this.mMove);
      this.y = e.y;
    },
    mMove(e) {
      if (!this.down || this.gSdvig <= 1) {
        return;
      }

      let razn = this.y - e.y;
      if (razn > 0) {
        this.lSdvig = Math.round(
          (razn / this.$refs.contArrow.clientHeight) * 100
        );
      }
    },
    mUp() {
      this.$refs.contArrow.removeEventListener("mousemove", this.mMove);
      this.sdvig -= this.lSdvig;
      this.lSdvig = 0;
      this.down = false;
    },
  },
  beforeDestroy() {
    this.$refs.rightBg.removeEventListener("mousedown", this.mDown);
    this.$refs.contArrow.removeEventListener("mousemove", this.mMove);
  },
};
</script>

<style lang="scss">
.transform-rz90 {
  transform: rotateZ(90deg);
  transform-origin: center;
  transform-box: fill-box;
}
.div-m-load {
  &:hover .div-r-arrow {
    &::before {
      animation-play-state: running !important;
    }
    & svg path {
      stroke-dashoffset: 0;
    }

    & p {
      opacity: 0;
      transition-delay: 0s !important;
    }
  }

  & .d-r-bg {
    user-select: none;
    & .div-r-arrow {
      box-shadow: 0 0 4px rgb(44, 44, 44);

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to right,
          var(--v-mainSecondColor-base),
          var(--v-mainFirstColor-base)
        );
        animation: div-rotate 5s linear infinite;
        animation-play-state: paused;
      }

      & p {
        transition: opacity 0.5s ease 1s;
        color: white;
      }

      & svg {
        border-radius: 50%;
      }
    }
  }

  & .div-r-main {
    user-select: none;

    & > p {
      color: white;
    }
  }
}

@media (min-width: 960px) {
  @keyframes div-rotate {
    from {
      transform: rotateZ(0);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
  .div-m-load {
    & .d-r-bg {
      & .div-r-arrow {
        aspect-ratio: 1;
        width: 50%;
        bottom: var(--sdvig);
        transform: translateY(calc(var(--sdvig) / 2));
      }
    }

    & .div-r-main {
      clip-path: polygon(0 100%, 100% 100%, 100% var(--sdvig), 0 var(--sdvig));
      background: linear-gradient(
        to top,
        var(--v-mainSecondColor-base),
        var(--v-mainFirstColor-base)
      );

      & > p {
        writing-mode: vertical-rl;
      }
    }
  }
}
</style>