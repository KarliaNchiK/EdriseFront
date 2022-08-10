<template>
  <div
    class="p-relative full-size d-flex flex-column align-center justify-center"
  >
    <div class="p-absolute icon-center">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon :color="color1" v-bind="attrs" v-on="on">{{ icon }}</v-icon>
        </template>
        <p>{{ text }}</p>
      </v-tooltip>
    </div>
    <svg
      height="100%"
      width="100%"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <defs>
        <linearGradient
          :id="`circleGradient${n}`"
          x1="20%"
          y1="0%"
          x2="50%"
          y2="100%"
        >
          <stop offset="0%" :stop-color="color1" />
          <stop offset="100%" :stop-color="color2" />
        </linearGradient>
      </defs>
      <circle
        r="20"
        :stroke="`url(#circleGradient${n})`"
        stroke-width="3"
        cx="20"
        cy="20"
        stroke-dasharray="130"
        :style="`--value:${130 - value * 1.3}; --delay:${n}s`"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: ["value", "color1", "color2", "icon", "size", "text", "n"],
};
</script>

<style lang="scss" scoped>
.icon-center i {
  font-size: 8vmin;
}
svg {
  overflow: visible;

  & circle {
    stroke-dashoffset: 130;
    animation: fill-circle 2s var(--delay) ease 1 forwards;
    transform: rotateZ(-90deg);
    transform-origin: center;
    transform-box: fill-box;
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));
  }
}

@keyframes fill-circle {
  from {
    stroke-dashoffset: 130;
  }
  to {
    stroke-dashoffset: var(--value);
  }
}
</style>