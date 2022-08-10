<template>
  <div
    class="card-image p-relative d-block rounded-xl elevation-2 full-size"
    :class="{ 'img-active': lSize == '100%' }"
    @mousemove="mMove"
    @click.left.once="fullColor"
  >
    <div
      class="circle-cursor p-absolute z-5 rounded-circle"
      :style="`--x: ${x}px; --y:${y}px; --size:${lSize}`"
    ></div>
    <img
      class="full-size img-grey p-absolute"
      :class="{ 'img-filters': !!!imgGrey }"
      :src="!!!imgGrey ? img : imgGrey"
      :draggable="false"
    />
    <img
      class="full-size img-color p-absolute"
      :draggable="false"
      :src="img"
      :style="`--circle:circle(${lSize} at ${x}px ${y}px); --size:${lSize}`"
    />
  </div>
</template>

<script>
export default {
  props: ["img", "imgGrey", "size", "mobile"],
  data: () => ({
    x: 0,
    y: 0,
    lSize: 0,
  }),
  methods: {
    fullColor() {
      if (!this.mobile) return;
      this.lSize = "100%";
    },
    mMove(e) {
      if (this.mobile) return;
      let rect = e.target.getBoundingClientRect();
      this.x = e.x - rect.left;
      this.y = e.y - rect.top;
    },
  },
  mounted() {
    this.lSize = this.size;
  },
};
</script>

<style lang="scss" scoped>
.card-image {
  overflow: hidden;
  cursor: none;
  & > img {
    object-fit: cover;
  }

  & > .img-filters {
    filter: grayscale(0.9) blur(2px);
  }
}

@media (max-width: 960px) {
  .card-image {
    & > div,
    & > img {
      transition: opacity, width, height, clip-path 1s ease;
    }
    & > .img-color {
      top: 0;
      left: 0;
      clip-path: circle(var(--size) at 50% 50%);
    }
    .img-color {
      opacity: 0;
    }
    &.img-active {
      .img-color {
        opacity: 1 !important;
      }
    }
  }
}
@media (min-width: 960px) {
  .card-image {
    & > .circle-cursor,
    & > .img-color {
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    & > .img-color {
      top: 0;
      left: 0;
      clip-path: var(--circle);
    }

    &:hover {
      & > .circle-cursor,
      & > .img-color {
        opacity: 1;
      }
    }

    & > .circle-cursor {
      $size: calc(var(--size) * 2);
      width: $size;
      height: $size;
      box-shadow: 0 0 8px black, inset 0 0 4px white;
      border: 1px grey solid;
      transform: translate(-50%, -50%);
      top: var(--y);
      left: var(--x);
      pointer-events: none;
    }
  }
}
</style>