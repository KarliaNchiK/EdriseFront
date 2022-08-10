<template>
  <v-row no-gutters class="elevation-2 row-comps">
    <v-col cols="2" class="p-relative d-flex justify-center pa-2 full-height">
      <img :src="img" />
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="9" class="pl-16 pt-4">
      <p class="text-h4">
        {{ title }}
      </p>
      <p class="text-body-1 pt-4">
        {{ info }}
      </p>
    </v-col>
    <v-col cols="1" class="d-flex align-center">
      <div
        class="overflow-hidden p-relative div-arrow-r"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </div>
    </v-col></v-row
  >
</template>

<script>
export default {
  props: ["info", "title", "img", "visible"],
};
</script>

<style lang="scss" scoped>
.row-comps {
  height: 18%;
  transition: all 0.5s ease;

  & img {
    object-fit: contain;
    max-height: 100%;
    max-width: 100%;
  }

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.6);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:hover {
    z-index: 2;
    position: relative;
    transform: scale(1.05);

    &::before {
      opacity: 1;
    }

    & .div-arrow-r::before {
      inset: 0 0 0 0;
      width: 100%;
    }
  }
}

.div-arrow-r {
  border-radius: 50%;
  padding: 2px;
  & i {
    font-size: 3em;
    background: var(--v-colorBackground-base);
    border-radius: 50%;
  }

  &::before {
    will-change: animation;
    content: "";
    position: absolute;
    width: 40%;
    height: 100%;
    inset: 0px 30%;
    background: linear-gradient(
      45deg,
      var(--v-mainFirstColor-base),
      var(--v-mainSecondColor-base)
    );
    transition: all 0.5s ease;
    animation: animate-circle 4s infinite linear;
  }
}

@keyframes animate-circle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>