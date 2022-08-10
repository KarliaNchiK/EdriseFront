<template>
  <div class="d-flex flex-wrap p-relative">
    <div
      class="div-img-container d-block p-relative pa-1"
      v-for="(img, n) in imgs"
      :key="img.src"
    >
      <img
        :class="[`triangle-${n}`, { 'active-container': n == active || n == active2 }]"
        :src="lowSize + '/pictures/' + img.src + '.jpg'"
        alt=""
        class="full-size elevation-3"
      />
    </div>
  </div>
</template>


<script>
import { imgs } from "~/plugins/const.js";
export default {
  data: () => ({
    imgs: [],
    active: -1,
    active2: -1,
    setTim: null,
    velocity: 2000,
  }),
  computed: {
    lowSize() {
      return this.mdAndUp ? "/pc" : "/mobile";
    },
  },
  methods: {
    switchActive() {
      this.setTim = setTimeout(() => {
        this.active++;
        this.active2 = Math.round(Math.random() * 5);
        this.active %= 6;
        this.velocity = 300 + 1500 * Math.random();
        this.switchActive();
      }, this.velocity);
    },
  },
  created() {
    this.imgs = imgs;
    this.imgs.splice(5, 0, {
      src: "sunset",
      color: "#fff",
    });
  },
  mounted() {
    this.switchActive();
  },
};
</script>

<style lang="scss" scoped>
.triangle {
  $circle: 0 100% 100%, 1 0 100%, 2 100% 0, 3 0 0, 4 100% 50%, 5 0 50%;
  @each $i, $x, $y in $circle {
    &-#{$i} {
      clip-path: circle(50% at $x $y);
    }
  }
}

.active-container {
  clip-path: circle(71% at 50% 50%) !important;
  z-index: 5;

  &-up {
    transform: translateX(50%);
  }
  &-dowm {
    transform: translateX(-50%);
  }
}
.div-img-container {
  width: 50%;
  height: calc(100% / 3);
  padding: 4px;

  & > img {
    transition: transform 0.5s, clip-path 0.5s;
    //   mask-image: radial-gradient(#fff 60%, transparent);
    object-fit: cover;
  }
}
</style>