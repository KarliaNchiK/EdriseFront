<template>
  <div class="p-relative div-m-d c-pointer d-flex flex-column d-block">
    <img :src="`images/lowSizeDocs/${name}`" alt="" class="img-docs" />
    <p class="text-m-subtitle-2 p-d-title white--text op-0 p-absolute">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["title", "name"],
};
</script>

<style lang="scss" scoped>
.div-m-d {
  &::after {
    transition: all 0.5s ease;
    left: 0;
    top: 0;
    opacity: 0;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  }

  &:hover::after,
  &:hover .p-d-title {
    opacity: 1 !important;
  }

  & .p-d-title {
    bottom: 0;
    z-index: 7;
    text-align: center;
  }
}

@media (min-width: 960px) {
  .img-docs {
    height: 100%;
  }
}
</style>