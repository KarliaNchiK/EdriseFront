<template>
  <div class="div-m-load p-relative full-size pl-1">
    <div class="p-absolute d-r-bg d-flex full-size align-center">
      <div
        @click.left.once="startLoad"
        class="
          d-flex
          justify-center
          align-center
          div-r-arrow
          p-absolute
          rounded-circle
          overflow-hidden
          z-5
        "
        :style="`--sdvig:${100 - gSdvig}%`"
      >
        <p class="p-absolute p-up">Нажми</p>
      </div>
    </div>
    <div
      class="p-absolute full-size div-r-main d-flex align-center justify-center"
      :style="`--sdvig:${100 - gSdvig}%`"
    >
      <p>Загрузка {{ 100 - gSdvig }}%</p>
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({
    sdvig: 100,
    lSdvig: 0,
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
    startLoad() {
      setInterval(() => {
        this.sdvig -= 1;
      }, 20);
    },
  },
};
</script>

<style lang="scss">
.div-m-load {
  user-select: none;
  & .d-r-bg {
    & .div-r-arrow {
      box-shadow: 0 0 4px rgb(44, 44, 44);
      width: 18vmin;
      height: 18vmin;
      left: var(--sdvig);
      transform: translateX(calc(var(--sdvig) / -2));

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
      }

      .p-up {
        color: white;
        font-size: 3vmin;
      }
    }
  }

  & .div-r-main {
    background: linear-gradient(
      to right,
      var(--v-mainSecondColor-base),
      var(--v-mainFirstColor-base)
    );
    clip-path: polygon(var(--sdvig) 0, 0 0, 0 100%, var(--sdvig) 100%);
    & > p {
      font-size: 5vh;
      color: white;
    }
  }
}
</style>