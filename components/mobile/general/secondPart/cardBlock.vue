<template>
  <div class="py-4">
    <div class="d-flex flex-column align-start">
      <div>
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
      <div>
        <p class="text-m-subtitle-1 colorText--text pt-4">
          {{ subtitle }}
        </p>
      </div>
    </div>
    <div class="flex-grow-1 pt-6 full-vmin">
      <div class="p-relative full-size d-flex justify-center">
        <div
          class="
            d-flex
            justify-center
            align-center
            pa-4
            z-5
            full-size
            p-relative
            transparent
            div-show-more
          "
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
              z-5
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
        <!-- <img :src="path" class="d-c-i-1" /> -->
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
        <div
          class="
            p-absolute
            full-width
            d-flex
            align-center
            justify-center
            d-line-swap
          "
        >
          <div class="line-swap"></div>
        </div>
        <div class="d-flex justify-end pa-2">
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
.full-vmin {
  min-height: 100vmin;
}
.d-line-swap {
  height: 0.5vh;

  & > .line-swap {
    width: 60%;
    height: 100%;
    background-color: var(--v-colorText-base);

    border-radius: 1vh;
  }
}
.line-before {
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: var(--v-colorText-base);
  }
}
.div-show-more {
  $size: 20vmin;
  will-change: animation;
  min-height: 100vmin;
  width: calc(100vmin - 16px);
  background-image: var(--path);
  background-size: 100%;
  background-position: center 30%;
  animation: border-img-anim 6s infinite;
  animation-direction: alternate;
  opacity: 0.9;

  & > div {
    animation: scale-switch 1s ease infinite;
    animation-direction: alternate;
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

@keyframes border-img-anim {
  0% {
    border-radius: 20% 30% / 40% 5%;
  }
  100% {
    border-radius: 50% 40% / 5% 35%;
  }
}
</style>