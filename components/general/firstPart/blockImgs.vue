<template>
  <div
    class="p-relative div-first-imgs d-flex justify-space-between scroll-custom"
  >
    <div
      v-for="img in imgs"
      :key="img.src"
      class="div-first-block-img p-relative c-pointer pa-2"
      :style="`--color:${img.color};`"
    >
      <img :src="'/pc/pictures/' + img.src + '.jpg'" />
    </div>
  </div>
</template>


<script>
import { imgs } from "~/plugins/const.js";
export default {
  data: () => ({
    imgs: [],
  }),
  created() {
    this.imgs = imgs;
  },
};
</script>

<style lang="scss" scoped>
.div-first-imgs {
  user-select: none;

  & .div-first-block-img {
    transform-style: preserve-3d;
    max-width: 20%;

    & > img {
      transform: rotateX(70deg) rotateZ(-60deg) translate3d(-0px, 0px, 70px);
      box-shadow: -80px 60px 15px 5px var(--color);

      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          border-radius: calc((#{$i} - 1) * 7%)
            calc(35% - (#{$i} - 1) * 5%) /
            calc(25% - (#{$i} - 1) * 4%)
            calc((#{$i}) * 9%);
        }
      }

      max-height: 100%;
      max-width: 100%;
      will-change: transform, box-shadow;
      object-fit: cover;
      transition: all 0.4s;
      transform-style: preserve-3d;
    }

    &:hover {
      z-index: 8;
      & > img {
        transform: rotateX(0deg) rotateZ(0deg) translate3d(0px, 0px, 0px)
          scale(1.1);
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
      }
    }
  }
}
</style>