<template>
  <div class="py-4">
    <div class="d-flex mb-4">
      <p
        class="
          text-m-title-1
          line-before
          font-weight-medium
          colorText--text
          p-relative
        "
      >
        {{ title }}
      </p>
    </div>
    <p class="text-m-subtitle-1 colorText--text">
      {{ subtitle }}
    </p>
    <div class="mt-6">
      <div
        class="d-flex justify-center align-center div-show-more"
        :style="`--path:url(${path})`"
      >
        <div
          class="
            c-pointer
            d-flex
            p-absolute
            rounded-circle
            white
            justify-center
            align-center
            font-weight-bold
          "
          @click="dialog = true"
        >
          <p>
            Узнать <br />
            больше
          </p>
        </div>
      </div>
    </div>
    <my-dialog
      :dialog="dialog"
      content-class="pa-2"
      bottom
      half
      rounded
      @end="dialog = false"
    >
      <div class="full-height scroll-hidden p-relative overflow-scroll">
        <div class="p-relative d-line-swap"></div>
        <div class="d-flex justify-end pr-2">
          <v-btn @click="dialog = false" icon large
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </div>
        <slot></slot>
      </div>
    </my-dialog>
  </div>
</template>

<script>
export default {
  components: {
    myDialog: () => import("../../../ui/myDialog.vue"),
  },
  props: {
    title: String,
    img: String,
    subtitle: String,
    left: {
      default: false,
      type: Boolean,
    },
  },
  data: () => ({
    dialog: false,
  }),
  computed: {
    darkPicture() {
      return this.$vuetify.theme.dark ? "Dark.jpg" : ".jpg";
    },
    path() {
      return "images/mobile" + this.img + this.darkPicture;
    },
  },
};
</script>

<style lang="scss" scoped>
.d-line-swap {
  height: 0.5vh;
  width: 60%;
  background-color: var(--v-colorText-base);
  left: 20%;
  border-radius: 1vh;
}
.line-before {
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: var(--v-colorText-base);
  }
}
.div-show-more {
  $size: 20vmin;
  will-change: transform;
  min-height: 100vmin;
  width: calc(100vmin - 16px);
  background-image: var(--path);
  background-size: 100%;
  background-position: center 30%;
  animation: border-img-anim 6s alternate infinite;
  opacity: 0.9;

  & > div {
    animation: scale-switch 1s ease alternate infinite;
    width: $size;
    height: $size;
    mix-blend-mode: screen;
    & > p {
      user-select: none;
      font-size: 4vmin;
      text-align: center;
      color: #000;
    }
  }
}

@keyframes scale-switch {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
}
</style>