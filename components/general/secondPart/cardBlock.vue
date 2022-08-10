<template>
  <div class="d-flex flex-column py-8 px-2 px-1">
    <p class="text-m-title-1 font-weight-medium colorText--text">
      {{ title }}
    </p>
    <div class="d-flex flex-grow-1 pt-6">
      <div class="col-4 div-img-container" :class="{ 'order-1': !left }">
        <div class="p-relative">
          <img :src="path" class="d-c-i-1 d-c-i-1-b" />
          <img :src="path" class="d-c-i-1 d-c-i-1-a" />
        </div>
      </div>
      <div
        class="p-relative flex-grow-1 slot-container"
        :class="left ? 'pl-8' : 'pr-8'"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    img: String,
    left: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    darkPicture() {
      return this.$vuetify.theme.dark ? "Dark.jpg" : ".jpg";
    },
    path() {
      return "/pc" + this.img + this.darkPicture;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "~/assets/mixins.scss" as m;

.div-img-container {
  & > div {
    @include m.block-angel(
      25vmin,
      6px,
      var(--v-mainFirstColor-base),
      24px,
      0.6
    );
    width: 100%;
    max-height: 100%;
  }

  .d-c-i-1 {
    will-change: animation;
    animation: border-img-anim 6s infinite;
    object-fit: cover;
    max-height: 100%;
    top: 0px;
    left: 0px;
  }

  .d-c-i-1-b {
    opacity: 0.3;
    position: absolute;
    animation-direction: alternate-reverse;
    padding: 24px 0 0 24px;
    width: calc(100% - 48px);
  }

  .d-c-i-1-a {
    width: 100%;
    animation-direction: alternate;
    opacity: 0.9;
  }
}
.slot-container {
  & > div {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
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