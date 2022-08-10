<template>
  <div class="d-my-item d-flex py-1 px-4 mt-2 align-center">
    <div
      class="d-bg p-absolute full-size rounded-xl"
      :class="!!warn ? 'b-s-r' : 'b-s-g'"
    ></div>
    <v-icon :color="color" class="pr-1 pr-lg-2 m-icon" v-if="!!icon"
      >mdi-{{ icon }}</v-icon
    >
    <p
      v-else
      class="text-uppercase pr-1 pr-lg-2 font-weight-medium"
      :class="`${color}--text`"
    >
      {{ title[0] }}
    </p>
    <p class="grey--text text--lighten-3 text-m-title-2">{{ title }}</p>
    <p class="p-help p-absolute px-2 py-1" v-if="warn">
      <v-icon>mdi-magnify</v-icon> Мало опыта
    </p>
  </div>
</template>

<script>
export default {
  props: ["title", "color", "icon", "warn"],
};
</script>


<style lang="scss" scoped>
.d-my-item {
  will-change: transform;
  position: relative;
  transform-origin: top center;
  transition: transform 0.5s ease;
  transform: perspective(800px) rotateY(25deg) scale(0.9) rotateX(10deg);
  cursor: pointer;

  &:hover {
    transform: perspective(800px) rotateY(-15deg) rotateX(10deg) scale(1);

    & .d-bg,
    & .p-help {
      opacity: 1;
    }

    & .d-bg {
      filter: blur(0px) hue-rotate(20deg);
    }
  }

  & .d-bg {
    transition: 0.5s ease all;
    background: linear-gradient(
      325deg,
      var(--v-mainSecondColor-base),
      var(--v-mainFirstColor-base)
    );
    z-index: 3;
    top: 0;
    left: 0;
    filter: blur(2px);
    opacity: 0.7;
  }

  & p,
  & i {
    position: relative;
    z-index: 4;
  }

  & .p-help {
    margin-top: -4vh;
    pointer-events: none;
    top: 0;
    left: 0;
    font-size: 0.9em;
    opacity: 0;
    transition: opacity 0.5s ease;
    white-space: nowrap;
    color: white;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 24px;
      background: linear-gradient(
        325deg,
        var(--v-mainSecondColor-base),
        var(--v-mainFirstColor-base)
      );
      border: 1px solid grey;
      z-index: -1;
    }

    i {
      color: white;
    }
  }
}

.b-s-r {
  border: 2px solid orange;
  box-shadow: 2px 0 7px orange, inset 0 0 3px black;
}
.b-s-g {
  box-shadow: 2px 0 7px green, inset 0 0 3px black;
}
</style>