<template>
  <div
    class="row-comps p-relative c-pointer"
    @click="
      $router.push({
        path: '/project',
        query: {
          comp: to,
        },
      })
    "
    @mousemove="mMove"
  >
    <div class="allow-scale pa-4">
      <p class="text-m-title-1 mb-4">
        {{ title }}
      </p>
      <p class="text-m-subtitle-2">
        {{ info }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info", "title", "img", "to"],
  methods: {
    mMove(e) {},
  },
};
</script>

<style lang="scss" scoped>
.row-comps {
  height: 10vh !important;
  width: 25vw;
  z-index: 3;

  .allow-scale {
    // box-shadow: 2px 3px 6px rgba(187, 0, 0, 0.25),
    //   -1px -1px 3px rgba(187, 0, 0, 0.15),
    //   inset 1px 2px 4px rgba(187, 0, 0, 0.15),
    //   inset -2px -1px 3px rgba(61, 0, 0, 0.15);
    // box-shadow: 2px 3px 6px rgba(187, 106, 0, 0.25),
    //   -1px -1px 3px rgba(187, 100, 0, 0.15),
    //   inset 1px 2px 4px rgba(187, 100, 0, 0.15),
    //   inset -2px -1px 3px rgba(61, 35, 0, 0.15);
    transition: all 0.5s ease;
    border-radius: 8px;
    will-change: transform;

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
      border-radius: 8px;
    }
  }

  & img {
    object-fit: contain;
    max-height: 100%;
    max-width: 100%;
  }

  &:hover {
    .allow-scale {
      // box-shadow: 8px 10px 16px rgba(187, 106, 0, 0.25),
      // -1px -1px 3px rgba(187, 100, 0, 0.15),
      // inset 1px 2px 4px rgba(187, 100, 0, 0.15),
      // inset -2px -1px 3px rgba(61, 35, 0, 0.15);
      // box-shadow: 8px 10px 16px rgba(187, 0, 0, 0.25),
      // -1px -1px 3px rgba(187, 0, 0, 0.15),
      //   inset 1px 2px 4px rgba(187, 0, 0, 0.15),
      //   inset -2px -1px 3px rgba(61, 0, 0, 0.15);
      transform: scale(1.1);

      &::before {
        opacity: 1;
      }
    }
  }
}
</style>